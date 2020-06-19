/// @ts-check
/// <reference path=".gitpod/p5.global-mode.d.ts" />
"use strict";

/* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library

   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */




/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */

const STARTSCHERM = 0;
const SPELEN = 1;
const GAMEOVER = 2;
var spelStatus = STARTSCHERM;

var img;
var backgroundImg;
var mouseX;
//var spelerX = 200;
//var spelerX = mouseX;
/*var spelerX = function(){
    if( mouseX > 150 && mouseX < 800){
        spelerX = mouseX;
    }
    else if(mouseX < 150){
        spelerX = 150;
    }
    else{
        spelerX = 800;
    }
}*/

 // x-positie van speler
var spelerY = 500; // y-positie van speler

var kogelX = 0;    // x-positie van kogel
var kogelY = 0;    // y-positie van kogel

var vijandX = 100;          // x-positie van vijand
var vijandY = -50;          // y-positie van vijand
var vijandXSnelheid = 3;    // horizontale snelheid van vijand
var vijandYSnelheid = -2;  // verticale snelheid van vijand

var score = 0; // aantal behaalde punten





/* ********************************************* */
/*      functies die je gebruikt in je game      */
/* ********************************************* */


/**
 * Tekent het speelveld
 */
var tekenVeld = function () {
  fill("purple");
  rect(backgroundImg, 20, 20, width - 2 * 20, height - 2 * 20);
};


/**
 * Tekent de vijand
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */
var tekenVijand = function(x, y) {
    function preload() {
     vijandPlaatje = loadImage('plaatjes/alien.png');
}

    

};


/**
 * Tekent de kogel of de bal
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */
var tekenKogel = function(x, y) {


};

var StartSpel = function(){
    if (mouseIsPressed == true && mouseX> 400 && mouseX < 800 && mouseY > 240 && mouseY < 350) {
        spelStatus = SPELEN;
    }
}


/**
 * Tekent de speler
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */
function preload(){
   img = loadImage('images/outo.png');
   backgroundImg = loadImage('images/background.png');
}

 var tekenSpeler = function(spelerX, spelerY) {
  
  image(img,spelerX,spelerY,200,200);
};


/**
 * Updatet globale variabelen met positie van vijand of tegenspeler
 */

function tekenTimer() {
    var extraNul = "";
    if (stopwatchSec < 10) {
        extraNul = "0";
    }

    var timerString = stopwatchMin + " : " + extraNul + stopwatchSec;

    textSize(12);
    text(timerString , 50, 50, 50, 50);
}

function tekenScore() {
    textSize(24);
    text(""+score , width-100, 50, 150, 100);
}

var beweegVijand = function() {
    for (var i = 0; i < vijandenX.length; i++) {
        vijandenY[i] = vijandenY[i] + vijandenSnelheid[i];

        if (vijandenY[i] > SPEELVELDHOOGTE + VIJANDDIAMETER) {
            verwijderVijand(i);
            maakNieuweVijand();
        }
    }
};


/**
 * Updatet globale variabelen met positie van kogel of bal
 */
var beweegKogel = function() {

};


/**
 * Kijkt wat de toetsen/muis etc zijn.
 * Updatet globale variabele spelerX en spelerY
 */
var beweegSpeler = function() {

};


/**
 * Zoekt uit of de vijand is geraakt
 * @returns {boolean} true als vijand is geraakt
 */
var checkVijandGeraakt = function() {

  return false;
};


/**
 * Zoekt uit of de speler is geraakt
 * bijvoorbeeld door botsing met vijand
 * @returns {boolean} true als speler is geraakt
 */
var checkSpelerGeraakt = function() {
    
  return false;
};


/**
 * Zoekt uit of het spel is afgelopen
 * @returns {boolean} true als het spel is afgelopen
 */
var checkGameOver = function() {
    
  return false;
};


/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  // Kleur de achtergrond blauw, zodat je het kunt zien
  background('blue');
}


/**
 * draw
 * de code in deze functie wordt meerdere keren per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  switch (spelStatus) {

    case STARTSCHERM:
    background(backgroundImg);
    text("Start",400,240,200,400);
    textSize(200);
    StartSpel ();
    break;

    case SPELEN:
      background(backgroundImg);
      beweegVijand();
      beweegKogel();
      beweegSpeler();
      
      if (checkVijandGeraakt()) {
        // punten erbij
        // nieuwe vijand maken
      }
      
      if (checkSpelerGeraakt()) {
        // leven eraf of gezondheid verlagen
        // eventueel: nieuwe speler maken
      }
      
      tekenVeld();
      tekenVijand(vijandX, vijandY);
      tekenKogel(kogelX, kogelY);
      tekenSpeler(mouseX - 100, spelerY);


      if (checkGameOver()) {
        spelStatus = GAMEOVER;
      }
      break;
  }
}
