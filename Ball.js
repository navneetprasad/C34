class Ball{
    constructor(x, y,w,h,angle) {

        var options ={
            friction:0.005,
            density:1
        }
       
      
        this.body = Bodies.rectangle(x, y, w,h,options);       
       this.w = w;
       this.h = h;
        World.add(world, this.body);

    }
    display() {

        
        var angle = this.body.angle;

        push();
        translate(this.body.pos.x,this.body. pos.y);
        rotate(angle);
       
        
      
        ellipse(0, 0, this.w,this.h);
        pop();
    }

};