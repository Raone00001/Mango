class Connecter {

    constructor(bodyA,anchor) {

        var options = {

            bodyA: bodyA,
            pointB: anchor,
            stiffness: 0.04,
            length: 5

        }

        this.boy = loadImage("Images/boy.png");
        this.tree = loadImage("Images/tree.png");

        this.bodyA = bodyA;
		this.pointB = anchor;
        this.sling = Constraint.create(options);
        World.add(world,this.sling);

    }

    attach(body){ 

        this.sling.bodyA = body; 

    }
    
    fly(){

        this.sling.bodyA = null;

    }

    display(){

        image(this.boy, 95, 580, 150, 150);
        image(this.tree, 870,300,300,400);

        push();
        stroke(173,216,230);
        
        if (this.sling.bodyA) {

            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;

            strokeWeight(3);
            line(pointA.x,pointA.y,pointB.x,pointB.y);

        }
        pop();

    }
}