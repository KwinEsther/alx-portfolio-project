// Handle form submission for login
const loginForm = document.querySelector('#login-form');
if (loginForm) {
    loginForm.addEventListener('submit', async (event) => {
	event.preventDefault();
	const email = document.querySelector('#email').value;
	const password = document.querySelector('#password').value;

	try {
	    const response = await fetch('/api/users/login', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ email, password }),
	    });

	    const result = await response.json();
	    if (response.ok) {
		alert('Login successful!');
		window.location.href = '/dashboard.html';
	    } else {
		alert(result.message || 'Login failed.');
	    }
	} catch (error) {
	    console.error('Error logging in:', error);
	}
    });
}

// Handle form submission for signup
const signupForm = document.querySelector('#signup-form');
if (signupForm) {
    signupForm.addEventListener('submit', async (event) => {
	event.preventDefault();
	const username = document.querySelector('#username').value;
	const email = document.querySelector('#email').value;
	const password = document.querySelector('#password').value;
	const confirmPassword = document.querySelector('#confirm-password').value;

	if (password !== confirmPassword) {
	    alert('Passwords do not match.');
	    return;
	}

	try {
	    const response = await fetch('/api/users/register', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ username, email, password }),
	    });

	    const result = await response.json();
	    if (response.ok) {
		alert('Registration successful!');
		window.location.href = '/login.html';
	    } else {
		alert(result.message || 'Signup failed.');
	    }
	} catch (error) {
	    console.error('Error signing up:', error);
	}
    });
}
