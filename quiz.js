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

function selcectnumberOfChocie(num, id){
    selectedNum = num;
    document.getElementsByClassName('student')[id].classList.add('selectedButton');
    for (let i = 0; i < document.getElementsByClassName ('student').length; i++){
        document.getElementsByClassName('student')[i].disabled = true;
        if (i != id){
            document.getElementsByClassName('student')[i].classList.remove('selectedButton');
        }
    }
    loadArray(num);
}
function selectNameOption(id){
    document.getElementsByClassName('nameOption')[id].classList.add('selectedButton');
    for(let i = 0; i < document.getElementsByClassName ('nameOption').length; i++){
        if (i != id){
            document.getElementsByClassName('nameOption')[i].classList.remove('selectedButton');
        }
    }
    document.querySelector('.check').disabled = false;
}
