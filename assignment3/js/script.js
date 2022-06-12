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
            xhr.overrideMimeType( "text/plain; charset=x-user-defined" );
          }
      }).done(function(){
        console.log('doneee');


                             $.getJSON("glitchTeam.json", function(JSONDataFromFile){
                                $.each(JSONDataFromFile.members, function(i, val){
                                    console.log(val.fullname);
                                    let loc = $(`<h4>${val.fullname}</h4>`);
                                    let pos = $(`<h6>${val.position}</h6>`);
                                    let shortB = $(`<p>${val.shortbio}</p><br>`);
                                        $("#glitch-team").append(loc).append(pos).append(shortB);
                                });
                            });
                        }); 
}

/* .before($("#glitch-team").html( "<h1> Loading Teams...</h1>"),
    console.log('donee') ); */