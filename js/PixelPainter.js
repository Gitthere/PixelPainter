// $(document).ready(function() {//Specify a function to execute when the DOM is fully loaded.
//   var holdColor;
//   var td = $('tr.pallette > td');//gets direct descendent (td) of tr to get color. if use just .pallette, color would not register
//   td.click(function() {
//     holdColor = $(this).css("background-color");//transfers color of clicked td to holdColor
//   });

  
//   var tdGrid = $('.grid td');//gets descendent of td
//   tdGrid.click(function() {
//     $(this).css("background-color", holdColor);//transfers color held in holdColor to td clicked in grid
//   });

// });



$(document).ready(function() {

  var pallette = "";
  var table = $('<table></table>');

  for (var i = 0; i <= 6; i++) {
    //$('#controls').append('<tr></tr>');
    var tableRow = $('<tr/>');
    for (var j = 0; j <= 6; j++)  {
      $(tableRow).append('<td></td>');
    }
  //$('#controls').append(tableRow);
  $(table).append(tableRow);
  }
  $('#controls').append(table);
});
