$(function () {
  // 메뉴
   $('.menu>li').hover(function () {
        $('.sub').stop().slideToggle();
      })

  
  $('#icon1').click(function () {
    $('.menu').show();
    $(this).css({ display: 'none' });
    $('#icon2').show();
  })

  $('#icon2').click(function () {
    $('.menu').hide();
    $('#icon1').css({ display: 'block' });
    $(this).css({ display: 'none' });
  })

});



// mapbanner text

let mapbannerObserve = new IntersectionObserver((e) => {
  e.forEach((a) => {
    if (a.isIntersecting) {
      a.target.style.opacity = 1;
      } else {a.target.style.opacity = 0;}
  })
})


let mapbanner = document.querySelector('#mapbanner');
mapbannerObserve.observe(mapbanner)