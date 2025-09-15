

let countResult = document.getElementById("count");
let incBtn = document.getElementById("increment");
let decBtn = document.getElementById("decrement");
let count = 0;


const increment = () => {
    count += 5;
    countResult.textContent = count;
}
const decrement = () => {
    count--;
    countResult.textContent = count;
}

incBtn.addEventListener("click", increment);
decBtn.addEventListener("click", decrement);



