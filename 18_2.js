function check() {

    let name = document.getElementById("Name");
    let familyname = document.getElementById("FamilyName");
    let email = document.getElementById("email");
   const password = document.getElementById("psw");
    let reapeatpassword = document.getElementById("pswReapet");
    document.getElementById('errorMessage').innerHTML = "";

    if (email.value == '') {
        document.getElementById('errorMessage')
            .innerHTML += "email form is empty<br>";
    }
    if (name.value == '') {
        document.getElementById('errorMessage')
            .innerHTML += "name form is empty<br>";
    }
    if (familyname.value == '') {
        document.getElementById('errorMessage')
            .innerHTML += "familyname form is empty<br>";
    }
    if (password.value == '') {
        document.getElementById('errorMessage')
            .innerHTML += "password form is empty<br>";
    }
    if (password.value !== reapeatpassword.value) {
        document.getElementById('errorMessage')
            .innerHTML += "password doesn`t match<br>";
    }
}

function colorMe(){
    password.style.backgroundColor = "blue";
}