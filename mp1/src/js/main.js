// Espera a que cargue el DOM
document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.navbar');

  // Inicializa como grande
  navbar.classList.add('navbar--large');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
      navbar.classList.remove('navbar--large');
      navbar.classList.add('navbar--small');
    } else {
      navbar.classList.remove('navbar--small');
      navbar.classList.add('navbar--large');
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector('.carousel__track');
  const slides = Array.from(track.children);
  const nextBtn = document.querySelector('.carousel__btn--next');
  const prevBtn = document.querySelector('.carousel__btn--prev');
  let currentIndex = 0;

  function updateSlide(position) {
    const slideWidth = slides[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${slideWidth * position}px)`;

    slides.forEach(slide => slide.classList.remove('current-slide'));
    slides[position].classList.add('current-slide');
  }

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlide(currentIndex);
  });

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlide(currentIndex);
  });

  // Set initial slide position (for responsive)
  window.addEventListener('resize', () => updateSlide(currentIndex));
});



/* Modal functionality */

const products = [
  {
    id: 1,
    title: "Cheesecake",
    desc: "A smooth and creamy cheesecake with a buttery biscuit base.Baked to perfection for a rich, melt-in-your-mouth experience.Topped with a light dusting of powdered sugar or seasonal fruit.",
    img: "assets/cake 1.jpg"
  },
  {
    id: 2,
    title: "Chocolate Cake",
    desc: "Decadent chocolate sponge layered with dark chocolate ganache.Moist, rich, and crafted for true chocolate lovers.Perfect for celebrations or indulgent moments.",
    img: "assets/cake 2.jpg"
  },
  {
    id: 3,
    title: "Muffins",
    desc: "Fluffy muffins baked fresh daily in assorted flavors.From blueberry to chocolate chip, each bite is delightful.Golden tops and soft centers make them irresistible.",
    img: "assets/cake 3.jpg"
  },
  {
    id: 4,
    title: "Chocolate Cookies",
    desc: "Crispy on the outside, soft and gooey inside.Packed with premium chocolate chunks for every chocoholic.Freshly baked with love and a pinch of sea salt.",
    img: "assets/cake 4.jpg"
  },
  {
    id: 5,
    title: "Pistachio Croissant",
    desc: "Flaky French-style croissant filled with creamy pistachio spread.Topped with crushed pistachios for added crunch and aroma.A delicate twist on a timeless classic.",
    img: "assets/cake 5.jpg"
  },
  {
    id: 6,
    title: "Chocolate Pastry",
    desc: "Layered puff pastry wrapped around rich chocolate filling.Golden, crisp exterior with a warm, molten center.A bakery favorite that satisfies every sweet craving.",
    img: "assets/cake 6.jpg"
  }
];

const modal = document.getElementById("product-modal");
const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-desc");
const closeBtn = document.querySelector(".close-btn");

document.querySelectorAll(".product-card").forEach(card => {
  card.addEventListener("click", () => {
    const id = +card.dataset.product;
    const product = products.find(p => p.id === id);
    if (product) {
      modalImg.src = product.img;
      modalTitle.textContent = product.title;
      modalDesc.textContent = product.desc;
      modal.classList.add("active");//
    }
  });
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("active");
});

window.addEventListener("click", e => {
  if (e.target === modal) {
    modal.classList.remove("active");
  }
});
// End of modal functionality

// Smooth scrolling for navigation links
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');
const navbar = document.querySelector('.navbar');

function updateActiveLink() {
  const scrollY = window.scrollY;
  const navHeight = navbar.offsetHeight;
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - navHeight;
    const sectionHeight = section.offsetHeight;

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });

  // Si estás al final de la página, fuerza el último item
  if ((window.innerHeight + scrollY) >= document.body.offsetHeight - 2) {
    current = 'contact';
  }

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', updateActiveLink);
window.addEventListener('load', updateActiveLink);
