import './css/normalize.css';
import './css/style.css';
import './css/burger.scss';
import './highlight/default.min.css';
import './css/media.css';
import './css/demo.scss';
import './css/lang-switcher.scss';

import hljs from './highlight/highlight.min.js'
import animateDemo from './js/demo.js'
import changeLanguage from './js/i18n';

hljs.highlightAll();
const inputAnimation=document.querySelector(".code__demo-value")
const checkbox =document.getElementById("toggle-menu");
const menu = document.querySelector(".menu__list");
const burger = document.querySelector(".burger-container")

document.addEventListener('change',handleChange)

function handleChange(event) {
    let target = event.target;
    if(target.classList.contains('lang__radio-en')){
        changeLanguage('en');
        return;
    }
    if(target.classList.contains('lang__radio-ru')){
        changeLanguage('ru');
        return;
    }
}

function menuToDisplay(e){
    if(checkbox.checked){
        showMenu();
    }else{
        hideMenu();
    }
}

function showMenu(){
    menu.style.top = "50px";
}

function hideMenu(){
    menu.style.top = "-300px";
    
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

