
"use strict"; 

function MotorsScene() {

	Scene.call(this); 

	var wheelSize = windowWidth*.29;
  
	///// SETUP ALL ACTORS HERE /////
	this.bgBorder = new BackgroundBorder();
	this.addActor(this.bgBorder);
  
	this.homeButton = new HomeButton(this.homeAction.bind(this));
	this.addActor(this.homeButton);

	this.title = new Label(windowWidth/2, titleYPos, "Motor Control", {size:50, leading:50});
	this.addActor(this.title);
  
	this.frontDiscWheel = new Wheel(windowWidth*.3-wheelSize/2, windowHeight/2-wheelSize/2, wheelSize, wheelSize, this.frontDiscMovement.bind(this), 0, 1, 0, 360);
	this.addActor(this.frontDiscWheel);
	this.frontDiscLabel = new Label(windowWidth*.3, windowHeight/2, "Front: 0", {size:25, leading:25});
	this.addActor(this.frontDiscLabel);
  
    this.backDiscWheel = new Wheel(windowWidth*.7-wheelSize/2, windowHeight/2-wheelSize/2, wheelSize, wheelSize, this.backDiscMovement.bind(this), 0, 1, 0, 360);
	this.addActor(this.backDiscWheel);
	this.backDiscLabel = new Label(windowWidth*.7, windowHeight/2, "Back: 0", {size:25, leading:25});
	this.addActor(this.backDiscLabel);
	
	this.motorsOffButton = new TextButton(windowWidth*.425, windowHeight*.8, windowWidth*.15, windowHeight*.1, BLUE, "Motors Off", {size:25, leading:25}, this.motorsOff.bind(this), 'rect');
	this.addActor(this.motorsOffButton);
	
  } 

_inherits(MotorsScene, Scene); 

///// CUSTOM FUNCTIONS BELOW THIS LINE /////

MotorsScene.prototype.frontDiscMovement = function(angle) {
  var newAngle = int(angle*(510/360));
  manager.change(KINETICSCULPTURE.master.values.frontSpeed, newAngle);
  this.frontDiscLabel.text = "Front: "+(newAngle-255);
}

MotorsScene.prototype.backDiscMovement = function(angle) {
  var newAngle = int(angle*(510/360));
  manager.change(KINETICSCULPTURE.master.values.backSpeed, newAngle);
  this.backDiscLabel.text = "Back: "+(newAngle-255);
}

MotorsScene.prototype.motorsOff = function() {
  KINETICSCULPTURE.master.events.allMotorsOff();
  
  this.frontDiscLabel.text = "Front: 0";
  this.backDiscLabel.text = "Back: 0";
}

MotorsScene.prototype.homeAction = function() {
  stage.transitionTo("MenuScene",-1);
}

