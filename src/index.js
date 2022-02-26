import './css/normalize.css';
import './css/style.css';
import './highlight/default.min.css';
import './css/media.css';
import './css/demo.scss';

import hljs from './highlight/highlight.min.js'
import animateDemo from './js/demo.js'

hljs.highlightAll();
const inputAnimation=document.querySelector(".code__demo-value")
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


let animateValue = 495
animateDemo(animateValue);
let intervalAnimateDemo = setInterval(animateDemo,20000,animateValue);

function SetAnimateDemo(event){
    clearInterval(intervalAnimateDemo)
    animateDemo(+event.target.value);
    intervalAnimateDemo = setInterval(animateDemo,20000,+event.target.value);
}

inputAnimation.addEventListener('change', SetAnimateDemo)
checkbox.addEventListener("change",menuToDisplay);
document.addEventListener("click", handleClick);

