class Arrow
{
    constructor(pos)
    {
        this.pos = pos;
    }

    draw(context)
    {
        let shaftHeigth = 10;
        let shaftLength = 70;
        let headHeigth = 25;
        let headLength = 15;
    
    
        context.fillStyle = "Green";
        context.save();
        context.translate(this.pos.dx,this.pos.dy);
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