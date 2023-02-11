// to sote the details of user
let userdetails = {
    "xyz@gmail.com": { fname: "max", lname: "smith", email: "xyz@gmail.com", pswd: "xyz", phonenumber: "9876543210", sex: "1" }
}
// let passwordreminder={
// "xyz@gmail.com":{email:"xyz@gmail.com",pswd:"xyz"}
// }
console.log(userdetails);
function savedetails() {
    // to store data permaently in browser
    localStorage.setItem("database", JSON.stringify(userdetails))
}
function getdetails() {
    // to get details stored in localstorage
    userdetails = JSON.parse(localStorage.getItem("database"))
}

let Remail = document.getElementById("Remail")
let Rpswd = document.getElementById("Rpswd")
let Rconfirmpswd = document.getElementById("Rconfirmpswd")
let Rfirstname = document.getElementById("Rfirstname")
let Rsecondname = document.getElementById("Rsecondname")
let Rnumber = document.getElementById("Rnumber")
// let remembermebutton=document.getElementById("remember-me")
// let Rgender = document.getElementById("Rgender")
// let Rgender=document.querySelectorAll(".radio")
// let Rreminder=document.getElementById("reminder")
// console.log(Rreminder);
// console.log('Rgender');
let firstname
let secondname
let email
let pswd
let confirmpswd
let mobilenumber
let gender

// to register

function register() {

    let firstname = Rfirstname.value
    let secondname = Rsecondname.value
    let email = Remail.value
    let pswd = Rpswd.value
    let confirmpswd = Rconfirmpswd.value
    let mobilenumber = Rnumber.value
    // let gender = Rgender.value
    getdetails()
    if(firstname==""||secondname==""||email==""||pswd==""||mobilenumber==""){
        alert(`please enter the required details`)
    }
    else if(pswd!==confirmpswd){
        alert(`incorrect password`)
    }
//     else if(email!==`' '+@gmail.com`){
// alert(`write a valid email id`)
//     }
    else if (email in userdetails) {
        alert(`User already exist.Please login`);
        window.location ='login.html'

    }
    else {
        userdetails[email] = {
            fname: firstname,
            lname: secondname,
            email,
            phonenumber: mobilenumber,
            pswd,
            sex: gender
        }
        savedetails()
        console.log(userdetails);
        alert(`You have successfully registered`)
        window.location ='login.html'
    }
}
// second session-login





function loginbutton() {
    let loginemail = secondlogin.value
    let loginpassword = secondpswd.value
    getdetails()
    if(loginemail==""||loginpassword==""){
        alert(`Please enter the required details`)
    }
    else if (loginemail in userdetails) {
// autofill()
        if (loginpassword == userdetails[loginemail].pswd)
        // if you write (loginpassword==userdetails[email].pswd,you wont get result.Because in the step number 64 you first check whether the key called 'loginemail' is present inside the userdetails then if it is present  you will check whether the loginpassword is present inside the key called loginemail.)
        {
            alert(`login successfull`)
            window.location='termsandcondition.html'
        }
        else {
            alert(`Invalid username/password`)
        }
    }
    else {
        alert(`Invalid username/password`)
    }
}

// to remember password
// function reminder(){
  
//     let loginemail = secondlogin.value
//     let loginpassword = secondpswd.value
//     getdetails()
// arr1={}
// arr2=[]
//     if(loginemail in userdetails){
//        rememberemail=userdetails[loginemail].email
//         rememberpassword=userdetails[loginemail].pswd
// arr1[loginemail]={rememberemail,rememberpassword}
//     }
    
// }

// function autofill(){
//     let loginemail = secondlogin.value
//     let loginpassword = secondpswd.value
//     if(let loginemail in arr1){
//         secondpswd.value=arr1[loginemail].rememberpassword
//     }
// }



// terms and condition page
function agreebutton(){
    window.location='games.html'
}
// fortnight session
function fortnightbutton(){
    window.location='gamefortnight.html'
}
// pathofexile session
function pathofexilebutton(){
    window.location='pathofexile.html'
}
// league of legends session
function leagueoflegendsbutton(){
    window.location='leagueoflegends.html'
}
// pubg session
function pubgbutton(){
    window.location='pubg.html'
}
// war of thunder session
function warofthunderbutton(){
    window.location='warofthunder.html'
}
// need for speed session
function needforspeedbutton(){
    window.location='needforspeed.html'
}
// elder scroll session
function elderscrollbutton(){
    window.location='elderscroll.html'
}
// road redemption session
function roadredemptionbutton(){
    window.location='roadredemption.html'
}
// to create a new account
function accountcreation(){
    window.location='register.html'
}
// to go back to login page
function backtologin(){
    window.location='index.html'
}
