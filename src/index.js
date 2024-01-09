document.addEventListener('DOMContentLoaded', (event) => {
    document.body.addEventListener('keypress', function(e) {
        if (e.keyCode === 13 || e.which === 13) {
            e.preventDefault();  // Prevent default form submit behavior
            addForm();
        }
    });
});

function addForm() {
    var formContainer = document.getElementById('form-container');
    var newForm = document.createElement('form');
    newForm.className = 'dynamic-form';
    newForm.innerHTML = '<input type="text" placeholder="Enter your name here....."><br>';
    formContainer.appendChild(newForm);
}


// starts here increment //

// var formCount = 1; // Start counting from 1 because there's initially one form

// function addForm() {
//     var forms = document.getElementsByClassName('dynamic-form');
//     var lastFormInput = forms[forms.length - 1].querySelector('.form-input');

//     if (lastFormInput.value.trim() === '') {
//         alert('Please enter a name in the current form before adding a new one.');
//         lastFormInput.focus(); // Brings focus to the empty input field
//         return;
//     }

//     formCount++;
//     updateFormCounter();

//     var formContainer = document.getElementById('form-container');
//     var newForm = document.createElement('form');
//     newForm.className = 'dynamic-form';
//     newForm.innerHTML = '<input type="text" class="form-input" placeholder="Enter name..."><br>';
//     formContainer.appendChild(newForm);
// }

// function updateFormCounter() {
//     var counterElement = document.getElementById('form-counter');
//     counterElement.textContent = 'Total Forms: ' + formCount;
// }
