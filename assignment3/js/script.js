// WEB303 Assignment 3
// Mohammed qaasim desai 

$(function() {

    $("a").on('click', function(){

                            $.getJSON("data/glitchTeam.json", function(JSONDataFromFile, satatusText, jqXHRObject ){
                                console.log(JSONDataFromFile);
                                /* console.log(satatusText);
                                console.log(jqXHRObject); */
                                
                                $.each(JSONDataFromFile.members, function(i, val){
                                        $("#glitch-team").html(`<h4>${val.fullname}</h4>
                                                                <h6>${val.positon}</h6>
                                                                <p>${val.shortbio}</p>
                                        `);
                                    console.log(val.fullname);
                                    console.log(val.position);
                                    console.log(val.shortbio);
                                });
                            });
        });
});