var size = 0
var score = 0
var gameOver = false


$(document).ready(function(){


//this function makes everything:
//yesorNo is the probability it will appear

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

 //make top to bottom banana

 var topWidth = Math.random()*100;
  topWidth = Math.round(topWidth);
  var yesOrNo = Math.random()

  if (yesOrNo > 0.2){
   $('#container').append('<div class="bananas top-banana" style="left:' + topWidth + '%; top:-50px"></div>');
 }

 //make bottom to top banana:

var bottomWidth = Math.random()*100;
  bottomWidth = Math.round(bottomWidth);
  var yesOrNo = Math.random()

  if (yesOrNo > 0.2){
   $('#container').append('<div class="bananas bottom-banana" style="left:' + bottomWidth + '%; bottom:-50px"></div>');
 }

 //make left-to-right mushroom

  var leftHeight = Math.random()*100;
  leftHeight = Math.round(leftHeight);
  var yesOrNo = Math.random()

  if (yesOrNo > 0.5){
   $('#container').append('<div class="mushroom left-mushroom" style="top:' + leftHeight + '%; left:-50px"></div>');
 }

//make right-to-left mushroom

  var rightHeight = Math.random()*100;
  rightHeight = Math.round(rightHeight);
  var yesOrNo = Math.random()

  if (yesOrNo > 0.5){
   $('#container').append('<div class="mushroom right-mushroom" style="top:' + rightHeight + '%; right:-50px"></div>');
 }

 //make top-to-bottom mushroom

  var topWidth = Math.random()*100;
  topWidth = Math.round(topWidth);
  var yesOrNo = Math.random()

  if (yesOrNo > 0.5){
   $('#container').append('<div class="mushroom top-mushroom" style="left:' + topWidth + '%; top:-50px"></div>');
 }

 //make bottom-to-top mushroom

  var bottomWidth = Math.random()*100;
  bottomWidth = Math.round(bottomWidth);
  var yesOrNo = Math.random()

  if (yesOrNo > 0.5){
   $('#container').append('<div class="mushroom bottom-mushroom" style="left:' + bottomWidth + '%; bottom:-50px"></div>');
 }



 //when any banana is touched:
   $('.bananas').mouseenter(function(){
  size = size+1
  score = score+1
  $(this).css('display', 'none');
  $('#score').text('Score: ' + score)
  })

 //when any mushroom is touched
   $('.mushroom').mouseenter(function(){
  $(this).css('display', 'none');
  $('#container').append('<div class = "game-over"></div>')
  $('.bananas').remove();
  $('.mushroom').remove();
  clearInterval(makingInterval);
  clearInterval(bananaMover);
  clearInterval(mushroomMover);
  })

}

//this moves all bananas!

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

  $('.top-banana').each(function(index){
    var banana = $(this);
  var currentTop = parseInt(banana.css('top'));
  var newTop = currentTop + 1;
  banana.css('top', newTop);

  if (currentTop > 950){
    banana.remove();
  }

  })

   $('.bottom-banana').each(function(index){
    var banana = $(this);
  var currentBottom = parseInt(banana.css('bottom'));
  var newBottom = currentBottom + 1;
  banana.css('bottom', newBottom);

  if (currentBottom > 950){
    banana.remove();
  }

  })
}

//this moves all mushrooms!

function moveMush() {
    $('.left-mushroom').each(function(index){
    var mushroom = $(this);
  var currentLeft = parseInt(mushroom.css('left'));
  var newLeft = currentLeft + 1;
  mushroom.css('left', newLeft);

  if (currentLeft > 950){
    mushroom.remove();
  }

  })

  $('.right-mushroom').each(function(index){
    var mushroom = $(this);
  var currentRight = parseInt(mushroom.css('right'));
  var newRight = currentRight + 1;
  mushroom.css('right', newRight);

  if (currentRight > 950){
    mushroom.remove();
  }

  })

  $('.top-mushroom').each(function(index){
    var mushroom = $(this);
  var currentTop = parseInt(mushroom.css('top'));
  var newTop = currentTop + 1;
  mushroom.css('top', newTop);

  if (currentTop > 950){
    mushroom.remove();
  }

  })

  $('.bottom-mushroom').each(function(index){
    var mushroom = $(this);
  var currentBottom = parseInt(mushroom.css('bottom'));
  var newBottom = currentBottom + 1;
  mushroom.css('bottom', newBottom);

  if (currentBottom > 950){
    mushroom.remove();
  }

  })
}

if (gameOver === false){
var makingInterval = setInterval(makeBanana, 2000);
var bananaMover = setInterval(moveBanana, 5);
var mushroomMover = setInterval(moveMush, 10);
}

if (gameOver === true){
}

//this makes boo the mouse:
$(document).on('mousemove', function(e){

    if (score < 5){
      $('.boo1').show();
    $('.boo1').offset({left: e.pageX -15, top: e.pageY -15});
  }
 
  else if (score < 10){
 
    $('.boo1').remove();
    $('.boo2').show();
    $('.boo2').offset({left: e.pageX -15, top: e.pageY -15}); 
  }
  else if (score < 15){
    $('.boo2').remove();
    $('.boo3').show();
    $('.boo3').offset({left: e.pageX -15, top: e.pageY -15}); 
  }
  else {
     $('.boo3').remove();
    $('.boo4').show();
    $('.boo4').offset({left: e.pageX -15, top: e.pageY -15}); 
  }


    });

});

