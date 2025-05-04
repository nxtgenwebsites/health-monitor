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
                    data: [40.6, 40.4, 40.5, 39.2 ,38.7 , 37.5, 30.3, 30.4, 34.3, 29.1, 32.1 , 29.9 , 41.5 , 31.6],
                    backgroundColor: '#3B82F6', // Blue color
                    borderRadius: 8,
                    barPercentage: 0.4
                },
                {
                    label: 'Farenhite (°F)',
                    data: [88, 92, 94, 83, 101, 93, 97, 92, 98, 89, 90 , 103],
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
                    max: 120, // Fahrenheit max (around 212)
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