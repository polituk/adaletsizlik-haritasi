// Map functionality and province interactions
window.MapManager = {
    selectedProvince: null,
    currentMode: 'party', // 'party' or 'status'
    map: null,
    detailsPanel: null,
    legendTitle: null,
    legendItems: null,

    // Initialize map manager
    init(mapElement, detailsPanelElement, legendTitleElement, legendItemsElement) {
        this.map = mapElement;
        this.detailsPanel = detailsPanelElement;
        this.legendTitle = legendTitleElement;
        this.legendItems = legendItemsElement;
    },

    // Create SVG map from real Turkey map data
    createMap() {
        this.map.innerHTML = turkeyMapSVG; // Use the real Turkey map SVG
        
        // Add event listeners and styling to provinces
        const provinces = this.map.querySelectorAll('g[id]');
        
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
                    shapeElement.addEventListener('click', (event) => {
                        this.selectProvince(provinceId);
                        // Show locked tooltip on click
                        Tooltip.show(provinceId, event, true);
                    });
                    
                    // Add hover effect
                    shapeElement.addEventListener('mouseenter', function(event) {
                        this.style.strokeWidth = '2';
                        this.style.opacity = '0.8';
                        Tooltip.show(provinceId, event); // Show tooltip on hover
                    });
                    
                    shapeElement.addEventListener('mouseleave', function() {
                        if (!this.classList.contains('selected')) {
                            this.style.strokeWidth = '1';
                            this.style.opacity = '1';
                        }
                        // Only hide tooltip if not locked
                        if (!Tooltip.isLocked) {
                            Tooltip.hide();
                        }
                    });
                    
                    // Add mousemove for tooltip positioning
                    shapeElement.addEventListener('mousemove', function(event) {
                        // Update tooltip position if it's visible and either not locked or locked to this province
                        if (Tooltip.element && Tooltip.element.style.display === 'block' && 
                            (!Tooltip.isLocked || Tooltip.lockedProvinceId === provinceId)) {
                            Tooltip.show(provinceId, event, Tooltip.isLocked);
                        }
                    });
                }
            } else {
                console.log(`No data found for province ID: ${provinceId}`);
            }
        });
        
        // Apply initial colors
        this.applyMapColors();
        
        // Add click handler for empty space to reset selection
        this.addEmptySpaceClickHandler();
    },

    // Add click handler to reset selection when clicking on empty space
    addEmptySpaceClickHandler() {
        this.map.addEventListener('click', (event) => {
            // Check if the click was on the map container but not on a province
            if (event.target === this.map || (event.target.tagName === 'svg' && !event.target.hasAttribute('data-province'))) {
                this.resetSelection();
            }
        });
        
        // Also add handler to the SVG element itself
        const svgElement = this.map.querySelector('svg');
        if (svgElement) {
            svgElement.addEventListener('click', (event) => {
                // Only reset if clicking directly on the SVG background, not on province elements
                if (event.target === svgElement || event.target.tagName === 'g' && !event.target.querySelector('[data-province]')) {
                    this.resetSelection();
                }
            });
        }
    },

    // Reset selection and show default view
    resetSelection() {
        // Force hide and unlock tooltip
        Tooltip.forceHide();
        
        // Remove previous selection
        if (this.selectedProvince) {
            const prevElement = this.map.querySelector(`[data-province="${this.selectedProvince}"]`);
            if (prevElement) {
                prevElement.classList.remove('selected');
                prevElement.style.strokeWidth = '1';
                prevElement.style.stroke = '#fff'; // Reset stroke color to default
                prevElement.style.opacity = '1';
            }
        }
        
        this.selectedProvince = null;
        this.showDefaultDetailsView();
    },

    // Show default details view
    showDefaultDetailsView() {
        this.detailsPanel.innerHTML = `
            <h2>İl Seçiniz</h2>
            <p>Haritadan bir il seçerek detayları görüntüleyebilirsiniz.</p>
        `;
    },

    // Apply colors based on current mode
    applyMapColors() {
        const provinces = this.map.querySelectorAll('[data-province]');
        
        provinces.forEach(element => {
            const provinceId = element.getAttribute('data-province');
            const data = provincesData[provinceId];
            
            if (data) {
                let color;
                if (this.currentMode === 'party') {
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
    },

    // Generate legend content based on current mode
    updateLegend() {
        if (this.currentMode === 'party') {
            this.legendTitle.textContent = 'Parti Renkleri';
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
            this.legendItems.innerHTML = legendHTML;
        } else {
            this.legendTitle.textContent = 'Durum Renkleri';
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
            this.legendItems.innerHTML = legendHTML;
        }
    },

    // Switch between party and status modes
    switchMode(mode) {
        this.currentMode = mode;
        
        // Update tab buttons
        document.querySelectorAll('.tab-button').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-tab="${mode}"]`).classList.add('active');
        
        // Update map colors and legend
        this.applyMapColors();
        this.updateLegend();
    },

    // Select and display province details
    selectProvince(provinceId) {
        // Force hide any existing locked tooltip
        Tooltip.forceHide();
        
        // Remove previous selection
        if (this.selectedProvince) {
            const prevElement = this.map.querySelector(`[data-province="${this.selectedProvince}"]`);
            if (prevElement) {
                prevElement.classList.remove('selected');
                prevElement.style.strokeWidth = '1';
                prevElement.style.stroke = '#fff'; // Reset stroke color to default
                prevElement.style.opacity = '1';
            }
        }

        // Select new province
        this.selectedProvince = provinceId;
        const element = this.map.querySelector(`[data-province="${provinceId}"]`);
        if (element) {
            element.classList.add('selected');
            element.style.strokeWidth = '3';
            element.style.stroke = '#2c3e50';
        }

        // Display details
        this.displayProvinceDetails(provinceId);
    },

    // Display province details in the panel
    displayProvinceDetails(provinceId) {
        const data = provincesData[provinceId];
        if (!data) return;

        const party = partyInfo[data.party];
        const status = statusInfo[data.status];

        let detailsHTML = `
            <h2>${data.name}</h2>
            <p><strong>Nüfus:</strong> ${Utils.formatNumber(data.population)}</p>
            
            <div class="party-info">
                <h3>Belediye Başkanı</h3>
                <p><strong>İsim:</strong> ${data.mayor}</p>
                <p><strong>Parti:</strong> ${party.fullname}</p>
            </div>
            
            <h3>Durum</h3>
            <div style="margin-bottom: 10px;">
                <span class="status-badge status-${data.status.replace(/\s+/g, '-').replace(/[^a-zA-Z0-9-]/g, '')}">${status.name}</span>
                <span class="status-badge" style="background-color: ${party.color}; color: white; margin-left: 8px;">${party.name}</span>
            </div>
            <p>${status.description}</p>
        `;

        // Only add description section if description is not empty
        if (data.description && data.description.trim() !== '') {
            detailsHTML += `
                <h3>Açıklama</h3>
                <p>${data.description}</p>
            `;
        }

        this.detailsPanel.innerHTML = detailsHTML;
    }
};
