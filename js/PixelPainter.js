
$(document).ready(function() {
  //generates color pallette
  var table = $('<table></table>');//create variable table container
  var colors = ['#FF0000', '#CC0000', '#A30000', '#820000', '#680000', '#530000', '#FF6600', '#E65C00', '#B84A00', '#933B00', '#762F00', '#4B1E00', '#FFFF00', '#E6E600', '#B8B800', '#939300', '#767600', '#5E5E00', '#00FF00', '#00E600', '#00CF00', '#00A600', '#008500', '#006A00', '#0099FF', '#008AE6', '#007CCF', '#0070BA', '#005B96', '#005B96', '#CC33FF', '#B82EE6', '#A629CF', '#9525BA', '#8621A7', '#791E96'];
  
  var m = 0;
  for (var i = 0; i < 6; i++) {//tableRow will be 6 rows
    var tableRow = $('<tr></tr>');//create tableRow container
    for (var j = 0; j < 6; j++)  {//tableRow will contain 6 td data cells
      var tableData = $('<td></td>');
      $(tableRow).append(tableData);//data cells will be appended to tableRow
      tableData.css({'background-color': colors[m]});
      m++;
    };
  $(table).append(tableRow);//then tableRows appended to table
  };
  $('#controls').append(table);//table then appended to id 'controls' in html




  //erase button
  var erase = $('<button>erase</button>').click(function() {//creates erase button

  });
  $('#controls').append(erase);//appends button to id 'controls'





  //clear button
  var clear = $('<button>clear</button>').click(function() {//creates clear button

  });
  $('#controls').append(clear);//appends button to id 'controls'


//code to generate grid
  var gridTable = $('<table></table>');//create variable table container for grid

  for (var k = 0; k <= 8; k++) {//gridRow will be 8 rows
    var gridRow = $('<tr/>'); //container to hold rows
    for (var l = 0; l <= 6; l++) {//gridRow will have 6 data cells (td)
      $(gridRow).append('<td></td>');//append td's to row
    };
  $(gridTable).append(gridRow);//appends rows to table 
  };
  $('#artboard').append(gridTable);

  


  var holdColor;
  $('#controls td').on("click", function() {
    holdColor = $(this).css("background-color");//transfers color of clicked td to holdColor
    console.log(holdColor);
  });//gets direct descendent (td) of tr to get color. if use just .pallette, color would not register
  
  
  var tdGrid;
  $('#artboard td').on("click", function() {
    tdGrid = $(this).css("background-color", holdColor);//transfers color held in holdColor to td clicked in grid
    console.log(tdGrid);
  });


});


 //below is code that does not include js for generating pallette and grids.

// $(document).ready(function() {//Specify a function to execute when the DOM is fully loaded.
  // var holdColor;
  // var td = $('tr.pallette > td');//gets direct descendent (td) of tr to get color. if use just .pallette, color would not register
  // td.click(function() {
  //   console.log('click');
  //   holdColor = $(this).css("background-color");//transfers color of clicked td to holdColor
  // });

  
  // var tdGrid = $('.grid td');//gets descendent of td
  // tdGrid.click(function() {
  //   $(this).css("background-color", holdColor);//transfers color held in holdColor to td clicked in grid
  // });

// });
