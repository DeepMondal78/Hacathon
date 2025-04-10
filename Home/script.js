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
    function cursor() {
        const cursor = document.querySelector(".cursor");
        let mouseX = 0;
        let mouseY = 0;
        let currentX = 0;
        let currentY = 0;
        const speed = 0.1; 
      
        document.body.addEventListener("mousemove", (e) => {
          mouseX = e.clientX;
          mouseY = e.clientY;
        });
      
        function animate() {
          currentX += (mouseX - currentX) * speed;
          currentY += (mouseY - currentY) * speed;
          cursor.style.left = currentX + "px";
          cursor.style.top = currentY + "px";
          requestAnimationFrame(animate);
        }
      
        animate();
      }
      
      cursor();

});

const watchImages = [
    "/Home/image/Home-hero-watch.png",
    "/Home/image/image.png",
    "/Home/image/image2.png",
    "/Home/image/watch4.png",
    "/Home/image/watch5.png"
];

let currentIndex = 0;
const watchImg = document.getElementById("watch-img");
const nextBtn = document.getElementById("next-watch");
const prevBtn = document.getElementById("prev-watch");

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % watchImages.length;
    watchImg.src = watchImages[currentIndex];
});

prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + watchImages.length) % watchImages.length;
    watchImg.src = watchImages[currentIndex];
});

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
