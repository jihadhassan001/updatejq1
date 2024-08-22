/*example1*/
$(document).ready(function(){
  $('.batter').click(function(){
    alert("hellow");
  }); 

  $('.batt').on('mouseover',function(){
    alert("hellow");
  })

$('.batte').on('click',function(){
    alert("hellow");
});
$('.battel').on('click',function(){
    alert("wellcome");
});

$('.battea').on('click',function(){
    alert("hellow");
});

$('.batteaL').on('click',function(){
    alert("hellow");
});

$('.batteaL1').on('click',function(){
    alert("hellow");
});

$('.batteaL2').on('click',function(){
    alert("hellow");
});

$('#batteaL3').on('mouseover',function(){
    alert("hellow");
});


$('.batteaLs').on('click',function(){
    alert("hellow");
});
// show hide
$('#btns').on('click',function(){
  $('#lorem1').show(1000);
});
$('#btnh').on('click',function(){
    $('#lorem1').hide(2000);
  });

$('#btnhs').on('mouseover',function(){
    $('#lorem2').hide(2000);
})
$('#btnss').on('mouseover',function(){
    $('#lorem2').show(3000);
});
$('#btnhss').on('click',function(){
  $('#lorem3').hide(1000);
});
$('#btnsss').on('click',function(){
    $('#lorem3').show(2000);
});




$('#btnhss1').on('click',function(){
  $('#lorem4').hide(2000);
})
$('#btnsss1').on('click',function(){
  $('#lorem4').show(2000);
})
$('#btnssst1').on('click',function(){
  $('#lorem4').toggle(1000);
})


$('#btnsss2').on('click',function(){
  $('#lorem5').toggle(2000);
})


$('#btnsss3').on('click',function(){
  $('#lorem6').toggle(1000);
})


// only hide
$('.tex').on('click',function(){
  $(this).hide(2000);
})
$('.bf').on('click',function(){
  $('.rex').hide(1000);
})
// fade in out
$('#btn6').on('click',function(){
  $('#lorem7').fadeOut();
});
$('#btnf6').on('click',function(){
  $('#lorem7').fadeIn();
})
$('#btns6').on('click',function(){
  $('#lorem7').fadeToggle();
})





























});