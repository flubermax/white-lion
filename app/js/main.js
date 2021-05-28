$(function () {

  // search
  if ($(window).width() > 1345) {
    $('.header__btn-search').on('click', function () {
      $(this).toggleClass('active')
      $('.header__search').toggleClass('active')
      $('#searchOverlay').toggleClass('active')
    })
    $('#searchOverlay').on('click', function (e) {
      e.preventDefault()
      $(this).removeClass('active')
      $('.header__btn-search').removeClass('active')
      $('.header__search').removeClass('active')
      $('#searchOverlay .header__search').on('click', function (e) {
        e.stopPropagation()
      })
    })
  } else if ($(window).width() <= 1345) {
    $('.header__btn-search').on('click', function () {
      $('.header').toggleClass('zIndex')
      $('.header__search').toggleClass('active')
      $('#searchOverlay').toggleClass('active')
    })
    $('#searchOverlay').on('click', function (e) {
      e.preventDefault()
      $(this).removeClass('active')
      $('.header').removeClass('zIndex')
      $('.header__search').removeClass('active')
      $('#searchOverlay .header__search').on('click', function (e) {
        e.stopPropagation()
      })
    })
    $(window).on("scroll", function () {
      if ($(window).scrollTop() > 0) {
        $('#searchOverlay').removeClass('active')
        $('.header').removeClass('zIndex')
        $('.header__search').removeClass('active')
      }
    })
  }


  $('.header__search__clear').on('click', function () {
    $(this).parent().find('input').val('')
  })

  // menu dropdown
  let dropdownMenu = $('.header__menu__hidden')
  let dropdownBtn = $('.header__menu__item-services')

  if ($(window).width() > 1345) {
    function hideDropdownMenu() {
      dropdownMenu.removeClass('active')
      dropdownBtn.removeClass('active')
      $('.header__menu__hidden__minor, .header__menu__hidden__minor__list, .header__menu__hidden__main__item').removeClass('active')
    }
    function showDropdownMenu() {
      dropdownMenu.addClass('active')
      dropdownBtn.addClass('active')
    }
    dropdownBtn.on("mouseover", showDropdownMenu);
    dropdownBtn.on("mouseleave", hideDropdownMenu);
    dropdownMenu.on("mouseleave", hideDropdownMenu);
    dropdownMenu.on("mouseover", showDropdownMenu);

    let menuParents = document.querySelectorAll('.header__menu__hidden__main__item')
    let subMenuItems = document.querySelectorAll('.header__menu__hidden__minor__list')

    for (let index = 0; index < menuParents.length; index++) {
      const menuParent = menuParents[index]
      menuParent.addEventListener('mouseenter', function () {
        $('.header__menu__hidden__minor, .header__menu__hidden__minor__list, .header__menu__hidden__main__item').removeClass('active')
        $(this).addClass('active')
        subMenuItems[index].classList.add('active')
        $('.header__menu__hidden__minor').addClass('active')
      })
    }
  }

  // mobile menu
  let headerInfo = $('.header__row').clone()
  $('.mobileMenu__info').append(headerInfo)

  if ($(window).width() <= 1345) {
    $('.header__menu__hidden__main__link-grown span').html('Взрослая стоматология ')
    $('.header__menu__hidden__main__link-children span').html('Детская стоматология ')
    // $('.header__row__item__minor.popupOpen').on('click', function () {
    //   $('.mobileMenu').removeClass('active')
    // })
    $('.header__btn-menu').on('click', function () {
      $('.mobileMenu').addClass('active')
    })
    $('.mobileMenu .popup__close').on('click', function () {
      $('.mobileMenu').removeClass('active')
      $('.mobileMenu__screen-first').addClass('active')
      $('.mobileMenu__screen-second').removeClass('active')
      $('.mobileMenu__screen-grown, .mobileMenu__screen-children').removeClass('active')
    })
    $('.header__menu__item-services').on('click', function () {
      $('.mobileMenu__screen-first').removeClass('active')
      $('.mobileMenu__screen-second').addClass('active')
    })
    $('.mobileMenu__screen-second .mobileMenu__screen__back').on('click', function () {
      $('.mobileMenu__screen-first').addClass('active')
      $('.mobileMenu__screen-second').removeClass('active')
    })
    $('.header__menu__hidden__main__link-grown').on('click', function () {
      $('.mobileMenu__screen-second').removeClass('active')
      $('.mobileMenu__screen-grown').addClass('active')
    })
    $('.header__menu__hidden__main__link-children').on('click', function () {
      $('.mobileMenu__screen-second').removeClass('active')
      $('.mobileMenu__screen-children').addClass('active')
    })
    $('.mobileMenu__screen-grown .mobileMenu__screen__back, .mobileMenu__screen-children .mobileMenu__screen__back').on('click', function () {
      $('.mobileMenu__screen-second').addClass('active')
      $('.mobileMenu__screen-grown, .mobileMenu__screen-children').removeClass('active')
    })
  }


  // fixed menu
  $(window).on("scroll", function () {
    let scrollTop = $(window).scrollTop()
    let bodyHeight = $('body').height()
    let windowHeight = $(window).height()
    let footerHeight = $('.footer').height()
    let mapHeight = $('.section-mainContacts').height()
    let bottom = bodyHeight - windowHeight - footerHeight - mapHeight + 150
    if (scrollTop >= 500 && scrollTop <= bottom) {
      $('.fixedMenu').addClass('visible');
    } else {
      $('.fixedMenu').removeClass('visible');
      $('.fixedMenu, .fixedMenu__btn').removeClass('active');
      $('.fixedMenu__hidden, .fixedMenu__hidden-wrapper, #fixedMenuOverlay').removeClass('active')
      $('.fixedMenu__hidden-wrapper').css({
        'paddingLeft': 0,
        'width': 0
      })
    }
  });

  function fixedMenuPadding() {
    let windowWidth = $(window).width()
    let containerWidth = $('.container').width()
    let actualPadding = (windowWidth - containerWidth) / 2
    let actualWidth
    if ($(window).width() <= 1650) {
      actualWidth = 1170
    } else {
      actualWidth = 1350
    }
    $('.fixedMenu__hidden-wrapper.active').css({
      'paddingLeft': actualPadding,
      'width': actualWidth + actualPadding,
    })
  }

  $(window).on('resize', function () {
    fixedMenuPadding()
  })

  $('.fixedMenu__toggle__btn').on('click', function () {
    $('.fixedMenu').toggleClass('active')
    $('.fixedMenu__btn').removeClass('active');
    $('.fixedMenu__hidden, .fixedMenu__hidden-wrapper, #fixedMenuOverlay').removeClass('active')
    if ($(this).hasClass('active')) {
      $(this).removeClass('active')
      $('.fixedMenu__hidden-wrapper').css({
        'paddingLeft': 0,
        'width': 0
      })
    } else {
      $(this).addClass('active')
      fixedMenuPadding()
    }
  })

  $('.fixedMenu__btn-menu').on('click', function () {
    if ($(this).hasClass('active')) {
      $(this).removeClass('active')
      $('.fixedMenu__hidden, .fixedMenu__hidden-wrapper, #fixedMenuOverlay').removeClass('active')
      $('.fixedMenu__hidden-wrapper').css({
        'paddingLeft': 0,
        'width': 0
      })
    } else {
      $('.fixedMenu__btn').removeClass('active')
      $(this).addClass('active')
      $('.fixedMenu__hidden').removeClass('active')
      $('.fixedMenu__menu, .fixedMenu__hidden-wrapper, #fixedMenuOverlay').addClass('active')
      fixedMenuPadding()
    }
  })
  $('.fixedMenu__btn-search').on('click', function () {
    if ($(this).hasClass('active')) {
      $(this).removeClass('active')
      $('.fixedMenu__hidden, .fixedMenu__hidden-wrapper, #fixedMenuOverlay').removeClass('active')
      $('.fixedMenu__hidden-wrapper').css({
        'paddingLeft': 0,
        'width': 0
      })
    } else {
      $('.fixedMenu__btn').removeClass('active')
      $(this).addClass('active')
      $('.fixedMenu__hidden').removeClass('active')
      $('.fixedMenu__search, .fixedMenu__hidden-wrapper, #fixedMenuOverlay').addClass('active')
      fixedMenuPadding()
    }
  })

  $('#fixedMenuOverlay').on('click', function () {
    $(this).removeClass('active')
    $('.fixedMenu__hidden, .fixedMenu__hidden-wrapper, .fixedMenu__btn').removeClass('active')
    $('.fixedMenu__hidden-wrapper').css({
      'paddingLeft': 0,
      'width': 0
    })
  })

  // inputmask
  $("input[type='tel']").inputmask('+7 (999) 999 - 99 - 99', {
    clearIncomplete: true,
    showMaskOnHover: false
  })

  // form label
  $('form input, form textarea').on('input', function () {
    if ($(this).val().length > 0) {
      $(this).parent().removeClass('error').find('.label').addClass('label-effect');
      let labelValue = $(this).parent().find('.label').html()
      let labelDefault = labelValue.replace(" - поле, обязательное для заполнения", "");
      $(this).parent().find('.label').html(labelDefault)
    } else if ($(this).val().length === 0) {
      $(this).parent().find('.label').removeClass('label-effect');
    }
  })

  // label phone
  let phoneInput = $('.form__control-phone input')
  phoneInput.on('focus', function () {
    if (!$(this).parent().hasClass('error')) {
      $(this).parent().find('.label').html('Телефон*')
    }
  })
  phoneInput.on('blur', function () {
    let phoneValue = $(this).val()
    if (!$(this).parent().hasClass('error')) {
      if (phoneValue == '') {
        $(this).parent().find('.label').removeClass('label-effect').html('+ 7 (__) __-_-_ <span>*</span>')
      } else {
        $(this).parent().find('.label').html('Телефон*')
      }
    }

  })

  // form validation
  $('form').each(function () {
    const inputs = $(this).find('.req')
    const submit = $(this).find('.submit')
    const _this = $(this)

    submit.on('click', function (e) {
      e.preventDefault()
      let reqText = ' - поле, обязательное для заполнения'
      let k = 0
      inputs.each(function () {
        let labelValue = $(this).parent().find('.label').html()
        if (labelValue.includes('7')) {
          labelValue = 'Телефон*'
        }
        if ($(this).val() === '') {
          if (!labelValue.includes('поле')) {
            $(this).parent().find('.label').addClass('label-effect').html(labelValue + reqText)
          }
          $(this).parent().addClass('error')
          $(this).parent().parent().parent().find('.form__info-req').addClass('error')
        } else {
          $(this).parent().find('.label').html(labelValue)
          $(this).parent().removeClass('error')
          $(this).parent().parent().parent().find('.form__info-req').removeClass('error')
          k++
        }
      })
      if (k == inputs.length) {
        setTimeout(() => {
          _this.find('input').each(function () {
            $(this).val('')
          })
          _this.find('.label').each(function () {
            $(this).removeClass('label-effect')
          })
          $('.popup').removeClass('active')
          $('#popupSuccess').addClass('active')
        }, 500);
      }
    })
  })

  // main slider
  $(".mainSlider").on("init", function () {
    $('.slick-active').addClass('custom');
  })
  $('.mainSlider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 600,
    arrows: true,
    dots: true,
    infinite: true
  });

  $('.mainSlider .slick-dots').appendTo('.main__card-wrapper .container')

  $(".mainSlider").on("beforeChange", function () {
    $('.slick-active').removeClass('custom');
  })
  $(".mainSlider").on("afterChange", function () {
    $('.slick-active').addClass('custom');
  })

  // hover card
  $('.main__card').on("mouseover", function () {
    $(this).addClass('active')
  });
  $('.main__card').on("mouseleave", function () {
    $(this).removeClass('active')
  });

  // main service sliders
  $('.clinicSlider-green').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    speed: 400,
    arrows: true,
    dots: false,
    infinite: true,
    responsive: [
      {
        breakpoint: 1650,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 1345,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });
  $('.clinicSlider-pink').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    speed: 400,
    arrows: true,
    dots: false,
    infinite: true,
    responsive: [
      {
        breakpoint: 1650,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 1345,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  // doc slider
  $('.clinicSlider-docSlider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 400,
    arrows: true,
    dots: false,
    infinite: true,
    responsive: [
      {
        breakpoint: 1345,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  // age toggle
  $('.ageToggle__slider').on('click', function () {
    $(this).parent().toggleClass('clicked')
    checkPortfToggle()
  })

  // main portf toggle
  function checkPortfToggle() {
    if ($('.ageToggle-mainPortf.clicked').length) {
      $('.mainPortf').removeClass('active')
      $('.mainPortf-pink').addClass('active')
    } else {
      $('.mainPortf').removeClass('active')
      $('.mainPortf-green').addClass('active')
    }
  }

  // before/after images
  $(window).load(function () {
    setTimeout(() => $(".twentytwenty_image").twentytwenty({
      no_overlay: true
    }), 200);
  });



  $('.mainDocuments__slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    speed: 400,
    arrows: true,
    dots: false,
    infinite: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  // magfinic documents main
  $('.mainDocuments__slider, .handleContent__media__content, .docSingle__block__slider').magnificPopup({
    delegate: 'a',
    type: 'image',
    tClose: 'Закрыть',
    gallery: {
      enabled: true, // set to true to enable gallery
      preload: [0, 2], // read about this option in next Lazy-loading section
      navigateByImgClick: true,
      arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button
      tPrev: 'Предыдущий слайд', // title for left button
      tNext: 'Следующий слайд', // title for right button
      tCounter: '<span class="mfp-counter">%curr% из %total%</span>' // markup of counter
    },
    callbacks: {
      buildControls: function () {
        this.contentContainer.append(this.arrowLeft.add(this.arrowRight));
      }
    }
  });

  // magnific single
  $('.saleSingle__main__image').magnificPopup({
    delegate: 'a',
    type: 'image',
    tClose: 'Закрыть'
  });

  // review text height 
  $('.mainReviews__item .mainReviews__item__text-inner').each(function () {
    if ($(this).height() > 138) {
      $(this).parent().append('<div class="showMore"><span class="showMore__dots">..</span><a class="showMore__link" href="#popupReview">Подробнее</a></div>')
    }
  })

  // reviews hide
  if ($(window).width() <= 700) {
    $('.mainReviews').children().not(':eq(0)').css('display', 'none')
    $('.mainReviews__load').on('click', function () {
      if ($(this).hasClass('clicked')) {
        $(this).removeClass('clicked').html('Показать еще')
        $('.mainReviews').children().not(':eq(0)').css('display', 'none')
      } else {
        $(this).addClass('clicked').html('Скрыть')
        $('.mainReviews').children().css('display', 'block')
      }
    })
  }

  // footer menu mobile toggle
  if ($(window).width() <= 992) {
    $('.footer__menu__title').on('click', function (e) {
      e.preventDefault()
      $(this).parent().toggleClass('active')
    })
  }

  // to top btn
  $(window).on("scroll", function () {
    let scrollTop = $(window).scrollTop()
    if (scrollTop >= 500) {
      $('.toTop').addClass('visible');
    } else {
      $('.toTop').removeClass('visible');
    }
  });
  $(".toTop").on("click", function () {
    $("html,body").animate({ scrollTop: 0 }, 900)
  });

  // servicesNav append icon
  $('.pageNav__item').append('<div class="nav__icon"></div>')
  $('.innerPage__aside-filter .pageNav__item').on('click', function () {
    $('.pageNav__item').removeClass('active')
    $(this).addClass('active')
  })

  if ($('.pageNav__wrapper').length && $(window).width() > 1345) {
    var navTop = $('.pageNav').offset().top
    $(window).on("scroll", function () {
      if ($(window).scrollTop() >= navTop) {
        $('.pageNav').addClass('fixed');
      } else {
        $('.pageNav').removeClass('fixed');
      }
    });
  }

  // sales slider
  $('.clinicSlider-salesSlider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 400,
    arrows: true,
    dots: false,
    infinite: true,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  // sales slider
  $('.clinicSlider-portfSlider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 400,
    arrows: true,
    dots: false,
    infinite: true,
    draggable: false,
    swipe: false,
    swipeToSlide: false,
    touchMove: false,
    draggable: false,
    accessibility: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  // articlesBlock excerpt  height
  setTimeout(() => {
    $('.articlesBlock__item .articlesBlock__excerpt-inner').each(function () {
      let parH = $(this).parent().height()
      if ($(this).height() > (parH + 7)) {
        let articleLink = $(this).parents('.articlesBlock__item').find('.articlesBlock__title').attr('href')
        $(this).parent().append('<div class="showMore"><span class="showMore__dots">..</span><a class="showMore__link" href="' + articleLink + '">Подробнее</a></div>')
      }
    })
  }, 300);


  // articlesBlock stickers toggle
  $('.articlesBlock__item .articlesBlock__stickers').each(function () {
    var countStickers = $(this).children().length
    if (countStickers > 1) {
      $(this).children('.articlesBlock__stickers__item').not(':eq(0)').addClass('hidden')
      $(this).append('<div class="stickerArrow"></div>')
    }
    $('.stickerArrow').on('click', function () {
      if ($(this).hasClass('clicked')) {
        $(this).removeClass('clicked')
        $(this).parent().children('.articlesBlock__stickers__item').not(':eq(0)').addClass('hidden')
      } else {
        $(this).addClass('clicked')
        $(this).parent().children('.articlesBlock__stickers__item').removeClass('hidden')
      }
    })
  })

  // otherServices  slider
  if ($(window).width() >= 700) {
    $('.otherServices__slider').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      speed: 400,
      arrows: true,
      dots: false,
      infinite: true,
      responsive: [
        {
          breakpoint: 1345,
          settings: {
            slidesToShow: 4,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
          }
        }
      ]
    });
    $('.otherServices__slider').on('setPosition', function () {
      $(this).find('.clinicSlider__item').height('auto');
      var slickTrack = $(this).find('.slick-track');
      var slickTrackHeight = $(slickTrack).height();
      $(this).find('.clinicSlider__item').css('height', slickTrackHeight + 'px');
    });
  }

  if ($(window).width() <= 576) {
    $('.handleContent-hide').append('<div class="btn btn-green handleContent__btn">Развернуть</div>')
    $('.handleContent-hide').children().not(':eq(0), p:first, .handleContent__btn').css('display', 'none')
    $('.handleContent-hide').children('p:first').addClass('hidden')
    $('.handleContent__btn').on('click', function (e) {
      e.preventDefault()
      // let btnOffset = $(this).offset().top
      // let windowHeight = $(window).height()
      if ($(this).hasClass('clicked')) {
        // let scrollDest = btnOffset - (windowHeight / 2)
        // $('html, body').animate({
        //   scrollTop: scrollDest
        // }, 500);
        // $('html').scrollTop(scrollDest)
        // $('body').scrollTop(scrollDest)
        window.scrollTo(0, 450)
        $(this).removeClass('clicked').html('Развернуть')
        $('.handleContent-hide').children('p:first').addClass('hidden')
        $('.handleContent-hide').children().not('h2, .pricePage__about__title, p:first, .handleContent__btn').css('display', 'none')
      } else {
        $(this).addClass('clicked').html('Свернуть')
        $('.handleContent-hide').children('p:first').removeClass('hidden')
        $('.handleContent-hide').children().not('p:first, .handleContent__btn').css('display', 'block')
      }
    })
  }

  // fixed card link at single service page
  if ($('.pageTop__row__card').length) {
    $(window).on("scroll", function () {
      var btnTop = $('.pageTop__row__card .main__card__btn').offset().top
      if ($(window).scrollTop() >= btnTop) {
        $('.fixedCard').addClass('visible');
      } else {
        $('.fixedCard').removeClass('visible');
        $('.fixedCard').removeClass('active');
      }
    });
  }

  $('.fixedCard__btn').on('click', function () {
    $('.fixedCard').toggleClass('active')
  })

  // docs flter
  $('.innerPage-docsPage .pageNav__item').on('click', function () {
    let navData = $(this).attr('data-docs')
    if (navData == 'all') {
      $('.innerPage__doctors .docSlider__item').css('display', 'block')
    } else {
      $('.innerPage__doctors .docSlider__item').each(function () {
        if ($(this).attr('data-docs') == navData) {
          $(this).css('display', 'block')
        } else {
          $(this).css('display', 'none')
        }
      })
    }
  })

  // custom select
  $('.select').on('click', function () {
    if ($(this).hasClass('active')) {
      $(this).removeClass('active')
      $(this).find('.pageNav__content').removeClass('active')
    } else {
      if ($(window).width() > 650) {
        $('.select').removeClass('active')
        $('.pageNav__content').removeClass('active')
      }
      $(this).addClass('active')
      $(this).find('.pageNav__content').addClass('active')
    }

    $('body').on('click', function (e) {
      if (!$(e.target).closest(".select, .pageNav__content").length) {
        $('.select').removeClass('active')
        $('.pageNav__content').removeClass('active')
      }
    })

  })
  $('.select-change').on('click', function () {
    $('.select-change .pageNav__item').on('click', function () {
      var selectValue = $(this).html()
      $(this).parent().parent().find('.select__current span').html(selectValue)
    })
  })
  $('.select-scroll').on('click', function () {
    $('.select-scroll .pageNav__item').on('click', function () {
      $('.select').removeClass('active')
      $('.pageNav__content').removeClass('active')
    })
  })

  // hide timeline
  $('.timeline').each(function () {
    $(this).children().not(':eq(0),:eq(1),:eq(2),:eq(3)').css('display', 'none')
    $('.timeline__show').on('click', function () {
      if ($(this).hasClass('clicked')) {
        $(this).removeClass('clicked').html('Показать все')
        $(this).parent().find('.timeline').children().not(':eq(0),:eq(1),:eq(2),:eq(3)').css('display', 'none')
      } else {
        $(this).addClass('clicked').html('Скрыть')
        $(this).parent().find('.timeline').children().css('display', 'block')
      }
    })
  })

  // doc single page images
  if ($(window).width() > 1345) {
    $(window).load(function () {
      let photoHeight = $('.docSingle__image__photo').height()
      $('.docSingle__image__ellipses').height(photoHeight - 170)
    });
    $(window).on('resize', function () {
      let photoHeight = $('.docSingle__image__photo').height()
      $('.docSingle__image__ellipses').height(photoHeight - 170)
    })
  }

  // doc single page slider
  $('.docSingle__block__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 400,
    arrows: true,
    dots: false,
    infinite: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  // price page nav
  $('.pricePage .pageNav__item, .portfolioPage .pageNav__item').on('click', function () {
    $(this).toggleClass('active')
    let navData = $(this).attr('href')
    $(`.tab-spoiler${navData}`).toggleClass('active');
    let navHeight = $('.pageNav').height()
    let scrollOffset
    if ($(window).width() > 1345) {
      scrollOffset = navHeight + 35
    } else if ($(window).width() <= 1345) {
      scrollOffset = 75
    }
    if ($(this).hasClass('active')) {
      var elementClick = $(this).attr("href")
      var destination = $(elementClick).offset().top;
      var destinationgo = destination - scrollOffset;
      $("html:not(:animated),body:not(:animated)").animate({ scrollTop: destinationgo }, 600);
      return false;
    } else {
      return false
    }
  })
  $('.tab-spoiler .tab__header').on('click', function () {
    $(this).toggleClass('active')
  })

  // price spoilers
  $('.tab-spoiler').each(function () {
    $(this).find('.tab__header').on('click', function () {
      $(this).parents('.tab-spoiler').toggleClass('active')
      let spoilerData = $(this).parents('.tab-spoiler').attr('id')
      $(`.pageNav__item[href="#${spoilerData}"]`).toggleClass('active');
    })
  })

  // sort active toggle 
  $('.sort__item').on('click', function () {
    $('.sort__item').removeClass('active')
    $(this).addClass('active')
  })

  // mobile sort
  $('.sort__mobile').on('click', function () {
    if ($(this).hasClass('active')) {
      $(this).removeClass('active')
    } else {
      $(this).addClass('active')
    }

    $('body').on('click', function (e) {
      if (!$(e.target).closest(".sort__mobile__current").length) {
        $('.sort__mobile').removeClass('active')
      }
    })

    $('.sort__item').on('click', function () {
      var sortText = $(this).text()
      $('.sort__mobile__current').text(sortText)
      $('.sort__mobile').removeClass('active')
    })
  })

  // article pagenav
  function changeStickyHeight() {
    let decorNav = $('.decor-pageNav')
    if ($('.decor-pageNav').length && $(window).width() > 992) {
      let navHeight = decorNav.find('.pageNav__content').height()
      let contentHeight = decorNav.parent().parent().find('.handleContent').height()
      let finalHeight = contentHeight - navHeight - 50
      decorNav.css('height', finalHeight)
    } else {
      decorNav.css('height', 'auto')
    }
  }
  changeStickyHeight()

  $(window).on('resize', function () {
    changeStickyHeight()
  })

  $('.pageNav__content-scroll .pageNav__item').on('click', function () {
    if ($(window).width() <= 1345) {
      $('.pageNav__item').removeClass('active')
      $(this).addClass('active')
    }
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    var destinationgo = destination - 110;
    $("html:not(:animated),body:not(:animated)").animate({ scrollTop: destinationgo }, 600);
    return false;
  })

  if ($('.pageNav__content-scroll').length && $(window).width() > 1345) {
    $(window).on("scroll", function () {
      $('.pageNav__item').each(function () {
        let link = $(this).attr('href')
        let linkTarget = $('.siteContent').find(link)
        let linkTargetOffset = linkTarget.offset().top - 300
        if ($(window).scrollTop() > linkTargetOffset) {
          $('.pageNav__item').removeClass('active')
          $(this).addClass('active')
        }
      })
    })
  }

  // article single slider 
  if ($(window).width() >= 576) {
    $('.articles__more__slider').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      speed: 400,
      arrows: true,
      dots: false,
      infinite: true,
      responsive: [
        {
          breakpoint: 1345,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    });
  }

  // portfolio text more
  if ($(window).width() > 576) {
    $('.mainPortf__item__text-inner').each(function () {
      if ($(this).height() > 114) {
        $(this).parent().append('<div class="showMore"><span class="showMore__dots">..</span><a class="showMore__link" href="#popupPortf">Подробнее</a></div>')
      }
    })
  } else if ($(window).width() <= 576) {
    $('.mainPortf__item__text-inner').each(function () {
      if ($(this).height() > 88) {
        $(this).parent().append('<div class="showMore"><span class="showMore__dots">..</span><a class="showMore__link" href="#popupPortf">Подробнее</a></div>')
      }
    })
  }

  // popup portf slider
  $('.popupPortf__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 400,
    arrows: true,
    dots: false,
    infinite: true
  });

  // input file
  if ($('#input-file').length) {
    let fileInput = document.getElementById('input-file')
    let fileLabel = document.querySelector('.label-file')
    fileInput.addEventListener('change', function (e) {
      let fileName = '';
      if (this.files) {
        fileName = e.target.value.split("\\").pop()
        if (fileName.length == 0) {
          fileName = 'Прикрепить файл'
        }
      }
      fileLabel.innerHTML = fileName
    })
  }

  // textarea auto height
  $('textarea').each(function () {
    this.setAttribute('style', 'height:' + (this.scrollHeight) + 'px;overflow-y:hidden;');
  }).on('input', function () {
    this.style.height = '39px';
    this.style.height = (this.scrollHeight) + 'px';
    if ($(this).val().length > 0) {
      $(this).parent().addClass('focused');
    } else if ($(this).val().length === 0) {
      $(this).parent().removeClass('focused');
      $(this).css('height', '39px')
    }
  });
  $('.comment__clear').on('click', function () {
    $(this).parent().removeClass('focused').find('textarea').val('').css('height', '39px')
    $(this).parent().find('.label').removeClass('label-effect')
  })

  // search page
  window.onload = function () {
    if ($('.search__request').length) {
      let searchRequest = $('.search__request').html()
      let search = [
        { text: searchRequest, classes: ['search__result'] }
      ];

      const markerText = (text, search) => {
        return search.reduce((result, current) => {
          let regexp = new RegExp(current.text, 'g');
          let style = current.classes.join(' ');

          return result.replace(regexp, `<span class="${style}">${current.text}</span>`);
        }, text);
      }
      $('.search__item__text').each(function () {
        let text = $(this).html()
        $(this).html(markerText(text, search))
      })
    }
  }


  // star rating
  // const ratingItemsList = document.querySelectorAll('.rating__item');
  // const ratingItemsArray = Array.prototype.slice.call(ratingItemsList);

  // ratingItemsArray.forEach(item =>
  //   item.addEventListener('click', () => {
  //     const { itemValue } = item.dataset;
  //     item.parentNode.dataset.totalValue = itemValue;
  //   })
  // )

  // modals
  $('.popupOpen, .showMore__link').on('click', function (e) {

    e.preventDefault()
    var destPopup = $(this).attr('href')
    $(destPopup).addClass('active')
    $(destPopup + ' .popup__close').on('click', function (e) {
      e.preventDefault()
      $(destPopup).removeClass('active')
    })
    $(destPopup + ' .popup__overlay').on('click', function () {
      $(destPopup).removeClass('active')
    })
    $(destPopup + ' .popup__body').on('click', function (e) {
      e.stopPropagation()
    })
  })
  $('.popup__overlay').on('click', function (e) {
    if (!$(e.target).closest(".popup__body").length) {
      $('.popup').removeClass('active')
    }
  })
  $('.popup__close').on('click', function (e) {
    e.preventDefault()
    $('.popup').removeClass('active')
  })
  $('.popup__body .success__btn').on('click', function (e) {
    e.preventDefault()
    $('.popup').removeClass('active')
  })

});