class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.1,
            length: 13
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fall(){
        this.sling.bodyA = null;
    }

    attach(shooter){
        this.sling.bodyA = shooter;
    }

    display(){
        if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB
        strokeWeight(2);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
    }
}