var Game = require('./../js/game.js').gameModule;
var currentGame = new Game();

function userClick(color)
{
  currentGame.userGuess(color);
  if (currentGame.gameOver)
  {
    $("#start").show();
  }
  else
  {
    if (currentGame.userInput.length === currentGame.series.length)
    {
      var newColor = "light" + color;
      $(this).addClass(newColor);
    }
  }
}

$(document).ready(function()
{
  $("#start").click(function()
  {
    currentGame = new Game();
    var seriesList = currentGame.incrementSeries();
    $("#start").hide();
    var square = currentGame.series[0];
    var squareColor = "light" + square;
    $("#" + square).addClass(squareColor);
  });

  $("#red").click(function()
  {
    userClick($(this).attr('id'));
  });
  $("#yellow").click(function()
  {
    userClick($(this).attr('id'));
  });
  $("#blue").click(function()
  {
    userClick($(this).attr('id'));
  });
  $("#green").click(function()
  {
    userClick($(this).attr('id'));
  });
});
