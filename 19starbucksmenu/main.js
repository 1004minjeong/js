let mainMenu = document.querySelectorAll('.main_menu>li'),
    header = document.querySelector('header');

//mainMenu.forEach(function(mainMenu의 item각각의 할일){})
//mainMenu.forEach(function(item){}item은 요소각각을 의미)
//mainMenu.forEach(function(item){})
mainMenu.forEach((item)=>{
    item.addEventListener('mouseover',function(){
        let submenuHeight= this.querySelector('.sub_menu').offsetHeight;
        console.log(submenuHeight)
        header.style.height=`${submenuHeight + 110}px`
    })
    item.addEventListener('mouseout',function(){
        header.style.height=`${110}px`
    })
})