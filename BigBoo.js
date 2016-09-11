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

function makeBanana(){
  var height = Math.random()*100;
  height = Math.round(height);
   $('#container').append('<div class="bananas" style="top:' + height + '%; left:0px"></div>');

   $('.bananas').mouseenter(function(){
  size = size+1
  score = score+1
  $('#container').css('cursor', 'url(images/boosmall10.gif) 25 15, pointer');
  $(this).css('display', 'none');
  console.log(size);

})

  }

// function moveIt(){
//   var banana = $('.bananas');
//   var currentLeft = parseInt(banana.css('left'));
//   var newLeft = currentLeft + 1;
//   banana.css('left', newLeft);
// }

function moveBanana(){
  $('.bananas').each(function(index){
    var banana = $(this);
  var currentLeft = parseInt(banana.css('left'));
  var newLeft = currentLeft + 1;
  banana.css('left', newLeft);  })
}


setInterval(makeBanana, 1000);
// setInterval(moveIt, 10);
setInterval(moveBanana, 10);
})