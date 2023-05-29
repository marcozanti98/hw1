function checkName(event) {
    const input = document.querySelector('#name-id');
    
   
    if (input.value.length > 0) {
        input.parentNode.classList.remove('errorj');
    } else {
        input.parentNode.classList.add('errorj');
    }
}


function checkSurname(event) {
    const input = document.querySelector('#surname-id');    
     
    if (formStatus[input.surname] = input.value.length > 0) {
        input.parentNode.classList.remove('errorj');
    } else {
        input.parentNode.classList.add('errorj');
    }
    
     }


function jsonCheckUsername(json) {
    // Controllo il campo exists ritornato dal JSON
    if ( !json.exists) {
        document.querySelector('.username').classList.remove('errorj');
    } else {
        document.querySelector('.username span').textContent = "Nome utente già utilizzato";
        document.querySelector('.username').classList.add('errorj');
    }

}

function jsonCheckEmail(json) {
    // Controllo il campo exists ritornato dal JSON
    if (!json.exists) {
        document.querySelector('.email').classList.remove('errorj');
    } else {
        document.querySelector('.email span').textContent = "Email già utilizzata";
        document.querySelector('.email').classList.add('errorj');
    }

}

function fetchResponse(response) {
    if (!response.ok) return null;
    return response.json();
}

function checkUsername(event) {
    const input = document.querySelector('#username-id');

    if(!/^[a-zA-Z0-9_]{1,15}$/.test(input.value)) {
        input.parentNode.querySelector('span').textContent = "Username max 15 caratteri(lettere, numeri e spazi)";
        input.parentNode.classList.add('errorj');
        formStatus.username = false;

    } else {
        fetch("check_username.php?q="+encodeURIComponent(input.value)).then(fetchResponse).then(jsonCheckUsername);
    }    
}

function checkEmail(event) {
    const emailInput = document.querySelector('#email-id');
    if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(emailInput.value).toLowerCase())) {
        document.querySelector('.email span').textContent = "Email non valida";
        document.querySelector('.email').classList.add('errorj');
        formStatus.email = false;

    } else {
        fetch("check_email.php?q="+encodeURIComponent(String(emailInput.value).toLowerCase())).then(fetchResponse).then(jsonCheckEmail);
    }
}

function checkPassword(event) {
    const passwordInput = document.querySelector('#password-id');
    if (formStatus.password = passwordInput.value.length >= 8) {
        document.querySelector('.password').classList.remove('errorj');
    } else {
        document.querySelector('.password').classList.add('errorj');
    }

}

function checkConfirmPassword(event) {
    const confirmPasswordInput = document.querySelector('#confirm-password-id');
    if (formStatus.confirmPassord = confirmPasswordInput.value === document.querySelector('#password-id').value) {
        document.querySelector('.confirm-password').classList.remove('errorj');
    } else {
        document.querySelector('.confirm-password').classList.add('errorj');
    }
}


const formStatus = {};
document.querySelector('#name-id').addEventListener('blur', checkName);
document.querySelector('#surname-id').addEventListener('blur', checkSurname);
document.querySelector('#username-id').addEventListener('blur', checkUsername);
document.querySelector('#email-id').addEventListener('blur', checkEmail);
document.querySelector('#password-id').addEventListener('blur', checkPassword);
document.querySelector('#confirm-password-id').addEventListener('blur', checkConfirmPassword);

