const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world,ground;
var ball;


function setup() {
  createCanvas(800,400);

  engine=Engine.create();
  world=engine.world;

  var options={
    isStatic:true
  }
  
  var option={
    restitution:1.0
  }

  ground=Bodies.rectangle(400,380,800,20,options);

  World.add(world,ground);
  
  ball=Bodies.circle(100,100,50,option);
  
  World.add(world,ball);
}

function draw() {
  background("black");  

  Engine.update(engine);

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20);
   
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,50,50);

}