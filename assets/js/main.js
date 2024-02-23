// #region email

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

// #endregion

// #region dice

//take roll button
const roll = document.getElementById("roll");


//declare dices
let userDice;
let PcDice;

//event listener for roll
roll.addEventListener("click", function(Dice) {

    //dices roll
    userDice = Math.floor(Math.random(0) * 6) + 1;
    PcDice = Math.floor(Math.random(0) * 6) + 1;

    //checking dices
    console.log(userDice);
    console.log(PcDice);

    //take html slots for results
    const userDiceResult = document.getElementById("userDiceRandom")
    const PcDiceResult = document.getElementById("PcDiceRandom")

    //insert results
    userDiceResult.innerHTML = (userDice);
    PcDiceResult.innerHTML = (PcDice);

    //rake resoult
    const resoult = document.getElementById("result")

    if(userDice > PcDice){
        result.innerHTML = ("YOU WIN");
    }
    else if(userDice < PcDice){
        result.innerHTML = ("YOU LOSE");
    }
    else{
        result.innerHTML = ("TIE");
    }
})

// #endregion

