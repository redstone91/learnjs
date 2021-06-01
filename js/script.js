// По id ("#text-1")
// По тегу ("div")
// По классу (".content")


// Возьмика и собери мне массив всех элементов, у которых есть класс/id/теги одинаквоые
// querySelectorAll() - всегда возвращает список(массив) с элементами

// querySelector() - возвращает 1 элемент (самый первый, который найдёт, неважно класс или id)

let cont = document.querySelectorAll(".content")
console.log(cont[2])


// cont.style.color = "red";

// Массив
let array = ["el1", "el2", "el3"]
console.log(array[0])


// Задача дать стиль нижнему блоку body__text
let BodyText = document.querySelectorAll(".body__text")
console.log(BodyText[1])

BodyText[1].style.backgroundColor = "tomato";



