$(document).ready(function() {

  var td = $('.pallatte');
  console.log('test');
  td.click(function() {
    console.log($(this).css("background-color"));
  });

});



// var pixelPainter = PixelPainter(20,20);
// $("#controls").append(pixelPainter.controls);
// $("#artboard").append(pixelPainter.artboard);