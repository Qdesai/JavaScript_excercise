var form = document.getElementById('register');
var submit = document.getElementById('submit');

var uname = document.getElementById('username');
var pwd = document.getElementById('p1');
var cPwd = document.getElementById('p2');
var chk = document.getElementById('chk');
var dob = document.getElementById('dob');

cPwd.addEventListener("keyup", function(){
    var t = pwd.value.length;
    if(uname.value.length >= 5 && pwd.value.length >= 12  && pwd.value === cPwd.value && chk.checked == true && dob.value){
        console.log('hiii');
        submit.disabled = false;
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