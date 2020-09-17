  var bullet,thickness;
  var speed,weight,wall;
  function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(28,83);
}

function draw() {
  background(255,255,255);  
  drawSprites();
  bullet =createSprite(50,200,50,50);
  bullet.shapeColor(white);
   bullet.velocityX=speed;
  wall=createSprite(1200,200,thickness,height/2)
  wall.shapeColor=color(80,80,80);
     }
function hasCollided(bullet,wall){
bulletRightEdge=bullet.x+_bullet.widht;
wallLeftedge=wall.x;
if(bulletRightEdge<=wallLeftedge)
{
  return true;
}
return false;
bullet.velocityX=0;
var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
if(damage>10)
{
car.shapeColor=color(255,0,0);
}
if (damage<10)
{
car.shapecolor=color(230,230,0);
}
}
