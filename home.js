$(function() {

  //スライドショー
  var page=0;

  var lastPage =parseInt($(".slides img").length-1);

  $(".slides img").css("display","none");

  $(".slides img").eq(page).css("display","block");

  function changePage(){
    $(".slides img").fadeOut(4000);
    $(".slides img").eq(page).fadeIn(3000);
  };

  var Timer;
  function startTimer(){
    Timer =setInterval(function(){
      if(page === lastPage){
        page = 0;
        changePage();
      }else{
        page ++;
        changePage();
      };
    },5000);
  }

  function stopTimer(){
    clearInterval(Timer);
  }

  startTimer();


  $('.menu-icon').click(function() {
    if($('.page-menu').hasClass('menu-action')){
      $('.page-menu').removeClass('menu-action');
      $('.page-menu').slideUp();
    }else{
      $('.page-menu').addClass('menu-action');
      $('.menu-action').slideDown();
    }

  });

  

  $(function() {
    setTimeout(function(){
      $('.slide-wrapper').fadeIn(3000);
      $('.acount-wrapper').slideDown(3000);
      $('.first').hide();
      $('.message-wrapper').fadeIn(2000);
      $('.infomation-wrapper').fadeIn(3000);
      $('header').fadeIn(2000);
      $('.menu-wrapper').slideDown(3000);
      $('.map').fadeIn(4000);
      $('.access-infomation').fadeIn(2000);
    },500); //0.5秒後にロゴをフェードイン!
  });

  

  
});