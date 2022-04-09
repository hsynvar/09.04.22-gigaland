let navicon=document.querySelector(".navIcon")
let headmenu=document.querySelector(".menu")
navicon.addEventListener("click", function(){
    headmenu.classList.toggle("navActive")
})