"use strict"
hljs.highlightAll();
const checkbox =document.getElementById("toggle-menu");
const menu = document.querySelector(".menu__list");
const menuButton = document.querySelector(".burger-menu__button");
const burger = document.querySelector(".burger-container")


function menuToDisplay(e){
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
    if(isBurgerHide()){
        menu.style.display = "flex";
        menu.style.marginBottom ="20px";
        menu.style.height ="20px";
    };
    if(!isBurgerHide()){
        hideMenu()
        checkbox.checked = false;
    };
}

function isBurgerHide(){
    return window.getComputedStyle(burger,null).display =="none";
}

function handleClick(event){
    if(isBurgerHide()) return;

    if(!burger.contains(event.target)){
        checkbox.checked = false;
        hideMenu();
    }
}


checkbox.addEventListener("change",menuToDisplay);
document.addEventListener("click", handleClick);

