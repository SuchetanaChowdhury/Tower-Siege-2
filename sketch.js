const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;

function setup() {
  var canvas = createCanvas(1100,400);
  engine = Engine.create();
  world = engine.world;

//creating the grounds
  ground1 = new Ground(650, 350, 360, 30);
  ground2 = new Ground(955, 170, 170, 20);

//creating level 1.1
  block1 = new Box(500, 310);
  block2 = new Box(550, 310);
  block3 = new Box(600, 310);
  block4 = new Box(650, 310);
  block5 = new Box(700, 310);
  block6 = new Box(750, 310);
  block7 = new Box(800, 310);
//creating level 1.2
  block8 = new Box(525, 270);
  block9 = new Box(575, 270);
  block10 = new Box(625, 270);
  block11 = new Box(675, 270);
  block12 = new Box(725, 270);
  block13 = new Box(775, 270);
//creating level 1.3
  block14 = new Box(550, 230);
  block15 = new Box(600, 230);
  block16 = new Box(650, 230);
  block17 = new Box(700, 230);
  block18 = new Box(750, 230);
//creating level 1.4
  block19 = new Box(570, 190);
  block20 = new Box(620, 190);
  block21 = new Box(670, 190);
  block22 = new Box(720, 190);
//creating level 1.5
  block23 = new Box(595, 150);
  block24 = new Box(645, 150);
  block25 = new Box(695, 150);
//creating level 1.6
  block26 = new Box(620, 110);  
  block27 = new Box(670, 110);
//creating level 1.7
  block28 = new Box(645, 70);
//creating level 2.1
  rock1 = new Rock(895, 150);
  rock2 = new Rock(925, 150);
  rock3 = new Rock(955, 150);
  rock4 = new Rock(985, 150);
  rock5 = new Rock(1015, 150);
//creating level 2.2
  rock6 = new Rock(910, 130);
  rock7 = new Rock(940, 130);
  rock8 = new Rock(970, 130);
  rock9 = new Rock(1000, 130);
//creating level 2.3
  rock10 = new Rock(926, 110);
  rock11 = new Rock(956, 110);
  rock12 = new Rock(986, 110);
//creating level 2.4
  rock13 = new Rock(940, 90);
  rock14 = new Rock(970, 90);
//creating level 2.5
  rock15 = new Rock(955, 70);
//creating the polygon
  shooter = new Polygon(200, 100);
//creating the bouncer
  bouncer = new Slingshot(shooter.body, {x:200, y:100});
}

function draw() {
  background(20, 121, 80);  
  Engine.update(engine);
//displaying the grounds
  ground1.display();
  ground2.display();
//displaying the blocks
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();
  block27.display();
  block28.display();
//displaying the rocks
  rock1.display();
  rock2.display();
  rock3.display();
  rock4.display();
  rock5.display();
  rock6.display();
  rock7.display();
  rock8.display();
  rock9.display();
  rock10.display();
  rock11.display();
  rock12.display();
  rock13.display();
  rock14.display();
  rock15.display();
//displaying the shooter
  shooter.display();
//displaying the bouncer
  bouncer.display();
}

function mouseDragged(){
  Matter.Body.setPosition(shooter.body, {x:mouseX, y:mouseY})
}

function mouseReleased(){
  bouncer.fall();
}

function keyPressed(){
  if(keyCode === 32){
    bouncer.attach(shooter.body);
  }
}