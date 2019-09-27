const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let mouse = new Vector2d(0,0);
let circles = 0; 
let points = [];

for(let i = 0; i<4;++i)
{
  let point = new Point(new Vector2d(getRandom(width),getRandom(height)), 10, 0,255,0);
  points.push(point);
}

function animate()
{
  window.requestAnimationFrame(animate);

  context.beginPath();
  context.fillStyle = "grey";
  context.lineTo(points[0].position.dx,points[0].position.dy);
  context.lineTo(points[1].position.dx,points[1].position.dy);
  context.lineTo(points[2].position.dx,points[2].position.dy);
  context.lineTo(points[3].position.dx,points[3].position.dy);
  context.fill();
  context.closePath();
  
  for(let i = 0; i<points.length;i++)
  {
    points[i].draw(context);
  }
}

function getRandom(max) 
{
  return Math.floor((Math.random() * max) + 1);
}

animate();