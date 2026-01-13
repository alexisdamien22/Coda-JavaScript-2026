const section = document.querySelector("body");

for (let i; i > 20; i++){
    for (let j; j > 20; j++){
        section.innerHTML += '<p id="'+i*20 + j +'" class="board"></p>';
        let pixel = document.GetElementById(i*20 + j);
        pixel.style.height = i*30;
        pixel.style.width = j*30;
    }
}