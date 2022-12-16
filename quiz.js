let arrayOfStudent = [];
let question = {
    id: '',
    image: '',
    names: [
        '', '', '', ''
    ]
};
let correctAnswers = 0;
let selectedNum = 0;
let numOfQuestions = 0;

function selcectnumberOfChocie(num, id) {
    selectedNum = num;
    document.getElementsByClassName('student')[id].classList.add('selectedButton');
    for (let i = 0; i < document.getElementsByClassName('student').length; i++) {
        document.getElementsByClassName('student')[i].disabled = true;
        if (i != id) {
            document.getElementsByClassName('student')[i].classList.remove('selectedButton');
        }
    }
    loadArray(num);
}
function selectNameOption(id) {
    document.getElementsByClassName('nameOption')[id].classList.add('selectedButton');
    for (let i = 0; i < document.getElementsByClassName('nameOption').length; i++) {
        if (i != id) {
            document.getElementsByClassName('nameOption')[i].classList.remove('selectedButton');
        }
    }
    document.querySelector('.check').disabled = false;
}
function loadArray(num) {
    let k = 0;
    let j = [];
    while (k < num) {
        let randomPerson = Math.floor(Math.random() * students.length);
        if (!j.includes(students[randomPerson].id)) {
            arrayOfStudent.push(Object.assign({}, students[randomPerson]));
            j.push(students[randomPerson].id);
            l++
        }
        startGame();
    }
}

function startGame() {
    for (let i = 0; i < document.getElementsByClassName('nameOption').length; i++) {
        document.getElementsByClassName('nameOption')[i].disabled = false;
        document.getElementsByClassName('nameOption')[i].style.display = block;
    }

    document.getElementsByClassName('check')[0].style.display = 'flex';
    document.getElementsByClassName('next')[0].style.display = 'flex';

    loadNext();
}

function loadNext(){
    numOfQuestions++;
    if(numOfQuestions <= selectedNum){
        question = {
            id: '',
            image: '',
            names: [
            '', '', '', ''
            ]
        };
        document.querySelector('.check').disabled = true;
        document.querySelector('.next').disabled = true;

        for (let i = 0; i < document.getElementsByClassName('nameOption').length; i++){
            document.getElementsByClassName('nameOption')[i].disabled = false;
            document.getElementsByClassName('nameOption')[i].classList.remove('selectedButton');
            document.getElementsByClassName('nameOption')[i].classList.remove('correct-answer');

        }
        loadQuestion();
    }
    else{
        endOfTheGame();
    }
}
function endOfTheGame(){
    showResult();

    correctAnswers = 0;
    numOfQuestions = 0;
    arrayOfStudent = [];

    document.getElementsByClassName('check')[0].style.display = 'none';
    document.getElementsByClassName('next')[0].style.display = 'none';

    document.querySelector('.imageBoxText').style.display= 'none';
    document.querySelector('.restart').style.display= 'flex';
    document.querySelector('.imageBoxImg').style.display= 'none';

    for (let i = 0; i < document,getElementsByClassName('student').length; i++){
        document.getElementsByClassName('student')[i].disabled = true;
        document.getElementsByClassName('student')[i].classList.remove('selectedButton');
    }
    for (let i = 0; i < document.getElementsByClassName('nameOption').length; i++){
        document.getElementsByClassName('nameOption')[i].classList.remove('selectedButton');
        document.getElementsByClassName('nameOption')[i].classList.remove('correct-answer');
        document.getElementsByClassName('nameOption')[i].disabled = true;
        document.getElementsByClassName('nameOption')[i].style.display = 'none';
    }
    document.querySelector('.check').disabled = true;
    document.querySelector('.next').disabled = true;
}