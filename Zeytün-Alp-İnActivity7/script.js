const button = document.getElementById('gameButton');
const levelInfo = document.getElementById('levelInfo');

let level = 1;
let clicks = 0;
let timeout = 500;

function moveButton() {
  const top = Math.random() * (window.innerHeight - 50);
  const left = Math.random() * (window.innerWidth - 100);
  
  button.style.top = top + 'px';
  button.style.left = left + 'px';
}

function updateLevelInfo() {
  levelInfo.textContent = `Level: ${level} | Clicks: ${clicks}/3`;
}

button.addEventListener('mouseover', () => {
  setTimeout(() => {
    moveButton();
  }, timeout);
});

button.addEventListener('click', () => {
  clicks++;
  if (clicks >= 3) {
    if (level >= 6) {
      alert('You win the game! Final Level reached!');
      button.disabled = true;
      return;
    }
    level++;
    clicks = 0;
    timeout = Math.max(0, timeout - 100);
    alert(`Level ${level} reached!`);
  }
  updateLevelInfo();
});
