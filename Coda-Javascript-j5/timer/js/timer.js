const smallHand = document.getElementById("hand-small");
const bigHand = document.getElementById("hand-big");
const giantHand = document.getElementById("hand-giant");
let startButtonValue = false;
let resetButtonValue = false
let elapsed;
let lastElapsed = 0;
let startTime;
let intervalId;
let interval = null;

function startTimer() {
    startButtonValue = !startButtonValue;

    if(startButtonValue === true){
        startTime = Date.now();
        intervalId = setInterval(() => {
            elapsed = Date.now() - startTime + lastElapsed;

            const minutes = Math.floor(elapsed / 60000);
            const seconds = Math.floor((elapsed % 60000) / 1000);
            const milliseconds = elapsed % 1000;

            const MM = String(minutes).padStart(2, "0");
            const SS = String(seconds).padStart(2, "0");
            const MS = String(milliseconds).padStart(3, "0");

            document.getElementById("display").textContent = `${MM}:${SS}:${MS}`;
            giantHand.style.transform = "rotate("+milliseconds * (360/1000)+"deg)";
            bigHand.style.transform = "rotate("+seconds * 6+"deg)";
            smallHand.style.transform = "rotate("+minutes * 6+"deg)";
        }, 1);
    }else{
        clearInterval(intervalId);
        lastElapsed = elapsed;
    }
}

function resetTimer() {
    clearInterval(intervalId);
    interval = null;
    lastElapsed = 0;
    startButtonValue = false;
    document.getElementById("display").textContent = "00:00:0000";
    smallHand.style.transform = "rotate(0deg)";
    bigHand.style.transform = "rotate(0deg)";
    giantHand.style.transform = "rotate(0deg)";
}