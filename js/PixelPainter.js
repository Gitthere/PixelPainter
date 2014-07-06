$(document).ready(function() {//Specify a function to execute when the DOM is fully loaded.
  var holdColor;
  var td = $('tr.pallette > td');//gets direct descendent (td) of tr to get color. if use just .pallette, color would not register
  
  td.click(function() {
    holdColor = $(this).css("background-color");
  });

  
  var tdGrid = $('.grid td'); 
  tdGrid.click(function() {
    console.log("paint");
    $(this).css("background-color", holdColor);
  });

});



// var pixelPainter = PixelPainter(20,20);
// $("#controls").append(pixelPainter.controls);
// $("#artboard").append(pixelPainter.artboard);