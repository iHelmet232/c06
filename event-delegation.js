function getTarget (e) { 
if (!e) {
}
}
e = window.event;
return e.target || e.srcElement;
function itemDone (e) {

var target, el Parent, el Grandparent; target = getTarget (e);
el Parent = target.parentNode;
elGrandparent = target.parentNode.parentNode;
el Grandparent.removeChild (el Parent);
 
if (e.preventDefault) {
e.preventDefault();
} else {
e.returnValue = false;

}

var el = document.getElementById('shoppingList'); // Get shopping list 2 if (el.addEventListener) {
el.addEventListener('click', function(e)  {
itemDone (e);

}, false);
}  else {
el.attachEvent('onclick', function(e) {
itemDone (e);

});
}