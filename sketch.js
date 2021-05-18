var canvas, bg; 
var cat, catImg, catImg2, catImg3;
var mouse,mouseImg2,mouseImg3,mouseImg4;

function preload() {
    //load the images here
bg = loadImage("images/garden.png");
catImg = loadAnimation("images/cat1.png");

catImg2 = loadAnimation("images/cat2.png", "images/cat3.png");

mouseImg2 = loadAnimation("images/mouse1.png");

mouseImg3 = loadAnimation("images/mouse3.png");




}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat = createSprite(870,600)
cat.addAnimation("cat", catImg);
cat.scale = 0.1;

mouse = createSprite(200,600)
mouse.addAnimation("mouse", mouseImg2)
mouse.scale = 0.2;



}

function draw() {

    background(bg);
    //catImg2;
if(cat.x - mouse.x <(cat.width - mouse.width)/2){
    cat.velocityX = 0;
    cat.addAnimation("cat", catImg1);
    cat.x = 300;
    cat.scale = 0.2;
    cat.changeAnimation("cat1",catImg2)
    mouse.addAnimation("mouse", mouseImg3);
    mouse.scale = 0.2 
    mouse.changeAnimation("mouse1", mouseImg3);
}
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){
if(keyCode == LEFT_ARROW){
    cat.velocityX = -5;
    cat.addAnimation("catRunning", catImg2);
    cat.changeAnimation("catRunning");

    mouse.addAnimation("mouseTeasing", mouseImg3);
    mouse.framDelay = 25; 
    mouse.changeAnimation("mouseTeasing");


}

  //For moving and changing animation write code here


}
