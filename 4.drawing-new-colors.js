function setup() { 
  createCanvas(400, 400);
} 

var diameter = 10;

function draw() { 
  if (mouseIsPressed) {
    ellipse(mouseX, mouseY, diameter);
  }
}

function keyPressed() {
  print(key);
  if (key == 'R') {
    fill(255, 0, 0);
  } else if (key == 'G') {
    fill(0, 255, 0);
  } else if (key == 'B') {
    fill(0, 0, 255); 
  if (key == 'PP') {
    colorMode(HSB);
    fill(255, 204, 100);
  } else if (key == 'PINK') {
    fill('#fae');
  } else if (key == 'LG') {
    fill('rgba(0,255,0, 0.25)'); 
	}
	}
}
