var Game = require('./../js/game.js').gameModule;
var currentGame = new Game();
var completeCounter = 0;

function userClick(color)
{
  currentGame.userGuess(color);
  if (currentGame.gameOver)
  {
    $("#start").show();
    $("#game-over").show();
  }
  else
  {
    if (currentGame.userInput.length === 0)
    {
      completeCounter++;
      $(".complete").text(completeCounter);
      console.log(completeCounter);
      currentGame.series.forEach(function(square, index)
      {
        var squareColor = "flash" + square;
        setTimeout(function()
        {
          $("#" + square).addClass(squareColor);
        }, 500 * index);

        setTimeout(function()
        {
          $("#" + square).removeClass(squareColor);
        }, (500 * (index + 1)) - 100);
      });
    }
  }
}

$(document).ready(function()
{
  $("#start").click(function()
  {
    completeCounter = 0;
    $(".complete").text(completeCounter);
    currentGame = new Game();
    var seriesList = currentGame.incrementSeries();
    $("#start").hide();
    $("#game-over").hide();
    currentGame.series.forEach(function(square)
    {
      var squareColor = "flash" + square;
      $("#" + square).addClass(squareColor);
      setTimeout(function()
      {
        $("#" + square).removeClass(squareColor);
      }, 500);
    });
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
