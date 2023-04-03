function checkUsername() { 
var elMsg = document.getElementByld(" feedback’); // Get feedback element
var elUsername = document.getElementById('username');
if (elUsername.value.length < 5) { 
elMsg.textContent = 'Username must be 5 characters or more'; 
} else { 
elMsg.textContent = ''; 

}
}
