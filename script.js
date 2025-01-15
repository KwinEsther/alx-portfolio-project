console.log("Habit Tracker App Initialized");

// Elements
const guestSection = document.getElementById("guest-section");
const authSection = document.getElementById("auth-section");
const tryGuestBtn = document.getElementById("try-guest-btn");
const signUpBtn = document.getElementById("sign-up-btn");
const logInBtn = document.getElementById("log-in-btn");
const habitForm = document.getElementById("habitForm");
const habitTable = document.getElementById("habitTable").querySelector("tbody");

// Event: Try as Guest
tryGuestBtn.addEventListener("click", function () {
  alert(
    "You're now in guest mode. Progress won't be saved. Please sign up or log-in to save your progress"
  );
  guestSection.style.display = "block";
  authSection.style.display = "none";
});

// Event: Redirect to Sign-Up Page
signUpBtn.addEventListener("click", function () {
  window.location.href = "signup.html"; // Redirect to the sign-up page
});

// Event: Redirect to Log-In Page
logInBtn.addEventListener("click", function () {
  window.location.href = "login.html"; // Redirect to the login page
});

// Event: Add Habit (Guest Mode)
habitForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const habitName = document.getElementById("habitName").value;

  if (habitName.trim() === "") {
    alert("Please enter a habit.");
    return;
  }

  // Add habit to the table
  const newRow = habitTable.insertRow();
  newRow.insertCell(0).textContent = habitName;

  // Add three empty checkboxes for testing
  for (let i = 0; i < 1; i++) {
    const checkboxCell = newRow.insertCell(i + 1);
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkboxCell.appendChild(checkbox);
  }

  // Clear input field
  document.getElementById("habitName").value = "";
});

// Event: Sign-Up Form
document
  .getElementById("signUpForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Store credentials in localStorage (simulating sign-up)
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);
    alert("Sign-up successful! Please log in.");
    window.location.href = "login.html"; // Redirect to login page after successful sign-up
  });

// Event: Log-In Form
document
  .getElementById("logInForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const loginEmail = document.getElementById("loginEmail").value;
    const loginPassword = document.getElementById("loginPassword").value;

    // Validate credentials
    if (
      localStorage.getItem("userEmail") === loginEmail &&
      localStorage.getItem("userPassword") === loginPassword
    ) {
      alert("Login successful! Welcome back.");
      guestSection.style.display = "block";
      authSection.style.display = "none";
    } else {
      alert("Invalid credentials. Please try again.");
    }
  });
