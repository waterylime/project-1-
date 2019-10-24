
$(".Sbtn").on("click", function (event) {
    event.preventDefault();
    $(".input").empty();
    var search = $(".input").val().trim();
​
    var queryURL = "https://www.googleapis.com/books/v1/volumes?q=" + search + "&key=AIzaSyApn7ZVS6vtzHfrwGpr058OiKyAkrZ_U6o";
    var author = "";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
​
        author = response.items[0].volumeInfo.authors[0];
        $("#result").empty();
​
        var bookDiv = $("<div>").addClass("book");
        var pOne = $("<p>").text("Book: " + response.items[0].volumeInfo.title);
        var pTwo = $("<p>").text("Author: " + response.items[0].volumeInfo.authors[0]);
        pTwo.attr("id", "author");
        var pThree = $("<img src=" + response.items[0].volumeInfo.imageLinks.thumbnail + ">");
        var pFour = $("<p>").text("Synopsis: " + response.items[0].volumeInfo.description);
        bookDiv.append(pOne, pTwo, pThree, pFour);
        $("#result").prepend(bookDiv);
​
        otherBooks(author);
    })
​
})
​
function otherBooks(author) {
​
    var queryURL = "https://www.googleapis.com/books/v1/volumes?q=" + author + "&key=AIzaSyApn7ZVS6vtzHfrwGpr058OiKyAkrZ_U6o";
​
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
​
        $("#suggested").empty();
​
        for (var i = 1; i < response.items.length; i++) {
​
            var booksDiv = $("<div>").addClass("card");
            var nameOfBook = $("<button>").html(response.items[i].volumeInfo.title);
            var bookImage = $("<img src=" + response.items[i].volumeInfo.imageLinks.thumbnail + ">");
            booksDiv.append(nameOfBook, bookImage);
            $("#suggested").prepend(booksDiv);
​
        }
    });
}
​
​
$("#suggested").on("click", "button", function (event) {
​
    var button = $(this);
    var newReview = "";
    var bookReview = $(this).text();
    for (var i = 0; i < bookReview.length; i++) {
        newReview = newReview + bookReview[i].replace(" ", "+");
    }
​
    parseInt(newReview);
​
    var queryUrl = "https://www.googleapis.com/books/v1/volumes?q=" + newReview + "&key=AIzaSyApn7ZVS6vtzHfrwGpr058OiKyAkrZ_U6o"
    var queryUrl1 = "https://api.nytimes.com/svc/books/v3/reviews.json?title=" + newReview + "&api-key=l2yFj0rIKeTYnzWTDBrNkPFZFPiAFM4z";
​
​
    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function (review) {
​
​
        var bookEl = $("<h3>");
        button.parent().append(bookEl)
​
        var pOne = $("<p>").html("Synopsis: " + review.items[0].volumeInfo.description);
        var two = $("<p>").html("Rating: " + review.items[0].volumeInfo.averageRating)
        var three = $("<p>").html("Genre: " + review.items[0].volumeInfo.categories[0])
        var four = $("<p>").html('<a href="' + review.items[0].volumeInfo.previewLink + '">Book preview</a>');
        bookEl.append(pOne, two, three, four);
    })
​
    $.ajax({
        url: queryUrl1,
        method: "GET"
    }).then(function (review1) {
​
        if (review1.num_results > 0) {
            var reviewLink = $("<p>").html('<a href="' + review1.results[0].url + '">NY review</a>')
            button.parent().append(reviewLink);
        }

    $(".Sbtn").on("click", function (event) {
        event.preventDefault();
        $(".input").empty();
        var search = $(".input").val().trim();

    
        var queryURL = "https://www.googleapis.com/books/v1/volumes?q=" + search + "&key=AIzaSyApn7ZVS6vtzHfrwGpr058OiKyAkrZ_U6o";

        var queryURL = "https://cors-anywhere.herokuapp.com/https://www.googleapis.com/books/v1/volumes?q=" + search + "&key=AIzaSyApn7ZVS6vtzHfrwGpr058OiKyAkrZ_U6o";

        var author = "";
        $.ajax({
            url: queryURL,
            method: "GET"

            }).then(function(response) {
                console.log(response);
                author = response.items[0].volumeInfo.authors[0];
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

        }).then(function (response) {
            console.log(response);
            author = response.items[0].volumeInfo.authors[0]
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

    
    var queryURL = "https://www.googleapis.com/books/v1/volumes?q=" + author + "&key=AIzaSyApn7ZVS6vtzHfrwGpr058OiKyAkrZ_U6o";
    

        
        var queryURL = "https://cors-anywhere.herokuapp.com/https://www.googleapis.com/books/v1/volumes?q=" + author + "&key=AIzaSyApn7ZVS6vtzHfrwGpr058OiKyAkrZ_U6o";
        

        $.ajax({

            url: queryURL,
            method: "GET"
        }).then(function (response) {
            $("#suggested").empty();
            var newReads = $(`<h2 class="new">Your Recommended Reads</h2>`);
            var resultsDiv = $("<div>").addClass("results");
            $("#suggested").append(resultsDiv);
            

            url : queryURL,
            method : "GET"
        }).then(function(response){
            console.log("this is" + response)
            $(".results").empty();


            for (var i = 1; i < response.items.length; i++) {
               
                var booksDiv = $("<div>").addClass("card");
                var nameOfBook = $("<button>").html(response.items[i].volumeInfo.title);
                var bookImage = $("<img src=" + response.items[i].volumeInfo.imageLinks.thumbnail + ">");



                booksDiv.attr("data-book", bookImage);
                booksDiv.append(bookImage);
                // $(results).prepend(newReads, booksDiv);
                $(resultsDiv).prepend(newReads, booksDiv);
                console.log(resultsDiv);
                console.log($(resultsDiv));


                console.log(nameOfBook);

                booksDiv.append(nameOfBook, bookImage);
                $(".results").prepend(booksDiv);
                

            }
        });
    }


    $(".results").on("click", "button", function (event) {
        console.log($(this));
        var button = $(this);
        var newReview = "";
        var bookReview = $(this).text();
        for (var i = 0; i < bookReview.length; i++) {
            newReview = newReview + bookReview[i].replace(" ", "+");
        } 
        
        parseInt(newReview);
        console.log(typeof newReview);

       
        var queryUrl = "https://www.googleapis.com/books/v1/volumes?q=" + newReview + "&key=AIzaSyApn7ZVS6vtzHfrwGpr058OiKyAkrZ_U6o"
        var queryUrl1 = "https://api.nytimes.com/svc/books/v3/reviews.json?title=" + newReview + "&api-key=l2yFj0rIKeTYnzWTDBrNkPFZFPiAFM4z";
        // var queryUrl2 = "http://idreambooks.com/api/books/reviews.json?q=" + newReview + "&key={yourAPIkey}
        // var queryUrl3 = "https://www.goodreads.com/book/" + newReview + "&json&apikey=o81sgHQRasbNAU3yhUK5Zw";

        $.ajax({
            url: queryUrl,
            method: "GET"
        }).then(function(review){
            console.log(review);
            // for (var i = 0; i < review.items.length; i++) {
                var bookEl = $("<h3>");
                console.log(button.parent());
                button.parent().append(bookEl)
                
                var pOne = $("<p>").html("Synopsis: " + review.items[0].volumeInfo.description);
                var two = $("<p>").html("Rating: " + review.items[0].volumeInfo.averageRating)
                var three = $("<p>").html("Genre: " + review.items[0].volumeInfo.categories[0])
                var four = $("<p>").html('<a href="' + review.items[0].volumeInfo.previewLink + '">Book preview</a>');
                bookEl.append(pOne, two, three, four);
                console.log(bookEl);
            // }
        })

        $.ajax({
            url: queryUrl1,
            method: "GET"
        }).then(function(review1){
            console.log(review1);
            
            if (review1.num_results > 0) {
                var reviewLink = $("<p>").html('<a href="' + review1.results[0].url + '">NY review</a>')
                console.log(reviewLink);
                console.log(review1.results[0].url);
                
                
                button.parent().append(reviewLink);
            } 
        })


    // })

    

    })
​
​
})