$('.main-restaurant-slider').slick({
  dots: false,
  infinite: false,
  speed: 1300,
  variablewidth: false,
  slidesToShow: 5,
  slidesToScroll: 2,
  // prevArrow: $('.slider-1:before')
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: false,
        dots: false,
        variablewidth: false,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 375,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});
