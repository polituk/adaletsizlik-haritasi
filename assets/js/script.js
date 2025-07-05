// Main application script
document.addEventListener('DOMContentLoaded', function() {
    const map = document.getElementById('turkey-map');
    const detailsPanel = document.getElementById('province-details');
    const statsPanel = document.getElementById('population-stats');
    const legendTitle = document.getElementById('legend-title');
    const legendItems = document.getElementById('legend-items');
    let selectedProvince = null;
    let currentMode = 'party'; // 'party' or 'status'

    // Create SVG map from real Turkey map data
    function createMap() {
        map.innerHTML = turkeyMapSVG; // Use the real Turkey map SVG
        
        // Add event listeners and styling to provinces
        const provinces = map.querySelectorAll('g[id]');
        
        provinces.forEach(provinceElement => {
            const provinceId = provinceElement.id;
            const data = provincesData[provinceId];
            
            if (data) {
                // Look for either path or rect elements
                const shapeElement = provinceElement.querySelector('path') || provinceElement.querySelector('rect');
                if (shapeElement) {
                    // Apply styling
                    shapeElement.setAttribute('class', `province ${data.party} status-${data.status}`);
                    shapeElement.setAttribute('data-province', provinceId);
                    
                    // Add click event
                    shapeElement.addEventListener('click', () => selectProvince(provinceId));
                    
                    // Add hover effect
                    shapeElement.addEventListener('mouseenter', function() {
                        this.style.strokeWidth = '2';
                        this.style.opacity = '0.8';
                    });
                    
                    shapeElement.addEventListener('mouseleave', function() {
                        if (!this.classList.contains('selected')) {
                            this.style.strokeWidth = '1';
                            this.style.opacity = '1';
                        }
                    });
                }
            } else {
                console.log(`No data found for province ID: ${provinceId}`);
            }
        });
        
        // Apply initial colors
        applyMapColors();
        
        // Add click handler for empty space to reset selection
        addEmptySpaceClickHandler();
    }

    // Add click handler to reset selection when clicking on empty space
    function addEmptySpaceClickHandler() {
        map.addEventListener('click', function(event) {
            // Check if the click was on the map container but not on a province
            if (event.target === map || (event.target.tagName === 'svg' && !event.target.hasAttribute('data-province'))) {
                resetSelection();
            }
        });
        
        // Also add handler to the SVG element itself
        const svgElement = map.querySelector('svg');
        if (svgElement) {
            svgElement.addEventListener('click', function(event) {
                // Only reset if clicking directly on the SVG background, not on province elements
                if (event.target === this || event.target.tagName === 'g' && !event.target.querySelector('[data-province]')) {
                    resetSelection();
                }
            });
        }
    }

    // Reset selection and show default view
    function resetSelection() {
        // Remove previous selection
        if (selectedProvince) {
            const prevElement = map.querySelector(`[data-province="${selectedProvince}"]`);
            if (prevElement) {
                prevElement.classList.remove('selected');
                prevElement.style.strokeWidth = '1';
                prevElement.style.stroke = '#fff'; // Reset stroke color to default
                prevElement.style.opacity = '1';
            }
        }
        
        selectedProvince = null;
        showDefaultDetailsView();
    }

    // Show default details view
    function showDefaultDetailsView() {
        detailsPanel.innerHTML = `
            <h2>İl Seçiniz</h2>
            <p>Haritadan bir il seçerek detayları görüntüleyebilirsiniz.</p>
        `;
    }

    // Apply colors based on current mode
    function applyMapColors() {
        const provinces = map.querySelectorAll('[data-province]');
        
        provinces.forEach(element => {
            const provinceId = element.getAttribute('data-province');
            const data = provincesData[provinceId];
            
            if (data) {
                let color;
                if (currentMode === 'party') {
                    color = partyInfo[data.party]?.color || '#ecf0f1';
                } else {
                    color = statusInfo[data.status]?.color || '#ecf0f1';
                }
                
                // Use white strokes for all provinces in both modes
                element.style.stroke = '#fff';
                element.style.strokeWidth = '1';
                element.style.strokeDasharray = 'none';
                element.style.setProperty('fill', color, 'important');
            }
        });
    }
    
    // Generate legend content based on current mode
    function updateLegend() {
        if (currentMode === 'party') {
            legendTitle.textContent = 'Parti Renkleri';
            let legendHTML = '';
            Object.keys(partyInfo).forEach(partyKey => {
                const party = partyInfo[partyKey];
                legendHTML += `
                    <div class="legend-item">
                        <div class="color-box" style="background-color: ${party.color};"></div>
                        <span>${party.name}</span>
                    </div>
                `;
            });
            legendItems.innerHTML = legendHTML;
        } else {
            legendTitle.textContent = 'Durum Renkleri';
            let legendHTML = '';
            Object.keys(statusInfo).forEach(statusKey => {
                const status = statusInfo[statusKey];
                legendHTML += `
                    <div class="legend-item">
                        <div class="color-box" style="background-color: ${status.color};"></div>
                        <span>${status.name}</span>
                    </div>
                `;
            });
            legendItems.innerHTML = legendHTML;
        }
    }

    // Switch between party and status modes
    function switchMode(mode) {
        currentMode = mode;
        
        // Update tab buttons
        document.querySelectorAll('.tab-button').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-tab="${mode}"]`).classList.add('active');
        
        // Update map colors and legend
        applyMapColors();
        updateLegend();
    }

    // Select and display province details
    function selectProvince(provinceId) {
        // Remove previous selection
        if (selectedProvince) {
            const prevElement = map.querySelector(`[data-province="${selectedProvince}"]`);
            if (prevElement) {
                prevElement.classList.remove('selected');
                prevElement.style.strokeWidth = '1';
                prevElement.style.stroke = '#fff'; // Reset stroke color to default
                prevElement.style.opacity = '1';
            }
        }

        // Select new province
        selectedProvince = provinceId;
        const element = map.querySelector(`[data-province="${provinceId}"]`);
        if (element) {
            element.classList.add('selected');
            element.style.strokeWidth = '3';
            element.style.stroke = '#2c3e50';
        }

        // Display details
        displayProvinceDetails(provinceId);
    }

    // Display province details in the panel
    function displayProvinceDetails(provinceId) {
        const data = provincesData[provinceId];
        if (!data) return;

        const party = partyInfo[data.party];
        const status = statusInfo[data.status];

        let detailsHTML = `
            <h2>${data.name}</h2>
            <p><strong>Nüfus:</strong> ${formatNumber(data.population)}</p>
            
            <div class="party-info">
                <h3>Belediye Başkanı</h3>
                <p><strong>İsim:</strong> ${data.mayor}</p>
                <p><strong>Parti:</strong> ${party.name}</p>
                <div class="color-box" style="display: inline-block; margin-right: 10px; background-color: ${party.color};"></div>
            </div>
            
            <h3>Durum</h3>
            <span class="status-badge status-${data.status}">${status.name}</span>
            <p>${status.description}</p>
        `;

        // Only add description section if description is not empty
        if (data.description && data.description.trim() !== '') {
            detailsHTML += `
                <h3>Açıklama</h3>
                <p>${data.description}</p>
            `;
        }

        detailsPanel.innerHTML = detailsHTML;
    }

    // Calculate and display population statistics by status
    function calculatePopulationStats() {
        let totalPopulation = 0;
        const statusPopulation = {
            normal: 0,
            detained: 0,
            arrested: 0,
            trustee: 0
        };

        // Calculate totals
        Object.values(provincesData).forEach(province => {
            totalPopulation += province.population;
            statusPopulation[province.status] += province.population;
        });

        // Calculate percentages
        const statusPercentages = {};
        Object.keys(statusPopulation).forEach(status => {
            statusPercentages[status] = totalPopulation > 0 ? 
                ((statusPopulation[status] / totalPopulation) * 100).toFixed(1) : 0;
        });

        return {
            totalPopulation,
            statusPopulation,
            statusPercentages
        };
    }

    // Show population statistics card
    function showPopulationStats() {
        const stats = calculatePopulationStats();
        
        statsPanel.innerHTML = `
            <h2>Durumların Nüfusa Dağılımı</h2>
            <p><strong>Toplam Nüfus:</strong> ${formatNumber(stats.totalPopulation)}</p>
            
            <div style="margin-top: 20px;">
                <div style="margin: 15px 0; padding: 10px; background: var(--legend-bg); border-radius: 8px;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                        <span class="status-badge status-normal" style="margin-right: 8px;">${statusInfo.normal.name}</span>
                        <strong>${stats.statusPercentages.normal}%</strong>
                    </div>
                    <div style="width: 100%; background-color: var(--border-color); border-radius: 4px; height: 6px; margin-bottom: 8px; overflow: hidden;">
                        <div style="height: 100%; background-color: ${statusInfo.normal.color}; width: ${stats.statusPercentages.normal}%; transition: width 0.3s ease; border-radius: 4px;"></div>
                    </div>
                    <div style="font-size: 0.9em; color: var(--subtext-color);">
                        ${formatNumber(stats.statusPopulation.normal)} kişi
                    </div>
                </div>

                <div style="margin: 15px 0; padding: 10px; background: var(--legend-bg); border-radius: 8px;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                        <span class="status-badge status-detained" style="margin-right: 8px;">${statusInfo.detained.name}</span>
                        <strong>${stats.statusPercentages.detained}%</strong>
                    </div>
                    <div style="width: 100%; background-color: var(--border-color); border-radius: 4px; height: 6px; margin-bottom: 8px; overflow: hidden;">
                        <div style="height: 100%; background-color: ${statusInfo.detained.color}; width: ${stats.statusPercentages.detained}%; transition: width 0.3s ease; border-radius: 4px;"></div>
                    </div>
                    <div style="font-size: 0.9em; color: var(--subtext-color);">
                        ${formatNumber(stats.statusPopulation.detained)} kişi
                    </div>
                </div>

                <div style="margin: 15px 0; padding: 10px; background: var(--legend-bg); border-radius: 8px;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                        <span class="status-badge status-arrested" style="margin-right: 8px;">${statusInfo.arrested.name}</span>
                        <strong>${stats.statusPercentages.arrested}%</strong>
                    </div>
                    <div style="width: 100%; background-color: var(--border-color); border-radius: 4px; height: 6px; margin-bottom: 8px; overflow: hidden;">
                        <div style="height: 100%; background-color: ${statusInfo.arrested.color}; width: ${stats.statusPercentages.arrested}%; transition: width 0.3s ease; border-radius: 4px;"></div>
                    </div>
                    <div style="font-size: 0.9em; color: var(--subtext-color);">
                        ${formatNumber(stats.statusPopulation.arrested)} kişi
                    </div>
                </div>

                <div style="margin: 15px 0; padding: 10px; background: var(--legend-bg); border-radius: 8px;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                        <span class="status-badge status-trustee" style="margin-right: 8px;">${statusInfo.trustee.name}</span>
                        <strong>${stats.statusPercentages.trustee}%</strong>
                    </div>
                    <div style="width: 100%; background-color: var(--border-color); border-radius: 4px; height: 6px; margin-bottom: 8px; overflow: hidden;">
                        <div style="height: 100%; background-color: ${statusInfo.trustee.color}; width: ${stats.statusPercentages.trustee}%; transition: width 0.3s ease; border-radius: 4px;"></div>
                    </div>
                    <div style="font-size: 0.9em; color: var(--subtext-color);">
                        ${formatNumber(stats.statusPopulation.trustee)} kişi
                    </div>
                </div>
            </div>
            
            <div style="margin-top: 20px; padding: 10px; background: var(--hover-bg); border-radius: 8px; font-size: 0.9em; color: var(--subtext-color);">
                <strong>Not:</strong> İstatistikler il bazında nüfus verilerine göre hesaplanmıştır.
            </div>
        `;
    }

    // Utility function to format numbers with commas
    function formatNumber(num) {
        if (num === 0 || !num) return '0';
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    // Apply status badge colors
    function applyStatusBadgeColors() {
        const statusStyle = document.createElement('style');
        let statusCSS = '';
        
        Object.keys(statusInfo).forEach(statusKey => {
            const statusColor = statusInfo[statusKey].color;
            statusCSS += `
                .status-badge.status-${statusKey} {
                    background-color: ${statusColor} !important;
                    color: white !important;
                }
            `;
        });
        
        statusStyle.textContent = statusCSS;
        document.head.appendChild(statusStyle);
    }

    // Initialize the application
    function init() {
        createMap();
        updateLegend();
        applyStatusBadgeColors();
        
        // Fix text elements blocking clicks on provinces
        fixTextElementsPointerEvents();
        
        // Add tab event listeners
        document.querySelectorAll('.tab-button').forEach(button => {
            button.addEventListener('click', () => {
                const mode = button.getAttribute('data-tab');
                switchMode(mode);
            });
        });
        
        // Show initial message
        showDefaultDetailsView();
        
        // Show population statistics in the stats panel
        showPopulationStats();
    }

    // Fix SVG text elements to not block mouse events
    function fixTextElementsPointerEvents() {
        const textElements = map.querySelectorAll('text');
        textElements.forEach(textElement => {
            textElement.style.pointerEvents = 'none';
        });
    }

    // Utility function to get current theme colors
    function getCurrentThemeColor(property) {
        return getComputedStyle(document.documentElement).getPropertyValue(property).trim();
    }

    // Logo functionality
    function initLogo() {
        const logoImg = document.getElementById('logo-img');
        
        // Function to set theme-appropriate logo
        function setThemeLogo() {
            const currentTheme = document.body.getAttribute('data-theme') || 'light';
            const logoPath = currentTheme === 'dark' ? 'assets/images/logo_dark.png' : 'assets/images/logo_light.png';
            
            logoImg.src = logoPath;
            logoImg.style.display = 'block';
            logoImg.onerror = function() {
                // If image fails to load, hide it
                this.style.display = 'none';
            };
        }
        
        // Function to set logo image (now supports theme switching)
        window.setLogo = function(lightLogoUrl, darkLogoUrl) {
            if (lightLogoUrl && lightLogoUrl.trim() !== '') {
                const currentTheme = document.body.getAttribute('data-theme') || 'light';
                const logoUrl = currentTheme === 'dark' && darkLogoUrl ? darkLogoUrl : lightLogoUrl;
                
                logoImg.src = logoUrl;
                logoImg.style.display = 'block';
                logoImg.onerror = function() {
                    // If image fails to load, hide it
                    this.style.display = 'none';
                };
            } else {
                logoImg.style.display = 'none';
            }
        };
        
        // Expose function to update logo based on theme
        window.updateLogoForTheme = setThemeLogo;
        
        // Set initial logo based on current theme
        setThemeLogo();
    }

    // Make showPopulationStats globally accessible
    window.showPopulationStats = showPopulationStats;

    // Start the application
    init();
    initLogo();
    
    // Dark mode toggle functionality
    function initDarkMode() {
        const themeToggleBtn = document.getElementById('theme-toggle-btn');
        const body = document.body;
        
        // Check for saved theme preference or default to light mode
        const savedTheme = localStorage.getItem('theme') || 'light';
        body.setAttribute('data-theme', savedTheme);
        
        // Theme toggle event listener
        themeToggleBtn.addEventListener('click', function() {
            const currentTheme = body.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            body.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            
            // Optional: Update map colors if needed for better visibility in dark mode
            updateMapForTheme(newTheme);
        });
    }
    
    function updateMapForTheme(theme) {
        // Update SVG province strokes for better visibility in dark mode
        const provinces = document.querySelectorAll('.province');
        provinces.forEach(province => {
            if (theme === 'dark') {
                // Ensure province borders are visible in dark mode
                if (province.style.stroke === '' || province.style.stroke === '#fff') {
                    province.style.stroke = '#555';
                }
            } else {
                // Reset to default light mode stroke
                if (province.style.stroke === '#555') {
                    province.style.stroke = '#fff';
                }
            }
        });
        
        // Update logo for the new theme
        if (window.updateLogoForTheme) {
            window.updateLogoForTheme();
        }
    }
    
    // Initialize dark mode
    initDarkMode();
    
    // Add hover effects and tooltips
    const style = document.createElement('style');
    style.textContent = `
        .province:hover {
            filter: brightness(1.1);
            transform: scale(1.05);
        }
        
        .province.selected {
            filter: brightness(1.2);
        }
        
        /* Prevent SVG text elements from blocking mouse events */
        #turkey-map text {
            pointer-events: none;
            user-select: none;
        }
    `;
    document.head.appendChild(style);
});
