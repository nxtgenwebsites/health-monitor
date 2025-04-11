const ctx = document.getElementById('cholesterolChart').getContext('2d');
const gradient = ctx.createLinearGradient(0, 0, 0, 300);
gradient.addColorStop(0, '#FF6384');
gradient.addColorStop(1, '#7C3AED');

new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July'],
        datasets: [{
            data: [60, 120, 20, 140, 60, 130, 120],
            borderColor: gradient,
            borderWidth: 2,
            tension: 0.4,
            fill: false,
            pointRadius: 0
        }]
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
                max: 150,
                ticks: {
                    stepSize: 40
                },
                grid: {
                    color: '#E2E8F0',
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

document.querySelector('.add-values-btn').addEventListener('click', function() {
    var modal = new bootstrap.Modal(document.getElementById('addValuesModal'));
    modal.show();
});