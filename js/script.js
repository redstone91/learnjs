// Условия

// Строка
// Числа
// Массивы
// Boolean (bool) - true / false

// При преобразовании в тип bool:
// Пустая строка "" - false, " " - true
// Число 0  - false, остальные числа - true

// && - логическое И
// true && true = true
// Всё остальное = false

// || - логическое ИЛИ
// false || false = false
// Всё остальное = true

// >= больше или равно
// <= меньше или равно

// ! - не (!false -> true, !true -> false)
// != - неравенство

// == - равно ("2" == 2 -> true)
// === - равно ("2" === 2 => false)


// let num1 = 5
// let num2 = 5
// if (!(num1 == num2)) {
//     console.log("1")
// } else {
//     console.log("2")
// }

// let bl = 7
// let bl2 = 3
// let bl3 = 5
// let bl4 = 9

// if ((bl > bl2) && (bl3 > bl4)) {
//     console.log("Строка 4")
// } else {
//     console.log("Строка 6")
// }

// задача 1
// СОздать 2 перемнные, присвоить им разные числа
// Если первое число больше второго, то вывести в консоль: "1"
// Если числа равные, то вывести в косноль фразу: "Числа равные"
// Иначе вывести "2"

// console.log("строка")
// console.log(233)
// let number = 87
// console.log(number)


// let num1 = 50;
// let num2 = 6;

// if (num1 > num2) {
//     console.log(num1)
// } else if (num1 == num2) {
//     console.log("Числа равные")
// } else {
//     console.log(num2)
// }

// Задача 2
// Создать 2 переменные
// Присвоить им следующий текст:
// 1: "key"
// 2: "keys"
// 3: "key"
// Если все три слова одинаковые, то вывести в косноль: "одинаковы"
// Если хотя бы 2 из них одинаковы, то вывести: "почти все одинаковы"
// Иначе: "разные"


// let text = 'key1';
// let text2 = "key";
// let text3 = 'keys';

// if (text == text2 && text == text3) {
//     console.log('одинаковы')
// } else if (text == text2 || text == text3 || text2 == text3) {
//     console.log('почти все одинаковы')
// } else {
//     console.log('разные')
// }

// Промежутки: число от 2 вкл до 12 не вкл.
// let num = 1;
// if (num >= 2 && num < 12) {
//     console.log("попали")
// } else {
//     console.log("Не попали")
// }

// alert - вывод сообщения
// prompt - вывод сообщения с просьбой ввести какой-то текст
// confirm - вывод сообщения с кнопками ОК/ Cancel  - возвращается true / false

// let word = prompt("!! текст:");
// if (word == "luck") {
//     console.log("you are lucky")
// }
// else {
//     console.log("so so")
// }

// let number = prompt("Введите число: ");
// if (number > 7 && number < 23) {
//     console.log("good")
// }
// else {
//     console.log("bad")
// }

// от 21 вкл до 50 вкл, то вывести js
// от 50 не вкл до 75 вкл

// let num = prompt("Пиши");
// if (num >= 0 && num <= 10) {
//     console.log("html5")
// }
// else if (num >= 11 && num < 20) {
//     console.log("css3")
// }
// else if (num >= 21 && num <= 50) {
//     console.log("js")
// }
// else if (num > 50 && num <= 75) {
//     console.log("python")
// }
// else {
//     console.log("error")
// }

let num1 = 5;
let num2 = 5;
let num3 = 5;
if (num1 > num2 && num1 > num3) {
    console.log(num1)
}
else if (num2 > num1 && num2 > num3) {
    console.log(num2)
}
else {
    console.log(num3)
}
