
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// Show input error message
function showError(input, message){
	const formControl = input.parentElement;
	formControl.className = 'form-control error';
	const small = formControl.querySelector('small');
	small.innerText = message
}

// Show input success message
function showSuccess(input){
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

//Valid mail
function isValidEmail(email){
	const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
	return regex.test(String(email).toLowerCase());
}

// Event Listener
form.addEventListener('submit', function(e) {
	e.preventDefault();
	(username.value === '') ? showError(username, 'User is required') : showSuccess(username);
	(email.value === '') ? showError(email, 'eMail is required') : ((!isValidEmail(email.value)) ? showError(email, 'Invalid format') : showSuccess(email));
	(password.value === '') ? showError(password, 'Password is required') : showSuccess(password);
	(password2.value === '') ? showError(password2, 'Confirmation is required') : showSuccess(password2);
});
