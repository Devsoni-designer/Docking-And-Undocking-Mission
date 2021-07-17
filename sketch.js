var bg;
var issImg, spacecrt1, spacecrt2, spacecrt3, spacecrt4;
var spacecraft, iss;
var hasDocked=false;


function preload()
{

bg = loadImage("spacebg.jpg");
issImg = loadImage("iss.png");
spacecrt1 = loadImage("spacecraft1.png");
spacecrt2 = loadImage("spacecraft2.png");
spacecrt3 = loadImage("spacecraft3.png");
spacecrt4 = loadImage("spacecraft4.png");

}



function setup() 
{

  createCanvas(1400,700);

  spacecraft = createSprite(280, 240, 50, 50);
  spacecraft.addImage(spacecrt1);
  spacecraft.scale = 0.3;

  iss = createSprite(330, 130);
  iss.addImage(issImg)
  iss.scale = 0.9

}

function draw() 
{

  background(bg);  

 //console.log(spacecraft.x)

  if(!hasDocked)
  { 
    spacecraft.x = spacecraft.x + random(-1,1);
  }

  if(keyDown("RIGHT_ARROW"))
  {

      spacecraft.x = spacecraft.x+1;
      spacecraft.addImage(spacecrt3)

  }

  if(keyDown("LEFT_ARROW"))
  {

      spacecraft.x = spacecraft.x-1;
      spacecraft.addImage(spacecrt4)

  }

  if(keyDown("UP_ARROW"))
  {

      spacecraft.y = spacecraft.y-1;
      spacecraft.addImage(spacecrt2)

  }

  if(keyDown("DOWN_ARROW"))
  {

      spacecraft.y = spacecraft.y+1
  }


  if(spacecraft.y <= (iss.y+1100) && spacecraft.x <= (iss.x-60)){ 
    hasDocked = true; 
    textSize(25); 
    fill("white")  
    text("Yay!!Docking Successful!", 600, 300);
  }



  drawSprites();

}