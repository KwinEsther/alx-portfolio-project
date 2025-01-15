// Placeholder for future JavaScript functionality
console.log("Habit Tracker App Initialized");

// Placeholder for guest mode functionality
document.getElementById('guestModeButton').addEventListener('click', function() {
    alert("You are now using the habit tracker as a guest. Your progress will not be saved.");
    
    // Example of tracking data temporarily (e.g., habit completion for a day)
    localStorage.setItem('exerciseDay1', 'done ✅');
    localStorage.setItem('readDay1', 'undone ❌');

    // You could display this data temporarily in the app
    document.getElementById('habitStatus').innerHTML = `
        Exercise: ${localStorage.getItem('exerciseDay1')}<br>
        Reading: ${localStorage.getItem('readDay1')}
    `;
});

