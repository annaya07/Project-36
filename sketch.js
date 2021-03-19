var dog,sadDog,happyDog;
var foodObj;


function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  createCanvas(1000,400);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  Feed=createButton("Feed The Dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);

  addFood.createButton("Add Food");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);
}

function draw() {
  background(46,139,87);
  fill(255,255,254);
  textSize(15);

  if(fastFed>12){
    text("Last Feed :"+ lastFeed%12 + "PM",350,30);
  }else if(lastFeed===0){
   text ("Last Feed : 12 AM",350,30);
  }else{
    text("Last Feed : "+ lastFed + "AM" , 350,30);
  }
  drawSprites();
}




//function update food stock
function feedDog(){
  dog.addIamge(happyDog);
  
  if (foodObj.getFoodstock()<0){
    foodObj.updateFoodStock(foodObj.getFoodstock()*0);
   }
  else{
    foodObj.updateFoodStock(foodObj.getFoodstock()-1);
   }
  }

//function to update food stock and last fed time
function feedDog(){
  dog.addIamge(happyDog);

  foodObj.updateFoodStock(foodObj.getFoodstock()-1);
  database.ref('/').update({
    Food:foodObj.getFoodstock(),
    FeedTime:head()
  })
}

//function to add food in stock
function addfood(){
  foodS++;
  database.ref ('/').update ({
  Food=foodS
  })
}