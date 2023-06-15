let preScrollpos=window.pageYOffset;
console.log("이전값",preScrollpos)
//window.addEventListener('scroll',function(){})
window.onscroll=function(){
let currentScollPos=window.pageYOffset;
console.log("현재값",currentScollPos)
if(preScrollpos>currentScollPos){
    document.getElementById('navbar').style.top="0"
}else{
    document.getElementById('navbar').style.top="-54px"
}
preScrollpos=currentScollPos;
}