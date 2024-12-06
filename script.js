const number = document.getElementById('number');

function numChecker(event) {
    const value = number.value;
    if (isNaN(value) || value.trim() === "") {
        event.preventDefault();
        alert("Please enter a valid number");
        number.value = '';
        return;
    }

    if (value <= 10) {
        event.preventDefault();
        alert("Please enter a number greater than 10");
        number.focus();
        return;
    }
}