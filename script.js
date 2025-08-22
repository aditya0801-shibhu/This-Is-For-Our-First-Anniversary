// Celebration Button Confetti
document.getElementById("celebrateBtn").addEventListener("click", () => {
  confetti({
    particleCount: 200,
    spread: 120,
    origin: { y: 0.7 }
  });
});

// Floating Hearts
const heartsContainer = document.querySelector('.hearts');

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.innerHTML = '❤️';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.fontSize = Math.random() * 20 + 15 + 'px';
  heart.style.animationDuration = (6 + Math.random() * 4) + 's';
  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 10000);
}

setInterval(createHeart, 500);
