
// Create a variable and display its data type.
var myNumber = 25;
document.write("Data type: " + typeof myNumber + "<br>");

// Combine a string and a number using type coercion.
document.write("10" + 5 + "<br>");

// == compares values without requiring the same type.
function equal_Function() {
    document.getElementById("Equal").innerHTML =
        (10 == "10");
}

// === compares both value and data type.
function strict_Equal_Function() {
    document.getElementById("Strict_Equal").innerHTML =
        (10 === "10");
}

// > checks whether one number is greater than another.
function greater_Function() {
    document.getElementById("Greater").innerHTML =
        (20 > 10);
}

// < checks whether one number is less than another.
function less_Function() {
    document.getElementById("Less").innerHTML =
        (5 < 10);
}

// && returns true when both conditions are true.
function and_Function() {
    document.getElementById("And").innerHTML =
        (10 > 5 && 20 > 10);
}

// || returns true when at least one condition is true.
function or_Function() {
    document.getElementById("Or").innerHTML =
        (10 > 20 || 5 < 10);
}

// ! reverses a Boolean value.
function not_Function() {
    document.getElementById("Not").innerHTML =
        !(10 > 5);
}
