canvas = document.getElementById("canvas");
ctx = canvas.getContext('2d');

const moon = document.getElementById('moon');

setInterval(function() {
  
  ctx.drawImage(moon, 0, 0, canvas.width, canvas.height);
  hoursHand();
  minutesHand();
  secondsHand();
  clockFace(9, '#000');
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
  ctx.fillStyle = "#000";
  fillRectCentered(0,0,2,-150);
  ctx.resetTransform();  
}

function minutesHand() {
  const minutes = new Date().getMinutes();
  ctx.translate(canvas.width/2,canvas.height/2);
  degrees = minutes * 6;
  ctx.rotate(Math.PI / 180 * degrees);
  ctx.fillStyle = "#000";
  fillRectCentered(0, 0, 7, -100);
  ctx.resetTransform();  
  return minutes;
}

function hoursHand() {
  const hours = new Date().getHours();
  const minutes = new Date().getMinutes();
  ctx.translate(canvas.width/2,canvas.height/2);
  degrees = hours * 30;
  if (minutes >= 15 && minutes < 30) degrees += 7.5;
  if (minutes >= 30 && minutes < 45) degrees += 15;
  if (minutes >= 45 && minutes <= 59) degrees += 22.5;
  ctx.rotate(Math.PI / 180 * degrees);
  ctx.fillStyle = "#000";
  fillRectCentered(0,0,12,-75);
  ctx.resetTransform();  
}

//draws rect from left-center instead of top-left
function fillRectCentered(x, y, width, height) {
  ctx.fillRect(x - width / 2, y, width, height);
}

