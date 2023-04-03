var elUsername = document.getElementById('username');
var elMsg = document.getElementById('feedback');
function checkUsername (minLength) {
if (elUsername.value.length < minLength) {

}
I
elMsg.innerHTML = 'Username must be + minLength + characters or more';
} else {

elMsg.innerHTML

}
if (elUsername.addEventListener) {

el Username.addEventListener('blur', function () { 
checkUsername (5);

}, false);

});
} else {
el Username.attachEvent('onblur', function () { 
checkUsername (5);
