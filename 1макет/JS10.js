let name = prompt("Введите имя:");
let age = prompt("Введите возраст:");
alert(`Ваше имя: ${name}! Ваш возраст: ${age}`);
console.log(`Ваше имя: ${name} Ваш возраст: ${age}`);


if (age >= 18) {
    alert("Вы совершеннолетний");
    console.log("Вы совершеннолетний");
} else {
    alert("Вы несовершеннолетний");
    console.log("Вы несовершеннолетний");
}


let randomNumber = Math.floor(Math.random() * 10) + 1;
let userGuess = prompt("Угадайте число от 1 до 10:");

if (parseInt(userGuess) === randomNumber) {
    alert("Вы угадали число");
    console.log("Вы угадали число");
} else {
    if (parseInt(userGuess) < 5) {
        alert("Ваше число меньше 5");
        console.log("Ваше число меньше 5");
    } else {
        alert("Ваше число больше 5");
        console.log("Ваше число больше 5");
    }
}


let correctPassword = "пароль";
let userPassword = prompt("Введите пароль:");

if (userPassword === "") {
    alert("Пароль не может быть пустым");
    console.log("Пароль не может быть пустым");
} else if (userPassword === correctPassword) {
    alert("Доступ разрешен");
    console.log("Доступ разрешен");
} else {
    alert("Доступ запрещен");
    console.log("Доступ запрещен");
}


let num1 = parseInt(prompt("Введите первое число:"));
let op = prompt("Введите оператор (+, -, *, /):");
let num2 = parseInt(prompt("Введите второе число:"));
let res;

if (op === "+") {
    res = num1 + num2;
} else if (op === "-") {
    res = num1 - num2;
} else if (op === "*") {
    res = num1 * num2;
} else if (op === "/") {
    if (num2 !== 0) {
        res = num1 / num2;
    } else {
        alert("Ошибка: Деление на ноль");
        console.log("Ошибка: Деление на ноль");
    }
} else {
    alert("Неверный оператор");
    console.log("Неверный оператор");
}

if (res !== undefined) {
    alert(`Результат: ${res}`);
    console.log(`Результат: ${res}`);
}
