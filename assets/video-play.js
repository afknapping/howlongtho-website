(function () {
  var wrap = document.querySelector(".video-wrap");
  if (!wrap) return;
  var video = wrap.querySelector("video");
  var overlay = wrap.querySelector(".play-overlay");
  overlay.addEventListener("click", function () {
    video.play();
  });
  video.addEventListener("play", function () {
    overlay.classList.add("hidden");
  });
  video.addEventListener("pause", function () {
    overlay.classList.remove("hidden");
  });
  video.addEventListener("ended", function () {
    overlay.classList.remove("hidden");
  });
})();
