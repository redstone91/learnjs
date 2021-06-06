// 

let bodyElement = document.querySelector('.body');
bodyElement.style.background = "lime";

let bodyTextElements = document.querySelectorAll('.body__text');

// // console.log(bodyTextElements.length);
// bodyTextElements[0].style.color = "blue";
// bodyTextElements[1].style.color = "blue";
// bodyTextElements[2].style.color = "blue";
// bodyTextElements[3].style.color = "blue";

// Вывести в консоль 5 раз какой-то текст
for (index = 0; index < bodyTextElements.length; index++) {
    if (index == 2) {
        bodyTextElements[index].style.color = "red";
    } else {
        bodyTextElements[index].style.color = "blue";
    }

}





