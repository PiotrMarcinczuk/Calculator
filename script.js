const previous = document.querySelectorAll('.previous');
const current = document.querySelectorAll('.current');
const sign = document.querySelectorAll('.sign');
const number = document.querySelectorAll('.number');
const p_current = document.querySelector('.current p');
const p_previous = document.querySelector('.previous p');
const clear = document.querySelectorAll('.clear');

let current_number = 0;
let current_operator = '';

sign.forEach((button) => button.addEventListener('click', operate));
number.forEach((button) => button.addEventListener('click', display_number));

clear.forEach((button) => {
    button.addEventListener('click', () => {
        p_current.textContent = '';
        p_previous.textContent = '';
    })
})
function display_number(){
    if(this.textContent === '.' && p_current.textContent === ''){
        p_current.textContent = '0.'
    }else if(p_current.textContent !== '' && !p_current.textContent.includes('.')){
        p_current.textContent += this.textContent;
    }else if(this.textContent !== '.' && p_current.textContent.includes('.')){
        p_current.textContent += this.textContent;
    }else{
        if(this.textContent !== '.'){
            p_current.textContent += this.textContent;
        }
    }
}

function operate(){
    if(p_current.textContent !== ''){
        
        if(p_previous.textContent === ''){
            current_operator = this.textContent;
            current_number = p_current.textContent;
            p_previous.textContent = current_number;   
            p_previous.textContent += current_operator;
        }else{ 
            if(this.textContent && !p_previous.textContent.includes(this.textContent)){
                console.log(this.textContent);
                console.log(current_operator)
                console.log(432534534);
                math(current_operator);
                p_previous.textContent += this.textContent;
            }else{
                math(current_operator);
            p_previous.textContent += current_operator;
            current_number = parseFloat(p_previous.textContent);   
            }
        }
        p_current.textContent = '';
    } 
    current_operator = this.textContent;
}



function math(current_operator){
    switch(current_operator){
        case '+':
            console.log(parseFloat(p_previous.textContent));
            p_previous.textContent = parseFloat(p_previous.textContent) + parseFloat(p_current.textContent);
            if(p_current.textContent.includes('.')){
                p_previous.textContent = parseFloat(p_previous.textContent).toFixed(3)
            }   
            break; 
        case '-':
            console.log(parseFloat(p_previous.textContent));
            p_previous.textContent = parseFloat(p_previous.textContent) - parseFloat(p_current.textContent);
            if(p_current.textContent.includes('.')){
                p_previous.textContent = parseFloat(p_previous.textContent).toFixed(3)
            }   
            break; 
        case '*':
            console.log(parseFloat(p_previous.textContent));
            p_previous.textContent = parseFloat(p_previous.textContent) * parseFloat(p_current.textContent);
            if(p_current.textContent.includes('.')){
                p_previous.textContent = parseFloat(p_previous.textContent).toFixed(3)
            }   
            break; 
        case '/':
            console.log(parseFloat(p_previous.textContent));
            p_previous.textContent = parseFloat(p_previous.textContent) / parseFloat(p_current.textContent);
            if(p_current.textContent.includes('.')){
                p_previous.textContent = parseFloat(p_previous.textContent).toFixed(3)
            }   
            break;
    }
}







