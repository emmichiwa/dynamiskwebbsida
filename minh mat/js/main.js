console.log('Testing navbar for mobile');

/*This code fixes navbar bug -> navbar disappeared on resizing*/
$(window).resize(function(){
  if($(window).width() > 768) { /*this bug fixes scroll page bug on mobile*/
  location.reload()}
});

let mobileNavbar = $('#toggleMobile');
mobileNavbar.click(function(){
    $("nav").toggle();
  });

 /*"Animation" for booking page images*/ 
  $('.image-takeaway').on('mouseenter',function(){
    $(this).css('height', '70px'); 
  }).on('mouseleave', function() {
    $(this).css('height', '62px'); 
  });

  $('.image-table').on('mouseenter',function(){
    $(this).css('height', '60px'); 
  }).on('mouseleave', function() {
    $(this).css('height', '52px'); 
  });