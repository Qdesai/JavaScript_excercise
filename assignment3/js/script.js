// WEB303 Assignment 3
// Mohammed qaasim desai 

$(function() {

    $("a").on('click', function(){
                            $.getJSON("data/glitchTeam.json"), function(JSONDataFromFile, satatusText, jqXHRObject ){
                                console.log('hiiiii');
                                console.log(JSONDataFromFile);
                                console.log(satatusText);
                                console.log(jqXHRObject);
                                
                                /* $.each(JSONDataFromFile, function(i, val){
                                    
                                }); */
                            }
    });
    

});