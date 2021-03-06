


var size = 0
var score = 0
var gameOver = false
var makingInterval
 var makingInterval 
      var bananaMover 
      var mushroomMover
      var colliderBanana 
      var colliderMushroom

$(document).ready(function(){


  //when banana is touched:

  function bananaCollide(){
    var collide = $('.collider').collision('.bananas');
    if (collide[0]){
      collide.remove()
    size = size+1
    score = score+100
    $('#score').text('Score: ' + score)
    if (score === 1500){
      rampUp()
    }

    if (score ===3000){
      secondRamp()
    }

    }
  }

//when mushroom is touched
  function mushroomCollide(){
    var mushcollide = $('.collider').collision('.mushroom');
    if(mushcollide[0]){ 
      console.log('boo')
  // $('#container').append('<div class = "game-over"></div>')
  $('.bananas').remove();
  // $('.mushroom').remove();
  clearInterval(makingInterval);
  clearInterval(bananaMover);
  clearInterval(mushroomMover);
    }
  }

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

}
function makeMushroom(){

 //make left-to-right mushroom

    var leftHeight = Math.random()*100;
    leftHeight = Math.round(leftHeight);
    var yesOrNo = Math.random()

    if (yesOrNo > 0.6){
     $('#container').append('<div class="mushroom left-mushroom" style="top:' + leftHeight + '%; left:-50px"></div>');
   }


//make right-to-left mushroom

    var rightHeight = Math.random()*100;
    rightHeight = Math.round(rightHeight);
    var yesOrNo = Math.random()

    if (yesOrNo > 0.6){
     $('#container').append('<div class="mushroom right-mushroom" style="top:' + rightHeight + '%; right:-50px"></div>');
   }

 //make top-to-bottom mushroom

  var topWidth = Math.random()*100;
  topWidth = Math.round(topWidth);
  var yesOrNo = Math.random()

  if (yesOrNo > 0.6){
   $('#container').append('<div class="mushroom top-mushroom" style="left:' + topWidth + '%; top:-50px"></div>');
 }

 //make bottom-to-top mushroom

  var bottomWidth = Math.random()*100;
  bottomWidth = Math.round(bottomWidth);
  var yesOrNo = Math.random()

  if (yesOrNo > 0.6){
   $('#container').append('<div class="mushroom bottom-mushroom" style="left:' + bottomWidth + '%; bottom:-50px"></div>');
 }


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

//sets intervals for everything

if (gameOver === false) {
  startGame()
}


function startGame(){

      makingBanana = setInterval(makeBanana, 2000);
      makingMushroom = setInterval(makeMushroom, 3000);
      bananaMover = setInterval(moveBanana, 5);
      mushroomMover = setInterval(moveMush, 10);
      colliderBanana = setInterval(bananaCollide, 1);
      colliderMushroom = setInterval(mushroomCollide, 1);
      }


function rampUp() {
  
    clearInterval(makingMushroom);
    clearInterval(bananaMover);
    clearInterval(mushroomMover);
    makingMushroom = setInterval(makeMushroom, 900);
    bananaMover = setInterval(moveBanana, 5);
    mushroomMover = setInterval(moveMush, 1);
    console.log('boom')
    }

function secondRamp(){
    clearInterval(bananaMover);
    clearInterval(mushroomMover);
    bananaMover = setInterval(moveBanana, 3);
    mushroomMover = setInterval(moveMush, 1);
    console.log('kapow')
}


  

  if (gameOver === true){
}



//this makes boo the mouse:
$(document).on('mousemove', function(e){

   

    if (score < 500){
      $('.col1').show();
    $('.col1').offset({left: e.pageX, top: e.pageY -25});

  }
 
  else if (score < 1000){
 
    $('.col1').remove();
    $('.col2').show();
    $('.col2').offset({left: e.pageX -15, top: e.pageY -15}); 
  }
  else if (score < 1500){
    $('.col2').remove();
    $('.col3').show();
    $('.col3').offset({left: e.pageX -15, top: e.pageY -15}); 
  }
  else {
     $('.col3').remove();
    $('.col4').show();
    $('.col4').offset({left: e.pageX -15, top: e.pageY -15}); 
  }


  });

})


