function TitleValidate() {
    const titleInput = document.getElementById('createTitle')
    const titleError = document.querySelector('#createTitle + span.error')

    titleInput.addEventListener('input', function (event) {
      // Each time the user types something, we check if the
      // form fields are valid.
    
      if (titleInput.validity.valid) {
        // In case there is an error message visible, if the field
        // is valid, we remove the error message.
        titleError.textContent = ''; // Reset the content of the message
        titleError.className = 'error'; // Reset the visual state of the message
      } else {
        // If there is still an error, show the correct error
        showError();
      }
    });

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

exports.TitleValidate = TitleValidate