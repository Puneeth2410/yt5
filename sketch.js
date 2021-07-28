function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  
  ball = new Balls(400, 200, 50, 50);
  blower = new Blower(250, 100, 50, 50);
  blowermouth = new blowermouth(250,150,50,50);

  button = createButton("Click to Blow");
  button.position(width /2, height - 100);
  button.class("blowButton");
  button.mousePressed(blow);

}

function draw() {
  background(255,255,255); 
  ball.show();
  blower.show();
  blowermouth.show();
  
  drawSprites();


}
function blow() {
  Matter.Body.applyForce(ball.body, { x: 0, y: 0}, {x:0, y: 0.05});
}