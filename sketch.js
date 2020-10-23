
var engine,world,paper1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	paper1 = new paper(100,390,20);

	side1 = new dustbin(600,390,100);
	side2 = new dustbin(620,390,100);
	side3 = new dustbin(720,390,100);

	ground1 = new ground(450,400,800,20);
	console.log(ground1);
	

 Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper1.display();

  side1.display();
  side2.display();
  side3.display();

  ground1.display();
keyPressed();
  drawSprites();
 
}

function keyPressed() {
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85})
	}
}


