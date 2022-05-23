# Graph Creator
Originally created by Oregon State University student Eduardo Garcia, Graph Creator is a website capable of creating different types of graphs from labels and data points of your choice. <p>
Grouped together for our Software Engineering I (CS 361) class at Oregon State University, Eduardo and I worked together to convert his website into a service my [TranslateMe](https://github.com/thejosehuerta/translate-me-app) website could use.
  
# Website
To visit the Graph Creator website (designed by Eduardo), go to https://chart-me-app.herokuapp.com/

# Graph Creation Microservice
The [TranslateMe](https://github.com/thejosehuerta/translate-me-app) website uses the Graph Creation Microservice to generate a chart of chosen languages. Each language is a unique color and their size will represent the hours it would take to learn them. This chart is displayed in an iframe. <p>
## How It Works
The base URL of this website is `https://chart-me-app.herokuapp.com/`. It offers the API endpoint, `service?`, where all you'd have to do is specify the type of chart you want to see and then its labels and values.
  
| ![image](https://user-images.githubusercontent.com/44957830/169884281-92fd5e80-a935-4fde-97da-7bd50c3e2cf1.png "Graph Microservice") | 
|:--:| 
| *Graph microservice showing API endpoint that returns graph and values entered* |

*  This endpoint takes in three unique query parameters:
   + chart
   + labels
   + values
  
You can enter as many labels and values as you want as long as you follow the convention: `/service?chart=CHART_TYPE&labels=FIRST_LABEL&values=FIRST_VALUE&labels=N_LABEL&values=N_VALUE`
