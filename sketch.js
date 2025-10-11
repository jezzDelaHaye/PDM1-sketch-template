const GRID_SIZE = 20;
let headX = 300;
let headY = 300;
let foodX;
let foodY;
let col = 255;
let xDir = 1;
let yDir = 0;
let direction = 0;
function setup()
{
    createCanvas(600,600);
    background(0);
    foodX = random(0,600);
    foodY = random(0,600);
    frameRate(3);
}
function draw()
{
    fill(255)
    move();
    square(headX,headY,GRID_SIZE);
    circle(foodX,foodY,GRID_SIZE);
    //checkBoundaries();


}
function keyPressed()
{
    if (key === 'w')
    {
        direction = 1;
    }
    if (key === 's')
    {
        direction = 2;
    }
    if (key === 'a')
    {
        direction = 3;
    }
    if (key === 'd')
    {
        direction = 4; 
    }
}
function checkBoundaries()
{
    if (foodX > width || foodX < 0 || foodY > height || foodY < 0)
    {
        col = 0;
        console.log(gameOver)
    }
}
function move()
{
    if (direction === 1)
    {
        headY=-GRID_SIZE;
    }
    if (direction === 2)
    {
        headY+-GRID_SIZE;
    }
    if(direction ===3)
    {
        headX =-GRID_SIZE;
    }
    if (direction === 4)
    {
        headX =+ GRID_SIZE;
    }
}

