// Select DOM elements
const habitForm = document.getElementById('habit-form');
const habitInput = document.getElementById('habit-input');
const habitList = document.getElementById('habit-list');

// Log elements to verify
console.log(habitForm, habitInput, habitList);

// Add event listener to the form
habitForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent page refresh
    
    // Get the habit from the input
    const newHabit = habitInput.value.trim();
    
    // Only add if input is not empty
    if (newHabit !== '') {
      // Create a new list item
      const habitItem = document.createElement('li');
      habitItem.textContent = newHabit;
      habitList.appendChild(habitItem);
  
      // Clear the input field
      habitInput.value = '';
    }
  });
  