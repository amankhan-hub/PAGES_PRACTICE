// Select the button and the message paragraph
const button = document.getElementById('clickButton');
const message = document.getElementById('message');

// Add event listener to the button
button.addEventListener('click', () => {
  message.textContent = 'You clicked the button!'; // Display message when button is clicked
});
