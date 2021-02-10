const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backImg;

function preload() {

  backImg=loadImage("Hot Air Ballon_01.png");
  
  }

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
 
}

function draw() {
  background(backImg); 
  Engine.update(engine); 
  drawSprites();
}