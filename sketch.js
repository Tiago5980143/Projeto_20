var gato, imgCat1, imgCat2, imgCat4;
var imgGarden;
var rato ,imgMouse1, imgMouse2 ,imgMouse4;

function preload() {
    imgCat1 = loadImage("images/cat1.png");
    imgCat2 = loadAnimation("images/cat2.png","images/cat3.png");
    imgCat4 = loadImage ("images/cat4.png");

    imgMouse1 = loadImage("images/Mouse1.png");
    imgMouse2 = loadAnimation("images/Mouse2.png","images/mouse3.png");
    imgMouse4 = loadImage("images/Mouse4.png");

    imgGarden = loadImage("images/garden.png");
}
function setup(){
    createCanvas(1000,800);
    gato = createSprite(800,600);
    gato.addImage("sleeping",imgCat1);
    gato.scale = 0.2;

    rato = createSprite(200,600);
    rato.addImage("waiting",imgMouse1);
    rato.scale = 0.15;
}

function draw() {

    background(imgGarden);

    if (gato.x - rato.x <(gato.width - rato.width)/2){
        gato.velocityX = 0;
        gato.addImage ("lastCat",imgCat4);
        gato.scale = 0.2;
        gato.x = 285;
        gato.changeAnimation("lastCat");

        rato.addImage ("lastMouse",imgMouse4);
        rato.scale = 0.15;
        rato.changeAnimation("lastMouse");
        
    }

    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){
        gato.velocityX = -5;
        gato.addAnimation("running",imgCat2);
        gato.changeAnimation("running");

        rato.addAnimation("runMouse",imgMouse2);
        rato.frameDelay = 25;
        rato.changeAnimation("runMouse");
    }
}
