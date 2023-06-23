let main = document.querySelector("#main");
let hero = document.querySelector(".hero");
let heroTitle = document.querySelectorAll(".hero_title>.ofh>h1");
let images = [
  "img/01.jpg",
  "img/02.jpg",
  "img/03.jpg",
  "img/04.jpg",
  "img/05.jpg",
  "img/06.jpg",
  "img/07.jpg",
  "img/08.jpg",
  "img/09.jpg",
];
let settings = {
  isEnabled: false,
  count: 1,
  time: 50,
};
gsap.set(heroTitle,{x:"-101%", opacity:0});
const initHero = function () {
  gsap.set(heroTitle, {
    x: "-101%",
    opacity:0
  });
  showHero();
};
const showHero = function () {
  gsap.to(heroTitle, {
    duration: 1.75,
    x: 0,
    opacity:1,
    stagger: 0.1,
  });
};

function calcIndex(length) {
  settings.count++;
  if (settings.count == length) {
    settings.count = 0;
  }
  return settings.count;
}

function animateImages(e) {
  let image = document.createElement("img"); //<img src="">이미지태그가 만들어짐
  let imageSize = 50;
  let countIndex = calcIndex(images.length); //이미지배열의 갯수
  //console.log(countIndex)
  image.classList.add("hero_media");
  image.setAttribute("src", images[countIndex]);
  image.style.width = `${imageSize}rem`;
  image.style.height = `${imageSize}rem`;
  image.style.top = e.clientY - imageSize * 5 + "px";
  image.style.left = e.clientX - imageSize * 5 + "px";
  //A.appendChild(B);A의 자식으로 B가 첨부된다
  hero.appendChild(image);
  let randomDeg = Math.floor(Math.random() * 15); //random() 이란 0부터 1전까지의 실수(소수점)를 추출
  //.floor() 란 소수점을 버림
  console.log(randomDeg);
  //setTimeout(function(){},시간)
  setTimeout(function () {
    image.style.transform = "scale(1)";
    image.style.transform = `rotate(${randomDeg}deg)`;
  }, 50);
  setTimeout(function () {
    image.style.transform = "scale(0.25)";
    image.style.filter = "blur(10px)";
    image.style.opacity = 0;
  }, 1500);
  setTimeout(function () {
    //자식요소 없애기
    hero.removeChild(image);
  }, 2500);
}

window.addEventListener("mousemove", function (e) {
  if (!settings.isEnabled) {
    settings.isEnabled = true;

    setTimeout(function () {
      settings.isEnabled = false;
    }, settings.time);

    animateImages(e);
  }
});

//onload=문서안에 있는 모든요소및 이미지 영상 등 자료가 모두 load(업데이트)되면 실행되어라
window.onload = () => {
  window.addEventListener("scroll", function () {
    let scrollT = window.pageYOffset;
    if (scrollT >= main.offsetTop - 400) {
      console.log("실헹헹");
      initHero();
    }
  });
};
