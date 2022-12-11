const inputEl = document.querySelector('.input');

const bodyEl = document.querySelector('body');
const headingEl = document.querySelector('h1');
// inputEl.checked = true; // black background

updateBody();

function updateBody() {
  if (inputEl.checked) {
    bodyEl.style.background = 'black';
    bodyEl.style.color = 'white';
    headingEl.classList.add('title');
  } else {
    bodyEl.style.background = 'white';
    bodyEl.style.color = 'black';
    headingEl.classList.remove('title');
  }
}

inputEl.addEventListener('input', () => {
  updateBody();
});
