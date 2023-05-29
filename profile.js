function fetchResponse(response) {
    if (!response.ok) return null;
    return response.json();
  }

function checkPasswordOld(event) {
    const input = document.querySelector('#password-old');
    

    if ((input.value.length > 0)) {    
    fetch("checkPassword.php?q=" + encodeURIComponent(input.value)).then(fetchResponse).then(jsonCheckPassword);
    }
  }

function jsonCheckPassword(json) {
    const errorSpan = document.querySelector('.errore');
  
    if (!json) {
      if (!errorSpan) {
        const span = document.createElement('span');
        span.textContent = "Password attuale errata";        
        const div = document.querySelector('.password-old');
        div.appendChild(span);
        span.classList.add('errore');
      }
    } else {      
        if (errorSpan) {
            errorSpan.remove();
          }
      }
    }

function checkPassword(event){
        const newPassword= document.querySelector('#password').value;
        const errorSpan = document.querySelector('.errore');
  
    if (newPassword.length < 8) {
      if (!errorSpan) {
        const span = document.createElement('span');
        span.textContent = "Password minore di 8 ";        
        const div = document.querySelector('.password');
        div.appendChild(span);
        span.classList.add('errore');
      }
    } else {      
        if (errorSpan) {
            errorSpan.remove();
          }
      }
    }

function checkConfirmPassword(event){
    const confirmpassword = document.querySelector('#confirm-password').value;
    const password=document.querySelector('#password').value;
    const errorSpan = document.querySelector('.errore');



if(confirmpassword !== password){
    if (!errorSpan) {
        const span = document.createElement('span');
        span.textContent = "Le password non coincidono";
        span.classList.add('errore');
        const div = document.querySelector('.confirm-password');
        div.appendChild(span);
      }
    } else { 
        if (errorSpan) {
            errorSpan.remove();
          }
}
}

const formStatus = {};

document.querySelector('#password-old').addEventListener('blur', checkPasswordOld);
document.querySelector('#password').addEventListener('blur', checkPassword);
document.querySelector('#confirm-password').addEventListener('blur', checkConfirmPassword);
