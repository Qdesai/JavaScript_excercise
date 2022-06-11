// WEB303 Assignment 3
// Mohammed qaasim desai 

$(function() {
    getData();
});


function getData(){
    $.getJSON("data/glitchTeam.json"), function(JSONDataFromFile,satatusText,jqXHRObject){
        $.each(JSONDataFromFile, function(i, val){
            console.log(JSONDataFromFile);
        });
    }
};
