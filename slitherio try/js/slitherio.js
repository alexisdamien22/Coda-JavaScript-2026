let x = 0;
let y = 0;
let len = 3.5;
let targetLen = 3.5;
let mouse = [window.innerWidth / 2, window.innerHeight / 2];

function smooth(from, to, speed) {
    return from + (to - from) * speed;
}

document.addEventListener("mousemove", (event) => {
    mouse = [event.clientX, event.clientY];
});

document.addEventListener("mousedown", () => {
    targetLen = 9;
});
document.addEventListener("mouseup", () => {
    targetLen = 4;
});

function animateBackground() {
    let center = [window.innerWidth / 2, window.innerHeight / 2];
    let dx = mouse[0]-center[0];
    let dy = mouse[1]-center[1];
    let angleRad = Math.atan2(dy, dx);
    let vx = Math.cos(angleRad) * len;
    let vy = Math.sin(angleRad) * len;
    x -= vx;
    y -= vy;

    len = smooth(len, targetLen, 0.1);

    document.body.style.backgroundPosition = `${x}px ${y}px`;

    requestAnimationFrame(animateBackground);
}

requestAnimationFrame(animateBackground);


