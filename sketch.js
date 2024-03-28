
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world; 

var ball
class Ground{
	constructor(x, y, w, h) 
  {
    let options = {
      isStatic:true
    };
    
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(world, this.body);
  }

  show() {
    var pos = this.body.position;
    push();
    rectMode(CENTER);
    stroke(255);
    fill(127);
    rect(pos.x, pos.y, this.w, this.h);
    pop();
  }
  
}

var groundObj;
var leftSide;
var rightSide;



function setup() {
	createCanvas(windowWidth, 700);


	engine = Engine.create();
	world = engine.world;

	groundObj = new Ground(width/2,670,width,20)
	leftSide = new Ground(1300,600,20,120)
	rightSide = new Ground (1100,600,20,120)


	let ball_options = {
		restitution:0.3,
		isStatic:false,
		friction:0,
		density:1.2
	  
	};
	
	ball=Bodies.circle(500,250,35,ball_options);
	  
	World.add(world,ball);

	Engine.run(engine);
	rectMode(CENTER);
	ellipseMode(RADIUS);
}


function draw() {
  background(0);
  ellipse(ball.position.x,ball.position.y,35)
  groundObj.show();
  leftSide.show();
  rightSide.show();
  Engine.update(engine);
 // drawSprites();
 
}
function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:50,y:-35});
	}
}



