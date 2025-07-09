// Main application initialization and coordination
document.addEventListener('DOMContentLoaded', function() {
    const map = document.getElementById('turkey-map');
    const detailsPanel = document.getElementById('province-details');
    const statsPanel = document.getElementById('population-stats');
    const legendTitle = document.getElementById('legend-title');
    const legendItems = document.getElementById('legend-items');

    // Initialize the application
    function init() {
        // Initialize all modules
        MapManager.init(map, detailsPanel, legendTitle, legendItems);
        MapManager.createMap();
        MapManager.updateLegend();
        
        Tooltip.create();
        
        Utils.applyStatusBadgeColors();
        Utils.fixTextElementsPointerEvents(map);
        
        Theme.addStyles();
        Theme.initLogo();
        Theme.initDarkMode();
        
        // Add tab event listeners
        document.querySelectorAll('.tab-button').forEach(button => {
            button.addEventListener('click', () => {
                const mode = button.getAttribute('data-tab');
                MapManager.switchMode(mode);
            });
        });
        
        // Show initial message
        MapManager.showDefaultDetailsView();
        
        // Show population statistics in the stats panel
        Statistics.show(statsPanel);
    }

    // Make showPopulationStats globally accessible for backward compatibility
    window.showPopulationStats = function() {
        Statistics.show(statsPanel);
    };

    // Start the application
    init();
});
