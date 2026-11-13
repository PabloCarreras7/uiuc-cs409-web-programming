// Espera a que cargue el DOM
document.addEventListener('DOMContentLoaded', function () {
  var navbar = document.querySelector('.navbar'); // Inicializa como grande

  navbar.classList.add('navbar--large');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 80) {
      navbar.classList.remove('navbar--large');
      navbar.classList.add('navbar--small');
    } else {
      navbar.classList.remove('navbar--small');
      navbar.classList.add('navbar--large');
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var track = document.querySelector('.carousel__track');
  var slides = Array.from(track.children);
  var nextBtn = document.querySelector('.carousel__btn--next');
  var prevBtn = document.querySelector('.carousel__btn--prev');
  var currentIndex = 0;

  function updateSlide(position) {
    var slideWidth = slides[0].getBoundingClientRect().width;
    track.style.transform = "translateX(-".concat(slideWidth * position, "px)");
    slides.forEach(function (slide) {
      return slide.classList.remove('current-slide');
    });
    slides[position].classList.add('current-slide');
  }

  nextBtn.addEventListener('click', function () {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlide(currentIndex);
  });
  prevBtn.addEventListener('click', function () {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlide(currentIndex);
  }); // Set initial slide position (for responsive)

  window.addEventListener('resize', function () {
    return updateSlide(currentIndex);
  });
});
/* Modal functionality */

var products = [{
  id: 1,
  title: "Cheesecake",
  desc: "A smooth and creamy cheesecake with a buttery biscuit base.Baked to perfection for a rich, melt-in-your-mouth experience.Topped with a light dusting of powdered sugar or seasonal fruit.",
  img: "assets/cake 1.jpg"
}, {
  id: 2,
  title: "Chocolate Cake",
  desc: "Decadent chocolate sponge layered with dark chocolate ganache.Moist, rich, and crafted for true chocolate lovers.Perfect for celebrations or indulgent moments.",
  img: "assets/cake 2.jpg"
}, {
  id: 3,
  title: "Muffins",
  desc: "Fluffy muffins baked fresh daily in assorted flavors.From blueberry to chocolate chip, each bite is delightful.Golden tops and soft centers make them irresistible.",
  img: "assets/cake 3.jpg"
}, {
  id: 4,
  title: "Chocolate Cookies",
  desc: "Crispy on the outside, soft and gooey inside.Packed with premium chocolate chunks for every chocoholic.Freshly baked with love and a pinch of sea salt.",
  img: "assets/cake 4.jpg"
}, {
  id: 5,
  title: "Pistachio Croissant",
  desc: "Flaky French-style croissant filled with creamy pistachio spread.Topped with crushed pistachios for added crunch and aroma.A delicate twist on a timeless classic.",
  img: "assets/cake 5.jpg"
}, {
  id: 6,
  title: "Chocolate Pastry",
  desc: "Layered puff pastry wrapped around rich chocolate filling.Golden, crisp exterior with a warm, molten center.A bakery favorite that satisfies every sweet craving.",
  img: "assets/cake 6.jpg"
}];
var modal = document.getElementById("product-modal");
var modalImg = document.getElementById("modal-img");
var modalTitle = document.getElementById("modal-title");
var modalDesc = document.getElementById("modal-desc");
var closeBtn = document.querySelector(".close-btn");
document.querySelectorAll(".product-card").forEach(function (card) {
  card.addEventListener("click", function () {
    var id = +card.dataset.product;
    var product = products.find(function (p) {
      return p.id === id;
    });

    if (product) {
      modalImg.src = product.img;
      modalTitle.textContent = product.title;
      modalDesc.textContent = product.desc; //modal.classList.add("active");//
    }
  });
});
closeBtn.addEventListener("click", function () {
  modal.classList.remove("active");
});
window.addEventListener("click", function (e) {
  if (e.target === modal) {
    modal.classList.remove("active");
  }
}); // End of modal functionality
// Smooth scrolling for navigation links

var sections = document.querySelectorAll('section[id]');
var navLinks = document.querySelectorAll('.nav-link');
var navbar = document.querySelector('.navbar');

function updateActiveLink() {
  var scrollY = window.scrollY;
  var navHeight = navbar.offsetHeight;
  var current = '';
  sections.forEach(function (section) {
    var sectionTop = section.offsetTop - navHeight;
    var sectionHeight = section.offsetHeight;

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  }); // Si estás al final de la página, fuerza el último item

  if (window.innerHeight + scrollY >= document.body.offsetHeight - 2) {
    current = 'contact';
  }

  navLinks.forEach(function (link) {
    link.classList.remove('active');

    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', updateActiveLink);
window.addEventListener('load', updateActiveLink);