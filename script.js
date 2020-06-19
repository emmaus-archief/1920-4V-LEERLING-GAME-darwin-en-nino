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

const SPEELVELDBREEDTE = 1280;
const SPEELVELDHOOGTE = 720;
const SPEELVELDRANDBREEDTE = 20;
const SPELERDIAMETER = 80;

const AANTALVIJANDEN = 10;
const VIJANDDIAMETER = 40;

var aantalLevens = 5;

var vijandenX = [];
var vijandenY = [];
var vijandenSnelheid = [];
var vijandPlaatje;

var loadImage;

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

var vijandX = 0;   // x-positie van vijand
var vijandY = 0;   // y-positie van vijand

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
    

};

var tekenVijanden = function() {
    for (var i = 0; i < vijandenX.length; i++) {
        fill(255, 0, 0);
        
        image(vijandPlaatje, vijandenX[i], vijandenY[i]);
        
    }
    
   
};

var beweegVijand = function() {
    for (var i = 0; i < vijandenX.length; i++) {
        vijandenY[i] = vijandenY[i] + vijandenSnelheid[i];

        if (vijandenY[i] > SPEELVELDHOOGTE + VIJANDDIAMETER) {
            verwijderVijand(i);
            maakNieuweVijand();
        }
    }
};

function verwijderVijand(nummer) {
    console.log("verwijder vijand " + nummer);
    vijandenX.splice(nummer, 1);
    vijandenY.splice(nummer, 1)
    vijandenSnelheid.splice(nummer, 1);
}

function maakNieuweVijand() {
    vijandenX.push(random(20, SPEELVELDBREEDTE - 20));
    vijandenY.push(random(-250, -30));
    vijandenSnelheid.push(random(2, 10));
}

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

/*var checkGameOver = function() {
  
  if (aantalLevens === 0) {
      return  true;
    }else{
      return  false;
}
*/

function preload(){
   img = loadImage('images/outo.png');
   backgroundImg = loadImage('images/background.png');
   vijandPlaatje = loadImage('images/alien.png')
}

var tekenSpeler = function(spelerX, spelerY) {
  
  image(img,spelerX,spelerY,200,200);
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
    for (var i = 0; i < vijandenX.length; i++) {
        
        if(//vijandenX== mouseX && vijandenY == 500){
            ((vijandenY[i] - 500 < 20 && vijandenY[i] - 500 > 0) || (500 -vijandenY[i] < 20 && 500 -vijandenY[i] > 0)) && ((vijandenX[i] - mouseX < 20 && vijandenX[i] - mouseX >0) || (mouseX - vijandenX[i] < 20 && mouseX - vijandenX[i] >0 ))){
        return true;
        verwijderVijand(i);
        }else{
        return false;
        }
    }
};

function verwijderVijand(nummer) {
    console.log("verwijder vijand " + nummer);
    vijandenX.splice(nummer, 1);
    vijandenY.splice(nummer, 1)
    vijandenSnelheid.splice(nummer, 1);
}

/*var checkSpelerGeraakt = function(vijandNummer) {
    var teruggeefWaarde = false;

    for (var j = 0; j < 1; j++) {
        if (collideCircleCircle(mouseX , 500, 20,vijandenX[vijandNummer], vijandenY[vijandNummer], VIJANDDIAMETER)) {
            teruggeefWaarde = true;
            verwijderVijand[j];

        }else
            teruggeefWaarde = false
        }
    }
    return teruggeefWaarde
}
*/
var levens = function(){
    var levensString = "levens:" + aantalLevens;
    text(levensString,50,50,50,50);
    textSize(40);
};


/**
 * Zoekt uit of het spel is afgelopen
 * @returns {boolean} true als het spel is afgelopen
 */
var checkGameOver = function() {
    if (aantalLevens < 1){
        return true;
    }else{
        return false;
    }
  
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
   for (var i = 0; i < AANTALVIJANDEN; i++) {
      maakNieuweVijand();
  }

 
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
      
      if (checkSpelerGeraakt() == true) {
        
         aantalLevens--;
      }

      levens();
      tekenVeld();
      tekenVijanden();
      tekenKogel(kogelX, kogelY);
      tekenSpeler(mouseX - 100, spelerY);


        if (checkGameOver()) {
        spelStatus = GAMEOVER;
        }
      break;
  
    case GAMEOVER:
        background(red);
        text("Game over",400,70,200,400);
        text("Start opnieuw",400,240,200,400);
        textSize(200);
        StartSpel();
    break;  
  }  
}
