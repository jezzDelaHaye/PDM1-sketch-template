const GRID_SIZE = 20;
const CANVAS_SIZE = 600;
const OFFSET = GRID_SIZE /2;
let gameOver = false;
let headX = 300;
let headY = 300;
let xDir = 1;
let yDir = 0;
let foodX;
let foodY;

function setup()
{
    createCanvas(CANVAS_SIZE,CANVAS_SIZE)
    background(0);
    createFood();
    frameRate(3);
    
}
function draw()
{
    if (!gameOver)
    {
        square(headX += GRID_SIZE * xDir,headY += GRID_SIZE * yDir,GRID_SIZE);
    }
    circle(foodX, foodY, GRID_SIZE);
    boundaryCheck(headX,headY);   
    console.log(foodX,foodY)

}
function boundaryCheck(x,y)
{
    if (x >= CANVAS_SIZE|| x <=0 || y >= CANVAS_SIZE || y<=0 )
    {
        (gameOver === true);
    }

}
function createFood()
{
    foodX = (round (random(0,CANVAS_SIZE)/GRID_SIZE) * GRID_SIZE + OFFSET)
    foodY = (round (random(0,CANVAS_SIZE)/GRID_SIZE) * GRID_SIZE + OFFSET)
}
function keyPressed()
{
    
    if (key === 'w' || keyCode === UP_ARROW)
    {
        //up
        xDir = 0;
        yDir = -1;
        console.log("up")
    }
    if (key === 's' || keyCode === DOWN_ARROW)
    {
        //down
        xDir = 0;
        yDir = 1;
        console.log("down")
    }
    if (key === 'a' || keyCode === LEFT_ARROW)
    {
        //left
        xDir = -1;
        yDir = 0;
        console.log("left")
    }
    if (key === 'd' || keyCode === RIGHT_ARROW)
    {
        //right
        xDir = 1;
        yDir = 0;
        console.log("right")
    }
    
    
}
