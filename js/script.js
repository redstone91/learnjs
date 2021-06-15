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


// Посчитать количество нажатых чекбоксов
let footerElement = document.querySelector('.footer');
let inputElements = footerElement.querySelectorAll('input');

let countCheckedCheckBox = 0;

for (let index = 0; index < inputElements.length; index++) {
    if (inputElements[index].type == "checkbox" && inputElements[index].checked == true) {
        countCheckedCheckBox++;
    }
}

console.log(countCheckedCheckBox);







