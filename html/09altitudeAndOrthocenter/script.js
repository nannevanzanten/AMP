const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let A = new Point(new Vector2d(500,690),20,100,255,50,true);
let B = new Point(new Vector2d(1200,700),20,0,255,255,true);
let C = new Point(new Vector2d(845,150),20,150,0,255,true);

let D = new Point(new Vector2d(0,0),10,0,0,0,false);
let E = new Point(new Vector2d(0,0),10,0,0,0,false);
let F = new Point(new Vector2d(0,0),10,0,0,0,false);

let S = new Point(new Vector2d(0,0),10,255,255,255,false);

let l = new LinearFunction(1, 1);
let m = new LinearFunction(1, 1);
let n = new LinearFunction(1, 1);

let o = new LinearFunction(1, 1);
let p = new LinearFunction(1, 1);
let q = new LinearFunction(1, 1);

function animate()
{
   requestAnimationFrame(animate);
   context.clearRect(0,0,width,height);

   l.defineLineByTwoPoints(A, B);
   m.defineLineByTwoPoints(C, B);
   n.defineLineByTwoPoints(C, A);
   l.draw(context);
   m.draw(context);
   n.draw(context);

   o.slope = -1 / n.slope;
   o.intercept = B.position.dy - o.slope * B.position.dx;

   o.draw(context);

   p.slope = -1 / m.slope;
   p.intercept = A.position.dy - p.slope * A.position.dx;

   p.draw(context);

   q.slope = -1 / l.slope;
   q.intercept = C.position.dy - q.slope * C.position.dx;

   q.draw(context);
  
   A.draw(context);
   B.draw(context);
   C.draw(context);

   D.position.dx = (n.intercept - o.intercept)/(o.slope - n.slope);
   D.position.dy = (o.slope * D.position.dx + o.intercept);

   D.draw(context);

   E.position.dx = (m.intercept - p.intercept)/(p.slope - m.slope);
   E.position.dy = (p.slope * E.position.dx + p.intercept);

   E.draw(context);

   F.position.dx = (l.intercept - q.intercept)/(q.slope - l.slope);
   F.position.dy = (q.slope * F.position.dx + q.intercept);

   F.draw(context);

   S.position.dx = (o.intercept - p.intercept)/(p.slope - o.slope);
   S.position.dy = (p.slope * S.position.dx + p.intercept);

   S.draw(context);   
}

animate();