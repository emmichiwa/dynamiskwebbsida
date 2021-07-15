console.log('Testing navbar for mobile');

let mobileNavbar = $('#toggleMobile');
mobileNavbar.click(function(){
    $("nav").toggle();
  });

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