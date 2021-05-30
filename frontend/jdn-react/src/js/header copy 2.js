//첫번째 메인화면 스크롤 느리게 반응하기 //
const bg = document.querySelector("main-screen");
const h1 = document.querySelector("main-title");

function scrolledBg() {
  const value = window.scrollY;
  bg.style.top = value * 0.06 + "rem";
  h1.style.top = "-" + value * 0.005 + "rem";
}
window.addEventListener("scroll", scrolledBg);

// 네비게이션 에니메이션
const navBar = document.querySelector("#nav");
const screenHeight = window.innerHeight;
const firstLinks = document.getElementsByClassName("main-list");
const navLinks = document.querySelectorAll(".main-list");

function reveal() {
  let value = window.scrollY;
  let revealNav = window.innerHeight / 2;
  if (value > revealNav) {
    navBar.classList.add("sticky");
  } else {
    navBar.classList.remove("sticky");
  }
}

window.addEventListener("scroll", reveal);

//모바일 네비게이션//
//네비게이션 열기//
const burger = document.querySelector(".burger");
const bar = document.querySelectorAll(".Bbar");
const mobileNav = document.querySelector(".firstLinks");
function openNav() {
  //네비게이션 & 버거 에니메이션//
  mobileNav.classList.toggle("nav-active");
  for (let i = 0; i < bar.length; i++) {
    bar[i].classList.toggle("clicked");
  }
  //네비게이션 리스트 슬라이드//
  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `navFade 0.5s ease forwards ${index / 7 + 0.2}s`;
    }
  });
}
burger && burger.addEventListener("click", openNav);

//네비게이션 2,3레벨 리스트 에니메이션//
function openList(event) {
  const mainList = event.target.parentElement;

  if (mainList.classList.contains("onclick")) {
    for (let i = 0; i < firstLinks.length; i++) {
      firstLinks[i].classList.remove("onclick");
    }
  } else {
    for (let i = 0; i < firstLinks.length; i++) {
      firstLinks[i].classList.remove("onclick");
    }
    mainList.classList.add("onclick");
  }
}

for (let i = 0; i < firstLinks.length; i++) {
  firstLinks[i].addEventListener("click", openList);
}

//네비게이션 클릭시 close Nav//
const links2 = document.getElementsByClassName("secondLinks");
const links3 = document.getElementsByClassName("thirdLinks");

function closeNav() {
  mobileNav.classList.remove("nav-active");

  for (let i = 0; i < bar.length; i++) {
    bar[i].classList.remove("clicked");
  }
}

for (let i = 0; i < links2.length; i++) {
  links2[i].addEventListener("click", closeNav);
}
