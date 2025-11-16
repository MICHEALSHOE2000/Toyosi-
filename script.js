document.addEventListener("click", () => {
  const heart = document.createElement("div");
  heart.textContent = "💗";
  heart.style.position = "fixed";
  heart.style.left = Math.random() * innerWidth + "px";
  heart.style.top = Math.random() * innerHeight + "px";
  heart.style.fontSize = "24px";
  heart.style.opacity = "1";
  heart.style.transition = "opacity 2s linear";
  document.body.appendChild(heart);
  setTimeout(() => (heart.style.opacity = "0"), 100);
  setTimeout(() => heart.remove(), 2000);
});
