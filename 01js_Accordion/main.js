function openCity(cityName){
    let tabcontent, tablinks;
    tabcontent=document.getElementsByClassName("tabcontent")
    // console.log(tabcontent.length);//배열

    for(let i=0; i<tabcontent.length; i++){
        tabcontent[i].style.display="none";
    }

    document.getElementById(cityName).style.display="block";
    
    let topright=document.getElementsByClassName('topright');
    console.log(topright);
    for(let i=0; i<topright.length; i++){
        topright[i].addEventListener('click', function(){
           
            this.parentElement.style.display="none"
        })
    }
}

document.getElementById('defaultOpen').click();