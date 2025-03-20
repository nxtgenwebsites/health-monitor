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
                    data: [125, 140, 135, 150, 160, 170, 145, 155, 130, 175, 165, 120],
                    borderColor: '#9333EA',
                    borderWidth: 2,
                    tension: 0.4,
                    borderDash: [5, 5],
                    fill: false,
                    pointRadius: 0
                },
                {
                    label: 'Height',
                    data: [75, 85, 95, 100, 90, 85, 80, 75, 80, 90, 100, 95],
                    borderColor: '#EC4899',
                    borderWidth: 2,
                    tension: 0.4,
                    borderDash: [5, 5],
                    fill: false,
                    pointRadius: 0
                },
                {
                    label: 'BMI',
                    data: [70, 80, 85, 75, 70, 85, 90, 70, 80, 75, 80, 70],
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