const maxRadius = 120;
const minRadius = 16;
const numberOfHexs = 4;
const minStrokeWeight = 1;
const maxStrokeWeight = 8;
let heartBeat = 1;
let frame = 0;
let strokeStep = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background("black");
  stroke("white");
  noFill();
  
  frame++;
  if (frame % 60 === 0) heartBeat++;

  for (let i = 1; i <= numberOfHexs; i++) {
    const step = (i - 1) / (numberOfHexs - 1);
    const radius = lerp(minRadius, maxRadius, step);
    const strokeThickness = lerp(minStrokeWeight, maxStrokeWeight, step);
    strokeWeight(strokeThickness);
    renderHex(width/2, height/2, radius);
    
    // if(strokeStep === 1) strokeStep = 0;
  }
  
  noLoop();
  
}

function renderHex(centerX, centerY, radius){
  const sides = 6;
  const angleStep = 360 / sides;
  beginShape();
  for (let angle = 0; angle < 360; angle = angle + angleStep){
    x = centerX + sin(angle) * radius;
    y = centerY + cos(angle) * radius;
    vertex(x, y);
  }
  endShape(CLOSE);
}