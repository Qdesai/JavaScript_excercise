// WEB303 Assignment 3
// Mohammed qaasim desai 

$(function() {

                            $.getJSON("data/glitchTeam.json", function(JSONDataFromFile, satatusText, jqXHRObject ){
                                console.log('hiiiii');
                                console.log(JSONDataFromFile);
                                console.log(satatusText);
                                console.log(jqXHRObject);
                                
                                $.each(JSONDataFromFile, function(i, val){
                                        $("content-wrapper").html(`<h1>${val.fullname}</h1>`);
                                        $("content-wrapper").html(`<h1>${val.positon}</h1>`);
                                   
                                });
                            });
    
});