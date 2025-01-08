// Select DOM elements
const habitForm = document.getElementById('habit-form');
const habitInput = document.getElementById('habit-input');
const habitList = document.getElementById('habit-list');

// Add event listener to the form
habitForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent page refresh

  // Get the habit input value
  const habitValue = habitInput.value.trim();

  // Check if input is not empty
  if (habitValue !== '') {
    // Create a new list item
    const habitItem = document.createElement('li');
    habitItem.textContent = habitValue;

    // Create a delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.style.marginLeft = '10px'; // Add spacing for clarity

    // Add event listener to the delete button
    deleteButton.addEventListener('click', () => {
      habitItem.remove(); // Remove the list item when clicked
    });

    // Append the delete button to the list item
    habitItem.appendChild(deleteButton);

    // Append the list item to the habit list
    habitList.appendChild(habitItem);

    // Clear the input field
    habitInput.value = '';
  } else {
    alert('Please enter a habit!'); // Alert the user if input is empty
  }
});
