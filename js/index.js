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