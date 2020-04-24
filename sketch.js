var snake;
var size = 20;
var w;
var h;
var count = 0;
function setup() {
  createCanvas(400,400);
  w = floor(width/size);
  h = floor(height/size);
  frameRate(7);
  snake = new Snake();
  foodLocation()
}

function foodLocation(){
   var x = floor(random(w));
   var y = floor(random(h));
   food = createVector(x,y);

}

function keyPressed(){
      if(keyCode === LEFT_ARROW ){
         snake.setDir(-1,0);
      }else if(keyCode === RIGHT_ARROW){
         snake.setDir(1,0); 
      }else if(keyCode === UP_ARROW){
         snake.setDir(0,-1); 
      }else if(keyCode === DOWN_ARROW){
        snake.setDir(0,1);
      }
}

function draw() {

  scale(size);
  
   background(220);  
  if(snake.eat(food)){
    foodLocation()
    count = count + 1;
  }
  snake.move();
  
  snake.display();

  if(snake.gameOver()){
   background(255,0,0);
   noLoop();
  }

 

  fill(255,0,0);
  noStroke();
  rect(food.x,food.y,1,1);

textSize(1);
fill(0)
text("SCORE  : "+count,7,1)

}
