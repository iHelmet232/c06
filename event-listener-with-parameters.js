var elUsername = document.getElementByld (‘username’); 

var ellsg = document.getElementById(’ feedback"); 
function checkUsername(minLength) ( 
if (elUsername.value.length < minLength) { 

elMsg.textContent = ‘Username must be * + minlength + ' characters or more's

} else { 
elMsg. innerHTML = ''; 
}
}
elUsername. addEventListener('blur', function() { 
checkUsername (5) ; 

}. false);