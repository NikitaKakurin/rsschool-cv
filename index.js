"use strict"
hljs.highlightAll();
const checkbox =document.getElementById("toggle-menu");
const menu = document.querySelector(".menu__list");
const menuButton = document.querySelector(".burger-menu__button");
const burger = document.querySelector(".burger-container")


function menuToDisplay(e){
    console.log("work");
    if(checkbox.checked){
        showMenu();
    }else{
        hideMenu();
    }
}

function showMenu(){
    menu.style.height = "300px"
    menu.style.display = "flex";
}

function hideMenu(){
    menu.style.height = "0px"
    menu.style.display = "none";
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



function handleClick(event){
    if(!burger.contains(event.target)){
        checkbox.checked = false;
        menu.style.height = "0px"
        menu.style.display = "none";
    }
}


checkbox.addEventListener("change",menuToDisplay);
document.addEventListener("click", handleClick);

