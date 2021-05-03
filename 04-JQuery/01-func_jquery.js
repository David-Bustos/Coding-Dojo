// $(document).ready(function () {
//     $('img').hide();

//     $('.Class button').click(function () {
//         $('.Class p').addClass("red");
//         console.log("we changed the class");
//     });
//     $('.Slide button').click(function(){
//         $('.Slide img').toggle("slide");
//     });
//     $('.Append button').click(function(){
//         $('.Append h3').append($("<p> We appended this p! </p>"));  
//     });
//     $('.SlideByParts button').click(function () {
//         if ($('.SlideByParts img').is(":hidden")) {
//             $('.SlideByParts img').slideDown("slow");
//             $('.SlideByParts button').text("slide up!");
//         } else {
//             $('.SlideByParts img').slideUp("slow");
//             $('.SlideByParts button').text("slide down!").fadeIn();
//         }
//     });

//     $('.Fade button').click(function () {
//         if ($('.Fade p').is(":hidden")) {
//             $('.Fade p').fadeIn("slow");
//             $('.Fade button').text("fade out!")
//         } else {
//             $('.Fade p').fadeOut("slow");
//             $('.Fade button').text("fade in!")
//         }
//     });
//     $('.Insert button').click(function () {
//         $('.Insert p').before("<h1>B</h1>");
//         $('.Insert p').after("<h1>A</h1>");
//     });
//     $('.ShowHTML button').click(function () {
//         $('.ShowHTML p').html("<span>I replaced the p with new HTML</span>");
//     });

//     $('.Valuefunc input').keyup(function () {
//         var value = $(this).val();
//         $('.Valuefunc p').text(value);
//     });
//     $('.Attribute button').click(function () {
//         $('img').attr({src:"images/python.png"});
//     });

// });