const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var  myEngine, myWorld ;

var box1, box2 , box3 ,box4 , box5; 
var ground;
var pig1 , pig2;
var log1, log2 , log3 , log4;
var bird;

function setup() {
  createCanvas(1200,400);

  myEngine=Engine.create();  //myEngine.world
  myWorld = myEngine.world;

  //Create a ground using Ground class
  ground= new Ground(600,390,1200,20);
  
  bird = new Bird (100,100);
    //Create new box objects using Box class
  box1 = new Box(750,320,70,70);
  box2 = new Box(850,320,70,70);
  pig1= new Pig(800,350);
  log1=new Log(800,260,300,PI/2);

  box3 = new Box(750,230,70,70);
  box4 = new Box(850,230,70,70);
  pig2= new Pig(800,210);
  log2=new Log(800,200,300,PI/2);

  box5 = new Box (810,160,70,70);
  log3 = new Log (760,120,150,PI/7);
  log4 = new Log(870,120,150,-PI/7);
  }

function draw() {
  background("black");

  Engine.update(myEngine);
  
  bird.display();
  ground.displayGround();

  box1.display();
  box2.display();
  pig1.display();
  log1.display();
 
  box3.display();
  box4.display();
  pig2.display();
  log2.display();

  box5.display();
  log3.display();
  log4.display();
}