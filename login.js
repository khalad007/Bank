document.getElementById('login-btn').addEventListener('click', function(){
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    
    
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    if(email === 'abirjr78@gmail.com' && password === 'asdfgh'){
        console.log('hello');

    }else{
        console.log('wrong user and password');
    }
})