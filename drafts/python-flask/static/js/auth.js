// // Handle form submission for login
// const loginForm = document.querySelector('#login-form');
// if (loginForm) {
//     loginForm.addEventListener('submit', async (event) => {
// 	event.preventDefault();
// 	const email = document.querySelector('#email').value;
// 	const password = document.querySelector('#password').value;

// 	try {
// 	    const response = await fetch('/api/users/login', {
// 		method: 'POST',
// 		headers: { 'Content-Type': 'application/json' },
// 		body: JSON.stringify({ email, password }),
// 	    });

// 	    const result = await response.json();
// 	    if (response.ok) {
// 		alert('Login successful!');
// 		window.location.href = '/dashboard.html';
// 	    } else {
// 		alert(result.message || 'Login failed.');
// 	    }
// 	} catch (error) {
// 	    console.error('Error logging in:', error);
// 	}
//     });
// }

// // Handle form submission for signup
// const signupForm = document.querySelector('#signup-form');
// if (signupForm) {
//     signupForm.addEventListener('submit', async (event) => {
// 	event.preventDefault();
// 	const username = document.querySelector('#username').value;
// 	const email = document.querySelector('#email').value;
// 	const password = document.querySelector('#password').value;
// 	const confirmPassword = document.querySelector('#confirm-password').value;

// 	if (password !== confirmPassword) {
// 	    alert('Passwords do not match.');
// 	    return;
// 	}

// 	try {
// 	    const response = await fetch('/api/users/register', {
// 		method: 'POST',
// 		headers: { 'Content-Type': 'application/json' },
// 		body: JSON.stringify({ username, email, password }),
// 	    });

// 	    const result = await response.json();
// 	    if (response.ok) {
// 		alert('Registration successful!');
// 		window.location.href = '/login.html';
// 	    } else {
// 		alert(result.message || 'Signup failed.');
// 	    }
// 	} catch (error) {
// 	    console.error('Error signing up:', error);
// 	}
//     });
// }
document.addEventListener("DOMContentLoaded", () => {
	const signUpForm = document.getElementById("signUpForm")
	const logInForm = document.getElementById("logInForm")
  
	if (signUpForm) {
	  signUpForm.addEventListener("submit", async (event) => {
		event.preventDefault()
		const email = document.getElementById("email").value
		const password = document.getElementById("password").value
  
		try {
		  const response = await fetch("/api/users/register", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ email, password }),
		  })
  
		  const result = await response.json()
		  if (response.ok) {
			showAlert("Sign-up successful! Please log in.", "success")
			setTimeout(() => {
			  window.location.href = "/login"
			}, 2000)
		  } else {
			showAlert(result.message || "Sign-up failed.", "error")
		  }
		} catch (error) {
		  console.error("Error signing up:", error)
		  showAlert("An error occurred. Please try again.", "error")
		}
	  })
	}
  
	if (logInForm) {
	  logInForm.addEventListener("submit", async (event) => {
		event.preventDefault()
		const email = document.getElementById("loginEmail").value
		const password = document.getElementById("loginPassword").value
  
		try {
		  const response = await fetch("/api/users/login", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ email, password }),
		  })
  
		  const result = await response.json()
		  if (response.ok) {
			showAlert("Login successful!", "success")
			setTimeout(() => {
			  window.location.href = "/dashboard"
			}, 2000)
		  } else {
			showAlert(result.message || "Login failed.", "error")
		  }
		} catch (error) {
		  console.error("Error logging in:", error)
		  showAlert("An error occurred. Please try again.", "error")
		}
	  })
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
  })
  
  