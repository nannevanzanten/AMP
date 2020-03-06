const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let A = new Point(new Vector2d(500,700),20,100,255,50,true);
let B = new Point(new Vector2d(1200,700),20,0,255,255,true);
let C = new Point(new Vector2d(845,150),20,150,0,255,true);

let D = new Point(new Vector2d(0,0),10,0,0,0,false);
let E = new Point(new Vector2d(0,0),10,0,0,0,false);
let F = new Point(new Vector2d(0,0),10,0,0,0,false);

let S = new Point(new Vector2d(0,0),10,255,255,255,false);

let l = new LinearFunction(1, 1);
let m = new LinearFunction(1, 1);
let n = new LinearFunction(1, 1);

function animate()
{
   requestAnimationFrame(animate);
   context.clearRect(0,0,width,height);
   
   // context.beginPath();
   // context.arc(0,0,80,0,2*Math.PI);
   // context.stroke();

   l.defineLineByTwoPoints(A, B);
   m.defineLineByTwoPoints(C, B);
   n.defineLineByTwoPoints(C, A);
   l.draw(context);
   m.draw(context);
   n.draw(context);
  
   A.draw(context);
   B.draw(context);
   C.draw(context);

   D.position.dx = 1/2 * (A.position.dx + B.position.dx);
   D.position.dy = 1/2 * (A.position.dy + B.position.dy);

   D.draw(context);

   E.position.dx = 1/2 * (A.position.dx + C.position.dx);
   E.position.dy = 1/2 * (A.position.dy + C.position.dy);

   E.draw(context);

   F.position.dx = 1/2 * (B.position.dx + C.position.dx);
   F.position.dy = 1/2 * (B.position.dy + C.position.dy);

   F.draw(context);

   // S.position.dx = 1/3 * (A.position.dx + B.position.dx + C.position.dx);
   // S.position.dy = 1/3 * (A.position.dy + B.position.dy + C.position.dy);

   // S.draw(context);
}

animate();