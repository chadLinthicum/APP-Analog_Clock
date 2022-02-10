canvas = document.getElementById("canvas");
ctx = canvas.getContext('2d');

const time = new Date();
seconds = time.getSeconds();
let handsX = 200; //start point of hands
let handsY = 200; //start point of hands
  
drawClockFace(); 

secondHandStartPos();

setInterval(function() {
  //add function to align hand with source of truth
  drawClockFace(); 
  secondHandMovement();
}, 1000);

function drawClockFace() {
  ctx.beginPath();
  ctx.arc(200, 200, 185, 0, 2 * Math.PI);  
  ctx.stroke(); 
  ctx.fillStyle = '#fcba03';
  ctx.fill();
}

function secondHandStartPos() {  
  ctx.translate(handsX, handsY); //translates canvas to the coordinates
  ctx.rotate( (Math.PI / 180 * (seconds*6))); //increments hand by 6 degrees
  ctx.translate(-handsX, -handsY); //translates canvas back to 0, 0
}

function secondHandMovement() {
  let L = -175; //sets the seconds hand to 12 position
  let W = 2;
  ctx.translate(handsX, handsY); //translates the canvas to the x & y coordinates
  ctx.rotate( (Math.PI / 180 * 6));
  ctx.translate(-handsX, -handsY); //translates center back to 0,0
  ctx.fillStyle = 'black';
  ctx.fillRect(handsX, handsY, W, L);
}

