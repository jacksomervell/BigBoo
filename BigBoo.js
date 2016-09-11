$(document).ready(function(){

var size = 0
var score = 0

function makeBanana(){
  var height = Math.random()*100;
  height = Math.round(height);
  var yesOrNo = Math.random()

 if (yesOrNo > 0.2){
  //make left to right banana
   $('#container').append('<div class="bananas left-banana" style="top:' + height + '%; left:-50px"></div>');
 }
   //make right to left banana

   var rightHeight = Math.random()*100;
  rightHeight = Math.round(rightHeight);
  var yesOrNo = Math.random()

  if (yesOrNo > 0.2){
   $('#container').append('<div class="bananas right-banana" style="top:' + rightHeight + '%; right:-50px"></div>');
 }

   $('.bananas').mouseenter(function(){
  size = size+1
  score = score+1
  $('#container').css('cursor', 'url(images/boosmall10.gif) 25 15, pointer');
  $(this).css('display', 'none');
  console.log(size);

  })

}

function moveBanana(){
  $('.left-banana').each(function(index){
    var banana = $(this);
  var currentLeft = parseInt(banana.css('left'));
  var newLeft = currentLeft + 1;
  banana.css('left', newLeft);

  if (currentLeft > 950){
    banana.remove();
  }

  })

  $('.right-banana').each(function(index){
    var banana = $(this);
  var currentRight = parseInt(banana.css('right'));
  var newRight = currentRight + 1;
  banana.css('right', newRight);

  if (currentRight > 950){
    banana.remove();
  }

  })
}


setInterval(makeBanana, 1000);
setInterval(moveBanana, 5);

})