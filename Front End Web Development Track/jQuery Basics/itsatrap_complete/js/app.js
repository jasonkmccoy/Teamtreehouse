// Hide Warning
// Show Warning Slowly

// 1. Long Way
// jQuery(".warning").hide();
// jQuery(".warning").show("slow");

// 2. $ jQuery Shortcut
// $(".warning").hide();
// $(".warning").show("slow");

// 3. Method Chaining
// $(".warning").hide().show("slow");

// 4. Use a Function
// $(document).ready(function() {
//    $(".warning").hide().show("slow");
//});

// 5. Use a BETTER Function
// $(function() {
//    $(".warning").hide().show("slow");
// });

// BUT...Since the jQuery and JS files are included right before the ending body tag
// , we know that the document is "ready" and all we need to do is...
$(".warning").hide().show("slow");
