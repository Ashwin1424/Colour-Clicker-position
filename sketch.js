var red_button, buttonGroup
var redImg, blueImg, yellowImg, greenImg, pinkImg, purpleImg, greyImg, aquaImg;
var customCursor, customImg
var bgImg


function preload() {
    redImg = loadImage("./assets/red_square.png");
    blueImg = loadImage("./assets/blue_square.png");
    yellowImg = loadImage("./assets/yellow_square.png");
    greenImg = loadImage("./assets/green_square.png");
    pinkImg = loadImage("./assets/pink_square.png");
    purpleImg = loadImage("./assets/purple_square.png");
    greyImg = loadImage("./assets/grey_square.png");
    aquaImg = loadImage("./assets/aqua_square.png");
    
    customImg = loadImage("./assets/cursor.png");
    bgImg = loadImage("./assets/background.png")
}

function setup() {
    createCanvas(windowWidth, windowHeight);

    buttonGroup = new Group();
}

function draw() {

    background(bgImg, windowWidth/2, windowHeight/2);
    
    spawnColours();
    drawSprites();
}

    function spawnColours() {
            red_button = createSprite(1400, 673);
            var rand = Math.round(random(1,8))
            var xPosition = (130, 230, 330, 425, 525, 620, 720, 815, 915, 1010, 1110, 1205, 1303, 1400)
            var yPosition = (30, 110, 190, 270, 351, 431, 512, 592, 673)
            red_button.x = random(xPosition);
            red_button.y = random(yPosition)
            switch(rand) {
                case 1: red_button.addImage(redImg);
                    break;
                case 2: red_button.addImage(blueImg);
                    break;
                case 3: red_button.addImage(greenImg);
                    break;
                case 4: red_button.addImage(yellowImg);
                    break;
                case 5: red_button.addImage(pinkImg);
                    break;
                case 6: red_button.addImage(greyImg);
                    break;
                case 7: red_button.addImage(aquaImg);
                    break;
                case 8: red_button.addImage(blueImg);
                    break;
                default: break;
          }
          red_button.scale = 0.4
          buttonGroup.add(red_button);
        }