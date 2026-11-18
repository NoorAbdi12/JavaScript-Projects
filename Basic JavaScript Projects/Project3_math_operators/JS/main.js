// Addition function
function addition_Function() {
    var result = 10 + 15;
    document.getElementById("Math").innerHTML =
        "10 + 15 = " + result;
}

// Subtraction function
function subtraction_Function() {
    var result = 20 - 8;
    document.getElementById("Subtraction").innerHTML =
        "20 - 8 = " + result;
}

// Multiplication function
function multiplication_Function() {
    var result = 6 * 7;
    document.getElementById("Multiplication").innerHTML =
        "6 × 7 = " + result;
}

// Modulus function: returns the remainder
function modulus_Function() {
    var result = 25 % 6;
    document.getElementById("Modulus").innerHTML =
        "25 % 6 = " + result;
}

// Increment function: increases a number by 1
function increment_Function() {
    var number = 5;
    number++;
    document.getElementById("Increment").innerHTML =
        "5 incremented by 1 = " + number;
}

// Decrement function: decreases a number by 1
function decrement_Function() {
    var number = 10;
    number--;
    document.getElementById("Decrement").innerHTML =
        "10 decremented by 1 = " + number;
}

// Random function: generates a number from 0 up to 10
function random_Function() {
    var result = Math.random() * 10;
    document.getElementById("Random").innerHTML =
        "Random number: " + result;
}
