
'use strict';


var floor = Math.floor;
var stage = new Stage();
var manager;

////// DELCARE ALL VARIABLES (SCENES, IMAGES, ETC...) HERE /////
var redImg;
var greenImg;
var blueImg;

function preload() {
  ////// IMPORT ALL IMAGES HERE //////
  redImg = loadImage("/libs/images/red.png");
  greenImg = loadImage("/libs/images/green.png");
  blueImg = loadImage("/libs/images/blue.png");
}


function setup() {

  resizeCanvas(windowWidth, windowHeight);

  initMenuVariables();

////// SETUP ALL SCENES HERE ////////
  var menuButtonNames = ["Demo", "Manual Control","Lights","Motors"];
  var menuButtonActions = [this.demoButtonAction.bind(this), this.manualButtonAction.bind(this),this.lightsButtonAction.bind(this),this.motorsButtonAction.bind(this)];
  this.MenuScene = new ButtonsScene("Kinetic Sculpture Menu", null, menuButtonNames, menuButtonActions, null, null, null, {size:50, leading:50});
  this.ManualScene = new ManualScene();
  stage.addScene("MenuScene", this.MenuScene);
  stage.addScene("ManualScene", this.ManualScene);
  this.LightsScene = new LightsScene();
  stage.addScene("LightsScene", this.LightsScene);
  this.MotorsScene = new MotorsScene();
  stage.addScene("MotorsScene", this.MotorsScene);

  stage.transitionTo('MenuScene');
  manager.changeState(STATE_KINETICSCULPTURE);
  manager.setEventHandler(KINETICSCULPTURE.tablet.events.demoComplete, this.resumeScene.bind(this));
}

function draw() {
  stage.draw();
}

function demoButtonAction(){
	console.log("Demo button pressed.");
	KINETICSCULPTURE.master.events.demo();
	stage.pause("Running Demo");
}

function resumeScene(){
	stage.resume();
}

function manualButtonAction(){
	console.log("Manual button pressed.");
	stage.transitionTo('ManualScene');
}

function lightsButtonAction(){
	console.log("Lights button pressed.");
	stage.transitionTo('LightsScene');
}

function motorsButtonAction(){
	console.log("Motors button pressed.");
	stage.transitionTo('MotorsScene');
}
// all these are needed to handle touch/mouse events properly
window.touchStarted = stage.touchStarted.bind(stage);
window.touchMoved = stage.touchMoved.bind(stage);
window.touchEnded = stage.touchEnded.bind(stage);
window.mousePressed = stage.mousePressed.bind(stage);
window.mouseDragged = stage.mouseDragged.bind(stage);
window.mouseReleased = stage.mouseReleased.bind(stage);
