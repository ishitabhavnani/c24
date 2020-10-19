class Bird {

    constructor(x, y, ){
        var box_options={
            restitution: 0.3,
            friction:1,
            density:1

        }
        //define all the Box properties here
        this.myRectBody = Bodies.rectangle (x,y,50,50,box_options);
        this.width = 50;
        this.height = 50;
        World.add(myWorld, this.myRectBody);
    }

    //define all the Box functions here
    display () {
        this.myRectBody.position.x=mouseX;
        this.myRectBody.position.y=mouseY;
        push();  ///save my settings before translation
        translate(this.myRectBody.position.x, this.myRectBody.position.y);
        rotate(this.myRectBody.angle);
        rectMode (CENTER);
        strokeWeight(4);
        stroke("black");
        fill("red");
        rect (0, 0,this.width,this.height);
        pop(); //go back to my previous settings
        
      
        
    }
}

