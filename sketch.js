var snake,apple,snakeimg,appleimg;


function setup() {
  createCanvas(400,400);
  snake = createSprite(140,120, 50, 50);
  apple = createSprite(140,315, 50, 50);
  snakeimg = loadImage("snake.png");
  appleimg = loadImage("apple.png");
}

function draw() {
  background(167,217,62);  
  snake.addImage(snakeimg);
  snake.scale = 0.8;
  apple.addImage(appleimg);
  apple.scale = 0.1;
  if(keyDown(DOWN_ARROW) ){
    snake.velocityY = 2;
  }
  if(snake.collide(apple)){
    apple.destroy();
   // snake.velocityY = 0;
}
  drawSprites();
}