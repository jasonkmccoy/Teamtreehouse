// Problem: User when clicking on image goes to a dead end

// Solution: Create an overlay with the large image (i.e. a lightbox)

// Declare variables needed
var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $('<p></p>');

// Plan:

// Add overlay
$("body").append($overlay);
    // a. An image to overlay
$overlay.append($image);
    // b. A caption
$overlay.append($caption);

// Capture the click event on a link to an image
$("#imageGallery a").click(function(event){
    event.preventDefault();
    var imageLocation = $(this).attr("href");
    
    // b. Update overlay with the image linked in the link
    $image.attr("src", imageLocation);
    // a. Show the overlay
    $overlay.show();
    
    // c. Get child's alt attribute and set caption
    var captionText = $(this).children("img").attr("alt");
    $caption.text(captionText);
    
});
 


    
// When overlay is clicked
$overlay.click(function() {
    // a. Hide the overlay
    $overlay.hide();
});
    










