var app = angular.module('simple-chart', []);

app.controller('MainCtrl', function($scope, $http) {
  $http.get("https://assignmentone-ryanxiquanli1.c9users.io/Data").then(function (response) {
    
      google.charts.load('current', {packages: ['corechart', 'bar']});
      google.charts.setOnLoadCallback(function() {
        formatDataTable(response.data);
        

       
      });
  });
});



function formatDataTable(chartdata) {
  var data = [];
  var header = ['Disease', 'Death Count'];
  
  data.push(header);
 console.table(chartdata);
  
  for (var i = 0; i < chartdata.length; i++) {
    var temp = [];
    temp.push(chartdata[i]._id);
    temp.push(chartdata[i].value);
    data.push(temp);
  }
   
   console.table(data);
   
  var g_data = google.visualization.arrayToDataTable(data);
  var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
  chart.draw(g_data, getOptions());
}

function getOptions()
{
     var options = {
        title: '2013 Death in California',
        width: 900,
        height: 500,
        chartArea: {width: '50%'},
        hAxis: {
          title: 'Number',
          minValue: 0
        },
        vAxis: {
          title: 'Type of Disease'
        }
      };

    return options;
}