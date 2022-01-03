"use strict"
hljs.highlightAll();

const checkbox =document.getElementById("toggle-menu");
const menu = document.querySelector(".menu__list");
const menuButton = document.querySelector(".menu-button");
checkbox.addEventListener("change",menuToDisplay);
function menuToDisplay(e){
    console.log("work");
    if(checkbox.checked){
        menu.style.height = "300px"
        menu.style.display = "flex";
    }else{
        menu.style.height = "0px"
        menu.style.display = "none";
    }
}
window.onresize = function(event){
    if(document.documentElement.clientWidth >769){
        menu.style.display = "flex";
        menu.style.marginBottom ="20px";
        menu.style.height ="20px";
    };
    if(document.documentElement.clientWidth<=768){
        menu.style.display = "none";
    };
}

