const num1 = Math.ceil(Math.random() * 10); // 1 to 10 random numbers
const num2 = Math.ceil(Math.random() * 10);

const questionEl = document.getElementById('question');
const inputEl = document.getElementById('input');

const formEl = document.getElementById('form');

const scoreEl = document.getElementById('score');
let score = JSON.parse(localStorage.getItem('score'));

if (!score) {
  score = 0;
}

scoreEl.innerHTML = `${score}`;

questionEl.innerHTML = `What is ${num1} multiply by ${num2} ?`;

const correctAns = num1 * num2;

formEl.addEventListener('submit', () => {
  const user_ans = Number(inputEl.value);
  //console.log(user_ans);
  if (user_ans === correctAns) {
    score++;
    updateLocalStorage();
  } else {
    score--;
    updateLocalStorage();
  }
});

function updateLocalStorage() {
  localStorage.setItem('score', JSON.stringify(score));
}
