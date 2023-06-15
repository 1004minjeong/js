let myFunction


/* function myfunction(){
    console.log("실행")
} */

/* myFunction = function(){
    console.log("실행")
} */

let navbar=document.getElementById("navbar");
//.offsetTop = 내영역위의 공간의 높이값
let sticky = navbar.offsetTop;
console.log("sticky".sticky)

myFunction =()=>{
    if(window.pageYOffset>=sticky){
        navbar.classList.add('sticky')
    }else{
        navbar.classList.remove('sticky')
    }
}
window.onscroll=myFunction;