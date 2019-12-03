// Your code goes here

//1. Fun Bus Img Click
let funBusImg = document.querySelector('header img');
funBusImg.addEventListener("click", () => {
    funBusImg.style.transform = "scale(1.2)";
    funBusImg.style.transition = "transform 0.3s"
    funBusImg.style.zIndex = "-1";
    funBusImg.addEventListener("click", () => {
        funBusImg.style.transform = "scale(1)";
    })
})

//2. Prevent Links From Refreshing
let stopLinks = document.querySelectorAll('a');
console.log(stopLinks)

stopLinks.forEach((item,index) =>{
    item.addEventListener("click", (event) =>{
        event.preventDefault();
        console.log("prevented default click");
    })
})

//3. Scroll Nav Bar Color Switch
let myNav = document.querySelector('header');

window.onscroll = () =>{
    'use strict';
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        if(document.documentElement.clientWidth > 800){
          myNav.classList.add("nav-colored");
          myNav.classList.remove("nav-transparent");
        }
      
    }
    else if (document.body.scrollTop === 0) {
        if(document.documentElement.clientWidth > 800){
          myNav.classList.add("nav-transparent");
          myNav.classList.remove("nav-colored");
        }  
    }
}

//4. imgContent scale on hover

let imgContent = document.querySelectorAll('.img-content img');
imgContent.forEach((item) =>{
    item.addEventListener("mouseenter", () =>{
        item.style.transform = "scale(.9)";
        item.style.transition = "0.3s";
        console.log("mouse-enter");
    })
    item.addEventListener("mouseleave", () =>{
        item.style.transform = "scale(1)";
        item.style.transition = "0.3s";
        console.log("mouse-leave");
    })
})
console.log(imgContent);
    
