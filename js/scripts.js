window.onload = function() {
    var images = Array.from(document.querySelectorAll('.swiper-slide img')); // 모든 이미지 요소를 가져옵니다.
    var loadedImagesCount = 0; // 로드된 이미지의 수를 저장하는 변수를 초기화합니다.
  
    images.forEach(function(img) {
      var image = new Image(); // 새 Image 객체를 생성합니다.
      image.src = img.src; // 이미지의 src 속성을 설정합니다.
  
      image.onload = function() { // 이미지가 로드되면 실행될 콜백 함수를 설정합니다.
        loadedImagesCount++; // 로드된 이미지의 수를 증가시킵니다.
  
        if (loadedImagesCount === images.length) { // 모든 이미지가 로드되면 Swiper 객체를 초기화합니다.
          var swiper = new Swiper('.mySwiper', {
            slidesPerView: 1,
            spaceBetween: 10,
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
          });
        }
      };
    });
  };