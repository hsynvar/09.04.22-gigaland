// responsive header 

let navicon=document.querySelector(".navIcon")
let headmenu=document.querySelector(".menu")
navicon.addEventListener("click", function(){
    headmenu.classList.toggle("navActive")
})

// black header 
let header=document.querySelector("#header");
window.onscroll=function(){
    if(window.scrollY >100){
        header.classList.add("headerBlack")
    }
    else{
        header.classList.remove("headerBlack")
    }
}