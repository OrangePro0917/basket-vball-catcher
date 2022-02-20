const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var court


let engine;
let world;

var basketballImg
var playerImg
var courtImg
var hoopImg
var leftPlayerImg
var idlePlayerImg


function preload()
{
   basketballImg = loadImage("basket ball.png")
   playerImg = loadAnimation(
     "sprite_0.png",
     "sprite_1.png",
     "sprite_2.png",
     "sprite_3.png",
     "sprite_4.png"
   );
   leftPlayerImg = loadAnimation(
     "Left/sprite_0.png",
     "Left/sprite_1.png",
     "Left/sprite_2.png",
     "Left/sprite_3.png"
   );
   courtImg = loadImage("Court.png")
   hoopImg = loadImage("hoop.png")
   idlePlayerImg = loadAnimation("player.png")
   
}

function setup() {
  createCanvas(1000,500);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;

  
  court = createSprite(500, 250)
  court.addImage(courtImg)
  court.scale = 3.5

  basketball = createSprite(430, 300)
  basketball.addImage(basketballImg)
  basketball.scale = 0.35
  
  basketball2 = createSprite(570, 300);
  basketball2.addImage(basketballImg);
  basketball2.scale = 0.35;

  hoop = createSprite(75, 250)
  hoop.addImage(hoopImg)
  hoop.scale = 0.75
  
  hoop2 = createSprite(925, 250);
  hoop2.addImage(hoopImg);
  hoop2.scale = 0.75;

  player = createSprite(500, 400)
  player.addAnimation("running", playerImg)
  player.addAnimation("leftRunning", leftPlayerImg)
  player.addAnimation("standing", idlePlayerImg)
  player.scale = 0.7




   
}

function draw() 
{
  background(51);
  
 if(keyDown("RIGHT_ARROW"))
 {
   player.changeAnimation("running")
   player.x = player.x + 5
   player.scale = 0.7
 }
 
 
 else if(keyDown("LEFT_ARROW")) {
   player.changeAnimation("leftRunning");
   player.x = player.x - 5;
   player.scale = 0.7
 }

 else if (keyDown("UP_ARROW")) {
   //player.changeAnimation("standing");
   player.y = player.y - 5;
   player.scale = 0.7
 }
 
 else if (keyDown("DOWN_ARROW")) {
   //player.changeAnimation("standing");
   player.y = player.y + 5;
   player.scale = 0.7
 }

 else 
 {
    player.changeAnimation("standing")
    player.scale = 0.35
 }

 
 
  
  
  
  drawSprites();

}

