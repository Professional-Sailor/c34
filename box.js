class box{
    constructor(x,y,width,height){
        var options={
            restitution: 0.8,
            friction: 1.0,
            density:0.4

        }
        this.body=Bodies.rectangle(x,y,width,height,options)
        this.width = width;
        this.height = height;
        World.add(world,this.body);

    }
    display(){
        var pos = this.body.position
        var a =this.body.angle
        push();
        translate(pos.x,pos.y)
        rotate(a)
        rectMode(CENTER)
        fill("white")
        strokeWeight(4)
        stroke("red")
        rect(0,0,this.width,this.height)
        pop();
    }
}