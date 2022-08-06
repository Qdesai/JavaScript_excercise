var form = document.getElementById('register');
var submit = document.getElementById('submit');

var uname = document.getElementById('username');
var pwd = document.getElementById('p1');
var cPwd = document.getElementById('p2');
var chk = document.getElementById('chk');
var dob = document.getElementById('dob');

let messages = [];

chk.addEventListener("click", function(){
    var t = pwd.value.length;
    if(uname.value.length >= 5 && pwd.value.length >= 12  && pwd.value === cPwd.value && chk.checked == true && dob.value){
        console.log('triggred');
        submit.disabled = false;
    }
    else{
        let messages = [];
        if(uname.value.length < 5 || !uname.value){
            messages.push("The UserName should contain atleast 5 charecters.");
        }
        if(pwd.value.length < 12){
            messages.push("The Password must contain atleast 12 charecters.");
        }
        if(pwd.value != cPwd.value){
            messages.push("The password value does not match");
        }
        if(chk.checked == false){
            messages.push("The terms and condition is not accepted");
        }
        if(!dob.value){
            messages.push("Date of birth is not selected");
        }
        var msg = document.getElementById('message');
        
        for (i = 0; i< messages.length; i++){
            var p = document.createElement('p');
            p.append(messages[i]);
            msg.append(p);
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