    function setup()
    {
        createCanvas(300,500);
    }
    //figurevariables
    var bodyx = 100;
    var bodyspeed = Math.random(0.1, 0.25);
    var headx = 150;
    var headspeed = Math.random(0.1, 0.3);
    var leftlegY = 450;
    var leftlegSpeed = Math.random(1.5 , 3);
    var rightlegY = 450;
    var rightlegSpeed = Math.random(1.5 , 2);
    var armX = 80;
    var armY = 316;
    var armSpeed = Math.random(0.2, 0.3);
    var armXr = 221;
    var armYr = 330;
    var armSpeedr = Math.random(0.4, 0.5);

    //textvariables
    var titleSize = 32;
    var titleDirection = .6;
    var count = 0;

    function draw() {
        background(220);
        //legs
        line(120, 370, 120, leftlegY);
        leftlegY += leftlegSpeed;
        if (leftlegY >= 470 || leftlegY <= 450)
        {
            leftlegSpeed *= -1;
        }
        line(180, 370, 180, rightlegY);
        rightlegY -= rightlegSpeed;
        if (rightlegY <= 445 || rightlegY >= 468)
        {
            rightlegSpeed *= -1;
        }
        //arms
        line(100, 230, armX, armY);
        armX -= armSpeed;
        armY -= armSpeed;
        if (armX <= 0 || armX >= 80)
        {
            armSpeed *= -1;
        }
        line(200, 230, armXr, armYr);
        armXr += armSpeedr;
        armYr += armSpeedr;
        if (armXr >= 235 || armXr <= 221)
        {
            armSpeedr *= -1;
        }
        strokeWeight(1);
        //body
        fill(116, 164, 217);
        rect(bodyx , 190, 100, 200);
        bodyx += bodyspeed;
        if (bodyx >= 105 || bodyx <= 95)
        {
            bodyspeed *= -1;
        }
        //head
        fill(222, 195, 160);
        circle(headx, 150, 95);
        headx += headspeed;
        if (headx >= 153 || headx <= 148)
        {
            headspeed *= -1;
        }
        //mouth
        fill(223, 189, 237);
        triangle(138, 170, 143, 160, 148, 170);
        fill(0)
        //eyes
        strokeWeight(8);
        point(130, 140);
        point(160, 140);
        //title
        textSize(titleSize);
        titleSize += titleDirection;
        count +=1;
        if (count >= 5)
        {
            titleDirection *= -1;
            count = 0; 
        }
        text('Molly', 111, 30);
        //signature
        textSize(10);
        text('By Molly', 244, 485);

        //textSize(20);
        //text("X: " + mouseX,100,200 );
        //text("Y: " + mouseY,100,220 );

    }
