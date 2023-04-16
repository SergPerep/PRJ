# Creative coding

Creative coding demos and snippets

## Draw polygon

```javascript
function polygon(x, y, radius, sides = 3, angle = 0) {
  beginShape();
  for (let i = 0; i < sides; i++) {
    const a = angle + TWO_PI * (i / sides);
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
```

## Sin animation


```javascript

// time in sec
const time = minis() / 1000;

function pingPong(time, rotationSpeed, offset) {
  const angle = rotationSpeed * time + offset;
  return (sin(angle) + 1) / 2;
}
```

```javascript
const 
```

## Some changes 2