const FirstContainer = document.querySelector('.visibleBox');
const SecondContainer = document.querySelector('.SecondContainer');
const btn = document.querySelector('.go-to-btn');
const min = document.querySelector('#min');
const sec = document.querySelector('#sec');

let countMin = 0;
let countSec = 1;
let timePassed = 1;
var score = 0;

// Hiding the Second Container Initially
SecondContainer.classList.add('notActive')

// Defining the Questions Set
var question = '[{"question": "Q1. What is the capital of France?","options": ["Berlin", "Madrid", "Paris", "Rome"],"answer": "Paris"},{"question": "Q2. Who wrote the play \'Romeo and Juliet\'?","options": ["Charles Dickens", "William Shakespeare", "Jane Austen", "Leo Tolstoy"],"answer": "William Shakespeare"},{"question": "Q3. Which planet is known as the \'Red Planet\'?","options": ["Venus", "Mars", "Jupiter", "Saturn"],"answer": "Mars"},{"question": "Q4. Which gas do plants absorb from the atmosphere during photosynthesis?","options": ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],"answer": "Carbon dioxide"},{"question": "Q5. What is the chemical symbol for gold?","options": ["Go", "Ge", "Au", "Ag"],"answer": "Au"}]';

// Parsing the questions
var dataModel = JSON.parse(question);
    
// In Data Model we run a For Each loop to generate question 
function forEach(dataModel,fn){
    for(i=0; i<dataModel.length; i++){
        fn(dataModel[i]);
    }       
}

// Creating article for each question and adding it to the Question Section
forEach(dataModel, (d) => {
    var article = document.createElement('article');
    article.innerHTML = "<p>" + dataModel[i].question + "</p>";

    for(j=0; j<d.options.length; j++){
        var radio = document.createElement('input')
        radio.setAttribute('type','radio')
        radio.setAttribute('id','options'+i+""+j)
        radio.setAttribute('value',i+":"+d.options[j])
        radio.setAttribute('name','options'+i)

        var label = document.createElement('label')
        label.setAttribute('for','options'+i+""+j)
        label.innerHTML = d.options[j]

        var breaktag = document.createElement('br')
        article.append(radio);
        article.append(label)
        article.append(breaktag)
    }
    document.getElementById("questions").append(article)
})


// Action to be performed when button is clicked

function ActionPerform(){
    FirstContainer.classList.add('notActive');
    calculateScore();
    showScore(score);
    copyfnc();
    tocheck();
    SecondContainer.classList.remove('notActive');
}

// Copy function create a copy of questions to view when submit btn is clicked    
function copyfnc(){
    
    function forEach(dataModel,fn){
        for(i=0; i<dataModel.length; i++){
            fn(dataModel[i]);    
        }       
    }
    // Creating article for each question and it options
    forEach(dataModel, (d) => {
        var article = document.createElement('article');
        article.innerHTML = "<p>" + dataModel[i].question + "</p>";

        for(j=0; j<d.options.length; j++){
            var radio = document.createElement('input')
            radio.setAttribute('type','radio')
            radio.setAttribute('id','choice'+i+""+j)
            radio.setAttribute('value',i+":"+d.options[j])
            radio.setAttribute('name','choice'+i)

            var label = document.createElement('label')
            label.setAttribute('for','choice'+i+""+j)
            label.innerHTML = d.options[j]

            var breaktag = document.createElement('br')
            article.append(radio);
            article.append(label)
            article.append(breaktag)
        }
        document.getElementById("question").append(article)
    })
}

// Check Total number of Correct Answers
function calculateScore(){
    let questionOptions = document.querySelectorAll('[id^=options]');
    console.log(questionOptions);
    
    for(let i=0; i<questionOptions.length; i++){
        if(questionOptions[i].checked){
            console.log(questionOptions[i])
            var options = questionOptions[i].value.split(":")
            console.log(options);
            if(dataModel[options[0]].answer == options[1]){
                score += 1
            }
        }
    }
}

// This function marks all the options checked submitted by the user
function tocheck(){
    let questionOptions = document.querySelectorAll('[id^=options]');
    let questionOptions2 = document.querySelectorAll('[id^=choice]');
    console.log(questionOptions2)
    for(i=0; i<questionOptions.length; i++){
        if(questionOptions[i].checked){
                questionOptions2[i].checked = true;
        }
    }
}

function showScore(score){
    var section = document.getElementById("scoreSection");
    // removeNodes(section);
    var article = document.createElement('article');
    article.innerHTML = "<p><b> Total Correct Answers : " + score + "<p><b>";
    section.append(article);
}



function timer(){
    function myStopFunction() {
        clearInterval(myInterval);
    }

    const myInterval = setInterval(()=>{
        if(timePassed == 300){  
            if(btn.clicked == true){}
            else{
                ActionPerform();
            }
            myStopFunction();
        }
        else if(timePassed%60 == 0){
            countMin++;
            countSec=0;
            min.innerText = countMin;
        }
        else{
            sec.innerText = countSec;
            countSec++;
        }
        
        timePassed++;
    },1000);

    
}

window.onload = timer



