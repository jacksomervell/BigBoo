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
  var height = Math.random()*1000
   $('#container').append('<div class="bananas" style="top:' + height + '"px></div>')

  }


 var banana = $('.bananas');

function moveBanana(image){
  setInterval(moveIt(image), 500)
  setInterval(console.log('hello'))
}

function moveIt(){
  var currentLeft = parseInt(banana.css('left'));
  var newLeft = currentLeft + 1;
  banana.css('left', newLeft);
}



setInterval(makeBanana, 10);
setInterval(moveIt, 10);
})