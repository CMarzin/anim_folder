$('button').click(function(){
  $('.ytcontainer').addClass('show_video');
  $('.ytcontainer').removeClass('hide_video');
  setTimeout(function(){
  $('.part_right').addClass('hide_part_right');
  $('.part_left').addClass('hide_part_left');
},1400);
});
