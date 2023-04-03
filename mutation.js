var elList, addLink, newEl, newText, counter, listItems; 
elList = document.getElementById('list'); 
addLink = document.querySelector('a'); 
counter = document.getElementById('counter');
function addItem(e) {
}
e.preventDefault();
newE1 = document.createElement('li');
newText = document.createTextNode('New list item');
newE].appendChild(newText);
elList.appendChild(newEl);
function updateCount() {
}
listitems = list.getElementsByTagName('li').length; counter.innerHTML = listitems;
addLink.addEventListener('click', addItem, false);

elList.addEventListener('DOMNode Inserted', updateCount, false); 