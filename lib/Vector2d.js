class Vector2d
{
    constructor(dx,dy)
    {
        this.dx = dx;
        this.dy = dy;
    }
    
    get magnitude()
    {
        return Math.sqrt(this.dx*this.dx + this.dy*this.dy);
    }

    set magnitude(newMagnitude)
    {
        let tempAngle = this.angle;
        this.dx = newMagnitude*Math.cos(tempAngle);
        this.dy = newMagnitude*Math.sin(tempAngle);
    }

    differenceVector(a,b)
    {
        this.dx = a.dx - b.dx;
        this.dy = a.dy - b.dy;
    }

    add(vector)
    {
        this.dx += vector.dx;
        this.dy += vector.dy;
    }

    dot(vector)
    {
        return this.dx * vector.dx + this.dy * vector.dy;
    }

    scalarMul(num)
    {
        this.dx *= num;
        this.dy *= num;
    }

    get angle()
    {
        return Math.atan2(this.dy,this.dx);
    }

    draw(context,pos,scale){
        let shaftHeigth = 12;
        let headHeigth = 24;
        let headLength = 15;
        let shaftLength = this.magnitude*scale - headLength;
  
        context.fillStyle = "rgba(255,255,255,0.5)";
        context.save();
        context.translate(pos.dx,pos.dy);
        context.rotate(this.angle);
        context.beginPath();
        context.moveTo(0,0);
        context.lineTo(0,-shaftHeigth/2);
        context.lineTo(shaftLength,-shaftHeigth/2);
        context.lineTo(shaftLength,-headHeigth/2);
        context.lineTo(shaftLength+headLength,0);
        context.lineTo(shaftLength,headHeigth/2);
        context.lineTo(shaftLength,shaftHeigth/2);
        context.lineTo(0,shaftHeigth/2);
        context.closePath();
        context.stroke();
        context.fill();
        context.restore();
      }
}