thePrompt = document.getElementById('thePrompt')

function setThePrompt(withThisMessage) {
  thePrompt.innerHTML = withThisMessage
}


userInputForm = document.getElementById('userInputSlot')
userInputForm.addEventListener('click', async () => {
  // testingThing.innerHTML = sample_arr['Phrases'][0][0]
  setThePrompt(testing[0].val)
  //thePrompt.innerHTML = testing[1].val[2]
  console.log(testing[1].val[2]) // this is a little convoluted, but we can pick from the array
  console.log(testing[2])

})