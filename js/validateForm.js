function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;

    //Reset Error message on main screen
    document.getElementById('nameError').innerHTML = '';
    document.getElementById('emailError').innerHTML = '';

    document.getElementById('name').classList.remove('error');
    document.getElementById('email').classList.remove('error');


    var isValid = true;

    //Identify if name is empty
    if (name.trim() === ''){
        document.getElementById('nameError').innerHTML = 'Name is Required';
        document.getElementById('name').classList.add('error');
        isValid = false;
    }

    if (email.trim() === ''){
        document.getElementById('emailError').innerHTML = 'Email is Required';
        document.getElementById('email').classList.add('error');
        isValid = false;
    } else {
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)){
            document.getElementById('emailError').innerHTML = 'Invalid Email format';
            document.getElementById('email').classList.add('error');
            isValid = false;
        }
    }

    //Submit Form
    if (isValid){
        document.getElementById('myForm').onsubmit();
    }
 


}