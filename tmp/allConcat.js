var Game = require('./../js/game.js').gameModule;

$(document).ready(function()
{
  $("#start").click(function()
  {
    var currentGame = new Game();
    var seriesList = currentGame.incrementSeries();
    seriesList.forEach(function(seriesColor)
    {
      console.log(seriesColor);
    });
  });
});
