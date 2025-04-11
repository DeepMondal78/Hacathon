document.addEventListener("DOMContentLoaded", () => {

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
    "./assets/images/image(1).webp",
    "./assets/images/image(2).webp",
    "./assets/images/image(3).webp",
    "./assets/images/image(4).webp",
    "./assets/images/image(5).webp",
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

// ==== Hover Image Animetion ====

const smarts = document.querySelectorAll(".smart");
const preview = document.querySelector(".image-preview");
const previewImg = document.getElementById("preview-img");

smarts.forEach((smart) => {
    const pTag = smart.querySelector("p");

    smart.addEventListener("mouseenter", () => {
        const imgSrc = smart.getAttribute("data-image");
        previewImg.src = imgSrc;

        const rect = pTag.getBoundingClientRect();

        preview.style.display = "block";

        gsap.to(preview, {
            x: rect.left,
            y: rect.top - 240,
            opacity: 1,
            duration: 0.5,
            ease: "power3.out"
        });
    });

    smart.addEventListener("mouseleave", () => {
        gsap.to(preview, {
            opacity: 0,
            duration: 0.4,
            ease: "power2.inOut",
            onComplete: () => {
                preview.style.display = "none";
            }
        });
    });
});


