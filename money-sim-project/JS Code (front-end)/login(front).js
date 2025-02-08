const saveUser = "";
const savePass = "";
let checkUser = "testUser";
let checkPass = "password";
let username = "";
let password = "";
document.getElementById("loginButton").addEventListener("click", function () {
    console.log("debugg");
    username = document.getElementById("userLogin").value;
    password = document.getElementById("userPass").value;

    if (/^\d+$/.test(username)) {
        alert("INVALID USERNAME, ONLY CHARACTERS ALLOWED");
        return; // Stop further execution
    }

    console.log("Username:", username);
    console.log("Password:", password);

    if(username == checkUser && checkPass == password){
        let mainContent = document.querySelector(".mainContent");
        let loginScreen = document.querySelector(".loginMenu");
        mainContent.style.display = "block";
        loginScreen.style.display = "none";
    }else{
        alert("Invalid username or password OR internal code error!");
    }
});