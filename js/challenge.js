const counterDisplay = document.getElementById('counter');
const plusButton = document.getElementById('plus');
const minusButton = document.getElementById('minus');
const likeButtons = document.getElementById('like');
const pauseButton = document.getElementById('pause');
const restartButton = document.getElementById('restart');
const commentInput = document.getElementById('commentInput');
const commentForm = document.getElementById('commentForm');
const commentSection = document.getElementById('commentSection');

let counter = 0;
let timer;

function updateCounterDiplay(){
    counterDisplay.textContent = counter;
}

function incrementCounter(){
    counter ++;
    updateCounterDiplay();
}

function decrementCounter(){
    counter --;
    updateCounterDisplay();
}

function likeNumber(number){
    const likeCount = document.getElementById('likes${number}');

let count = parseInt(likeCount.textContent);
count ++;
likeCount.textContent = count;
};

function pauseCounter(){
    clearInterval(timer);
    plusButton.disabled = true;
    minusButton.disabled = true;
    pauseButton.textContent = 'Resume';
};

function resumeCounter(){
    plusButton.disabled = false;
    minusButton.disabaled = false;
    pauseButton.textContent = 'Pause';
    startCounter();
};

function submitComment(event){
    event.preventDefault();
    const comment = commentInput.value;
    const commentItem = document.createElement('li');
    commentItem.textContent = comment;
    commentSection.appendChild(commentItem);
    commentInput.value = "";
};

function restartCounter(){
    clearInterval(timer);
    counter = 0;
    updateCounterDiplay();
    plusButton.disabled = false;
    minusButton.disabled = false;
    pauseButton.textContent = 'Pause';
    startCounter();
}

function startCounter(){
    timer = setInterval(incrementCounter, 1000);
}

plusButton.addEventListener('click' , incrementCounter);
minusButton.addEventListener('click' , decrementCounter);
pauseButton.addEventListener('click' , pauseCounter);
restartButton.addEventListener('click' , restartCounter)
commentForm.addEventListener('submit' , submitComment);

startCounter();

