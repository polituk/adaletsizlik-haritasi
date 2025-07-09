// Theme and logo management functionality
window.Theme = {
    // Logo functionality
    initLogo() {
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
    },

    // Dark mode toggle functionality
    initDarkMode() {
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
            Theme.updateMapForTheme(newTheme);
        });
    },

    updateMapForTheme(theme) {
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
    },

    // Add dynamic styles for hover effects and tooltips
    addStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .province:hover {
                filter: brightness(1.1);
                transform: scale(1.05);
            }
            
            .province.selected {
                filter: brightness(1.2);
            }
            
            /* Prevent SVG text elements from blocking mouse events and causing layout shifts */
            #turkey-map text,
            #turkey-map tspan {
                pointer-events: none !important;
                user-select: none !important;
                -webkit-user-select: none !important;
                -ms-user-select: none !important;
                transform: translateZ(0);
                will-change: auto;
            }
            
            /* Ensure SVG elements don't cause reflows */
            #turkey-map svg {
                transform: translateZ(0);
                will-change: auto;
            }
            
            /* Tooltip styling with hardware acceleration */
            .province-tooltip {
                font-family: inherit;
                line-height: 1.4;
                backface-visibility: hidden;
                -webkit-backface-visibility: hidden;
            }
            
            .province-tooltip .status-badge {
                display: inline-block;
                padding: 2px 6px;
                border-radius: 4px;
                font-size: 0.8em;
                font-weight: 500;
            }
            
            /* Dark mode tooltip adjustments */
            [data-theme="dark"] .province-tooltip {
                background: var(--bg-color);
                border-color: var(--border-color);
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
            }
            
            /* Prevent any potential layout shifts */
            .province {
                transform: translateZ(0);
                will-change: auto;
            }
        `;
        document.head.appendChild(style);
    }
};
