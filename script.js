let allButtons = document.querySelectorAll("button");
let display = document.querySelector("input");
// console.log(allButtons);
allButtons.forEach((button) => {
  button.addEventListener("mousedown", downShadow);
  button.addEventListener("mouseup", upShadow);
  button.addEventListener("click", (e) => {
    let element = e.target.innerText;
    if (element == "=") {
      display.value = eval(display.value);
    } else if (element == "C") {
      display.value = "";
    } else if (element == "D") {
      let lastChar = display.value.length - 1;
      display.value = display.value.substring(0, lastChar);
    } else if (element == "X") {
      display.value += "*";
    } else {
      display.value += element;
    }
  });
});
function downShadow(e) {
  e.target.style.boxShadow =
    "inset 2px 2px 5px rgb(35, 255, 196),  2px 2px 0px #fff";
}
function upShadow(e) {
  e.target.style.boxShadow =
    " 2px 2px 5px rgb(35, 255, 196),inset  2px 2px 0px #fff";
}
