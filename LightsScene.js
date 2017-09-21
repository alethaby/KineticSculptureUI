
"use strict"; 

function LightsScene() {

	Scene.call(this); 
 
	///// SETUP ALL ACTORS HERE /////
	this.bgBorder = new BackgroundBorder();
	this.addActor(this.bgBorder);
  
	this.homeButton = new HomeButton(this.homeAction.bind(this));
	this.addActor(this.homeButton);

	this.title = new Label(windowWidth/2, titleYPos, "Light Control", {size:50, leading:50});
	this.addActor(this.title);
  
	this.redVertSlider = new VerticalSlider(windowWidth*.23, windowHeight*.16, windowHeight*.5, 255, 0, 0, this.setRedLEDColor.bind(this));
	this.redVertSlider.VerticalSliderImage(redImg);
	this.addActor(this.redVertSlider);
	this.redSliderLabel = new Label(windowWidth*.25, windowHeight*.725, "Red: 0", {size:25, leading:25});
	this.addActor(this.redSliderLabel);

	this.greenVertSlider = new VerticalSlider(windowWidth*.48, windowHeight*.16, windowHeight*.5, 255, 0, 0, this.setGreenLEDColor.bind(this));
	this.greenVertSlider.VerticalSliderImage(greenImg);
	this.addActor(this.greenVertSlider);
	this.greenSliderLabel = new Label(windowWidth*.5, windowHeight*.725, "Green: 0", {size:25, leading:25});
	this.addActor(this.greenSliderLabel);
  
	this.blueVertSlider = new VerticalSlider(windowWidth*.73, windowHeight*.16, windowHeight*.5, 255, 0, 0, this.setBlueLEDColor.bind(this));
	this.blueVertSlider.VerticalSliderImage(blueImg);
	this.addActor(this.blueVertSlider);
	this.blueSliderLabel = new Label(windowWidth*.75, windowHeight*.725, "Blue: 0", {size:25, leading:25});
	this.addActor(this.blueSliderLabel);
	
	this.lightsOffButton = new TextButton(windowWidth*.42, windowHeight*.8, windowWidth*.15, windowHeight*.1, BLUE, "Lights Off", {size:25, leading:25}, this.lightsOff.bind(this), 'rect');
	this.addActor(this.lightsOffButton);
	
  } 

_inherits(LightsScene, Scene); 

///// CUSTOM FUNCTIONS BELOW THIS LINE /////

LightsScene.prototype.setRedLEDColor = function(color) {
  manager.change(KINETICSCULPTURE.master.values.red, color);
  this.redSliderLabel.text = "Red: "+color;
}

LightsScene.prototype.setGreenLEDColor = function(color) {
  manager.change(KINETICSCULPTURE.master.values.green, color);
  this.greenSliderLabel.text = "Green: "+color;
}

LightsScene.prototype.setBlueLEDColor = function(color) {
  manager.change(KINETICSCULPTURE.master.values.blue, color);
  this.blueSliderLabel.text = "Blue: "+color;
}

LightsScene.prototype.demoAction = function() {
  KINETICSCULPTURE.master.events.demo();
  stage.pause("Running Demo");
}

LightsScene.prototype.lightsOff = function() {
  KINETICSCULPTURE.master.events.allLightsOff();
  this.redVertSlider.position = windowHeight*.467;
  this.redVertSlider.draw();
  this.greenVertSlider.position = windowHeight*.467;
  this.greenVertSlider.draw();
  this.blueVertSlider.position = windowHeight*.467;
  this.blueVertSlider.draw();
  this.redSliderLabel.text = "Red: 0";
  this.greenSliderLabel.text = "Green: 0";
  this.blueSliderLabel.text = "Blue: 0";
}

LightsScene.prototype.homeAction = function() {
  stage.transitionTo("MenuScene",-1);
}

