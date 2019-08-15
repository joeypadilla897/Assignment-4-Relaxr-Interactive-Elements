$(document).ready(function(){

console.log("im working");

    $('#about').click(function() {
        $('#about1').slideToggle();
    });
   
    $('#faq').click(function() { //this is the click code to activate the faq nav
        $('#faq2').slideToggle(); //this toggles the answer of the faq
    });
    $('#team').click(function() {
        $('#team2').slideToggle();
    });

    $('#contact').click(function() {
        $('#contact2').slideToggle();
    });

    $('#blog').click(function() {
        $('#blog2').slideToggle();
    });









//the functions are written for the blog post

    $(".readmore").click(function(){
        $("#show-this-on-click").slideToggle(); //this activates the toggle on the paragraph
        $(".readmore").hide(); //this hides the readmore button
        $(".readless").show(); //this will show the readless button
    })

    $(".readless").click(function(){
        $("#show-this-on-click").slideToggle();
        $(".readless").hide();
        $(".readmore").show();
      
    })


    $(".learnmore").click(function(){
        $("#learnmoretext").slideToggle(); 
        $(".learnmore").hide(); 
         
    })

    



















});
