let counter = 0;
let imgs = [];
let currentIndex = 0;
let imgWidth;
let imgHeight;
let spacing = 50;
let totalWidth;
let blackhole, mss, nebula, supermassive, supernova;
let displayCounter = 0; // Counter to keep track of displayNextImage calls
let button;
let ufo;


function preload() {
  blackhole = loadImage('images/blackhole.png');
  mss = loadImage('images/mss.png');
  nebula = loadImage('images/nebula.png');
  supermassive = loadImage('images/supermassive.png');
  supernova = loadImage('images/supernova.png');
  ufo = loadImage('images/ufo.png');

  

  button = createButton('zlorp!');
  button.position(windowWidth/2.1, windowHeight/3);
  

  imgs.push(nebula);
  imgs.push(mss);
  imgs.push(supermassive);
  imgs.push(blackhole);
  imgs.push(supernova);
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(3)
  background(22, 12, 41);
 

  imageMode(CENTER);
  
  imgWidth = windowWidth / 6;  //width of each image in relation to window size
  imgHeight = imgWidth; // craetes symetrical images

  displayNextImage();

  

  button.mousePressed(alienInvader);
  
}

function displayNextImage() { //function to draw the five images in succession along the screen
  setTimeout(1)
  
  if (currentIndex >= imgs.length) {
    currentIndex = 0;
  }

  totalWidth = ((imgWidth * 5) + 200)

  let startX = (windowWidth / 10);

  let x = startX + currentIndex * (imgWidth + spacing);

  image(imgs[currentIndex], x, windowHeight / 2, imgWidth, imgHeight);

  currentIndex++;
  
  displayCounter++; // Increment the display counter (number of images on screen)

  if (displayCounter >= 5) { // Check if it has been called 5 times
    setTimeout(resetCanvas, 2000); // Reset the canvas after a delay of 2 seconds
    displayCounter = 0; // Reset the display counter
  } else {
    setTimeout(displayNextImage, 2000);
  }
}

function resetCanvas() {
  background(22, 12, 41);
  displayNextImage(); // Start displaying images again
}

function draw() {

countInterval = setInterval(drawStar, 2); // Draws little stars in the background at an interval

}

function drawStar() { //this will draw the stars randomly
  drawStarShape(random(0, windowWidth), random(0, windowHeight), 5, 4, 2, 0);
  counter++;
  if (counter >= 150) {
    clearInterval(countInterval);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(22, 12, 41);
}

function drawStarShape(x, y, n, outerRadius, innerRadius, rotation) { //this is just the formula to create a star shape
  noStroke();
  fill(190);
  let theta = TAU / n;
  beginShape();
  for (let i = 0; i < n; i++) {
    let x1 = x + cos(i * theta + rotation) * outerRadius;
    let y1 = y + sin(i * theta + rotation) * outerRadius;
    vertex(x1, y1);
    let x2 = x + cos((i + 0.5) * theta + rotation) * innerRadius;
    let y2 = y + sin((i + 0.5) * theta + rotation) * innerRadius;
    vertex(x2, y2);
  }
  endShape(CLOSE);
}






function alienInvader (){  // creates the aliens and their message
  textSize(25);
  fill(random(0,255),random(0,255),random(0,255));
  text('bring on the alien invasion!!!!!!!!', windowWidth/3.3, windowHeight/5);
  image(ufo, random(windowWidth), random(windowHeight),60,60);
  ufo.resize(60,60);
}