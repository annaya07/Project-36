class Food {
    constructor(x, y) {
        var options = {
            restitution: 1,
            friction: 0,
            isStatic:true
        }
        this.r = 10;
        this.body = Bodies.circle(x, y, this.r, options);
        
        World.add(world, this.body);
    }

       display() {
           var x=80, y=100;

           imageMode (center);
           image (this.image,720,220,70,70);

           if (this.foodStock!=0);
              for (var i=0;i<this.foodStock;i++){
                  if (i%10===0){
                      x=80;
                      y=y+50;
                  }
                  image (this.image,x,y,50,50);
                  x=x+30
              }

       }







}

