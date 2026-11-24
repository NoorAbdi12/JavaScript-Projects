
// Project 10: Loops and Arrays

// This function uses a while loop to count from 1 to 10.
function Call_Loop() {
    var digit = "";
    var X = 1;

    // Continue looping while X is less than or equal to 10.
    while (X <= 10) {
        digit += X + "<br>";
        X++;
    }

    // Display the numbers on the webpage.
    document.getElementById("Loop").innerHTML = digit;
}

// This function uses a for loop to list instruments.
function for_Loop() {
    var instruments = [
        "Guitar",
        "Piano",
        "Drums",
        "Violin",
        "Flute"
    ];

    var content = "";

    // Loop through every item in the instruments array.
    for (var Y = 0; Y < instruments.length; Y++) {
        content += instruments[Y] + "<br>";
    }

    // Display the list of instruments.
    document.getElementById("List_of_Instruments").innerHTML = content;
}

// This function uses an array to store colors.
function array_Function() {
    var colors = ["Red", "Blue", "Green", "Purple"];

    // Access the second item in the array.
    var selectedColor = colors[1];

    // Display the selected color.
    document.getElementById("Array").innerHTML =
        "My selected color is " + selectedColor + ".";
}

// This function creates an object using let.
function object_Function() {

    // Create an object containing car information.
    let car = {
        make: "Honda",
        model: "CR-V",
        year: 2015,
        color: "Black"
    };

    // Display the object's properties.
    document.getElementById("Object").innerHTML =
        "My car is a " + car.year + " " +
        car.make + " " + car.model +
        " in " + car.color + ".";
}
