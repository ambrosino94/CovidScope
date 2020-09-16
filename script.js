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

Plot2(CTX);

async function Plot1(ctx){
  const response = await fetch(uri);
  const data = await response.json();
  console.log("fetching done", data);

    var mixedChart = new Chart(ctx, {
      type: 'line',
      data: {
          datasets: [{
            // Acceleration Stage ==============================================
              label: 'Bar Dataset',
              data: data[0].Plot1.yAccelerationStage,
              type: 'bar',
              backgroundColor: accelerationColor,
              borderColor: 'rgba(0,0,0,0)',
              borderSkipped: 'bottom',
              // this dataset is drawn below
              order: 1
          },
          {
            // Steady Stage ====================================================
              label: 'Bar Dataset',
              data: data[0].Plot1.ySteadyStage,
              type: 'bar',
              backgroundColor: steadyColor,
              borderColor: 'rgba(0,0,0,0)',
              borderSkipped: 'bottom',
              // this dataset is drawn below
              order: 2
          },
          {
            // Final Stage =====================================================
              label: 'Bar Dataset',
              data: data[0].Plot1.yFinalStage,
              type: 'bar',
              backgroundColor: finalColor,
              borderColor: 'rgba(0,0,0,0)',
              borderSkipped: 'bottom',
              // this dataset is drawn below
              order: 3
          },
           {
            // Upper Boundary =====================================================
              label: 'Bar Dataset',
              data: data[0].Plot1.yUpper,
              type: 'line',
              borderColor: boundariesColor,
              borderWidth: 1,
              fill: false,
              // this dataset is drawn below
              order: 4
          },
          {
            // Lower Boundary=====================================================
              label: 'Bar Dataset',
              data: data[0].Plot1.yLower,
              type: 'line',
              borderColor: boundariesColor,
              borderWidth: 1,
              fill: false,
              // this dataset is drawn below
              order: 5
          },
          //  {
          //   // Normalization Point=====================================================
          //     label: 'Bar Dataset',
          //     data: data[0].Plot1.yNormalP,
          //     type: 'line',
          //     backgroundColor: normalizationColor,
          //     borderColor: 'rgba(0,0,0,0)',
          //     borderDash: [10,30],
          //     borderWidth: 1,
          //     fill: false,
          //     // this dataset is drawn below
          //     order: 1
          // },
          //  {
          //   // Critical Point=====================================================
          //     label: 'Crit',
          //     data: data[0].Plot1.yCriticalP,
          //     type: 'line',
          //     backgroundColor: boundariesColor,
          //     borderColor: 'rgba(0,0,0,0)',
          //     borderSkipped: 'bottom',
          //     fill: false,
          //     // this dataset is drawn below
          //     order: 7
          // },
           {
            // Infected Prediction=====================================================
              label: 'Line Dataset',
              data: data[0].Plot1.yPrediction,
              type: 'line',
              backgroundColor: prediction1Color,
              borderColor: 'rgba(0,0,0,0)',
              fill: false,
              // this dataset is drawn on top
              order: 8
          },
          {
            // Real DataPoints=====================================================
              label: 'Bar Dataset',
              data: data[0].Plot1.yDataPoints,
              type: 'line',
              pointBorderColor:'rgba(0,0,0,100)',
              pointBackgroundColor: dataPointsColor,
              borderColor: 'rgba(0,0,0,0)',
              pointStyle: 'circle',
              borderSkipped: 'bottom',
              radius: 0.5,
              // this dataset is drawn below
              order: 9
          }
        ],
          // Time axis=====================================================
          labels: data[0].Plot1.xt
      },
      options: {
        title:{
          display: 'true',
          fontColor: fontsColor,
          text: data[0].Plot1.title
        },
        scales:{
          yAxes:[{
            scaleLabel:{
              display: true,
              fontColor: fontsColor,
              labelString: data[0].Plot1.yLabel
            }
          }]
        },
        tooltips:{
          mode: 'index'
        }
      }
    });

  }

  async function Plot2(ctx){
    const response = await fetch(uri);
    const data = await response.json();
    console.log("fetching done", data);
    var pRadius;
    if (window.screen.width*window.devicePixelRatio < 990) {
      pRadius = 1;
    } else if (window.screen.width*window.devicePixelRatio > 990) {
      pRadius = 3;
    }
      var mixedChart = new Chart(ctx, {
        type: 'line',
        data: {
            datasets: [
             {
              // Infected Prediction=====================================================
                label: 'Pronóstico',
                data: data[0].Plot2[0].yForecast,
                type: 'line',
                borderColor: prediction2Color,
                borderWidth: 1,
                fill: false,
                // this dataset is drawn on top
                order: 2
            },
            {
              // Real DataPoints=====================================================
                label: 'Casos Reales',
                data: data[0].Plot2[0].yReal,
                type: 'line',
                fill: 'origin',
                borderColor: 'rgba(0,0,0,0)',
                backgroundColor: dataColor,
                pointBorderColor: 'rgba(191, 71, 45)',
                pointBackgroundColor: dataColor,
                borderSkipped: 'bottom',
                pointStyle: 'circle',
                spanGaps: true,
                pointRadius: pRadius,
                lineTension: 0.5,
                // this dataset is drawn below
                order: 1
            }
          ],
            // Time axis=====================================================
            labels: data[0].Plot2[0].xt
        },
        options: {
          title:{
            display: 'true',
            fontColor: fontsColor,
            fontSize: TitleFontSize,
            text: data[0].Plot2[0].title
          },
          scales:{
            yAxes:[{
              scaleLabel:{
                display: true,
                fontColor: fontsColor,
                labelString: data[0].Plot2[0].yLabel,
                fontSize: labelFontSize
              },
              ticks:{
                fontSize: axesFontSize
              }
            }]
          },
          tooltips:{
            mode: 'index',
            titleFontSize: tooltipFontSize+2,
            titleFontColor: fontsColor,
            bodyFontSize: tooltipFontSize,
          },
          legend:{
            display: true,
            labels:{
              fontSize: tooltipFontSize,
              fontColor: fontsColor
            }
          },
          animation: {
            duration: 0 // general animation time
          },
          hover: {
            animationDuration: 0 // duration of animations when hovering an item
          },
          responsiveAnimationDuration: 0, // animation duration after a resize
          elements: {
            line: {
              tension: 0 // disables bezier curves
            }
          }
        }
      });

    }

}
