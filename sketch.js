 var ship, ship_moving;
 var backgroundImage;

 function preload(){

  backgroundImage = loadImage("sea.png");

  shipImage = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png",);
    
 }

 function setup(){

  createCanvas(3000,3000);
  
  backGround = createSprite(450, 500, 400, 200);
  backGround.addImage(backgroundImage);
  background.velocityX = -4
  backGround.scale = 0.5;

  ship = createSprite(400, 450, 100, 100);
  ship.addAnimation("shipMoving", shipImage);
 
 }

 function draw() {

  background("white");

  drawSprites()
 
 }