console.log("a");

//declare an array with permitted emails:
const allowedEmails = ["admin@gmail.com"];

//take loginButton
const login = document.getElementById("loginButton");

//declaring acces for cycle
let access;

//event listener for login
login.addEventListener("click", function(Login) {

    //Email input
    const inputEmail = document.getElementById("inputEmail").value;

    // checking email
        for (let index = 0; index < allowedEmails.length; index++) {
            if(inputEmail === allowedEmails[index]){
            access = true;
            }
        }

    //some checks
        console.log(inputEmail);
        console.log(access);

    //declaring permission
        let permission = document.getElementById("permission");

    //permission communication
        if(access == true) {
            permission.innerHTML = ("allowed")
        }
        else{
            permission.innerHTML = ("denied")
        }

    }
)

