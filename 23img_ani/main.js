window.addEventListener('mousemove',function(e){
    document.querySelector('#slidephoto').style.top=`${e.clientY}px`;
    document.querySelector('#slidephoto').style.left=`${e.clientX}px`;
    document.querySelector('#slidephoto').style.transform=`translate(${-e.clientX*0.2}px,${-e.clientY*0.2}px)`
 })


document.querySelector('#chainn').addEventListener('mousemove',function(){
    document.querySelector('#slidephotos').style.marginTop="0%"
    document.querySelector('#chainn').style.color="rgba(177,177,177)"
})

document.querySelector('#chainn').addEventListener('mouseleave',function(){
    document.querySelector('#chainn').style.color="initial";
})

document.querySelector('#aty').addEventListener('mousemove',function(){
    document.querySelector('#slidephotos').style.marginTop="-120%"
    document.querySelector('#aty').style.color="rgba(177,177,177)"
})

document.querySelector('#aty').addEventListener('mouseleave',function(){
    document.querySelector('#aty').style.color="initial";
})

document.querySelector('#mic').addEventListener('mousemove',function(){
    document.querySelector('#slidephotos').style.marginTop="-240%"
    document.querySelector('#mic').style.color="rgba(177,177,177)"
})

document.querySelector('#mic').addEventListener('mouseleave',function(){
    document.querySelector('#mic').style.color="initial";
})

document.querySelector('#tapso').addEventListener('mousemove',function(){
    document.querySelector('#slidephotos').style.marginTop="-360%"
    document.querySelector('#tapso').style.color="rgba(177,177,177)"
})

document.querySelector('#tapso').addEventListener('mouseleave',function(){
    document.querySelector('#tapso').style.color="initial";
})

document.querySelector('#eff').addEventListener('mousemove',function(){
    document.querySelector('#slidephoto').style.display="initial";
    document.querySelector('#slidephoto').style.opacity=1;
})
document.querySelector('#eff').addEventListener('mouseleave',function(){
    document.querySelector('#slidephoto').style.display="none";
    document.querySelector('#slidephoto').style.opacity=0;
})