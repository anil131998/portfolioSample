function ValidateForm(){
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var subject = document.getElementById("subject");
    var message = document.getElementById("message");

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;    

    if(message.value=="" || name.value=="" || email.value=="" || subject.value=="" ){
        alert("Please Fill all the data");
        return false;
    }
    if(name.value.length<3){
        alert("Please enter a valid name");
        return false;
    }
    if(!email.value.match(validRegex)){
        alert("Email address not valid");
        return false;
    }
    if(message.length<10){
        alert("Message should be atleast 10 letter long");
        return false;
    }

    return true;
}