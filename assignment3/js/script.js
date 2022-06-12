// WEB303 Assignment 3
// Mohammed qaasim desai 

$(function() {


    
    $("a").on('click', function(){
        ajaxDisplayTeam();
    })        
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
    $.ajax(function(){
        console.log('doneeeee');
                            $.get("glitchTeam.json", function(JSONDataFromFile){
                                $.each(JSONDataFromFile.members, function(i, val){
                                    let loc = $(`<h4>${val.fullname}</h4>`);
                                    let pos = $(`<h6>${val.position}</h6>`);
                                    let shortB = $(`<p>${val.shortbio}</p><br>`);
                                        $("#glitch-team").append(loc).append(pos).append(shortB);
                                });
                            })
    });
}

/* .before($("#glitch-team").html( "<h1> Loading Teams...</h1>"),
    console.log('donee') ); */