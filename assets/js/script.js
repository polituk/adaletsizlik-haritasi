// Main application script
document.addEventListener('DOMContentLoaded', function() {
    const map = document.getElementById('turkey-map');
    const detailsPanel = document.getElementById('province-details');
    let selectedProvince = null;

    // Create SVG map from real Turkey map data
    function createMap() {
        map.innerHTML = turkeyMapSVG; // Use the real Turkey map SVG
        
        // Add event listeners and styling to provinces
        const provinces = map.querySelectorAll('g[id]');
        console.log(`Found ${provinces.length} provinces in SVG`);
        
        provinces.forEach(provinceElement => {
            const provinceId = provinceElement.id;
            const data = provincesData[provinceId];
            
            if (data) {
                // Look for either path or rect elements
                const shapeElement = provinceElement.querySelector('path') || provinceElement.querySelector('rect');
                if (shapeElement) {
                    // Apply party colors and status styles
                    shapeElement.setAttribute('class', `province ${data.party} status-${data.status}`);
                    shapeElement.setAttribute('data-province', provinceId);
                    
                    // Apply the fill color directly from partyInfo
                    const partyColor = partyInfo[data.party]?.color || '#95a5a6';
                    shapeElement.setAttribute('fill', partyColor);
                    
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
                <div class="color-box ${data.party}" style="display: inline-block; margin-right: 10px;"></div>
            </div>
            
            <h3>Durum</h3>
            <span class="status-badge status-${data.status}">${status.name}</span>
            <p>${status.description}</p>
            
            <h3>Açıklama</h3>
            <p>${data.description}</p>
        `;
    }

    // Initialize the application
    function init() {
        createMap();
        
        // Show initial message
        detailsPanel.innerHTML = `
            <h2>İl Seçiniz</h2>
            <p>Haritadan bir il seçerek detayları görüntüleyebilirsiniz.</p>
            <div style="margin-top: 20px;">
                <h3>Durum Göstergeleri</h3>
                <div style="margin: 10px 0;">
                    <span class="status-badge status-normal">Normal</span> - Belediye başkanı görevde
                </div>
                <div style="margin: 10px 0;">
                    <span class="status-badge status-arrested">Tutuklu</span> - Belediye başkanı tutuklu
                </div>
                <div style="margin: 10px 0;">
                    <span class="status-badge status-detained">Gözaltında</span> - Belediye başkanı gözaltında
                </div>
                <div style="margin: 10px 0;">
                    <span class="status-badge status-trustee">Kayyum</span> - Belediyeye kayyum atanmış
                </div>
            </div>
        `;
    }

    // Start the application
    init();
});

// Add some interactive features
document.addEventListener('DOMContentLoaded', function() {
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
