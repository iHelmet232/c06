var el;

function charCount(e) {
var textEntered, charDisplay, counter, lastKey;
textEntered = document.getElementById('message').value; 
charDisplay = document.getElementById('characters Left'); 
Counter element counter = (180 - (textEntered.length)); 
charDisplay.textContent = counter;
lastkey = document.getElementById('lastkey');

lastkey.textContent = 'Last key in ASCII code: ' + e.keyCode; 
}
el = document.getElementById('message');

el.addEventListener('keypress', charCount, false);
