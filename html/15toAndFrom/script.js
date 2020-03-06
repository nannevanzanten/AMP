const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let toB = true;

let points = [];
let dpoints = [];

for (var i = 0; i < 7; i++) {
  points[i] = new Point(new Vector2d(GetRandom(100, 1300),GetRandom(100, 600)),20,255,0,0,true);
}

for (var i = 0; i < 5; i++) {
  dpoints[i] = new DPoint(new Vector2d(200,300),new Vector2d(0,0),new Vector2d(0,0),10,"white", i);
}

function animate(){
  requestAnimationFrame(animate);
  context.clearRect(0,0,width,height);

  context.beginPath();
  context.moveTo(points[0].position.dx,points[0].position.dy);
  for (var i = 1; i < points.length; i++) {
    context.lineTo(points[i].position.dx,points[i].position.dy);
  }
  context.closePath();
  context.stroke();

for (var i = 0; i < points.length; i++) {
  points[i].draw(context);
}

for (var i = 0; i < dpoints.length; i++) {
  dpoints[i].draw(context);

  dpoints[i].vel.differenceVector(points[dpoints[i].target].position,dpoints[i].pos);
  if (dpoints[i].vel.magnitude < 0.1)
  {
    dpoints[i].target++;
    if (dpoints[i].target >= points.length) {
    dpoints[i].target = 0;
    }
  }

  dpoints[i].vel.scalarMul(0.1);
  dpoints[i].update();
  }
}

animate()

function GetRandom(min, max)
{
  return Math.random()* max + min;
}
