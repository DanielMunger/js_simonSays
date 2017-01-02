function Series()
{
  var output = [];
  var colors = ["red", "yellow", "blue", "green"];
}

Series.incrementSeries  = function()
{
  var colorIndex = Math.floor(4 * (Math.random()));
  this.output.push(this.colors[colorIndex]);
  return this.output;
}
