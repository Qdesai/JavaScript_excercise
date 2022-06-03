// WEB303 Assignment 2
// Mohammed Qaasim Desai


$(function() {

    $("a#prospect").on('click', function(){

    });

    $("a#convert").on('click', function(){
        console.log("C wasss clickked ");
    });
    
    $("a#retain").on('click', function(){
        console.log("R wasss clicked ")
    });

});



var xhr = new XMLHttpRequest();

xhr.open("GET", "../prospect.html");

xhr.onload = function(){ 
if (xhr.status === 200){
    console.log('donee');
}
};
xhr.send();
