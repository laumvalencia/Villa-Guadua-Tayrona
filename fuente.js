var header = document.getElementById('Header')

window.addEventListener('scroll', ()=>{
    var scroll = window.scrollY
    if(scroll>50){
        header.style.backgroundColor = '#76D7C4'
    }else{
        header.style.backgroundColor = 'transparent'
    }
})

document.querySelector("button.button-menu-toggle")
.addEventListener("click", function() {
document.querySelector(".nav-links"). classList.toggle("nav-links-responsive")})