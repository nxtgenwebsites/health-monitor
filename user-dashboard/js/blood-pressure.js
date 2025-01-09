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
                    data: [60, 85, 75, 65, 80, 35, 70, 75, 45, 75, 65, 70],
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
                    data: [65, 75, 80, 70, 55, 80, 85, 50, 75, 70, 75, 40],
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

// Modal handling
document.addEventListener('DOMContentLoaded', function() {
    // Get the add values button and modal
    const addValuesBtn = document.querySelector('.add-values-btn');
    const modal = new bootstrap.Modal(document.getElementById('addValuesModal'));
    
    // Add click event to the button
    addValuesBtn.addEventListener('click', function() {
        modal.show();
    });

    // Handle save button click
    const saveBtn = document.querySelector('.btn-save');
    saveBtn.addEventListener('click', function() {
        // Add your save logic here
        modal.hide();
    });
});