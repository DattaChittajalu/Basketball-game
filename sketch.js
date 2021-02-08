const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
const Runner=Matter.Runner;
const Composites = Matter.Composites;
const MouseConstraint = Matter.MouseConstraint;
const Mouse = Matter.Mouse;
var score =0


function preload(){
	
  }

function setup() {
	createCanvas(windowWidth, windowHeight);
	engine = Engine.create();
	world = engine.world;
  basket1=new Basket(windowWidth/2,windowHeight/2)
	
  //basket1.velocity.x=5

  groundObject=new ground(width/2,windowHeight-10,width,20);
  // ground1=new ground(600,400,300,10)
   //ground2=new ground(1050,300,300,10)

 stone1=new Stone(windowWidth/6,windowHeight/2,30)
 slingshot=new SlingShot(stone1.body, {x:windowWidth/6,y:windowHeight/2})

  Engine.run(engine);

}

function draw() {

  background(230);
  
  text("Score:"+score,750,40)

  basket1.display()
  stone1.display()
  slingshot.display()
	Matter.Body.setVelocity(basket1.body,{x:100,y:0})
  groundObject.display();
  //ground1.display()
  //ground2.display()
  console.log(basket1.body.position.x)
}

function mouseDragged(){
Matter.Body.setPosition(stone1.body,{x:mouseX, y:mouseY})
}
function mouseReleased(){
	slingshot.fly(stone1.body)
}

function keyPressed(){
	if(keyCode==32){
		Matter.Body.setPosition(stone1.body, {x:230, y:410})
		slingshot.attach(stone1.body)
	}
}



