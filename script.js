// Placeholder for future JavaScript functionality
console.log("Habit Tracker App Initialized");

// Placeholder for guest mode functionality
document.getElementById('guestModeButton').addEventListener('click', function() {
    alert("You are now using the habit tracker as a guest. Your progress will not be saved.");
    
    // Example of tracking data temporarily (e.g., habit completion for a day)
    localStorage.setItem('exerciseDay1', 'done ✅');
    localStorage.setItem('readDay1', 'undone ❌');

    // You could display this data temporarily in the app.
    document.getElementById('habitStatus').innerHTML = `
        Exercise: ${localStorage.getItem('exerciseDay1')}<br>
        Reading: ${localStorage.getItem('readDay1')}
    `;
});

// Sign-up form functionality
document.getElementById('signUpForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // For now, let's just store the email and password in localStorage (we'll connect to a backend later)
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', password);
    
    alert("Sign-up successful! You can now log in.");
});

// Login functionality
function loginUser() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    if (localStorage.getItem('userEmail') === email && localStorage.getItem('userPassword') === password) {
        alert("Login successful! Welcome back.");
        // Save user session and allow saving data
        localStorage.setItem('loggedIn', true);
    } else {
        alert("Invalid credentials. Please try again.");
    }
}

// Adding new habits
document.getElementById('habitForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const habitName = document.getElementById('habitName').value;

    // Add habit to the table
    const habitTable = document.getElementById('habitTable');
    const newRow = habitTable.insertRow();
    newRow.insertCell(0).textContent = habitName;
    newRow.insertCell(1).textContent = '❌';
    newRow.insertCell(2).textContent = '❌';
    newRow.insertCell(3).textContent = '❌';

    // Save habit to localStorage for the user (or store it in a backend)
    localStorage.setItem(habitName, '❌❌❌'); // Example of saving the habit's progress for 3 days
});


