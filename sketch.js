var dog,HappyDog,foodS,foodStock;
var database;
var dog_image1 , dog_image2;

function preload()
{
  dog_image1 = loadImage("dogImg.png");
  HappyDog = loadImage("dogImg1.png");

}

function setup() {
	createCanvas(500,500);
  dog = createSprite(250,250,30,30);
  foodStock = database.ref("Food");
  foodStock.on("value",readStock);

}


function draw() {  
 background(46,139,87);

   if(keyWentDown("UP_ARROW")){
     writeStock(foodS);
     dog.addImage(HappyDog);
   }

  drawSprites();
  text("Food remaining",50,250);
  textSize(20);
  fill ("white");

}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
    if(x <= 0){
      x=0;
    }else{
      x = x-1;
    }
  database.ref('/').update({
    Food:x
  })
}



