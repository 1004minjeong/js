//실제스크롤애니메이션은 3번째사진까지라서 3번까지 계산
//마지막사진은 계산안해두됨



let scrollBody = document.querySelector('.fix_motion'), //sticky가 되는 전체영역
    scrollHeight, //스크롤의 높이값
    sectionOffsetTop, //sticky가되지않는 처음영역
    sectionScrollTop,
    scrollRealHeight, //실제로 스크롤해야할 높이
    winScrollTop, //스크롤바의 높이를 담을변수
    scrollPercent, //스크롤의 백분율값
    percent;


//미디어쿼리
let isMobile;
function scrollFuc(){
    setProperty();
    if(isMobile){
        //값이 원래 안들어있는데 값이 들어간다면
        contentInMobile();
    }else{
        //값이 없다면
        contentIn();
    }
}



function setProperty() {
    isMobile=window.innerWidth<=1024?true:false //화면의 넓이가1024보다 크면 true
    scrollHeight = scrollBody.offsetHeight; //.fix_motion의 높이값
    sectionOffsetTop = scrollBody.offsetTop; //문서에서.fix_motion 위까지의 높이값
    scrollRealHeight = scrollHeight - window.innerHeight; // -뷰포트의값
    winScrollTop = pageYOffset;
    sectionScrollTop = winScrollTop - sectionOffsetTop;
    scrollPercent = sectionScrollTop / scrollRealHeight;
    percent = scrollPercent * 100;
    console.log(percent)

    contentIn();



}

function contentIn() {
    let deviceImg = document.querySelectorAll('.slide figure ');
    let imgWidth = deviceImg[0].offsetWidth;//figure의 img하나의 넓이값
   
    
    //여기 숫자는 글자색바꾸는거라서 내가원하는대로 숫자바꿔도됨
    if(percent>=12 && percent < 37){
        document.querySelector('.text_box p.text01').classList.add('active')
        imageChange(imgWidth*0)
    }
    if(percent>=37 && percent < 62){
        document.querySelector('.text_box p.text02').classList.add('active')
        imageChange(imgWidth*1)
    }

    if(percent>=62 && percent < 88){
        document.querySelector('.text_box p.text03').classList.add('active')
        imageChange(imgWidth*2)
    }
    if(percent>=88){
        document.querySelector('.text_box p.text04').classList.add('active')
        imageChange(imgWidth*3)
    }
    if(percent<12){//글자색 원래대로 돌아오게하기
        document.querySelector('.text_box p.text01').classList.remove('active')
        document.querySelector('.text_box p.text02').classList.remove('active')
        document.querySelector('.text_box p.text03').classList.remove('active')
        document.querySelector('.text_box p.text04').classList.remove('active')
    }

}

//모바일
function contentInMobile() {
    let deviceImg = document.querySelectorAll('.slide figure ');
    let imgWidth = deviceImg[0].offsetWidth;//figure의 img하나의 넓이값
   
    
    //모바일에서 글자지우기
    if(percent>=12 && percent < 37){
        document.querySelector('.text_box p.text01').classList.add('active')
        document.querySelector('.text_box p.text02').classList.remove('active')
        document.querySelector('.text_box p.text03').classList.remove('active')
        document.querySelector('.text_box p.text04').classList.remove('active')
        imageChange(imgWidth*0)
    }
    if(percent>=37 && percent < 62){
        document.querySelector('.text_box p.text02').classList.add('active')
        document.querySelector('.text_box p.text01').classList.remove('active')
        document.querySelector('.text_box p.text03').classList.remove('active')
        document.querySelector('.text_box p.text04').classList.remove('active')
        imageChange(imgWidth*1)
    }

    if(percent>=62 && percent < 88){
        document.querySelector('.text_box p.text03').classList.add('active')
        document.querySelector('.text_box p.text01').classList.remove('active')
        document.querySelector('.text_box p.text02').classList.remove('active')
        document.querySelector('.text_box p.text04').classList.remove('active')
        imageChange(imgWidth*2)
    }
    if(percent>=88){
        document.querySelector('.text_box p.text04').classList.add('active')
        document.querySelector('.text_box p.text01').classList.remove('active')
        document.querySelector('.text_box p.text02').classList.remove('active')
        document.querySelector('.text_box p.text03').classList.remove('active')
        imageChange(imgWidth*3)
    }
    if(percent<12){//글자색 원래대로 돌아오게하기
        document.querySelector('.text_box p.text01').classList.remove('active')
        document.querySelector('.text_box p.text02').classList.remove('active')
        document.querySelector('.text_box p.text03').classList.remove('active')
        document.querySelector('.text_box p.text04').classList.remove('active')
    }

}

//애플워치 사진바꾸기
function imageChange(moveX){
    let img=document.querySelector('.slide_wrap .slide');
    img.style.transform=`translateX(${-moveX}px)`;//이미지의 트랜스폼을 바꾼다 이미지의넓이만큼 왼쪽으로
    
}



window.addEventListener('scroll',function(){
    scrollFuc() 
})
window.addEventListener('resize',function(){
    scrollFuc()  
})

scrollFuc() //함수호출