function titleValidate(inputId) {
    const titleInput = document.getElementById(`${inputId}`)
    const titleError = document.querySelector(`#${inputId} + span.error`)

    titleInput.addEventListener('input', function (event) {
      // Each time the user types something, we check if the
      // form fields are valid.
    
      if (titleInput.validity.valid) {
        // In case there is an error message visible, if the field
        // is valid, we remove the error message.
        titleError.textContent = '' // Reset the content of the message
        titleError.className = 'error' // Reset the visual state of the message
      } else {
        // If there is still an error, show the correct error
        showError()
      }
    })

    function showError() {
        if(titleInput.validity.valueMissing) {
          // If the field is empty,
          // display the following error message.
          titleError.textContent = 'You need to enter a title.';
        } else if(titleInput.validity.typeMismatch) {
          // If the field doesn't contain an string
          titleError.textContent = 'Entered value needs to be text.';
        }
        }

    titleError.className = 'error active'
}

function linkValidate(inputId) {
    const linkInput = document.getElementById(inputId)
    const linkError = document.querySelector(`#${inputId} + span.error`)

    linkInput.addEventListener('input', function (event) {
      // Each time the user types something, we check if the
      // form fields are valid.
    
      if (linkInput.validity.valid) {
        // In case there is an error message visible, if the field
        // is valid, we remove the error message.
        linkError.textContent = '' // Reset the content of the message
        linkError.className = 'error' // Reset the visual state of the message
      } else {
        // If there is still an error, show the correct error
        showLinkError()
      }
    })

    function showLinkError() {
        if(linkInput.validity.valueMissing) {
          // If the field is empty,
          // display the following error message.
          linkError.textContent = 'You need to enter a link.';
        } else if(linkInput.validity.typeMismatch) {
          // If the field doesn't contain an string
          linkError.textContent = 'Entered value needs to be text.';
        }
        }

    linkError.className = 'error active'
}

function dateValidate(inputId) {
  const dateInput = document.getElementById(inputId)
  const dateError = document.querySelector(`#${inputId} + span.error`)

  dateInput.addEventListener('input', function (event) {
    // Each time the user types something, we check if the
    // form fields are valid.
  
    if (dateInput.validity.valid) {
      // In case there is an error message visible, if the field
      // is valid, we remove the error message.
      dateError.textContent = '' // Reset the content of the message
      dateError.className = 'error' // Reset the visual state of the message
    } else {
      // If there is still an error, show the correct error
      showDateError()
    }
  })

  function showDateError() {
      if(dateInput.validity.valueMissing) {
        // If the field is empty,
        // display the following error message.
        dateError.textContent = 'You need to enter a date.';
      } else if(dateInput.validity.typeMismatch) {
        // If the field doesn't contain an string
        dateError.textContent = 'Entered value needs to be a valid date (MM-DD-YYYY)';
      } else if(dateInput.validity.patternMismatch) {
        console.log(dateInput.validity.patternMismatch)
        dateError.textContent = 'Enter a valid date (MM/DD/YYYY)'
      }

  dateError.className = 'error active'
}}


function startValidate(inputId) {
  const startInput = document.getElementById(inputId)
  const startError = document.querySelector(`#${inputId} + span.error`)

  startInput.addEventListener('input', function (event) {
    // Each time the user types something, we check if the
    // form fields are valid.
  
    if (startInput.validity.valid) {
      // In case there is an error message visible, if the field
      // is valid, we remove the error message.
      startError.textContent = '' // Reset the content of the message
      startError.className = 'error' // Reset the visual state of the message
    } else {
      // If there is still an error, show the correct error
      showLinkError()
    }
  })

  function showLinkError() {
      if (startInput.validity.typeMismatch) {
        // If the field doesn't contain an string
        startError.textContent = 'Entered value needs to be text.'
      } else if (startInput.validity.patternMismatch) {
        startError.textContent = 'Entered value needs to be in the form hh:mm:ss or mm:ss'
      }

  startError.className = 'error active'
}}

function endValidate(inputId) {
  const endInput = document.getElementById(inputId)
  const endError = document.querySelector(`#${inputId} + span.error`)

  endInput.addEventListener('input', function (event) {
    // Each time the user types something, we check if the
    // form fields are valid.
  
    if (endInput.validity.valid) {
      // In case there is an error message visible, if the field
      // is valid, we remove the error message.
      endError.textContent = '' // Reset the content of the message
      endError.className = 'error' // Reset the visual state of the message
    } else {
      // If there is still an error, show the correct error
      showLinkError()
    }
  })

  function showLinkError() {
      if (endInput.validity.typeMismatch) {
        // If the field doesn't contain an string
        endError.textContent = 'Entered value needs to be text.'
      } else if (endInput.validity.patternMismatch) {
        endError.textContent = 'Entered value needs to be in the form hh:mm:ss or mm:ss'
      }

  endError.className = 'error active'
}}

function nameValidate(inputId) {
  const nameInput = document.getElementById(inputId)
  const nameError = document.querySelector(`#${inputId} + span.error`)

  nameInput.addEventListener('input', function (event) {
    // Each time the user types something, we check if the
    // form fields are valid.
  
    if (nameInput.validity.valid) {
      // In case there is an error message visible, if the field
      // is valid, we remove the error message.
      nameError.textContent = '' // Reset the content of the message
      nameError.className = 'error' // Reset the visual state of the message
    } else {
      // If there is still an error, show the correct error
      showError()
    }
  })

  function showError() {
      if(nameInput.validity.valueMissing) {
        // If the field is empty,
        // display the following error message.
        nameError.textContent = 'You need to enter a name.';
      } else if(nameInput.validity.typeMismatch) {
        // If the field doesn't contain an string
        nameError.textContent = 'Entered value needs to be text.';
      }
      }

  nameError.className = 'error active'
}

exports.titleValidate = titleValidate
exports.linkValidate = linkValidate
exports.dateValidate = dateValidate
exports.startValidate = startValidate
exports.endValidate = endValidate
exports.nameValidate = nameValidate