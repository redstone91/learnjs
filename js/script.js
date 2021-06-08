// Обратиться к шапке сайта и дать ей другой задний фон

let headerElement = document.querySelector('header');
headerElement.style.background = "green";

// Обратиться content-bottom__list и дать ему границу
// Скруглим границы на 30 пикселей
let contentBottomListElement = document.querySelector('.content-bottom__list');
// 1 вариант

contentBottomListElement.style.border = "1px solid #000";
contentBottomListElement.style.borderRadius = "20px";
// 2 вариант
contentBottomListElement.style.cssText = `
border: 1px solid #000;
border-radius: 20px;
`;

// Обратиться к 7 тегу li и поменять размер шрифта
// let liElements = contentBottomListElement.querySelectorAll('li'); // будет искать ли внутри класса .content-bottom__list
// liElements[6].style.cssText = `
// font-size: 30px;
// `;


// Обратиться ко всем li и дать рамку + скругление
// а 6 элементу помимо этих стилей добавить задний фон жёлтого цвета
let liElements = contentBottomListElement.querySelectorAll('li'); // будет искать ли внутри класса .content-bottom__list
for (let index = 0; index < liElements.length; index++) {
    if (index == 5) {
        liElements[index].style.cssText = `
        border: 1px solid #000;
        border-radius: 20px;
        padding: 10px;
        background: yellow;
        
    `;
    } else {
        liElements[index].style.cssText = `
        border: 1px solid #000;
        border-radius: 20px;
        padding: 10px
    `;
    }
}

// if (){}
// else if (){}
// else if (){}
// else if (){}
// else{}


// let inputTextElement = document.getElementById('input-text') // Элемент
// console.log(inputTextElement);
// let inputTextElements = document.getElementsByClassName('content__input') // Массив
// console.log(inputTextElements);












