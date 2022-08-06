var form = document.getElementById('register');
var submit = document.getElementById('submit');
submit.disabled = true;
var uname = document.getElementById('username');
var pwd = document.getElementById('p1');
var cPwd = document.getElementById('p2');
var chk = document.getElementById('chk');
var dob = document.getElementById('dob');

var msg = document.getElementById('message');
let messages = [];

/* chk.addEventListener("click", function(){
    var t = pwd.value.length;
    if(uname.value.length >= 5 && pwd.value.length >= 12  && pwd.value === cPwd.value && chk.checked == true && dob.value){
        console.log('triggred');
        submit.disabled = false;

                                    while (msg.firstChild) {
                                        msg.removeChild(msg.firstChild); // for clearing the messages from the page
                                    }
    }
    else{
        let messages = [];
    
        
                                    while (msg.firstChild) {
                                        msg.removeChild(msg.firstChild); // for clearing the messages from the page
                                    }

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
        
        for (i = 0; i< messages.length; i++){
            var p = document.createElement('p');
            p.append(messages[i]);
            msg.append(p);
        }
    }
}) */
  
                uname.addEventListener('blur', function () {
                    
                    if(uname.value.length < 5 || !uname.value){        
                        clrMsg();
                        messages.push("The UserName should contain atleast 5 charecters.");
                        errMsg();
                        
                    }
                })

                pwd.addEventListener('blur', function(){
                    if(pwd.value.length < 12){
                        clrMsg();
                        messages.push("The Password must contain atleast 12 charecters.");
                        errMsg();
                    }
                })

                cPwd.addEventListener('blur', function(){
                    if(pwd.value != cPwd.value){
                        clrMsg();
                        messages.push("The password value does not match");
                        errMsg();
                    }
                })

                chk.addEventListener('blur', function(){
                    if(chk.checked == false){
                        clrMsg();
                        messages.push("The terms and condition is not accepted");
                        errMsg();
                    }
                    else{
                        clrMsg();
                    }
                })

                dob.addEventListener('blur', function(){
                    if(!dob.value){
                        clrMsg();
                        messages.push("Date of birth is not selected");
                        errMsg();
                    }
                })

                function errMsg(){
                    
                    for (i = 0; i < messages.length; i++){
                        var p = document.createElement('p');
                        p.append(messages[i]);
                        msg.append(p);
                        
                    }
                    messages.pop();
                }


                function clrMsg(){
                    while(msg.firstChild) {
                        msg.removeChild(msg.firstChild);
                    }
                }


$(function() {
});