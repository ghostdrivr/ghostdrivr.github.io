let plus = 1;
let plus1 = 2;
//plus + plus1; это сложение (конкатенация) чисел. Для проверки напишите "plus + plus1" в "Консоль отладки".
//
let slovo = 'Hello ';
let slovo1 = 'world!';
//slovo + slovo1; это тоже сложение (конкатенация) только слов. Для проверки напишите "slovo + slovo1" в "Консоль отладки".
//
let vichet = 5;
let vichet1 = 3;
//vichet - vichet1; это вычитание чисел Для проверки напишите "vichet - vichet1" в "Консоль отладки".
//
let umnozh = 3;
let umnozh1 = 4;
//umnozh * umnozh1; это умножение чисел. Для проверки напишите "umnozh * umnozh1" в "Консоль отладки".
//
let delenie = 10;
let delenie1 = 5;
//delenie / delenie1; это деление чисел. Для проверки напишите "delenie / delenie1" в "Консоль отладки".
//
let tozhd = 5;
//tozhd === 5; это равенство(тождество) верно. Для проверки напишите "tozhd === 5" в "Консоль отладки".
//
let tozhd1 = 4;
//tozhd === 3; это равенство(тождество) неверно. Для проверки напишите "tozhd1 === 3" в "Консоль отладки".
//
let otric = 3;
//otric !== 3; это отрицание(неравенство) неверно, потому что оно меняет местами правду и ложь.
//Для проверки напишите "otric !== 3 (или же !(otric === 3))" в "Консоль отладки".
//
let otric1 = 4;
//otric1 !== 3; это отрицание(неравенство) верно, потому что оно меняет местами правду и ложь.
//Для проверки напишите "otric1 !== 3 (или же !(otric1 === 3))" в "Консоль отладки".
//
// document.querySelector('html').onclick = function () {alert('Ай! хватит кликать по мне!');}
//Для создания интерактивности вбейте это в консоль и нажмите в любую область страницы
let myImage = document.querySelector('img')

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/my-image.png') {
        myImage.setAttribute('src','images/firefox2.png');
    } else {
        myImage.setAttribe('src','images/my-image.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1')

function setUserName() {
    let myName = prompt('Пожалуйста, введите ваше имя.')
    if(!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'Mozilla это хорошо, ' + myName;
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Mozilla это хорошо, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}