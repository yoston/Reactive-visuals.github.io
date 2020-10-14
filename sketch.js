// https://kylemcdonald.github.io/cv-examples/

let song;

let time = 0.0;

let specLow = 0.03;
let specMid = 0.125;
let specHi = 0.20;

let scoreLow = 0;
let scoreMid = 0;
let scoreHi = 0;

// Valores anteriores, para suavizar la reducción.
let oldScoreLow = scoreLow;
let oldScoreMid = scoreMid;
let oldScoreHi = scoreHi;

//Valor de ablandamiento
let scoreDecreaseRate = 25;

// this variable will hold our shader object
let theShader;
// this variable will hold our webcam video
let cam;

var capture;
var previousPixels;
var flow;
var w = 640,
    h = 480;
var step = 8;

function preload() {
    /*
    song = loadSound('assets/song.wav');
    theShader = loadShader('assets/webcam.vert', 'assets/webcam.frag');
    */
}

function setup() {
    //createCanvas(windowWidth, windowHeight, WEBGL);
    
    var canvas = createCanvas(w, h, WEBGL);
    canvas.parent('sketch-holder');

    background(255, 0, 200);

    
    noStroke();

    fft = new p5.FFT();
    song.amp(1);

    cam = createCapture(VIDEO);
    cam.size(710, 400);

    cam.hide();

    
}

function draw() {

    /*
    let spectrum = fft.analyze();

    oldScoreLow = scoreLow;
    oldScoreMid = scoreMid;
    oldScoreHi = scoreHi;

    //Restablecer valores
    scoreLow = 0;
    scoreMid = 0;
    scoreHi = 0;

    specLow = fft.getEnergy("bass");
    specMid = fft.getEnergy("mid");
    specHi = fft.getEnergy("highMid");

    print(specLow);
    specLowMapped = map(specLow, 135.0, 260.0, 0.0, 1.0)
    //print(specMid);

    // shader() sets the active shader with our shader
    shader(theShader);

    // passing cam as a texture
    theShader.setUniform('tex0', cam);
    theShader.setUniform('low', specLowMapped);
    theShader.setUniform('time', time);
    //theShader.setUniform('mid', specMid);

    // rect gives us some geometry on the screen
    rect(0, 0, width, height);

    time = time + 1.0;

    */
}

function mouseClicked() {

    /*
    if (song.isPlaying()) {
        // .isPlaying() returns a boolean
        song.stop();
        //background(255, 0, 0);
    } else {
        song.play();
        //background(0, 255, 0);
    }
    */
}