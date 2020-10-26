const form = document.getElementById('form');
const prompt = document.getElementById('prompt')
const userResponse = document.getElementById('userResponse');

// Show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

// Show success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

// Check userResponse is not null
function checkUserResponseNotEmpty(input) {
  //const reForEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (input.value.length > 0 ) {
    showSuccess(input);
  } else {
    showError(input, 'YOU GOTTA ENTER SOMETHING!!!');
  }
}

// check user response matches something in node Array




// Event listeners
form.addEventListener('submit', function(e) {
  e.preventDefault();

  checkUserResponseNotEmpty(userResponse);

});