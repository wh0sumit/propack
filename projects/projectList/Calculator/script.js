
// In the JavaScript file, we define a constant variable which will represent the number and operator buttons. We will then perform a query using document.querySelectorAll(). This function will allow us to get all elements that belong to the button element. We also define a display variable which will represent the input element and then perform document.querySelector().

const buttons = document.querySelectorAll("button");


const display = document.querySelector(".display");

// add eventListener to each button

buttons.forEach(function(button) {

  button.addEventListener("click", calculate);

});

// calculate function

function calculate(event) {


  const clickedButtonValue = event.target.value;

  if (clickedButtonValue === "=") {


    if (display.value !== " ") {

      display.value = eval(display.value);

    }

  } else if (clickedButtonValue === "C") {


    display.value = " ";

  } else {


    display.value += clickedButtonValue;

  }

}