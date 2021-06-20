// let contentFormElement = document.querySelector('.content__form');
// let inputElements = contentFormElement.querySelectorAll('input');

// let checkBoxElement;
// // console.log(inputElements[1].type);
// for (let index = 0; index < inputElements.length; index++) {
//     if (inputElements[index].type == "checkbox") {
//         console.log(index);
//         // inputElements[index].checked = true;
//         checkBoxElement = inputElements[index];
//     }
// }


// // Посчитать количество нажатых чекбоксов
// let footerElement = document.querySelector('.footer');
// let inputElements = footerElement.querySelectorAll('input');

// let countCheckedCheckBox = 0;

// for (let index = 0; index < inputElements.length; index++) {
//     if (inputElements[index].type == "checkbox" && inputElements[index].checked == true) {
//         countCheckedCheckBox++;
//     }
// }

// console.log(countCheckedCheckBox);


let exampleElement = document.querySelector('.example');
let inputElements = exampleElement.querySelectorAll('input');
for (let index = 0; index < inputElements.length; index++) {
    if (inputElements[index].type == "text") {
        console.log(inputElements[index].value);
    }
    else if (inputElements[index].type == "button") {
        console.log(inputElements[index].value);
    }
    else if (inputElements[index].type == "checkbox" && inputElements[index].checked == false) {
        inputElements[index].checked = true;
    }
}


//  Найти в footer все checkbox'ы
//  Отобрать чекбоксы, которые нажаты (с галочкой) и выключить их все

// Сделать, чтобы отключение всех чекбоксов происходило только по нажатию на кнопку "Сброс"
let footerElement = document.querySelector('.footer');
let inputFooterElements = footerElement.querySelectorAll('input');

function press() {


    for (let index = 0; index < inputFooterElements.length; index++) {
        if (inputFooterElements[index].type == "checkbox" && inputFooterElements[index].checked == true) {
            inputFooterElements[index].checked = false;
        }
    }
}

// 
let boxesElement = document.querySelector('.boxes');
let inputBoxesElements = boxesElement.querySelectorAll('input');
let answer; // Если ответ неверный, то он 0

function pressbtn() {
    for (let index = 0; index < inputBoxesElements.length; index++) {
        if (inputBoxesElements[index].checked == true && inputBoxesElements[index].value == "6") {
            answer = true;

        }
        else if (inputBoxesElements[index].checked == true) {
            answer = false;
        }

    }

    if (answer == true) {
        alert("True")
    } else {
        alert("False")
    }

}