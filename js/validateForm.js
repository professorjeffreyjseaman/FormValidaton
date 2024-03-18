function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;

    //Reset Error message on main screen
    document.getElementById('nameError').innerHTML = '';
    document.getElementById('emailError').innerHTML = '';

    var isValid = true;

    //Identify if name is empty
    if (name.trim() === ''){
        document.getElementById('nameError').innerHTML = 'Name is Required';
        isValid = false;
    }

    if (email.trim() === ''){
        document.getElementById('emailError').innerHTML = 'Email is Required';
        isValid = false;
    } else {
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)){
            document.getElementById('emailError').innerHTML = 'Invalid Email format';
            isValid = false;
        }
    }

    //Submit Form
    if (isValid){
        document.getElementById('myForm').onsubmit();
    }
 


}