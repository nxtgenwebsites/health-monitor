document.addEventListener('DOMContentLoaded', function () {
    initializeTemperatureChart();
});

function initializeTemperatureChart() {
    const ctx = document.getElementById('tempChart').getContext('2d');

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
            datasets: [
                {
                    label: 'Celsius (°C)',
                    data: [0, 30, 40, 50, 40, 50, 60, 70, 80, 70, 50 , 70 , 80],
                    backgroundColor: '#3B82F6', // Blue color
                    borderRadius: 8,
                    barPercentage: 0.4
                },
                {
                    label: 'Fahrenheit (°F)',
                    data: [112, 90, 128, 156, 124, 122, 182, 158, 176, 194, 112 , 110],
                    backgroundColor: '#F97316', // Orange color
                    borderRadius: 8,
                    barPercentage: 0.4
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false // No legend
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    min: 0,
                    max: 220, // Fahrenheit max (around 212)
                    ticks: {
                        stepSize: 20
                    },
                    grid: {
                        color: '#E5E7EB',
                        drawBorder: false
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
}