var SnakeArray = [];           //Stores snakes x, y, width, height in an array
var snakeCount = 0;            //Index for snake array

var increment = 0;             //Frame rate

var Food;                      //Food for snake

var switchKey = [];            //Stores key arrows clicked
var arrayMovesX = [];          //Stores X position
var arrayMovesY = [];          //Stores Y position
var gameState = 0;             //State of the game


function setup() {
  createCanvas(400,400);
  //createSprite(400, 200, 50, 50);

  //Creates the first snake part
  SnakeArray[snakeCount] =  new Snake();
  SnakeArray[snakeCount].x = 200;
  SnakeArray[snakeCount].y = 200;
  SnakeArray[snakeCount].width = 20;
  SnakeArray[snakeCount].height = 20;

  //Creates the Food at random places
  Food = new Snake();
  Food.x = round(random(0, 390) / 20) * 20;
  //console.log(food.x);
  Food.y = round(random(0, 390) / 20) * 20;
  Food.width = 20;
  Food.height = 20;
}

function draw() {
  background("#002546");  

  //rectangle();
  increment+=4;
  for(var i = 0; i <= snakeCount; i++){
    if(gameState === 0){
    move(i);
    }
    if(i === 0){
      fill("Orange");
    }
    else{
      fill("red");
    }
    console.log(SnakeArray[i]);

    SnakeArray[i].Display();
  }
  fill('blue');
  Food.Display();
 
  if(SnakeArray[0].x === Food.x && SnakeArray[0].y === Food.y ){
    if(keyCode === 37 || keyCode === 38 || keyCode === 39 || keyCode === 40){
      snakeCount = snakeCount + 1;
 
      console.log((arrayMovesX[(arrayMovesX.length - 1) - (SnakeArray.length)]));
      SnakeArray[snakeCount] = new Snake();
      
   
      SnakeArray[snakeCount].x = arrayMovesX[(arrayMovesX.length) - (SnakeArray.length)]; 
      SnakeArray[snakeCount].y = arrayMovesY[(arrayMovesY.length) - (SnakeArray.length)]; 
      SnakeArray[snakeCount].width = 20;
      SnakeArray[snakeCount].height = 20;

      Food.x = round(random(0, 390) / 20) * 20;
      Food.y = round(random(0, 390) / 20) * 20;
     
    }
  }

  for(var j = 1; j < SnakeArray.length; j++){
    if(SnakeArray[0].x === SnakeArray[j].x && 
      SnakeArray[0].y === SnakeArray[j].y){
      text("Stop", 200, 200);
      console.log("Stop");
      gameState = 1;
    }
  }
  if(SnakeArray[0].x < 0 || SnakeArray[0].x > 400 || 
  SnakeArray[0].y < 0 ||SnakeArray[0].y > 400){
    text("Stop", 200, 200);
    console.log("Stop");
    gameState = 1;
  }
  

  drawSprites();
}


function move(i){
  var speedOfSnake = 20;
 
  if(keyCode === 37 && increment % 20 == 0){

    console.log("KeyCode");
    if(switchKey.length >= 1 && keyCode !== switchKey[switchKey.length - 1] && switchKey[switchKey.length - 1] !== 39){
      switchKey.push(keyCode);
    }
    
    if(i === 0 && SnakeArray.length === 1){
      SnakeArray[0].x = SnakeArray[0].x - speedOfSnake;
      SnakeArray[0].y = SnakeArray[0].y;
      arrayMovesX.push(SnakeArray[0].x);
      arrayMovesY.push(SnakeArray[0].y);
      
    }

    if(SnakeArray.length > 1 && switchKey[switchKey.length - 1] !== 39) {
      if(i === 0){
        SnakeArray[0].x = SnakeArray[0].x - speedOfSnake;
        SnakeArray[0].y = SnakeArray[0].y;
        arrayMovesX.push(SnakeArray[0].x);
        arrayMovesY.push(SnakeArray[0].y);
        
      }
      else if(i !== 0){
        SnakeArray[i].x = arrayMovesX[arrayMovesX.length - (i+1)];
        SnakeArray[i].y = arrayMovesY[arrayMovesY.length - (i+1)];
 
      }

      if(SnakeArray.length === (i+1) && i > 0){
        //console.log("Shift");
        arrayMovesX.shift();
        arrayMovesY.shift();
      }
    }

    
  }

  else if(keyCode === 38 && increment % 20 == 0){
       
 
    if(switchKey.length >= 1 && keyCode !== switchKey[switchKey.length - 1] && switchKey[switchKey.length - 1] !== 40){
      switchKey.push(keyCode);
    
    }

    if(i === 0 && SnakeArray.length === 1){
      SnakeArray[0].x = SnakeArray[0].x;
      SnakeArray[0].y = SnakeArray[0].y - speedOfSnake;
      arrayMovesX.push(SnakeArray[0].x);
      arrayMovesY.push(SnakeArray[0].y);
    }

    if(SnakeArray.length > 1 && switchKey[switchKey.length - 1] !== 40) {
      if(i === 0){
        SnakeArray[0].x = SnakeArray[0].x;
        SnakeArray[0].y = SnakeArray[0].y - speedOfSnake;
        arrayMovesX.push(SnakeArray[0].x);
        arrayMovesY.push(SnakeArray[0].y);
      }
      else if(i !== 0){
        SnakeArray[i].x = arrayMovesX[arrayMovesX.length - (i+1)];
        SnakeArray[i].y = arrayMovesY[arrayMovesY.length - (i+1)];
      }
      if(SnakeArray.length === (i+1) && i > 0){
        arrayMovesX.shift();
        arrayMovesY.shift();
      }
    }

  }
 
  else if(keyCode === 39 && increment % 20 == 0){
 
    if(switchKey.length >= 1 && keyCode !== switchKey[switchKey.length - 1] && switchKey[switchKey.length - 1] !== 37){
      switchKey.push(keyCode);
    }

    if(i === 0 && SnakeArray.length === 1){
      SnakeArray[0].x = SnakeArray[0].x + speedOfSnake;
      SnakeArray[0].y = SnakeArray[0].y;
      arrayMovesX.push(SnakeArray[0].x);
      arrayMovesY.push(SnakeArray[0].y);
    }

    if(SnakeArray.length > 1 && switchKey[switchKey.length - 1] !== 37) {
      if(i === 0){
        SnakeArray[0].x = SnakeArray[0].x + speedOfSnake;
        SnakeArray[0].y = SnakeArray[0].y;
        arrayMovesX.push(SnakeArray[0].x);
        arrayMovesY.push(SnakeArray[0].y);
      }
      else if(i !== 0){
        SnakeArray[i].x = arrayMovesX[arrayMovesX.length - (i+1)];
        SnakeArray[i].y = arrayMovesY[arrayMovesY.length - (i+1)];
      }
      if(SnakeArray.length === (i+1) && i > 0){
        arrayMovesX.shift();
        arrayMovesY.shift();
      }
    }
    
  }
      
  else if(keyCode == 40 && increment % 20 == 0){

    if(switchKey.length < 1 && switchKey[switchKey.length - 1] !== 38){
      switchKey.push(keyCode);
    }
    else if(switchKey.length >= 1 && keyCode !== switchKey[switchKey.length - 1] && switchKey[switchKey.length - 1] !== 38){
      switchKey.push(keyCode);
    }

    if(i === 0 && SnakeArray.length === 1){
      SnakeArray[0].x = SnakeArray[0].x;
      SnakeArray[0].y = SnakeArray[0].y + speedOfSnake;
      arrayMovesX.push(SnakeArray[0].x);
      arrayMovesY.push(SnakeArray[0].y);
    }

    if(SnakeArray.length > 1 && switchKey[switchKey.length - 1] !== 38) {
      if(i === 0){
        SnakeArray[0].x = SnakeArray[0].x;
        SnakeArray[0].y = SnakeArray[0].y + speedOfSnake;
        arrayMovesX.push(SnakeArray[0].x);
        arrayMovesY.push(SnakeArray[0].y);
      }
      if(i !== 0){
        SnakeArray[i].x = arrayMovesX[arrayMovesX.length - (i+1)];
        SnakeArray[i].y = arrayMovesY[arrayMovesY.length - (i+1)];
      }
      if(SnakeArray.length === (i+1) && i > 0){
        arrayMovesX.shift();
        arrayMovesY.shift();
      }
    }
    
  }

  else{
    SnakeArray[0].x = SnakeArray[0].x;
  }
}
