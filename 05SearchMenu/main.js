function myFunction() {
    let input = document.getElementById('mysearch');
    //.toUpperCase() 대문자로
    //.value --input태그에 적힌 값을 확인
    let filter = input.value.toUpperCase();
    // console.log(filter);
    let ul = document.getElementById('mymenu');
    let li = ul.getElementsByTagName('li')
    console.log(li);
    for (let i = 0; i < li.length; i++) {
        let a = li[i].getElementsByTagName('a')[0];
        ////////////a.innerHTML -- a태그의 text를 추출///////////////////
        // console.log(a.innerHTML.toUpperCase());
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "block";
        } else {
            li[i].style.display = "none"
        }

    }

}