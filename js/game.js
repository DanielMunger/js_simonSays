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
    var lastElementIndex = this.userInput.Length - 1;
    if (this.userInput.Length === this.series.Length)
    {
      if (this.userInput[lastElementIndex] != this.series[lastElementIndex])
      {
        this.gameOver = true;
      }
      else
      {
        this.incrementSeries();
      }
    }
    else
    {
      if (this.userInput[lastElementIndex] != this.series[lastElementIndex])
      {
        this.gameOver = true;
      }
    }
  }
};

exports.gameModule = Game;
