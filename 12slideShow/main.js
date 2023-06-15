let slideIndex = 1;
showSlides(slideIndex)

function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides")
    let dots = document.getElementsByClassName("dot")
    console.log(slides)
    
    if(n>slides.length){
        slideIndex = 1
    }
    if(n<1){
        slideIndex = slides.length
    }
    for(let i = 0; i<slides.length; i++){
        slides[i].style.display="none"
    }

    for(let i = 0; i<dots.length; i++){
        dots[i].classList.remove('active')
    }
    slides[slideIndex - 1].style.display="block";
    dots[slideIndex - 1].classList.add('active')
}
//slides.length=3

function plusSlides(n) {
    showSlides(slideIndex += n)//slideIndex = slideIndex + n(우항의 결과가 좌항으로 들어간데)
}

function currentSlide(n) {
    showSlides(slideIndex = n)
}
//setInterval(function(){} ,시간);
let stopslide = setInterval (function () {plusSlides(1)} ,5000);

let slideshowcon=document.getElementById('slideshow-container');
slideshowcon.addEventListener("mouseenter",function(){
    //setInterval멈추기
    clearInterval(stopslide)
})
