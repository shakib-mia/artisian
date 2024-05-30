import AOS from "aos";
import "aos";

AOS.init();

const lenis = new Lenis();

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
      "https://www.youtube.com/embed/xcJtL7QggTI?si=1Foi26HSTSFzNqJT";
  }
  // if (video) {
  //   video.pause();
  // }

  // if (audio) {
  //   audio.pause();
  // }
});
