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

productVideoAnimation()

let circle = document.querySelector(".cricle");
let video = document.querySelector("video");
video.pause();

circle.addEventListener("click", () => {
  console.log("hello");

  if (video.paused) {
    video.play();
    console.log("video is playing");
  } else {
    video.pause();
    console.log("video is paused");
  }
});
// Laptop section animation
function laptopSectionnAnimtion() {
  const laptopTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".laptop-section",
      scroller: "main",
      start: "50% 50%",
      duration: 0.5,
      dealy: 0.7,
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


}

laptopSectionnAnimtion()

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

const imgArry = [
  { url: "https://images.unsplash.com/photo-1632794716789-42d9995fb5b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { url: "https://images.unsplash.com/photo-1542541864-4abf21a55761?q=80&w=2006&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { url: "https://images.unsplash.com/photo-1553545204-4f7d339aa06a?q=80&w=1993&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { url: "https://images.unsplash.com/photo-1619037961428-e6410a7afd38?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { url: "https://images.unsplash.com/photo-1631281956016-3cdc1b2fe5fb?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { url: "https://images.unsplash.com/photo-1523395451704-22c6fb0522cf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { url: "https://images.unsplash.com/photo-1660844817855-3ecc7ef21f12?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { url: "https://images.unsplash.com/photo-1658993376064-dd47b2da0e97?q=80&w=1951&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
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