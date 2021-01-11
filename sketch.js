
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperball;
var dustbin1;

function setup() {
	createCanvas(800, 400);

	engine = Engine.create();
	world = engine.world;

	var ground_options= 
	{
		isStatic: true
	}
	ground = Bodies.rectangle(400,330,800,10,ground_options)
	World.add(world,ground);
	
	var paper_options=
            {
            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2
            }
   paperball = Bodies.circle(150,200,10,paper_options)
	 World.add(world,paperball);

	 //creating objects
	 dustbin1 = new dustbin(620,290,10,80)
	 dustbin2 = new dustbin(750,290,10,80)
	 dustbin3 = new dustbin(685,320,130,10)

	Engine.run(engine);
  
}


function draw() {
  background("black");
  Engine.update(engine);

  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  keyPressed();
  
  push();
  fill("cyan");
  ellipseMode(RADIUS);
  translate(paperball.position.x,paperball.position.y)
  ellipse(0,0,10,10);
  pop(); 

  push();
  fill("yellow");
  translate(ground.position.x,ground.position.y)
  rectMode(CENTER);
  rect(0,0,800,10)
  pop(); 

  drawSprites();
  
}

function keyPressed(){
    if(keyCode === (UP_ARROW))
    {
      Matter.Body.applyForce(paperball.body, {x :paperball.position.x , y: paperball.position.y}, {x:10,y:-10});

    }
    
}