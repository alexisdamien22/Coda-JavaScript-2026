const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
let mouse = [0,0];
let len = 20;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function handleButton1Hover() {
    button1.style.top = getRandomInt(window.innerHeight-button1.style.height)+"px";
    button1.style.left = getRandomInt(window.innerWidth-button1.style.width)+"px";
}

document.addEventListener('mousemove', function(event) {
    mouse[0]=(event.clientX);
    mouse[1]=(event.clientY);
});

function handleButton2Hover() {
    let rect = button2.getBoundingClientRect();
    let center = [rect.x + rect.width / 2, rect.y + rect.height / 2];
    let dx = mouse[0]-center[0];
    let dy = mouse[1]-center[1];
    let angleRad = Math.atan2(dy, dx);
    let vx = Math.cos(angleRad) * len;
    let vy = Math.sin(angleRad) * len;
    let ox = -vx;
    let oy = -vy;
    let currentTop = button2.offsetTop;
    let currentLeft = button2.offsetLeft;
    button2.style.top = currentTop + oy + "px";
    button2.style.left = currentLeft + ox + "px";

    console.log(button2.style.top +","+ button2.style.left); 
}

button1.addEventListener("mouseover", handleButton1Hover);
button2.addEventListener("mouseenter", handleButton2Hover);