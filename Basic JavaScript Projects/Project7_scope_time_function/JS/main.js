
// GLOBAL VARIABLE
// This variable can be accessed by functions throughout the script.
var global_Number = 20;

// LOCAL VARIABLE
// This function demonstrates global and local scope.
function scope_Function() {

    // This variable exists only inside this function.
    var local_Number = 10;

    // Add the global and local variables.
    var result = global_Number + local_Number;

    // Display the result on the webpage.
    document.getElementById("Scope_Result").innerHTML =
        "Global variable + Local variable = " + result;
}


// IF STATEMENT
// This function checks whether the global number is greater than 15.
function if_Function() {

    if (global_Number > 15) {
        document.getElementById("If_Result").innerHTML =
            "The number is greater than 15.";
    }
}


// INTENTIONAL ERROR FOR DEBUGGING
// This function contains an error because local_Number
// was declared inside scope_Function().
// It cannot be accessed from this function.
function error_Function() {

    // Check the global variable in Chrome DevTools.
    console.log("Global number: " + global_Number);

    // This line intentionally causes a ReferenceError.
    console.log("Local number: " + local_Number);
}


// TIME FUNCTION
// This function checks the current hour and displays
// a message based on the time of day.
function Time_function() {

    // Get the current hour (0 to 23).
    var Time = new Date().getHours();

    // Store the appropriate message.
    var Reply;

    // Check whether it is morning, afternoon, or evening.
    if (Time < 12 && Time >= 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 && Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }

    // Display the message on the webpage.
    document.getElementById("Time_of_day").innerHTML = Reply;
}
