
function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background("black");
  noStroke();

  const time = millis() / 1000;
  const maxY = height * 0.2;
  const minY = height * 0.8;
  const x = width / 2;
  const y = lerp(minY, maxY, pingPong(time, 180));

  circle(x, y, 48);
}

// rotationSpeed: deg/sec
// time: sec
// returns: 0 - 1
// offset: deg
function pingPong(time, rotationSpeed, offset = 0) {
  const angle = rotationSpeed * time + offset;
  return abs(sin(angle));
}
