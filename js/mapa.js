/*
//Responsive del menú
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}*/

var ctxBsc= document.getElementById("myChart-bsc").getContext("2d");
var myChartBsc= new Chart(ctxBsc,{
    type:"line",

    data:{
        labels:['1980','1990','2000','2010', '2018'],
        datasets:[{
                label:'Turquía',
                data:[82299, 149955, 227408, 309077, 417049],
                backgroundColor: 'rgb(104, 123, 140, 0.7)',
                borderColor: 'rgb(104, 123, 140, 0.9)',
        },{
          label:'Argentina',
                data:[109814, 112442, 150566, 191223, 210162],
               backgroundColor:'rgb(117, 170, 219, 0.7)',
                borderColor: 'rgb(117, 170, 219, 0.9)',

         },{
          label:'Brasil',
                data:[210035, 228626, 364390, 445249, 500088],
             backgroundColor:'rgb(177, 204, 104, 0.7)',
                borderColor: 'rgb(177, 204, 104, 0.9)',

         },{
         label:'EE.UU.',
                 data:[4877372, 5063855, 5858216, 5555444, 5275478],
                  backgroundColor:'rgb(0, 33, 71, 0.7)',
                  borderColor: 'rgb(0, 33, 71, 0.9)',

        },{
         label:'China',
                data:[1559623, 2397508, 3672116, 9126943, 11255878],
                 backgroundColor:'rgb(219, 179, 90, 0.7)',
                 borderColor: 'rgb(219, 179, 90, 0.9)',

       },{
         label:'India',
                 data:[299510, 594848, 986616, 1750564, 2621919],
                 backgroundColor:'rgb(255, 153, 51, 0.7)',
                borderColor: 'rgb(255, 153, 51, 0.9)',

       },{
         label:'Indonesia',
                 data:[89903, 162749, 294948, 418281, 557528],
                 backgroundColor:'rgb(219, 119, 112, 0.7)',
                 borderColor: 'rgb(219, 119, 112, 0.9)',
       },{
         label:'Perú',
                 data:[23040, 21044, 28928, 45111, 57383],
                backgroundColor:'rgb(207, 124, 178, 0.7)',
                borderColor: 'rgb(207, 124, 178, 0.9)',

        },{
         label:'Canadá',
                data:[454759, 454698, 557725, 565853, 594198],
                backgroundColor:'rgb(206,219,240, 0.7)',
                borderColor: 'rgb( 206,219,240 , 0.9)',

        },{
          label:'México',
                 data:[241886, 290472, 397058, 479215, 495778],
                backgroundColor:'rgb(0,104,71, 0.7)',
                borderColor: 'rgb(0,104,71, 0.9)',

       }] ,
    },
    options:{

        scales:{
            yAxes:[{
              gridLines:{
                color:"rgba(255,255,255,0.7)",
              },
                    ticks:{
                        beginAtZero:true,
                        fontColor: 'white',
                    }
            }],
            xAxes:[{
              gridLines:{
                color:"rgba(255,255,255,0.7)",
              },
              ticks:{
                fontColor: 'white',
            }
            }],
        },
        legend: {
          position: 'bottom',
          labels: {

              // This more specific font property overrides the global property
              fontColor: 'white'
          }
      },

    }
});






var ctxTq= document.getElementById("myChart-tq").getContext("2d");
var myChartTq= new Chart(ctxTq,{
    type:"line",

    data:{
        labels:['1980','1990','2000','2010', '2018'],
        datasets:[{
                label:'Turquía',
                data:[82299, 149955, 227408, 309077, 417049],
                backgroundColor: 'rgb(104, 123, 140, 0.7)',
                borderColor: 'rgb(104, 123, 140, 0.9)',
        },{
          label:'Argentina',
                data:[109814, 112442, 150566, 191223, 210162],
                backgroundColor:'rgb(117, 170, 219, 0.7)',
                borderColor: 'rgb(117, 170, 219, 0.9)',
               hidden:true,
         },{
          label:'Brasil',
                data:[210035, 228626, 364390, 445249, 500088],
                backgroundColor:'rgb(177, 204, 104, 0.7)',
                borderColor: 'rgb(177, 204, 104, 0.9)',
                hidden:true,
         },{
         label:'EE.UU.',
                 data:[4877372, 5063855, 5858216, 5555444, 5275478],
                  backgroundColor:'rgb(0, 33, 71, 0.7)',
                  borderColor: 'rgb(0, 33, 71, 0.9)',
                 hidden:true,
        },{
         label:'China',
                data:[1559623, 2397508, 3672116, 9126943, 11255878],
                 backgroundColor:'rgb(255, 222, 0, 0.7)',
                 borderColor: 'rgb(255, 222, 0, 0.9)',
                 hidden:true,
       },{
         label:'India',
                 data:[299510, 594848, 986616, 1750564, 2621919],
                 backgroundColor:'rgb(255, 153, 51, 0.7)',
                borderColor: 'rgb(255, 153, 51, 0.9)',
                hidden:true,
        },{
         label:'Indonesia',
                 data:[89903, 162749, 294948, 418281, 557528],
                 backgroundColor:'rgb(219, 119, 112, 0.7)',
                 borderColor: 'rgb(219, 119, 112, 0.9)',
                 hidden:true,
        },{
         label:'Perú',
                 data:[23040, 21044, 28928, 45111, 57383],
                backgroundColor:'rgb(207, 124, 178, 0.7)',
                borderColor: 'rgb(207, 124, 178, 0.9)',
                hidden:true,
        },{
         label:'Canadá',
                data:[454759, 454698, 557725, 565853, 594198],
                backgroundColor:'rgb(206,219,240, 0.7)',
                borderColor: 'rgb( 206,219,240 , 0.9)',
                hidden:true,
        },{
          label:'México',
                 data:[241886, 290472, 397058, 479215, 495778],
                backgroundColor:'rgb(0,104,71, 0.7)',
                borderColor: 'rgb(0,104,71, 0.9)',
                 hidden:true,
       }] ,
    },
    options:{

        scales:{
            yAxes:[{
              gridLines:{
                color:"rgba(255,255,255,0.7)",
              },
                    ticks:{
                        beginAtZero:true,
                        fontColor: 'white',
                    }
            }],
            xAxes:[{
              gridLines:{
                color:"rgba(255,255,255,0.7)",
              },
              ticks:{
                fontColor: 'white',
            }
            }],
        },
        legend: {
          position: 'bottom',
          labels: {
              // This more specific font property overrides the global property
              fontColor: 'white'
          }
      },

    }
});

var ctxArg= document.getElementById("myChart-arg").getContext("2d");
var myChartArg= new Chart(ctxArg,{
    type:"line",

    data:{
        labels:['1980','1990','2000','2010', '2018'],
        datasets:[{
                label:'Turquía',
                data:[82299, 149955, 227408, 309077, 417049],
                backgroundColor: 'rgb(104, 123, 140, 0.7)',
                borderColor: 'rgb(104, 123, 140, 0.9)',
                hidden:true,
        },{
          label:'Argentina',
                data:[109814, 112442, 150566, 191223, 210162],
                backgroundColor:'rgb(117, 170, 219, 0.7)',
                borderColor: 'rgb(117, 170, 219, 0.9)',

         },{
          label:'Brasil',
                data:[210035, 228626, 364390, 445249, 500088],
                backgroundColor:'rgb(177, 204, 104, 0.7)',
                borderColor: 'rgb(177, 204, 104, 0.9)',
                hidden:true,
         },{
         label:'EE.UU.',
                 data:[4877372, 5063855, 5858216, 5555444, 5275478],
                  backgroundColor:'rgb(0, 33, 71, 0.7)',
                  borderColor: 'rgb(0, 33, 71, 0.9)',
                 hidden:true,
        },{
         label:'China',
                data:[1559623, 2397508, 3672116, 9126943, 11255878],
                backgroundColor:'rgb(219, 179, 90, 0.7)',
                 borderColor: 'rgb(219, 179, 90, 0.9)',
                 hidden:true,
       },{
         label:'India',
                 data:[299510, 594848, 986616, 1750564, 2621919],
                 backgroundColor:'rgb(255, 153, 51, 0.7)',
                borderColor: 'rgb(255, 153, 51, 0.9)',
                hidden:true,
        },{
         label:'Indonesia',
                 data:[89903, 162749, 294948, 418281, 557528],
                 backgroundColor:'rgb(219, 119, 112, 0.7)',
                 borderColor: 'rgb(219, 119, 112, 0.9)',
                 hidden:true,
        },{
         label:'Perú',
                 data:[23040, 21044, 28928, 45111, 57383],
                backgroundColor:'rgb(207, 124, 178, 0.7)',
                borderColor: 'rgb(207, 124, 178, 0.9)',
                hidden:true,
        },{
         label:'Canadá',
                data:[454759, 454698, 557725, 565853, 594198],
                backgroundColor:'rgb(206,219,240, 0.7)',
                borderColor: 'rgb( 206,219,240 , 0.9)',
                hidden:true,
        },{
          label:'México',
                 data:[241886, 290472, 397058, 479215, 495778],
                backgroundColor:'rgb(0,104,71, 0.7)',
                borderColor: 'rgb(0,104,71, 0.9)',
                 hidden:true,
       }] ,
    },
    options:{

        scales:{
            yAxes:[{
              gridLines:{
                color:"rgba(255,255,255,0.7)",
              },
                    ticks:{
                        beginAtZero:true,
                        fontColor: 'white',
                    }
            }],
            xAxes:[{
              gridLines:{
                color:"rgba(255,255,255,0.7)",
              },
              ticks:{
                fontColor: 'white',
            }
            }],
        },
        legend: {
          position: 'bottom',
          labels: {
              // This more specific font property overrides the global property
              fontColor: 'white'
          }
      },

    }
});

var ctxBr= document.getElementById("myChart-br").getContext("2d");
var myChartBr= new Chart(ctxBr,{
    type:"line",

    data:{
        labels:['1980','1990','2000','2010', '2018'],
        datasets:[{
                label:'Turquía',
                data:[82299, 149955, 227408, 309077, 417049],
                backgroundColor: 'rgb(104, 123, 140, 0.7)',
                borderColor: 'rgb(104, 123, 140, 0.9)',
                hidden:true,
        },{
          label:'Argentina',
                data:[109814, 112442, 150566, 191223, 210162],
               backgroundColor:'rgb(117, 170, 219, 0.7)',
                borderColor: 'rgb(117, 170, 219, 0.9)',
              hidden:true,
         },{
          label:'Brasil',
                data:[210035, 228626, 364390, 445249, 500088],
                backgroundColor:'rgb(177, 204, 104, 0.7)',
                borderColor: 'rgb(177, 204, 104, 0.9)',
                //hidden:true,
         },{
         label:'EE.UU.',
                 data:[4877372, 5063855, 5858216, 5555444, 5275478],
                  backgroundColor:'rgb(0, 33, 71, 0.7)',
                  borderColor: 'rgb(0, 33, 71, 0.9)',
                 hidden:true,
        },{
         label:'China',
                data:[1559623, 2397508, 3672116, 9126943, 11255878],
                backgroundColor:'rgb(219, 179, 90, 0.7)',
                borderColor: 'rgb(219, 179, 90, 0.9)',
                 hidden:true,
       },{
         label:'India',
                 data:[299510, 594848, 986616, 1750564, 2621919],
                 backgroundColor:'rgb(255, 153, 51, 0.7)',
                borderColor: 'rgb(255, 153, 51, 0.9)',
                hidden:true,
        },{
         label:'Indonesia',
                 data:[89903, 162749, 294948, 418281, 557528],
                 backgroundColor:'rgb(219, 119, 112, 0.7)',
                 borderColor: 'rgb(219, 119, 112, 0.9)',
                 hidden:true,
        },{
         label:'Perú',
                 data:[23040, 21044, 28928, 45111, 57383],
                backgroundColor:'rgb(207, 124, 178, 0.7)',
                borderColor: 'rgb(207, 124, 178, 0.9)',
                hidden:true,
        },{
         label:'Canadá',
                data:[454759, 454698, 557725, 565853, 594198],
                backgroundColor:'rgb(206,219,240, 0.7)',
                borderColor: 'rgb( 206,219,240 , 0.9)',
                hidden:true,
        },{
          label:'México',
                 data:[241886, 290472, 397058, 479215, 495778],
                backgroundColor:'rgb(0,104,71, 0.7)',
                borderColor: 'rgb(0,104,71, 0.9)',
                 hidden:true,
       }] ,
    },
    options:{

        scales:{
            yAxes:[{
              gridLines:{
                color:"rgba(255,255,255,0.7)",
              },
                    ticks:{
                        beginAtZero:true,
                        fontColor: 'white',
                    }
            }],
            xAxes:[{
              gridLines:{
                color:"rgba(255,255,255,0.7)",
              },
              ticks:{
                fontColor: 'white',
            }
            }],
        },
        legend: {
          position: 'bottom',
          labels: {
              // This more specific font property overrides the global property
              fontColor: 'white'
          }
      },

    }
});

var ctxUsa= document.getElementById("myChart-usa").getContext("2d");
var myChartUsa= new Chart(ctxUsa,{
    type:"line",

    data:{
        labels:['1980','1990','2000','2010', '2018'],
        datasets:[{
                label:'Turquía',
                data:[82299, 149955, 227408, 309077, 417049],
                backgroundColor: 'rgb(104, 123, 140, 0.7)',
                borderColor: 'rgb(104, 123, 140, 0.9)',
                hidden:true,
        },{
          label:'Argentina',
                data:[109814, 112442, 150566, 191223, 210162],
               backgroundColor:'rgb(117, 170, 219, 0.7)',
                borderColor: 'rgb(117, 170, 219, 0.9)',
              hidden:true,
         },{
          label:'Brasil',
                data:[210035, 228626, 364390, 445249, 500088],
                backgroundColor:'rgb(177, 204, 104, 0.7)',
                borderColor: 'rgb(177, 204, 104, 0.9)',
                hidden:true,
         },{
         label:'EE.UU.',
                 data:[4877372, 5063855, 5858216, 5555444, 5275478],
                  backgroundColor:'rgb(0, 33, 71, 0.7)',
                  borderColor: 'rgb(0, 33, 71, 0.9)',
                 //hidden:true,
        },{
         label:'China',
                data:[1559623, 2397508, 3672116, 9126943, 11255878],
                backgroundColor:'rgb(219, 179, 90, 0.7)',
                borderColor: 'rgb(219, 179, 90, 0.9)',
                 hidden:true,
       },{
         label:'India',
                 data:[299510, 594848, 986616, 1750564, 2621919],
                 backgroundColor:'rgb(255, 153, 51, 0.7)',
                borderColor: 'rgb(255, 153, 51, 0.9)',
                hidden:true,
        },{
         label:'Indonesia',
                 data:[89903, 162749, 294948, 418281, 557528],
                 backgroundColor:'rgb(219, 119, 112, 0.7)',
                 borderColor: 'rgb(219, 119, 112, 0.9)',
                 hidden:true,
        },{
         label:'Perú',
                 data:[23040, 21044, 28928, 45111, 57383],
                backgroundColor:'rgb(207, 124, 178, 0.7)',
                borderColor: 'rgb(207, 124, 178, 0.9)',
                hidden:true,
        },{
         label:'Canadá',
                data:[454759, 454698, 557725, 565853, 594198],
                backgroundColor:'rgb(206,219,240, 0.7)',
                borderColor: 'rgb( 206,219,240 , 0.9)',
                hidden:true,
        },{
          label:'México',
                 data:[241886, 290472, 397058, 479215, 495778],
                backgroundColor:'rgb(0,104,71, 0.7)',
                borderColor: 'rgb(0,104,71, 0.9)',
                 hidden:true,
       }] ,
    },
    options:{

        scales:{
            yAxes:[{
              gridLines:{
                color:"rgba(255,255,255,0.7)",
              },
                    ticks:{
                        beginAtZero:true,
                        fontColor: 'white',
                    }
            }],
            xAxes:[{
              gridLines:{
                color:"rgba(255,255,255,0.7)",
              },
              ticks:{
                fontColor: 'white',
            }
            }],
        },
        legend: {
          position: 'bottom',
          labels: {
              // This more specific font property overrides the global property
              fontColor: 'white'
          }
      },

    }
});

var ctxChina= document.getElementById("myChart-china").getContext("2d");
var myChartChina= new Chart(ctxChina,{
    type:"line",

    data:{
        labels:['1980','1990','2000','2010', '2018'],
        datasets:[{
                label:'Turquía',
                data:[82299, 149955, 227408, 309077, 417049],
                backgroundColor: 'rgb(104, 123, 140, 0.7)',
                borderColor: 'rgb(104, 123, 140, 0.9)',
                hidden:true,
        },{
          label:'Argentina',
                data:[109814, 112442, 150566, 191223, 210162],
                backgroundColor:'rgb(117, 170, 219, 0.7)',
                borderColor: 'rgb(117, 170, 219, 0.9)',
              hidden:true,
         },{
          label:'Brasil',
                data:[210035, 228626, 364390, 445249, 500088],
                backgroundColor:'rgb(177, 204, 104, 0.7)',
                borderColor: 'rgb(177, 204, 104, 0.9)',
                hidden:true,
         },{
         label:'EE.UU.',
                 data:[4877372, 5063855, 5858216, 5555444, 5275478],
                  backgroundColor:'rgb(0, 33, 71, 0.7)',
                  borderColor: 'rgb(0, 33, 71, 0.9)',
                 hidden:true,
        },{
         label:'China',
                data:[1559623, 2397508, 3672116, 9126943, 11255878],
                backgroundColor:'rgb(219, 179, 90, 0.7)',
                 borderColor: 'rgb(219, 179, 90, 0.9)',
                 //hidden:true,
       },{
         label:'India',
                 data:[299510, 594848, 986616, 1750564, 2621919],
                 backgroundColor:'rgb(255, 153, 51, 0.7)',
                borderColor: 'rgb(255, 153, 51, 0.9)',
                hidden:true,
        },{
         label:'Indonesia',
                 data:[89903, 162749, 294948, 418281, 557528],
                 backgroundColor:'rgb(219, 119, 112, 0.7)',
                 borderColor: 'rgb(219, 119, 112, 0.9)',
                 hidden:true,
        },{
         label:'Perú',
                 data:[23040, 21044, 28928, 45111, 57383],
                backgroundColor:'rgb(207, 124, 178, 0.7)',
                borderColor: 'rgb(207, 124, 178, 0.9)',
                hidden:true,
        },{
         label:'Canadá',
                data:[454759, 454698, 557725, 565853, 594198],
                backgroundColor:'rgb(206,219,240, 0.7)',
                borderColor: 'rgb( 206,219,240 , 0.9)',
                hidden:true,
        },{
          label:'México',
                 data:[241886, 290472, 397058, 479215, 495778],
                backgroundColor:'rgb(0,104,71, 0.7)',
                borderColor: 'rgb(0,104,71, 0.9)',
                 hidden:true,
       }] ,
    },
    options:{

        scales:{
            yAxes:[{
              gridLines:{
                color:"rgba(255,255,255,0.7)",
              },
                    ticks:{
                        beginAtZero:true,
                        fontColor: 'white',
                    }
            }],
            xAxes:[{
              gridLines:{
                color:"rgba(255,255,255,0.7)",
              },
              ticks:{
                fontColor: 'white',
            }
            }],
        },
        legend: {
          position: 'bottom',
          labels: {
              // This more specific font property overrides the global property
              fontColor: 'white'
          }
      },

    }
});

var ctxIndia= document.getElementById("myChart-india").getContext("2d");
var myChartIndia= new Chart(ctxIndia,{
    type:"line",

    data:{
        labels:['1980','1990','2000','2010', '2018'],
        datasets:[{
                label:'Turquía',
                data:[82299, 149955, 227408, 309077, 417049],
                backgroundColor: 'rgb(104, 123, 140, 0.7)',
                borderColor: 'rgb(104, 123, 140, 0.9)',
                hidden:true,
        },{
          label:'Argentina',
                data:[109814, 112442, 150566, 191223, 210162],
                backgroundColor:'rgb(117, 170, 219, 0.7)',
                borderColor: 'rgb(117, 170, 219, 0.9)',
              hidden:true,
         },{
          label:'Brasil',
                data:[210035, 228626, 364390, 445249, 500088],
                backgroundColor:'rgb(177, 204, 104, 0.7)',
                borderColor: 'rgb(177, 204, 104, 0.9)',
                hidden:true,
         },{
         label:'EE.UU.',
                 data:[4877372, 5063855, 5858216, 5555444, 5275478],
                  backgroundColor:'rgb(0, 33, 71, 0.7)',
                  borderColor: 'rgb(0, 33, 71, 0.9)',
                 hidden:true,
        },{
         label:'China',
                data:[1559623, 2397508, 3672116, 9126943, 11255878],
                backgroundColor:'rgb(219, 179, 90, 0.7)',
                 borderColor: 'rgb(219, 179, 90, 0.9)',
                 hidden:true,
       },{
         label:'India',
                 data:[299510, 594848, 986616, 1750564, 2621919],
                 backgroundColor:'rgb(255, 153, 51, 0.7)',
                borderColor: 'rgb(255, 153, 51, 0.9)',
                //hidden:true,
        },{
         label:'Indonesia',
                 data:[89903, 162749, 294948, 418281, 557528],
                 backgroundColor:'rgb(219, 119, 112, 0.7)',
                 borderColor: 'rgb(219, 119, 112, 0.9)',
                 hidden:true,
        },{
         label:'Perú',
                 data:[23040, 21044, 28928, 45111, 57383],
                backgroundColor:'rgb(207, 124, 178, 0.7)',
                borderColor: 'rgb(207, 124, 178, 0.9)',
                hidden:true,
        },{
         label:'Canadá',
                data:[454759, 454698, 557725, 565853, 594198],
                backgroundColor:'rgb(206,219,240, 0.7)',
                borderColor: 'rgb( 206,219,240 , 0.9)',
                hidden:true,
        },{
          label:'México',
                 data:[241886, 290472, 397058, 479215, 495778],
                backgroundColor:'rgb(0,104,71, 0.7)',
                borderColor: 'rgb(0,104,71, 0.9)',
                 hidden:true,
       }] ,
    },
    options:{

        scales:{
            yAxes:[{
              gridLines:{
                color:"rgba(255,255,255,0.7)",
              },
                    ticks:{
                        beginAtZero:true,
                        fontColor: 'white',
                    }
            }],
            xAxes:[{
              gridLines:{
                color:"rgba(255,255,255,0.7)",
              },
              ticks:{
                fontColor: 'white',
            }
            }],
        },
        legend: {
          position: 'bottom',
          labels: {
              // This more specific font property overrides the global property
              fontColor: 'white'
          }
      },

    }
});

var ctxIndo= document.getElementById("myChart-indo").getContext("2d");
var myChartIndo= new Chart(ctxIndo,{
    type:"line",

    data:{
        labels:['1980','1990','2000','2010', '2018'],
        datasets:[{
                label:'Turquía',
                data:[82299, 149955, 227408, 309077, 417049],
                backgroundColor: 'rgb(104, 123, 140, 0.7)',
                borderColor: 'rgb(104, 123, 140, 0.9)',
                hidden:true,
        },{
          label:'Argentina',
                data:[109814, 112442, 150566, 191223, 210162],
                backgroundColor:'rgb(117, 170, 219, 0.7)',
                borderColor: 'rgb(117, 170, 219, 0.9)',
              hidden:true,
         },{
          label:'Brasil',
                data:[210035, 228626, 364390, 445249, 500088],
                backgroundColor:'rgb(177, 204, 104, 0.7)',
                borderColor: 'rgb(177, 204, 104, 0.9)',
                hidden:true,
         },{
         label:'EE.UU.',
                 data:[4877372, 5063855, 5858216, 5555444, 5275478],
                  backgroundColor:'rgb(0, 33, 71, 0.7)',
                  borderColor: 'rgb(0, 33, 71, 0.9)',
                 hidden:true,
        },{
         label:'China',
                data:[1559623, 2397508, 3672116, 9126943, 11255878],
                backgroundColor:'rgb(219, 179, 90, 0.7)',
                borderColor: 'rgb(219, 179, 90, 0.9)',
                 hidden:true,
       },{
         label:'India',
                 data:[299510, 594848, 986616, 1750564, 2621919],
                 backgroundColor:'rgb(255, 153, 51, 0.7)',
                borderColor: 'rgb(255, 153, 51, 0.9)',
                hidden:true,
        },{
         label:'Indonesia',
                 data:[89903, 162749, 294948, 418281, 557528],
                 backgroundColor:'rgb(219, 119, 112, 0.7)',
                 borderColor: 'rgb(219, 119, 112, 0.9)',
                 //hidden:true,
        },{
         label:'Perú',
                 data:[23040, 21044, 28928, 45111, 57383],
                backgroundColor:'rgb(207, 124, 178, 0.7)',
                borderColor: 'rgb(207, 124, 178, 0.9)',
                hidden:true,
        },{
         label:'Canadá',
                data:[454759, 454698, 557725, 565853, 594198],
                backgroundColor:'rgb(206,219,240, 0.7)',
                borderColor: 'rgb( 206,219,240 , 0.9)',
                hidden:true,
        },{
          label:'México',
                 data:[241886, 290472, 397058, 479215, 495778],
                backgroundColor:'rgb(0,104,71, 0.7)',
                borderColor: 'rgb(0,104,71, 0.9)',
                 hidden:true,
       }] ,
    },
    options:{

        scales:{
            yAxes:[{
              gridLines:{
                color:"rgba(255,255,255,0.7)",
              },
                    ticks:{
                        beginAtZero:true,
                        fontColor: 'white',
                    }
            }],
            xAxes:[{
              gridLines:{
                color:"rgba(255,255,255,0.7)",
              },
              ticks:{
                fontColor: 'white',
            }
            }],
        },
        legend: {
          position: 'bottom',
          labels: {
              // This more specific font property overrides the global property
              fontColor: 'white'
          }
      },

    }
});

var ctxPeru= document.getElementById("myChart-peru").getContext("2d");
var myChartPeru= new Chart(ctxPeru,{
    type:"line",

    data:{
        labels:['1980','1990','2000','2010', '2018'],
        datasets:[{
                label:'Turquía',
                data:[82299, 149955, 227408, 309077, 417049],
                backgroundColor: 'rgb(104, 123, 140, 0.7)',
                borderColor: 'rgb(104, 123, 140, 0.9)',
                hidden:true,
        },{
          label:'Argentina',
                data:[109814, 112442, 150566, 191223, 210162],
                backgroundColor:'rgb(117, 170, 219, 0.7)',
                borderColor: 'rgb(117, 170, 219, 0.9)',
              hidden:true,
         },{
          label:'Brasil',
                data:[210035, 228626, 364390, 445249, 500088],
                backgroundColor:'rgb(177, 204, 104, 0.7)',
                borderColor: 'rgb(177, 204, 104, 0.9)',
                hidden:true,
         },{
         label:'EE.UU.',
                 data:[4877372, 5063855, 5858216, 5555444, 5275478],
                  backgroundColor:'rgb(0, 33, 71, 0.7)',
                  borderColor: 'rgb(0, 33, 71, 0.9)',
                 hidden:true,
        },{
         label:'China',
                data:[1559623, 2397508, 3672116, 9126943, 11255878],
                backgroundColor:'rgb(219, 179, 90, 0.7)',
                borderColor: 'rgb(219, 179, 90, 0.9)',
                 hidden:true,
       },{
         label:'India',
                 data:[299510, 594848, 986616, 1750564, 2621919],
                 backgroundColor:'rgb(255, 153, 51, 0.7)',
                borderColor: 'rgb(255, 153, 51, 0.9)',
                hidden:true,
        },{
         label:'Indonesia',
                 data:[89903, 162749, 294948, 418281, 557528],
                 backgroundColor:'rgb(219, 119, 112, 0.7)',
                 borderColor: 'rgb(219, 119, 112, 0.9)',
                 hidden:true,
        },{
         label:'Perú',
                 data:[23040, 21044, 28928, 45111, 57383],
                backgroundColor:'rgb(207, 124, 178, 0.7)',
                borderColor: 'rgb(207, 124, 178, 0.9)',
                //hidden:true,
        },{
         label:'Canadá',
                data:[454759, 454698, 557725, 565853, 594198],
                backgroundColor:'rgb(206,219,240, 0.7)',
                borderColor: 'rgb( 206,219,240 , 0.9)',
                hidden:true,
        },{
          label:'México',
                 data:[241886, 290472, 397058, 479215, 495778],
                backgroundColor:'rgb(0,104,71, 0.7)',
                borderColor: 'rgb(0,104,71, 0.9)',
                 hidden:true,
       }] ,
    },
    options:{

        scales:{
            yAxes:[{
              gridLines:{
                color:"rgba(255,255,255,0.7)",
              },
                    ticks:{
                        beginAtZero:true,
                        fontColor: 'white',
                    }
            }],
            xAxes:[{
              gridLines:{
                color:"rgba(255,255,255,0.7)",
              },
              ticks:{
                fontColor: 'white',
            }
            }],
        },
        legend: {
          position: 'bottom',
          labels: {
              // This more specific font property overrides the global property
              fontColor: 'white'
          }
      },

    }
});

var ctxCan= document.getElementById("myChart-can").getContext("2d");
var myChartCan= new Chart(ctxCan,{
    type:"line",

    data:{
        labels:['1980','1990','2000','2010', '2018'],
        datasets:[{
                label:'Turquía',
                data:[82299, 149955, 227408, 309077, 417049],
                backgroundColor: 'rgb(104, 123, 140, 0.7)',
                borderColor: 'rgb(104, 123, 140, 0.9)',
                hidden:true,
        },{
          label:'Argentina',
                data:[109814, 112442, 150566, 191223, 210162],
                backgroundColor:'rgb(117, 170, 219, 0.7)',
                borderColor: 'rgb(117, 170, 219, 0.9)',
              hidden:true,
         },{
          label:'Brasil',
                data:[210035, 228626, 364390, 445249, 500088],
                backgroundColor:'rgb(177, 204, 104, 0.7)',
                borderColor: 'rgb(177, 204, 104, 0.9)',
                hidden:true,
         },{
         label:'EE.UU.',
                 data:[4877372, 5063855, 5858216, 5555444, 5275478],
                  backgroundColor:'rgb(0, 33, 71, 0.7)',
                  borderColor: 'rgb(0, 33, 71, 0.9)',
                 hidden:true,
        },{
         label:'China',
                data:[1559623, 2397508, 3672116, 9126943, 11255878],
                backgroundColor:'rgb(219, 179, 90, 0.7)',
                borderColor: 'rgb(219, 179, 90, 0.9)',
                 hidden:true,
       },{
         label:'India',
                 data:[299510, 594848, 986616, 1750564, 2621919],
                 backgroundColor:'rgb(255, 153, 51, 0.7)',
                borderColor: 'rgb(255, 153, 51, 0.9)',
                hidden:true,
        },{
         label:'Indonesia',
                 data:[89903, 162749, 294948, 418281, 557528],
                 backgroundColor:'rgb(219, 119, 112, 0.7)',
                 borderColor: 'rgb(219, 119, 112, 0.9)',
                 hidden:true,
        },{
         label:'Perú',
                 data:[23040, 21044, 28928, 45111, 57383],
                backgroundColor:'rgb(207, 124, 178, 0.7)',
                borderColor: 'rgb(207, 124, 178, 0.9)',
                hidden:true,
        },{
         label:'Canadá',
                data:[454759, 454698, 557725, 565853, 594198],
                backgroundColor:'rgb(206,219,240, 0.7)',
                borderColor: 'rgb( 206,219,240 , 0.9)',
                //hidden:true,
        },{
          label:'México',
                 data:[241886, 290472, 397058, 479215, 495778],
                backgroundColor:'rgb(0,104,71, 0.7)',
                borderColor: 'rgb(0,104,71, 0.9)',
                 hidden:true,
       }] ,
    },
    options:{

        scales:{
            yAxes:[{
              gridLines:{
                color:"rgba(255,255,255,0.7)",
              },
                    ticks:{
                        beginAtZero:true,
                        fontColor: 'white',
                    }
            }],
            xAxes:[{
              gridLines:{
                color:"rgba(255,255,255,0.7)",
              },
              ticks:{
                fontColor: 'white',
            }
            }],
        },
        legend: {
          position: 'bottom',
          labels: {
              // This more specific font property overrides the global property
              fontColor: 'white'
          }
      },

    }
});

var ctxMx= document.getElementById("myChart-mx").getContext("2d");
var myChartMx= new Chart(ctxMx,{
    type:"line",

    data:{
        labels:['1980','1990','2000','2010', '2018'],
        datasets:[{
                label:'Turquía',
                data:[82299, 149955, 227408, 309077, 417049],
                backgroundColor: 'rgb(104, 123, 140, 0.7)',
                borderColor: 'rgb(104, 123, 140, 0.9)',
                hidden:true,
        },{
          label:'Argentina',
                data:[109814, 112442, 150566, 191223, 210162],
                backgroundColor:'rgb(117, 170, 219, 0.7)',
                borderColor: 'rgb(117, 170, 219, 0.9)',
              hidden:true,
         },{
          label:'Brasil',
                data:[210035, 228626, 364390, 445249, 500088],
                backgroundColor:'rgb(177, 204, 104, 0.7)',
                borderColor: 'rgb(177, 204, 104, 0.9)',
                hidden:true,
         },{
         label:'EE.UU.',
                 data:[4877372, 5063855, 5858216, 5555444, 5275478],
                backgroundColor:'rgb(0, 33, 71, 0.7)',
                  borderColor: 'rgb(0, 33, 71, 0.9)',
                 hidden:true,
        },{
         label:'China',
                data:[1559623, 2397508, 3672116, 9126943, 11255878],
                backgroundColor:'rgb(219, 179, 90, 0.7)',
                borderColor: 'rgb(219, 179, 90, 0.9)',
                 hidden:true,
       },{
         label:'India',
                 data:[299510, 594848, 986616, 1750564, 2621919],
                 backgroundColor:'rgb(255, 153, 51, 0.7)',
                borderColor: 'rgb(255, 153, 51, 0.9)',
                hidden:true,
        },{
         label:'Indonesia',
                 data:[89903, 162749, 294948, 418281, 557528],
                 backgroundColor:'rgb(219, 119, 112, 0.7)',
                 borderColor: 'rgb(219, 119, 112, 0.9)',
                 hidden:true,
        },{
         label:'Perú',
                 data:[23040, 21044, 28928, 45111, 57383],
                backgroundColor:'rgb(207, 124, 178, 0.7)',
                borderColor: 'rgb(207, 124, 178, 0.9)',
                hidden:true,
        },{
         label:'Canadá',
                data:[454759, 454698, 557725, 565853, 594198],
                backgroundColor:'rgb(206,219,240, 0.7)',
                borderColor: 'rgb( 206,219,240 , 0.9)',
                hidden:true,
        },{
          label:'México',
                 data:[241886, 290472, 397058, 479215, 495778],
                backgroundColor:'rgb(0,104,71, 0.7)',
                borderColor: 'rgb(0,104,71, 0.9)',
                 //hidden:true,
       }] ,
    },
    options:{

        scales:{
            yAxes:[{
              gridLines:{
                color:"rgba(255,255,255,0.7)",
              },
                    ticks:{
                        beginAtZero:true,
                        fontColor: 'white',
                    }
            }],
            xAxes:[{
              gridLines:{
                color:"rgba(255,255,255,0.7)",
              },
              ticks:{
                fontColor: 'white',
            }
            }],
        },
        legend: {
          position: 'bottom',
          labels: {
              // This more specific font property overrides the global property
              fontColor: 'white'
          }
      },

    }
});
