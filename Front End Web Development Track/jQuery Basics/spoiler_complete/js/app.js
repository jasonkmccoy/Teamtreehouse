// The 4 P's of Problem Solving
// 1. Preparation
// 2. Plan
// 3. Perform
// 4. Perfect


// Prevent spoilerphobes from seeing spoilers
// Solution: Hide spoilers and reveal them through user interaction

// 1. Hide spoiler (hide the span)
$(".spoiler span").hide();

// 2. Add a button (that will reveal the span)
$(".spoiler").append("<button>Reveal Spoiler!</button>");

// 3. When button pressed:
$("button").click(function() {
    // a. Show spoiler next to the button clicked
    $(this).prev().show();
    // b. Get rid of button
    $(this).remove();
});
    


