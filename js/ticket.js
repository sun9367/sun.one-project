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


  //이용약관 취소환불 - 내용보기 클릭시 숨겨진 박스

  $('#agrS1').click(function () {
    $('.agreeshow1').stop().slideToggle();
    if ($(this).html() === '내용보기') {
        $(this).html('닫기');
    } else {
        $(this).html('내용보기');
    }
});


  $('#agrS2').click(function () {
    $('.agreeshow2').stop().slideToggle();
    if ($(this).html() === '내용보기') {
        $(this).html('닫기');
    } else {
        $(this).html('내용보기');
    }
  })

  $('#agrS3').click(function () {
    $('.agreeshow3').stop().slideToggle();
    if ($(this).html() === '내용보기') {
        $(this).html('닫기');
    } else {
        $(this).html('내용보기');
    }
  })

  $('#agrS4').click(function () {
    $('.agreeshow4').stop().slideToggle();
    if ($(this).html() === '내용보기') {
        $(this).html('닫기');
    } else {
        $(this).html('내용보기');
    }
  })

  $('#agrS5').click(function () {
    $('.agreeshow5').stop().slideToggle();
    if ($(this).html() === '내용보기') {
        $(this).html('닫기');
    } else {
        $(this).html('내용보기');
    }
  })


});  



//예매권 가격/수량 
    let num1 = document.querySelector('#num1');
    let num2 = document.querySelector('#num2');
    let btnUp1 = document.querySelector('#up1');
    let btnDown1 = document.querySelector('#down1');
    let btnUp2 = document.querySelector('#up2');
    let btnDown2 = document.querySelector('#down2');


    let a = parseInt(num1.value);
    let b = parseInt(num2.value);



    //버튼 클릭시 숫자 증가
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

  

    // num1과 num2의 입력 이벤트, 가격설정
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
      document.querySelector('#sum3').innerHTML = ((numV1 * 11000) + (numV2 * 9000));
    }




//이용자 약관 클릭시 체크박스 전체선택
  function selectAll1(selectAll)  {
  const checkboxes1 = document.getElementsByName('agrcheck1');
  
  checkboxes1.forEach((a) => {
    a.checked = selectAll.checked;
  })
}


//취소/환불규정 클릭시 체크박스 전체선택
  function selectAll2(selectAll)  {
  const checkboxes2 = document.getElementsByName('agrcheck2');
  
  checkboxes2.forEach((a) => {
    a.checked = selectAll.checked;
  })
}

// 결제하기 버튼 상태 변경 함수
function PayE() {
  let agrT2 = document.getElementById('agrT2').checked;
  let agrT3 = document.getElementById('agrT3').checked;
  let agrT4 = document.getElementById('agrT4').checked;
  let agreeT2 = document.getElementById('agreeT2').checked;
  let pay = document.querySelector('.pay h1');
 
  if (agrT2 && agrT3 && agrT4 && agreeT2) {
    pay.classList.add('on');
  }
  else {
    pay.classList.remove('on');
  }
}

// 각 체크박스의 변경을 감지하여 PayE 함수 호출
document.querySelectorAll('input[type="checkbox"]').forEach(function(checkbox) {
    checkbox.addEventListener('change', PayE);
});

// 초기 상태 반영
PayE();


//상세정보 / 오시는길

document.querySelector('.lishow1').addEventListener('click', () => {
    document.querySelector('.li-2').classList.add('on1');
    document.querySelector('.li-1').classList.remove('on1');
  })

document.querySelector('.lishow2').addEventListener('click', () => {
    document.querySelector('.li-1').classList.add('on1');
    document.querySelector('.li-2').classList.remove('on1');
})
  


//상세정보 더보기

document.querySelector('.view').addEventListener('click', () => {
  document.querySelector('.li-1').style = 'overflow : scroll;';
  document.querySelector('.view').style = 'display : none;';
})







