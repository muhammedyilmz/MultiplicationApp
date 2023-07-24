//randon int number 1 or 10
const num1 = Math.ceil(Math.random()*10);

const num2 = Math.ceil(Math.random()*10);


const questionEl = document.getElementById('qustion');

//score write form

questionEl.innerText = `What is ${num1} multiply ${num2}?`


//multiplications
const correctAns = num1 * num2;

const formEl = document.getElementById('form');

const inputEl = document.getElementById('input');

//localstorage to score value
let score =JSON.parse(localStorage.getItem("score"));

const scoreEl = document.getElementById('score');

if(!score){
    score = 0;
}

scoreEl.innerText = `Score: ${score}`;

//Add localstorage to score true and false
formEl.addEventListener('submit', ()=>{

    const userAns = +inputEl.value;

    if(inputEl.value === ''){
        alert('Enter your answer!');
    }
    
    else if(userAns === correctAns){
        score ++;
        updateLocalStorage();
    }
    else{
        score --;
        updateLocalStorage();
    }

});

//update localstorage score
function updateLocalStorage (){
    localStorage.setItem("score", JSON.stringify(score));
};
