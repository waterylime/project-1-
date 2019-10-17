//prepend suggestion results with titles as links that when clicked populate a paragraph with a summary and ratings

var resultsDiv = document.getElementById("results");
var title = suggestedResult[i];
var resultSrc = src of title;
var source = "src=" + "'" + resultSrc + "'";
var summaryDiv = document.getElementById("p");


$(document).ready(function(){
    $(results).prepend("<h1>" + "<a href='#' " + source + ">" + title + "</a>" + "</h1>" + "<div id='p'></div>")
});


$(title).on("click", function(){
    $(summaryDiv).append(title.summary);
});