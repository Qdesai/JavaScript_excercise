// WEB303 Assignment 2
// Mohammed Qaasim Desai


$(function() {

    $("a#prospect").on('click', function(){
        page = "prospect.html";
        pros(page);
        
    });

    $("a#convert").on('click', function(){
        page = "convert.html";
        pros(page);
    });
    
    $("a#retain").on('click', function(){
        page = "retain.html";
        pros(page);
    });

    $("section > a").on('click', function(){
            $("div").animate({ top: "50px"
                            });
    });
});

let d = document.getElementById("content");
document.getElementById("content").style.display = "block";

        function pros(page){

            var xhr = new XMLHttpRequest();

            xhr.open("GET", page);
                    xhr.onload = function () { 
                        if (xhr.status === 200){
                            
                            d.innerHTML = xhr.responseText;}
                        };
            xhr.send();

        }
