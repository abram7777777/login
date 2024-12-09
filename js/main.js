var nameDataInput = document.getElementById("name-data")
var emailDataInput = document.getElementById("email-data")
var passwordDataInput = document.getElementById("password-data")

var dataList = [];
if (localStorage.getItem("datainformations") === null) {
    dataList = [];
  } else {
    dataList = JSON.parse(localStorage.getItem("datainformations"));
  }


document.getElementById("signup").addEventListener("click" , function(){
    if(nameDataInput.value === "" || emailDataInput.value === "" || passwordDataInput.value === ""){
        document.getElementById("p-signup").classList.replace("text-success" , "text-danger")
        document.getElementById("p-signup").innerHTML="All inputs is required"
    }else{
        signUp()        
    }

})

function signUp(){
    var dataUser = {
        name: nameDataInput.value,
        email: emailDataInput.value,
        password: passwordDataInput.value
      };


      if(checkEmail() == true){
        document.getElementById("p-signup").classList.replace("text-success" , "text-danger")
        document.getElementById("p-signup").innerHTML="email already exists"
      }else{
        document.getElementById("p-signup").classList.replace("text-danger" , "text-success")
        document.getElementById("p-signup").innerHTML="success"

        dataList.push(dataUser);
        localStorage.setItem("datainformations", JSON.stringify(dataList));
        nameDataInput.value = ""
        emailDataInput.value = ""
        passwordDataInput.value = ""
      }

    
}
function checkEmail(){
    for(var i = 0 ; i < dataList.length ; i++){
        if(emailDataInput.value == dataList[i].email){
            return true ;
        }
    }
}





var loginEnmailInput = document.getElementById("login-email")
var loginPasswordInput = document.getElementById("login-password")

document.getElementById("login").addEventListener("click" , function(){
    if(loginEnmailInput.value === "" || loginPasswordInput.value === ""){
        document.getElementById("p-login").innerHTML="All inputs is required"        
    }else{
        document.getElementById("p-login").innerHTML=""        
        goToHome()
    }

})

function goToHome(){
    if(checkLogIN() != null){
        document.getElementById("home-page").classList.replace("d-none" , "d-block")
        document.getElementById("login-page").classList.replace("d-block" , "d-none")
        document.getElementById("home-welcome").innerHTML = "Welcom " + checkLogIN()
    }else{
        document.getElementById("p-login").innerHTML="incorrect email or password"        
    }
}

function checkLogIN(){
    for(var i = 0 ; i < dataList.length ; i++){
        if(loginEnmailInput.value === dataList[i].email && loginPasswordInput.value === dataList[i].password){
            return dataList[i].name ;
        }
    }
}


document.getElementById("to-signup").addEventListener("click" , function(){
    document.getElementById("login-page").classList.replace("d-block" , "d-none")
    document.getElementById("signup-page").classList.replace("d-none" , "d-block")
    document.getElementById("p-signup").innerHTML=""
    

})
document.getElementById("to-login").addEventListener("click" , function(){
    document.getElementById("login-page").classList.replace("d-none" , "d-block")
    document.getElementById("signup-page").classList.replace("d-block" , "d-none")


})
document.getElementById("logout").addEventListener("click" , function(){
    document.getElementById("login-page").classList.replace("d-none" , "d-block")
    document.getElementById("signup-page").classList.replace("d-block" , "d-none")
    document.getElementById("home-page").classList.replace("d-block" , "d-none")
    loginEnmailInput.value =""
    loginPasswordInput.value =""
})