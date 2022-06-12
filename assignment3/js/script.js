// WEB303 Assignment 3
// Mohammed qaasim desai 

$(function() {

    

                            $.getJSON("data/glitchTeam.json", function(JSONDataFromFile, satatusText, jqXHRObject ){
                                console.log(JSONDataFromFile);
                                /* console.log(satatusText);
                                console.log(jqXHRObject); */
                                
                                $.each(JSONDataFromFile.members, function(i, val){
                                    let loc = $(`<h4>${val.fullname}</h4>`);
                                    let pos = $(`<h6>${val.position}</h6>`);
                                    let shortB = $(`<p>${val.shortbio}</p>`);

                                        $("#glitch-team").append(loc).append(pos).append(shortB);

                                    console.log(val.fullname);
                                    console.log(val.position);
                                    console.log(val.shortbio);
                                });
                            });
        
});