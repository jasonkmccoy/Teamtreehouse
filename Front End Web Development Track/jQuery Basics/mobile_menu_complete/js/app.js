// Problem: It look gross in smaller browser widths and small devices
// Solution: To hide the text links and swap them out with a more appropriate navigation

// 1. Create a <select> and append to #menu
var $select = $('<select></select>');
$('#menu').append($select);

// 2. Cycle over menu links
$('#menu a').each(function( index ){
    var $anchor = $(this);
    // a. create an <option>
    var $option = $('<option></option');
    
    // 7. Deal with selected options depending on current page
    if ($anchor.parent().hasClass("selected")) {
        $option.prop("selected", true);
    }
    
    // b. <option>'s value is the href
    $option.val($anchor.attr("href"));
    
    // c. <option>'s text is the text of link
    $option.text($anchor.text());
    
    // d. append <option> to <select>
    $select.append($option);
});
    
// 3. Bind change listener to the <select>
$select.change(function(){
    // a. go to <select>'s location
    window.location = $select.val();
});
    

