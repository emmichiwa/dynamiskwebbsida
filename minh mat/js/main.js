console.log('Testing navbar for mobile');

let mobileNavbar = $('#toggleMobile');
mobileNavbar.click(function(){
    $("nav").toggle();
  });