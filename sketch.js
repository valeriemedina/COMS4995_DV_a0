/*
function setup() {
	createCanvas(800,600); // make an HTML canvas element width x height pixels
}

function draw() {
	background(225);
	textSize(32);
	fill(180);
	text(hour(), 10, 30);
	fill(100);
	text(minute(), 10, 60);
	fill(0);
	text(second(), 10, 90);
}
*/
//predefine circle attributes 

//let angle = 0; 
// Assignment 2 - It's About Time / Part C - Abstract Clock
// Eye Of The Time - Hakan Yorganci

let ms;
let sec;
let min;
let hr;
let core;

function preload() {
  core = loadImage("../hknyrgnc/p5_images/core.png");
}
  
function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES); // https://p5js.org/reference/#/p5/angleMode
}

function draw() {
  background('black');
  noFill();
  strokeWeight(5);
  image(core, windowWidth/2.14, windowHeight/2.23, 65, 65);

  // Creating the frame (eye shape) of my abstract clock
  stroke('#ccff00');
  ellipse(windowWidth/2, windowHeight/2, 175, 175);
  stroke('#736AFF');
  ellipse(windowWidth/2, windowHeight/2, 200, 200);
  stroke('#daa520');
  ellipse(windowWidth/2, windowHeight/2, 225, 200);
  stroke('#F52887');
  ellipse(windowWidth/2, windowHeight/2, 250, 200);
  stroke('#ffff00');
  ellipse(windowWidth/2, windowHeight/2, 275, 200);
  stroke('#00ff00');
  ellipse(windowWidth/2, windowHeight/2, 300, 200);
  stroke('#9E7BFF');
  ellipse(windowWidth/2, windowHeight/2, 325, 200);

// Creating the abstract clock's core
// Second
  strokeWeight(8);
  stroke('#00ff7f');
  //https://p5js.org/reference/#/p5/arc
  arc(windowWidth/2, windowHeight/2, 100, 100, 0 - 90, sec - 90); // 90 deg starting point for all
  sec = map(second(), 1, 60, 1, 360); //https://p5js.org/reference/#/p5/map

  // Millisecond
  stroke('#ff00ff');
  arc(windowWidth/2, windowHeight/2, 75, 75, 0 - 90, ms - 90);
  ms = map(millis(), 1, 12, 1, TWO_PI)-HALF_PI;
  
  // Minute
  stroke('#3399ff');
  arc(windowWidth/2, windowHeight/2, 125, 125, 0 - 90, min - 90);
  min = map(minute(), 1, 60, 1, 360);

  // Hour
  stroke('#ffff00');
  arc(windowWidth/2, windowHeight/2, 150, 150, 0 - 90, hr - 90);
  hr = map(hour(), 1, 12, 1, 360);
}
