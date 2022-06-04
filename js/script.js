// WEB303 Assignment 2
// Mohammed Qaasim Desai


$(function() {

    $("a#prospect").on('click', function(){
        page = "prospect.html";
        pros(page);
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

        function pros(page){

            var xhr = new XMLHttpRequest();        
            let el = document.getElementById("content");

            xhr.open("GET", page);
                    xhr.onload = function () { 
                        if (xhr.status === 200){
                            
                            d.innerHTML = xhr.responseText;}
                        
                        };
            xhr.send();

        }


