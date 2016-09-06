$(document).ready(function(){

var size = 0

$('.bananas').mouseenter(function(){

  size = size+1

  $('#container').css('cursor', 'url(images/boosmall10.gif) 25 15, pointer');
  $('.bananas').css('display', 'none');

  console.log(size);
})







})