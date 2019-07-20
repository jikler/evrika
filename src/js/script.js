// mobile menu start
$(document).ready(function(){
  $('.toggle-menu').click(function () {
    $('.menu-container').toggleClass('menu-open');
    $(this).toggleClass('active');
  });
});
// mobile menu end

// form calc start
$(function() {
  var uah_min = $("#user_filter_handler_min");
  var uah_max = $("#user_filter_handler_max");
$("#user_filter").slider({
  range: true,
  min: 1,
  max: 69,
  values: [1, 69],
  create: function() {
   uah_min.text('от 1');
    uah_max.text('до 69');
  },
  slide: function(event, ui) {
    $("#user_filter_min").val(ui.values[0]);
    $("#user_filter_max").val(ui.values[1]);
    uah_min.text( ui.values[0] );
    uah_max.text( ui.values[1] );
  }
});
});
// form calc end
