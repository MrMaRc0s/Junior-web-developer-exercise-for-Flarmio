// Select the necessary elements
const number = document.getElementById('number');
const button = document.querySelector('.button');

function numChecker(event) {
    const value = Number(number.value);
    if (value <= 10 || isNaN(value)) {
        event.preventDefault(); // Prevent any default behavior
        alert("enter a number greater than 10.");
    }
}