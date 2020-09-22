var car, wall;
var speed, weight;
var deformation; 

function setup() {
  createCanvas(1300,400);

  speed = random(55,90);

  weight = random(400,1500);

  car = createSprite(50,200,50,50);
  car.shapeColor = "white";

  wall = createSprite(1200,200,60,200);
  wall.shapeColor = color(80,80,80);

  deformation = (0.5*weight*speed*speed)/22500;

  car.velocityX = speed;
}

function draw() {
  background(0,0,0);

  fill("white");
  textSize(20);
  text("Deformation: " + deformation,450,50); 

  if(car.collide(wall)) {
    speed = 0;
    if(deformation > 180) {
      car.shapeColor = color(255,0,0);
    }
    if(deformation < 180 && deformation > 100) {
      car.shapeColor = color(230,230,0);
    }
    if(deformation < 100) {
      car.shapeColor = color(0,255,0);
    }
  }

  drawSprites();
}
