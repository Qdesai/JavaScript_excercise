// WEB303 Assignment 3
// Mohammed qaasim desai 

$(function() {

    $.getJSON("data/glitchTeam.json"), function(JSONDataFromFile, satatusText, jqXHRObject ){
        console.log(JSONDataFromFile);
        console.log(satatusText);
        console.log(jqXHRObject);
        console.log('hiiiii');
        /* $.each(JSONDataFromFile, function(i, val){
            
        }); */
    }

});