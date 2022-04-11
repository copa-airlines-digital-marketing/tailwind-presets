(function () {
  const ERROR_LABEL = 'error'

const addErrorAttribute = (input: HTMLInputElement) => input.setAttribute(ERROR_LABEL, ERROR_LABEL)

const rmErrorAttribute = (input: HTMLInputElement) => input.removeAttribute(ERROR_LABEL)

const onInputChange = (input: HTMLInputElement) => () => rmErrorAttribute(input)

const onInputIvalid = (input: HTMLInputElement) => () => addErrorAttribute(input)

const addListenerToInputs = (input: HTMLInputElement) => {
  input.addEventListener('invalid', onInputIvalid(input))
  input.addEventListener('change', onInputChange(input))
}

const setInputs = () => {
  const inputs = Array.prototype.slice.call(document.querySelectorAll('input'))

  inputs.map(addListenerToInputs)
}

setInputs ()
})();