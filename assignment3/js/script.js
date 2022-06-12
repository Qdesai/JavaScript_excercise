// WEB303 Assignment 3
// Mohammed qaasim desai 

$(function() {

        //displayTeam();
        ajaxDisplayTeam();
            
});


function displayTeam(){
    $.getJSON("data/glitchTeam.json", function(JSONDataFromFile, satatusText, jqXHRObject ){
        console.log(JSONDataFromFile);
        
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
        url: "glitchTeam.json",
        beforeSend: function( xhr ) {

        }
      }).done(function(){
                             $.get("data/glitchTeam.json", function(JSONDataFromFile){
                                $.each(JSONDataFromFile.members, function(i, val){
                                    let loc = $(`<h4>${val.fullname}</h4>`);
                                    let pos = $(`<h6>${val.position}</h6>`);
                                    let shortB = $(`<p>${val.shortbio}</p><br>`);
                                        $("#glitch-team").append(loc).append(pos).append(shortB);
                                });
                            });
                        }); 
}
