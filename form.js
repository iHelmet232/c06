var elForm, elSelect Package, el PackageHint, elTerms;  
el Form = document.getElementById('formSignup'); 
Package = document.getElementById('package');
el PackageHint = document.getElementById('packageHint');
el Terms = document.getElementById('terms');
elTermsHint = document.getElementById('termsHint');

function packageHint() {
    var package = this.options[this.selectedIndex].value; 
    if (package == 'monthly') {
            el PackageHint.innerHTML = 'Save $10 if you pay for 1 year!'; 
            } else {
            el PackageHint.innerHTML = 'Wise choice!';
}
}

function checkTerms (event) { if (!el Terms.checked) {

elTermsHint.innerHTML = 'You must agree to the terms.'; // Show message event.preventDefault();
}
}

elForm.addEventListener('submit', checkTerms, false);
elSelectPackage.addEventListener('change', packageHint, false);