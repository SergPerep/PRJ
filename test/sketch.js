const maxRadius = 120;
const minRadius = 16;
const numberOfHexs = 8;
const minStrokeWeight = 1;
const maxStrokeWeight = 14;
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

  const time = millis() / 1000;

  for (let i = 1; i <= numberOfHexs; i++) {
    const step = (i - 1) / (numberOfHexs - 1);
    const radius = lerp(minRadius, maxRadius, step);
    const thickness = lerp(minStrokeWeight, maxStrokeWeight, pingPong(time, 140, (i - 1) * 40));
    strokeWeight(thickness);
    renderHex(width / 2, height / 2, radius);

    // if(strokeStep === 1) strokeStep = 0;
  }

  

  // console.log(time);
  // console.log(pingPong(time, 180));

  // noLoop();
}

function renderHex(centerX, centerY, radius) {
  const sides = 6;
  const angleStep = 360 / sides;
  beginShape();
  for (let angle = 0; angle < 360; angle = angle + angleStep) {
    x = centerX + sin(angle) * radius;
    y = centerY + cos(angle) * radius;
    vertex(x, y);
  }
  endShape(CLOSE);
}

// rotationSpeed: deg/sec
// time: sec
// returns: 0 - 1
// offset: deg
function pingPong(time, rotationSpeed, offset) {
  const angle = rotationSpeed * time + offset;
  return (sin(angle) + 1) / 2;
}
