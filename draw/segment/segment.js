class Segment {
  constructor(arg1, arg2, arg3, arg4) {
    if (arguments.length === 4) {
      const start = createVector(arg1, arg2);
      const end = createVector(arg3, arg4);
      const lengthX = end.x - start.x;
      const lengthY = end.y - start.y;
      const length = sqrt(lengthX ** 2 + lengthY ** 2);
      const angle = acos(
        (lengthY ** 2 + length ** 2 - lengthY ** 2) / (2 * lengthX * length)
      );
      this.start = start;
      this.end = end;
      this.vector = createVector(lengthX, lengthY);
      this.length = length;
      this.angle = angle;
    } else if (arguments.length === 3) {
      const start = arg1;
      const angle = -arg2;
      const length = arg3;
      const lengthX = length * cos(angle);
      const lengthY = length * sin(angle);
      const end = createVector(start.x + lengthX, start.y + lengthY);
      this.start = start;
      this.end = end;
      this.length = length;
      this.angle = -angle;
      this.vector = createVector(lengthX, lengthY);
    }
  }
}