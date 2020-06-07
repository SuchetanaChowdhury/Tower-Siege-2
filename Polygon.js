class Polygon {
    constructor(x,y) {
      var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0,
      }
      this.body = Bodies.rectangle(x,y,50,50,options);
      this.width = 50;
      this.height = 50;
      World.add(world, this.body);
      this.image = loadImage("ball.png");

    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill(255, 233, 0);
      imageMode(CENTER);
     // rect(pos.x, pos.y, this.width, this.height);
      image(this.image, pos.x, pos.y, this.width, this.height)
      this.width = 80;
      this.height = 80;
    }
  };