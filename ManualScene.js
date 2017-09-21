
"use strict"; 

function ManualScene() {

	Scene.call(this); 

	var wheelSize = windowWidth*.23;
  
	///// SETUP ALL ACTORS HERE /////
	this.bgBorder = new BackgroundBorder();
	this.addActor(this.bgBorder);
  
	this.homeButton = new HomeButton(this.homeAction.bind(this));
	this.addActor(this.homeButton);

	this.title = new Label(windowWidth/2, titleYPos, "Manual Control", {size:50, leading:50});
	this.addActor(this.title);
  
	this.redVertSlider = new VerticalSlider(windowWidth*.65, windowHeight*.275, windowHeight*.4, 255, 0, 0, this.setRedLEDColor.bind(this));
	this.redVertSlider.VerticalSliderImage(redImg);
	this.addActor(this.redVertSlider);
	this.redSliderLabel = new Label(windowWidth*.665, windowHeight*.725, "Red: 0", {size:25, leading:25});
	this.addActor(this.redSliderLabel);

	this.greenVertSlider = new VerticalSlider(windowWidth*.75, windowHeight*.275, windowHeight*.4, 255, 0, 0, this.setGreenLEDColor.bind(this));
	this.greenVertSlider.VerticalSliderImage(greenImg);
	this.addActor(this.greenVertSlider);
	this.greenSliderLabel = new Label(windowWidth*.765, windowHeight*.725, "Green: 0", {size:25, leading:25});
	this.addActor(this.greenSliderLabel);
  
	this.blueVertSlider = new VerticalSlider(windowWidth*.85, windowHeight*.275, windowHeight*.4, 255, 0, 0, this.setBlueLEDColor.bind(this));
	this.blueVertSlider.VerticalSliderImage(blueImg);
	this.addActor(this.blueVertSlider);
	this.blueSliderLabel = new Label(windowWidth*.865, windowHeight*.725, "Blue: 0", {size:25, leading:25});
	this.addActor(this.blueSliderLabel);
  
	this.frontDiscWheel = new Wheel(windowWidth*.2-wheelSize/2, windowHeight/2-wheelSize/2, wheelSize, wheelSize, this.frontDiscMovement.bind(this), 0, 1, 0, 360);
	this.addActor(this.frontDiscWheel);
	this.frontDiscLabel = new Label(windowWidth*.2, windowHeight/2, "Front: 0", {size:25, leading:25});
	this.addActor(this.frontDiscLabel);
  
    this.backDiscWheel = new Wheel(windowWidth*.47-wheelSize/2, windowHeight/2-wheelSize/2, wheelSize, wheelSize, this.backDiscMovement.bind(this), 0, 1, 0, 360);
	this.addActor(this.backDiscWheel);
	this.backDiscLabel = new Label(windowWidth*.47, windowHeight/2, "Back: 0", {size:25, leading:25});
	this.addActor(this.backDiscLabel);
	
	this.motorsOffButton = new TextButton(windowWidth*.14, windowHeight*.8, windowWidth*.15, windowHeight*.1, BLUE, "Motors Off", {size:25, leading:25}, this.motorsOff.bind(this), 'rect');
	this.addActor(this.motorsOffButton);
	
	this.demoButton = new TextButton(windowWidth*.44, windowHeight*.8, windowWidth*.15, windowHeight*.1, BLUE, "Demo", {size:25, leading:25}, this.demoAction.bind(this), 'rect');
	this.addActor(this.demoButton);
	
	this.lightsOffButton = new TextButton(windowWidth*.74, windowHeight*.8, windowWidth*.15, windowHeight*.1, BLUE, "Lights Off", {size:25, leading:25}, this.lightsOff.bind(this), 'rect');
	this.addActor(this.lightsOffButton);
	
  } 

_inherits(ManualScene, Scene); 

///// CUSTOM FUNCTIONS BELOW THIS LINE /////

ManualScene.prototype.setRedLEDColor = function(color) {
  manager.change(KINETICSCULPTURE.master.values.red, color);
  this.redSliderLabel.text = "Red: "+color;
}

ManualScene.prototype.setGreenLEDColor = function(color) {
  manager.change(KINETICSCULPTURE.master.values.green, color);
  this.greenSliderLabel.text = "Green: "+color;
}

ManualScene.prototype.setBlueLEDColor = function(color) {
  manager.change(KINETICSCULPTURE.master.values.blue, color);
  this.blueSliderLabel.text = "Blue: "+color;
}

ManualScene.prototype.frontDiscMovement = function(angle) {
  var newAngle = int(angle*(510/360));
  manager.change(KINETICSCULPTURE.master.values.frontSpeed, newAngle);
  this.frontDiscLabel.text = "Front: "+(newAngle-255);
}

ManualScene.prototype.backDiscMovement = function(angle) {
  var newAngle = int(angle*(510/360));
  manager.change(KINETICSCULPTURE.master.values.backSpeed, newAngle);
  this.backDiscLabel.text = "Back: "+(newAngle-255);
}

ManualScene.prototype.motorsOff = function() {
  KINETICSCULPTURE.master.events.allMotorsOff();
  
  this.frontDiscLabel.text = "Front: 0";
  this.backDiscLabel.text = "Back: 0";
}



ManualScene.prototype.demoAction = function() {
  KINETICSCULPTURE.master.events.demo();
  stage.pause("Running Demo");
}

ManualScene.prototype.lightsOff = function() {
  KINETICSCULPTURE.master.events.allLightsOff();
  this.redVertSlider.position = windowHeight*.374;
  this.redVertSlider.draw();
  this.greenVertSlider.position = windowHeight*.374;
  this.greenVertSlider.draw();
  this.blueVertSlider.position = windowHeight*.374;
  this.blueVertSlider.draw();
  this.redSliderLabel.text = "Red: 0";
  this.greenSliderLabel.text = "Green: 0";
  this.blueSliderLabel.text = "Blue: 0";
}

ManualScene.prototype.homeAction = function() {
  stage.transitionTo("MenuScene",-1);
}

