  
  var ground,monkey,monkey_running,bananagroup,banana,bananaimage,obstacleimage,stone,obstacle_group,stone,jungle,backimage,score,Text;

function preload(){
  backimage=loadImage("jungle.jpg");
  
  monkey_running=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
 
  
  bananaimage=loadImage("banana.png");
  
  obstacleimage=loadImage("stone.png");
  
}

function setup() {
  createCanvas(800,400);
  
  score=0;
  
  jungle=createSprite(400,20,800,400);
  jungle.addImage("jungle1",backimage);
  jungle.x=jungle.width/2;
  jungle.scale=1.5;
  jungle.velocityX=-4;
  
  ground=createSprite(400,300,1000,20);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  ground.visible=false;
  
  monkey = createSprite(100,250,10,10);
  monkey.addAnimation("monkeyrunning",monkey_running);
  monkey.scale=0.1; 
  
  bananagroup =  new Group();
  
  obstacle_group = new Group();
  
}

function draw() {
  background(220);
  console.log(score);
  
   if(ground.x<0) {
    ground.x=ground.width/2;
  }
  
  if(jungle.x<300){
  jungle.x=jungle.width/2;
  }
  
  if(keyDown("space") && monkey.y>259){
  monkey.velocityY=-12;  
  }
  
  
  monkey.velocityY=monkey.velocityY+0.4;
  monkey.collide(ground);
    
  //stroke=("white");
  

  
  if(bananagroup.isTouching(monkey)){
     bananagroup.destroyEach();
     score=score+1;
     }
   if(obstacle_group.isTouching(monkey)){
     monkey.scale= 0.08
     score=score-2;
     obstacle_group.destroyEach();
     }
  
  
 drawSprites();
  
  fill("white");
  textSize(20);
  text("score"+ score,400,50);
  
  
  
  spawnbanana();
  
  obstacle();
  
   switch(score){
    
    case 10:monkey.scale=0.14;
    break;
    case 20:monkey.scale=0.16;
    break;
    case 30:monkey.scale=0.18;
    break;
    case 40:monkey.scale=0.2;
    break;
    case 50:monkey.scale=0.22;
    break;
    case 60:monkey.scale=0.24;
    break;
    case 69:bananagroup.setVelocityXEach=-8;
    break;
    case 70:monkey.scale=0.26;
    break;
    case 71:monkey.scale=0.32;
    break;
    case 72:obstacle_group.setVelocityXEach=-10;
    break;
    case 80:monkey.scale=0.28;
    break;
    case 90:monkey.scale=0.3;
    break;
    case 100:monkey.scale=0.32;
    break;
    case 120:monkey.scale=0.34;
    break;
    case 140:monkey.scale=0.35;
    break;
    case 160:monkey.scale=0.36;
    break;
    case 180:monkey.scale=0.37;
    break;
    case 200:monkey.scale=0.38;
    break;
    case 220:monkey.scale=0.39;
    break;
    case 240:monkey.scale=0.40;
    break;
    case 260:monkey.scale=0.41;
    break;
    case 280:monkey.scale=0.42;
    break;
    case 300:monkey.scale=0.43;
    break;
    case 320:monkey.scale=0.44;
    break;
    case 330:monkey.scale=0.45;
    break;
    default:break;
  }
 
  
  Text.depth=jungle.depth+1;
  ground.visible=false;
  monkey.depth=ground.depth;
  
}

function spawnbanana (){
  
    if(frameCount%120===0){
      var banana = createSprite(1200,random(50,200),10,10);
      banana.velocityX=-6;
      banana.lifetime=210;
      banana.addImage("banana1",bananaimage);
      banana.scale=0.05;
      bananagroup.add(banana);
      banana.depth=jungle.depth+1;
    }
  
}

function obstacle (){
  
  if(frameCount%140===0){
    var stone = createSprite(1200,270,10,10);
    stone.addImage("stone1",obstacleimage);
    stone.velocityX=-8;
    stone.scale=0.2;
    stone.lifetime=210;
    obstacle_group.add(stone);
  }
  
}
  