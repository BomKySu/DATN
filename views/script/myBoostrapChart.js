//line
// var ctxL = document.getElementById("lineChart").getContext('2d');
var ctxL = document.getElementById("lineChart").getContext('2d');
var myLineChart = new Chart(ctxL, {
  type: 'line',
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [{
        label: "My First dataset",
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: [
          'rgba(105, 0, 132, .0)',
        ],
        borderColor: [
          'rgba(200, 99, 132, .9)',
        ],
        borderWidth: 2
      },
      {
        label: "My Second dataset",
        data: [28, 48, 40, 19, 86, 27, 90],
        backgroundColor: [
          'rgba(0, 137, 132, .0)',
        ],
        borderColor: [
          'rgba(0, 10, 130, .9)',
        ],
        borderWidth: 2
      },
      {
        label: "My Second dataset",
        data: [28.5, 48.5, 40.5, 19.5, 86.5, 27.5, 90.5],
        backgroundColor: [
          'rgba(0, 137, 132, .0)',
        ],
        borderColor: [
          'rgba(0, 10, 130, .9)',
        ],
        borderWidth: 2
      },
    ]
  },
  options: {
    responsive: true
  }
});