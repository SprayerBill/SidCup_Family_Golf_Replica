var crsr = document.querySelector("#cursor");
var blurcr = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (dets) {
  crsr.style.left = `${dets.x}px`;
  crsr.style.top = `${dets.y}px`;
  blurcr.style.left = `${dets.x - 170}px`;
  blurcr.style.top = `${dets.y - 120}px`;
});
var nav = document.querySelectorAll("#nav a");

nav.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    crsr.style.scale = "3";
    crsr.style.border = ".5px solid #fff";
    crsr.style.backgroundColor = "transparent";
  });
  elem.addEventListener("mouseleave", function () {
    crsr.style.scale = "1";
    crsr.style.border = "none";
    crsr.style.backgroundColor = "#95C11E";
  });
});

var card = document.querySelectorAll(".card");

card.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    crsr.style.scale = "3";
    crsr.style.border = ".5px solid #fff";
    crsr.style.backgroundColor = "transparent";
    elem.style.transform = "rotateY(-3deg)";
  });
  elem.addEventListener("mouseleave", function () {
    crsr.style.scale = "1";
    crsr.style.border = "none";
    crsr.style.backgroundColor = "#95C11E";
    elem.style.transform = "rotateY(0deg)";
  });
});

var foot = document.querySelectorAll("#footer h3");

foot.forEach(function (dets) {
  dets.addEventListener("mouseenter", function () {
    dets.style.color = "#fff";
    crsr.style.scale = "3";
    crsr.style.border = ".5px solid #fff";
    crsr.style.backgroundColor = "transparent";
  });
  dets.addEventListener("mouseleave", function () {
    dets.style.color = "#000";
    crsr.style.scale = "1";
    crsr.style.border = "none";
    crsr.style.backgroundColor = "#95C11E";
  });
});

var footimg = document.querySelector("#footer #f1");

footimg.addEventListener("mouseenter", function () {
  footimg.style.scale = ".8";
  crsr.style.scale = "3";
  crsr.style.border = ".5px solid #fff";
  crsr.style.backgroundColor = "transparent";
});
footimg.addEventListener("mouseleave", function () {
  footimg.style.scale = "1";
  crsr.style.scale = "1";
  crsr.style.border = "none";
  crsr.style.backgroundColor = "#95C11E";
});

var footicon = document.querySelectorAll("#icon1 i");
footicon.forEach(function (dets) {
  dets.addEventListener("mouseenter", function () {
    dets.style.color = "#fff";
    crsr.style.scale = "3";
    crsr.style.border = ".5px solid #fff";
    crsr.style.backgroundColor = "transparent";
  });
  dets.addEventListener("mouseleave", function () {
    dets.style.color = "#000";
    crsr.style.scale = "1";
    crsr.style.border = "none";
    crsr.style.backgroundColor = "#95C11E";
  });
});

gsap.to("#nav", {
  backgroundColor: "#000",
  height: "100px",
  duration: 0.5,
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    // markers:true,
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});

gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroll: "body",
    // markers: true,
    start: "top -25%",
    end: "top -85%",
    scrub: 2,
  },
});

gsap.from("#info img,#mid-txt", {
  y: 50,
  opacity: 0,
  duration: 1,
  stagger: 0.4,
  scrollTrigger: {
    trigger: "#info",
    scroll: "body",
    // markers:true,
    start: "top 65%",
    end: "top 55%",
    scrub: 1,
  },
});

gsap.from(".card", {
  scale: 0.8,
  opacity: 0,
  duration: 0.5,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".card",
    scroll: "body",
    // markers:true,
    start: "top 70%",
    end: "top 65%",
    scrub: 0.5,
  },
});

gsap.from("#colon1", {
  y: -70,
  x: -70,
  scrollTrigger: {
    trigger: "#colon1",
    scroll: "body",
    // markers:true,
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});

gsap.from("#colon2", {
  y: 50,
  x: 70,
  scrollTrigger: {
    trigger: "#colon1",
    scroll: "body",
    // markers:true,
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});

gsap.from("#page4 h1", {
  y: 50,
  scrollTrigger: {
    trigger: "#page4 h1",
    scroller: "body",
    // markers:true,
    start: "top 75%",
    end: "top 70%",
    scrub: 3,
  },
});
