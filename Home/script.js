document.addEventListener("DOMContentLoaded", ()=> {

    // ==== NavMenu Mouse Hover Animetion ====
    
    function animateMenuItem(el) {
        let letters = el.textContent.split('').map(letter => {
            return `<span data-letter="${letter}">${letter}</span>`;
        }).join('');
        el.innerHTML = letters;
    }
    
    document.querySelectorAll('.menu-item').forEach(item => {
        animateMenuItem(item);
        let chars = item.querySelectorAll('span');
        item.addEventListener('mouseenter', () => {
            gsap.to(chars, { y: '-100%', stagger: 0.03, ease: "power4.easeOut" });
        });
        item.addEventListener('mouseleave', () => {
            gsap.to(chars, { y: '0%', stagger: 0.03, ease: "power4.easeOut" });
        });
    });

    // ==== Cursor Hover Animetion ====

});
// ==== Hero Section Watch Animetion ====
const watchImages = [
    "/Home/image/image(1).png",
    "/Home/image/image(2).png",
    "/Home/image/image(3).png",
    "/Home/image/image(4).png",
    "/Home/image/image(5).png"
  ];
  
  let currentIndex = 0;
  const watchImg = document.getElementById("watch-img");
  
  function updateImage() {
    watchImg.style.opacity = 0;
    setTimeout(() => {
      watchImg.src = watchImages[currentIndex];
      watchImg.style.opacity = 1;
    }, 300);
  }
  
  setInterval(() => {
    currentIndex = (currentIndex + 1) % watchImages.length;
    updateImage();
  }, 3000);
  

// ==== CircleText Animetion ====
const text = document.getElementById("image-text");
const content = "• APPLE WATCH • SERIES 6 • 44MM ALUMINUM & CERAMIC CASE • ION-X GLASS • GPS • LTE • WR-50M •";

const chars = content.split("");
const angle = 360 / chars.length; // Auto spacing

text.innerHTML = chars
  .map(
    (char, i) =>
      `<span class="char" style="transform: rotate(${i * angle}deg);">${char}</span>`
  )
  .join("");
