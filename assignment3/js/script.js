// WEB303 Assignment 3
// Mohammed qaasim desai 

$(function() {

    $("a").on('click', funciton(){
        ajaxDisplayTeam();
    })

        
});


function displayTeam(){
    $.getJSON("data/glitchTeam.json", function(JSONDataFromFile, satatusText, jqXHRObject ){
        console.log(JSONDataFromFile);
        /* console.log(satatusText);
        console.log(jqXHRObject); */
        
        $.each(JSONDataFromFile.members, function(i, val){
            let loc = $(`<h4>${val.fullname}</h4>`);
            let pos = $(`<h6>${val.position}</h6>`);
            let shortB = $(`<p>${val.shortbio}</p><br>`);
                $("#glitch-team").append(loc).append(pos).append(shortB);
        });
    });
};

function ajaxDisplayTeam(){
    $.ajax({
    }).before(function (){
        console.log("Loading Teams....");
    }).get("glitchTeam.json", funciton(JSONDataFromFile){

    });
}