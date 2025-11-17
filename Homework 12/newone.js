    ///creation
    //user
    var userX = 50;
    var userY = 50;
    var diameter = 25;
    
    //shape1
    var shape1x1 = 300;
    var shape1y1 = 320;
    var shape1x2 = 325;
    var shape1y2 = 180;
    var shape1x3 = 350;
    var shape1y3 = 320;

    //shape2
    var shape2x = 200;
    var shape2y = 400;
    var shape2W = 140;
    var shape2H = 20;

    //border
    var width = 800;
    var height = 600;

    ///playercontrols
    var w = 87
    var a = 65
    var s = 83
    var d = 68

    //mouseShapeClick
    var mouseShapeX;
    var mouseShapeY;

    ///speed
    //shape1
    var shape1SpeedX 
    var shape1SpeedY 
    //shape2
    var shape2SpeedX 
    var shape2SpeedY 

    ///mainGame
    function setup()
    {
        createCanvas(800, 600);
    }
    function draw()
    {
        ///creation
        background(0);
        createBorders();
        createExit();
        //characters
        createUser();
        createShapes();
        ///controls and movement
        //playercontrol
        userMovement();
        mouseShapeClick();
        //movement
        shapeSpeed();
        shapeMovement();
    }

    ///movement and controls
    function userMovement()
    {
        if (keyIsDown(w))
        {
            userY -= 10;
        }
        else if (keyIsDown(s))
        {
            userY += 10;
        }
        else if (keyIsDown(a))
        {
            userX -= 10;
        }
        else if (keyIsDown(d))
        {
            userX += 10;
        }
        playerWin();
    }
    function shapeMovement()
    {
        //shape1
        shape1x1 += shape1SpeedX;
        shape1x2 += shape1SpeedX;
        shape1x3 += shape1SpeedX;
        shape1y1 -= shape1SpeedY;
        shape1y2 -= shape1SpeedY;
        shape1y3 -= shape1SpeedY;

        if (shape1x1 >= width)
        {
            shape1x1 = 0;
            shape1x2 = 25;
            shape1x3 = 50;
        }
        else if (shape1y1 <= 0)
        {
            shape1y2 = height;
            shape1y1 = height +140;
            shape1y3 = height +140;

        }

        //shape2
        shape2x -= shape2SpeedX;
        shape2y -= shape2SpeedY;
        if (shape2x <= 0)
        {
            shape2x = width;
        }
        else if (shape2y <= 0)
        {
            shape2y = height;
        }

    }
    function shapeSpeed()
    {
    //shape1
    shape1SpeedX = Math.random(1,5) *2;
    shape1SpeedY = Math.random(2,12) *10;
    //shape2
    shape2SpeedX = Math.random(3,10) *5;
    shape2SpeedY = Math.random(1,3) *2;
    }
    function mouseClicked()
    {
        mouseShapeX = mouseX;
        mouseShapeY = mouseY;
    }
    function mouseShapeClick()
    {
        fill(102,255,194);
        rect(mouseShapeX,mouseShapeY,20,20);
    }
    function playerWin()
    {
        if (userX >= width -20 && userY >= height -70)
        {
            fill(15,30,255);
            textSize(50);
            text("You Win!", width/2 -100, height/2 -200);
        }
    }
    ///creation
    function createBorders()
    {
        fill(51,99,255);
        rect(0,0,width,10);
        rect(0,0,10,height);
        rect(0,height -10,width,10);
        rect(width -10 ,0 ,10 ,height);
    }
    function createExit()
    {
        ///exit
        fill(0);
        rect(width-10,height-70,10,60);
        ///exit sign
        fill(51,135,255);
        textSize(25);
        text("Exit", width - 65, height - 70);
    }
    function createUser()
    {
        fill(162,183,255);
        circle(userX,userY,diameter);
    }
    function createShapes()
    {    
        ///shape1
        fill(255,255,128);
        noStroke();
        triangle(shape1x1,shape1y1,shape1x2,shape1y2,shape1x3,shape1y3);

        ///shape2
        fill(255,153,0);
        rect(shape2x,shape2y,shape2W,shape2H);
    }