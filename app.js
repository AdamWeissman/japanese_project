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

// check user response matches something in node Array
function properResponse(input) {
  if (input.value == jNodes[0].val) {
    showSuccess(input);
  } else {
    showError(input, 'WRONG-O');
  }
}



// Event listeners
form.addEventListener('submit', function(e) {
  e.preventDefault();

  properResponse(userResponse)
  prompt.innerText = "HELLO"

});

prompt.addEventListener('change', function(e) {
  e.preventDefault()

  console.log("I was triggered")
})