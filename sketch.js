const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground;

var hogwarts;
var rapunzel;
var enrolados;
var bomba; 
var agudo;
var sid; 


function preload() {
  hogwarts = loadImage("./assets/background.gif");
  enrolados = loadImage("./assets/tower.png");
}

function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  
 options={
 isStatic:true
 }
 
 ground= Bodies.rectangle(0,height-1, width*2,1,options);
 World.add(world,ground);

 rapunzel = Bodies.rectangle(160, 350, 160, 310, options);
 World.add(world,rapunzel);
 
 angleMode(DEGREES);
 agudo = 20;

 bomba = new EraDoGelo (180, 110, 130, 100, agudo);

 sid = new Sid (bomba.posX, bomba.posY);
}

function draw() {
  background(189);
  image(hogwarts, 0, 0, 1200, 600);

  Engine.update(engine);
 
 rect(ground.position.x, ground.position.y,width*2,1);

 push();
 imageMode(CENTER);
 image(enrolados,rapunzel.position.x, rapunzel.position.y, 160, 310);
 pop();
  
 bomba.jack();
 sid.preguica();
}

function keyReleased(){
    if(keyCode === DOWN_ARROW){
      sid.dorminhoco();
    }
}