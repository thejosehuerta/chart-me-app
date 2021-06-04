# CS361-Project
Microservice & project for CS361
# -- 

app routes:
1. base_url/
   *  This returns the original microservice and works as normal
2. base_url/service?chart=CHART_TYPE&labels=FIRST_LABEL&values=FIRST_VALUE
   *  This route takes three unique query parameters:
      + chart
      + labels
      + values
   *  From the example above, replace the values in capital letters with your values. 
   *  For example
      + base_url/service?chart=doughnut&labels=spanish&values=500 <br>
    This will create a doughnut chart that has 'spanish' as a label and '500' as its value.
    You can enter as many paramters as you want as long as you follow this example
