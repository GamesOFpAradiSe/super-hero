const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var bo = []
function preload() {
    bg = loadImage("bg.png");
}

function setup(){
createCanvas(1168,552);
    engine = Engine.create();
    world = engine.world;

    hero = new Hero(100,height/2)
    ground = new Ground(400,height-50,900,20)
    enemy = new Enemy(800,height/2)
    rope = new Rope(hero.body,{x:100,y:10})
//box
for (var j = 300; j <=width-600; j=j+50) 
  {
    bo.push(new Box(j,450));
  }

  for (var j = 300; j <=width-600; j=j+50) 
  {
    bo.push(new Box(j,400));
  }

for (var j = 300; j <=width-600; j=j+50) 
  {
    bo.push(new Box(j,350));
  }

for (var j = 300; j <=width-600; j=j+50) 
  {
    bo.push(new Box(j,300));
  }

for (var j = 300; j <=width-600; j=j+50) 
  {
    bo.push(new Box(j,250));
  }

for (var j = 300; j <=width-600; j=j+50) 
  {
    bo.push(new Box(j,200));
  }
}

function draw() {
  background(bg);  
  Engine.update(engine);

ground.display()
for (var i = 0; i < bo.length; i++) {
  bo[i].display();   
}
//rope.display()
enemy.display()
hero.display()
  }

  function mouseDragged()
  {

  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY})
  }

