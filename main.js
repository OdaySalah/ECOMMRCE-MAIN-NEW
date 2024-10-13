// إيقاف تشغيل السلايدر عند تمرير الماوس واستئنافه عند إزالته
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    640: {
      slidesPerView: 3, // عرض 2 كارد عند حجم شاشة 640 بكسل
      spaceBetween: 10
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 10
    }
  }
});

// إيقاف التشغيل عند تمرير الماوس
document.querySelector(".mySwiper").addEventListener("mouseenter", function() {
  swiper.autoplay.stop();
});

// استئناف التشغيل عند إزالة الماوس
document.querySelector(".mySwiper").addEventListener("mouseleave", function() {
  swiper.autoplay.start();
});

document.querySelectorAll(".description").forEach(function(desc) {
  const fullText = desc.getAttribute("data-full");
  const maxLength = 50; // عدد الأحرف المسموح به
  if (fullText.length > maxLength) {
    const shortText = fullText.substring(0, maxLength) + "...";
    desc.textContent = shortText;
  }
});

// الحصول على جميع العناصر التي تحتوي على الوصف
const descriptions = document.querySelectorAll(".description");

// إضافة الأحداث لكل عنصر وصف
descriptions.forEach(description => {
  const fullText = description.getAttribute("data-full"); // النص الكامل
  const shortText = description.textContent; // النص المختصر

  // إظهار النص الكامل عند تمرير الماوس
  description.addEventListener("mouseenter", function() {
    description.textContent = fullText;
    description.classList.add("full");

    // إضافة كلاس للتحكم بالستايل
  });

  // إرجاع النص المختصر عند إزالة الماوس
  description.addEventListener("mouseleave", function() {
    description.textContent = shortText;
    description.classList.remove("full");
    // إزالة الكلاس
  });
});

var swiperswp = new Swiper(".slide-swp", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true
  },
  autoplay: {
    delay: 4500,
    disableOnInteraction: false
  },
  loop: true
});

var swiperdeals = new Swiper(".deals", {
  slidesPerView: 1,
  spaceBetween: 20,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  loop: true,
  breakpoints: {
    1024: {
      slidesPerView: 2,
      spaceBetween: 30
    }
  }
});

var swiperimg = new Swiper(".sale-sec", {
  slidesPerView: 4,
  spaceBetween: 30,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  loop: true,
  breakpoints: {
    1400: {
      slidesPerView: 4
    },
    1100: {
      slidesPerView: 3
    },
    800: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    700: {
      slidesPerView: 2,
      spaceBetween: 15
    },
    0: {
      slidesPerView: 2,
      spaceBetween: 10
    }
  }
});
let btnCloseSide = document.getElementById("btn-close");
let sideBar = document.getElementById("side-bar");
let btnOpenSide = document.getElementById("open-side");

btnOpenSide.onclick = () => {
  sideBar.classList.add("active");
};
btnCloseSide.onclick = () => {
  sideBar.classList.remove("active");
};
/* side bar in Resbonsive */

let bigImage = document.getElementById("big-img");

function myProduct(item) {
  bigImage.src = item;
}

// product page
//buy fast order

let btnbuyNowF = document.querySelector(".buyNow");
let divcretAcBuyF = document.querySelector(".creatacountfast");

btnbuyNowF.onclick = () => {
  divcretAcBuyF.classList.toggle("active");
};
