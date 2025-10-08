const GRID_SIZE = 20;
let headX = 300;
let headY = 300;

function setup()
{
    createCanvas(600,600);
    background(0);
}
function draw()
{
    fill(255)
    square(headX,headY,GRID_SIZE);

}