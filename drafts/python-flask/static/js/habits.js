// // Fetch habits from the server
// async function fetchHabits() {
//     try {
// 	const response = await fetch('/api/habits');
// 	const habits = await response.json();
// 	displayHabits(habits);
//     } catch (error) {
// 	console.error('Error fetching habits:', error);
//     }
// }

// // Display habits on the UI
// function displayHabits(habits) {
//     const habitList = document.querySelector('#habit-list');
//     habitList.innerHTML = '';
//     habits.forEach((habit) => {
// 	const habitItem = document.createElement('li');
// 	habitItem.textContent = `${habit.name} - ${habit.streak} days`;
// 	habitList.appendChild(habitItem);
//     });
// }

// // Add event listeners
// document.addEventListener('DOMContentLoaded', () => {
//     fetchHabits();
// });

document.addEventListener("DOMContentLoaded", () => {
    const habitForm = document.getElementById("habitForm")
    const habitList = document.getElementById("habitList")
  
    if (habitForm) {
      habitForm.addEventListener("submit", async (event) => {
        event.preventDefault()
        const habitName = document.getElementById("habitName").value
  
        try {
          const response = await fetch("/api/habits", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name: habitName }),
          })
  
          const result = await response.json()
          if (response.ok) {
            showAlert("Habit added successfully!", "success")
            fetchHabits()
          } else {
            showAlert(result.message || "Failed to add habit.", "error")
          }
        } catch (error) {
          console.error("Error adding habit:", error)
          showAlert("An error occurred. Please try again.", "error")
        }
      })
    }
  
    async function fetchHabits() {
      try {
        const response = await fetch("/api/habits")
        const habits = await response.json()
        displayHabits(habits)
      } catch (error) {
        console.error("Error fetching habits:", error)
        showAlert("Failed to fetch habits. Please try again.", "error")
      }
    }
  
    function displayHabits(habits) {
      if (habitList) {
        habitList.innerHTML = ""
        habits.forEach((habit) => {
          const habitItem = document.createElement("li")
          habitItem.className = "habit-item"
          habitItem.innerHTML = `
                      <span>${habit.name}</span>
                      <button class="btn btn-small" onclick="toggleHabit(${habit.id})">
                          ${habit.completed ? "Undo" : "Complete"}
                      </button>
                  `
          habitList.appendChild(habitItem)
        })
      }
    }
  
    window.toggleHabit = async (habitId) => {
      try {
        const response = await fetch(`/api/habits/${habitId}/toggle`, {
          method: "POST",
        })
  
        if (response.ok) {
          fetchHabits()
        } else {
          showAlert("Failed to update habit. Please try again.", "error")
        }
      } catch (error) {
        console.error("Error toggling habit:", error)
        showAlert("An error occurred. Please try again.", "error")
      }
    }
  
    function showAlert(message, type = "info") {
      const alertDiv = document.createElement("div")
      alertDiv.className = `alert alert-${type}`
      alertDiv.textContent = message
      document.body.appendChild(alertDiv)
  
      setTimeout(() => {
        alertDiv.remove()
      }, 3000)
    }
  
    // Fetch habits when the page loads
    fetchHabits()
  })
  
  