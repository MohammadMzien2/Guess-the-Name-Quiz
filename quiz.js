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

function selectHowManyToChoce(num, id) {
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
function selectName(id) {
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
            k++
        }
    }
    startGame();
}

function startGame() {
    for (let i = 0; i < document.getElementsByClassName('nameOption').length; i++) {
        document.getElementsByClassName('nameOption')[i].disabled = false;
        document.getElementsByClassName('nameOption')[i].style.display = 'block';
    }

    document.getElementsByClassName('check')[0].style.display = 'flex';
    document.getElementsByClassName('next')[0].style.display = 'flex';

    loadNext();
}

function loadNext() {
    numOfQuestions++;
    if (numOfQuestions <= selectedNum) {
        question = {
            id: '',
            image: '',
            names: [
                '', '', '', ''
            ]
        };
        document.querySelector('.check').disabled = true;
        document.querySelector('.next').disabled = true;

        for (let i = 0; i < document.getElementsByClassName('nameOption').length; i++) {
            document.getElementsByClassName('nameOption')[i].disabled = false;
            document.getElementsByClassName('nameOption')[i].classList.remove('selectedButton');
            document.getElementsByClassName('nameOption')[i].classList.remove('correct-answer');

        }
        loadQuestion();
    }
    else {
        endOfTheGame();
    }
}
function endOfTheGame() {
    showResult();

    correctAnswers = 0;
    numOfQuestions = 0;
    arrayOfStudent = [];

    document.getElementsByClassName('check')[0].style.display = 'none';
    document.getElementsByClassName('next')[0].style.display = 'none';

    document.querySelector('.imageBoxText').style.display = 'none';
    document.querySelector('.restart').style.display = 'flex';
    document.querySelector('.imageBoxImg').style.display = 'none';

    for (let i = 0; i < document.getElementsByClassName('student').length; i++) {
        document.getElementsByClassName('student')[i].disabled = true;
        document.getElementsByClassName('student')[i].classList.remove('selectedButton');
    }
    for (let i = 0; i < document.getElementsByClassName('nameOption').length; i++) {
        document.getElementsByClassName('nameOption')[i].classList.remove('selectedButton');
        document.getElementsByClassName('nameOption')[i].classList.remove('correct-answer');
        document.getElementsByClassName('nameOption')[i].disabled = true;
        document.getElementsByClassName('nameOption')[i].style.display = 'none';
    }
    document.querySelector('.check').disabled = true;
    document.querySelector('.next').disabled = true;
}

function restartGame() {
    document.querySelector('.imageBoxText').style.display = 'block';
    document.querySelector('.restart').style.display = 'none'
    document.querySelector('.result').innerHTML = '';

    document.getElementsByClassName('student')[0].disabled = false;
    document.getElementsByClassName('student')[1].disabled = false;
    document.getElementsByClassName('student')[2].disabled = false;

    for (let i = 0; i < document.getElementsByClassName('student').length; i++) {
        document.getElementsByClassName('student')[i].disabled = false;
    }
}
function loadQuestion() {
    loadPhoto();
    document.querySelector('.next').disabled = true;
}

function loadPhoto() {
    while (question.image == '') {
        question.id = Math.floor(Math.random() * arrayOfStudent.length);
        if (arrayOfStudent[question.id].image != '') {
            question.image = arrayOfStudent[question.id].image;
            arrayOfStudent[question.id].image = '';
        }
    }
    document.querySelector('.imageBoxText').style.display = 'none';
    document.querySelector('.imageBoxImg').style.display = 'inline-block';
    document.querySelector('.imageBoxImg').src = question.image;
    loadNameOptions();
}
function loadNameOptions() {
    question.names[Math.floor(Math.random() * 4)] = arrayOfStudent[question.id].name;
    while (question.names.includes('')) {
        let randomPlace = Math.floor(Math.random() * 4);
        let randomName = students[Math.floor(Math.random() * arrayOfStudent.length)].name;
        if (question.names[randomPlace] == '' && !question.names.includes(randomName)) {
            question.names[randomPlace] = randomName;
        }
    }
    fillNameOptions();
}

function fillNameOptions() {
    for (let i = 0; i < 4; i++) {
        document.getElementsByClassName('nameOption')[i].innerHTML = question.names[i];
    }
}
function checkAnswer() {
    for (let i = 0; i < document.getElementsByClassName('nameOption').length; i++) {
        document.getElementsByClassName('nameOption')[i].disabled = true;
        if (document.getElementsByClassName('nameOption')[i].innerHTML == arrayOfStudent[question.id].name) {
            document.getElementsByClassName('nameOption')[i].classList.add('correct-answer');
            if (document.getElementsByClassName('nameOption')[i].classList.contains('selectedButton')) {
                correctAnswers++
            }
        }
        document.querySelector('.next').disabled = false;
    }
}
function showResult() {
    document.querySelector('.result').innerHTML = correctAnswers + ' / ' + arrayOfStudent.length;
}
