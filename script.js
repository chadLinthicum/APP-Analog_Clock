canvas = document.getElementById("canvas");
ctx = canvas.getContext('2d');

const time = new Date();
seconds = time.getSeconds();
let handsX = 200; //start point of hands
let handsY = 200; //start point of hands
  
drawClockFace(); 

drawSecondsHand();

// setInterval(function() {
//   drawSecondsHand();
// }, 500);

function drawClockFace() {
  ctx.beginPath();
  ctx.arc(200, 200, 185, 0, 2 * Math.PI);
  ctx.stroke(); 
  ctx.fillStyle = '#fcba03';
  ctx.fill();
}

function drawSecondsHand() {
  ctx.translate(200,200);


  

  if (seconds == 1) {
    degrees = 6
    ctx.rotate(Math.PI / 180 * degrees);
  }  

  if (seconds == 2) {
    degrees = 12
    ctx.rotate(Math.PI / 180 * degrees);
  }  

  ctx.fillStyle = "black";
  ctx.fillRect(0,0,2,-175);
}





// function secondHandStartPos() {  
//   ctx.translate(handsX, handsY); 
//   ctx.rotate( (Math.PI / 180 * (seconds*6))); 
//   // ctx.translate(-handsX, -handsY);
// }

// function secondHandMovement() {
//   let L = -175; //sets the seconds hand to 12 position
//   let W = 2;
//   // ctx.translate(handsX, handsY); 
//   ctx.rotate( (Math.PI / 180 * 6));
//   // ctx.translate(-handsX, -handsY); 
//   ctx.fillStyle = 'black';
//   ctx.fillRect(handsX, handsY, W, L);
//   let seconds = (new Date()).getSeconds();
//   console.log("seconds = " + seconds);
// }
