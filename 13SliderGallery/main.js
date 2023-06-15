let slideIndex =1;
showSlide(slideIndex);

function showSlide(n){
    let slides=document.getElementsByClassName('mySlides');
    let dots=document.getElementsByClassName('demo');
    if(n>slides.length){
        slideIndex=1;
    }
    if(n<1){
        slideIndex=slides.length;  
    }
    for(let i=0;i<slides.length;i++){
        slides[i].style.display="none";
    }
    slides[slideIndex - 1].style.display="block";
    for(let i=0;i<dots.length;i++){
        dots[i].classList.remove('active')
    }
    dots[slideIndex - 1].classList.add('active');
}

function plusSlides(n){
    showSlide(slideIndex += n)

}

function currentSlide(n){
    showSlide(slideIndex = n)

}