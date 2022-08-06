var form = document.getElementById('register');
var submit = document.getElementById('submit');

var uname = document.getElementById('username');
var pwd = document.getElementById('p1');
var cPwd = document.getElementById('p2');
var chk = document.getElementById('chk');
var dob = document.getElementById('dob');

let messages = [];

cPwd.addEventListener("keyup", function(){
    var t = pwd.value.length;
    if(uname.value.length >= 5 && pwd.value.length >= 12  && pwd.value === cPwd.value && chk.checked == true && dob.value){
        
        submit.disabled = false;
    }
    else{
        if(uname.value.length < 5 || !uname.value){
            messages.push("The UserName should contain atleast 5 charecters.");
        }
        if(pwd.value.length < 12){
            messages.push("The Password must contain atleast 12 charecters.");
            var 
        }
        if(pwd.value != cPwd.value){
            console.log("the password value does not match");
        }
        if(chk.checked == false){
            console.log('the terms and condition is not accepted');
        }
        if(!dob.value){
            console.log('date of birth is not selected');
        }
    }
})



$(function() {
        /* if(pwd.length > 5){
            console.log(pwd.value);
        }
        else{
        e.preventDefault();
        } */



});