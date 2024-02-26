const btn = document.querySelector("button.change-color");
const span = document.querySelector(".color");

btn.addEventListener("click", handleSubmit);
function handleSubmit(event) {
    const randomColor = getRandomHexColor();
    document.body.style.backgroundColor = randomColor;
    span.textContent = randomColor;
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}



