class BaseClass {
    constructor(x, y, radius) {

      var options = {
          
        'isStatic':true,
        'restitution':1,
        'friction':0.04,
        'density':0.01

      }

      this.body = Bodies.circle(x, y, radius, options);
      this.image = loadImage("Images/base.png");
      World.add(world, this.body);

    }

    display(){

      var pos =this.body.position;
      var angle = this.body.angle;

      push();
      translate(pos.x, pos.y);
      rotate(angle);
      fill("black");
      imageMode(RADIUS);
      image(this.image,0, 0, 30, 30);
      pop();
                                                                                
    }
  }
  