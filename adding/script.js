
//LINE CHART

const forestDataSource = "data/lpi_forest.csv"; // Data Source

const unpack = (data, key) => data.map(row => row[key]); //Unpack the data

Plotly.d3.csv("data/lpi_forest.csv", lpi_data => {

  // Unpack data into variables
  const lpi = unpack(lpi_data, 'living_planet_index_average'); 
  const forest = unpack(lpi_data, 'Forest');
  const year = unpack(lpi_data, 'Year');


    // Data Object
    var trace1 = {
        x: year, // X axis of line
        y: lpi, // Y axis of line
        name: 'Living Planet Index', //Set Label
        type: 'scatter', // Set chart type
        marker: { // Style line
            color: "#127760" // Color of line
        },
        hovertemplate: '<b>%{y:.2f}</b> (1970=1)', // Style hover information
    };

    //Data Object - Trace for Forest Area
    var trace2 = {
        x: year, // X axis of line
        y: forest, // Y axis of line
        yaxis: 'y2', // Put on secondary Y axis
        name: 'Forest Area', // Name the trace
        type: 'scatter', // Type of chart
        
        marker: {
            color: '#872000' // Colour of line
        },
        hovertemplate: '<b>%{y:.2f}</b> Billion Hectares', // Style hover information
    };

    // Layout of line chart
    var layout = {
      showlegend: true, // Make the legend visible
      width: 1000, // Width of chart
      height: 650, // Height of chart
    
      
      legend: {
        x: 0.265, // Position the legent
        y: -0.25, // Position the legent
        orientation: 'h', // Make legend horizontal
        font: {
          size: 18,
          family: 'Inria Serif, serif',
        },
      },

      // Custom font
      font: {
        family: 'Inria Serif, serif',
        size: 12,
        color: '#2b2d42',
      },

      xaxis: {
        zerolinewidth: 1, // Make the zero line visible
        linecolor: '#636363', // Colour of the zero line 
        title:{
          text: 'Year', // Title of x-axis
          standoff: 30,
          font: {
            size: 18,
            family: 'Inria Serif, serif',
            },
          },
        fixedrange: true, // Make the chart have a fixed x axis (user can't move around)
        showgrid: true, // Remove grid lines
        },

        yaxis: {
          zerolinewidth: 1, // Make the zero line visible
          fixedrange: true, // Make the chart have a fixed y axis (user can't move around)
          linecolor: '#636363', // Colour of the zero line
          showgrid: false, // Turn off y axis grid lines
          title: {
            text: 'Living Planet Index (1970=1)', // Title
            standoff: 100,
            font: {
              size: 18,
              family: 'Inria Serif, serif',
              },
            },
            titlefont: {color: '#000000'}, // Color of axis title
            tickfont: {color: '#000000'}, // Color of axis numbers
          },

        yaxis2: {
          zerolinewidth: 1,
          linecolor: '#636363',
          showgrid: false,
          fixedrange: true,
          title: {
            text: 'Forest Area (1 Billion ha)',
            standoff: 100,
            font: {
              size: 18,
              family: 'Inria Serif, serif',
              },
            },
            titlefont: {color: '#000000'}, 
            tickfont: {color: '#000000'},
            overlaying: 'y',
            side: 'right',
          }
      };

  
  //Popping data into an array object
  var data = [trace1, trace2];

  //PLotly NewPLot function, followed by the command "Add fraes: which generates
  Plotly.newPlot('line_chart', data, layout, {displayModeBar: false})
}); // Close Plotly d3


// PIE CHART
var data = [{
  hoverinfo: 'label',
    values: [80, 20], // Set 80% and 20% values
    labels: ['Agriculture', 'Other Drivers'], // Set labels in order
    textinfo: "percent",
    type: 'pie', // Set type as pie chart
    marker: {
        colors: ["#872000", "#545454"], // Set colors in order
      }
  }];
  
  var layout = {
    font: {
      family: 'Inria Serif, serif',
      size: 18,
      color: '#2b2d42',
    },
    legend: {
      x: 0.8, // Position the legent
      y: 1, // Position the legent
      font: {
        size: 18,
        family: 'Inria Serif, serif',
      },
    },
      title: false,
      width: 1300,
      height: 700,
  };

  var config = {
    displayModeBar: false
  };

  
  Plotly.newPlot('pie_chart', data, layout, config);




// Bubble Chart 1
// Data Source
const proteinDataSource = "data/land_use_by_protein.csv";

//Unpack the data
const unpackProtein = (data, key) => data.map(row => row[key]);

Plotly.d3.csv("data/land_use_by_protein.csv", protein_data => {

    //unpack data
    const size = unpack(protein_data, 'Land'); // Sizes of land
    const name = unpack(protein_data, 'Entity'); // Names of food
    const xKg = unpack(protein_data, 'kg');

   
  var trace1 = {
    x: [0,100], // Positioning along x-axis (need to make a variable)
    y: [0,0], // Positioning along y-axis
    mode: 'markers+text',// Place markers and text on graph
    textposition: 'inside',
    text: name,
    
    
    textfont: {
      family: 'Inria Serif, serif',
      size: 18,
      color: '#FFFFFF',
    },
    
    
    marker: {
      size: size, // Size markers according to CSV file
      color: "#872000",
      opacity: 1,
    },
 
    name: "",
    hovertemplate: '<b>Land Required:</b> %{marker.size} ha',//Takes the markers size and displays it in the hover information
    
   
  };
  
  var data = [trace1];
  
  var layout = {
    paper_bgcolor: 'rgba(0,0,0,0)', 
    font: {
      family: 'Inria Serif, serif',
      size: 10,
      color: '#2b2d42',
    },

    hoverlabel: {
      namelength: "-1",
    },

    hovermode: 'closest',

    title: false,
    xaxis: {
      zeroline: true, 
      visible: false, 
      showgrid: false,
      fixedrange: true,
      
    },
    yaxis: {
      zeroline: true, 
      visible: false, 
      showgrid: false,
      fixedrange: true,
 
    },
    showlegend: false,
    height: 900,
    width: 1000
  };
  var config = {
    displayModeBar: false
  };

  Plotly.newPlot('Livestock', data, layout, config);
});


// Bubble Chart 2
//Unpack the data
const unpackCrop = (data, key) => data.map(row => row[key]);

Plotly.d3.csv("data/crops.csv", protein_data => {

   //unpack data
   const size = unpack(protein_data, 'Land'); // Sizes of land
   const name = unpack(protein_data, 'Entity'); // Names of food
   const xKg = unpack(protein_data, 'kg');

  //DROPDOWN
  const listofEntity = [] // Empty array for names

  // For loop putting the names of the Entity's into the array (FOUND ONLINE)
  for (var i = 0; i < name.length; i++ ){
    if (listofEntity.indexOf(name[i]) === -1 ){
      listofEntity.push(name[i]);
    }
  }

  // Target the HTML dropdown element
  const dropdown = document.getElementById("dropdown");

  // Define options
  const options = listofEntity;

  // Loop to add options to the dropdown (FOUND ONLINE)
  for (let i = 0; i < listofEntity.length; i++) {
    const option = document.createElement("option");
    option.value = "option" + (i + 1);
    option.text = options[i];
    dropdown.appendChild(option);
  }

  // Changing the name and size when a dropdown option is selected.
  // When there is a change to the dropdown
  dropdown.addEventListener("change", function(){
    const selected = options[this.selectedIndex] // Get the name of the selected name
    console.log(selected)
    console.log("Selected option: " + this.value);
    console.log(size[this.value.split("")[6] - 1])

    var trace1 = {
    x: [0,100], // Positioning along x-axis (need to make a variable)
    y: [0,0], // Positioning along y-axis
     
      mode: 'markers+text', // Place markers and text on graph
      
    
      marker: {
        size: size[this.value.split("")[6] - 1], // Size markers according to CSV file
        color: "#127760",
        opacity: 1,
      },

      name: "",
      hovertemplate: '<b>Land Required:</b> ' + parseFloat(size[this.value.split("")[6] - 1]) + ' ha', // converting the selected value into a floating number, then using string concatenation to display the number

    };
    
    
    var data = [trace1];
    
    var layout = {
      paper_bgcolor: 'rgba(0,0,0,0)', 
      hovermode: 'closest',
      xaxis: {
        zeroline: true, 
        visible: false, 
        showgrid: false,
        fixedrange: true
      },
      yaxis: {
        zeroline: true, 
        visible: false, 
        showgrid: false,
        fixedrange: true
      },
      title: false,
      showlegend: false,
      height: 200,
      width: 1000
    };

    var config = {
      displayModeBar: false,
    };
   
    Plotly.newPlot('Crops', data, layout, config);
  })

  // Making sure an option appears by default when nothing is selected
  var trace1 = {
    name: "",
    x: [0,100],
    y: [0, 0], 
    mode: 'markers+text', 
    textposition: 'right',
    marker: {
      size: size,
      color: "#127760",
      opacity: 1,
    },
    
    hovertemplate: '<b>Land Required:</b> %{marker.size} ha', //Takes the markers size and displays it in the hover information
  
  };

  var data = [trace1];
    
    var layout = {
      hovermode: 'y',
      paper_bgcolor: 'rgba(0,0,0,0)', 
     
      xaxis: {
        zeroline: true, 
        visible: false, 
        showgrid: false,
        fixedrange: true
      },
      yaxis: {
        zeroline: true, 
        visible: false, 
        showgrid: false,
        fixedrange: true
      },
      title: false,
      showlegend: false,
      height: 200,
      width: 1000
    };
    
    var config = {
      displayModeBar: false,
    };
   
    Plotly.newPlot('Crops', data, layout, config);

});

// Livestock
var trace1 = {
  y: ['Global Calorie Supply', 'Global Protein Supply', 'Agricultural Land'],
  x: [18, 37, 77],
  legendgroup: 'group2',
  name: 'Livestock',
  type: 'bar',
  text: ['18%', '37%', '77%'],
  textposition: 'inside',
  insidetextanchor: 'middle',
  orientation: 'h',
  marker: {
  color: "#872000",
  
  }
};

//Plants
var trace2 = {
  legendgroup: 'group1',
  y: ['Global Calorie Supply', 'Global Protein Supply', 'Agricultural Land'],
  x: [82, 63, 23],
  text: ['82%', '63%', '23%'],
  textposition: 'inside',
  insidetextanchor: 'middle',
  name: 'Plant',
  type: 'bar',
  orientation: 'h',
  
  marker: {
    color: "#127760",
    }
};

/*
var trace3 = {
  y: ['Global Calorie Supply', 'Global Protein Supply', 'Agricultural Land'],
  x: [18, 37, 77],
  name: 'Comparison',
  type: 'scatter',
  orientation: 'h',

};
*/
var data = [trace1, trace2];

var layout = {
  hovermode: false,
  barmode: 'stack',
  height: 800,
  width: 1300,
  margin:{
    l:350
  },
  xaxis: {
    zeroline: true, 
    visible: false, 
    showgrid: false,
    fixedrange: true,
  },
  yaxis: {
    zeroline: true, 
    visible: true, 
    
    showgrid: false,
    fixedrange: true,
    ticklen: 30,
    tickcolor: "#FFFFFF"
  },

  font: {
    family: 'Inria Serif, serif',
    size: 18,
    color: '#2b2d42',
  },


};

var config = {
  displayModeBar: false,
};

Plotly.newPlot('landuse', data, layout, config);


// SLIDER BUBBLE CHART
//Unpack the data
const unpackRich = (data, key) => data.map(row => row[key])

Plotly.d3.csv("data/Book4.csv", meat_data => {

    // SET UP VARIABLES FOR EACH ELEMENT IN THE BUBBLE CHART

    const gdp_92 = unpack(meat_data, 'GDP_92') // x
    const meat_92 = unpack(meat_data, 'Meat_92') // y
    const pop_92 = unpack(meat_data, 'Population_92') //SIZE
    const country_92 = unpack(meat_data, 'Entity_92') // COUNTRY NAME
    const code_92 = unpack(meat_data, 'Code_92') // LABEL

    const gdp_98 = unpack(meat_data, 'GDP_98') // x
    const meat_98 = unpack(meat_data, 'Meat_98') // y
    const pop_98 = unpack(meat_data, 'Population_98') //SIZE
    const country_98 = unpack(meat_data, 'Entity_98') // COUNTRY NAME
    const code_98 = unpack(meat_data, 'Code_98') // LABEL

    const gdp_04 = unpack(meat_data, 'GDP_04') // x
    const meat_04 = unpack(meat_data, 'Meat_04') // y
    const pop_04 = unpack(meat_data, 'Population_04') //SIZE
    const country_04 = unpack(meat_data, 'Entity_04') // COUNTRY NAME
    const code_04 = unpack(meat_data, 'Code_04') // LABEL

    const gdp_10 = unpack(meat_data, 'GDP_10') // x
    const meat_10 = unpack(meat_data, 'Meat_10') // y
    const pop_10 = unpack(meat_data, 'Population_10') //SIZE
    const country_10 = unpack(meat_data, 'Entity_10') // COUNTRY NAME
    const code_10 = unpack(meat_data, 'Code_10') // LABEL

    const gdp_16 = unpack(meat_data, 'GDP_16') // x
    const meat_16 = unpack(meat_data, 'Meat_16') // y
    const pop_16 = unpack(meat_data, 'Population_16') //SIZE
    const country_16 = unpack(meat_data, 'Entity_16') // COUNTRY NAME
    const code_16 = unpack(meat_data, 'Code_16') // LABEL


    
    var trace1 = {
        name: "",
        y: meat_92,
        x: gdp_92,
        mode: 'markers+text',
        text: code_92,
        textposition: 'top',
        marker: {
          color: '#872000',
        },
        customdata: country_92, // Acts like setting a variable so that I can use customdata as a variable in the hover template
        hovertemplate: '<b>Country:</b> %{customdata}',
        }

    var frames = [
      {
        name: '92',
        textposition: 'top',
        data: [
            {
                x: gdp_92,
                y: meat_92,
                text: code_92,
                
            }
        ]
        },

      {
        name: '98',
        textposition: 'top',
        data: [
            {
                x: gdp_98,
                y: meat_98,
                text: code_98,
                
            }
        ]
        },
        {
        name: '04',
        textposition: 'top',
        data: [
            {
                x: gdp_04,
                y: meat_04,
                text: code_04,
                
            }
        ]
        },
        {
        name: '10',
        textposition: 'top',
        data: [
            {
                x: gdp_10,
                y: meat_10,
                text: code_10,
                
            }
        ]
        },
        {
        name: '16',
        textposition: 'top',
        data: [{
            x: gdp_16,
            y: meat_16,
            text: code_16,
            
        }]
        },

    ];

    var layout = {

      hovermode:'closest',
      font: {
        family: 'Inria Serif, serif',
        size: 12,
        color: '#2b2d42',
      },
     
     
     /* dragmode: "pan",*/
      showlegend: false,
   
      
      xaxis: {
        showgrid: false,
        fixedrange: true,

        title: {
          text: 'GDP Per Capita PPP (constant 2017 international $)',
          font: {
            family: 'Inria Serif, serif',
            size: 18,
            color: '#2b2d42',
            
          },
        }
      },
      yaxis: {
        showgrid: false,
       fixedrange: true,
        range: [0, 140],
        title: {
          text: 'Meat Available for Consumption Per Capita (Kg)',
    
          font: {
            family: 'Inria Serif, serif',
            size: 18,
            color: '#2b2d42',
          },
        }
      },
  
        title: {
          font: {
            family: 'Inria Serif, serif',
            size: 40,
            color: '#2b2d42',
          },

          text: 'GDP vs Meat Consumption'
        },

        width: 1150,
        height: 800,
        sliders: [{
  
          bgcolor: '#545454',
          activebgcolor: 'black',
     
            pad: {t: 80},
            currentvalue: {
                xanchor: 'right',
                prefix: 'Year: ',
                font: {
                  family: 'Inria Serif, serif',
                  size: 20,
                  color: '#2b2d42',
                },
            },

            steps: [{
              label: '1992',
              method: 'animate',
              args: [
                  ["92"], { // move to this frame at this step (90)
                      mode: 'immediate',
                      transition: {duration: 0}
                  }
              ]
          },
              
              {
              label: '1998',
              method: 'animate',
              args: [
                  ["98"], { // move to this frame at this step (90)
                      mode: 'immediate',
                      transition: {duration: 0}
                  }
              ]
          },
              
              {
                label: '2004',
                method: 'animate',
                args: [
                    ["04"], { // move to this frame at this step (90)
                        mode: 'immediate',
                        transition: {duration: 0}
                    }
                ]
            },
            {
                label: '2010',
                    method: 'animate',
                    args: [
                        ["10"], {
                            mode: 'immediate',
                            transition: {duration: 0}
                        }
                    ]
                },
            {
                label: '2016',
                    method: 'animate',
                    args: [
                        ["16"], {
                            mode: 'immediate',
                            transition: {duration: 0}
                        }
                    ]
                },
            

               
        ],

    }],

    //setting buttons to automate the slider itself
    updatemenus: [{
        type: 'buttons',
        showactive: false,
        x: 0,
        y: 0,
        xanchor: 'right',
        yanchor: 'top',
        direction: 'left',
        pad: {t: 60, r: -120},

        font: {
          family: 'Inria Serif, serif',
            size: 14,
            color: '#545454',
            },

        bgcolor: 'white',
        bordercolor: '#545454',
        borderwidth: 2,

        
        

    
        
        buttons: [
            {
                // Button 1: Play
                label: 'Play Animation',
                method: 'animate',
                args: [null, {
                    frame: {duration: 1000}, //Allow the user to see current state before animation
                    transition: {duration: 500}, // animation period
                    fromcurrent: true, // Specifies y whether the animation should continue from   the current frame or start from the beginning.
                    mode: 'next' //next will advance the animation to the next frame of the sequence
                    }],
            },
            /*
            {
                // Button 2: Pause  
                label: 'Pause',
                method: 'animate',
                args: [null, {
                    frame: {duration: 0},
                    mode: 'immediate',
                    transition: {duration: 0}
                }]
            }*/
        ], // Close Buttons object
    }],// Close Update menus

    }


var data = [trace1];

Plotly.newPlot('slide', data, layout, {scrollZoom: true, displayModeBar: false}).then(function() {
    Plotly.addFrames('slide', frames);
    });
});
