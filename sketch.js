var tomImgLay, tomRun, tomImgEnd;
var jerryImgCheese, jerryCheer, jerryImgEnd;
var tom,jerry,garden,gardenImg;

function preload() {
    //load the images here
    tomImgLay = loadAnimation("images/cat1.png");
    tomRun = loadAnimation("images/cat2.png", "images/cat3.png");
    jerryImgCheese = loadAnimation("images/mouse1.png");
    jerryCheer = loadAnimation("images/mouse2","images/mouse3");
    gardenImg = loadImage("images/garden.png");
}

function setup(){
    createCanvas(600,600);
    //create tom and jerry sprites here
    tom = createSprite(500,500,10,10);
    tom.scale = 0.1;
    jerry = createSprite(200,500,10,10);
    jerry.scale = 0.1
    garden = createSprite(300,300,10,10);
    garden.depth = 0;
    jerry.addAnimation("jerryCheese",jerryImgCheese);
    tom.addAnimation("tomLay",tomImgLay);
    garden.addImage("garden",gardenImg);
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();

}


function keyPressed(){

  //For moving and changing animation write code here
tom.addAnimation("tomRun",tomRun); 
tom.changeAnimation("tomRun"); 
tom.velocityX = -3
jerry.addAnimation("jerryCheer",jerryCheer);
jerry.changeAnimation("jerryCheer",jerryCheer)
jerry.depth = 45;
jerry.velocityX = 3
}
