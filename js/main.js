// responsive header 

let navicon=document.querySelector(".navIcon")
let headmenu=document.querySelector(".menu")
navicon.addEventListener("click", function(){
    headmenu.classList.toggle("navActive")
})

// black header 
let header=document.querySelector("#header");
window.onscroll=function(){
    if(window.scrollY >20){
        header.classList.add("headerBlack")
    }
    else{
        header.classList.remove("headerBlack")
    }
}
// -------- 
// newitems slider start 

let box=document.querySelectorAll('.bigBox .box')
let next=document.querySelector( '.bigBox .next')
let prev=document.querySelector('.bigBox .prev')
let count=0

next.onclick=function(){
    count++;
    for(let i of box){
        if(count==0){i.style='transform:translateX(0)' }
        if(count==1){i.style='transform:translateX(-324px)'}
        if(count==2){i.style='transform:translateX(-648px)'}
        if(count==3){i.style='transform:translateX(-972px)'}
        if(count==4){i.style='transform:translateX(-1296px)'}
        if(count>4){count=0; i.style='transform:translateX(0)'}
    }   
}
prev.onclick=function(){
    count--;
    for(let i of box){
        if(count==0){i.style='transform:translateX(0)' }
        if(count==1){i.style='transform:translateX(-324px)'}
        if(count==2){i.style='transform:translateX(-648px)'}
        if(count==3){i.style='transform:translateX(-972px)'}
        if(count==4){i.style='transform:translateX(-1296px)'}
        if(count<0){count=4; i.style='transform:translateX(-1296px)'}
    }  
}


