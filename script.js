// Event Button for Background
const body = document.getElementsByTagName("body")[0];
const button = document.getElementsByTagName("button")[0];
button.addEventListener("click", function () {
  body.classList.toggle("coklat-tua");
});

// Create Button for Random Background
const teksButton2 = document.createTextNode("Bg Random");
const button2 = document.createElement("button");
button2.appendChild(teksButton2);
button.after(button2);

// Event Button for Random Background
button2.addEventListener("click", function () {
  const red = Math.round(Math.random() * 255 + 0);
  const green = Math.round(Math.random() * 255 + 0);
  const blue = Math.round(Math.random() * 255 + 0);
  body.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
});

// Event for Slider
const sRed = document.getElementsByTagName("input")[0];
sRed.addEventListener("input", function () {
  const redValue = sRed.value;
  const greenValue = sGreen.value;
  const blueValue = sBlue.value;
  body.style.backgroundColor =
    "rgb(" + redValue + "," + greenValue + "," + blueValue + ")";
});

const sGreen = document.getElementsByTagName("input")[1];
sGreen.addEventListener("input", function () {
  const redValue = sRed.value;
  const greenValue = sGreen.value;
  const blueValue = sBlue.value;
  body.style.backgroundColor =
    "rgb(" + redValue + "," + greenValue + "," + blueValue + ")";
});

const sBlue = document.getElementsByTagName("input")[2];
sBlue.addEventListener("input", function () {
  const redValue = sRed.value;
  const greenValue = sGreen.value;
  const blueValue = sBlue.value;
  body.style.backgroundColor =
    "rgb(" + redValue + "," + greenValue + "," + blueValue + ")";
});

// Event for Document
body.addEventListener("mousemove", function (event) {
  const xPos = Math.round((event.clientX / window.innerWidth) * 255 + 0);
  const yPos = Math.round((event.clientY / window.innerHeight) * 255 + 0);
  body.style.backgroundColor = "rgb(" + xPos + "," + yPos + ", 100)";
});
