const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bg, backgroundImg
var particles = []

function preload() {
  getBackgroundImg();
  //backgroundImg = loadImage("snow1.jpg")
}

function setup() {
  createCanvas(1000,600);
  createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;
  ground1 = new ground(600,height,1200,20);
  snow2 = new snowfall(200,300,100,100)
}

function draw() {
  background(0);
  //image(backgroundImg,0,0,1000,600) 
  Engine.update(engine);
  ground1.display()
  snow2.display()
   //drawSprites(); 
  if(frameCount%60==0){
    console.log("WHEEEE")
    particles.push(new snowfall(random(width/2-10,width/2+10),10,10))
  }
  for (var a = 0; a < particles.length; a++) {
    console.log("YEEEET")
    particles[a].display();
  }    
}

async function getBackgroundImg(){
  var d = new Date();
  var hour = d.getHours();
  
  if(hour>=0600 && hour<=1900){
      bg = "snow2.jpg";
  }
  else{
      bg = "snow1.jpg";
  }
  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}