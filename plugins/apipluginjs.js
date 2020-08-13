// PIE-CHART
// Load the Visualization API and the corechart package.
google.charts.load('upcoming', {'packages':['corechart']});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart1);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart1() {

    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');
    data.addRows([
    ['Active', 6352710],
    ['Recovered', 13681486],
    ['Deaths', 751542]
    ]);

    // Set chart options
    var options = {'title':'World Cases',
                'backgroundColor': 'red',
                'legend':'right',
                // 'width':400,
                'height':400,
                'slices': {
                  0: {offset: 0},
                  1: {offset: 0},
                  2: {offset: 0}
                }
              };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('pie_div'));
    chart.draw(data, options);
}

// BAR-CHART
// =====================================================================================================
// Load the Visualization API and the corechart package.
google.charts.load('upcoming', {'packages':['corechart']});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart2);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart2() {

  // Create the data table.
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Topping');
  data.addColumn('number', 'Slices');
  data.addRows([
    ['Africa', 1066505],
    ['Antarctica', 0],
    ['Asia', 4023872],
    ['Australasia', 22127],
    ['Eroupe', 3124530],
    ['North America', 5598307],
    ['South America', 3787998]
  ]);

  // Set chart options
  var options = {'title':'South West Cases',
              'backgroundColor': 'red',
              // 'width':500,
              'height':400,
              'colors': ['black', '#ffab91'],
              'hAxis': {title: 'Cases', minValue: 0, titleTextStyle: {color: 'white'}},
              'vAxis': {title: 'State', titleTextStyle: {color: 'white'}}
            };

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.BarChart(document.getElementById('barchart'));
  chart.draw(data, options);
}
// GRAPH CHART
// =====================================================================================================
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Month', 'Sales', 'Live Count'],
    ['Jan',  1000,      22],
    ['Feb',  1170,      460],
    ['March',  660,      5],
    ['May',  1030,      238],
    ['June',  1030,      416],
    ['July',  1030,      790],
    ['August',  1030,      386]
  ]);

  var options = {
    curveType: 'function',
    backgroundColor: 'red',
    legend: { position: 'bottom'},
    title: 'Nigeria Confirmed COVID-19 Spike',
    height: 400,
    hAxis: {title: 'Month',  titleTextStyle: {color: 'white'}},
    vAxis: {title: 'Patients', minValue: 0, titleTextStyle: {color: 'white'}}
  };

  var chart = new google.visualization.LineChart(document.getElementById('graph_div'));
  chart.draw(data, options);
}
