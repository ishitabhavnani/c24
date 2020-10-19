class Pig {

    constructor(x, y){
        var pig_options={
            restitution: 0.8,
            friction:0.3,
            density:1

        }
        //define all the Box properties here
        this.myRectBody = Bodies.rectangle (x,y,50,50,pig_options);
        this.width = 50;
        this.height = 50;
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
        fill("blue");
        rect (0, 0,this.width,this.height);
        pop(); //go back to my previous settings
        
      
        
    }
}

