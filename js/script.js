/* btn_x */
$(function() {
    var burger = $('.menu-trigger');

        burger.each(function(index){
        var $this = $(this);

        $this.on('click', function(e){
          e.preventDefault();
          $(this).toggleClass('active-' + (index+1));
        })
    });
})

/* mainSwiper */
$(function() {
    var swiper = new Swiper(".mainSwiper", {
        loop:true,
        autoplay:{
        delay:8000
        },
        pagination: {
        el: ".swiper-pagination",
        clickable: true,
        },
      });
})

/* tab */
$(function(){
    function findParent(el, className){
        let check = el.parentNode.classList.contains(className);
    
        if(check === true){
        return el.parentNode;
        }else{
        return findParent(el.parentNode, className);
        }
      }
  
      function bindingTabEvent(wrap){
        let wrapEl = document.querySelectorAll(wrap);
    
        wrapEl.forEach(function(tabArea){
        let btn = tabArea.querySelectorAll('.btn_tab');
      
        btn.forEach(function(item){
        item.addEventListener('click', function(){
          let parent = findParent(this, 'tab_area');
          let idx = this.dataset['idx'];
          let depth = this.dataset['depth'];
          let btnArr = parent.querySelectorAll('.btn_tab[data-depth="'+ depth +'"]');
          let contentArr = parent.querySelectorAll('.content_area[data-depth="'+ depth +'"]');
          
          btnArr.forEach(function(btn){ btn.classList.remove('act'); });
          this.classList.add('act');
          contentArr.forEach(function(content){ content.classList.remove('act'); });
          parent.querySelector('.content_area[data-idx="'+ idx +'"][data-depth="'+ depth +'"]').classList.add('act');
          });
        });
      });
    };
      bindingTabEvent('.tab_wrap');
})

/* tabSwiper */
$(function() {
    var swiper = new Swiper('.tabSwiper', {
        observer: true,
        observeParents: true,
        slidesPerView: 2, 
        spaceBetween: 50,
        breakpoints: {
        601: { slidesPerView: 5.5, },
        600: { slidesPerView: 2,spaceBetween: 20, },
    }});
})

/* newsSwiper */
$(function() {
    var swiper = new Swiper(".newsSwiper", {
        observer: true,
        observeParents: true,
        spaceBetween: 30,
        slidesPerView : 2,
        breakpoints: {
          300: {
            slidesPerView: 1,  
          },
         600: {
            slidesPerView: 2, 
            spaceBetween: 30,
          },
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
    });
})

/* gallerySwiper */
$(function() {
    var swiper = new Swiper(".gallerySwiper", {
        scrollbar: {
          el: ".swiper-scrollbar",
          loop : true,
          slidesPerView : '1',
          hide: false,
          autoplay: true,
        },
    });
})

/* footer_top > fot_top5 */
$(function() {
    $('.fot_btn').on('click', function() {
        $('.fot_top5 > ul' ).slideToggle()
    })
})
$(function() {
    $('.fot_btn').on('click', function() {
        $('.fot_btn').toggleClass("on")
    })
})
$(function() {
    $('.fot_btn').on('click', function() {
        $('.fot_btn > span').toggleClass("on")
    })
})

/* search_area */
$(function() {
    $('.search_btn').on('click', function() {
        $('.search_area' ).fadeIn()
    })
})
$(function() {
    $('.search_xBtn').on('click', function() {
        $('.search_area' ).fadeOut()
    })
})


/* user_academy */

$( document ).ready( function() {
    $( '.user_academy_img' ).mouseover( function() {
      $( '.user_academy_hover' ).fadeIn( 200 );
    } );
    $( '.user_academy_img' ).mouseleave( function() {
        $( '.user_academy_hover' ).fadeOut( 200 );
      } );
  } );

/* full_menu */
$(function() {
    $('.btn_x').on('click', function() {
        $('.full_menu_area' ).fadeIn()
    })
})
$(function() {
    $('.full_xBtn').on('click', function() {
        $('.full_menu_area').fadeOut()
    })
})

$(function () {
    let open = $('.btn_x');
    let close = $('.full_xBtn');

open.on('click', function () {
    $('.full_menu1').stop().animate({
        opacity: 1,
        left: 0
    },500)
});
close.on('click', function () {
    $('.full_menu1').stop().animate({
        left: '-20%',
        opacity: 0
    },500)
});
open.on('click', function () {
    $('.full_menu2').stop().animate({
        opacity: 1,
        left: 0
    },500)
});
close.on('click', function () {
    $('.full_menu2').stop().animate({
        left: '-20%',
        opacity: 0
    },500)
});
open.on('click', function () {
    $('.full_menu3').stop().animate({
        opacity: 1,
        left: 0
    },500)
});
close.on('click', function () {
    $('.full_menu3').stop().animate({
        left: '-20%',
        opacity: 0
    },500)
});
open.on('click', function () {
    $('.full_menu4').stop().animate({
        opacity: 1,
        left: 0
    },500)
});
close.on('click', function () {
    $('.full_menu4').stop().animate({
        left: '-20%',
        opacity: 0
    },500)
});
open.on('click', function () {
    $('.full_menu5').stop().animate({
        opacity: 1,
        left: 0
    },500)
});
close.on('click', function () {
    $('.full_menu5').stop().animate({
        left: '-20%',
        opacity: 0
    },500)
});
});

/* sub_page1 */
/* lnb_sub */
$(function() {
    $('.lnb_sub').on('click', function() {
        $('.lnb_sub_title' ).slideToggle()
    })
})

/* num_btn */
$(function() {
    $('.num_btn > ul > li').on('click', function() {
        $('.num_btn > ul > li').toggleClass("on")
    })
})


