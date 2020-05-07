var emailInput = document.getElementById('email');
var submit = document.getElementById('buttom');


submit.addEventListener('click', function (e) {
    e.preventDefault();


    isEmpty(emailInput) ? errorAlert(emailInput, 'Email vazio invalido') : errorAlert(emailInput, 0);

    var validEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!validEmail.test(emailInput.value)) {
        errorAlert(emailInput, 'Email invalido!');
    } else {
        errorAlert(emailInput, 0);
        alert("Email com senha enviado!");
        document.getElementById("form").submit();
    }
    
});

function isEmpty(input) {
    if (input.value === '' || input.value === undefined || input.value.length < 3) {
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