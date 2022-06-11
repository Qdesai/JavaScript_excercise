// WEB303 Assignment 3
// Mohammed qaasim desai 

$(function() {

    $("a").on('click', function(){
        console.log('hiiiii');
    });
    $.getJSON("data/glitchTeam.json"), function(JSONDataFromFile, satatusText, jqXHRObject ){
        
        console.log(JSONDataFromFile);
        console.log(satatusText);
        console.log(jqXHRObject);
        
        /* $.each(JSONDataFromFile, function(i, val){
            
        }); */
    }

});