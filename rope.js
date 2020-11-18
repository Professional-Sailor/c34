class rope{
    constructor(bodya,pointb){
        var options={
           
            bodyA: bodya,
            pointB: pointb,
            stiffness:1.2,
            length:300
        }
        this.pointB = pointb;
        this.rope = Constraint.create(options)
        World.add(world,this.rope);

    }
    display(){
        var pa = this.rope.bodyA.position
        var pb = this.pointB
        push();
        strokeWeight(3)
        stroke("brown")
        line(pb.x,pb.y,pa.x,pa.y)
        pop();
    }
}