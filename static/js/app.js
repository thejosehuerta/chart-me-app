// Creates and displays a new data point input field.
document.getElementById('add-data-point-btn').addEventListener('click', function() {

  // Create new label and data point container.
  let new_container = document.createElement('div');
  new_container.setAttribute('class', 'label-data-point');
  new_container.setAttribute('id', 'label-data-point')

  // Create new label element.
  let new_label = document.createElement('input');
  new_label.setAttribute('class', 'form-control mr-sm-2');
  new_label.setAttribute('id', 'graph-label');
  new_label.setAttribute('type', 'text');
  new_label.setAttribute('placeholder', 'Label');

  // Create a new data point element.
  let new_input = document.createElement('input');
  new_input.setAttribute('class', 'form-control mr-sm-2');
  new_input.setAttribute('id', 'data-point');
  new_input.setAttribute('type', 'text');
  new_input.setAttribute('placeholder', 'Data Point');

  // Add the new label and data point elements to the new container.
  new_container.appendChild(new_label);
  new_container.appendChild(new_input);

  // Add the new label and data points elements to the data points container.
  let data_points_form = document.getElementById('container-labels-data-points');
  data_points_form.appendChild(new_container);
}); 

// Deletes a data point input field.
document.getElementById('delete-data-point-btn').addEventListener('click', function() {
  let label_data_point = document.getElementById('label-data-point');
  label_data_point.parentNode.removeChild(label_data_point);
});


// Create a variable to store the graph created.
var myChart;
// Create the chart
function create_chart() {
  // If a chart has been created, destroy it before creating a new one.
  if (myChart !== undefined) {
    myChart.destroy();
  }

  // Get the type of graph selected. 
  let graph_options = document.getElementById('select-options');
  let graph_type = graph_options.options[graph_options.selectedIndex].value;

  // Get the labels and data points from the input fields
  // and store them in separate arrays.
  inputs = document.getElementsByTagName('input');
  let labels = [];
  let data = [];
  for (let i = 0; i < inputs.length; i ++) {
      if (i % 2 === 0) {
          labels.push(inputs[i].value);
      }
      else {
          data.push(Number(inputs[i].value));
      }
  }

  let chart_data = {
    labels: labels,
    datasets: [
      {
        label: "Population (millions)",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
        data: data
      }
    ]
  };

  let chart_options = {
    legend: { display: false },
    title: {
      display: true,
      text: 'Predicted world population (millions) in 2050', 
    },
    animation: {
      onComplete: function() {
        var img_url = myChart.toBase64Image();
        console.log(img_url);
      }
    }  
  };
  
  myChart = new Chart(document.getElementById('chart'), {
      type: graph_type,
      data: chart_data,
      options: chart_options 
  });
}

// Create a graph based on the provided data points.
document.getElementById('create-graph-btn').addEventListener('click', function() {
  create_chart();
});

document.getElementById('download-graph-btn').addEventListener('click', function() {
  var a = document.createElement('a');
  a.href = myChart.toBase64Image();
  a.download = 'chart.png';
  a.click();
});


