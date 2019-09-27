const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let A = new Point(new Vector2d(200,200),20,255,0,0,0,20,true)
let B = new Point(new Vector2d(350,500),20,0,255,0,0,20,true)
let C = new Point(new Vector2d(600,300),20,0,0,255,0,20,true)

function animation()
{
  requestAnimationFrame(animation);
  context.clearRect(0,0,width,height);

  context.beginPath();
  context.fillStyle = "grey";
  context.lineTo(A.position.dx,A.position.dy);
  context.lineTo(B.position.dx,B.position.dy);
  context.lineTo(C.position.dx,C.position.dy);
  context.fill();
  context.closePath();

  A.draw(context);
  B.draw(context);
  C.draw(context);
}
animation();