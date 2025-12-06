///Arrays Version

///creation
//user
var userX = 50;
var userY = 50;
var diameter = 25;

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

///Array Variables
var shapeXs = [];
var shapeYs = [];
var shapeHs = [];
var shapeWs = [];

var shapeXSpeeds = [];
var shapeYSpeeds = [];

var colorR = [];
var colorG = [];
var colorB = [];

var shapeFill = [];

function setup() {
    createCanvas(800, 500);

    ///first populates arrays
    for (var i = 0; i < 8; i++)
    {
        shapeXs[i] = getRandomNumber(500);
        shapeYs[i] = getRandomNumber(600);
        shapeWs[i] = getRandomNumber(50);
        shapeHs[i] = getRandomNumber(50);

        shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

        colorR[i] = Math.floor(Math.random() * (40-20) +20);
        colorG[i] = Math.floor(Math.random() * (50-30) +30);
        colorB[i] = Math.floor(Math.random() * (900-1) +1);
        console.log(color[i])
    }

}

function draw() 
{
    ///creation and controls
    background(80, 120, 300);
    stroke(0);
    createUser();
    userMovement();
    createExit();
    mouseShapeClick();

    ///iterates through arrays to make shapes
    for (var i = 0; i <= 8; i++) 
    {
    fill(Number(colorR[i]), Number(colorG[i]), Number(colorB[i]));
    rect(shapeXs[i],shapeYs[i],shapeWs[i],shapeHs[i]);

    shapeXs[i] += shapeXSpeeds[i];
    shapeYs[i] += shapeYSpeeds[i];

    ///checks boundaries
    if (shapeXs[i] >= width) 
    {
        shapeXs[i] = 0;
    }
    if (shapeYs[i] >= height) 
    {
        shapeYs[i] = 0;
    }

}
}

///setup
function getRandomNumber(number)
{
return Math.floor(Math.random() * number) + 10;
}

///creation
function createExit()
{
    ///exit
    fill(220,220,100);
    circle(width-10,height-50,80);
    ///exit sign
    fill(30,30,200);
    textSize(24);
    text("Exit", width - 43, height - 100);
}
function createUser()
{
    fill(162,183,255);
    circle(userX,userY,diameter);
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
function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}
function mouseShapeClick()
{
fill(165,70,250);
rect(mouseShapeX,mouseShapeY,10,60);
}
function playerWin()
{
if (userX >= width -20 && userY >= height -70)
{
    fill(30,30,200);
    textSize(50);
    text("You Win!", width/2 -100, height/2 -200);
}
}