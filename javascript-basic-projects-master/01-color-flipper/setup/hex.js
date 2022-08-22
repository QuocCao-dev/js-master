const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.querySelector("#btn");
const text = document.querySelector(".color");
const main = document.querySelector("main");

const generateRandomColor = () => {
  // create random index
  const randomIndex = Math.floor(Math.random() * hex.length);
  return hex[randomIndex];
};

const clickBtn = () => {
  // Sinh ra mã màu hex:
  let hexColor = "#";
  for (let i = 1; i <= 6; i++) {
    const randomColor = generateRandomColor();
    hexColor += randomColor;
  }

  text.innerHTML = hexColor;
  text.style.color = hexColor;
  main.style.backgroundColor = hexColor;
};

btn.addEventListener("click", clickBtn);
