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

//querySelector - найди элемент

// Где искать? - document. //  contentFormElement.
// Что искать? - ('.content__form') // 


let contentFormElement = document.querySelector('.content__form');
console.log(contentFormElement);
let selectColorElement = contentFormElement.querySelector('select');
console.log(selectColorElement);
let selectColorOptionElements = selectColorElement.querySelectorAll('option');
console.log(selectColorOptionElements)

console.log(selectColorOptionElements[2].value)
let bodyElement = document.querySelector('body');


for (let index = 0; index < selectColorOptionElements.length; index++) {
    if (selectColorOptionElements[index].selected == true) {
        bodyElement.style.backgroundColor = selectColorOptionElements[index].value;
    }
}
