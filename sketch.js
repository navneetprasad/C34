var  World = Matter.World;
var Events = Matter.Events;
var Bodies = Matter.Bodies;
 var Constraint = Matter.Constraint;   
 var Engine = Matter.Engine;

var ground;
var ball;
var engine,world;
var box1;



function setup(){
createCanvas(3000,800);
engine = Engine.create();
world = engine.world;

ground = new Ground(600,600,1200,20);
ball = new Ball(200,200,80,80);
box1= new Box(900,100,70,70);
box2 = new Box(900,100,70,70);
box3 = new Box(900,100,70,70);
box4 = new Box(900,100,70,70);
box5 = new Box(900,100,70,70);
box6 = new Box(900,100,70,70);
box7 = new Box(800,100,70,70);
box8 = new Box(800,100,70,70);
box9 = new Box(800,100,70,70);
box10 = new Box(800,100,70,70);
box11= new Box(800,100,70,70);
box12 = new Box(800,100,70,70);
box13 = new Box(700,100,70,70);
box14 = new Box(700,100,70,70);
box15 = new Box(700,100,70,70);
box16 = new Box(700,100,70,70);



}
function draw(){
background(255);
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
box13.display();
box14.display();
box15.display();
box16.display();




ground.display();

ball.display();
drawSprites();


}


