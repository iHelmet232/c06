var msg = 'close X'; msg += 'System Maintenance';
msg = 'Our servers are being updated between 3 and 4 a.m. ';
+=
msg = 'During this time, there may be minor disruptions to service.';
var el Note = document.createElement('div'); elNote.setAttribute('id', 'note'); elNote.innerHTML = msg; document.body.appendChild(el Note);
function dismiss Note() {
}
document.body.removeChild (el Note);
var elClose = document.getElementById('close');

elClose.addEventListener('click', dismiss Note, false); 