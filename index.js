const incrementBtn = document.getElementById("increment-btn");
const countEL = document.getElementById("count-el");
const entry = document.getElementById("entries");

let counter = 0;

function increment() {
  counter += 1;
  countEL.innerHTML = counter;
}

function save() {
  String(counter);
  entry.textContent += counter + " | ";
  countEL.textContent = 0;
  counter = 0;
}
