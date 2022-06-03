// WEB303 Assignment 2
// Mohammed Qaasim Desai

$(function() {

    $("a#prospect").on('click', function(){
        xhr.open("GET", "prospect.html");
        
        let el = document.getElementById("content");
        
        xhr.onload = function () { 
        if (xhr.status === 200){
            
            d.innerHTML = xhr.responseText;}
        
        };
        xhr.send();
    });

    $("a#convert").on('click', function(){
        console.log("C wasss clickked ");
    });
    
    $("a#retain").on('click', function(){
        console.log("R wasss clicked ")
    });

});

let d = document.getElementById("content");
document.getElementById("content").style.display = "block";

var xhr = new XMLHttpRequest();
        

