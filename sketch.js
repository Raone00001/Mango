
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ConnecterForce = 500;

var engine, world;

var boy;
var stone;

var slingshot;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9;
var tree;
var ground;

var boyIMG;

function setup() {
	var canvas = createCanvas(1200, 700);
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(700,height,12000,15);
	
	stone = new Stone(150,610);

	slingshot = new Connecter(stone.body,{x:125, y:615});

	mango1 = new Mango(1000,400,1);
	mango2 = new Mango(1040,350,1);
	mango3 = new Mango(930,390,1);
	mango4 = new Mango(970,450,1);
	mango5 = new Mango(990,340,1);
	mango6 = new Mango(920,450,1);
	mango7 = new Mango(1095,380,1);
	mango8 = new Mango(1050,440,1);
	mango9 = new Mango(1115,430,1);

	Engine.run(engine);
  
}

function draw() {
  background("lightblue");
	  Engine.update(engine);
		
	  	fill("black")
	  	textFont("Cutive");
		textSize(20);
		text("Drag and Release The Stone To Throw It! In Order To Play Again, Press Space!!",290 ,200);
		rectMode(CENTER);

		ground.display();

		slingshot.display();

		mango1.display();
		mango2.display();
		mango3.display();
		mango4.display();
		mango5.display();
		mango6.display();
		mango7.display();
		mango8.display();
		mango9.display();

		stone.display();

		//detectCollision(stone,mango1);
		//detectCollision(stone,mango2);
		//detectCollision(stone,mango3);
		//detectCollision(stone,mango4);
		//detectCollision(stone,mango5);
		//detectCollision(stone,mango6);
		//detectCollision(stone,mango7);
		///detectCollision(stone,mango8);
		//detectCollision(stone,mango9);

		//detectCollision(stone,box);

		if (hasCollided(stone, mango1)){

			Matter.Body.setStatic(mango1.body,false);
			

		}

		if (hasCollided(stone, mango2)){

			Matter.Body.setStatic(mango2.body,false);
			

		}
		if (hasCollided(stone, mango3)){

			Matter.Body.setStatic(mango3.body,false);
			

		}
		if (hasCollided(stone, mango4)){

			Matter.Body.setStatic(mango4.body,false);
			

		}
		if (hasCollided(stone, mango5)){

			Matter.Body.setStatic(mango5.body,false);
			

		}
		if (hasCollided(stone, mango6)){

			Matter.Body.setStatic(mango6.body,false);
			

		}
		if (hasCollided(stone, mango7)){

			Matter.Body.setStatic(mango7.body,false);
			

		}
		if (hasCollided(stone, mango8)){

			Matter.Body.setStatic(mango8.body,false);
			

		}
		if (hasCollided(stone, mango9)){

			Matter.Body.setStatic(mango9.body,false);
			

		}

}

function mouseDragged(){

    Matter.Body.setPosition(stone.body,{x:mouseX, y:mouseY});

}

function mouseReleased(){

    slingshot.fly();

}

//function detectCollision(lstone,lbox){

//	mangoB = lbox.body.position;
	//stoneB = lstone.body.position;

	//var distance = dist(stoneB.x, stoneB.y, mangoB.x, mangoB.y);

		//if (distance <= lbox.x,lbox.y + lstone.x,lstone.y){

		//	Matter.Body.setStatic(box.body,false);

		//}

//}

function hasCollided(lstone,lMango){

	stoneB = lstone.body.position;
	mangoB = lMango.body.position;
  
	if (stoneB.x + stoneB.y >= mangoB.x + mangoB.y){
  
		Matter.Body.setStatic(lMango.body,false);
  
	}

}

function keyPressed(){

	if (keyCode === 32){

		Matter.Body.setPosition(stone.body, {x:125, y:610})
		slingshot.attach(stone.body);

		Matter.Body.setPosition(mango1.body, {x:1000, y:400})
		Matter.Body.setPosition(mango2.body, {x:1040, y:350})
		Matter.Body.setPosition(mango3.body, {x:930, y:390})
		Matter.Body.setPosition(mango4.body, {x:970, y:450})
		Matter.Body.setPosition(mango5.body, {x:990, y:340})
		Matter.Body.setPosition(mango6.body, {x:920, y:450})
		Matter.Body.setPosition(mango7.body, {x:1095, y:380})
		Matter.Body.setPosition(mango8.body, {x:1050, y:440})
		Matter.Body.setPosition(mango9.body, {x:1115, y:430})


	}

}