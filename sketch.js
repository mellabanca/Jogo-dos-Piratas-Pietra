//Revisão de Matrizes
//Matriz com números
var matriz1 = [1,5,78,21,25];
console.log(matriz1);
//Matriz com diferentes tipos de dados
var matriz2 = ["Melissa", 25, true];
//console.log(matriz2);
//Matriz de matrizes
var matriz3 = [matriz1, matriz2];
//console.log(matriz3);
//Acessando os elementos de acordo com o índice
//console.log(matriz1[3]);
//console.log(matriz2[1]);
//console.log(matriz3[0][2]);
//Adicionando e retirando elementos da matriz
matriz1.push(125),
//console.log(matriz1);
matriz1.pop();
//console.log(matriz1);

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