//validacion formulario de contacto
var nameErr = document.getElementById('invalidName');
var emailErr = document.getElementById('invalidEmail');
var submitErr = document.getElementById('submitError');

function validateName() {
  var name = document.getElementById('name').value;

  if(name.length == 0){
    nameErr.innerHTML = 'Por favor, ingresa tu nombre.';
    return false;
  }

  nameErr.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true;
}

function validateEmail() {
  var email = document.getElementById('email').value;

  if(email.length == 0) {
    emailErr.innerHTML = 'Por favor, ingresa tu e-mail.';
    return false;
  }

  if(!email.match(/^[A-Za-z]\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2-4}$/)) {
    emailErr.innerHTML = 'Por favor, ingresa un e-mail valido.';
    return false;
  }

  emailErr.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true;
}

function validateForm() {
  if(!validateName() || !validateEmail()) {
    submitErr.style.display = 'block';
    submitErr.innerHTML = 'Por favor, revisa los datos ingresados';
    setTimeout(function(){submitErr.style.display = 'none';}, 3000);
    return false;
  }
}