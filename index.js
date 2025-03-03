"use strict"
{
    document.querySelector(".who p").addEventListener("click",()=>{
        document.querySelector("h3").classList.toggle("active");
        document.querySelector(".who p").classList.toggle("active");
        document.getElementById("top-img-alpha").classList.toggle("active");
        document.querySelector(".overlay").classList.toggle("active");
    })
    document.querySelector("h3").addEventListener("click",()=>{
        document.querySelector("h3").classList.toggle("active");
        document.querySelector(".who p").classList.toggle("active");
        document.getElementById("top-img-alpha").classList.toggle("active");
        document.querySelector(".overlay").classList.toggle("active");
    })
    document.querySelector("#top-img").addEventListener("click",()=>{
        document.querySelector("h3").classList.toggle("active");
        document.querySelector(".who p").classList.toggle("active");
        document.getElementById("top-img-alpha").classList.toggle("active");
        document.querySelector(".overlay").classList.toggle("active");
    })
    document.querySelector(".overlay").addEventListener("click",()=>{
        document.querySelector("h3").classList.toggle("active");
        document.querySelector(".who p").classList.toggle("active");
        document.getElementById("top-img-alpha").classList.toggle("active");
        document.querySelector(".overlay").classList.toggle("active");
    })
    document.querySelector("#top-img-alpha").addEventListener("click",()=>{
        document.querySelector("h3").classList.toggle("active");
        document.querySelector(".who p").classList.toggle("active");
        document.getElementById("top-img-alpha").classList.toggle("active");
        document.querySelector(".overlay").classList.toggle("active");
    })
}