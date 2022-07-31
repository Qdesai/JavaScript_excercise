//Mohammed Qaasim Desai 0776412



var Characters = [
        {
        FullName: "Chris Evans",
        Description: "Chris Evans who is playing Captain America (America's first-ever Super Soldier) in the Marvel movies. his acting is very impressing and i cound'nt think of someone who could do this role better",
        Age: 41,
        DOB: new Date(1981, 06, 13)
        },

        {
            FullName: "Robert Downey Jr",
            Description: "Robert Downey Jr who is playing Tony Stark (Iron Man) in the Marvel movies. his acting is very impressing and I cound'nt think of someone who could do this role better than him",
            Age: 57,
            DOB: new Date(1965, 04, 04)
        },
    
        {
            FullName: "Chris Hemsworth",
            Description: "Chris Hemsworth who is playing Thor (The god of lighting) in the Marvel movies. his acting is very impressing and I cound'nt think of someone who could do this role better than him",
            Age: 38,
            DOB: new Date(1983, 08, 11)
        },

        {
            FullName: "Tom Holland",
            Description: "Tom Holland who is playing SpiderMan (A kid initially recruited by Tony Stark to help stop Captain America but he enters the avengers) in the Marvel movies. his acting is very impressing and I cound'nt think of someone who could do this role better than him",
            Age: 26,
            DOB: new Date(1996, 06, 01)
        },

        {
            FullName: "Scarlett Johansson",
            Description: "Scarlett Johansson who is playing Natasha Romanoff (Black Widow) in the Marvel movies. her acting is very impressing and I cound'nt think of someone who could do this role better than her",
            Age: 26,
            DOB: new Date(1996, 06, 01)
        }
    ]

    $(function() {

   /*  var Results = [];

        Characters.forEach(function(chara){
            Results.push(chara);
        }); */
        
       
        var $tableBody = $('<tbody></tbody>');

        

        for (var i = 0; i < Characters.length; i++) {
            
            //console.log(Characters[i].FullName);
            var num = Characters[i];
            var $row = $('<tr></tr>'); // Create row for them
            $row.append($('<td></td>').text(num.FullName)); // Add name
            $row.append($('<td></td>').text(num.Description)); // Add rate
            $tableBody.append( $row );
        }
        
 

    });