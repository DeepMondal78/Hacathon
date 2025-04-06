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