var database, form;
var playerCount,gameState;
var player, form;

function setup(){
  database = firebase.database();
  createCanvas(1000,700);
  
  form = new Form();
  player = new Player();
 

  
}

function draw(){
  form.display();
  
}