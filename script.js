function DrawChart(CTX){

// Fonts========================================================================

var fontFamily = 'Courier';
var labelFontSize = 20;
var tooltipFontSize = 16;
var axesFontSize = 16;
var TitleFontSize = 25;

// Graph Color Palette==========================================================

// Areas

// var accelerationColor = '#26653F3F';
var accelerationColor = 'rgba(101, 63, 63, 15)';
// var steadyColor = '#2665653F';
var steadyColor = 'rgba(101, 101, 63, 15)';
// var finalColor = '#263F653F';
var finalColor = 'rgba(63, 101, 63, 15)';

// Lines
var normalizationColor = '#2EC608';
var boundariesColor = '#FF0000';
var prediction1Color = '#295C7E';
var dataPointsColor = 'rgba(61, 179, 158, 95)';
var dataColor = 'rgba(41, 92, 126, 15)';
var prediction2Color = 'rgba(177, 118, 53)';

// Fonts
var fontsColor ='#919191';
// =============================================================================
const uri = './cvdData.json';
var covidData = [];
// Plot2(CTX);
Plot1();

async function Plot1(){
  const response = await fetch(uri);
  const data = await response.json();
  console.log(data);
  Highcharts.chart('plot1', {
    chart: {
        zoomType: 'xy'
    },
    title: {
        text: 'Average Monthly Weather Data for Tokyo',
        align: 'left'
    },
    subtitle: {
        text: 'Source: WorldClimate.com',
        align: 'left'
    },
    plotOptions: {
        series: {
            connectNulls: true
        }
        },
    xAxis: [{
        categories: data[0].Plot1.xt,
        crosshair: true,
        plotBands: [{ // Critical Point
     		 from: data[0].Plot1.yCriticalP,
   		   to: data[0].Plot1.yCriticalP+2,
   		   color: 'rgba(255, 0, 0,)'
        },
        { // Acceleration Stage
     		 from: data[0].Plot1[0].yAccelerationStage[0],
   		   to: data[0].Plot1[0].yAccelerationStage[1],
   		   color: 'rgba(68, 0, 0, .2)'
        },
        { // Steady Stage
     		 from: data[0].Plot1[0].ySteadyStage[0],
   		   to: data[0].Plot1[0].ySteadyStage[1],
   		   color: 'rgba(68, 68, 0, .2)'
        },
        { // End Phase
     		 from: data[0].Plot1[0].yFinalStage[0],
   		   to: data[0].Plot1[0].yFinalStage[1],
   		   color: 'rgba(0, 68, 0, .2)'
        }]
    }],
    yAxis: [{ // Primary yAxis
        labels: {
            // format: '{value}°C',
            style: {
                color: Highcharts.getOptions().colors[2]
            }
        },
        title: {
            text: 'Cases',
            style: {
                color: Highcharts.getOptions().colors[2]
            }
        },
        opposite: true

    }, { // Secondary yAxis
        gridLineWidth: 0,
        title: {
            text: 'Rainfall',
            style: {
                color: Highcharts.getOptions().colors[0]
            }
        },
        labels: {
            format: '{value} mm',
            style: {
                color: Highcharts.getOptions().colors[0]
            }
        }

    }, { // Tertiary yAxis
        gridLineWidth: 0,
        title: {
            text: 'Sea-Level Pressure',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        },
        labels: {
            format: '{value} mb',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        },
        opposite: true
    }],
    tooltip: {
        shared: true
    },
    legend: {
        layout: 'vertical',
        align: 'left',
        x: 80,
        verticalAlign: 'top',
        y: 55,
        floating: true,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || // theme
            'rgba(255,255,255,0.25)'
    },
    series: [{
        name: 'prediction',
        type: 'areaspline',
        /* yAxis: 1, */
        data: data[0].Plot1[0].yPrediction,
        tooltip: {
            valueSuffix: ' cases'
        }

    }, {
        name: 'yUpper',
        type: 'spline',
/*         yAxis: 2, */
        data: data[0].Plot1[0].yUpper[0],
        /* marker: {
            enabled: false
        },
        dashStyle: 'shortdot',
        tooltip: {
            valueSuffix: ' mb'
        } */

    }, {
        name: 'yLower',
        type: 'spline',
        data: data[0].Plot1[0].yLower,
    },{
        name: 'normal P',
        type: 'spline',
/*         yAxis: 2, */
        data: data[0].Plot1[0].yNormalP,
       marker: {
            enabled: false
        },
        dashStyle: 'shortdot',
        tooltip: {
            valueSuffix: ' mb'
        }

    }],
    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    floating: false,
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom',
                    x: 0,
                    y: 0
                },
                yAxis: [{
                    labels: {
                        align: 'right',
                        x: 0,
                        y: -6
                    },
                    showLastLabel: false
                }, {
                    labels: {
                        align: 'left',
                        x: 0,
                        y: -6
                    },
                    showLastLabel: false
                }, {
                    visible: false
                }]
            }
        }]
    }
});
}









// async function Plot1(ctx){
//   const response = await fetch(uri);
//   const data = await response.json();
//   console.log("fetching done", data);
//
//     var mixedChart = new Chart(ctx, {
//       type: 'line',
//       data: {
//           datasets: [{
//             // Acceleration Stage ==============================================
//               label: 'Bar Dataset',
//               data: data[0].Plot1.yAccelerationStage,
//               type: 'bar',
//               backgroundColor: accelerationColor,
//               borderColor: 'rgba(0,0,0,0)',
//               borderSkipped: 'bottom',
//               // this dataset is drawn below
//               order: 1
//           },
//           {
//             // Steady Stage ====================================================
//               label: 'Bar Dataset',
//               data: data[0].Plot1.ySteadyStage,
//               type: 'bar',
//               backgroundColor: steadyColor,
//               borderColor: 'rgba(0,0,0,0)',
//               borderSkipped: 'bottom',
//               // this dataset is drawn below
//               order: 2
//           },
//           {
//             // Final Stage =====================================================
//               label: 'Bar Dataset',
//               data: data[0].Plot1.yFinalStage,
//               type: 'bar',
//               backgroundColor: finalColor,
//               borderColor: 'rgba(0,0,0,0)',
//               borderSkipped: 'bottom',
//               // this dataset is drawn below
//               order: 3
//           },
//            {
//             // Upper Boundary =====================================================
//               label: 'Bar Dataset',
//               data: data[0].Plot1.yUpper,
//               type: 'line',
//               borderColor: boundariesColor,
//               borderWidth: 1,
//               fill: false,
//               // this dataset is drawn below
//               order: 4
//           },
//           {
//             // Lower Boundary=====================================================
//               label: 'Bar Dataset',
//               data: data[0].Plot1.yLower,
//               type: 'line',
//               borderColor: boundariesColor,
//               borderWidth: 1,
//               fill: false,
//               // this dataset is drawn below
//               order: 5
//           },
//           //  {
//           //   // Normalization Point=====================================================
//           //     label: 'Bar Dataset',
//           //     data: data[0].Plot1.yNormalP,
//           //     type: 'line',
//           //     backgroundColor: normalizationColor,
//           //     borderColor: 'rgba(0,0,0,0)',
//           //     borderDash: [10,30],
//           //     borderWidth: 1,
//           //     fill: false,
//           //     // this dataset is drawn below
//           //     order: 1
//           // },
//           //  {
//           //   // Critical Point=====================================================
//           //     label: 'Crit',
//           //     data: data[0].Plot1.yCriticalP,
//           //     type: 'line',
//           //     backgroundColor: boundariesColor,
//           //     borderColor: 'rgba(0,0,0,0)',
//           //     borderSkipped: 'bottom',
//           //     fill: false,
//           //     // this dataset is drawn below
//           //     order: 7
//           // },
//            {
//             // Infected Prediction=====================================================
//               label: 'Line Dataset',
//               data: data[0].Plot1.yPrediction,
//               type: 'line',
//               backgroundColor: prediction1Color,
//               borderColor: 'rgba(0,0,0,0)',
//               fill: false,
//               // this dataset is drawn on top
//               order: 8
//           },
//           {
//             // Real DataPoints=====================================================
//               label: 'Bar Dataset',
//               data: data[0].Plot1.yDataPoints,
//               type: 'line',
//               pointBorderColor:'rgba(0,0,0,100)',
//               pointBackgroundColor: dataPointsColor,
//               borderColor: 'rgba(0,0,0,0)',
//               pointStyle: 'circle',
//               borderSkipped: 'bottom',
//               radius: 0.5,
//               // this dataset is drawn below
//               order: 9
//           }
//         ],
//           // Time axis=====================================================
//           labels: data[0].Plot1.xt
//       },
//       options: {
//         title:{
//           display: 'true',
//           fontColor: fontsColor,
//           text: data[0].Plot1.title
//         },
//         scales:{
//           yAxes:[{
//             scaleLabel:{
//               display: true,
//               fontColor: fontsColor,
//               labelString: data[0].Plot1.yLabel
//             }
//           }]
//         },
//         tooltips:{
//           mode: 'index'
//         }
//       }
//     });
//
//   }

//   async function Plot2(ctx){
//     const response = await fetch(uri);
//     const data = await response.json();
//     console.log("fetching done", data);
//     var pRadius;
//
//     if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
//       // true for mobile device
//       pRadius = 1;
//     }else{
//       // false for not mobile device
//       pRadius = 3;
//     }
//       var mixedChart = new Chart(ctx, {
//         type: 'line',
//         data: {
//             datasets: [
//              {
//               // Infected Prediction=====================================================
//                 label: 'Pronóstico',
//                 data: data[0].Plot2[0].yForecast,
//                 type: 'line',
//                 borderColor: prediction2Color,
//                 borderWidth: 1,
//                 fill: false,
//                 // this dataset is drawn on top
//                 order: 2
//             },
//             {
//               // Real DataPoints=====================================================
//                 label: 'Casos Reales',
//                 data: data[0].Plot2[0].yReal,
//                 type: 'line',
//                 fill: 'origin',
//                 borderColor: 'rgba(0,0,0,0)',
//                 backgroundColor: dataColor,
//                 pointBorderColor: 'rgba(191, 71, 45)',
//                 pointBackgroundColor: dataColor,
//                 borderSkipped: 'bottom',
//                 pointStyle: 'circle',
//                 spanGaps: true,
//                 pointRadius: pRadius,
//                 lineTension: 0.5,
//                 // this dataset is drawn below
//                 order: 1
//             }
//           ],
//             // Time axis=====================================================
//             labels: data[0].Plot2[0].xt
//         },
//         options: {
//           title:{
//             display: 'true',
//             fontColor: fontsColor,
//             fontSize: TitleFontSize,
//             text: data[0].Plot2[0].title
//           },
//           scales:{
//             yAxes:[{
//               scaleLabel:{
//                 display: true,
//                 fontColor: fontsColor,
//                 labelString: data[0].Plot2[0].yLabel,
//                 fontSize: labelFontSize
//               },
//               ticks:{
//                 fontSize: axesFontSize
//               }
//             }]
//           },
//           tooltips:{
//             mode: 'index',
//             titleFontSize: tooltipFontSize+2,
//             titleFontColor: fontsColor,
//             bodyFontSize: tooltipFontSize,
//           },
//           legend:{
//             display: true,
//             labels:{
//               fontSize: tooltipFontSize,
//               fontColor: fontsColor
//             }
//           },
//           animation: {
//             duration: 0 // general animation time
//           },
//           hover: {
//             animationDuration: 0 // duration of animations when hovering an item
//           },
//           responsiveAnimationDuration: 0, // animation duration after a resize
//           // elements: {
//           //   line: {
//           //     tension: 0 // disables bezier curves
//           //   }
//           // }
//         }
//       });
//
//     }

}
