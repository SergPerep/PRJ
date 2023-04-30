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
  strokeWeight(2);

  const segment = new Segment(0 + 100, height - 100, width - 100, 0 + 100);
  
  // console.log({angle: segment.angle});
  
  line(segment.start.x, segment.start.y, segment.end.x, segment.end.y);
  noLoop();
}

