// Problem: Hints are shown even when form is valid

// Solution: Hide and show them at appropriate times

var $password = $('#password');
var $confirmPassword = $('#confirm_password');

// 1. Hide hints
$('form span').hide();

function isPasswordValid(){
    return $password.val().length > 8;
}

function arePasswordsMatching(){
    return $password.val() === $confirmPassword.val();
}

function canSubmit(){
    return isPasswordValid() && arePasswordsMatching();
}

function passwordEvent(){
   // a. Find out if password is valid
    if(isPasswordValid()) {
        // b. Hide hint if valid
        $password.next().hide();
    } else {
        // c. Else show hint
        $password.next().show();
    } 
}

function confirmPasswordEvent(){
    // a. Find out if password and confirmation match
    if (arePasswordsMatching()){
        // b. Hide hint if match
        $confirmPassword.next().hide();
    } else {
        // c. Else, show the hint
        $confirmPassword.next().show();
    }
}

function enableSubmitEvent(){
    $('#submit').prop("disabled", !canSubmit());
}

// 2.  When event happens on password input:
$password.focus(passwordEvent).keyup(passwordEvent)
        .keyup(confirmPasswordEvent).keyup(enableSubmitEvent);
    
// 3. When event happens on confirmation input:
$confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);

enableSubmitEvent();
    

