var mainColor = "#0078D7",
height = 150,
ftSz = "15px",
size = "65%";

// FOR MATH CHART

{
var options = {    
chart: {
height: height,
type: "radialBar",
},

series: [67],

plotOptions: {
radialBar: {
hollow: {
margin: 15,
size: size,
},

dataLabels: {
showOn: "always",
name: {
show: true,
fontSize: "13px",
},
value: {
fontSize: ftSz,
color: mainColor,
show: true,
},
},
},
},

stroke: {
lineCap: "round",
},
labels: ["Score"],
};

var mathChart = new ApexCharts(document.getElementById("math-chart"), options);
mathChart.render();
}


// FOR ENGLISH CHART
{
    var options = {
    chart: {
    height: height,
    type: "radialBar",
    },
    
    series: [90],
    
    plotOptions: {
    radialBar: {
    hollow: {
    margin: 15,
    size: size,
    },
    
    dataLabels: {
    showOn: "always",
    name: {
    show: true,
    fontSize: "13px",
    },
    value: {
    fontSize:  ftSz,
    color: mainColor,
    show: true,
    },
    },
    },
    },
    
    stroke: {
    lineCap: "round",
    },
    labels: ["Score"],
    };
    
    var englishChart = new ApexCharts(document.getElementById("english-chart"), options);
    englishChart.render();
    }


    // FOR PHYSICS CHART
{
    var options = {
    chart: {
    height: height,
    type: "radialBar",
    },
    
    series: [90],
    
    plotOptions: {
    radialBar: {
    hollow: {
    margin: 15,
    size: size,
    },
    
    dataLabels: {
    showOn: "always",
    name: {
    show: true,
    fontSize: "13px",
    },
    value: {
    fontSize:  ftSz,
    color: mainColor,
    show: true,
    },
    },
    },
    },
    
    stroke: {
    lineCap: "round",
    },
    labels: ["Score"],
    };
    
    var physicsChart = new ApexCharts(document.getElementById("physic-chart"), options);
    physicsChart.render();
    }

        // FOR CHEMISTY CHART
{
    var options = {
    chart: {
    height: height,
    type: "radialBar",
    },
    
    series: [70],
    
    plotOptions: {
    radialBar: {
    hollow: {
    margin: 15,
    size: size,
    },
    
    dataLabels: {
    showOn: "always",
    name: {
    show: true,
    fontSize: "13px",
    },
    value: {
    fontSize: ftSz,
    color: mainColor,
    show: true,
    },
    },
    },
    },
    
    stroke: {
    lineCap: "round",
    },
    labels: ["Score"],
    };
    
    var chemistryChart = new ApexCharts(document.getElementById("chemistry-chart"), options);
    chemistryChart.render();
    }


// ANALYTICS CHART
// {
// var options =  {
// chart:{
// type:"bar"
// },
// series:[{name:"Score",data:[{x:"Mathematics",y:10},{x:"English Language",y:20},
// {x:"Physics", y:30},{x:"Chemistry", y:40}]}],
// xaxis:{
//     type:"category"
// }
// };
// var analyticsCharts = new ApexCharts(document.getElementById("analytics-charts"),options);
// analyticsCharts.render()
// }

//ANALYTICS AREA CHART
// {
//     var options =  {
//         chart:{
//         type:"area"
//         },
//         series:[{name:"Score",data:[{x:"Mathematics",y:10},{x:"English Language",y:20},
//         {x:"Physics", y:30},{x:"Chemistry", y:40}]}],
//         xaxis:{
//             type:"category"
//         }
//         };
// var areaAnalyticsCharts = new ApexCharts(document.getElementById("area-analytics-charts"),options);
// areaAnalyticsCharts.render()

// }