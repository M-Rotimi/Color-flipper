const colors = ["green", "red", "rgba(133,122,200)", "black", "white", "purple", "salmon", "coral", "rgb", "yellow", "blue", "cyan", "tan", "magenta", "azure", "gray", "oldlace", "beige", "rose","gainsboro", "skyblue", "navy", "wheat", "peru", "brown", "snow"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  // console.log(randomNumber);

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}