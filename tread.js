setTimeout(function() {
    document.getElementById("loading").style.display = "none";
    document.getElementById("content").style.display = "block";
}, 2500);

var press = document.getElementById("admin");
press.onclick = function() {
    window.location.href = "adminlogin.html";
};

var click = document.getElementById("user");
click.onclick = function() {
    window.location.href = "userlogin.html";
};

function generateRandomData(numPoints) {
    var data = [];
    for (var i = 0; i < numPoints; i++) {
        data.push(Math.floor(Math.random() * (40 - 25 + 1)) + 25);
    }
    return data;
}

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
        datasets: [{
            label: 'Tire Pressure',
            data: generateRandomData(10),
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Sample Points'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Pressure (PSI)'
                },
                beginAtZero: true
            }
        }
    }
});
// Function to generate random temperature data
function generateRandomTempData(numPoints) {
    var data = [];
    for (var i = 0; i < numPoints; i++) {
        data.push(Math.floor(Math.random() * (100 - 75 + 1)) + 75); // Random temperatures between 75 and 100
    }
    return data;
}

// Create a chart for tire temperature
var tempCtx = document.getElementById('tempChart').getContext('2d');
var tempChart = new Chart(tempCtx, {
    type: 'line',
    data: {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
        datasets: [{
            label: 'Tire Temperature',
            data: generateRandomTempData(10),
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Sample Points'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Temperature (°F)'
                },
                beginAtZero: true
            }
        }
    }
});
