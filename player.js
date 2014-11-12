function Player () {
  this.paddle = new Paddle(175, 580, 50, 10);

  window.addEventListener("keydown", function (event) {
    if (event.which === 32) {
      event.preventDefault();
      this.shoot();
    }
  }.bind(this));
}

Player.prototype.render = function () {
  this.paddle.render();
};

Player.prototype.update = function () {
  for (var key in keysDown) {
    var value = Number(key);
    switch (value) {
    case 37:
      this.paddle.move(-4, 0);
      break;
    case 39:
      this.paddle.move(4, 0);
      break;
    default:
      this.paddle.move(0, 0);
    }
  }
};

Player.prototype.shoot = function () {
  this.paddle.shoot("up", "human");
};

var keysDown = {};

window.addEventListener("keydown", function (event) {
  keysDown[event.keyCode] = true;
});

window.addEventListener("keyup", function (event) {
  delete keysDown[event.keyCode];
});
