const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles = [];
var particle;
var plinkos = [];
var divisions = [];
var divisionHeight = 300;
var gameState = "start";
var count = 0;
var score = 0;

function setup() {
  createCanvas(480,800);

  engine = Engine.create();
	world = engine.world;

  ground = new Ground(240,790,480,20);

 for (var j = 40; j <=width; j=j+50)
  {
  
      plinkos.push(new Plinko(j,75,5));
  }
  
  for (var j = 15; j <=width-10; j=j+50)
    {
  
      plinkos.push(new Plinko(j,125,5));
    }
   
    for (var k = 0; k <= width; k = k + 80){
      divisions.push(new Divisions(k, height - divisionHeight/2, 10, divisionHeight));
    }
  Engine.run(engine);
}

function draw() {
  background("black");  
  //drawSprites();
  text("Score : "+score,20,40);
  textSize(35)
  text(" 500 ", 5, 550);
  text(" 500 ", 80, 550);
  text(" 100 ", 160, 550);
  //text(" 100 ", 200, 550);
  text(" 100 ", 240, 550);
  text(" 200 ", 320, 550);
  text(" 200 ", 400, 550);

  if(gameState === "end"){
    textSize(30)
    text("Game Over",240,400)
  }


for(var j = 0; j < divisions.length; j++){

  divisions[j].display();
}
for(var k = 0; k < plinkos.length; k++){

  plinkos[k].display();
}


  ground.display()
  
  
  /* if(frameCount%60===0){
        particles.push(new Particle(random(25,350), 10,10));
    
  }
  for(var k = 0; k < particles.length; k++){

    particles[k].display();
  }*/

  if(particle!=null)
  {
     particle.display();
      
      if (particle.body.position.y>760)
      {
            if (particle.body.position.x < 160) 
            {
                score=score+500;      
                particle=null;
                if ( count>= 5) gameState ="end";                          
            }


            else if (particle.body.position.x < 320 && particle.body.position.x > 161 ) 
            {
                  score = score + 100;
                  particle=null;
                  if ( count>= 5) gameState ="end";

            }
            else if (particle.body.position.x < 480 && particle.body.position.x > 321 )
            {
                  score = score + 200;
                  particle=null;
                  if ( count>= 5)  gameState ="end";

            }      
            
      }
    }

  
}

function mousePressed()
{
  if(gameState!=="end")
{
  count++;
  particle=new Particle(mouseX, 10, 10, 10);
}


}
