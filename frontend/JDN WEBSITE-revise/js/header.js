
//첫번째 메인화면 스크롤 느리게 반응하기 //
const bg = document.querySelector('.main-screen');
const h1 = document.querySelector('.main-title');

function scrolledBg(){
    let  value = window.scrollY;
    bg.style.top = value * 0.06 + 'rem';
    h1.style.top = '-' + value * 0.005  + 'rem';
    
}
window.addEventListener('scroll',scrolledBg);


//네비게이션 에니메이션//
const navBar = document.querySelector("#nav");
const screenHeight = window.innerHeight;
const firstLinks = document.getElementsByClassName("main-list");

function reveal(){
let value = window.scrollY;
let revealNav = window.innerHeight/2;    
if(value > revealNav){
navBar.classList.add("sticky");
} else{
navBar.classList.remove("sticky");
};
};



window.addEventListener('scroll',reveal);



//모바일 네비게이션//
const burger = document.querySelector(".burger");
const mobileNav = document.querySelector(".firstLinks");
function openNav(){
mobileNav.classList.toggle('navHide');
}

     burger.addEventListener("click", openNav);

function openList(event){
const mainList = event.target.parentElement;
for (let i = 0; i < firstLinks.length; i++) {
    firstLinks[i].classList.remove("onclick");
}
    mainList.classList.add("onclick");
}

for (let i = 0; i < firstLinks.length; i++) {
    firstLinks[i].addEventListener('click',openList);
}