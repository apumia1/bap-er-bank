document.getElementById('login-submit').addEventListener('click', function () {
    // console.log('button clicked');
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // console.log(userEmail); 
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    // console.log(userPassword);
    if (userEmail == 'apu@gmail.com' && userPassword == 'secret') {
        // console.log('valid');
        window.location.href = 'banki.html'
    }
})