$(function () {
  // 메뉴
   /* $('.menu>li').hover(function () {
        $(this).children('.sub').stop().slideToggle();
   }) */
  
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


  // quick
  $('.g1').mouseover(function () {
    $('#line1').stop().animate({ width : '100px'})
  })

  $('.g1').mouseout(function () {
    $('#line1').stop().animate({ width : '0px'})
  })

  $('.g2').hover(function () {
    $('#line2').stop().animate({ width : '100px'})
  })

  $('.g2').mouseout(function () {
    $('#line2').stop().animate({ width : '0px'})
  })

  $('.g3').hover(function () {
    $('#line3').stop().animate({ width : '100px'})
  })

  $('.g3').mouseout(function () {
    $('#line3').stop().animate({ width : '0px'})
  })





});  //제이쿼리

// path

const content2 = document.querySelector('.proWrap');
const content3 = document.querySelector('.pro');

const path2 = document.querySelector('.path2');
const path3 = document.querySelector('.path3');

        
const path2Length = path2.getTotalLength();
const path3Length = path3.getTotalLength();



  path2.style.strokeDasharray = path2Length
  path2.style.strokeDashoffset = path2Length

  path3.style.strokeDasharray = path3Length
  path3.style.strokeDashoffset = path3Length


        function calcDashoffset(scrollY, element, length) {
            const ratio = (scrollY - element.offsetTop) / element.offsetHeight
            const value = length - (length * ratio)
            return value < 0 ? 0 : value > length ? length : value
        }

        function scrollHandler() {
            const scrollY = window.scrollY + (window.innerHeight * 0.9)
            
            path2.style.strokeDashoffset = calcDashoffset(scrollY, content2, path2Length)

            path3.style.strokeDashoffset = calcDashoffset(scrollY, content3, path3Length)            
        }

window.addEventListener('scroll', scrollHandler)
        
//맨위로 푸터 위로
let fixMenu = document.querySelector('.Top');
let observer2 = new IntersectionObserver((c) => {
    c.forEach((j)=>{
      if (j.isIntersecting) {
            fixMenu.style.bottom = '270px';
            fixMenu.style.right = '10px';
        }
        else {
            fixMenu.style.bottom = '10px';
            fixMenu.style.right = '10px';
        }
    });
})

let ftr = document.querySelector('footer');
observer2.observe(ftr);



//맨위로버튼 메인 아래부터
let tbtn = document.querySelector('.Top');

let topshow = new IntersectionObserver((e) => {
  e.forEach((a) => {
    if (a.isIntersecting) {
      tbtn.style.display = 'none';
    } else {tbtn.style.display = 'block';}
    
  }) 
})

let main = document.querySelector('.maintext');
topshow.observe(main)




// 맨위로 버튼
const topBtn = document.querySelector(".Top");

topBtn.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });  
}


//프로그램 안내 텍스트

let proObserve = new IntersectionObserver((e) => {
  e.forEach((a) => {
    if (a.isIntersecting) {
      a.target.style.opacity = 1;
      } else {a.target.style.opacity = 0;}
  })
})


let proT = document.querySelector('.proT');
proObserve.observe(proT)




//프로그램 이미지

let proImgObserve = new IntersectionObserver((e) => {
  e.forEach((a) => {
    if (a.isIntersecting) {
      a.target.style.opacity = 1;
      a.target.style.transform = 'translateY(-30px)';
    } else {
      a.target.style.opacity = 0.3;
      a.target.style.transform = 'translateY(0px)';
    }
    
  })
})

let proImg = document.querySelectorAll('.pro > div');
proImgObserve.observe(proImg[0])
proImgObserve.observe(proImg[1])
proImgObserve.observe(proImg[2])
proImgObserve.observe(proImg[3])
proImgObserve.observe(proImg[4])
proImgObserve.observe(proImg[5])
proImgObserve.observe(proImg[6])



//prolist - .pro 위치부터 보임

let prolist = document.querySelector('.prolist');
let listObserve = new IntersectionObserver((e) => {
  e.forEach((a) => {
    if (a.isIntersecting) {
      prolist.style.display = 'block';
      } else {prolist.style.display = 'none';}
  })
})

let show = document.querySelector('.pro');
listObserve.observe(show);


//prolist - sitelist 보이면 사라짐

let list2Observe = new IntersectionObserver((a)=>{
  a.forEach((s)=>{
    if(s.isIntersecting) {
      prolist.style = 'display : none;';
    } else { prolist.style = 'display : block;';}
  })
})
let none = document.querySelector('.sitelist')
list2Observe.observe(none);

//sitebanner
const tabasBox = document.querySelector('.tabs-box'),
arrowIcons = document.querySelectorAll('.icon i');

let isDragging = false;

const handleIcons = ()=> {
    let scroll = tabasBox.scrollLeft;
    let maxScroll = tabasBox.scrollWidth - tabasBox.clientWidth;
    arrowIcons[0].parentElement.style.display = scroll > 0 ? 'flex' : 'none';
    arrowIcons[1].parentElement.style.display = maxScroll > scroll ? 'flex' : 'none';
}

arrowIcons.forEach(icon => {
    icon.addEventListener('click', ()=> {
        tabasBox.scrollLeft += icon.id === 'left' ? -300 : 300;
        setTimeout(()=> handleIcons(), 50);
    })
})

const dragging = function(e){
    if(!isDragging) return;
    tabasBox.classList.add('dragging');
    tabasBox.scrollLeft -= e.movementX;
}

const dragStop = ()=> {
    isDragging = false;
    tabasBox.classList.remove('dragging');
}

tabasBox.addEventListener('mousemove', dragging);
tabasBox.addEventListener('mousedown', ()=> isDragging = true);
document.addEventListener('mouseup', dragStop);