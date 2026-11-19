
// TERNARY OPERATOR
// This function checks the age entered by the user.
function check_Age() {

    // Get the age entered in the HTML input field.
    var age = document.getElementById("Age").value;

    // Use a ternary operator to check whether the user is 18 or older.
    var result = age >= 18 ? "You are an adult." : "You are a minor.";

    // Display the result on the webpage.
    document.getElementById("Age_Result").innerHTML = result;
}


// CONSTRUCTOR FUNCTION
// This constructor creates a person object.
function Person(name, age, occupation) {

    // The 'this' keyword assigns values to the new object.
    this.Name = name;
    this.Age = age;
    this.Occupation = occupation;
}

// Create a new person using the 'new' keyword.
var person1 = new Person("Amina", 25, "Web Developer");

// This function displays the person's information.
function display_Person() {

    document.getElementById("Person_Result").innerHTML =
        person1.Name + " is " + person1.Age +
        " years old and works as a " + person1.Occupation + ".";
}


// NESTED FUNCTION
// This function contains another function inside it.
function nested_Function() {

    // Set the starting number.
    var number = 10;

    // This is the inner function.
    function add_Five() {
        number += 5;
    }

    // Call the inner function.
    add_Five();

    // Display the final result.
    document.getElementById("Nested_Result").innerHTML =
        "10 + 5 = " + number;
}
