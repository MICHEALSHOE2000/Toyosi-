// Wait until the DOM fully loads
document.addEventListener("DOMContentLoaded", function () {

    // ===============================
    // SMOOTH SCROLL
    // ===============================
    const scrollBtn = document.getElementById("scrollDown");

    if (scrollBtn) {
        scrollBtn.addEventListener("click", function () {
            const celebrationSection = document.querySelector(".celebration-section");
            if (celebrationSection) {
                celebrationSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    }


    // ===============================
    // TYPEWRITER EFFECT
    // ===============================
    const text = "You are my peace, my joy, my answered prayer. Every day with you feels like Valentine’s Day. ❤️";
    const typewriterElement = document.getElementById("typewriter");

    let index = 0;

    function typeWriter() {
        if (typewriterElement && index < text.length) {
            typewriterElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, 50);
        }
    }

    typeWriter();


    // ===============================
    // MUSIC TOGGLE
    // ===============================
    const music = document.getElementById("bgMusic");
    const musicToggle = document.getElementById("musicToggle");

    if (music && musicToggle) {
        musicToggle.addEventListener("click", function () {
            if (music.paused) {
                music.play();
                musicToggle.textContent = "⏸ Pause Music";
            } else {
                music.pause();
                musicToggle.textContent = "🎵 Play Music";
            }
        });
    }


    // ===============================
    // SURPRISE POPUP
    // ===============================
    const valentineBtn = document.getElementById("valentineBtn");
    const popup = document.getElementById("surprisePopup");
    const closePopup = document.getElementById("closePopup");

    if (valentineBtn && popup) {
        valentineBtn.addEventListener("click", function () {
            popup.style.display = "flex";
            launchConfetti();
        });
    }

    if (closePopup && popup) {
        closePopup.addEventListener("click", function () {
            popup.style.display = "none";
        });
    }


    // ===============================
    // FLOATING HEARTS
    // ===============================
    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "💖";

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = Math.random() * 20 + 20 + "px";
        heart.style.animationDuration = Math.random() * 3 + 3 + "s";

        document.body.appendChild(heart);

        setTimeout(function () {
            heart.remove();
        }, 6000);
    }

    setInterval(createHeart, 800);


    // ===============================
    // CONFETTI
    // ===============================
    function launchConfetti() {
        for (let i = 0; i < 80; i++) {
            const confetti = document.createElement("div");
            confetti.classList.add("confetti");

            confetti.style.left = Math.random() * 100 + "vw";
            confetti.style.backgroundColor = randomColor();
            confetti.style.animationDuration = Math.random() * 3 + 2 + "s";

            document.body.appendChild(confetti);

            setTimeout(function () {
                confetti.remove();
            }, 5000);
        }
    }

    function randomColor() {
        const colors = ["#ff4d6d", "#d00000", "#ff8fab", "#ffd6e0"];
        return colors[Math.floor(Math.random() * colors.length)];
    }

});
