function setup() {
  canvas = createCanvas(640, 480);
  canvas.center();

  video = createCapture(VIDEO);
  video.hide();
}

function preload() {

}

function draw() {
  image(video, 175, 75, 300, 300);
  fill(255, 0, 0);
  stroke(255, 0, 0);
  circle(185, 75, 50);
  circle(485, 75, 50);
  circle(485, 375, 50);
  circle(185, 375, 50);


  fill(0, 255, 0);
  stroke(0, 255, 0);
  rect(210, 70, 255, 25);
  rect(175, 95, 25, 255);
  rect(210, 375, 255, 25);
  rect(476, 95, 25, 255);
}

function Pic()
{
  save ("SuperMe.png");
}