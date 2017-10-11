// bodymovin

var animation = bodymovin.loadAnimation({
  container: document.getElementById('bodymovin'),
  renderer: 'svg',
  loop: true,
  autoplay: false,
  path: 'assets/js/data_A.json'
});

$('#bodymovin').mouseenter(function() {
  animation.play()
});

$('#bodymovin').mouseleave(function() {
  animation.stop()
});

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

  if (pixelsFromTop > 600 ) {
      $('.sticky-header').addClass('show')
      } else {
      $('.sticky-header').removeClass('show')
      }

  var documentHeight = $(document).height()
  var windowHeight = $(window).height()

  var difference = documentHeight - windowHeight

  var percentage = 100 * pixelsFromTop / difference

  $('.progress-bar').css('width', percentage + '%')

})
