//Crie aqui as variáveis dos personagens e cenário
var carlinhos, carlinhosImg;
var pocadeagua, pocadeaguaImg;
var chao, chaoImg;

function preload(){
  //Carregar imagens e sons
      carlinhosImg = loadImage("carlinhos.png");
      pocadeaguaImg = loadImage("pocadeagua.png");

  
  
  
}

function setup(){
  
  createCanvas(windowWidth,windowHeight);

  
  carlinhos = createSprite(150,height-200,20,20);
  carlinhos.addImage(carlinhosImg);
  carlinhos.scale = 0.5;

  pocadeagua = createSprite(width-100,350,20,20);
  pocadeagua.addImage(pocadeaguaImg);
  pocadeagua.scale = 0.08;
  
  chao = createSprite(width/2, height-50, width, 20)
 
}

function draw() {
  background("blue");
  textSize(15);
  text("jogo do Pietro", 50,30);

  if(keyDown("space")){
  carlinhos.velocityY = -10;

  }

  carlinhos.velocityY = carlinhos.velocityY + 0.08;
  
  carlinhos.collide(chao)
  drawSprites();
    
 if(pocadeagua.isTouching(carlinhos)){
      carlinhos.velocityY = 0;
    }
    if(invisibleBlockGroup.isTouching(ghost) || carlinhos.y > 600){
      carlinhos.destroy();
      gameState = "end"
    }
}

//a poça esta fora do lugar
//quero colocar o jogo no modo end quando a variavel carlinhos pisar na poça
//E como faz o reset quando perder