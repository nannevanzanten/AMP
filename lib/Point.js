class Point 
{
    constructor(position,radius,r,g,b,draggable)
    {
        this.position = position;
        this.radius = radius;
        this.r = r;
        this.g = g;
        this.b = b;
        this.draggable = false || draggable;
        if(this.draggable){
            this.drag();
        }
    }
    
    draw(context)
    {
        context.beginPath();
        context.strokeStyle = "black";
        context.fillStyle = "rgb("+this.r+","+this.g+","+this.b+")";
        context.arc(this.position.dx,this.position.dy,this.radius,0,2*Math.PI);
        context.stroke();
        context.fill();
        context.closePath();
    }
    
    drag()
    {
        let dragging = false;
        window.addEventListener('mousedown',(evt)=>
        {
        let mouse = new Vector2d(evt.clientX,evt.clientY);
        let difference = new Vector2d(0,0);
        difference.differenceVector(this.position,mouse)

        if(difference.magnitude<this.radius)
        {
            dragging = true;
        }
        });
    
        window.addEventListener('mousemove',(evt)=>
        {

        if(dragging)
        {
            this.position.dx = evt.clientX;
            this.position.dy = evt.clientY;
        }
        });
    
        window.addEventListener('mouseup',()=>
        {
        dragging = false;
        })
    }
}
