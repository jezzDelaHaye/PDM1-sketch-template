const GRID_SIZE = 20;
const CANVAS_SIZE = 600;
const OFFSET = GRID_SIZE /2;
let headX = 300;
let headY = 300;
let foodX;
let foodY;

function setup()
{
    createCanvas(CANVAS_SIZE,CANVAS_SIZE)
    background(0);
    createFood();
    console.log(foodX,foodY)
    frameRate(3);
    
}
function draw()
{
    square(headX += GRID_SIZE,headY,GRID_SIZE);
    circle(foodX, foodY, GRID_SIZE);
    boundaryCheck(headX,headY);   

}

function boundaryCheck(x,y)
{
    if (x >= CANVAS_SIZE|| x <=0 || y >= CANVAS_SIZE || y<=0 )
    {
        background(0);
        console.log("game over !")
    }

}
function createFood()
{
    foodX = (round (random(0,CANVAS_SIZE)/GRID_SIZE) * GRID_SIZE + OFFSET)
    foodY = (round (random(0,CANVAS_SIZE)/GRID_SIZE) * GRID_SIZE + OFFSET)
}