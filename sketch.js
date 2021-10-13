var bgImage,craft1,craft2,craft3,craft4;
var iss,spaceraft,dock;
 var hasDocked = false;

function preload(){
  bg = loadImage("spacebg.jpg");
  issImage = loadImage("iss.png");
  craft1 = loadImage("spacecraft1.png");
  craft2 = loadImage("spacecraft2.png");
  craft3 = loadImage("spacecraft3.png")
  craft4 = loadImage("spacecraft4.png")
  dck = loadImage("iss2.png");
}

function setup() {
  createCanvas(1200,600);
  iss = createSprite(380, 280, 50, 50);
  iss.addImage(issImage);
  iss.scale = 1;

  dock = createSprite(310,302,50,50);
  dock.addImage(dck);
  

  spaceraft = createSprite(320,500,50,50);
  spaceraft.addImage(craft1);
  spaceraft.scale = 0.2;
 
}

function draw() {
  background(bg);  

  if(!hasDocked){

    if(spaceraft.isTouching(dock)){
      textSize(20);
      text("DOCKING SUCCESFULL",350,500);
      spacecraft.pause();
    }
    
    if(keyIsDown(RIGHT_ARROW)){
      spaceraft.x+=1;
      spaceraft.addImage(craft4);
    }

    if(keyIsDown(LEFT_ARROW)){
      spaceraft.x-=1;
      spaceraft.addImage(craft3);
    }

    if(keyIsDown(DOWN_ARROW)){
      spaceraft.addImage(craft2);
    }

    if(keyIsDown(UP_ARROW)){
      spaceraft.y-=1;
      spaceraft.addImage(craft2);
    }
    }


  drawSprites();
}