$(document).ready(function () {
    $("#myform").submit(function (event) {
        event.preventDefault();
        var search = $("#books").val();
        console.log(search);
        if (search == '') {
            alert("Please enter something in the field first");
        }
        else {
            var url = '';
            var img = '';
            var title = '';
            var author = '';

            $.get("https://cors-anywhere.herokuapp.com/https://www.googleapis.com/books/v1/volumes?q=" + search + "&key=AIzaSyApn7ZVS6vtzHfrwGpr058OiKyAkrZ_U6o", function (response) {



            }).then(function (response) {
                console.log(response.items);

                var bookDiv = $("<div>");
                var pOne = $("<p>").text("Book: " + response.items[0].volumeInfo.title);
                var pTwo = $("<p>").text("Author: " + response.items[0].volumeInfo.authors[0]);
                var pThree = $("<img src=" + response.items[0].volumeInfo.imageLinks.thumbnail + ">");
                var pFour = $("<p>").text("Synopsis: " + response.items[0].volumeInfo.description);
                var pFive = $("<p>").text("Content: " + response.items[0].volumeInfo.contentVersion);
                bookDiv.append(pOne, pTwo, pThree, pFour, pFive);
                $("#result").prepend(bookDiv);

                console.log(response.items[0].volumeInfo.authors[0]);







                
            });

        };

    });

});

//otherBooks(search);

    // function otherBooks(search){

    //     var queryURL = "https://cors-anywhere.herokuapp.com/https://www.googleapis.com/books/v1/volumes?q=" + search + "&key=AIzaSyApn7ZVS6vtzHfrwGpr058OiKyAkrZ_U6o"

    //     $.ajax({
    //         url : queryURL,
    //         method : "GET"
    //     }).then(function(response){
    //         console.log(response);

    //         for (let i = 0; index < response.items.length; i++) {
    //             var bookLoop = response.items[i].volumeInfo.title;
    //             console.log(bookLoop);
    //         }
    //     });



    // }

    

