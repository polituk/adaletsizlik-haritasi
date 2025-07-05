// Main application script
document.addEventListener('DOMContentLoaded', function() {
    const map = document.getElementById('turkey-map');
    const detailsPanel = document.getElementById('province-details');
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

        detailsPanel.innerHTML = `
            <h2>${data.name}</h2>
            <p><strong>Nüfus:</strong> ${data.population}</p>
            
            <div class="party-info">
                <h3>Belediye Başkanı</h3>
                <p><strong>İsim:</strong> ${data.mayor}</p>
                <p><strong>Parti:</strong> ${party.name}</p>
                <div class="color-box" style="display: inline-block; margin-right: 10px; background-color: ${party.color};"></div>
            </div>
            
            <h3>Durum</h3>
            <span class="status-badge status-${data.status}">${status.name}</span>
            <p>${status.description}</p>
            
            <h3>Açıklama</h3>
            <p>${data.description}</p>
        `;
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
        
        // Add tab event listeners
        document.querySelectorAll('.tab-button').forEach(button => {
            button.addEventListener('click', () => {
                const mode = button.getAttribute('data-tab');
                switchMode(mode);
            });
        });
        
        // Show initial message
        detailsPanel.innerHTML = `
            <h2>İl Seçiniz</h2>
            <p>Haritadan bir il seçerek detayları görüntüleyebilirsiniz.</p>
            <div style="margin-top: 20px;">
                <h3>Durum Göstergeleri</h3>
                <div style="margin: 10px 0;">
                    <span class="status-badge status-normal">${statusInfo.normal.name}</span> - ${statusInfo.normal.description}
                </div>
                <div style="margin: 10px 0;">
                    <span class="status-badge status-arrested">${statusInfo.arrested.name}</span> - ${statusInfo.arrested.description}
                </div>
                <div style="margin: 10px 0;">
                    <span class="status-badge status-detained">${statusInfo.detained.name}</span> - ${statusInfo.detained.description}
                </div>
                <div style="margin: 10px 0;">
                    <span class="status-badge status-trustee">${statusInfo.trustee.name}</span> - ${statusInfo.trustee.description}
                </div>
            </div>
        `;
    }

    // Start the application
    init();
    
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
    `;
    document.head.appendChild(style);
});
