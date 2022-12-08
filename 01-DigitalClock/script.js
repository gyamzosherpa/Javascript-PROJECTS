function updateClock() {
  const hours = document.getElementById('hour');
  const minutes = document.getElementById('minutes');
  const seconds = document.getElementById('seconds');
  const am_pm = document.getElementById('am-pm');

  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = 'AM';

  if (h > 12) {
    h = h - 12;
    ampm = 'PM';
  }

  // TERNARY OPERATOR
  h = h < 10 ? '0' + h : h;
  m = m < 10 ? '0' + m : m;
  s = s < 10 ? '0' + s : s;

  hours.innerText = h;
  minutes.innerText = m;
  seconds.innerText = s;
  am_pm.innerText = ampm;

  setTimeout(() => {
    updateClock();
  }, 1000);
}

updateClock();
