    function setup()
    {
        createCanvas(300,500);
    }

    function draw() {
        background(220);
        strokeWeight(8);
        point(130, 140);
        point(160, 140);
        line(120, 370, 120, 450);
        line(180, 370, 180, 450);
        line(100, 230, 80, 316);
        line(200, 230, 221, 330);
        strokeWeight(1);
        fill(116, 164, 217);
        rect(100, 190, 100, 200);
        fill(222, 195, 160);
        circle(150, 150, 95);
        fill(223, 189, 237);
        triangle(138, 170, 143, 160, 148, 170);
        fill(0)
        strokeWeight(8);
        point(130, 140);
        point(160, 140);
        textSize(32);
        text('Molly', 111, 30);
        textSize(10);
        text('By Molly', 244, 485);

        //textSize(20);
        //text("X: " + mouseX,100,200 );
        //text("Y: " + mouseY,100,220 );

    }
