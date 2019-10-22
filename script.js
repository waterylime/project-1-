    
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
                var pOne = $("<p>").text("Book: " + response.items[0].volumeInfo.title);
                var pTwo = $("<p>").text("Author: " + response.items[0].volumeInfo.authors[0]);
                pTwo.attr("id", "author");
                var pThree = $("<img src=" + response.items[0].volumeInfo.imageLinks.thumbnail + ">");
                var pFour = $("<p>").text("Synopsis: " + response.items[0].volumeInfo.description);
                bookDiv.append(pOne, pTwo, pThree, pFour);
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
            console.log(response)
            $(".results").empty();

            for (var i = 1; i < response.items.length; i++) {
                var bookLoop = response.items[i].volumeInfo;
                var booksDiv = $("<div>").addClass("card");
                var nameOfBook = $("<button>").html(response.items[i].volumeInfo.title);
                nameOfBook.addClass("book-name")
                var bookImage = $("<img src=" + response.items[i].volumeInfo.imageLinks.thumbnail + ">");
                console.log(nameOfBook);
                booksDiv.append(nameOfBook, bookImage);
                $(".results").prepend(booksDiv);
                
            }
        });
    }


    $(".results").on("click", "button", function (event) {
        console.log($(this));
        var newReview = "";
        var bookReview = $(this).text();
        for (var i = 0; i < bookReview.length; i++) {
            newReview = newReview + bookReview[i].replace(" ", "+");
        }
        
        console.log(typeof newReview);

       
        
        var queryUrl1 = "https://api.nytimes.com/svc/books/v3/reviews.json?title=" + newReview + "&api-key=l2yFj0rIKeTYnzWTDBrNkPFZFPiAFM4z";


        $.ajax({
            url: queryUrl1,
            method: "GET"
        }).then(function(review){
            console.log(review);


        })

    
    })
    