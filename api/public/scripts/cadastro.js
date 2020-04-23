var nameInput = document.getElementById('name');
var emailInput = document.getElementById('email');
var passwordInput = document.getElementById('password');
var submit = document.getElementById('buttom');

submit.addEventListener('click', function (e) {
    e.preventDefault();

    isEmpty(nameInput) ? errorAlert(nameInput, 'Nome vazio invalido') : errorAlert(nameInput, 0);
    isEmpty(emailInput) ? errorAlert(emailInput, 'Email vazio invalido') : errorAlert(emailInput, 0);
    isEmpty(passwordInput) ? errorAlert(passwordInput, 'Senha vazio invalido') : errorAlert(passwordInput, 0);

    if (nameInput.value.length < 3){
        errorAlert(nameInput, 'Nome deve de ter no minimo 3 caracteres!');
    }else{
        errorAlert(nameInput, 0);
    }

    var validEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(!validEmail.test(emailInput.value)){
        errorAlert(emailInput, 'Email invalido!');
    }else{
        errorAlert(nameInput, 0);
    }

    if (passwordInput.value.length < 6) {
        errorAlert(passwordInput, 'Senha deve de ter no minimo 6 caracteres!');
    } else {
        errorAlert(passwordInput, 0);
        var validPassword = /([a-z]{1}[0-9]{1})/g;

        if (!validPassword.test(passwordInput.value)){
            errorAlert(passwordInput, 'Senha deve de ter uma letra minuscula e um numero!');
        } else {
            errorAlert(passwordInput, 0);
            alert("Cadastradro!");
            nameInput.value = '';
            emailInput.value = '';
            location.reload();
        }

    }
    
});

function isEmpty(input) {
    if (input.value === '' || input.value === undefined) {
        return true;
    }

    return false;
}

function errorAlert(input, msg) {
    if (msg !== 0) {
        input.style.borderColor = '#ff0000';
        window.alert(msg);
        input.value = '';
    } else {
        input.style.borderColor = '';
    }
}