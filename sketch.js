var bg,bgImg;
var player, shooterImg, shooter_shooting;
var bullet
var zombie


function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")

  bgImg = loadImage("assets/bg.jpeg")

  bulletImg = loadImage("bullet.png")

  zombieImg = loadImage("assets/zombie.png")
}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1
  

//creating the player sprite
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.3
   player.debug = true
   player.setCollider("rectangle",0,0,300,300)


   Zombies = new Group();





}

function draw() {
  background(0); 

  spawnZombies();

  


  

  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}


//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
 
  player.addImage(shooter_shooting)

  bullet = createSprite(player.x+40,player.y)
  bullet.addImage(bulletImg)
  bullet.scale = 0.05
  bullet.velocityX = 3

  
 
}

if(bullet.isTouching(Zombies)) {
  Zombies.destroyEach();
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  player.addImage(shooterImg)
}

drawSprites();

}

function spawnZombies() {
  if(World.frameCount % 200 == 0) {
    zombie = createSprite(width,Math.round(random(200,height-100)))
    zombie.addImage(zombieImg)
    zombie.velocityX = -2
    zombie.scale = 0.2

    Zombies.add(zombie)



    
  }


}
