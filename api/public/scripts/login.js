var loginInput = document.getElementById('login');
var passwordInput = document.getElementById('password');
var submit = document.getElementById('buttom');


submit.addEventListener('click', function(e){
    e.preventDefault();

    console.log('Login: ' + loginInput.value + '\nPass: ' + passwordInput.value);

    var valid = 0;

    if(isEmpty(loginInput)){
        errorAlert(loginInput, 'Login invalido')
        valid = 0; 
    }else {
        valid++;
        errorAlert(loginInput, 0);
    }


    if(isEmpty(passwordInput)){
        errorAlert(passwordInput, 'Senha invalido')
        valid = 0;
    }else{
        valid++;
        errorAlert(passwordInput, 0);
    }

    if (valid == 2){
        document.getElementById("form").submit();
    } else {
        errorAlert(loginInput, 'Login invalido');
        errorAlert(loginInput, 0);
    }
});


function isEmpty(input){
    if (input.value === '' || input.value === undefined || input.value.length < 3){
        return true;
    }
    
    return false;
}

function errorAlert(input, msg){
    if (msg !== 0) {
        input.style.borderColor = '#ff0000';
        window.alert(msg);
        input.value = '';
    } else {
        input.style.borderColor = '';
    }
}