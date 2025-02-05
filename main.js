import AOS from "aos";
import "aos";

AOS.init({
  once: true,
});

const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smooth: true,
});
lenis.on("scroll", (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

document.getElementById("video-check").addEventListener("change", (e) => {
  var iframe = document.getElementById("video");
  // var innerDoc = iframe.contentDocument || iframe.contentWindow.document;

  // var video = innerDoc.querySelector("video");
  // var audio = innerDoc.querySelector("audio");
  // console.log(iframe.src);
  if (!e.target.checked) {
    setTimeout(() => (iframe.src = ""), 500);
  } else {
    iframe.src =
      "https://www.youtube.com/embed/Os1oDqefGOA?si=ZNoNK5qI3_0xqDn8";
  }
  // if (video) {
  //   video.pause();
  // }

  // if (audio) {
  //   audio.pause();
  // }
});

const date = new Date();

// console.log(date.getFullYear());
document.getElementById("year").innerText = date.getFullYear();
