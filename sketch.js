var can_width = window.innerWidth / 1.1;
var can_height = window.innerHeight / 1.5;
var toggle = 1;
var col_counter = 2;
var img;
var to = "Hello Sir"
var message = "I'm an Indian, a proud Indian. @AirliftFilm is our attempt to bring to life India's most heroic mission -> http://www.youtube.com/v watch?v=lty1S8… @Beingind";
var from = "Vineet Doshi"
var to_FONT;
var message_FONT;
var from_FONT;

function preload(){
  to_FONT = loadFont("Quicksand-Bold.otf");
  message_FONT = loadFont("Quicksand-Regular.otf");
  from_FONT = loadFont("LearningCurve_OT.otf");
}
function setup() {
  canvas = createCanvas(can_width, can_height);
  background(255);
}

function mousePressed() {
  if (mouseX < 0 || mouseX > can_width || mouseY < 0 || mouseY > can_height){
    //pass
  } else {
    toggle++;
    toggle = toggle%2;

  }
}

function touchMoved(){
    noStroke();
    fill(map(touchX, 0, can_width, 150, 200),0,map(touchY, 0, can_height, 150, 255));
    ellipse(touchX, touchY, can_height/3, can_height/3);
}

function draw(){
  
  if(toggle%2 == 0){
    
    noStroke();
    
    fill(map(mouseX, 0, can_width, 150, 200),0,map(mouseY, 0, can_height, 150, 255));
    ellipse(mouseX, mouseY, can_height/3, can_height/3);
    cursor(CROSS);
  } else {
    cursor(HAND);
    
  }

  fill(255)
  //To
  textSize(can_height/10);
  textFont(to_FONT);
  textAlign(LEFT, BOTTOM);
  text(to, 20,0,can_width,can_height*0.2);
  //Message
  textSize(map(message.length, 1, 140, (can_height+can_width)/25, (can_height+can_width)/40));
  textFont(message_FONT);
  textAlign(CENTER, CENTER);
  text(message, 10,can_height*0.2,can_width-20,can_height*0.6);
  //From
  textSize(can_height/12);
  textFont(from_FONT);
  textAlign(RIGHT, TOP);
  text("- "+from, 0,can_height*0.9-20,can_width-20,can_height);
}

function windowResized() {
  can_width = windowWidth/1.1;
  can_height = windowHeight/1.5;
  resizeCanvas(can_width, can_height);
  background(255);
}