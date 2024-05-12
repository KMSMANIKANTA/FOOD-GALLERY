const images=[
    {
        id:1,
       src:"images/biryani1.jpg "
    },
    {
        id:2,
        src:"images/biryani2.jpg"
    },
    {
        id:3,
        src:"images/biryani3.jpg"
    },
    {
        id:4,
        src:"images/biryani4.jpg"
    },
    {
        id:5,
        src:"images/biryani5.jpg"
    },
    {
        id:6,
        src:"images/burger1.jpg"
    },
    {
        id:7,
        src:"images/burger2.jpg"
    },
    {
        id:8,
        src:"images/burger3.jpg"
    },
    {
        id:9,
        src:"images/cake1.jpg"
    },
    {
        id:10,
        src:"images/cake2.jpg"
    },
    {
        id:11,
        src:"images/cake3.jpg"
    },
    {
        id:12,
        src:"images/cake4.jpg"
    },
    {
        id:13,
        src:"images/cake5.jpg"
    },
    {
        id:14,
        src:"images/cake6.jpg"
    },
    {
        id:15,
        src:"images/cake7.jpg"
    },{
        id:16,
        src:"images/chappati curry1.jpg"
    },{
        id:17,
        src:"images/chappati curry2.jpg"
    },{
        id:18,
        src:"images/chicken1.jpg"
    },{
        id:19,
        src:"images/chicken2.jpg"
    },{
        id:20,
        src:"images/chicken3.jpg"
    },{
        id:21,
        src:"images/chicken4.jpg"
    },{
        id:22,
        src:"images/chicken5.jpg"
    },{
        id:23,
        src:"images/fish1.jpg"
    },{
        id:24,
        src:"images/fish2.jpg"
    },{
        id:25,
        src:"images/icecream1.jpg"
    },
    {
        id:26,
        src:"images/icecream2.jpg"
    },{
        id:27,
        src:"images/icecream3.jpg"
    },{
        id:28,
        src:"images/icecream4.jpg"
    },{
        id:29,
        src:"images/icecream5.jpg"
    },{
        id:30,
        src:"images/icecream6.jpg"
    },{
        id:31,
        src:"images/icecream7.jpg"
    },{
        id:32,
        src:"images/pizza1.jpg"
    },{
        id:33,
        src:"images/pizza2.jpg"
    },{
        id:34,
        src:"images/pizza3.jpg"
    },{
        id:35,
        src:"images/shawarma1.jpg"
    },{
        id:36,
        src:"images/shawarma2.jpg"
    }
    ,{
        id:37,
        src:"images/shawarma3.jpg"
    }
]


const imageContainer=document.querySelector(".img-container")
const popup=document.querySelector("#popup")
const cross=document.querySelector(".cross")
const popupContainer=document.querySelector(".popup")
const fullbtn=document.querySelector(".showfullscreen")
window.addEventListener("DOMContentLoaded",function(){
    
    const displayImages=images.map(function(image){

        return `
        
        <img src="${image.src}" alt="cake" class="image">
        `
    })
    displayImages.join("")
    imageContainer.innerHTML=displayImages

    const imgs=document.querySelectorAll(".image")
    imgs.forEach(function(image,index){
        image.addEventListener('click',function(e){
            popup.setAttribute("src",`${images[index].src}`)
            popupContainer.style.display="block"
            document.body.style.overflowY="hidden"
        })
    })
})
cross.addEventListener('click',function(){
   
    popupContainer.style.display="none"
    document.body.style.overflowY="scroll"
    popup.classList.remove("active")
    fullbtn.textContent="Full Screen"

})

fullbtn.addEventListener("click",function(){
    popup.classList.toggle('active')
    popupContainer.classList.toggle("activeContainer")
    if(popup.classList.contains("active"))
    {
        fullbtn.textContent="Half Screen"
    }
    else{
        fullbtn.textContent="Full Screen"

    }
    
})