const startBtn = document.getElementById("startBtn");
const timeText = document.getElementById("time");
const circle = document.getElementById("timerCircle");

let totalTime = 45 * 60;
let time = totalTime;
let timer;

startBtn.onclick = () => {
  if (timer) return;

  timer = setInterval(() => {
    time--;

    let min = Math.floor(time / 60);
    let sec = time % 60;

    sec = sec < 10 ? "0" + sec : sec;

    timeText.innerText = `${min}:${sec}`;

    let progress = (time / totalTime) * 360;

    circle.style.setProperty("--progress", progress + "deg");

    if (time <= 0) {
      clearInterval(timer);
    }
  }, 1000);
};
// 페이지슬라이드
const links = document.querySelectorAll("a");

links.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const url = this.href;

    document.body.classList.add("page-out");

    setTimeout(() => {
      window.location = url;
    }, 500);
  });
});
// ----------------------------------------------------------------
