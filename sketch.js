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
function setup() {
	createCanvas(600,600); // make an HTML canvas element width x height pixels
	angleMode(DEGREES); 
}

function draw() {
	background('black');
	
	translate(300,300); 
	rotate(-90);
	//rotate(angle); 
	
	let hr = hour();
	let min = minute(); 
	let sec = second(); 
	
	
	//second circle 
	strokeWeight(8);
	
	noFill(); 
	stroke('gray');
	ellipse(100, 0 , 200/3, 200/3,0);
	stroke('yellow');
	arc(100, 0 , 200/3, 200/3,0,  map(sec, 0, 60, 0, 360));


	//minute circle 
	strokeWeight(8);
	noFill(); 
	stroke('gray')
	ellipse(-100, 150 , 2*200/3, 2*200/3,0);
	stroke('blue');
	arc(-100, 150 , 2*200/3, 2*200/3, 0, map(min, 0, 60, 0, 360));

	
	//hour circle
 	strokeWeight(8); 
	noFill(); 
	stroke('gray')
	ellipse(-100, -150 , 200, 200,0);
	stroke('red');
	arc(-100, -150 , 200, 200,0, map(hr%12, 0, 12, 0, 360) );
	//angle = angle +1; 
	
	
}
