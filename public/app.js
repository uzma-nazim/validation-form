//login

var input1 = document.getElementById("input1");
var check = document.getElementsByClassName("fa-check-circle");
var axclaim = document.getElementsByClassName("fa-exclamation-circle");
var errorMsg = document.getElementsByClassName("error");
var password = document.getElementById("password");
var user = document.getElementsByClassName("user-input");

function formValidation() {

    var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-z0-9\-])+\.)+([a-zA-z0-9])+$/;

    if (input1.value === "") {

        errorMsg[0].innerHTML = "Please fill the input";
        errorMsg[0].style.visibility = "visible";
        axclaim[0].className += " show";
        user[0].className += " red-border"


    }
    else if (input1.value.match(regex)) {

        check[0].className += " checShow"
        user[0].className += " green-border"


    }

    else {
        errorMsg[0].innerHTML = "invalid email";
        errorMsg[0].style.visibility = "visible";
        axclaim[0].className += " show";
        user[0].className += " red-border";


    }

    if (password.value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)) {

        check[1].className += " checShow"
        user[1].className += " green-border"

    }
    else if (password.value === "") {

        errorMsg[1].innerHTML = "Please fill the input";
        errorMsg[1].style.visibility = "visible";
        axclaim[1].className += " show";
        user[1].className += " red-border";
    }
    else if (password.value.length <= 8 || password.value.length > 20) {

        errorMsg[1].innerHTML = "Character must be 8 and 20";
        errorMsg[1].style.visibility = "visible";
        axclaim[1].className += " show";
        user[1].className += " red-border";
    }


    else {
        errorMsg[1].innerHTML = "Invalid Password";
        errorMsg[1].style.visibility = "visible";
        axclaim[1].className += " show";
        user[1].className += " red-border";
    }
    input1.value = "";
    password.value = ""
}


function showPas(e) {

    var password = document.getElementById("password")

    if (password.value == "") {
        e.disabled = true;
    }
    else {

        if (e.className == "far fa-eye-slash") {
            password.type = "text";
            e.className = "far fa-eye";
        }
        else {
            e.className = "far fa-eye-slash";
            password.type = "password";

        }
    }





}


//sugn up


var frstname = document.getElementById("frstname");
var lastName = document.getElementById("lastName");
var email = document.getElementById("email");
var pass = document.getElementById("pass");
var confirmPas = document.getElementById("confirmPas");

//sign Up function

function signUp() {


    //check firstName

    if (frstname.value == "") {
        errorMsg[2].innerHTML = "Please fill input";
        errorMsg[2].style.visibility = "visible";
        axclaim[2].className += " show";
        user[2].className += " red-border";

    }

    else if (!isNaN(frstname.value)) {

        errorMsg[2].innerHTML = "Number not allowed";
        errorMsg[2].style.visibility = "visible";
        axclaim[2].className += " show";
        user[2].className += " red-border";
    }
    else {

        check[2].className += " checShow"
        user[2].className += " green-border"

    }


    //check LasttName

    if (lastName.value == "") {
        errorMsg[3].innerHTML = "Please fill input";
        errorMsg[3].style.visibility = "visible";
        axclaim[3].className += " show";
        user[3].className += " red-border";

    }
    else if (!isNaN(lastName.value)) {

        errorMsg[3].innerHTML = "Number not allowed";
        errorMsg[3].style.visibility = "visible";
        axclaim[3].className += " show";
        user[3].className += " red-border";
    }
    else {

        check[3].className += " checShow"
        user[3].className += " green-border"

    }

    //check Email

    var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-z0-9\-])+\.)+([a-zA-z0-9])+$/;

    if (email.value === "") {

        errorMsg[4].innerHTML = "Please fill the input";
        errorMsg[4].style.visibility = "visible";
        axclaim[4].className += " show";
        user[4].className += " red-border"


    }
    else if (email.value.match(regex)) {

        check[4].className += " checShow"
        user[4].className += " green-border"


    }

    else {
        errorMsg[4].innerHTML = "invalid email";
        errorMsg[4].style.visibility = "visible";
        axclaim[4].className += " show";
        user[4].className += " red-border";


    }


    //check Password

    if (pass.value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)) {

        check[5].className += " checShow"
        user[5].className += " green-border"

    }
    else if (pass.value === "") {

        errorMsg[5].innerHTML = "Please fill the input";
        errorMsg[5].style.visibility = "visible";
        axclaim[5].className += " show";
        user[5].className += " red-border";
    }

    else if (pass.value.length <= 8 || password.value.length > 20) {

        errorMsg[5].innerHTML = "Character must be 8 and 20";
        errorMsg[5].style.visibility = "visible";
        axclaim[5].className += " show";
        user[5].className += " red-border";
    }


    else {
        errorMsg[5].innerHTML = "Invalid Password";
        errorMsg[5].style.visibility = "visible";
        axclaim[5].className += " show";
        user[5].className += " red-border";
    }


    ///Check confirm Passsword

    if (confirmPas.value == "") {
        errorMsg[6].innerHTML = "Please fill the input";
        errorMsg[6].style.visibility = "visible";
        axclaim[6].className += " show";
        user[6].className += " red-border";
    }

    else if (confirmPas.value === pass.value) {

        check[6].className += " checShow";
        user[6].className += " green-border";

    }
    else {

        errorMsg[6].innerHTML = "Password not match";
        errorMsg[6].style.visibility = "visible";
        axclaim[6].className += " show";
        user[6].className += " red-border";
    }



    frstname.value = "";
    lastName.value = "";
    email.value = "";
    pass.value = "";
    confirmPas.value = "";

}


