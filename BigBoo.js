$(document).ready(function(){

var size = 0
var score = 0

$('.bananas').mouseenter(function(){
  size = size+1
  score = score+1
  $('#container').css('cursor', 'url(images/boosmall10.gif) 25 15, pointer');
  $(this).css('display', 'none');
  console.log(size);

})


 $('#container').append('<div class="banana"></div>')





})