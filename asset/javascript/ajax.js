//create an array of comedians
var arrComedians = [
"Jim Carrey",
"Ace Ventura",
"Sam Kinison",
"Margaret Cho",
"David Letterman",
"Chevy Chase",
"Clark Griswold",
"Robin Williams",
"Mork",
"Eddie Murphy",
"Axle Foley",
"Mike Myers",
"Austin Powers",
"Melissa McCarthy",
"Molly",
"Bill Murray",
"Carl Spackler",
];

//First thing is to display the buttons by clling the function
renderButtons();

function displayGiphy(){
  	// Grabbing and storing the button clicked value using the attribute data-name
  	$("#displayGiphy").empty();  //clear out the dive when another button is selected
  	var btnValue = $(this).attr("data-name");

    // Constructing a queryURL
    var apiKey = "&api_key=6bfadf40c3ae4da9a321316fa322af92&limit=10";
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
      btnValue + apiKey;

  // Performing an AJAX request with the queryURL
    $.ajax({
        url: queryURL,
        method: "GET"
      })
      // After data comes back from the request
      .done(function(response) {
        console.log(queryURL);

        console.log(response);
        // storing the data from the AJAX request in the results variable
        var results = response.data;
        console.log(response.data.length);
        if(response.data.length === 0){
        	alert("Sorry there were no Giphys found.  Try Again")
        }

      // Looping through each result item
      	for (var i = 0; i < results.length; i++) {

          // Creating and storing a div tag
          var giphyDiv = $("<div>");
          // Creating and storing an image tag
          var giphyImage = $("<img>");
          giphyImage.addClass("doit");
          giphyImage.addClass("img-thumbnail");

          // Creating a paragraph tag with the result item's rating
          var p = $("<p>");
          p.text("Rating: " + results[i].rating);
          // Setting the src attribute of the image to a property pulled off the result item
          giphyImage.attr("src", results[i].images.fixed_height_still.url);
          giphyImage.attr("data-state", "still");
          giphyImage.attr("data-animate", results[i].images.fixed_height.url);
          giphyImage.attr("data-still", results[i].images.fixed_height.url);

          //append the paragraph and img to the giphyDiv
          giphyDiv.append(giphyImage);
          giphyDiv.append(p);

          // Prependng the animalDiv to the HTML page in the "#gifs-appear-here" div
          $("#displayGiphy").prepend(giphyDiv);
        }
      });
    }

//render the button on the page
function renderButtons() {

	// got to clear all the buttons or I'llm have duplicates
	$("#render-buttons").empty();

	// loop through the array
	for (var i = 0; i < arrComedians.length; i++) {

	  // Then dynamicaly generate buttons for the comedians
	  var btnCcomedian = $("<button>");
	  // Adding a class of comdemy-btn to our buttons
	  btnCcomedian.addClass("btn btn-success");  //adding bootstrap class
	  btnCcomedian.addClass("comedy-btn");
	  btnCcomedian.attr("data-name", arrComedians[i]);
	  btnCcomedian.text(arrComedians[i]);
	  // Adding the button to the render-button div
	  $("#render-buttons").append(btnCcomedian);
		}
	}

  // This jquery click event handles where submit button is clicked
$("#add-giphy").on("click", function(event) {
  event.preventDefault();

  // This line grabs the input from the textbox
  var gif = $("#giphy-input").val().trim();

	 if(gif === ""){
  	alert("You must enter something into the text box...Then hit \"Submit\"");
  }
  else{
		 // Text is then added to the array
		 arrComedians.push(gif);

		 // Render them buttons again
		 renderButtons();
	 }	
	});
	// Sets event handlers on the document..any button clicked has a handler. Displaying the  Giphy(s)
	//this is a reference to the function.  So if I click on the button the function is called.
	$(document).on("click", ".comedy-btn", displayGiphy);
	renderButtons();

	//animate the giphy by changing the 
	$(".doit").on("click", function() {
      var state = $(this).attr("data-state");

	      if(state === "still"){
	        var animate1 = $(this).attr("data-animate");
	        $(this).attr("src", animate1);
	        $(this).attr("date-state", "animate");
	      }
	      else{
	        var still1 = $(this).attr("data-still");
	        $(this).attr("src", still1);
	        $(this).attr("date-state", "still");

      	}
    });