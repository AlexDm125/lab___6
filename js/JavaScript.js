// Завдання 8: Випадкова інформація дня
let infoArray = [
    "Цитата 1: Успіх приходить до тих, хто діє.",
    "Цитата 2: Невдача - це лише шанс почати знову.",
    "Цитата 3: Мрії не працюють, поки не працюєш ти.",
    "Цитата 4: Життя - це 10% того, що з тобою відбувається, і 90% того, як ти на це реагуєш.",
    "Цитата 5: Найкращий спосіб передбачити майбутнє - це створити його."
];

function showRandomInfo() {
    let randomIndex = Math.floor(Math.random() * infoArray.length);
    document.getElementById("infoDisplay").innerText = infoArray[randomIndex];
}