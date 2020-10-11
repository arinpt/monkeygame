
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600, 400)
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale=0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x)

  
}


function draw() {
  
  background(1000);
  edges = createEdgeSprites();
  drawSprites();
  monkey.collide(edges[2]);
  monkey.collide(ground);
  if(monkey.y>300){
    if(keyDown("space")){
      monkey.velocityY = -15;  
  }
  }
  if(ground.x<100){
    ground.x=ground.width/2;
    
  }
  ground.velocityX = -10;
    monkey.velocityY = monkey.velocityY + 0.8
  var survivalTime=0;
  stroke("white");
  textSize=(20);
  fill("white");
  text("Score: "+ score, 500, 50);
  
  stroke("black");
  textSize=(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  
  text("Survival Time: "+ survivalTime, 100,50);
  food();
  obstacle();
}

function food() {
  if (frameCount % 80 === 0){
    var banana = createSprite(600, bananay);
    banana.scale=0.1
    var bananay = banana.y = Math.round(random(120, 200));
    banana.addImage(bananaImage);
    banana.velocityX = -4
  }
}

function obstacle(){
  if (frameCount % 60 === 0){
    var obstacle = createSprite(400, 328, 10, 40);
    obstacle.addImage(obstacleImage)
    obstacle.velocityX = -6;
    obstacle.lifetime = 400;
    obstacle.scale = 0.1
  }
}



