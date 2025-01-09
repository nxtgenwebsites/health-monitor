Chart.register(ChartDataLabels);

document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('episodesChart').getContext('2d');
    
    // Calculate the bar percentage to achieve exactly 26.095px width
    const barPercentage = (30.095 / 444.557) * 7;

    // Dataset values
    const backgroundData = [33, 33, 33, 33, 33, 33, 33];
    const wellData = [13, 8, 15, 6, 7, 14, 15];
    const unwellData = [9, 14, 7, 18, 23, 8, 7];

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            datasets: [
                {
                    label: 'Background',
                    data: backgroundData,
                    backgroundColor: 'rgba(200, 147, 253, 0.15)',
                    barPercentage: barPercentage,
                    categoryPercentage: 1,
                    borderRadius: {
                        topLeft: 0,
                        topRight: 0,
                        bottomLeft: 0,
                        bottomRight: 0
                    },
                    order: 3
                },
                {
                    label: 'Well',
                    data: wellData,
                    backgroundColor: '#DDF2F9',
                    barPercentage: barPercentage,
                    categoryPercentage: 1,
                    borderRadius: {
                        topLeft: 0,
                        topRight: 0,
                        bottomLeft: 0,
                        bottomRight: 0
                    },
                    borderSkipped: false,
                    order: 2,
                    segment: {
                        borderRadius: (ctx) => {
                            const index = ctx.dataIndex;
                            const value = wellData[index];
                            const isTop = unwellData[index] === 0;
                            return isTop ? {
                                topLeft: 7,
                                topRight: 7,
                                bottomLeft: 0,
                                bottomRight: 0
                            } : 0;
                        }
                    }
                },
                {
                    label: 'Unwell',
                    data: unwellData,
                    backgroundColor: '#0C75C2',
                    barPercentage: barPercentage,
                    categoryPercentage: 1,
                    borderRadius: {
                        topLeft: 0,
                        topRight: 0,
                        bottomLeft: 0,
                        bottomRight: 0
                    },
                    borderSkipped: false,
                    order: 1
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    enabled: false
                },
                datalabels: {
                    color: '#DDF2F9',
                    anchor: 'center',
                    align: 'center',
                    offset: 0,
                    font: {
                        size: 12,
                        family: "'Poppins', sans-serif",
                        weight: '500'
                    },
                    formatter: function(value, context) {
                        if (context.datasetIndex === 2) {
                            return value < 10 ? `0${value}` : value;
                        }
                        return '';
                    }
                }
            },
            scales: {
                x: {
                    stacked: true,
                    grid: {
                        display: false,
                        drawBorder: false
                    },
                    ticks: {
                        color: '#64748B',
                        font: {
                            size: 12,
                            family: "'Poppins', sans-serif"
                        },
                        padding: 12
                    },
                    border: {
                        display: false
                    }
                },
                // Change the y-axis configuration in your code:
                y: {
                    stacked: true,
                    beginAtZero: true,
                    max: 35,
                    ticks: {
                        stepSize: 10,
                        callback: function(value) {
                            return value <= 30 ? value : '';
                        },
                        color: '#64748B',
                        font: {
                            size: 12,
                            family: "'Poppins', sans-serif"
                        },
                        padding: 12,
                        crossAlign: 'far'
                    },
                    grid: {
                        color: function(context) {
                            if (context.tick.value <= 30) {
                                return '#E2E8F0';
                            }
                            return 'transparent';
                        },
                        drawBorder: false,
                        borderDash: [6, 6],  // Changed to smaller, more visible values
                        lineWidth: 1,      // Made line slightly thicker
                        tickLength: 0,
                                        // Ensure grid lines are visible
                    },
                    border: {
                        display: false
                    }
                }
            },
            layout: {
                padding: {
                    top: 20,
                    right: 20,
                    bottom: 40,  // Increased bottom padding
                    left: 10
                }
            }
        }
    });
});

// Handle the "Add New" button click
document.querySelector('.add-new-btn').addEventListener('click', function() {
    var modal = new bootstrap.Modal(document.getElementById('addValuesModal'));
    modal.show();
});