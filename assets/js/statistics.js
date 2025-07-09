// Population statistics functionality
window.Statistics = {
    // Calculate and display population statistics by status
    calculatePopulationStats() {
        let totalPopulation = 0;
        const statusPopulation = {};
        
        // Initialize statusPopulation with all possible status types from statusInfo
        Object.keys(statusInfo).forEach(statusKey => {
            statusPopulation[statusKey] = 0;
        });

        // Calculate totals
        Object.values(provincesData).forEach(province => {
            totalPopulation += province.population;
            if (statusPopulation.hasOwnProperty(province.status)) {
                statusPopulation[province.status] += province.population;
            } else {
                // Handle any status not defined in statusInfo
                console.warn(`Unknown status: ${province.status} for province ${province.name}`);
                statusPopulation[province.status] = statusPopulation[province.status] || 0;
                statusPopulation[province.status] += province.population;
            }
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
    },

    // Helper function to generate status card HTML
    generateStatusCard(statusKey, statusData, percentage, population) {
        // Handle status keys with spaces or special characters by escaping them for CSS class names
        const escapedStatusKey = Utils.escapeStatusKey(statusKey);
        
        return `
            <div style="margin: 15px 0; padding: 10px; background: var(--legend-bg); border-radius: 8px;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                    <span class="status-badge status-${escapedStatusKey}" style="margin-right: 8px;">${statusData.name}</span>
                    <strong>${percentage}%</strong>
                </div>
                <div style="width: 100%; background-color: var(--border-color); border-radius: 4px; height: 6px; margin-bottom: 8px; overflow: hidden;">
                    <div style="height: 100%; background-color: ${statusData.color}; width: ${percentage}%; transition: width 0.3s ease; border-radius: 4px;"></div>
                </div>
                <div style="font-size: 0.9em; color: var(--subtext-color);">
                    ${Utils.formatNumber(population)} kişinin ${statusData.details}
                </div>
            </div>
        `;
    },

    // Show population statistics card
    show(statsPanel) {
        const stats = this.calculatePopulationStats();
        
        // Generate status cards dynamically
        const statusCards = Object.keys(statusInfo).map(statusKey => {
            return this.generateStatusCard(
                statusKey,
                statusInfo[statusKey],
                stats.statusPercentages[statusKey],
                stats.statusPopulation[statusKey]
            );
        }).join('');
        
        statsPanel.innerHTML = `
            <h2>Durumların Nüfusa Dağılımı</h2>
            <p><strong>Toplam Nüfus:</strong> ${Utils.formatNumber(stats.totalPopulation)}</p>
            
            <div style="margin-top: 20px;">
                ${statusCards}
            </div>
            
            <div style="margin-top: 20px; padding: 10px; background: var(--hover-bg); border-radius: 8px; font-size: 0.9em; color: var(--subtext-color);">
                <strong>Not:</strong> İstatistikler il bazında nüfus verilerine göre hesaplanmıştır.
            </div>
        `;
    }
};
