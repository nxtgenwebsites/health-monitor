// Add this JavaScript code for the charts using Chart.js
document.addEventListener('DOMContentLoaded', function() {
    // Function to get responsive chart options
    const getResponsiveChartOptions = (type) => {
        const baseOptions = {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                mode: 'index',
                intersect: false,
            },
            plugins: {
                legend: {
                    position: 'top',
                    align: 'end',
                    labels: {
                        usePointStyle: true,
                        pointStyle: 'circle',
                        boxWidth: 4,
                        boxHeight: 4,
                        padding: 30,
                        font: {
                            size: 12,
                            family: "'Poppins', sans-serif",
                            weight: '500'
                        },
                        generateLabels: function(chart) {
                            const datasets = chart.data.datasets;
                            const legendItems = datasets.map((dataset, i) => ({
                                text: dataset.label,
                                fillStyle: dataset.borderColor,
                                strokeStyle: dataset.borderColor,
                                lineWidth: 0,
                                hidden: !chart.isDatasetVisible(i),
                                index: i
                            }));
                            return legendItems;
                        },
                        renderer: (legendItem, legend) => {
                            const div = document.createElement('div');
                            div.style.display = 'inline-flex';
                            div.style.alignItems = 'center';
                            div.style.marginRight = '15px';
                            div.style.padding = '8px 16px';
                            div.style.border = '1px solid #E5E7EB';
                            div.style.borderRadius = '100px';
                            div.style.fontSize = '12px';
                            div.style.backgroundColor = '#FFFFFF';
                            div.style.cursor = 'pointer';
                            
                            const dot = document.createElement('span');
                            dot.style.width = '4px';
                            dot.style.height = '4px';
                            dot.style.borderRadius = '50%';
                            dot.style.backgroundColor = legendItem.strokeStyle;
                            dot.style.marginRight = '8px';
                            dot.style.display = 'inline-block';
                            
                            const text = document.createElement('span');
                            text.style.color = '#6B7280';
                            text.textContent = legendItem.text;
                            
                            div.appendChild(dot);
                            div.appendChild(text);
                            
                            div.onclick = () => {
                                const index = legendItem.index;
                                const chart = legend.chart;
                                chart.setDatasetVisibility(index, !chart.isDatasetVisible(index));
                                chart.update();
                            };
                            
                            return div;
                        }
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    titleColor: '#000',
                    bodyColor: '#666',
                    borderColor: 'rgba(0, 0, 0, 0.1)',
                    borderWidth: 1,
                    padding: 10,
                    displayColors: false,
                    callbacks: {
                        label: function(context) {
                            return context.dataset.label + ': ' + context.formattedValue;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    border: {
                        display: false
                    },
                    grid: {
                        color: '#E5E7EB',
                        drawBorder: false,
                        drawTicks: false
                    },
                    ticks: {
                        padding: 10,
                        color: '#6B7280',
                        font: {
                            size: 12,
                            family: "'Poppins', sans-serif"
                        }
                    }
                },
                x: {
                    border: {
                        display: false
                    },
                    grid: {
                        display: false,
                        drawBorder: false,
                        drawTicks: false
                    },
                    ticks: {
                        padding: 10,
                        color: '#6B7280',
                        font: {
                            size: 12,
                            family: "'Poppins', sans-serif"
                        }
                    }
                }
            }
        };

        if (type === 'activity') {
            baseOptions.scales.y.max = 160;
            baseOptions.scales.y.ticks.stepSize = 20;
        } else if (type === 'weight') {
            baseOptions.scales.y.max = 90;
            baseOptions.scales.y.ticks.stepSize = 10;
        }

        return baseOptions;
    };

    // Activity Chart
    const activityChart = new Chart(document.getElementById('activityChart').getContext('2d'), {
        type: 'line',
        data: {
            labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN'],
            datasets: [{
                label: 'SYS',
                data: [0, 120, 140, 145, 135, 115],
                borderColor: '#7B61FF',
                borderWidth: 2,
                borderDash: [5, 5],
                tension: 0.4,
                fill: false,
                pointRadius: 0,
                pointHoverRadius: 6,
                pointHoverBackgroundColor: '#7B61FF',
                pointHoverBorderColor: '#fff',
                pointHoverBorderWidth: 2
            }, {
                label: 'Pulse',
                data: [0, 90, 130, 140, 130, 95],
                borderColor: '#FF6B6B',
                borderWidth: 2,
                tension: 0.4,
                fill: false,
                pointRadius: 0,
                pointHoverRadius: 6,
                pointHoverBackgroundColor: '#FF6B6B',
                pointHoverBorderColor: '#fff',
                pointHoverBorderWidth: 2
            }, {
                label: 'DIA',
                data: [0, 80, 110, 120, 110, 85],
                borderColor: '#00C7BE',
                borderWidth: 2,
                borderDash: [5, 5],
                tension: 0.4,
                fill: false,
                pointRadius: 0,
                pointHoverRadius: 6,
                pointHoverBackgroundColor: '#00C7BE',
                pointHoverBorderColor: '#fff',
                pointHoverBorderWidth: 2
            }]
        },
        options: getResponsiveChartOptions('activity')
    });

    // Weight Chart
    const weightChart = new Chart(document.getElementById('weightChart').getContext('2d'), {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Weight',
                data: [10, 45, 30, 60, 30, 45],
                borderColor: '#FF6B6B',
                borderWidth: 2,
                tension: 0.4,
                fill: false,
                pointRadius: 0,
                pointHoverRadius: 6,
                pointHoverBackgroundColor: '#FF6B6B',
                pointHoverBorderColor: '#fff',
                pointHoverBorderWidth: 2
            }]
        },
        options: getResponsiveChartOptions('weight')
    });


    const ctx = document.getElementById('patientProfileChart').getContext('2d');
    const data = {
        labels: ['Females', 'Male'],
        datasets: [{
            data: [360, 230],
            backgroundColor: ['#0C74C2', '#F0E5FC'],
            borderRadius: 20, 
            spacing: 5 ,
            borderWidth: 0
        }]
    };

    const options = {
        plugins: {
            legend: {
                display: true,
                position: 'bottom',
                labels: {
                    usePointStyle: true,
                    padding: 20
                }
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        const label = context.label || '';
                        const value = context.raw || '';
                        return `${label}: ${value}`;
                    }
                }
            }
        },
        cutout: '80%', // Makes the donut chart
    };

    new Chart(ctx, {
        type: 'doughnut', // Doughnut chart type
        data: data,
        options: options
    });

    // Custom plugin for rendering labels above bars
    const customLabelPlugin = {
        id: 'customLabelPlugin',
        beforeDatasetsDraw(chart) {
            const { ctx, data, chartArea: { top, left, right } } = chart;
            ctx.save();

            // Loop through the labels
            data.labels.forEach((label, index) => {
                const meta = chart.getDatasetMeta(0);
                const bar = meta.data[index];
                const labelX = chart.chartArea.left - -5; // Move label further left from the bars
                const labelY = bar.y;

                // Render the label to the left of the bars
                ctx.fillStyle = '#333';
                ctx.textAlign = 'left'; // Align text to the left
                ctx.font = '18px Arial';
                ctx.fillText(label, labelX, labelY - 17); // Position label left of the bar
            });
        }
    };

    // Data for the chart
    const careMonitorData = {
        labels: ['Diabetes', 'Blood Pressure', 'Weight', 'Cholesterol'],
        datasets: [{
            data: [500, 400, 365, 200],
            backgroundColor: ['#0C74C2', '#DDF2F9', '#DDF2F9', '#DDF2F9'], // Colors for the bars
            borderRadius: 5, // Rounded corners
            barThickness: 20 // Thickness of the bars
        }]
    };

    // Chart options
    const careMonitorOptions = {
        indexAxis: 'y', // Horizontal bar chart
        plugins: {
            legend: {
                display: false // Hide the legend
            }
        },
        scales: {
            x: {
                grid: {
                    display: false // Hide grid lines
                },
                ticks: {
                    display: false // Hide x-axis numbers
                }
            },
            y: {
                grid: {
                    display: false // Hide grid lines
                },
                ticks: {
                    display: false // Hide y-axis labels
                }
            }
        },
        responsive: true,
        maintainAspectRatio: false
    };

    // Initialize the chart
    const ctx2 = document.getElementById('careMonitorChart').getContext('2d');
    new Chart(ctx2, {
        type: 'bar',
        data: careMonitorData,
        options: careMonitorOptions,
        plugins: [customLabelPlugin] // Include the custom plugin
    });

    // Handle resize events
    window.addEventListener('resize', function() {
        activityChart.options = getResponsiveChartOptions('activity');
        weightChart.options = getResponsiveChartOptions('weight');
        activityChart.update();
        weightChart.update();
    });
});

// Initialize modals
var bloodPressureModal = new bootstrap.Modal(document.getElementById('bloodPressureAlert'));
var noPairedDeviceModal = new bootstrap.Modal(document.getElementById('noPairedDeviceAlert'));

// Function to switch between modals
function switchModals() {
    bloodPressureModal.hide();
    setTimeout(() => {
        noPairedDeviceModal.show();
    }, 400);
}

// Show the initial blood pressure alert
bloodPressureModal.show();