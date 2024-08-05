const login = document.querySelector('#loginButton');
login.addEventListener('click', giveAccess);

function giveAccess(){
    const username =document.querySelector('#username').value;
    const password =document.querySelector('#password').value;
    if (username == "admin" && password =="admin"){
        console.log("check2");
        window.location.href = "homePage.html";
    }
}

// const resetPassword = document.querySelector('#resetPassword');
// resetPassword.addEventListener('click',openPasswordReset);
// function openPasswordReset(){
//     resetPassword.href="passwordReset.html";
// }

// const resetUsername = document.querySelector('#resetUsername');
// resetUsername.addEventListener('click',openUsernameReset);
// function openUsernameReset(){
//     resetUsername.href="usernameReset.html";
// }
