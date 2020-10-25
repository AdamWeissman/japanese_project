thePrompt = document.getElementById('thePrompt')

function setThePrompt(withThisMessage) {
  thePrompt.innerHTML = withThisMessage
}

inputMessage = document.getElementById('inputMessage')

function setInputMessage(withThisMessage) {
  inputMessage.innerHTML = withThisMessage
}

userInputForm = document.getElementById('userInputSlot')

function submitUserInput(userInput) {

}

userInputForm.addEventListener('click', async () => {
  setThePrompt(testing[0].val)
  //thePrompt.innerHTML = testing[1].val[2]
  console.log(testing[1].val[2]) // this is a little convoluted, but we can pick from the array
  console.log(testing[2])

})