
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
      tableData.css({'background-color': colors[m]});//color at index[m] assigned to data cell
      m++;
    };
  $(table).append(tableRow);//then tableRows appended to table
  };
  $('#controls').append(table);//table then appended to id 'controls' in html


  //code to generate grid
  var gridTable = $('<table id="gridTable"></table>');//create variable table container for grid

  for (var k = 0; k <= 8; k++) {//gridRow will be 8 rows
    var gridRow = $('<tr/>'); //container to hold rows
    for (var l = 0; l <= 6; l++) {//gridRow will have 6 data cells (td)
      $(gridRow).append('<td></td>');//append td's to row
    };
  $(gridTable).append(gridRow);//appends rows to table 
  };
  $('#artboard').append(gridTable);


  var holdColor;//to choose color from pallette
  $('#controls td').on("click", function() {//targets td in #controls
    holdColor = $(this).css("background-color");//transfers color of clicked td to holdColor
    console.log(holdColor);
  });//gets direct descendent (td) of tr to get color. if use just .pallette, color would not register
  
  
  var tdGrid;//to place chosen color on to grid
  $('#artboard td').on("click", function() {//targets td in #artboard
    tdGrid = $(this).css("background-color", holdColor);//transfers color held in holdColor to td clicked in grid
    console.log(tdGrid);
  });


  //erase button
  var eraseButton = $('<button id="erase">erase</button>');//create button
  $('#controls').append(eraseButton);//append button to #controls
  
  $(eraseButton).on("click", function() {//create listener to activate button
    $(this).css("background-color", "white");//erase button changes to white to notify erase mode on
    holdColor = "#FFFFFF";

  });


  //clear button
  var clearButton = $('<button id="clear">clear</button>');//creates clear button
  $('#controls').append(clearButton);//appends button to id 'controls'

  $(clearButton).on('click', function() {//creates listener for clear button
    $('#artboard td').css('background-color', '#FFFFFF');//clears all data cells in #artboard to white
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
