/* ===============================
   Smooth Scroll on "Tap to begin"
   =============================== */
   document.addEventListener("DOMContentLoaded", () => {
    const btnStart = document.getElementById("btnStart");
    const storySection = document.getElementById("story");
  
    if (btnStart && storySection) {
      btnStart.addEventListener("click", () => {
        storySection.scrollIntoView({ behavior: "smooth" });
      });
    }
  
    /* ===============================
       Scroll Reveal Animation
       =============================== */
    const revealElements = document.querySelectorAll(
      ".section, .story-block, .timeline-item, .love-card, .reasons-item, .gallery-item, .proposal-inner"
    );
  
    const revealOnScroll = () => {
      revealElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.88) {
          el.classList.add("reveal--visible");
        }
      });
    };
  
    revealElements.forEach((el) => el.classList.add("reveal"));
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
  
    /* ===============================
       WhatsApp Redirect on YES
       =============================== */
    const btnYes = document.getElementById("btnYes");
    const btnOfCourse = document.getElementById("btnOfCourse");
  
    const whatsappNumber = "2347086865133"; // your number without the +
    const message = encodeURIComponent("Micheal, I want to be your girlfriend 💕");
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;
  
    const redirectToWhatsApp = () => {
      window.location.href = whatsappLink;
    };
  
    if (btnYes) btnYes.addEventListener("click", redirectToWhatsApp);
    if (btnOfCourse) btnOfCourse.addEventListener("click", redirectToWhatsApp);
  
  });
  
