var form = document.getElementById('register');
var pwd = document.getElementById('p1');
var cPwd = document.getElementById('p2');
var chk = document.getElementById('chk');
var dob = document.getElementById('dob');


$(function() {

    
    $('form').submit(function(e) {
        console.log(p1.value);
        if(p1.value > 5){
            console.log(p1.value);
        }
        else{
        e.preventDefault();
        }
    });



});