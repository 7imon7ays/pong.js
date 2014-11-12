function Rocket (x, y, direction, owner) {
  this.x = x;
  this.y = y;
  this.owner = owner;
  this.constructor.instances[owner] = this;
  this.width = 4;
  this.height = 10;
  this.direction = direction;
  this.y_speed = 4;
}

Rocket.instances = {
  human: null,
  comp: null
};

Rocket.prototype.render = function () {
  context.fillStyle = "#A80000";
  context.fillRect(this.x, this.y, this.width, this.height);
};

Rocket.prototype.update = function () {
  if (this.direction == "up") {
    this.y -= this.y_speed;  
  } else {
    this.y += this.y_speed;
  }

  if (this.y < 0 || this.y > 600) {
    delete Rocket.instances[this.owner];
  }
};

