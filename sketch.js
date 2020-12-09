var bullet, wall;
var speed, weight, thickness;

function setup() {
  createCanvas(1600, 400);

  thickness = random(22,83);

  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = color(80, 80, 80);

  bullet = createSprite(50, 200, 20, 10);
  bullet.shapeColor = "white";
  
  speed = random(223, 321);
  weight = random(30, 52);
}

function draw() {
  background("black");  

  bullet.velocityX = speed;

  if(wall.x-bullet.x <= (bullet.width + wall.width)/2){
    bullet.velocityX = 0;

    var damage = (0.5 * weight * speed * speed) / (thickness * thickness * thickness);
    if(damage <= 10){
      wall.shapeColor = "green";
    }
    else{
      wall.shapeColor = "red";
    }

  drawSprites();
  }
}