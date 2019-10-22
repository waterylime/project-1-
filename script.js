    
    $(".Sbtn").on("click", function (event) {
        event.preventDefault();
        $(".input").empty();
        var search = $(".input").val().trim();
    
        var queryURL = "https://cors-anywhere.herokuapp.com/https://www.googleapis.com/books/v1/volumes?q=" + search + "&key=AIzaSyApn7ZVS6vtzHfrwGpr058OiKyAkrZ_U6o";
        var author = "";
        $.ajax({
            url: queryURL,
            method: "GET"
            }).then(function(response) {
                console.log(response);
                author =response.items[0].volumeInfo.authors[0]
                $("#result").empty();

                var bookDiv = $("<div>").addClass("book");
                var yourResult = $(`<h2 class="new">Your Search</h2>`);
                var pOne = $("<p>").text("Book: " + response.items[0].volumeInfo.title);
                var pTwo = $("<p>").text("Author: " + response.items[0].volumeInfo.authors[0]);
                pTwo.attr("id", "author");
                var pThree = $("<img src=" + response.items[0].volumeInfo.imageLinks.thumbnail + ">");
                var pFour = $("<p>").text("Synopsis: " + response.items[0].volumeInfo.description);
                bookDiv.append(yourResult, pOne, pTwo, pThree, pFour);
                $("#result").prepend(bookDiv);
                
                otherBooks(author);
            })      
            
        })
        
        function otherBooks(author) {
            
            var queryURL = "https://cors-anywhere.herokuapp.com/https://www.googleapis.com/books/v1/volumes?q=" + author + "&key=AIzaSyApn7ZVS6vtzHfrwGpr058OiKyAkrZ_U6o";
            
        $.ajax({
            url : queryURL,
            method : "GET"
        }).then(function(response){
            $(".results").empty();
            var newReads = $(`<h2 class="new">Your Recommended Reads</h2>`);
            
            for (var i = 1; i < response.items.length; i++) {
                var bookLoop = response.items[i].volumeInfo;
                var booksDiv = $("<div>").addClass("card");
                var bookImage = $("<img src=" + response.items[i].volumeInfo.imageLinks.thumbnail + ">");
                booksDiv.attr("data-book", bookImage);
                booksDiv.append(bookImage);
                $(".results").prepend(newReads, booksDiv);
                
            }
        });
    }


    // $(".card").on("click", function (event) {
    //     var bookReview = $(this).attr("data-book");
    //     var APIkey = "NqVSU6b1IYEiBPODKvTLgtevZp5gIkDk";
    //     var queryUrl1 = "https://api.nytimes.com/svc/books/v3/reviews.json?title=" + bookReview + "&api-key=" + APIkey;


    //     $.ajax({
    //         url: queryUrl1,
    //         method: "GET"
    //     }).then(function(review){
    //         console.log(review);


    //     })

    // })
 
    