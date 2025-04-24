$(document).ready(function() {
	// preload images
	$("#image_list a").each(function() {
			var swappedImage = new Image();
			swappedImage.src = $(this).attr("href");
	});
	
	// set up event handlers for links    
	$("#image_list a").click(function(evt) {
			// cancel the default action of the link *first* so URL doesn’t change
			evt.preventDefault();

			var imageURL = $(this).attr("href");
			var caption  = $(this).attr("title");

			// Fade current caption & image out together (1 s)
			$("#caption, #image")
					.fadeOut(1000)
					.promise()                // wait until BOTH elements are done
					.done(function() {
							// Swap to the new image & caption after fade-out finishes
							$("#image").attr("src", imageURL);
							$("#caption").text(caption);

							// Fade new caption & image in (1 s)
							$("#caption, #image").fadeIn(1000);
					});
	}); // end click
	
	// move focus to first thumbnail
	$("li:first-child a").focus();
}); // end ready