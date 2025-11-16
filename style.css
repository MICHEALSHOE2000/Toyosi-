// MUSIC CONTROL
const music = document.getElementById("bg-music");
const musicBtn = document.getElementById("music-btn");

if (music && musicBtn) {
  let isPlaying = false;

  musicBtn.addEventListener("click", () => {
    if (!isPlaying) {
      music.play().then(() => {
        isPlaying = true;
        musicBtn.textContent = "Pause Love Song ⏸️";
      }).catch(() => {
        // If browser blocks autoplay, user will have to tap again
      });
    } else {
      music.pause();
      isPlaying = false;
      musicBtn.textContent = "Play Love Song 🎵";
    }
  });
}

// FLOATING HEARTS
function createHeart(x, y) {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.textContent = "💗";
  heart.style.left = x + "px";
  heart.style.top = y + "px";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 3000);
}

// Hearts on click
document.addEventListener("click", (e) => {
  createHeart(e.clientX, e.clientY);
});

// Gentle random hearts floating
setInterval(() => {
  const x = Math.random() * window.innerWidth;
  const y = window.innerHeight - 50;
  createHeart(x, y);
}, 1200);
