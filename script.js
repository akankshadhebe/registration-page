const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const Confirm = document.getElementById('Confirm');
var length = document.getElementById('length');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});
// When the user clicks on the password field, show the message box
password.onfocus = function() {
  document.getElementById("pop").style.display = "block";
}

// When the user clicks outside of the password field, hide the pop box
password.onblur = function() {
  document.getElementById("pop").style.display = "none";
}
//
password.onkeyup = function() {
	// Validate lowercase letters
	var lowerCaseLetters = /[a-z]/g;
	if(password.value.match(lowerCaseLetters)) {  
	  letter.classList.remove("invalid");
	  letter.classList.add("valid");
	} else {
	  letter.classList.remove("valid");
	  letter.classList.add("invalid");
	}
	
	// Validate capital letters
	var upperCaseLetters = /[A-Z]/g;
	if(password.value.match(upperCaseLetters)) {  
	  capital.classList.remove("invalid");
	  capital.classList.add("valid");
	} else {
	  capital.classList.remove("valid");
	  capital.classList.add("invalid");
	}
  
	// Validate numbers
	var numbers = /[0-9]/g;
	if(password.value.match(numbers)) {  
	  number.classList.remove("invalid");
	  number.classList.add("valid");
	} else {
	  number.classList.remove("valid");
	  number.classList.add("invalid");
	}
	
	// Validate length
	if(password.value.length >= 8) {
	  length.classList.remove("invalid");
	  length.classList.add("valid");
	} else {
	  length.classList.remove("valid");
	  length.classList.add("invalid");
	}
  }

function checkInputs() {
	// trim to remove the whitespaces
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const ConfirmValue = Confirm.value.trim();
	
	if(usernameValue === '') {
		setErrorFor(username, 'Username cannot be blank');
	} else {
		setSuccessFor(username);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	} else {
		setSuccessFor(password);
	}
	
	if(ConfirmValue === '') {
		setErrorFor(Confirm, 'Confirm cannot be blank');
	} else if(passwordValue !== ConfirmValue) {
		setErrorFor(Confirm, 'Passwords does not match');
	} else{
		setSuccessFor(Confirm);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
