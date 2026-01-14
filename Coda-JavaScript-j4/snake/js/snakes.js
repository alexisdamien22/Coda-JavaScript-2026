const section = document.querySelector("#board");

let body = [[10,10],[10,9],[10,8],[10,7]];
let direction = [0,1];
let pos = [0,0];
let lastTime = 0;
let speed = 10;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

for (let i = 0; i < 20; i++) {
    for (let j = 0; j < 20; j++) {

        const pixel = document.createElement("p");
        pixel.id = i * 20 + j;
        pixel.className = "board";
        pixel.style.top = i * 30 +"px";
        pixel.style.left = j * 30 +"px";

        section.appendChild(pixel);
    }
}
for(let i = 0; i < body.length; i++){
    pixel = document.getElementById(body[i][0] * 20 + body[i][1]);
    pixel.className = "body";
}

document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowUp" || event.key ==="z") {
        direction = [-1,0];
    }
    if (event.key === "ArrowDown" || event.key ==="s") {
        direction = [1,0];
    }
    if (event.key === "ArrowLeft" || event.key ==="q") {
        direction = [0,-1];
    }
    if (event.key === "ArrowRight" || event.key ==="d") {
        direction = [0,1];
    }
    console.log(direction);
});

function gameLoop(currentTime) {
    requestAnimationFrame(gameLoop);

    const delta = (currentTime - lastTime) / 1000;

    if (delta < 1 / speed) return;

    lastTime = currentTime;

    updateSnake();
    draw();
}

function spawnApple(body){
    pos = [getRandomInt(19), getRandomInt(19)];
    const bodyPos = body.find(
        (piece) => piece[0] !== pos[0] && piece[1] !== pos[1]
    );
    if(bodyPos == undefined){
        spawnApple(body);
    }
}

function updateSnake() {
    if(body[body.length - 1][0]+direction[0] === pos[0] && body[body.length - 1][1]+direction[1] === pos[1]){
        body.push([body[body.length - 1][0]+direction[0],body[body.length - 1][1]+direction[1]]);
        spawnApple(body);
    }else{
        body.push([body[body.length - 1][0]+direction[0],body[body.length - 1][1]+direction[1]]);
        body.shift();
    }
}

function draw() {
    for (let i = 0; i < 20; i++) {
        for (let j = 0; j < 20; j++) {
            let pixel = document.getElementById(i * 20 + j);
            pixel.className = "board";
        }
    }
    for(let i = 0; i < body.length; i++){
    let pixel = document.getElementById(body[i][0] * 20 + body[i][1]);
    pixel.className = "body";
    }
    let pixel = document.getElementById(pos[0] * 20 + pos[1]);
    pixel.className = "apple";
}

requestAnimationFrame(gameLoop);


draw();
spawnApple(body);
gameLoop(currentTime);
