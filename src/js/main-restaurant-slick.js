// $('.main-restaurant-slider').slick({
//   dots: false,
//   infinite: false,
//   speed: 1300,
//   prevArrow: '<span class="my-prev-arrow"></span>',
//   nextArrow: '<span class="my-next-arrow"></span>',
//   variablewidth: false,
//   slidesToShow: 4,
//   slidesToScroll: 2,
//   // prevArrow: $('.slider-1:before')
//   responsive: [
//     {
//       breakpoint: 1440,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2,
//         infinite: false,
//         dots: false,
//         variablewidth: false,
//       },
//     },
//     {
//       breakpoint: 768,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2,
//       },
//     },
//     {
//       breakpoint: 375,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 1,
//       },
//     },
//     // You can unslick at a given breakpoint now by adding:
//     // settings: "unslick"
//     // instead of a settings object
//   ],
// });

$('.main-restaurant-slider').slick({
  dots: false,
  infinite: false,
  speed: 1300,
  variableWidth: true, // изменение ширины слайдов
  centerMode: false, // выравнивание по центру
  slidesToShow: 5,
  slidesToScroll: 1,
  prevArrow: $('.my-prev-arrow'),
  nextArrow: $('.my-next-arrow'),
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false,
        dots: false,
        variableWidth: false,
        centerMode: false,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 375,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
});

$;
$('.main-restaurant-slider').on(
  'beforeChange',
  function (event, slick, currentSlide, nextSlide) {
    var arrowPrev = $('.my-prev-arrow');
    var arrowNext = $('.my-next-arrow');
    var grayArrow = $('.gray-arrow');
    var lastSlide = slick.slideCount - 1;

    if (nextSlide === 0) {
      arrowPrev.addClass('gray-arrow');
    } else if (currentSlide === 0) {
      arrowPrev.removeClass('gray-arrow');
    }

    if (nextSlide === lastSlide) {
      arrowNext.addClass('gray-arrow');
    } else if (currentSlide === lastSlide) {
      arrowNext.removeClass('gray-arrow');
    }

    if (!slick.options.infinite) {
      if (nextSlide === lastSlide) {
        arrowNext.addClass('gray-arrow');
      } else if (currentSlide === lastSlide) {
        arrowNext.removeClass('gray-arrow');
      }
    }
  }
);
