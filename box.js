class Box {

    constructor(x, y, width, height){
        var box_options={
            restitution: 0.3,
            friction:1,
            density:1

        }
        //define all the Box properties here
        this.myRectBody = Bodies.rectangle (x,y,width,height,box_options);
        this.width = width;
        this.height = height;
        World.add(myWorld, this.myRectBody);
    }

    //define all the Box functions here
    display () {

        push();  ///save my settings before translation
        translate(this.myRectBody.position.x, this.myRectBody.position.y);
        rotate(this.myRectBody.angle);
        rectMode (CENTER);
        strokeWeight(4);
        stroke("green");
        fill("white");
        rect (0, 0,this.width,this.height);
        pop(); //go back to my previous settings
        
      
        
    }
}

