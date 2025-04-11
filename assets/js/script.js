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

// collection animtion 
function collection() {

}

function textAnimation() {
  const paras = document.querySelectorAll(".animPara");
  let allInnerSpans = [];

  paras.forEach((para) => {
    const words = para.textContent.split(" ");
    // console.log(words);

    para.innerHTML = "";

    words.forEach((word) => {
      // console.log(word);

      const wordWrapper = document.createElement("span");
      // console.log(wordWrapper);

      wordWrapper.classList.add("word");

      const innerSpan = document.createElement("span");
      // console.log("innerspan", innerSpan);

      innerSpan.textContent = word + " ";
      wordWrapper.appendChild(innerSpan);

      para.appendChild(wordWrapper);
      // console.log(wordWrapper);
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

function productVideoAnimation() {

  gsap.to(".vdiv", {
    "--clip": "100%",
    ease: Power2.easeOut,
    duration: 0.12,
    scrollTrigger: {
      trigger: ".products-section",
      pin: true,
      scroller: "main",
      start: "top top",
      end: "bottom top",
      scrub: 2,
    }
  })


}

let circle = document.querySelector(".circle");
let video = document.querySelector("video");

console.log("circle:", circle);
console.log("video:", video);

circle.addEventListener("click", () => {
  console.log("Clicked");

  if (video.paused) {
    video.play();
    console.log("Playing");
  } else {
    video.pause();
    console.log("Paused");
  }
});

// gsap.from(".card", {
//   scrollTrigger: {
//     trigger: ".card-grid",
//     scroller: "main",
//     start: "top 50%",
//     end: "bottom 100%",
//     scrub: 2,
//     markers: true,
//   },
//   scale: 1.2,
//   opacity: 0,
//   duration: 0.5,
//   stagger: 0.3,
// });


// Laptop section animation
function laptopSectionnAnimtion() {
  const laptopTl = gsap.timeline({
    defaults: { ease: "power2.out", duration: 1 },
    scrollTrigger: {
      trigger: ".laptop-section",
      scroller: "main",
      start: "top top",
      end: "+=2500",
      scrub: 1.5,
      pin: true,
      // markers: true,
    }
  });

  laptopTl
    .to("#card-one", { top: "60%" }, "start")
    .to("#card-two", { top: "60%" }, "start+=0.3")
    .to("#card-three", { top: "60%" }, "start+=0.6")
    .to("#card-four", { top: "60%" }, "start+=0.9")
    .to("#card-five", { top: "60%" }, "start+=1.2");
}

function earbudsAnimaion() {
  VanillaTilt.init(document.querySelectorAll(".earbuds-card"), {
    max: 25,
    speed: 400,
    glare: true,
    "max-glare": 0.3,
    scale: 1.05,
    easing: "cubic-bezier(.03,.98,.52,.99)",
    perspective: 1000
  });

  VanillaTilt.init(document.querySelectorAll(".card"), {
    max: 25,
    speed: 400,
    glare: true,
    "max-glare": 0.3,
    scale: 1.05,
    easing: "cubic-bezier(.03,.98,.52,.99)",
    perspective: 1000
  });
}

function imgEffectShowCase() {
  const imgArry = [
    { url: "https://picsum.photos/id/1060/200/200" },
    { url: "https://picsum.photos/id/1060/200/200" },
    { url: "https://picsum.photos/id/1060/200/200" },
    { url: "https://picsum.photos/id/1060/200/200" },
    { url: "https://picsum.photos/id/1060/200/200" },
    { url: "https://picsum.photos/id/1060/200/200" },
    { url: "https://picsum.photos/id/1060/200/200" },
    { url: "https://picsum.photos/id/1060/200/200" },
    { url: "https://picsum.photos/id/1060/200/200" },
    { url: "https://picsum.photos/id/1070/200/200" },
  ];


  const throttleFunction = (func, delay) => {
    let prev = 0;
    return (...args) => {
      let now = new Date().getTime();
      if (now - prev > delay) {
        prev = now;
        func(...args);
      }
    };
  };

  let container = document.querySelector(".main-heading");

  container.addEventListener("mousemove", throttleFunction((e) => {
    // Create wrapper div
    let creatediv = document.createElement("div");
    creatediv.classList.add("imgdiv");
    creatediv.style.position = "absolute";
    creatediv.style.left = `${e.clientX - 100}px`;
    creatediv.style.top = `${e.clientY - 100}px`;

    // Get random image
    const randomIndex = Math.floor(Math.random() * imgArry.length);
    const randomImage = imgArry[randomIndex];

    // Create image element
    let createimg = document.createElement("img");
    createimg.setAttribute("src", randomImage.url);
    createimg.style.width = "100%";
    createimg.style.height = "100%";
    createimg.style.objectFit = "cover";

    creatediv.appendChild(createimg);
    console.log(creatediv);
    console.log(createimg);


    container.appendChild(creatediv);


    gsap.to(createimg, {
      y: "0%",
      opacity: 1,
      duration: 0.6,
      ease: "power2.out"
    });


    gsap.to(createimg, {
      y: "-100%",
      opacity: 0,
      delay: 1.5,
      duration: 0.8,
      ease: "power2.in",
      onComplete: () => creatediv.remove()
    });

  }, 300));
}

loco();
collection();
textAnimation();
productVideoAnimation();
laptopSectionnAnimtion();
earbudsAnimaion();
imgEffectShowCase();


