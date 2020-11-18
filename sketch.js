const  Engine = Matter.Engine;
const  World = Matter.World;
const  Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;



var engine,world;






function setup() {
  var canvas = createCanvas(3000, 600);
  engine = Engine.create();
  world = engine.world;
  Ground = new ground(600,570,1200,20)
  box1 = new box(900,100,50,50);
  box2 = new box(900,100,50,50);
  box3 = new box(900,100,50,50);
  box4 = new box(900,100,50,50);
  box5 = new box(900,100,50,50);
  box6 = new box(900,100,50,50);

  box7 = new box(800,100,50,50);
  box8 = new box(800,100,50,50);
  box9 = new box(800,100,50,50);
  box10 = new box(800,100,50,50);
  box11 = new box(800,100,50,50);
  box12 = new box(800,100,50,50);

  box13 = new box(700,100,50,50);
  box14 = new box(700,100,50,50);
  box15 = new box(700,100,50,50);
  box16 = new box(700,100,50,50);
  box17 = new box(700,100,50,50);
  box18 = new box(700,100,50,50);
  box19 = new box(700,100,50,50);
  box20 = new box(700,100,50,50);
  Ball = new ball(200,200,80,80)
  Rope = new rope(Ball.body,{x:500,y: 50});
}
 


function draw() {
  background("black");
  Engine.update(engine);
  Ground.display();
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
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  Ball.display();
  Rope.display();
  

  
}
function mouseDragged(){
  Matter.Body.setPosition(Ball.body,{x: mouseX,y: mouseY})

}