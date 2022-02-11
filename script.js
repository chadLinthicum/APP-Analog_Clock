canvas = document.getElementById("canvas");
ctx = canvas.getContext('2d');

setInterval(function() {
  clockFace(185, '#D85151'); 
  hoursHand();
  minutesHand();
  secondsHand();
  clockFace(13, 'black'); 
}), 500;

function clockFace(radius, color) {
  ctx.beginPath();
  ctx.arc(200, 200, radius, 0, 2 * Math.PI);
  ctx.lineWidth=7;
  ctx.stroke(); 
  ctx.fillStyle = color;
  ctx.fill();
}

function secondsHand() {
  const seconds = new Date().getSeconds();
  ctx.translate(200,200);
  degrees = seconds * 6;
  ctx.rotate(Math.PI / 180 * degrees);
  ctx.fillStyle = "black";
  fillRectCentered(0,0,2,-175);
  ctx.resetTransform();  
}

function minutesHand() {
  const minutes = new Date().getMinutes();
  ctx.translate(200,200);
  degrees = minutes * 6;
  ctx.rotate(Math.PI / 180 * degrees);
  ctx.fillStyle = "black";
  fillRectCentered(0, 0, 10, -175);
  ctx.resetTransform();  
}

function hoursHand() {
  const hours = new Date().getHours();
  ctx.translate(200,200);
  degrees = hours * 30;
  ctx.rotate(Math.PI / 180 * degrees);
  ctx.fillStyle = "black";
  fillRectCentered(0,0,15,-125);
  ctx.resetTransform();  
}

//centers the hand instead of drawing from top-left
function fillRectCentered(x, y, width, height) {
  ctx.fillRect(x - width / 2, y, width, height);
}