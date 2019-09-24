const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let A = new Point(new Vector2d(200,200),20,true)
let B = new Point(new Vector2d(350,500),20,true)
let C = new Point(new Vector2d(600,300),20,true)

function animation(){
  requestAnimationFrame(animation);
  context.clearRect(0,0,width,height);
  A.draw(context);
  B.draw(context);
  C.draw(context);
}

animation();