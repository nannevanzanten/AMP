const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

let street = new Image();
street.src = "img/street.png";

let car = new Image();
car.src = "img/car.png";

car.pos = new Vector2d(0,0);
car.vel = new Vector2d(0.5,0);

let wheelFront = new Image();
wheelFront.src = "img/wheel.png";
wheelFront.pos = new Vector2d(0,0);

let wheelBack = new Image();
wheelBack.src = "img/wheel.png";
wheelBack.pos = new Vector2d(0,0);

car.addEventListener('load',()=>{
   car.pos.dy = height - car.height;
   animate();
})

function animate()
{
   requestAnimationFrame(animate);
   context.clearRect(0,0,width,height);
   car.pos.add(car.vel);
   context.drawImage(car, car.pos.dx, car.pos.dy);

   wheelFront.pos.dx = car.pos.dx;
   wheelFront.pos.dy = car.pos.dy;
   wheelBack.pos.dx = car.pos.dx;
   wheelBack.pos.dy = car.pos.dy;

   wheelFront.pos.add(new Vector2d(673,123));
   wheelBack.pos.add(new Vector2d(133,120));

   context.drawImage(wheelFront, wheelFront.pos.dx, wheelFront.pos.dy);
   context.drawImage(wheelBack, wheelBack.pos.dx, wheelBack.pos.dy);
   clamp();
}

function clamp()
{
   if(car.pos.dx > width)
   {
      car.pos.dx = -car.width;
   }
}

animate();