// Data untuk scatter plot, pie chart, line chart, dan doughnut chart
const data = [
    { x: 10, y: 20, category: 'A' },
    { x: 15, y: 25, category: 'B' },
    { x: 30, y: 40, category: 'A' },
    { x: 35, y: 45, category: 'C' },
    { x: 50, y: 60, category: 'B' },
    { x: 60, y: 70, category: 'C' },
    { x: 70, y: 80, category: 'A' },
    { x: 80, y: 90, category: 'B' },
    { x: 90, y: 100, category: 'C' },
];

// Fungsi untuk menghitung statistik
function calculateStatistics(data) {
    const totalData = data.length;
    const averageX = (data.reduce((sum, point) => sum + point.x, 0) / totalData).toFixed(2);
    const maxY = Math.max(...data.map(point => point.y));
    const minY = Math.min(...data.map(point => point.y));

    return { totalData, averageX, maxY, minY };
}

// Fungsi untuk menghitung distribusi kategori
function calculateCategoryDistribution(data) {
    const categories = {};
    data.forEach(point => {
        if (categories[point.category]) {
            categories[point.category]++;
        } else {
            categories[point.category] = 1;
        }
    });
    return categories;
}

// Menampilkan statistik
const { totalData, averageX, maxY, minY } = calculateStatistics(data);
document.getElementById('totalData').textContent = totalData;
document.getElementById('averageX').textContent = averageX;
document.getElementById('maxY').textContent = maxY;
document.getElementById('minY').textContent = minY;

// Scatter Plot
const scatterCtx = document.getElementById('scatterChart').getContext('2d');
new Chart(scatterCtx, {
    type: 'scatter',
    data: {
        datasets: [{
            label: 'Fraud Detection Data',
            data: data.map(point => ({ x: point.x, y: point.y })),
            backgroundColor: 'rgba(255, 99, 132, 1)',
            borderColor: 'rgba(255, 99, 132, 1)',
            pointRadius: 5,
        }]
    },
    options: {
        scales: {
            x: {
                type: 'linear',
                position: 'bottom',
                title: {
                    display: true,
                    text: 'X Axis'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Y Axis'
                }
            }
        },
        plugins: {
            title: {
                display: true,
                text: 'Scatter Plot for Fraud Detection'
            }
        }
    }
});

// Pie Chart
const pieCtx = document.getElementById('pieChart').getContext('2d');
const categoryDistribution = calculateCategoryDistribution(data);
new Chart(pieCtx, {
    type: 'pie',
    data: {
        labels: Object.keys(categoryDistribution),
        datasets: [{
            label: 'Distribusi Kategori IMEI Cells',
            data: Object.values(categoryDistribution),
            backgroundColor: [
                'rgba(255, 99, 132, 0.8)',
                'rgba(54, 162, 235, 0.8)',
                'rgba(75, 192, 192, 0.8)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(75, 192, 192, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Distribusi Kategori Data'
            }
        }
    }
});

// Line Chart
const lineCtx = document.getElementById('lineChart').getContext('2d');
new Chart(lineCtx, {
    type: 'line',
    data: {
        labels: data.map(point => `Data ${point.x}`),
        datasets: [{
            label: 'Tren Data Y',
            data: data.map(point => point.y),
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2,
            fill: false
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            title: {
                display: true,
                text: 'Tren Data Y'
            }
        }
    }
});

// Doughnut Chart
const doughnutCtx = document.getElementById('doughnutChart').getContext('2d');
new Chart(doughnutCtx, {
    type: 'doughnut',
    data: {
        labels: Object.keys(categoryDistribution),
        datasets: [{
            label: 'Distribusi Kategori',
            data: Object.values(categoryDistribution),
            backgroundColor: [
                'rgba(255, 99, 132, 0.8)',
                'rgba(54, 162, 235, 0.8)',
                'rgba(75, 192, 192, 0.8)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(75, 192, 192, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Distribusi Kategori Data'
            }
        }
    }
});
