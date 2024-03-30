const text = document.querySelector(".special");
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";

for (let i = 0; i < splitText.length; i++) {
    text.innerHTML += "<span>" + splitText[i] + "</span>"
}


let char = 0;
let timer = setInterval(Timer, 200);

function Timer() {
    while (1 == 1) {
        const span = text.querySelectorAll('span')[char];
        span.classList.add('fade');
        char++;
    }
}


