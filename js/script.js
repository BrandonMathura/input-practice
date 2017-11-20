// Set the variables that are needed for our functionality.
var userNameBox = document.querySelector('#user-name');
var userAgeBox = document.querySelector('#user-age');
var userHeightBox = document.querySelector('#user-height');
var submitUserInput = document.querySelector('#submit-user-info');
var outputContainer = document.querySelector('#user-info-output');

// Check to make sure elements exist before targeting them.
if (userNameBox && userAgeBox && userHeightBox && submitUserInput && outputContainer)
submitUserInput.addEventListener('click', function() {
  // Capture the value of the input element and store it as a variable.
  var userName = userNameBox.value,
      userAge = userAgeBox.value,
      userHeight = userHeightBox.value;
  // Dynamically build a string message based on user input
  var outputMessage = 'Welcome ';
  outputMessage += userName;
  outputMessage += '!';
  outputMessage += ' You are currently ';
  outputMessage += userAge;
  outputMessage += ' years old.';
  outputMessage += ' Your height is ';
  outputMessage += userHeight;
  outputMessage += '.';
  // Put the output message in the paragraph element to display it on the page
  outputContainer.textContent = outputMessage;
});
