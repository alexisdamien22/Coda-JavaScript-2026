import './style.css'

function getCanvas() {
    const canvas = document.getElementById('monCanvas') as HTMLCanvasElement;
    if (!canvas) {
        throw new Error('Canvas not found');
    }
    return canvas;
}

function getContext() {
    const canvas = getCanvas();
    const ctx = canvas.getContext('2d')!;
    if (!ctx) {
        throw new Error("Impossible de récupérer le contexte 2D");
    }
    return ctx;
}

let squareX = 50;
let squareY = 50;
const squareSize = 50;
const speed = 5;

const canvas = getCanvas();
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const keysPressed: Record<string, boolean> = {};

document.addEventListener("keydown", (event: KeyboardEvent) => {
    keysPressed[event.key] = true;
});

document.addEventListener("keyup", (event: KeyboardEvent) => {
    keysPressed[event.key] = false;
});

function drawSquare() {
    const ctx = getContext();
    ctx.fillStyle = 'purple';
    ctx.fillRect(squareX, squareY, squareSize, squareSize);
}

function moveSquare() {
    if (keysPressed.ArrowUp || keysPressed.z) squareY -= speed;
    if (keysPressed.ArrowDown || keysPressed.s) squareY += speed;
    if (keysPressed.ArrowLeft || keysPressed.q) squareX -= speed;
    if (keysPressed.ArrowRight || keysPressed.d) squareX += speed;

    squareX = Math.max(0, Math.min(squareX, canvas.width - squareSize));
    squareY = Math.max(0, Math.min(squareY, canvas.height - squareSize));
}

function drawCircle() {
    const ctx = getContext();
    ctx.fillStyle = 'red';
    ctx.arc(squareX, squareY, squareSize / 2, 0, 359);
}

function doCircle() {
    if (keysPressed.Space || keysPressed.z) drawCircle();
}

function updateGame() {
    const ctx = getContext();
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawSquare();
    doCircle();
    moveSquare();

    requestAnimationFrame(updateGame);
}

updateGame();