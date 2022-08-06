var form = document.getElementById('register');
var submit = document.getElementById('submit');
//submit.disabled = true;
var uname = document.getElementById('username');
var pwd = document.getElementById('p1');
var cPwd = document.getElementById('p2');
var chk = document.getElementById('chk');
var dob = document.getElementById('dob');

var msg = document.getElementById('message');
let messages = [];


$(function() {
    var $data = [];

    $('form').submit(function(e){

        
        $data.push({
            FullName: uname.value,
            PwdLen: pwd.value.length,
            bdate: dob.value
        });
        console.log($data);
        
for (var i = 0; i<$data.length; i++){
        var $row = $('<tr></tr>');
        var $arrId = $data[i];
        $row.append( $('<td></td>').text($arrId.FullName) );
        $row.append( $('<td></td>').text($arrId.PwdLen) );
        $row.append( $('<td></td>').text($arrId.bdate) );

        $('tbody').append($row);
}

        e.preventDefault();
    })
})
/* var data = [];

    form.addEventListener('submit', function(e){
    
        
        data.push({
            FullName: uname.value,
            PwdLen: pwd.value.length,
            date: dob.value
        })

        var tr = document.createElement('tr');
        var tbody = document.getElementsByName('tbody');

        tbody.

    

    console.log(data);
    e.preventDefault();
    })
 */
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
