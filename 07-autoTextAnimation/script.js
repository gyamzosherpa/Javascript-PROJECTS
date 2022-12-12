const containerEl = document.querySelector('.container');

const careers = ['Youtuber', 'Web Developer', 'Freelancer', 'Content Creator'];

let careersIndex = 0; //default

let charIndex = 0;

updateText();

function updateText() {
  charIndex++;
  containerEl.innerHTML = `<h1>I m a ${careers[careersIndex].slice(
    0,
    charIndex
  )}</h1>`;

  if (charIndex === careers[careersIndex].length) {
    careersIndex++;
    charIndex = 0;
  }

  if (careersIndex === careers.length) {
    careersIndex = 0;
  }

  setTimeout(() => {
    updateText();
  }, 500);
}
