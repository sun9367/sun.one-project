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




let num1 = document.querySelector('#num1');
    let num2 = document.querySelector('#num2');
    let btnUp1 = document.querySelector('#up1');
    let btnDown1 = document.querySelector('#down1');
    let btnUp2 = document.querySelector('#up2');
    let btnDown2 = document.querySelector('#down2');
    let purchaseTicketBtn = document.querySelector('#purchaseTicket');

    let a = parseInt(num1.value);
    let b = parseInt(num2.value);

    btnUp1.addEventListener('click', () => {
      num1.value = ++a;
      updateSums();
    });

    btnDown1.addEventListener('click', () => {
      num1.value = --a;
      if (num1.value < 0) {
        num1.value = 0;
      }
      updateSums();
    });

    btnUp2.addEventListener('click', () => {
      num2.value = ++b;
      updateSums();
    });

    btnDown2.addEventListener('click', () => {
      num2.value = --b;
      if (num2.value < 0) {
        num2.value = 0;
      }
      updateSums();
    });

  

    // Listen for input events on num1 and num2
    num1.addEventListener('input', () => {
      a = parseInt(num1.value);
      updateSums();
    });

    num2.addEventListener('input', () => {
      b = parseInt(num2.value);
      updateSums();
    });

    function updateSums() {
      let numV1 = parseInt(num1.value);
      let numV2 = parseInt(num2.value);

      document.querySelector('#sum1').innerHTML = (numV1 + numV2);
      document.querySelector('#sum2').innerHTML = ((numV1 * 11000) + (numV2 * 9000));
    }



