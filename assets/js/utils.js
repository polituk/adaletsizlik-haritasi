// Utility functions
window.Utils = {
    // Format numbers with commas
    formatNumber(num) {
        if (num === 0 || !num) return '0';
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    },

    // Get current theme colors
    getCurrentThemeColor(property) {
        return getComputedStyle(document.documentElement).getPropertyValue(property).trim();
    },

    // Escape status keys for CSS class names
    escapeStatusKey(statusKey) {
        return statusKey.replace(/\s+/g, '-').replace(/[^a-zA-Z0-9-]/g, '');
    },

    // Fix SVG text elements to not block mouse events
    fixTextElementsPointerEvents(container) {
        const textElements = container.querySelectorAll('text, tspan');
        textElements.forEach(textElement => {
            textElement.style.pointerEvents = 'none';
            textElement.style.userSelect = 'none';
            textElement.style.webkitUserSelect = 'none';
            textElement.style.msUserSelect = 'none';
        });
        
        // Also ensure any dynamically added text elements are handled
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                mutation.addedNodes.forEach((node) => {
                    if (node.nodeType === Node.ELEMENT_NODE) {
                        const newTextElements = node.querySelectorAll ? node.querySelectorAll('text, tspan') : [];
                        newTextElements.forEach(textElement => {
                            textElement.style.pointerEvents = 'none';
                            textElement.style.userSelect = 'none';
                            textElement.style.webkitUserSelect = 'none';
                            textElement.style.msUserSelect = 'none';
                        });
                    }
                });
            });
        });
        
        observer.observe(container, { childList: true, subtree: true });
    },

    // Apply status badge colors
    applyStatusBadgeColors() {
        const statusStyle = document.createElement('style');
        let statusCSS = '';
        
        Object.keys(statusInfo).forEach(statusKey => {
            const statusColor = statusInfo[statusKey].color;
            // Handle status keys with spaces or special characters by escaping them
            const escapedStatusKey = this.escapeStatusKey(statusKey);
            statusCSS += `
                .status-badge.status-${escapedStatusKey} {
                    background-color: ${statusColor} !important;
                    color: white !important;
                }
            `;
        });
        
        statusStyle.textContent = statusCSS;
        document.head.appendChild(statusStyle);
    }
};
