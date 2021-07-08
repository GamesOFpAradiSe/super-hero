class Box{
    constructor(x, y) {
        var options = {
            'restitution':0.8,
            'friction':10,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y,50,50, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("box.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, 50,50);
        pop();
      }
}