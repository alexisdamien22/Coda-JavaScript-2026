const box = document.querySelector(".demo-box");

function toggleRounded() {
    box.classList.toggle("rounded");
}
function toggleShadow() {
    box.classList.toggle("shadow");
}
function toggleBorder() {
    box.classList.toggle("bordered");
}
function toggleGradient() {
    box.classList.toggle("gradient");
}
function toggleAnimation() {
    box.classList.toggle("animated");
}
function resetBox() {
    box.classList.remove('rounded', 'shadow', 'bordered', 'gradient', 'animated');
    box.style.backgroundColor = "#007bff";
    box.style.height = "300px";
    box.style.width = "300px";
}
function changeColor(color) {
    if (color === 'blue'){
        box.style.backgroundColor = "#007bff";
    }else if (color === 'red'){
        box.style.backgroundColor = "#ff0019";
    }else if (color === 'green'){
        box.style.backgroundColor = "#7bff00";
    }
}
function changeSize(size) {
    if (size === "small"){
        box.style.height = "100px";
        box.style.width = "100px";
    }else if (size === "medium"){
        box.style.height = "200px";
        box.style.width = "200px";
    }else if (size === "large"){
        box.style.height = "300px";
        box.style.width = "300px";
    }
}

function toggleTheme() {
    //code
}
function highlightCards(style) {
    //code
}
highlightCards('highlight');
highlightCards('success');
highlightCards('danger');
highlightCards('none');

