
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

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
/*function isValidEmail(email){
	const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
	return regex.test(String(email).toLowerCase());
}*/

//Valid mail refactor
function checkEmail(input){
	const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
	if(regex.test(input.value.trim())) {
		showSuccess(input);
	} else {
		showError(input, `${input.value} is not a valid email`);
	}
}

// Event Listener
/*form.addEventListener('submit', function(e) {
	e.preventDefault();
	(username.value === '') ? showError(username, 'User is required') : showSuccess(username);
	(email.value === '') ? showError(email, 'eMail is required') : ((!isValidEmail(email.value)) ? showError(email, 'Invalid format') : showSuccess(email));
	(password.value === '') ? showError(password, 'Password is required') : showSuccess(password);
	(password2.value === '') ? showError(password2, 'Confirmation is required') : showSuccess(password2);
});*/

//Check required fields

function checkRequired(inputArr) {
	inputArr.forEach((input) => {
		if(input.value.trim() === '') {
			showError(input, `${getFieldName(input)} is required`);
		} else {
			showSuccess(input);
		}
	})
}

//Check length
function checkLength(input, min, max) {
	if(input.value.length < min) {
		showError(
			input,
			`${getFieldName(input)} must be at least ${min} characters`);
	} else if(input.value.length > max){
		showError(
			input,
			`${getFieldName(input)} must be less than ${max} characters`);
	} else {
		showSuccess(input);
	}
}

//check password match
function checkPasswordsMacth(input1, input2) {
	if(input1.value !== input2.value) {
		showError(input2, 'Password do not math');
	}
}

//Get Field Name
function getFieldName(input) {
	return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event Listener Refactor
form.addEventListener('submit', function(e) {
	e.preventDefault();

	checkRequired([username, email, password, password2]);
	checkLength(username, 3, 15);
	checkLength(password, 6, 25);
	checkEmail(email);
	checkPasswordsMacth(password, password2);
})