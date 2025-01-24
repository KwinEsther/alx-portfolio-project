// Fetch habits from the server
async function fetchHabits() {
    try {
	const response = await fetch('/api/habits');
	const habits = await response.json();
	displayHabits(habits);
    } catch (error) {
	console.error('Error fetching habits:', error);
    }
}

// Display habits on the UI
function displayHabits(habits) {
    const habitList = document.querySelector('#habit-list');
    habitList.innerHTML = '';
    habits.forEach((habit) => {
	const habitItem = document.createElement('li');
	habitItem.textContent = `${habit.name} - ${habit.streak} days`;
	habitList.appendChild(habitItem);
    });
}

// Add event listeners
document.addEventListener('DOMContentLoaded', () => {
    fetchHabits();
});
