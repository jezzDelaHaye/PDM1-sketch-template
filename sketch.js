const GRID_SIZE = 20;
const CANVAS_SIZE = 600;
const OFFSET = GRID_SIZE /2;
let gameOver = false;
let headX = [300];
let headY = [300];
let xDir = 1;
let yDir = 0;
let foodX;
let foodY;
let score = 0;

function setup()
{
    createCanvas(CANVAS_SIZE,CANVAS_SIZE)
    background(0);
    createFood();
    frameRate(3);
    
}
function draw()
{
    background(0);
    snakeLogic();
    circleLogic();
    boundaryCheck(headX,headY);   
    console.log(foodX,foodY)
    

}
function boundaryCheck(x,y)
{
    //checks values of the snakes head against the canvas, ends game if out of bounds 
    if (x >= CANVAS_SIZE|| x <=0 || y >= CANVAS_SIZE || y<=0 )
    {
        (gameOver === true);
    }

}
function createFood()
{
    //generates the food 
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
function snakeLogic()
{
    if (!gameOver)
    {        
        //if game is not over make snake 
        

        for (let i =0; i < headX.length; i++)
        {
            square(headX[i] += GRID_SIZE * xDir,headY[i]+= GRID_SIZE *yDir,GRID_SIZE)
        }
        
    }
}
function circleLogic()
{
    circle(foodX, foodY, GRID_SIZE);
    if ((headX[0] + OFFSET) === foodX && (headY[0] + OFFSET) === foodY)
    {
        createFood();
        headX.push(headX[headX.length-1]+ GRID_SIZE)
        headY.push(headY[headY.length-1])
    }
}
