let increaseBtn = document.getElementById("increase");
let decreaseBtn = document.getElementById("decrease");
let resetBtn = document.getElementById("reset");
let counter = document.querySelector(".counter");

/**
 Convert from string to number:
 1. +string => number
 2. Number(string) => number
 3. parseInt(string) / parseFloat(string) => number

 to identify whether the string is a number or not, use isNaN()
 isNan(string) => boolean => true if string is not a number
 */

// number => string : String(number)

const increase = () => (counter.innerHTML = +counter.innerHTML + 1);
const decrease = () => (counter.innerHTML = +counter.innerHTML - 1);
const reset = () => (counter.innerHTML = 0);

increaseBtn.addEventListener("click", increase);
decreaseBtn.addEventListener("click", decrease);
resetBtn.addEventListener("click", reset);
