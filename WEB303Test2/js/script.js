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


$(function() {
    
                    var $data = [];

                    $('form').submit(function(e){

                        $data.push({
                            FullName: uname.value,
                            PwdLen: pwd.value.length,
                            bdate: dob.value
                        });

                        var $rows = document.querySelectorAll('tbody > tr');

                        $rows.forEach(r => {
                        r.remove();
                        });     

                        addRows();

                        e.preventDefault();
                    });

                    function addRows(){
                       
                    for(var i = 0; i<$data.length; i++){
                        
                        var $row = $('<tr></tr>');
                        var $arrId = $data[i];
                        $row.append( $('<td></td>').text($arrId.FullName) );
                        $row.append( $('<td></td>').text($arrId.PwdLen) );
                        $row.append( $('<td></td>').text($arrId.bdate) );

                        $('tbody').append($row);
                    }
                    }

                    $('#sortUname').click(function(){
                        var $rows = document.querySelectorAll('tbody > tr');
                                    $rows.forEach(r => {
                                    r.remove();
                                    });


                                for(var i = 0; i<$data.length; i++){

                                    var $tId = $data[i];
                                    if($tId.FullName.length < 12){
        
                                        var $row = $('<tr></tr>');
                                        $row.append( $('<td></td>').text($tId.FullName) );
                                        $row.append( $('<td></td>').text($tId.PwdLen) );
                                        $row.append( $('<td></td>').text($tId.bdate) );
                                        $('tbody').append($row);
                                    }
                                }

                    });

                    $('#longUname').click(function(){
                                var $rows = document.querySelectorAll('tbody > tr');
                                    $rows.forEach(r => {
                                    r.remove();
                                    });


                                for(var i = 0; i<$data.length; i++){

                                    var $tId = $data[i];
                                    if($tId.FullName.length >= 12){ 
                                        var $row = $('<tr></tr>');
                                        $row.append( $('<td></td>').text($tId.FullName) );
                                        $row.append( $('<td></td>').text($tId.PwdLen) );
                                        $row.append( $('<td></td>').text($tId.bdate) );
                                        $('tbody').append($row);
                                    }
                                }

                    });

                    $('#reset').click(function(){
                        var $rows = document.querySelectorAll('tbody > tr');
                        $rows.forEach(r => {
                        r.remove();
                        });

                        for(var i = 0; i<$data.length; i++){

                                var $tId = $data[i];
                            
                                var $row = $('<tr></tr>');
                                $row.append( $('<td></td>').text($tId.FullName) );
                                $row.append( $('<td></td>').text($tId.PwdLen) );
                                $row.append( $('<td></td>').text($tId.bdate) );
                                $('tbody').append($row);
                        }
                    });

                    function callFilter(){
                        var $row = $('<tr></tr>');
                        $row.append( $('<td></td>').text($tId.FullName) );
                        $row.append( $('<td></td>').text($tId.PwdLen) );
                        $row.append( $('<td></td>').text($tId.bdate) );
                        $('tbody').append($row);
                    }
})


    form.addEventListener('change', function() { 
            if(uname.value.length >= 5 && pwd.value.length >= 12  && pwd.value === cPwd.value && chk.checked == true && dob.value){
                submit.disabled = false;
            }else{
                submit.disabled = true;
            }
    });


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