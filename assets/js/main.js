// mobile nav

$('#nav-icon3').click(function(){

  // open hamburger icon, animate and change color
  $(this).toggleClass('open');

  // 2. show mobile header
  $('.mobile-nav').toggleClass('mobileNavOpen')

  return false

});


// sticky header

$(document).on('scroll', function() {
  var pixelsFromTop = $(document).scrollTop();
  var windowHeight = window.innerHeight;

  if (pixelsFromTop > 600 ) {
      $('.sticky-header').addClass('show')
      } else {
      $('.sticky-header').removeClass('show')
      }

})
