let bouncingBall;

function preload()
{
    bouncingBall = loadImage("bouncingBall.gif");
}

function setup() 
{
	createCanvas(400, 400);
}

function draw()
{
background(255,0,0);
image(bouncingBall,0,0);
}
