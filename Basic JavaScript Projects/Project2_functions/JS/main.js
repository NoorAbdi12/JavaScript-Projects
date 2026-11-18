
 // This function displays a message when the button is clicked.
function myFunction() {

    // Create a variable containing the first part of the message.
    var sentence = "Hello! ";

    // Use the += operator to add more text to the variable.
    sentence += "I am learning JavaScript functions!";

    // Display the complete message in the HTML paragraph.
    document.getElementById("message").innerHTML = sentence;
}
