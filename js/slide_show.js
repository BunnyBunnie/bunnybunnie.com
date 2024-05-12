"use strict"; // Enable strict mode for better error handling and safer code.

$(document).ready( () => { // Execute the following code when the DOM is fully loaded.
    let nextSlide = $("#slides img:first-child"); // Select the first child image element within the slides container.

    // Start the slide show and repeat at intervals.
    setInterval( () => {   
        $("#caption").fadeOut(1000); // Fade out the caption element over 1000 milliseconds.
        $("#slide").fadeOut(1000, // Fade out the slide element over 1000 milliseconds, with a callback function.
            () => {
                // Check if there is a next sibling image.
                if (nextSlide.next().length == 0) { 
                    nextSlide = $("#slides img:first-child"); // If not, reset to the first child image.
                }
                else {
                    nextSlide = nextSlide.next(); // If yes, set the next slide as the next sibling image.
                }
                const nextSlideSource = nextSlide.attr("src"); // Get the source attribute of the next slide image.
                const nextCaption = nextSlide.attr("alt"); // Get the alt attribute of the next slide image.
                $("#slide").attr("src", nextSlideSource).fadeIn(1000); // Set the source attribute of the slide element and fade it in over 1000 milliseconds.                 
                $("#caption").text(nextCaption).fadeIn(1000); // Set the text content of the caption element and fade it in over 1000 milliseconds.
            });    // end fadeOut()
    },
    7000);         // end setInterval()
}); // End document ready function.
