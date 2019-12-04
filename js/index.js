// Your code goes here

//1. Fun Bus Img Click //test with toggle
let funBusImg = document.querySelector('header img');
// setInterval(function(){
//     funBusImg.addEventListener("click", () => {
//         funBusImg.style.transform = "scale(1.2)";
//         funBusImg.style.paddingBottom = "25px";
//         funBusImg.style.transition = "transform 0.3s"
//         funBusImg.style.zIndex = "-1";
//         funBusImg.addEventListener("click", () => {
//             funBusImg.style.transform = "scale(1)";
//             funBusImg.style.paddingBottom = "0";
//             funBusImg.style.transition = "transform 0.3s"
//         })
//     })
// },1000)
let isLarge = 0;
if(isLarge < 1){
    funBusImg.addEventListener("click", () => {
        funBusImg.style.transform = "scale(1.2)";
        funBusImg.style.paddingBottom = "25px";
        funBusImg.style.transition = "transform 0.3s"
        funBusImg.style.zIndex = "-1";
        isLarge = 1;

});
}else{
    funBusImg.addEventListener("click", () => {
        funBusImg.style.transform = "scale(1)";
        funBusImg.style.paddingBottom = "0";
        funBusImg.style.transition = "transform 0.3s"
        isLarge = 0;
    });
}



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

//5. content destination
let textContent = document.querySelectorAll('h2, h3, h4');
textContent.forEach((item) =>{
    item.addEventListener("mouseenter", () =>{
        item.style.color = "aqua";
    })
    item.addEventListener("mouseleave", () =>{
        item.style.color = "black";
    })
})

//6. Add Preloader Gif
let preLoader = document.createElement('div');
let preLoaderGif = document.createElement('span');
let preLoaderTitle = document.createElement('h1');
let body = document.querySelector('body');
preLoaderTitle.textContent = "Welcome To The Fun Bus!";
preLoader.appendChild(preLoaderTitle);
preLoader.classList.add("preloader");
preLoaderGif.classList.add("preloader-gif");
preLoader.append(preLoaderGif);
body.prepend(preLoader);

setTimeout(() =>{
    preLoader.style.visibility ="hidden";
    preLoader.style.opacity = "0";
    preLoader.style.transition = "1s";
},2000);

// window.onload = () => {
//     preLoader.style.opacity = "0";
//     preLoader.style.transition = "1s";
// }

//7. Content Destination Sub Title Add

let destinationImg = document.querySelector('.content-destination img');
let contentDestination = document.querySelector('.content-destination');
let destinationSubTitle = document.createElement('h2');
destinationSubTitle.textContent = "What an amazing possibility!";
destinationImg.addEventListener("dblclick", () =>{
    destinationImg.style.transform = "scale(1.2)";
    destinationImg.style.margin="5%";
    contentDestination.append(destinationSubTitle);
    destinationSubTitle.style.textAlign ="center";
})

//8. Event Propogation

let contentPick = document.querySelector('.content-pick');
contentPick.addEventListener("click", () =>{
    contentPick.style.backgroundColor = "bisque";
})

let destinations = document.querySelectorAll('.destination');
destinations.forEach((item) =>{
    item.addEventListener("click", (e) =>{
        item.style.backgroundColor ="darksalmon";
        e.stopPropagation();
    })
})

let destP = document.querySelectorAll('.destination p');
destP.forEach((item) =>{
    item.addEventListener("click", (e) =>{
        item.style.color ="aqua";
        e.stopPropagation();
    })
})

//9.