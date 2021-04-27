const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,D1,ground;

function preload()
{

}

function setup() {
	createCanvas(900, 700);

	engine = Engine.create();
	world = engine.world;

   //Create the Bodies Here.
   paper = new Paper(100,600,70);

   ground = new Ground(600,height,1200,20);

   D1= new Dustbin(650,670);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);
  drawSprites();
  
  ground.display();
  D1.display();
  paper.display();
}

function keyPressed(){
 if(keyCode === UP_ARROW) {
   Matter.Body.applyForce(paper.body,paper.body.position,{x:400,y:-400});
	}
}