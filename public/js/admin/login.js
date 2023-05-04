const loginForm = $('#frm');
const email = $('#email');
const password = $('#password');
const loginButton = $('#sign_in_btn');

loginButton.click(() => {
    if (email.val().trim() == '') {
        msgBox('Enter your email', 'warning');
        return;
    }
    if (password.val().trim() == '') {
        msgBox('Enter the password', 'warning');
        return;
    }
    loginButton.attr('data-kt-indicator', 'on');
    loginButton.prop('disabled', true);
    loginForm.submit();
});