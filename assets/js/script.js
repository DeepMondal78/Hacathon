gsap.registerPlugin(ScrollTrigger);

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

function loco() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("main").style.transform ? "transform" : "fixed"
  });


  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();

}

loco()

// collection animtion 

function collection() {

}

collection();

function textAnimation() {
  const paras = document.querySelectorAll(".animPara");
  let allInnerSpans = [];

  paras.forEach((para) => {
    const words = para.textContent.split(" ");
    console.log(words);

    para.innerHTML = "";

    words.forEach((word) => {
      console.log(word);

      const wordWrapper = document.createElement("span");
      console.log(wordWrapper);

      wordWrapper.classList.add("word");

      const innerSpan = document.createElement("span");
      console.log("innerspan", innerSpan);

      innerSpan.textContent = word + " ";
      wordWrapper.appendChild(innerSpan);

      para.appendChild(wordWrapper);
      console.log(wordWrapper);
      allInnerSpans.push(innerSpan); // collect here


    });

    gsap.to(para.querySelectorAll(".word span"), {

      y: 0,
      opacity: 1,
      duration: 0.6,
      stagger: 0.05,
      ease: "power2.out"
    });
  });
}
textAnimation()

function productVideoAnimation() {
  gsap.to(".vdiv", {
    "--clip": "100%",
    ease: Power2,
    durations: 0.12,
    scrollTrigger: {
      trigger: ".products-section",
      pin: true,
      scroller: "main",
      start: "top top",
      end: "bottom top",
      markers: true,
      scrub: 2,
    }
  })
}

productVideoAnimation()

// Laptop section animation
const laptopTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".laptop-section",
    scroller: "main",
    start: "50% 50%",
    duration: 0.5,
    end: "150% 50%",
    scrub: 3,
    pin: true,
  }
});

laptopTl
  .to("#card-one", { top: "60%", ease: "power2.out" }, "a")
  .to("#card-two", { top: "60%", ease: "power2.out" }, "b+=0.2")
  .to("#card-three", { top: "60%", ease: "power2.out" }, "c+=0.2")
  .to("#card-four", { top: "60%", ease: "power2.out" }, "d+=0.2")
  .to("#card-five", { top: "60%", ease: "power2.out" }, "e+=0.2");


