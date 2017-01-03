function Game()
{
  this.userInput = [];
  this.series = [];
  this.gameOver = false;
  this.colors = ["red", "yellow", "blue", "green"];
};

Game.prototype.incrementSeries = function()
{
  var colorIndex = Math.floor(4 * (Math.random()));
  var color = this.colors[colorIndex];
  this.series.push(color);
  return this.series;
};

Game.prototype.userGuess = function(guess)
{
  if (!this.gameOver)
  {
    this.userInput.push(guess);
    var lastElementIndex = this.userInput.length - 1;
    if (this.userInput.length === this.series.length)
    {
      if (this.userInput[lastElementIndex] != this.series[lastElementIndex])
      {
        this.gameOver = true;
        this.series = [];
      }
      else
      {
        this.userInput = [];
        this.incrementSeries();
      }
    }
    else
    {
      if (this.userInput[lastElementIndex] != this.series[lastElementIndex])
      {
        this.gameOver = true;
        this.series = [];
      }
    }
  }
};

exports.gameModule = Game;
