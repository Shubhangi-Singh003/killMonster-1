const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world

var bgb;
var monsterImg, superImg, bgbImg

function preload() {
//preload the images here
//// monsterImg = loadImage("../images/Monster-01.png","../images/Monster-02.png");
// superImg = loadImage("images/Superhero-01.png","images/Superhero-02.png");
 bgbImg = loadImage("../images/GamingBackground.png");
}

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;
  
  bgb = createSprite(0,0,3000,800);
  bgb.addImage(bgbImg);
 

  

}

function draw() {
  background(0);
  bgb.display()
drawSprites();
}

