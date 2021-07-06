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


// let exampleElement = document.querySelector('.example');
// let inputElements = exampleElement.querySelectorAll('input');
// for (let index = 0; index < inputElements.length; index++) {
//     if (inputElements[index].type == "text") {
//         console.log(inputElements[index].value);
//     }
//     else if (inputElements[index].type == "button") {
//         console.log(inputElements[index].value);
//     }
//     else if (inputElements[index].type == "checkbox" && inputElements[index].checked == false) {
//         inputElements[index].checked = true;
//     }
// }


//  Найти в footer все checkbox'ы
//  Отобрать чекбоксы, которые нажаты (с галочкой) и выключить их все

// Сделать, чтобы отключение всех чекбоксов происходило только по нажатию на кнопку "Сброс"
// let footerElement = document.querySelector('.footer');
// let inputFooterElements = footerElement.querySelectorAll('input');

// function press() {


//     for (let index = 0; index < inputFooterElements.length; index++) {
//         if (inputFooterElements[index].type == "checkbox" && inputFooterElements[index].checked == true) {
//             inputFooterElements[index].checked = false;
//         }
//     }
// }

// // 
// let boxesElement = document.querySelector('.boxes');
// let inputBoxesElements = boxesElement.querySelectorAll('input');
// let answer; // Если ответ неверный, то он 0

// function pressbtn() {
//     for (let index = 0; index < inputBoxesElements.length; index++) {
//         if (inputBoxesElements[index].checked == true && inputBoxesElements[index].value == "6") {
//             answer = true;

//         }
//         else if (inputBoxesElements[index].checked == true) {
//             answer = false;
//         }

//     }

//     if (answer == true) {
//         alert("True")
//     } else {
//         alert("False")
//     }

// }


// let footerElement = document.querySelector('.footer');
// let inputFooterElements = footerElement.querySelectorAll('input');
// console.log(inputFooterElements);

// function press() {
//     for (let index = 0; index < inputFooterElements.length; index++) {
//         if (inputFooterElements[index].type == "checkbox" && inputFooterElements[index].checked == true) {
//             inputFooterElements[index].checked = false;
//         }
//         else if (inputFooterElements[index].type == "checkbox" && inputFooterElements[index].checked == false) {
//             inputFooterElements[index].checked = true;
//         }
//     }
// }

// let bodyElement = document.querySelector('body');
// let contentFormElement = document.querySelector('.content__form');
// let selectContenFormElement = contentFormElement.querySelector('select');
// let optionElements = selectContenFormElement.querySelectorAll('option');


// // for (let index = 0; index < optionElements.length; index++) {
// //     if (optionElements[index].selected == true) {
// //         bodyElement.style.backgroundColor = optionElements[index].value;
// //     }
// // }


// function selected() {
//     for (let index = 0; index < optionElements.length; index++) {
//         if (optionElements[index].selected == true) {
//             bodyElement.style.backgroundColor = optionElements[index].value;
//         }
//     }
// }


// let taskElement = document.querySelector('.task');
// let inputTextElement = taskElement.querySelector('input');
// function pressAns() {
//     if (inputTextElement.value == 1939) {
//         alert("правильно")
//     }
//     else {
//         alert("ошибка")
//     }
// }


// let taskElement = document.querySelector('.task-2');

// let inputTextElements = taskElement.querySelectorAll('input');
// function pressAnswer() {

//     let Ans1 = "html";
//     let Ans2 = "css";

//     let answerCount = 0;

//     for (let index = 0; index < inputTextElements.length; index++) {
//         if (inputTextElements[index].checked == true && (inputTextElements[index].value == Ans1 || inputTextElements[index].value == Ans2)) {
//             answerCount++
//             console.log(answerCount);
//         }
//         else if (inputTextElements[index].checked == true) {
//             answerCount--
//             console.log(answerCount);
//         }
//     }

//     if (answerCount == 2) {
//         alert("Всё верно")
//     } else {
//         alert("Неверно")
//     }
// }


// Создать массив, заполнить его любыми значениями (вручную) с 1, 2, 3
// Всего элементов должно получиться - 10

// Посчитать и вывести в терминал количество 2

// let mass = [1, 2, 3, 1, 1, 2, 3, 2, 1, 3];
// let countTwo = 0; // количество двоек
// let countOne = 0;
// let countThree = 0;

// for (let index = 0; index < mass.length; index++) {
//     if (mass[index] == 1) {
//         // countTwo++
//         countOne = countOne + 1;
//     }
//     else if (mass[index] == 2) {
//         countTwo = countTwo + 1;
//     }
//     else if (mass[index] == 3) {
//         counThree = countThree + 1;
//     }
// }

// console.log("Количество 1: " + countOne);
// console.log("Количество 2: " + countTwo);
// console.log("Количество 3: " + countThree);

// // 1 итерация: index = 0  countTwo = 0; 
// // 1 == 2?
// // 2 итерация: index = 1 countTwo = 1;
// // 3 итерация: index = 2 


// /content-bottom__list посчитать количество li

// let contentBottomListElement = document.querySelector('.content-bottom__list');
// let liElements = contentBottomListElement.querySelectorAll('li');

// let count = 0;
// for (let index = 0; index < liElements.length; index++) {
//     count++
// }

// console.log(liElements.length);

// Задача посчитать количество чекбоксов


// let contentFooterElement = document.querySelector('.footer');
// let inputElements = contentFooterElement.querySelectorAll('input');
// let countCheckBox = 0;

// for (let index = 0; index < inputElements.length; index++) {
//     if (inputElements[index].type == "checkbox") {
//         countCheckBox++;
//     }
// }
// console.log(countCheckBox);

// ПОсчитать количество полей для ввода текста в footer


// let countText = 0;
// for (let index = 0; index < inputElements.length; index++) {
//     if (inputElements[index].type == "text") {
//         countText++;
//     }

// }
// console.log(countText);

// Посчитать количество input'ов в .footer
// let countInput = 0;
// for (let index = 0; index < inputElements.length; index++) {
//     countInput++;

// }
// console.log(inputElements);

// Посчитать количество input'ов c типом текст, значения которых равно "свой"

// let countMine = 0;
// for (let index = 0; index < inputElements.length; index++) {

//     if (inputElements[index].type == "text" && inputElements[index].value == "Свой") {
//         countMine++;
//     }
// }
// console.log(countMine);


// Посчитать сколько всего элементов в блоке .footer

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];

// }
// console.log(inputElements.length);

// // Посчитать количество нажатых чекбоксов в .footer
// let countBox = 0;
// for (let index = 0; index < inputElements.length; index++) {
//     if (inputElements[index].type == "checkbox" && inputElements[index].checked) {
//         countBox++;
//     }
// }
// console.log(countBox);

// // let a = (3 > 7) && (7 > 5);
// // console.log(a);
// // (3 > 7) && (7 > 5) = false

// if (false) {
//     console.log("Это работает!");
// } else {
//     console.log("!false");
// }

// Логическое И
// A && B = C
// t    t = t
// f    f = f
// t    f = f
// f    t = f

// Логическое ИЛИ
// A || B = C
// t    t = t
// f    f = f
// t    f = t
// f    t = t

//

// let mass = [1, 2, 3, 1, 1, 2, 3, 2, 1, 3];
// let countTwo = 0; // количество двоек
// let countOne = 0;
// let countThree = 0;

// for (let index = 0; index < mass.length; index++) {
//     if (mass[index] == 1) {
//         // countTwo++
//         countOne = countOne + 1;
//     }
//     else if (mass[index] == 2) {
//         countTwo = countTwo + 1;
//     }
//     else if (mass[index] == 3) {
//         counThree = countThree + 1;
//     }
// }









// array = [0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0]
// let countArrayZero = 0;
// let countArrayOne = 0;

// for (let index = 0; index < array.length; index++) {
//     if (array[index] == 0) {
//         countArrayZero++;
//     }
//     else if (array[index] == 1) {
//         countArrayOne++;
//     }
// }
// console.log(countArrayZero);
// console.log(countArrayOne);



