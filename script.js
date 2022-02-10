canvas = document.getElementById("canvas");
ctx = canvas.getContext('2d');


let handsX = 200; //start point of hands
let handsY = 200; //start point of hands

setInterval(function() {
  drawClockFace(); 
  drawSecondsHand();
}), 500;

function drawClockFace() {
  ctx.beginPath();
  ctx.arc(200, 200, 185, 0, 2 * Math.PI);
  ctx.stroke(); 
  ctx.fillStyle = '#fcba03';
  ctx.fill();
}

function drawSecondsHand() {
  const seconds = new Date().getSeconds();
  ctx.translate(200,200);
  degrees = seconds * 6;
  ctx.rotate(Math.PI / 180 * degrees);
  ctx.fillStyle = "black";
  ctx.fillRect(0,0,2,-175);
  ctx.resetTransform(); 
}