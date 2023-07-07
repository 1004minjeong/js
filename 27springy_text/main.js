//text move
let allText = document.querySelectorAll('.text');
let delay = 0; //글자 시간차

//allText.forEach(function(el,idx){}); //el은 각각의 아이템이 받아지고 idx는 아이템의 index번호를받음 
allText.forEach((el, idx) => {
    el.style.animationDelay = `${delay}s`
    el.style.zIndex = allText.length - idx
    el.classList.add('base-anim');

    delay += 0.15;
});

//text mouse move(화면중간에서 움직이게하기)
document.getElementById('five').addEventListener('mousemove', (e) => {
    let innerWidth = window.innerWidth; //viewport의 넓이값
    let innerHeight = window.innerHeight; //viewport의 높이값
    let clientX = e.clientX;
    let clientY = e.clientY;
    //console.log(clientX,clientY)

    let percentX = clientX / innerWidth; //화면넓이의 퍼센트
    //console.log(percentX)
    let maxRangeX = innerWidth * 0.15;
    let minX = innerWidth / 2 - maxRangeX; //화면중앙넓이 나누기
    let maxX = innerWidth / 2 + maxRangeX;
    let difX = maxX - minX;
    let pxOffset = difX * percentX;
    let left = minX + pxOffset;

    let percentY = clientX / innerHeight; //화면높이의 퍼센트
    //console.log(percentX)
    let maxRangeY = innerHeight * 0.15;
    let minY = innerHeight / 2 - maxRangeY; //화면중앙높이 나누기
    let maxY = innerHeight / 2 + maxRangeY;
    let difY = maxY - minY;
    let pxOffsetY = difY * percentY;
    let top = minY + pxOffsetY;

    allText.forEach((el, idx) => {
        //el.animate([],{})
        el.animate([{
            top: `${top}px`,
            left: `${left}px`
        }], {
            duration: 1000,
            fill: 'forwards',
            delay: idx * 50,
        })
    })
})