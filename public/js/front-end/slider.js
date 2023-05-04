$(document).ready(function () {
  ["attraction-slide", "social-post-slide"].forEach((item) => {
    let elem = document.getElementsByClassName(item);
    if (typeof elem !== "undefined" && elem !== null) {
      $(`.${item}`).slick({
        dots: false,
        arrows: true,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: true,
              centerPadding: "0",
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: true,
              centerPadding: "0",
            },
          },
        ],
      });
    }
  });

  let galleryElem = document.getElementsByClassName("gallery-slide");
  if (typeof galleryElem !== "undefined" && galleryElem !== null) {
    $(".gallery-slide").slick({
      dots: false,
      arrows: true,
      infinite: false,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }

  ["festival-slide", "promo-slide", "heritage-slide"].forEach((item) => {
    let elem = document.getElementsByClassName(item);
    if (typeof elem !== "undefined" && elem !== null) {
      $(`.${item}`).slick({
        arrows: true,
        speed: 1500,
        fade: true,
        autoplay: true,
        autoplaySpeed: 3000,
        adaptiveHeight: false,
        centerMode: true,
        centerPadding: "0",
        infinite: false,
        slidesToShow: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true,
            },
          },

          {
            breakpoint: 600,
            settings: {
              arrows: true,
              slidesToShow: 1,
              centerMode: true,
              centerPadding: "0",
            },
          },
          {
            breakpoint: 480,
            settings: {
              arrows: true,
              slidesToShow: 1,
              centerMode: true,
              centerPadding: "0",
            },
          },
        ],
      });
    }
  });

  let destinationElem = document.getElementsByClassName("destination-slide");
  if (typeof destinationElem !== "undefined" && destinationElem !== null) {
    $(`.destination-slide`).slick({
      dots: true,
      infinite: false,
      speed: 800,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            dots: false,
            arrows: true,
            slidesToShow: 2,
            slidesToScroll: 2,
            centerMode: true,
            centerPadding: "0",
          },
        },
        {
          breakpoint: 480,
          settings: {
            dots: false,
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: "0",
          },
        },
      ],
    });
  }

  ["event-slide", "card-slide", "card-slide-3", "things-slide"].forEach(
    (item) => {
      let elem = document.getElementsByClassName(item);
      if (typeof elem !== "undefined" && elem !== null) {
        $(`.${item}`).slick({
          dots: false,
          infinite: false,
          speed: 800,
          //cssEase: "linear",
          slidesToShow: 3,
          slidesToScroll: 3,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true,
              },
            },
            {
              breakpoint: 600,
              settings: {
                arrows: true,
                slidesToShow: 2,
                slidesToScroll: 2,
              },
            },
            {
              breakpoint: 480,
              settings: {
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ],
        });
      }
    }
  );

  ["exp-slide", "card-slide-4", "plan-slide"].forEach((item) => {
    let elem = document.getElementsByClassName(item);
    if (typeof elem !== "undefined" && elem !== null) {
      $(`.${item}`).slick({
        dots: false,
        arrows: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              arrows: true,
              slidesToShow: 2,
              slidesToScroll: 2,
              centerMode: true,
              centerPadding: "0",
            },
          },
          {
            breakpoint: 480,
            settings: {
              arrows: true,
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: true,
              centerPadding: "0",
            },
          },
        ],
      });
    }
  });

  let promoElem = document.getElementsByClassName("promo-slide");
  if (typeof promoElem !== "undefined" && promoElem !== null) {
    $(".promo-slide").slick({
      dots: false,
      arrows: true,
      infinite: false,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }

});
