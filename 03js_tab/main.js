function openCity(evt, cityName) {
    let tabcontent = document.getElementsByClassName("tabcontent")
    // console.log(tabcontent);//배열
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none"
    }
    let tablinks = document.getElementsByClassName('tablinks')
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove('active')
    }
    // console.log(evt.currentTarget);
    evt.currentTarget.classList.add("active")


    document.getElementById(cityName).style.display = "block"


}

document.getElementById('defaultOpen').click();

//classList 메서드
//.classList.add('active') -->active라는 클래스 추가
//.classList.remove('avtive')-->active라는 클래스 제거
//.classList.toggle('active')-->active클래스가 존재하면 지우고, 없으면 추가
//classList.contains('aactive')-->active클래스가 존재하는가? true/false로 반환
//classList.replace('A','B')-->A클래스를 B클래스로 변경

