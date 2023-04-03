function checkLength (e, minLength) {
var el, elMsg;
if (!e) {
e = window.event;
}
el = e.target || e.srcElement;
elMsgel.nextSibling;
if (el.value.length < minLength) {
elMsg.innerHTML = 'Username must be
} else {
elMsg.innerHTML = '
}
}, false);

+ minLength + characters or more';

var elUsername = document.getElementById('username'); 
if (elUsername.addEventListener) {
el Username.addEventListener('blur', function(e) {
checkUsername (e, 5);

} else {
el Username.attachEvent('onblur', function(e) {
checkUsername (e, 5);
});