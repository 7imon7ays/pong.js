var animate = function(callback) {
  window.setTimeout(callback, 1000/60);
};

var canvas = document.createElement('canvas');
var width = 400;
var height = 600;
canvas.width = width;
canvas.height = height;
var context = canvas.getContext('2d');

function Score() {
  this.human = 0;
  this.computer = 0;
}

Score.prototype.update = function () {
  $('.human').html(this.human);
  $('.computer').html(this.computer);
};

var step = function () {
  update();
  render();
  animate(step);
};

var update = function () {
  player.update();
  computer.update(ball);
  ball.update(player.paddle, computer.paddle);
  score.update();
  Rocket.instances.human && Rocket.instances.human.update();
};

var render = function () {
  context.fillStyle = "#3e3e3e";
  context.fillRect(0, 0, width, height);
  player.render();
  computer.render();
  ball.render();
  Rocket.instances.human && Rocket.instances.human.render();
};


var player = new Player();
var computer = new Computer();
var ball = new Ball(200, 300);
var score = new Score();


$(function () {
  $("#content").append(canvas);
  animate(step);
});
