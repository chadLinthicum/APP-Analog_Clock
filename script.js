canvas = document.getElementById("canvas");
ctx = canvas.getContext('2d');

const moon = document.getElementById('moon');

setInterval(function() {
  
  ctx.drawImage(moon, 0, 0, canvas.width, canvas.height);
  hoursHand();
  minutesHand();
  secondsHand();
  clockFace(13, 'black');
   
}), 500;

function clockFace(radius, color) {
  ctx.beginPath();
  ctx.arc(canvas.width/2,canvas.height/2, radius, 0, 2 * Math.PI);
  ctx.lineWidth=7;
  ctx.stroke(); 
  ctx.fillStyle = color;
  ctx.fill();
}

function secondsHand() {
  const seconds = new Date().getSeconds();
  ctx.translate(canvas.width/2,canvas.height/2);
  degrees = seconds * 6;
  ctx.rotate(Math.PI / 180 * degrees);
  ctx.fillStyle = "black";
  fillRectCentered(0,0,2,-175);
  ctx.resetTransform();  
}

function minutesHand() {
  const minutes = new Date().getMinutes();
  ctx.translate(canvas.width/2,canvas.height/2);
  degrees = minutes * 6;
  ctx.rotate(Math.PI / 180 * degrees);
  ctx.fillStyle = "black";
  fillRectCentered(0, 0, 10, -145);
  ctx.resetTransform();  
}

function hoursHand() {
  const hours = new Date().getHours();
  ctx.translate(canvas.width/2,canvas.height/2);
  

  degrees = hours * 30;
  ctx.rotate(Math.PI / 180 * degrees);
  ctx.fillStyle = "black";
  fillRectCentered(0,0,15,-100);
  ctx.resetTransform();  
}

//centers the hand instead of drawing from top-left
function fillRectCentered(x, y, width, height) {
  ctx.fillRect(x - width / 2, y, width, height);
}

