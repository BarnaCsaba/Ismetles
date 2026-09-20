const nameForm = document.getElementById('nameForm');
const nameInput = document.getElementById('userName');


nameForm.addEventListener('submit', function(event) {
    
    event.preventDefault();

    
    console.log(nameInput.value);

    
    nameForm.reset();
});