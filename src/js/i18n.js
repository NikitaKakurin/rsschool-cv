import i18Obj from "./translate.js";

function changeLanguage(lang) {
    const AllElements = document.querySelectorAll('[data-i18]');
    AllElements.forEach(elem=>{
        elem.innerText = i18Obj[lang][elem.dataset.i18];
    })
}

export default changeLanguage;