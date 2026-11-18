
// This function creates a JavaScript dictionary.
function my_Dictionary() {

    // Create an object containing key-value pairs.
    var Car = {
        Brand: "Toyota",
        Model: "Corolla",
        Year: 2022,
        Color: "Blue"
    };

    // Delete the Color key-value pair.
    delete Car.Color;

    // Display the deleted key's value in the HTML element.
    document.getElementById("Dictionary").innerHTML =
        Car.Color;
}
