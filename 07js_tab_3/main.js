function openCity(cityName,elem,color){
    let tabcontent=document.getElementsByClassName('tabcontent');
    for(let i=0; i<tabcontent.length;i++){
        tabcontent[i].style.display="none";
        console.log(tabcontent);
    }
    let tablink=document.getElementsByClassName('tablink');
    for(let i=0;i<tablink.length;i++){
        tablink[i].style.bacgroundColor=""
    }
    elem.style.backgroundColor=color;
    document.getElementById(cityName).style.display="block";
}


document.getElementById('defaultopen').click();