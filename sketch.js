const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4;
var hero,monster,rope,ground;

function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(400,800,250);
  rope = new Rope(hero.body, { x: 500, y: 50 });
  monster = new Monster(1100,550,300);

  box1 = new Box(600, 200, 70, 60);
  box2 = new Box(680, 200, 75, 70);
  box3 = new Box(770, 200, 80, 90);
  box4 = new Box(850, 200, 50, 30);
  box5 = new Box(700, 150, 70, 70);
  box6 = new Box(800, 150, 45, 70);
  box7 = new Box(600, 150, 70, 50);
  box8 = new Box(700, 150, 60, 70);
  box9 = new Box(800, 150, 50, 70);
  box10 = new Box(900, 150, 70, 70);
  box11 = new Box(600, 150, 70, 70);
  box12 = new Box(600, 150, 70, 70);
  box13 = new Box(700, 120, 50, 70);
  box14 = new Box(900, 130, 70, 70);
  box15 = new Box(800, 120, 70, 70);
  box16 = new Box(600, 110, 70, 70);
  box17 = new Box(900, 150, 70, 70);
  //box18 = new Box(800, 300, 70, 70);
  //box19 = new Box(600, 140, 70, 70);
  //box20 = new Box(700, 150, 70, 70);

}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();
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
  //box18.display();
  //box19.display();
  //box20.display();
  hero.display();
  rope.display();
  monster.display();

}

function mouseDragged(){
  Matter.Body.setPosition(hero.body, {x:mouseX,y:mouseY});
}
