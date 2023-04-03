function checkUsername() { 
var elMsg = document .getElementByld(" feedback’); // Get feedback element
if (this.value.length < 5) { 
elMsg.textContent = 'Username must be 5 characters or more'; 
} else { // Otherwise
elMsg.textContent = '';
}

}

(@ var elUsername = document.getElementByld('username'); 

elUsername.addEventListener('blur’, checkUsername, false);