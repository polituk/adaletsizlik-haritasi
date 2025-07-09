// Tooltip functionality
window.Tooltip = {
    element: null,
    timeout: null,

    // Create tooltip element
    create() {
        this.element = document.createElement('div');
        this.element.className = 'province-tooltip';
        this.element.style.cssText = `
            position: fixed;
            background: var(--bg-color);
            border: 1px solid var(--border-color);
            border-radius: 8px;
            padding: 12px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            font-size: 0.85em;
            max-width: 250px;
            z-index: 10000;
            pointer-events: none;
            opacity: 0;
            transition: opacity 0.15s ease;
            display: none;
            will-change: transform, opacity;
            transform: translateZ(0);
        `;
        document.body.appendChild(this.element);
    },

    // Show tooltip with province data
    show(provinceId, event) {
        // Clear any pending hide timeout
        if (this.timeout) {
            clearTimeout(this.timeout);
            this.timeout = null;
        }
        
        const data = provincesData[provinceId];
        if (!data || !this.element) return;

        const party = partyInfo[data.party];
        const status = statusInfo[data.status];

        this.element.innerHTML = `
            <div style="font-weight: bold; font-size: 1em; margin-bottom: 8px; color: var(--text-color);">${data.name}</div>
            <div style="margin-bottom: 6px;">
                <strong>Nüfus:</strong> ${Utils.formatNumber(data.population)}
            </div>
            <div style="margin-bottom: 6px;">
                <strong>Başkan:</strong> ${data.mayor}
            </div>
            <div style="margin-bottom: 8px;">
                <span class="status-badge" style="background-color: ${party.color}; color: white; font-size: 0.8em; padding: 2px 6px; border-radius: 4px; margin-right: 4px;">${party.name}</span>
                <span class="status-badge status-${data.status.replace(/\s+/g, '-').replace(/[^a-zA-Z0-9-]/g, '')}" style="font-size: 0.8em; padding: 2px 6px; border-radius: 4px;">${status.name}</span>
            </div>
        `;

        // Position tooltip more efficiently
        let left = event.clientX + 15;
        let top = event.clientY - 10;

        // Simple boundary checks without getBoundingClientRect
        const tooltipWidth = 250; // max-width from CSS
        const tooltipHeight = 120; // estimated height
        const margin = 20; // minimum margin from screen edges
        
        // Check right boundary and adjust left position if needed
        if (left + tooltipWidth > window.innerWidth - margin) {
            left = event.clientX - tooltipWidth - 15;
            // If still out of bounds on the left, center it on screen
            if (left < margin) {
                left = Math.max(margin, (window.innerWidth - tooltipWidth) / 2);
            }
        }
        
        // Ensure tooltip doesn't go off the left edge
        if (left < margin) {
            left = margin;
        }
        
        // Vertical positioning
        if (top < margin) {
            top = event.clientY + 15;
        }
        if (top + tooltipHeight > window.innerHeight - margin) {
            top = event.clientY - tooltipHeight - 15;
            // If still out of bounds, position at top with margin
            if (top < margin) {
                top = margin;
            }
        }

        this.element.style.left = left + 'px';
        this.element.style.top = top + 'px';
        
        // Show tooltip without forcing reflow
        if (this.element.style.display === 'none') {
            this.element.style.display = 'block';
            // Use requestAnimationFrame to show opacity after display change
            requestAnimationFrame(() => {
                this.element.style.opacity = '1';
            });
        } else {
            this.element.style.opacity = '1';
        }
    },

    // Hide tooltip
    hide() {
        // Clear any existing timeout
        if (this.timeout) {
            clearTimeout(this.timeout);
        }
        
        // Add a small delay to prevent flickering when moving between provinces
        this.timeout = setTimeout(() => {
            if (this.element) {
                this.element.style.opacity = '0';
                setTimeout(() => {
                    if (this.element.style.opacity === '0') { // Only hide if still supposed to be hidden
                        this.element.style.display = 'none';
                    }
                }, 200);
            }
        }, 50); // Small delay to prevent flickering
    }
};
