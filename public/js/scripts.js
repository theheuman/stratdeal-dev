function hide(active) {
    divs = document.getElementsByClassName('content-divs')
    headers = document.getElementsByClassName('content-header')

    for (var i = 0; i < divs.length; i++) {
        if (divs[i].id == active) {
            divs[i].style.display = 'block'
            headers[i].classList.add("disabled")
        }
        else {
            divs[i].style.display = 'none'
            headers[i].classList.remove("disabled");
        }
    }

}