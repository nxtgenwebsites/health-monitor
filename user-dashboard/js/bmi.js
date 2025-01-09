document.addEventListener('DOMContentLoaded', function() {
    initializeBMIChart();
});

function initializeBMIChart() {
    const ctx = document.getElementById('bmiChart').getContext('2d');

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
            datasets: [
                {
                    label: 'Weight',
                    data: [60, 85, 75, 65, 80, 75, 70, 75, 85, 75, 65, 70],
                    borderColor: '#9333EA',
                    borderWidth: 2,
                    tension: 0.4,
                    borderDash: [5, 5],
                    fill: false,
                    pointRadius: 0
                },
                {
                    label: 'Height',
                    data: [70, 80, 90, 95, 85, 80, 75, 70, 75, 85, 90, 85],
                    borderColor: '#EC4899',
                    borderWidth: 2,
                    tension: 0.4,
                    borderDash: [5, 5],
                    fill: false,
                    pointRadius: 0
                },
                {
                    label: 'BMI',
                    data: [65, 75, 80, 70, 75, 80, 85, 80, 75, 70, 75, 80],
                    borderColor: '#3B82F6',
                    borderWidth: 2,
                    tension: 0.4,
                    borderDash: [5, 5],
                    fill: false,
                    pointRadius: 0
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: '#E2E8F0',
                        drawBorder: false
                    },
                    ticks: {
                        stepSize: 20
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