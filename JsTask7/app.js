 function validateEmail(Email) {
    let RegexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (Email.match(RegexEmail)) {
        return true;
    } else {
        return false;
    }
}

let username = document.getElementById('Username');
let pasword = document.getElementById('Password');
let email = document.getElementById('Email');
let submit = document.getElementById('Submit');


submit.onclick = function() {

    let checker = true;

   if (username.value < 6 && username.value[0].toUpperCase() === username.value[0] && pasword.value < 6 && validateEmail(email.value) === checker) {
      alert('true answer');
       checker = false;
   } else(alert('please give true answer'))
}


