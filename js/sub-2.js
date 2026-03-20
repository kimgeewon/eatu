document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.getElementById("card-carousel");
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");

  function reassignClasses() {
    if (!carousel) return;
    const allCards = Array.from(carousel.children);

    allCards.forEach((card, i) => {
      card.classList.remove("side-card", "mid-card", "main-card");
      if (i === 2) {
        card.classList.add("main-card");
        const arrows = document.querySelector(".nav-arrows");
        if (arrows && !card.querySelector(".nav-arrows")) {
          card.prepend(arrows);
        }
      } else if (i === 1 || i === 3) {
        card.classList.add("mid-card");
      } else {
        card.classList.add("side-card");
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const firstCard = carousel.firstElementChild;
      carousel.appendChild(firstCard);
      reassignClasses();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const lastCard = carousel.lastElementChild;
      carousel.prepend(lastCard);
      reassignClasses();
    });
  }

  reassignClasses();

  const loginLinks = document.querySelectorAll(".menu-list > li:last-child a");

  loginLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      console.log("로그인 버튼이 클릭되었습니다.");
    });
  });

  const retryButton = document.querySelector(".retry-btn");
  if (retryButton) {
    retryButton.addEventListener("click", (e) => {
      e.preventDefault();
      console.log("취향 다시 분석 버튼이 클릭되었습니다.");
    });
  }

  const hobbyBtnPage4 = document.querySelector(".hobby-match-btn");
  if (hobbyBtnPage4) {
    hobbyBtnPage4.addEventListener("click", (e) => {
      e.preventDefault();
      alert("취미 매칭을 시작합니다!");
    });
  }

  const commBtns = document.querySelectorAll(".comm-text");
  commBtns.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      this.classList.toggle("active");
      console.log(
        `${this.innerText.trim()} 상태 변경: ${this.classList.contains("active")}`,
      );
    });
  });

  const interactiveBtns = document.querySelectorAll(".tag, .lets-go-btn");
  interactiveBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      console.log(`${btn.innerText.trim()} 실행`);
    });
  });
});

const goTopBtn = document.getElementById("goTop");
if (goTopBtn) {
  goTopBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

document.querySelectorAll(".icon-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    this.classList.toggle("selected");
  });
});

// 기존 script.js 맨 아래 layoutScale 관련 코드를 이걸로 바꾸세요
function layoutScale() {
  const targetWidth = 1920;
  const currentWidth = window.innerWidth;

  // 화면이 1920보다 작거나 클 때만 배율 조절
  const scale = currentWidth / targetWidth;

  // body 전체가 아닌, 내부 섹션들이 틀어지지 않게 body에 배율 적용
  document.body.style.width = targetWidth + "px";
  document.body.style.transform = `scale(${scale})`;

  // 배율 조절로 인해 발생하는 하단 여백 보정
  const scaledHeight = document.body.getBoundingClientRect().height;
  document.documentElement.style.height = scaledHeight + "px";
}

window.addEventListener("resize", layoutScale);
window.addEventListener("load", layoutScale);
layoutScale();
