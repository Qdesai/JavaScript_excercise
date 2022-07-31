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
            Age: 37,
            DOB: new Date(1984, 11, 22)
        }
    ]




        $(function() {

            /* var $tableBody = $('<tbody></tbody>');
            
            for (var i = 0; i < Characters.length; i++){

                var $row = $('<tr></tr>');
                $row.append($('<td></td>').text(Characters[i].FullName));
                $row.append($('<td></td>').text(Characters[i].Description));
                $row.append($('<td></td>').text(Characters[i].Age));
                $row.append($('<td></td>').text(Characters[i].DOB));
                $tableBody.append($row);
            }
            $('body').append($tableBody);

 */

            var $rows = [];
            function makeRows() {
                Characters.forEach(function(chara) { 
                    var $row = $('<tr></tr>'); 
                    $row.append( $('<td></td>').text(chara.FullName) );
                    $row.append( $('<td></td>').text(chara.Description) );
                    $row.append( $('<td></td>').text(chara.Age) );
                    $row.append( $('<td></td>').text(chara.DOB) );
                    $rows.push({ 
                    chara: chara, 
                    $element: $row
                    });
                });
                }

                function appendRows() {
                    var $tbody = $('<tbody></tbody>'); // Create <tbody> element
                    $rows.forEach(function($row) { // Each obj in rows array
                    $tbody.append($row.$element); // Add HTML for the row
                    });
                    $('body').append($tbody); // Add rows to the table
                    }

                makeRows();
                appendRows();

        });