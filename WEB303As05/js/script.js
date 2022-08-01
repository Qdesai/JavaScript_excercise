//Mohammed Qaasim Desai 0776412



var Characters = [
        {
        FullName: "chris evans",
        Description: "Chris Evans who is playing Captain America (America's first-ever Super Soldier) in the Marvel movies. his acting is very impressing and i cound'nt think of someone who could do this role better",
        Age: 41,
        DOB: new Date(1981, 06, 13)
        },

        {
            FullName: "robert downey jr",
            Description: "Robert Downey Jr who is playing Tony Stark (Iron Man) in the Marvel movies. his acting is very impressing and I cound'nt think of someone who could do this role better than him",
            Age: 57,
            DOB: new Date(1965, 04, 04)
        },
    
        {
            FullName: "chris hemsworth",
            Description: "Chris Hemsworth who is playing Thor (The god of lighting) in the Marvel movies. his acting is very impressing and I cound'nt think of someone who could do this role better than him",
            Age: 38,
            DOB: new Date(1983, 08, 11)
        },

        {
            FullName: "tom holland",
            Description: "Tom Holland who is playing SpiderMan (A kid initially recruited by Tony Stark to help stop Captain America but he enters the avengers) in the Marvel movies. his acting is very impressing and I cound'nt think of someone who could do this role better than him",
            Age: 26,
            DOB: new Date(1996, 06, 01)
        },

        {
            FullName: "scarlett johansson",
            Description: "Scarlett Johansson who is playing Natasha Romanoff (Black Widow) in the Marvel movies. her acting is very impressing and I cound'nt think of someone who could do this role better than her",
            Age: 37,
            DOB: new Date(1984, 11, 22)
        }
    ]




        $(function() {
            // table heading
            var $tbody = $('<tbody></tbody>');
            var $row = $('<tr></tr>');
            var a = $('<a></a>');
                $row.append( $('<th></th>').append('<a>FullName</a>'));
                $row.append( $('<th></th>').append('<a>Description</a>'));
                $row.append( $('<th></th>').append('<a>Age</a>'));
                $row.append( $('<th></th>').append('<a>Date Of Birth</a>'));
                var $temp = $tbody.append($row);
                $('body').append($temp);
             

                /* var compare = { // Declare object
                    name: function(a, b) { 
                    a = a.replace(/^the /i, ''); 
                    b = b.replace(/^the /i, ''); 
                    if (a < b) { 
                    return -1; 
                    } else { 
                    return a > b ? 1 : 0;
                    }
                    } 
                    }

                $('.sortable').each(function() {
                    var $table = $(this); // This table
                    var $tbody = $table.find('tbody'); // Table body
                    var $controls = $table.find('th'); // Table headers
                    var rows = $tbody.find('tr').toArray(); // Array of rows
                });
                    $controls.on('click', function() { // Event handler
                    var $header = $(this); // Get header
                    var order = $header.data('sort'); // Get data type
                    var column;
                    });
 */
            //populating the table with the array 
            
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
                var $tbody = $('<tbody></tbody>'); 
                $rows.forEach(function($row) { 
                    $tbody.append($row.$element); 
                });
                $('body').append($tbody); 
            }
                    
                makeRows();
                appendRows();
                
                
                $("#Search").on("keyup", function(){
                    let $str = $("#Search").val();
                    console.log($str);
                    $rows.forEach(function($row){
                        if($row.chara.FullName.includes($str) && $str != ""){
                            $($row.$element).css("background-color","#EE4B2B"); 
                        }
                        else{
                            $($row.$element).css("background-color","white");
                        }
                    })
                });
        });