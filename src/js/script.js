// mobile menu start
$(document).ready(function(){
  $('.toggle-menu').click(function () {
    $('.menu-container').toggleClass('menu-open');
    $(this).toggleClass('active');
  });
});
// mobile menu end
