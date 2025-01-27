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
                    generateLabels: function (chart) {
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
                    label: function (context) {
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

     if (type === 'weight') {
        baseOptions.scales.y.max = 90;
        baseOptions.scales.y.ticks.stepSize = 10;
    }

    return baseOptions;
};

// Activity Chart
const activityChart = new Chart(document.getElementById('registered-users').getContext('2d'), {
    type: 'line',
    data: {
        labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
        datasets: [{
            label: 'Single Registered',
            data: [0, 120, 140, 145, 135, 140 , 135 , 120 , 135, 110 , 125 , 130],
            borderColor: '#962DFF',
            borderWidth: 2,
            borderDash: [5, 5],
            tension: 0.4,
            fill: false,
            pointRadius: 0,
            pointHoverRadius: 6,
            pointHoverBackgroundColor: '#962DFF',
            pointHoverBorderColor: '#fff',
            pointHoverBorderWidth: 2
        }, {
            label: 'Guest Users',
            data: [0, 90, 130, 120, 120, 95 , 80 , 90 , 95, 90, 100, 95],
            borderColor: '#FF718B',
            borderWidth: 2,
            tension: 0.4,
            fill: false,
            pointRadius: 0,
            pointHoverRadius: 6,
            pointHoverBackgroundColor: '#FF718B',
            pointHoverBorderColor: '#fff',
            pointHoverBorderWidth: 2
        }, {
            label: 'DHA Users',
            data: [0, 80, 110, 120, 110, 85 , 90 , 95, 100, 105 , 110 , 115],
            borderColor: '#93AAFD',
            borderWidth: 2,
            borderDash: [5, 5],
            tension: 0.4,
            fill: false,
            pointRadius: 0,
            pointHoverRadius: 6,
            pointHoverBackgroundColor: '#93AAFD',
            pointHoverBorderColor: '#fff',
            pointHoverBorderWidth: 2
        }]
    },
    options: getResponsiveChartOptions('activity')
});

// Sign-up Chart
const signupChart = new Chart(document.getElementById('signup-users').getContext('2d'), {
    type: 'line',
    data: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [{
            label: 'Last Month',
            data: [2100, 3400, 2000, 1800, 3500],
            borderColor: '#962DFF',
            borderWidth: 2,
            // borderDash: [5, 5],
            tension: 0.4,
            fill: false,
            pointRadius: 0,
            pointHoverRadius: 6,
            pointHoverBackgroundColor: '#962DFF',
            pointHoverBorderColor: '#fff',
            pointHoverBorderWidth: 2
        }, {
            label: 'This Month',
            data: [1600, 3000, 2300, 3000, 4000],
            borderColor: '#FF718B',
            borderWidth: 2,
            tension: 0.4,
            fill: false,
            pointRadius: 0,
            pointHoverRadius: 6,
            pointHoverBackgroundColor: '#FF718B',
            pointHoverBorderColor: '#fff',
            pointHoverBorderWidth: 2
        }]
    },
    options: getResponsiveChartOptions('activity')
});
