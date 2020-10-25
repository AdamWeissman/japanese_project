thePrompt = document.getElementById('thePrompt') // top prompt or root value of node
inputMessage = document.getElementById('inputMessage') // for error messages etc
theFormButton = document.getElementById('submitButton')


function setThePrompt(withThisMessage) {
  thePrompt.innerHTML = withThisMessage
}

function setInputMessage(withThisMessage) {
  inputMessage.innerHTML = withThisMessage
}

function submitUserInput() {
  let thang = document.getElementById('userActualInput').value;
  console.log("this worked: ", thang);
}


// userInputForm.addEventListener('click', async () => {
//   setThePrompt(testing[0].val)
//   //thePrompt.innerHTML = testing[1].val[2]
//   console.log(testing[1].val[2]) // this is a little convoluted, but we can pick from the array
//   console.log(testing[2])

// })