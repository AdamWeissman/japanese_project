thePrompt = document.getElementById('thePrompt')
thePrompt.innerHTML = testing[0].val

userInputForm = document.getElementById('userInputSlot')
userInputForm.addEventListener('click', async () => {
  // testingThing.innerHTML = sample_arr['Phrases'][0][0]
  thePrompt.innerHTML = testing[1].val[2]
  console.log(testing[1].val[2]) // this is a little convoluted, but we can pick from the array
  console.log(testing[2])

})