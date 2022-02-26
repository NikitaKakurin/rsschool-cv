const demo = document.querySelector('.code__demo-animation');
const demoProgress = document.querySelector('.code__demo-function')
let arrayTimeout = []

function animateDemo(value){
    demoProgress.innerHTML="";
    arrayTimeout.forEach((timeout)=>{
        clearTimeout(timeout);
    })
    arrayTimeout = [];
    demoProgress.innerHTML = `<span><span class="code__demo-red">squareDigits</span>(${value})</span>`
    demo.innerHTML = value;
    const strFromValue = `${value}`;
    const arrFromValue = strFromValue.split('').join(',').split('');
    let elemArr = []
    elemArr.push(createOneElement('span',['code__demo-brackets','code__demo-brackets-left'],`[`));
    elemArr.push(createOneElement('span',['code__demo-quotes','code__demo-quotes-big'],`"`));
    const delay = 700*strFromValue.length;

    arrFromValue.forEach((str, index) => {
        if(str==","){
            let elem = createOneElement('span',['code__demo-comma','code__demo-comma-invisible'],str)
            elemArr.push(elem); 
        }else if(Number.isInteger(+str)){
            elemArr.push(createOneElement('span',['code__demo-quotes','code__demo-quotes-big'],`"`))
            elemArr.push(createOneElement('span','code__demo-digit',str));
            elemArr.push(createOneElement('span',['code__demo-quotes','code__demo-quotes-big'],`"`))
        }
    });
    elemArr.push(createOneElement('span',['code__demo-quotes','code__demo-quotes-big'],`"`));
    elemArr.push(createOneElement('span',['code__demo-brackets','code__demo-brackets-right'],`]`));


    function createOneElement(tag, classArr, str){
        let elem = document.createElement(tag);
        if(Array.isArray(classArr)){
            classArr.forEach(className=>{
                elem.classList.add(className);
            })
        }else{
            elem.classList.add(classArr);
        }

        
        elem.innerText=str;
        return elem;
    }

    arrayTimeout.push(setTimeout(showStrFromValue, delay))
    function showStrFromValue(){
        demoProgress.innerHTML += `<span>->${value}.<span class="code__demo-red">toString</span>()</span>`;
        let div = document.createElement('div');
        elemArr.forEach((elem, index)=>{
            if(index == 1||index==elemArr.length-2||Number.isInteger(+elem.innerText)){
                div.append(elem)
            }
        });
        demo.innerHTML=div.innerHTML;
        animateExpression(demo)
        arrayTimeout.push(setTimeout(showArrFromValue, delay));
    }

    
    function animateExpression(parent){
        const arrayQuotes = parent.querySelectorAll('.code__demo-quotes-big');
        const arrayBrackets = parent.querySelectorAll('.code__demo-brackets');
        const arrayCommas = parent.querySelectorAll('.code__demo-comma');
        
        arrayQuotes.forEach((elem,index)=>{
            arrayTimeout.push(setTimeout(()=>elem.classList.remove('code__demo-quotes-big'),200*(index+1)));
        });

        arrayBrackets.forEach((elem,index)=>{
            elem.classList.remove('code__demo-brackets-left');
            elem.classList.remove('code__demo-brackets-right');
        });

        arrayCommas.forEach((elem, index)=>{
            elem.classList.remove('code__demo-comma-invisible');
            elem.addEventListener('transitionend', showComma);
            function showComma(event){
                elem.removeEventListener('transitionend', showComma);
                elem.style.opacity = 1;
            }
        })

    }

    function showArrFromValue(){
        demoProgress.innerHTML += `<span>.<span class="code__demo-red">split</span>(<span class="code__demo-red">''</span>)</span>`;
        let div = document.createElement('div');
        elemArr.forEach((elem, index)=>{
            if(index == 1||index==elemArr.length-2){
               return; 
            }
            div.append(elem)
        });
        demo.innerHTML = div.innerHTML;
        arrayTimeout.push(setTimeout(animateExpression,50,demo));
        arrayTimeout.push(setTimeout(powValue, delay*1.5,demo));
    }

    function powValue(parent){
        demoProgress.innerHTML += `<span>.<span class="code__demo-red">map</span>(function(x){return x*x;})</span>`;
        const digitsArr = parent.querySelectorAll('.code__demo-digit');
        digitsArr.forEach((digit, index)=>{
            let value = digit.innerText;
            arrayTimeout.push(setTimeout(()=>{
                digit.innerText = `${digit.innerText}"*"${digit.innerText}`
            },400*(index)));
            arrayTimeout.push(setTimeout(()=>{
                digit.innerText = `${value*value}`;
                
            },delay * 2))
        })
        arrayTimeout.push(setTimeout(()=>{hideElem(demo)},delay*3));
    }

    function hideElem(parent){
        demoProgress.innerHTML += `<span>.<span class="code__demo-red">join</span>()</span>`;
        const arrayQuotes = parent.querySelectorAll('.code__demo-quotes');
        const arrayCommas = parent.querySelectorAll('.code__demo-comma');
        const arrayBrackets = parent.querySelectorAll('.code__demo-brackets');
        arrayQuotes.forEach((elem,index)=>{
            arrayTimeout.push(setTimeout(()=>elem.classList.add('code__demo-quotes-big'),200*(index+1)));
        });

        arrayCommas.forEach((elem,index)=>{
            arrayTimeout.push(setTimeout(()=>elem.classList.add('code__demo-comma-invisible'),400*(index+1)));
        });

        arrayBrackets.forEach((elem)=>{
            elem.classList.add('code__demo-quotes-big');
            elem.addEventListener('transitionend',showQuotes);
            function showQuotes(){
                elem.removeEventListener('transitionend',showQuotes);
                elem.innerText=`"`;
                elem.classList.remove('code__demo-quotes-big');
            }
        });

        arrayTimeout.push(setTimeout(()=>{
            demoProgress.innerHTML = `<span><span class="code__demo-red">squareDigits</span>(${value})-></span><span> + ${value}.<span class="code__demo-red">toString</span>()</span><span>.<span class="code__demo-red">split</span>(<span class="code__demo-red">''</span>)</span><span>.<span class="code__demo-red">map</span>(function(x){return x*x;})</span><span>.<span class="code__demo-red">join</span>()</span>`;
            arrayBrackets.forEach((elem)=>{
                elem.classList.add('code__demo-quotes-big')
            })
        },delay*2))
    }
}

// animateDemo(49);
export default animateDemo;