/*const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let myPoints = [];
let point = new Point (new Vector2d(50,450),20);
let mouseVector = new Vector2d(0,0);
let difference = new Vector2d(0,0);

point.draw(context);

window.addEventListener('click',(evt)=>
{
    mouseVector.dx = evt.clientX;
    mouseVector.dy = evt.clientY;
    console.log(mouseVector);
    console.log(point.position);
    difference.differenceVector(point.position,mouseVector);
    console.log(difference);
    console.log(difference.magnitude);
    if(difference.magnitude<=point.radius)
    {
        point.position.dx += 50;
        //point.position.dy += 50;
        point.draw(context);
    }
})*/
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.height = height;
canvas.width = width;

let mouse = new Vector2d(0,0);
let circles = 0; 
let points = [];

for(let i = 0; i<10;++i)
{
  let point = new Point(new Vector2d(getRandom(width),getRandom(height)), 20, 0,255,0);
  points.push(point);
}

function animate()
{
  window.requestAnimationFrame(animate);
  for(let i = 0; i<points.length;++i)
  {
    points[i].draw(context);
  }
  if(circles>=10)
  {
    window.location.reload();
  }
}

function getRandom(max) 
{
  return Math.floor((Math.random() * max) + 1);
}

window.addEventListener("click",(evt)=>
{
  mouse.dx = evt.clientX;
  mouse.dy = evt.clientY;
  for(let i = 0; i<points.length;++i)
  {
    let dif = new Vector2d(0,0);
    dif.differenceVector(mouse,points[i].position)
    if((dif.magnitude<points[i].radius)&&(points[i].g==255))
    {
      points[i].r = 0;
      points[i].g = 0;
      points[i].b = 255;
      circles++;
    }

  }
});
animate();