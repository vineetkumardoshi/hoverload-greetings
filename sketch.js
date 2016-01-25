var can_width = window.innerWidth / 1.1;
var can_height = window.innerHeight / 1.5;
var toggle = 1;
var col_counter = 2;
var img;
var URL = window.location.href;
var URL_CLEAN = URL.match(/#.*/);
console.log(URL_CLEAN);
if(URL_CLEAN === null){
  URL_CLEAN = "#SGVsbG8gVXNlciUyM1VSTCBsaW5rIGlzIGluY29ycmVjdCUyM0FkbWlu";
}
URL_CLEAN = URL_CLEAN.toString().substring(1);
var URL_DECODE = window.atob(URL_CLEAN);
var URL_SPLITLIST = URL_DECODE.split("%23");
var to = URL_SPLITLIST[0];
var message = URL_SPLITLIST[1];
var from = URL_SPLITLIST[2];
var to_FONT;
var message_FONT;
var from_FONT;
var bg_color;
function preload(){
  to_FONT = loadFont("Quicksand-Bold.otf");
  message_FONT = loadFont("Quicksand-Regular.otf");
  from_FONT = loadFont("LearningCurve_OT.otf");
}
function setup() {
  canvas = createCanvas(can_width, can_height);
  bg_color = color( 0, 0, 128);
  background( bg_color);
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
    if (touchY < can_height/3) {
      fill(255,map(touchY, 0, can_height/3, 153,255),map(touchY, 0, can_height/3, 51,255));
    }
    else if (touchY > can_height/3*2){
      fill(map(touchY, can_height/3*2, can_height, 255,0),map(touchY, can_height/3*2, can_height, 255, 100),map(touchY, can_height/3*2, can_height, 255, 8));
    }
    ellipse(touchX+random(-10,10), touchY+random(-10,10), can_height/10, can_height/10);
    ellipse(touchX+random(-20,10), touchY+random(-20,10), can_height/10, can_height/10);
    ellipse(touchX+random(-10,20), touchY+random(-10,20), can_height/10, can_height/10);
    ellipse(touchX+random(-30,10), touchY+random(-30,10), can_height/10, can_height/10);
    ellipse(touchX+random(-10,30), touchY+random(-10,30), can_height/10, can_height/10);
}

function draw(){
  
  if(toggle%2 == 0){
    
    noStroke();
    if (mouseY < can_height/3) {
      fill(255,map(mouseY, 0, can_height/3, 153,255),map(mouseY, 0, can_height/3, 51,255));
    }
    else if (mouseY > can_height/3*2){
      fill(map(mouseY, can_height/3*2, can_height, 255,0),map(mouseY, can_height/3*2, can_height, 255, 100),map(mouseY, can_height/3*2, can_height, 255, 8));
    }
    ellipse(mouseX+random(-10,10), mouseY+random(-10,10), can_height/10, can_height/10);
    ellipse(mouseX+random(-20,10), mouseY+random(-20,10), can_height/10, can_height/10);
    ellipse(mouseX+random(-10,20), mouseY+random(-10,20), can_height/10, can_height/10);
    ellipse(mouseX+random(-30,10), mouseY+random(-30,10), can_height/10, can_height/10);
    ellipse(mouseX+random(-10,30), mouseY+random(-10,30), can_height/10, can_height/10);
    cursor(CROSS);
  } else {
    cursor(HAND);
    
  }

  fill(bg_color);
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
  textSize(can_height/10);
  textFont(from_FONT);
  textAlign(RIGHT, TOP);
  text("- "+from, 0,can_height*0.9-20,can_width-20,can_height);
}

function windowResized() {
  can_width = windowWidth/1.1;
  can_height = windowHeight/1.5;
  resizeCanvas(can_width, can_height);
  background(bg_color);
}