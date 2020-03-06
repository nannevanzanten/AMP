const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let dx,dy;
let mouse = {};

let arrow = new Arrow(new Vector2d(width/2,height/2),0);

function animate(){
  requestAnimationFrame(animate);
  
  context.beginPath();
  context.moveTo(arrow.pos.dx, arrow.pos.dy);
  context.stroke();

  context.fillStyle= "rgba(255,255,255,0.2)";
  context.fillRect(0,0,width,height);
  arrow.draw(context);
}

addEventListener('mousemove',(evt)=>{
  mouse.x = evt.clientX;
  mouse.y = evt.clientY;
  dx = mouse.x -arrow.pos.dx;
  dy = mouse.y - arrow.pos.dy;
  arrow.angle = Math.atan2(dy,dx);
})

animate();