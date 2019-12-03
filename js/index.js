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

    
