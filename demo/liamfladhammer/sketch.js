/*
  Music Radar
 */

var soundFile;
var amp;
var increment; //the amount the rotation will go up
var rotation; //current position

function preload() {
  soundFile = loadSound('../../music/gangnamstyle.mp3')
}

function setup() {
  c=createCanvas(windowWidth, windowHeight);
	fill(0);
  background(0,0,0);
  amp=new p5.Amplitude();
  colorMode(RGB);
  noStroke();
  increment=PI/64;
  rotation=0;
}

function draw() {
	var volume=1000*amp.getLevel();
  var rot=rotation;

  background(0,0,0,20);

  textSize(50); 
  text(volume, 10, 50);

  fill(255);
  //red
  fill(volume, 0, 0);
	arc(width/2, height/2, 2000, 2000, rot, rot+increment*2); 
  
  rot+=increment*128/6;
  //orange 
  fill(volume, volume/3, 0);
  arc(width/2, height/2, 2000, 2000, rot, rot+increment*2); 

  rot+=increment*128/6;
  //yellow
  fill(volume, 2*volume/3, 0);
  arc(width/2, height/2, 2000, 2000, rot, rot+increment*2);

  rot+=increment*128/6;
  //green
  fill(0, volume, 0);
  arc(width/2, height/2, 2000, 2000, rot, rot+increment*2); 

  rot+=increment*128/6;
  //blue
  fill(0, 0, volume);
  arc(width/2, height/2, 2000, 2000, rot, rot+increment*2);
	
  rot+=increment*128/6;
  //purple
  fill(3*volume/4, 0, volume);
  arc(width/2, height/2, 2000, 2000, rot, rot+increment*2);

  if(volume>200) //determines the dirrection it is spinning
    rotation+=increment;  
  else
    rotation-=increment;

	if(rotation==2*PI)
		rotation=0;
  s=0;
}

function keyPressed() {
  if (key == 'T') {
    if (soundFile.isPlaying() ) 
    	soundFile.pause();

  	else 
   	 	soundFile.play();
      fill(255);
      textSize(50);
      text("PLAY", 10, 50)
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0);
}