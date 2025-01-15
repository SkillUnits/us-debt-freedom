var slider = document.getElementById("range-slider");
var output = document.getElementById("selected-value");
var finalValueElement = document.getElementById("final-value");

// Встановлення початкового значення для обраного числа
output.innerHTML = parseInt(slider.value).toLocaleString('en-US');

slider.oninput = function() {
    // Форматування обраного значення
    output.innerHTML = parseInt(this.value).toLocaleString('en-US');

    // Обчислення фінального значення залежно від діапазону
    var finalValue;
    if (this.value < 30000) {
        finalValue = Math.floor(this.value * 0.55);
    } else if (this.value >= 30000 && this.value < 70000) {
        finalValue = Math.floor(this.value * 0.49);
    } else if (this.value >= 70000 && this.value <= 100000) {
        finalValue = Math.floor(this.value * 0.39);
    }

    // Відображення фінального значення з форматом чисел
    finalValueElement.innerHTML = finalValue.toLocaleString('en-US');
};
