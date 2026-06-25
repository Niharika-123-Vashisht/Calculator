let display = document.getElementById("display");                                                 // Select the display from HTML
let currentValue = "";                                                                    //  store the value entered by the user


let buttons = document.querySelectorAll(".btn");                                                   // Select all calculator buttons

buttons.forEach(function (button) {                                                              // Loop through each button


    button.addEventListener("click", function () {                            // Run this function whenever a button is clicked                      

        
        let value = button.innerText;                                                   // Get the text written on the clicked button

        if (value === "AC") {                                                            // If AC button is clicked

            currentValue = "";                                                                      // Clear the current expression

            display.innerText = "0";                                                                       // Show 0 on the display
        }

       
        else if (value === "DEL") {                                                                        // If DEL button is clicked

            currentValue = currentValue.slice(0, -1);                                            // Remove the last character from the expression

            if (currentValue === "") {                                                                // If expression becomes empty

                display.innerText = "0";
            } else {

                display.innerText = currentValue;                                                            // Show the updated expression
            }
        }

        // If = button is clicked
        else if (value === "=") {

            try {
                currentValue = eval(
                    currentValue
                        .replace("×", "*") // Multiplication
                        .replace("÷", "/") // Division
                        .replace("−", "-") // Subtraction
                );

                display.innerText = currentValue;                                                     // Display the result
            }

            catch {

                display.innerText = "Error";
                currentValue = "";
            }
        }

        else if (value === "+/-") {                                                                // If +/- button is clicked

            currentValue = (-Number(currentValue)).toString();                 // Convert positive number to negative and vice versa
            display.innerText = currentValue;                          // Display the updated value
        }

        // For all other buttons (0-9, +, -, ×, ÷, %, .)
        else {

             currentValue += value;                                                           // Add the button value to the expression
                                                                                            
            display.innerText = currentValue;                                             // Show the updated expression on the display
        }

    });
});