//create an array of comedians
var arrComedians = [
"Jim Carrey",
"Ace Ventura",
"Sam Kinison",
"Margaret Cho",
"David Letterman",
"Chevy Chase",
"Clark Griswald",
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

  // Text is then added to the array
  arrComedians.push(gif);

  // Render them buttons again
  renderButtons();

});