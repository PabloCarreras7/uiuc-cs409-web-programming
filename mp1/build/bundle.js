/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./css/main.scss":
/*!*************************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./css/main.scss ***!
  \*************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "../node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "../node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/home.jpeg */ "./assets/home.jpeg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/professional-2.jpeg */ "./assets/professional-2.jpeg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body, html {
  margin: 0;
  padding: 0;
  font-family: "Segoe UI", sans-serif;
  scroll-behavior: smooth;
}

h1 {
  font-size: clamp(1.5rem, 4vw, 3rem);
  line-height: 1.2;
  margin-bottom: 1rem;
}

h2 {
  font-size: clamp(1.25rem, 3vw, 2.5rem);
  line-height: 1.3;
  margin-bottom: 1rem;
}

p {
  font-size: clamp(1rem, 2vw, 1.25rem);
  line-height: 1.6;
  max-width: 65ch;
  margin-bottom: 1.5rem;
}

.section {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: clamp(1rem, 4vw, 4rem);
}

.fade-in {
  opacity: 0;
  animation: fadeIn 0.5s ease forwards;
  animation-delay: 0.5s;
  text-align: center;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}
.section--hero {
  position: relative;
  height: 80vh;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: scroll;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.section--hero::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 0;
}
.section--hero .hero-content {
  position: relative;
  z-index: 1;
  color: #ffffff;
}
.section--hero .hero-content h1 {
  font-size: clamp(2rem, 6vw, 4rem);
  line-height: 1.2;
  padding: 0 1rem;
}

.section--portfolio {
  background-color: #f0be74;
  color: #2c3e50;
  text-align: center;
}
.section--portfolio h2 {
  margin-bottom: 3rem;
  color: #2c3e50;
  font-size: clamp(1.25rem, 3vw, 2.5rem);
}

.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: 2rem;
  width: 100%;
  max-width: 1000px;
}

.product-card {
  background: #ffffff;
  border-radius: 0.5rem;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  text-align: center;
}
.product-card:hover {
  transform: scale(1.03);
}
.product-card img {
  width: 100%;
  aspect-ratio: 4/3;
  -o-object-fit: cover;
     object-fit: cover;
  display: block;
}
.product-card h3 {
  margin: 0;
  padding: 1rem;
  font-size: 1.1rem;
  color: #2c3e50;
}

.section--carousel {
  background-color: #e6d9a5;
  color: #2c3e50;
  text-align: center;
  padding: 0;
  width: 100%;
  box-sizing: border-box;
}
.section--carousel h2 {
  margin-bottom: 2rem;
}

.section--info {
  position: relative;
  padding: 4rem 2rem;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
  background-size: cover;
  background-position: center right;
  background-repeat: no-repeat;
  background-attachment: fixed;
  text-align: center;
  display: block;
  align-items: stretch;
  box-sizing: border-box;
}
.section--info::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.55);
  z-index: 0;
}
.section--info > * {
  position: relative;
  z-index: 1;
}
.section--info h2 {
  font-size: clamp(2rem, 4vw, 3rem);
  margin-bottom: 3rem;
  color: #2c3e50;
}
.section--info .info-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  align-items: start;
  box-sizing: border-box;
}
.section--info .info-grid .info-block {
  padding: 1rem 1.5rem;
  box-sizing: border-box;
  min-width: 0;
  width: 100%;
}
.section--info .info-grid .info-block h3 {
  color: #2c3e50;
}
.section--info .info-grid .info-block p {
  color: #2c3e50;
}
.section--info .info-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto 1rem;
  display: block;
}
.section--info .info-icon img {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
     object-fit: cover;
  display: block;
}

.carousel {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  overflow: hidden;
  box-sizing: border-box;
}

.carousel__track-container {
  overflow: hidden;
}

.carousel__track {
  display: flex;
  transition: transform 0.5s ease-in-out;
  padding: 0;
  margin: 0;
}

.carousel__slide {
  min-width: 100%;
  display: flex;
  justify-content: center;
  padding: 1.5rem 0;
  box-sizing: border-box;
}

.carousel__content {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
}

.carousel__content--horizontal {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
}

@media (max-width: 768px) {
  .carousel__content {
    flex-direction: column;
    text-align: center;
  }
}
.carousel__content--vertical {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  max-width: 800px;
  margin: 0 auto;
}

.carousel__text {
  flex: 0 0 55%;
  padding: 1.5rem 2rem;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  max-width: 60ch;
  flex: 1 1 0;
  min-width: 0;
  color: #2c3e50;
}
.carousel__text h3 {
  font-size: clamp(1.5rem, 3vw, 2rem);
  margin-bottom: 0.5rem;
}
.carousel__text p {
  font-size: clamp(1rem, 2vw, 1.2rem);
  line-height: 1.6;
  max-width: 60ch;
}

.carousel__image-wrapper {
  flex: 0 0 45%;
  max-width: 420px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.carousel__image-wrapper img {
  width: 420px;
  height: auto;
  -o-object-fit: cover;
     object-fit: cover;
  display: block;
  border-radius: 8px;
}

.carousel__btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.9);
  border: none;
  font-size: 1.6rem;
  cursor: pointer;
  width: 56px;
  height: 56px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0;
  border-radius: 6px;
  z-index: 20;
}

.carousel__btn:hover {
  background: #1abc9c;
  color: white;
}

.carousel__btn--prev {
  left: 16px;
}

.carousel__btn--next {
  right: 16px;
}

@media (max-width: 768px) {
  .carousel {
    width: 100%;
    margin-left: 0;
    margin-right: 0;
  }
  .carousel__content {
    flex-direction: column;
  }
  .carousel__text, .carousel__image-wrapper {
    flex: 0 0 auto;
    width: 100%;
  }
  .carousel__btn {
    width: 48px;
    height: 48px;
    font-size: 1.2rem;
    left: 8px !important;
    right: 8px !important;
  }
}
.section--about {
  background-color: #16a085;
  color: #ffffff;
}

.section--contact {
  background-color: #f0be74;
  color: #2c3e50;
}

.section--footer {
  background-color: #2c3e50;
  color: #ffffff;
  padding: 1rem;
  min-height: auto;
}

.modal {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  display: none;
  z-index: 999;
}
.modal.active {
  display: flex;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.modal .modal-content {
  background: #f0be74;
  padding: 2rem;
  border-radius: 0.5rem;
  max-width: 400px;
  width: 100%;
  text-align: center;
  position: relative;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}
.modal .modal-content img {
  width: 100%;
  max-height: 300px;
  -o-object-fit: cover;
     object-fit: cover;
  -o-object-position: center;
     object-position: center;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
}
.modal .modal-content h3 {
  margin: 1rem 0 0.5rem;
  color: #2c3e50;
}
.modal .modal-content p {
  color: #2c3e50;
  font-size: 1rem;
}
.modal .modal-content .close-btn {
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 1.5rem;
  cursor: pointer;
  color: #2c3e50;
}

.navbar {
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
  background-color: #2c3e50;
  color: #ffffff;
  padding: 0.75rem 1.5rem;
  transition: padding 0.3s ease;
}
.navbar--large {
  padding: 2rem 1.5rem;
}
.navbar--large .navbar__brand {
  font-size: 1.5rem;
}
.navbar--large .navbar__logo {
  height: clamp(2.5rem, 5vw, 4.5rem);
}
.navbar--large .navbar__menu a {
  font-size: 1rem;
}
.navbar--small {
  padding: 0.75rem 1.5rem;
}
.navbar--small .navbar__brand {
  font-size: 1.1rem;
  transition: font-size 0.3s ease;
}
.navbar--small .navbar__logo {
  height: 2rem;
  transition: height 0.3s ease;
}
.navbar--small .navbar__menu a {
  font-size: 0.875rem;
  transition: font-size 0.3s ease;
}
.navbar .navbar__inner {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.navbar .navbar__brand {
  color: #ffffff;
  text-decoration: none;
  font-weight: 700;
  letter-spacing: 0.4px;
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.navbar .navbar__logo {
  height: clamp(2.5rem, 5vw, 4.5rem);
  width: auto;
  display: block;
}
.navbar .navbar__menu {
  list-style: none;
  display: flex;
  gap: 1.5rem;
  margin: 0;
  padding: 0;
}
.navbar .navbar__menu a {
  color: #ffffff;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;
}
.navbar .navbar__menu a:hover {
  color: #1abc9c;
}

.nav-link {
  color: white;
  text-decoration: none;
  position: relative;
}
.nav-link.active {
  font-weight: bold;
  border-bottom: 2px solid white;
}

.video-wrapper {
  position: relative;
  width: 100%;
  max-width: 900px;
  aspect-ratio: 16/9;
  margin: 0 auto;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}
.video-wrapper iframe {
  width: 100%;
  height: 100%;
  border: none;
}

.footer {
  background-color: #2c3e50;
  padding: 2rem;
  color: #ffffff;
  text-align: left;
}
.footer .footer__social-list {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  max-width: 200px;
  margin: 0 auto;
}
.footer .social-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.2rem;
}
.footer .social-item img {
  width: 24px;
  height: 24px;
}
.footer .social-item span {
  font-size: 1rem;
  color: #ffffff;
}

@media (max-width: 1024px) {
  .portfolio-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 768px) {
  .navbar__inner {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
  .navbar__menu {
    flex-direction: column;
    gap: 0.75rem;
    padding: 1rem 0;
    width: 100%;
  }
  .navbar__menu a {
    font-size: 0.95rem;
  }
  .navbar__brand {
    font-size: 1rem;
  }
  .navbar {
    padding: 1rem;
  }
}
@media (max-width: 720px) {
  .portfolio-grid {
    grid-template-columns: 1fr;
  }
}`, "",{"version":3,"sources":["webpack://./css/main.scss"],"names":[],"mappings":"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","sourcesContent":["// variables\r\n$clr-bg-hero-overlay: rgba(0, 0, 0, 0.4);\r\n$clr-overlay-info: rgba(255, 255, 255, 0.55);\r\n$clr-portfolio-bg: #f0be74;\r\n$clr-carousel-bg: #e6d9a5;\r\n$clr-footer-bg: #2c3e50;\r\n$clr-text-dark: #2c3e50;\r\n$clr-white: #ffffff;\r\n$transition-default: 0.2s ease;\r\n$shadow-default: 0 4px 10px rgba(0, 0, 0, 0.15);\r\n\r\n// mixin\r\n@mixin flex-center($dir: row) {\r\n  display: flex;\r\n  flex-direction: $dir;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n// global reset & typography\r\nbody, html {\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: \"Segoe UI\", sans-serif;\r\n  scroll-behavior: smooth;\r\n}\r\n\r\nh1 {\r\n  font-size: clamp(1.5rem, 4vw, 3rem);\r\n  line-height: 1.2;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\nh2 {\r\n  font-size: clamp(1.25rem, 3vw, 2.5rem);\r\n  line-height: 1.3;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\np {\r\n  font-size: clamp(1rem, 2vw, 1.25rem);\r\n  line-height: 1.6;\r\n  max-width: 65ch;\r\n  margin-bottom: 1.5rem;\r\n}\r\n\r\n// section base\r\n.section {\r\n  min-height: 100vh;\r\n  @include flex-center(column);\r\n  text-align: center;\r\n  padding: clamp(1rem, 4vw, 4rem);\r\n}\r\n\r\n// fade-in animation\r\n.fade-in {\r\n  opacity: 0;\r\n  animation: fadeIn 0.5s ease forwards;\r\n  animation-delay: 0.5s;\r\n  text-align: center;\r\n}\r\n\r\n@keyframes fadeIn {\r\n  to {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n// Hero Section\r\n.section--hero {\r\n  position: relative;\r\n  height: 80vh;\r\n  background-image: url('../assets/home.jpeg');\r\n  background-size: cover;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-attachment: scroll;\r\n\r\n  @include flex-center(row);\r\n\r\n  &::before {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0; right: 0; bottom: 0;\r\n    background: $clr-bg-hero-overlay;\r\n    z-index: 0;\r\n  }\r\n\r\n  .hero-content {\r\n    position: relative;\r\n    z-index: 1;\r\n    color: $clr-white;\r\n\r\n    h1 {\r\n      font-size: clamp(2rem, 6vw, 4rem);\r\n      line-height: 1.2;\r\n      padding: 0 1rem;\r\n    }\r\n  }\r\n}\r\n\r\n// Portfolio Section\r\n.section--portfolio {\r\n  background-color: $clr-portfolio-bg;\r\n  color: $clr-text-dark;\r\n  text-align: center;\r\n\r\n  h2 {\r\n    margin-bottom: 3rem;\r\n    color: $clr-text-dark;\r\n    font-size: clamp(1.25rem, 3vw, 2.5rem);\r\n  }\r\n}\r\n\r\n.portfolio-grid {\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  gap: 1.5rem;\r\n  margin-top: 2rem;\r\n  width: 100%;\r\n  max-width: 1000px;\r\n}\r\n\r\n.product-card {\r\n  background: $clr-white;\r\n  border-radius: 0.5rem;\r\n  overflow: hidden;\r\n  cursor: pointer;\r\n  transition: transform $transition-default;\r\n  box-shadow: $shadow-default;\r\n  text-align: center;\r\n\r\n  &:hover {\r\n    transform: scale(1.03);\r\n  }\r\n\r\n  img {\r\n    width: 100%;\r\n    aspect-ratio: 4 / 3;\r\n    object-fit: cover;\r\n    display: block;\r\n  }\r\n\r\n  h3 {\r\n    margin: 0;\r\n    padding: 1rem;\r\n    font-size: 1.1rem;\r\n    color: $clr-text-dark;\r\n  }\r\n}\r\n\r\n// Carousel Section\r\n.section--carousel {\r\n  background-color: $clr-carousel-bg;\r\n  color: $clr-text-dark;\r\n  text-align: center;\r\n  padding: 0;\r\n  width: 100%;\r\n  box-sizing: border-box;\r\n\r\n  h2 {\r\n    margin-bottom: 2rem;\r\n  }\r\n}\r\n\r\n// Info Section\r\n.section--info {\r\n  position: relative;\r\n  padding: 4rem 2rem;\r\n  background-image: url('../assets/professional-2.jpeg');\r\n  background-size: cover;\r\n  background-position: center right;\r\n  background-repeat: no-repeat;\r\n  background-attachment: fixed;\r\n  text-align: center;\r\n  display: block;\r\n  align-items: stretch;\r\n  box-sizing: border-box;\r\n\r\n  &::before {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: 0; left: 0; right: 0; bottom: 0;\r\n    background: $clr-overlay-info;\r\n    z-index: 0;\r\n  }\r\n\r\n  > * {\r\n    position: relative;\r\n    z-index: 1;\r\n  }\r\n\r\n  h2 {\r\n    font-size: clamp(2rem, 4vw, 3rem);\r\n    margin-bottom: 3rem;\r\n    color: $clr-text-dark;\r\n  }\r\n\r\n  .info-grid {\r\n    display: grid;\r\n    grid-template-columns: repeat(3, minmax(0, 1fr));\r\n    gap: 2rem;\r\n    max-width: 1200px;\r\n    margin: 0 auto;\r\n    width: 100%;\r\n    align-items: start;\r\n    box-sizing: border-box;\r\n  }\r\n\r\n  .info-grid {\r\n    .info-block {\r\n      padding: 1rem 1.5rem;\r\n      box-sizing: border-box;\r\n      min-width: 0;\r\n      width: 100%;\r\n\r\n      h3 {\r\n        color: $clr-text-dark;\r\n      }\r\n      p {\r\n        color: $clr-text-dark;\r\n      }\r\n    }\r\n  }\r\n\r\n  .info-icon {\r\n    width: 60px;\r\n    height: 60px;\r\n    border-radius: 50%;\r\n    overflow: hidden;\r\n    margin: 0 auto 1rem;\r\n    display: block;\r\n\r\n    img {\r\n      width: 100%;\r\n      height: 100%;\r\n      object-fit: cover;\r\n      display: block;\r\n    }\r\n  }\r\n}\r\n\r\n// Carousel Styles\r\n.carousel {\r\n  position: relative;\r\n  max-width: 1200px;\r\n  margin: 0 auto;\r\n  overflow: hidden;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.carousel__track-container {\r\n  overflow: hidden;\r\n}\r\n\r\n.carousel__track {\r\n  display: flex;\r\n  transition: transform 0.5s ease-in-out;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n.carousel__slide {\r\n  min-width: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  padding: 1.5rem 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.carousel__content {\r\n  @include flex-center(row);\r\n  gap: 2rem;\r\n  max-width: 1000px;\r\n  width: 100%;\r\n  margin: 0 auto;\r\n  justify-content: center;\r\n}\r\n\r\n.carousel__content--horizontal {\r\n  @include flex-center(row);\r\n  gap: 2rem;\r\n  max-width: 1000px;\r\n  width: 100%;\r\n  margin: 0 auto;\r\n  justify-content: center;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .carousel__content {\r\n    flex-direction: column;\r\n    text-align: center;\r\n  }\r\n}\r\n\r\n.carousel__content--vertical {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 1.5rem;\r\n  max-width: 800px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.carousel__text {\r\n  flex: 0 0 55%;\r\n  padding: 1.5rem 2rem;\r\n  text-align: left;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  box-sizing: border-box;\r\n  max-width: 60ch;\r\n  flex: 1 1 0;\r\n  min-width: 0;\r\n\r\n  color: $clr-text-dark;\r\n\r\n  h3 {\r\n    font-size: clamp(1.5rem, 3vw, 2rem);\r\n    margin-bottom: 0.5rem;\r\n  }\r\n  p {\r\n    font-size: clamp(1rem, 2vw, 1.2rem);\r\n    line-height: 1.6;\r\n    max-width: 60ch;\r\n  }\r\n}\r\n\r\n.carousel__image-wrapper {\r\n  flex: 0 0 45%;\r\n  max-width: 420px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n\r\n  img {\r\n    width: 420px;\r\n    height: auto;\r\n    object-fit: cover;\r\n    display: block;\r\n    border-radius: 8px;\r\n  }\r\n}\r\n\r\n.carousel__btn {\r\n  position: absolute;\r\n  top: 50%;\r\n  transform: translateY(-50%);\r\n  background: rgba(255, 255, 255, 0.9);\r\n  border: none;\r\n  font-size: 1.6rem;\r\n  cursor: pointer;\r\n  width: 56px;\r\n  height: 56px;\r\n  @include flex-center(row);\r\n  padding: 0;\r\n  border-radius: 6px;\r\n  z-index: 20;\r\n}\r\n\r\n.carousel__btn:hover {\r\n  background: #1abc9c;\r\n  color: white;\r\n}\r\n\r\n.carousel__btn--prev {\r\n  left: 16px;\r\n}\r\n\r\n.carousel__btn--next {\r\n  right: 16px;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .carousel {\r\n    width: 100%;\r\n    margin-left: 0;\r\n    margin-right: 0;\r\n  }\r\n  .carousel__content {\r\n    flex-direction: column;\r\n  }\r\n  .carousel__text, .carousel__image-wrapper {\r\n    flex: 0 0 auto;\r\n    width: 100%;\r\n  }\r\n  .carousel__btn {\r\n    width: 48px;\r\n    height: 48px;\r\n    font-size: 1.2rem;\r\n    left: 8px !important;\r\n    right: 8px !important;\r\n  }\r\n}\r\n\r\n// About / Contact and Footer Sections\r\n.section--about {\r\n  background-color: #16a085;\r\n  color: $clr-white;\r\n}\r\n.section--contact {\r\n  background-color: $clr-portfolio-bg;\r\n  color: $clr-text-dark;\r\n}\r\n.section--footer {\r\n  background-color: $clr-footer-bg;\r\n  color: $clr-white;\r\n  padding: 1rem;\r\n  min-height: auto;\r\n}\r\n\r\n// Modal Styles\r\n.modal {\r\n  position: fixed;\r\n  inset: 0;\r\n  background: rgba(0, 0, 0, 0.7);\r\n  display: none;\r\n  z-index: 999;\r\n\r\n  &.active {\r\n    display: flex;\r\n    @include flex-center(row);\r\n  }\r\n\r\n  .modal-content {\r\n    background: $clr-portfolio-bg;\r\n    padding: 2rem;\r\n    border-radius: 0.5rem;\r\n    max-width: 400px;\r\n    width: 100%;\r\n    text-align: center;\r\n    position: relative;\r\n    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);\r\n\r\n    img {\r\n      width: 100%;\r\n      max-height: 300px;\r\n      object-fit: cover;\r\n      object-position: center;\r\n      border-radius: 0.5rem;\r\n      margin-bottom: 1rem;\r\n    }\r\n\r\n    h3 {\r\n      margin: 1rem 0 0.5rem;\r\n      color: $clr-text-dark;\r\n    }\r\n\r\n    p {\r\n      color: $clr-text-dark;\r\n      font-size: 1rem;\r\n    }\r\n\r\n    .close-btn {\r\n      position: absolute;\r\n      top: 10px;\r\n      right: 15px;\r\n      font-size: 1.5rem;\r\n      cursor: pointer;\r\n      color: $clr-text-dark;\r\n    }\r\n  }\r\n}\r\n\r\n// Navbar Styles\r\n.navbar {\r\n  position: sticky;\r\n  top: 0;\r\n  z-index: 1000;\r\n  width: 100%;\r\n  background-color: $clr-footer-bg;\r\n  color: $clr_white;\r\n  padding: 0.75rem 1.5rem;\r\n  transition: padding 0.3s ease;\r\n\r\n  &--large {\r\n    padding: 2rem 1.5rem;\r\n\r\n    .navbar__brand {\r\n      font-size: 1.5rem;\r\n    }\r\n    .navbar__logo {\r\n      height: clamp(2.5rem, 5vw, 4.5rem);\r\n    }\r\n    .navbar__menu a {\r\n      font-size: 1rem;\r\n    }\r\n  }\r\n\r\n  &--small {\r\n    padding: 0.75rem 1.5rem;\r\n\r\n    .navbar__brand {\r\n      font-size: 1.1rem;\r\n      transition: font-size 0.3s ease;\r\n    }\r\n    .navbar__logo {\r\n      height: 2rem;\r\n      transition: height 0.3s ease;\r\n    }\r\n    .navbar__menu a {\r\n      font-size: 0.875rem;\r\n      transition: font-size 0.3s ease;\r\n    }\r\n  }\r\n\r\n  .navbar__inner {\r\n    max-width: 1200px;\r\n    margin: 0 auto;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n  }\r\n\r\n  .navbar__brand {\r\n    color: $clr_white;\r\n    text-decoration: none;\r\n    font-weight: 700;\r\n    letter-spacing: 0.4px;\r\n    font-size: 1.25rem;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 0.5rem;\r\n  }\r\n\r\n  .navbar__logo {\r\n    height: clamp(2.5rem, 5vw, 4.5rem);\r\n    width: auto;\r\n    display: block;\r\n  }\r\n\r\n  .navbar__menu {\r\n    list-style: none;\r\n    display: flex;\r\n    gap: 1.5rem;\r\n    margin: 0;\r\n    padding: 0;\r\n\r\n    a {\r\n      color: $clr_white;\r\n      text-decoration: none;\r\n      font-weight: 500;\r\n      transition: color $transition-default;\r\n\r\n      &:hover {\r\n        color: #1abc9c;\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n.nav-link {\r\n  color: white;\r\n  text-decoration: none;\r\n  position: relative;\r\n\r\n  &.active {\r\n    font-weight: bold;\r\n    border-bottom: 2px solid white;\r\n  }\r\n}\r\n\r\n// Video Section\r\n.video-wrapper {\r\n  position: relative;\r\n  width: 100%;\r\n  max-width: 900px;\r\n  aspect-ratio: 16 / 9;\r\n  margin: 0 auto;\r\n  border-radius: 0.5rem;\r\n  overflow: hidden;\r\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);\r\n\r\n  iframe {\r\n    width: 100%;\r\n    height: 100%;\r\n    border: none;\r\n  }\r\n}\r\n\r\n// Footer\r\n.footer {\r\n  background-color: $clr_footer-bg;\r\n  padding: 2rem;\r\n  color: $clr_white;\r\n  text-align: left;\r\n\r\n  .footer__social-list {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    gap: 1rem;\r\n    max-width: 200px;\r\n    margin: 0 auto;\r\n  }\r\n\r\n  .social-item {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 0.75rem;\r\n    font-size: 1.2rem;\r\n\r\n    img {\r\n      width: 24px;\r\n      height: 24px;\r\n    }\r\n\r\n    span {\r\n      font-size: 1rem;\r\n      color: $clr_white;\r\n    }\r\n  }\r\n}\r\n\r\n// Responsive adjustments\r\n@media (max-width: 1024px) {\r\n  .portfolio-grid {\r\n    grid-template-columns: repeat(2, 1fr);\r\n  }\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .navbar__inner {\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    gap: 1rem;\r\n  }\r\n  .navbar__menu {\r\n    flex-direction: column;\r\n    gap: 0.75rem;\r\n    padding: 1rem 0;\r\n    width: 100%;\r\n  }\r\n  .navbar__menu a {\r\n    font-size: 0.95rem;\r\n  }\r\n  .navbar__brand {\r\n    font-size: 1rem;\r\n  }\r\n  .navbar {\r\n    padding: 1rem;\r\n  }\r\n}\r\n\r\n@media (max-width: 720px) {\r\n  .portfolio-grid {\r\n    grid-template-columns: 1fr;\r\n  }\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/***/ ((module) => {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/

module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!*************************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "../node_modules/html-loader/dist/runtime/getUrl.js":
/*!**********************************************************!*\
  !*** ../node_modules/html-loader/dist/runtime/getUrl.js ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!*********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!***********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!****************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!**********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./assets/cake 1.jpg":
/*!***************************!*\
  !*** ./assets/cake 1.jpg ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/jpeg;base64,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";

/***/ }),

/***/ "./assets/cake 2.jpg":
/*!***************************!*\
  !*** ./assets/cake 2.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "4d7dc25c7eba6d57d97a.jpg";

/***/ }),

/***/ "./assets/cake 3.jpg":
/*!***************************!*\
  !*** ./assets/cake 3.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "cff27201e0247a01946e.jpg";

/***/ }),

/***/ "./assets/cake 4.jpg":
/*!***************************!*\
  !*** ./assets/cake 4.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b437c28cd1fd58874d0e.jpg";

/***/ }),

/***/ "./assets/cake 5.jpg":
/*!***************************!*\
  !*** ./assets/cake 5.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "c54ab8c579ec85755d10.jpg";

/***/ }),

/***/ "./assets/cake 6.jpg":
/*!***************************!*\
  !*** ./assets/cake 6.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "267a273d0c238f49d0e0.jpg";

/***/ }),

/***/ "./assets/croissant-1.jpg":
/*!********************************!*\
  !*** ./assets/croissant-1.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fc4897cc1b0ab8ace3ce.jpg";

/***/ }),

/***/ "./assets/croissant-2.jpg":
/*!********************************!*\
  !*** ./assets/croissant-2.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "5a89662c9b9879ed79d2.jpg";

/***/ }),

/***/ "./assets/croissant-3.jpg":
/*!********************************!*\
  !*** ./assets/croissant-3.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "c96b230168a8e68d0f02.jpg";

/***/ }),

/***/ "./assets/home.jpeg":
/*!**************************!*\
  !*** ./assets/home.jpeg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f9d2f0def2756e4ba9ed.jpeg";

/***/ }),

/***/ "./assets/icons/facebook.jpg":
/*!***********************************!*\
  !*** ./assets/icons/facebook.jpg ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMHBhISEBASFREVFhIWFRUVFRUWFxUYFRgWFhkSFRcYHSghGBolHRUXITEhJSkrLi4uFx8zODMtNygtLjcBCgoKDg0OGxAQGi4mICYuLS0uLy0tLS8tKzItLS0uKzArLS0tLS0tLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tL//AABEIAOEA4QMBEQACEQEDEQH/xAAbAAEBAAIDAQAAAAAAAAAAAAAABwUGAQMEAv/EAEUQAAIBAgIECQgHCAAHAAAAAAABAgMRBAUGITFRBxIiQWFxcqGxExQyUoGRwtEmNDZTYpLBFRYjNUJzgrIkM0Njo9Li/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAQFBgMCAf/EADYRAQACAQMABwYGAgICAwAAAAABAgMEBRESITEyQVFxEzRhgZHRIjOxweHwQqEUFWLxI0Nj/9oADAMBAAIRAxEAPwC4gAAAAAAAADdkBh8fpLhsFdOopS3Q5XetRMxaDNk7I49UDNuWnxdtuZ+HW1/GadSf/JopdM3fuXzLDHtEf52+isy75b/66fViMRpRiq//AFeKt0Ipd+t95Mpt+nr/AI8+qvybnqr/AOXHpDwVcxrVvSrVX1zl8yRXBir2Vj6QjW1GW3evP1l55VHLa2+tnSIiHKZme2RTcdjfvHEETMO6nj6tJ8mtVXVOS8GeLYcdu2sfSHSubLXu3mPnL34fSXFUNleTW6SUu9q/eR76DT2/x+iTTctVTsvz69f8sthNOakX/FpRkt8W4v3P5kTJtNJ7luPVOxb5kj8ysT6f392fwGleGxbSc+JLdPV37Cvy7dnp4c+i0w7rp8nVzxPxZqE1Uimmmnsa1pkKYmJ4lYRMTHMPo+PoAAAAAAAAAAAAAAAA4b4qu9gJnhrWcaYUsG3GkvKT6PRXW+f2Fnp9syZOu/VH+1Rqt3x4vw4/xT/ppmZ55XzN/wASo+L6keTH3Lb7blzh0mLD3Y6/PxUGfW5s/ft1eUdUf31Y4kooAAAAAAAAAAezL80rZdO9KpKP4b3i+uL1HHLp8eWOLxz+v1d8Opy4Z5x2mP0+jccn01hXtHER4kvXXovr54lNqNrtXrxTzHl4r7S7zS34c0cT5+H8Nrp1FVgpRaaexp3TKqYms8Suq2i0cw+j4+gAAAAAAAAAAAAeHNs2pZTh+NVl1RWuUnuSO+DT3zW4pCPqdVj09elefvKdZ5pJVzaTV+JS5oLn6ZPnfcaLTaHHg6+2fP7Mtq9wy6ieOyvl92GJiA5uAuAuAuAuAuAuAuAuAuAuAuAuBkcnzytlFT+HK8OeD1xfyfSiNqNJjzx+KOvz8UvTazLp5/BPV5eCi5Hn1LOKXIdpr0oPaulb10md1OkyYJ6+zzanSa7HqY/D1T5MqRUwAAAAAAAAAAMHpJpFDJqVlaVaS5Md34pbl4k7R6K2eeeyvn9lfrtfXTRxHXaeyPumuOxs8fiHOrJyk+7oS5kaTHirjr0aRxDK5ct8tuleeZdFzo5FwFwFwFwFwFwFwFwFwFwFwFwFwFwFwPuhXlh6ylCTjJa01tR5tSLR0bRzD1S9qW6VZ4lRNFtKFmaVKraNbmexT6tz6DPa3QTh/HTrr+jT7fuUZ/wZOq3+p/n4NmKxbAAAAAAAAGD0o0gjkuGtG0q0vRju/HLo8SdotHOotzPdjt+yv1+ujTV4jrtPZH7ymGIryxNdznJylJ3bZpqUikRWvYyd72vabWnmZdZ6eQAAAAAAAAAAAAAAAAAAAOYzcJJp2a1prm6T5MRMcSRMxPMKPohpL+04eSqtKslqf3iXP2lzozuv0PsZ6dO7+jUbduHto9nfvR/v+WzlYtgAAAAAPBneaQyjASqT6ox55SexI76bBbPeKQj6rUVwY5vb/wBpLj8ZPH4uVSo7yk/duS6EazFirjpFK9kMdmy2y3m9u2XnPbkAAAAAAAAAAH1Tg6s7RTbfMldnyZiI5l9rWbTxEM5gtEMXilfiRgt9SVu5JvuIWTctPTx59Fhj2vU38OPWf/bLUuD+bXLxMV2YOXe5Ii23ivhT/f8ACXXY7/5Xj6fzDtfB9q1Yr/xf/Z4/7n/w/wB/w9/9H/8Ap/r+XTU4P6i9HEQfXBrwbPcbxTxpP1eLbHfwvH0/l462g2KgtToy6pyT74o7V3XBPbzHy/lwts+ojs4n5/wweZ5bVyuuoVo8WTV1rTurtXun0E3Dnpmr0qTzCBn0+TBbo5I4l5Dq4gAD7o1ZUKqlFtSi001zNHy1YtHE9j1W01mLV7YVXRjO1nWAu7KpGynHp9ZdDMtrNLOC/HhPY1+h1cajHz4x2syQ00AAAOJPixu9SQ7SZ4SjSzOnnGZPit+SheMFv3z634WNVodLGDH19s9v2ZDX6qdRl6u7HZ92EuTUEuAuAuAuAuAuAuAuAuBnNG9HKmd1L64UVtnbb+GG99OxELV62mnjjtt5fdO0egvqZ57K+f2UjK8oo5VStSgk+eW2T62ZzNqcmaeby0+DS4sEcUj7vecEgAAAAE54Sf5zT/tL/aRoto/Jn1/aGZ3r8+vp+8tSuWqoLgLgLgZDI81llGYxqRvbZOPrRe1dfOiPqdPXPjmk/L1SNLqLafJF4+fxhX8PXjiaEZwd4ySafQzJXpNLTWe2GzpeL1i1eyXYeXoAAarp9m/mOXKlB8urdPeoLa/bsLTa9P7TJ057I/VVbrqfZ4+hXtt+iaXNGzBcBcBcBcBcBcBcBcBcDLaNZO86zJQ2Qjypvct3WyLrNTGDH0vHwS9FpZ1GXo+HireHoRw1CMIRSjFWSXMZS95vM2t2tfSlaVitY6odh5egAAAAAJvwlfzmn/aX+0jRbR+TPr+0M1vP59fT95alctVQXAXAXAXA33g6zfjRlhpvZeVPq54/qUe7afjjLHpK/wBn1PMTht6w3gpF6AcN2QEc0jzN5rnNSp/Tfiw7EdS9+t+01+kwexwxXx8fVjNZnnNmtfw7I9I/vLG3JKMXAXAXAXAXAXAXAXA4uBVdBct8wyKMmuXV5cup+jH3d7Zl9yz+0zTHhHV92r2vB7LBEz226/s2Ir1iAAAAAAAm3CX/ADqn/aX+0jRbP+TPr+0M1vP51fT95alctlQXAXAXAXA78vxssvx0KsPShJPr3x9quvac8uOMlJpPi6Ysk4rxevbC14ausTh4zi7xklJdTVzG3rNLTWe2G2peL1i0dkuw8vTB6ZY/9n5BUafKkuJH/LU+65N2/D7TPEeEdaFuGb2WC0x2z1fVIjVsi5uAuAuAuAuAuAuAuAuB24Oj5zi4Q9aUY+9pHnJboVm3lD3jp07xXzmIXGnDydNJbEkvcYqZ5nlt4jiOH0fH0AAfFWoqNJyk0opNtvUklzs+1rNp4h8taKxzPY0rNOECNOo44elx168nZPpS2lzh2iZjnJPHwhS5t4rE8Y68/GWJlp/im9UaP5ZP4iVG0YPOf78kSd41HhEfSfu4/f7FerR/LL/2Pv8A1GDzn6/w+f8Ab6j/AMfpP3YbOs4qZ1iYzqqKlGPFXFTStdvnb3kzT6amCs1p69aHqNTfUWi1+OezqY+53Ry4C4C4C4C4FN4Osf5zkrpt66Umv8XrX6mb3XF0M3Sjxabac3Tw9CfBtZVrVPuE/GXr0aKexOb9upfqX2z4/wANr/JQbzk664/m0a5dqQuAuAuAuAuAuAuAuAuBlNFo+U0iw6/Gu5NkXWzxp7z8ErRRzqKR8VmMg2AAAAaZwmY50cup0ou3lJNy6VHWl1X8C42jFFsk3nwU+8ZZrjikeMpxc0LOlwFwFwFwFwFwFwFwFwNq4OcZ5DPXBvVUg17Y613XKvdsfSw9LylabTk6Ofo+cfoqBmmmSHTjE+caT1teqHFgv8Ur97Zq9up0dPX49bJ7lfpam3w6mBuTkEuAuAuAuAuAuAuAuAuBmNEH9JsP2/hkRNf7vf0TNB7zT1/aVkMi1wAAATvhSf8AxdDsz8UX+zd2yg3nvU+bR7l0pC4C4C4C4C4C4C4C4C4HuyHE+aZ1Qne1qkL9TfFfc2cNTTp4bV+Eu+mv0M1bfGFuMa2aG5xV8vm9eXrVar98mbTBXo4qx8I/Ri889LLafjP6vGdXIAAAAAAAAAAMxof9p8P2/hkRNf7vf0TNB7zT1/aVmMi1oAAATrhT+uUOzPxRf7N3besKDee9T5tGLpSgAAAAAAAAAAbts2n3gV/94o7kZP8A4ctX/wAyEgqS41Rve2/ezVxHEcMtPXL5Pr4AAAAAAAcYPhxlvHAcZbxwMxodK+lGG7fwyImv92v6Jmg95p6/stBkGtAAACc8KjtjKHZn4o0Gzdy/rCg3nvU9JaLxlvLrhSnGW8cBxlvHAXD6AAAAAAAPYBlP2g95G9jCR7WWLmuLNrc2iTHY4T2vm4fC4C4C4C4C4C4FX4PcPCpo1ByhFvjT1uKfOZjdL2jUTxPhDTbZWJ08cx5tk8zp/dw/LH5Ff7S/nKw6FfI8zp/dw/LH5D2l/OToV8nMcLCErqnBNc6ikfJvae2To1jwdx5egAAA66lCNV8qMX1pPxPUWmOyXyaxPbD48zp/dw/LH5H32l/OXzoV8jzOn93D8sfkPaX85OhXyPM6f3cPyx+Q9pfzk6FfJEc6rKvnFeSsk6lRpLdxnY2WnrNcVYnyhj9RaLZbT8ZeK51cS4C4C4C4C4C59Hv8ye44e1h29nLpzWn5DNa0fVq1Y+6bR6wz0sdZ84j9HzNXo5LR8Z/V5bnVzLgLgLgLgLgLgVzg5+y8O1U8TK7r7xPpDT7X7vHzbOVywAAAAAAAAAADox9bzfA1J+rCT9ybPeOvSvFfOXjJbo1mUDlLjSb33fvNvxwxczz1lz6FwFwFwFwFwOG9QfFZ/dkzH/Nab/hNB04w/m2lNdW1Skpr/JJt++5dbffpaav0+im19OjqLfVg7k1ELgLgLgLgLgLgV3g4+y0O1U8TLbr7zPpDTbZ7vHzbQVqwAAAAAAAAAADB6bYjzbRiu+dx4q65OxM2+nS1FYRNdfo6e0/BFrmvZMuH0uAuAuAuAuB7Mmw/neb0Kdr8apBPq4yv3XOWov0MVreUS64KdPLWvxhebGJbFMuFbB+TzCjWS1Si4N9MXddzZotmyc0tTynlQ7vj4vW/yaLculOXAXAXAXAXAXAr/Bv9lodqp4mV3X3mfSGm2z3ePm2grVgAAAAAAAAAAGm8KWI8lkEYevUivypy/QttnpznmfKFZutuMPHnKVXNMzhcBcBcBcBcBcDaeDfB+daSxlzUoyl7XyV4srN1ydDT8efUsdsx9LPz5K8ZZpWs8IWXef6NzaXKptVF1Lb3Fjtmb2eeInsnqQdxxe0wT5x1o5c1bMFwFwFwFwFwFwOGrgLLchyFluQ5Gb0KS/evDdv4ZETcPdr+iXoPeK/3wW8xzVAAABM+FtXxuH7E/FGh2TuX9YUW796vzaDZbkXfKnLLchyCVgObgLgLgLgLgLgLgVLgsy/yGUzrNa6krLsx1eNzN7xm6WSKR4fu0G1Yujjm/m3cp1q+akFVpuMleLTTW9PU0fYmYnmHyYiY4lBc+y55Rm9Wi/6ZPivfF64v3NG102aM2Kt48f18WRz4ZxZJp5PBc7OJcBcBcBcBcBcBcBcDN6FP6V4bt/DIibh7tf0TNB7xX++C4GOakAAAJnwt/XcP2J+KNDsncv6wot371fm0C5dqcuAuAuAuAuAuAuAuB24TDyxmKhTgrznJRiulux5vetKza3ZD1Sk3tFY7ZX3LcFHLsvp0oejCKium21+16/aYnLknJebz4thixxjpFI8HpOb2AaFwpZJ5xhI4qC5VPkz6YPY/Y33sutn1PRtOKeyez1VO6afpV9pHbHb6Jhc0ahLgLgLgLgLgLgLgLgZvQl/SvDdv4ZEPcPdr+iXofeK/3wXExzUgAABMuFz67h+xPxRodk7l/WFHu/er82gXLxTlwFwFwFwFwFwFwFwN+4Lck8tipYqa5MLxp9p+lL2LV7WUm8anisYY8e1b7Xp+Z9rPh2KcZ1egAD4r0Y4ijKE1eMk01vT1NH2tprMTHa+TETHEoXpTksshzeVJ34j5VOXrQez2rY+o2Wj1MajFF47fH1ZXVaecOSa+HgxFyUjlwFwFwFwFwFwFwM3oQ/pZhu38MiHuHu1/RL0PvFf74LmY5qAAAAmPC99dw/Yn4o0Wydy/rCj3fvV+af3LtUFwFwFwFwFwFwFwPZlGXTzbMYUaa5U3a/NFc8n0JHLPmrhpN7eDphxWy3ilfFeMrwEMswEKNNcmCSW972+lmLzZbZbze3bLV4scY6RWvg9RzdAAAAwWl+j0dIMrcdSqxvKnLc/VfQyZodXOnyc+E9qLq9NGenHj4IhiaEsLiJQnFxnFtST2po2FbResWr2SzFqzWZrPa6j0+AAAAAAAM7oP9rcL2/hkQ9w92v6Jeh94r/fBdDGtOAAAEw4X/ruH7E/FGi2TuX9YUe7d6vzT0vFSAAAAAAA5inKSSV29SW/oPhwsmgOjP7EwPlKi/j1EuN+CO1QX6mV3LW+3v0a92P8AfxaPQ6X2NelPelthWJ4AAAAAGl6f6Iftil5egv8AiIrXH72K5u0uZ+zcW226/wBjPs792f8AX8K3XaL2sdOne/VIpxcJtNNNamnqae5mniYmOYUExMdUuLn18LgLgLgLgLgZzQd/S3C9v4ZEPcPdr+iXofz6rsY1pwAAAl/DB9dw3Yn4o0Wydy/rCk3bvV+ae3LxUFwFwFwFwFwFwKbweaHOi44vEx5W2lTf9P8A3JLfuXNtM9ue4c84cc+s/tC70Gi4/wDkyfKFFKJbgAAAAAAAGk6c6FLN4uvhko4helHYqvyl08/PvLfb9ynD/wDHk7v6fwrdboYy/jp3v1SSvSlh6zhOLjKLs4tWae5o01bRaOYnqUNqzWeJfFz0+FwFwFwFwM7oM/pdhe38MiFuHu1/T90vQ/n1XcxrTAAABLuGH69huxPxRotk7l/WFJu3er808uXqpLgLgLgLgcxTlJJK7exLnPnYccqboLoL5JxxGMjyttOk+bdOfTuXNz9Gf3Dc+eceGfWfsutFoOPx5I9I+6jFCtwAAAAAAAAAA13SrRKjpDSu+RWS5NRLukv6kTtHr8mnnjtr5fZE1OkpmjynzR7Pchr5DieJXg0n6M1rhLsv9NpqdPqseevNJ+XjCgz6e+GeLQxhIcAAAAz2gv2uwvb+GRC3D3a/p+6Xofz6rwY1pgAAAlvDF9ew3Yn4o0Wx9y/rCk3bvV+adl6qQAAA9mVZZVzfFqnQpynJ7tkVvk9kV0s5Zs2PDXpXniHTFivkt0awrmiGhFPI0qlW1TEb7cmHRBb+kzGt3K+f8Neqv6+q/wBLoa4fxW65bcVicAAAAAAAAAAAAB0YzCQx2HdOrCM4PbGSuj3TJalulWeJebUreOLRzCdaR8Gd7zwUunyU3/rL9GXml3n/ABzR84VWfbPHH9E8x+Aq5biOJXpzpz3SVr9KexrpRe48tMkdKk8wqb47Uni0cPMe3gAz2gn2vwvb+GRD3H3a/p+6Xofz6r0YxpQAAAlnDJ9ew3Yn4o0ex9y/rCl3XvV+adF4qQDtw2Hni66hThKc3sjFNt+xHm960jpWniHqtZtPFYb7o7waVMRaeMl5OP3cWnN9p7F7LlNqt4rX8OGOfj4LPBtkz15Or4KVleWUspwyp0KcYR6Nre9vnZQZc18tuleeZXGPHXHHFY4ew5PYAAAAAAAAAAAAAAAA8+NwVPH0OJWpwnHdJJrrV9jPePJfHPNJ4l5vSt44tHLTM34MsPibuhOVKW70o9+tL2lrh3nLXqvHP6oGXbcdu71NQzLg5xuDb4kY1Y/gkk/yyt4lpi3fT3708eqBk27LXs63TohllbA6YYXytCrDlvXKEkvRlztWZ71ubHk0t+jaJ6vN80mK9M9elEwuBkGhAAACY8LOEqY7MsPGjTnUkoTuoRcmrtbbbDQbNkrSl5vMR1+Ko3Klr2rFY5a7l3B/jsba9JU476kku5XZPy7rpqdk8+iJTb81u2OPVt+U8F1GjZ4mrKo/VjyY+/aVebeslurHHCfi2ykd+eW65blVHKqPFoUoU1z8Va31va/aVOXPkyzzeeU/HipjjiscPYcnQAAAAAAAAAAAAAAAAAAAAAA4A5AAAAHHOByAAAAAAAAAAAAAD//Z";

/***/ }),

/***/ "./assets/icons/instagram.jpg":
/*!************************************!*\
  !*** ./assets/icons/instagram.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "4ec0e1ab0d77e4d7185b.jpg";

/***/ }),

/***/ "./assets/icons/tik tok.png":
/*!**********************************!*\
  !*** ./assets/icons/tik tok.png ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/png;base64,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";

/***/ }),

/***/ "./assets/logo.jpg":
/*!*************************!*\
  !*** ./assets/logo.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fee00a3abe22c2d0f6ad.jpg";

/***/ }),

/***/ "./assets/modal1.jpg":
/*!***************************!*\
  !*** ./assets/modal1.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "5347dc205b0bbb94b3a8.jpg";

/***/ }),

/***/ "./assets/modal2.png":
/*!***************************!*\
  !*** ./assets/modal2.png ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/png;base64,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";

/***/ }),

/***/ "./assets/modal33.jpg":
/*!****************************!*\
  !*** ./assets/modal33.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "7232fbc38f6139d4dfed.jpg";

/***/ }),

/***/ "./assets/professional-2.jpeg":
/*!************************************!*\
  !*** ./assets/professional-2.jpeg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "ec7c7183dd18e3a6d985.jpeg";

/***/ }),

/***/ "./css/main.css":
/*!**********************!*\
  !*** ./css/main.css ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "327584e424cecf8a04a8.css";

/***/ }),

/***/ "./css/main.scss":
/*!***********************!*\
  !*** ./css/main.scss ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "../node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./css/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./index.html":
/*!********************!*\
  !*** ./index.html ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "../node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./css/main.css */ "./css/main.css"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./js/main.js */ "./js/main.js?db67"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/logo.jpg */ "./assets/logo.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/cake 1.jpg */ "./assets/cake 1.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/cake 2.jpg */ "./assets/cake 2.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/cake 3.jpg */ "./assets/cake 3.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/cake 4.jpg */ "./assets/cake 4.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/cake 5.jpg */ "./assets/cake 5.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/cake 6.jpg */ "./assets/cake 6.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/croissant-1.jpg */ "./assets/croissant-1.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/croissant-2.jpg */ "./assets/croissant-2.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/croissant-3.jpg */ "./assets/croissant-3.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/modal1.jpg */ "./assets/modal1.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/modal2.png */ "./assets/modal2.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_14___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/modal33.jpg */ "./assets/modal33.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_15___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/icons/instagram.jpg */ "./assets/icons/instagram.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_16___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/icons/facebook.jpg */ "./assets/icons/facebook.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_17___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/icons/tik tok.png */ "./assets/icons/tik tok.png"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);
var ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);
var ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);
var ___HTML_LOADER_REPLACEMENT_8___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_8___);
var ___HTML_LOADER_REPLACEMENT_9___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_9___);
var ___HTML_LOADER_REPLACEMENT_10___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_10___);
var ___HTML_LOADER_REPLACEMENT_11___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_11___);
var ___HTML_LOADER_REPLACEMENT_12___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_12___);
var ___HTML_LOADER_REPLACEMENT_13___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_13___);
var ___HTML_LOADER_REPLACEMENT_14___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_14___);
var ___HTML_LOADER_REPLACEMENT_15___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_15___);
var ___HTML_LOADER_REPLACEMENT_16___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_16___);
var ___HTML_LOADER_REPLACEMENT_17___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_17___);
var code = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n  <meta charset=\"utf-8\" />\r\n  <meta http-equiv=\"x-ua-compatible\" content=\"ie=edge\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n  <title>MP1 - Pablo Carreras</title>\r\n  <link rel=\"stylesheet\" href=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\">\r\n  <" + "script src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" defer><" + "/script>\r\n</head>\r\n\r\n<body>\r\n\r\n  <header class=\"navbar\" role=\"banner\">\r\n  <nav class=\"navbar__inner\" aria-label=\"Primary\">\r\n    <a class=\"navbar__brand\" href=\"#home\">\r\n      <img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"TastyBake Logo\" class=\"navbar__logo\">\r\n      <span>TastyBake</span>\r\n    </a>\r\n    <!-- Navigation Menu -->\r\n    <ul class=\"navbar__menu\">\r\n      <li><a href=\"#home\" class=\"nav-link\">Home</a></li>\r\n      <li><a href=\"#portfolio\" class=\"nav-link\">Products</a></li>\r\n      <li><a href=\"#carousel\" class=\"nav-link\">Speciality</a></li>\r\n      <li><a href=\"#info\" class=\"nav-link\">Why us</a></li>\r\n      <li><a href=\"#know-us\" class=\"nav-link\">Know Us</a></li>\r\n    </ul>\r\n  </nav>\r\n  </header>\r\n\r\n\r\n    <!-- 🟩 Hero Section -->\r\n  <section class=\"section section--hero\" id=\"home\">\r\n    <div class=\"hero-content\">\r\n      <h1 class=\"fade-in\">Welcome to TastyBake!</h1>\r\n      <p class=\"fade-in\">\"Where tradition meets flavor.\"</p>\r\n    </div>\r\n  </section>\r\n\r\n\r\n  <!-- 🟥 Portfolio -->\r\n  <section class=\"section section--portfolio\" id=\"portfolio\">\r\n    <h2 class=\"fade-in\">OUR PRODUCTS</h2>\r\n\r\n    <div class=\"portfolio-grid\">\r\n      <div class=\"product-card\" data-product=\"1\">\r\n        <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"Cheesecake\">\r\n        <h3>Cheesecake</h3>\r\n      </div>\r\n\r\n      <div class=\"product-card\" data-product=\"2\">\r\n        <img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"Chocolate Cake\">\r\n        <h3>Chocolate Cake</h3>\r\n      </div>\r\n\r\n      <div class=\"product-card\" data-product=\"3\">\r\n        <img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"Muffins\">\r\n        <h3>Muffins</h3>\r\n      </div>\r\n\r\n      <div class=\"product-card\" data-product=\"4\">\r\n        <img src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" alt=\"Chocolate Cookies\">\r\n        <h3>Chocolate Cookies</h3>\r\n      </div>\r\n\r\n      <div class=\"product-card\" data-product=\"5\">\r\n        <img src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"Pistachio Croissant\">\r\n        <h3>Croissants</h3>\r\n      </div>\r\n\r\n      <div class=\"product-card\" data-product=\"6\">\r\n        <img src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\" alt=\"Chocolate Pastry\">\r\n        <h3>Chocolate Pastry</h3>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n\r\n  <!-- 🌀 Carousel Section -->\r\n  <section class=\"section section--carousel\" id=\"carousel\">\r\n    <h2>Our Speciality: Croissants</h2>\r\n    <div class=\"carousel\">\r\n      <button class=\"carousel__btn carousel__btn--prev\">&#10094;</button>\r\n      <div class=\"carousel__track-container\">\r\n        <ul class=\"carousel__track\">\r\n    <!-- Slide 1 -->\r\n          <li class=\"carousel__slide\">\r\n              <div class=\"carousel__content--horizontal\">\r\n                  <div class=\"carousel__image-wrapper\">\r\n                      <img src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\" alt=\"Classic Croissant\">\r\n                  </div>\r\n                  <div class=\"carousel__text\">\r\n                      <h3>Ham & Cheese Croissant</h3>\r\n                      <p>Savory layers of ham and melted cheese baked into golden dough.Perfectly balanced for breakfast or a light lunch.Warm, filling, and freshly baked each morning.</p>\r\n                  </div>\r\n                  \r\n                  \r\n              </div>\r\n          </li>\r\n\r\n\r\n    <!-- Slide 2 -->\r\n          <li class=\"carousel__slide\">\r\n              <div class=\"carousel__content--horizontal\">\r\n                  <div class=\"carousel__image-wrapper\">\r\n                      <img src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" alt=\"Chocolate Croissant\">\r\n                  </div>\r\n                  <div class=\"carousel__text\">\r\n                      <h3>Chocolate Croissant</h3>\r\n                      <p>Flaky pastry wrapped around rich dark chocolate bars.Crisp on the outside, warm and melty inside.A timeless favorite for every chocolate lover.</p>\r\n                  </div>\r\n              </div>\r\n          </li>\r\n\r\n          <!-- Slide 3 -->\r\n          <li class=\"carousel__slide\">\r\n              <div class=\"carousel__content--horizontal\">\r\n                  <div class=\"carousel__image-wrapper\">\r\n                      <img src=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\" alt=\"Pistachio Croissant\">\r\n                  </div>\r\n                  <div class=\"carousel__text\">\r\n                      <h3>Pistachio Croissant</h3>\r\n                      <p>A delicate, buttery croissant filled with smooth pistachio cream.Topped with crushed pistachios for texture and rich aroma.Elegant and nutty—an indulgent twist on a French classic.</p>\r\n                  </div>\r\n              </div>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n      <button class=\"carousel__btn carousel__btn--next\">&#10095;</button>\r\n    </div>\r\n\r\n  </section>\r\n\r\n<section class=\"section section--info\" id=\"info\">\r\n  <h2>Why Choose TastyBake?</h2>\r\n\r\n  <div class=\"info-grid\">\r\n    <!-- Column 1 -->\r\n    <div class=\"info-block\">\r\n      <div class=\"info-icon\">\r\n        <img src=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\" alt=\"Fresh Icon\">\r\n      </div>\r\n      <h3>Tradition & Quality</h3>\r\n      <p>We honor traditional baking methods passed down through generations.Each product is handcrafted with care and attention to detail.Only premium ingredients make it into our recipes.</p>\r\n    </div>\r\n\r\n    <!-- Column 2 -->\r\n    <div class=\"info-block\">\r\n      <div class=\"info-icon\">\r\n        <img src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\" alt=\"Fresh Icon\">\r\n      </div>\r\n      <h3>Fresh Every Day</h3>\r\n      <p>Our baked goods are made daily to ensure maximum freshness.Straight from the oven to your hands—warm, soft, and full of flavor.You will taste the difference in every bite.</p>\r\n    </div>\r\n\r\n    <!-- Column 3 -->\r\n    <div class=\"info-block\">\r\n      <div class=\"info-icon\">\r\n        <img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" alt=\"Fresh Icon\">\r\n      </div>\r\n      <h3>Local & Sustainable</h3>\r\n      <p>We source locally to support our community and reduce our footprint.Sustainable practices guide every step of our baking process.Good for you, good for the planet.</p>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n  <!-- 🟨 know-us -->\r\n    <section class=\"section section--video\" id=\"know-us\">\r\n      <h2>Know Us Better</h2>\r\n      <div class=\"video-wrapper\">\r\n        <iframe \r\n          src=\"https://www.youtube.com/embed/c0h1Lgo1_VA\" \r\n          frameborder=\"0\" \r\n          allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" \r\n          allowfullscreen>\r\n        </iframe>\r\n      </div>\r\n    </section>\r\n\r\n\r\n\r\n  <!-- 🟫 Footer -->\r\n    <footer class=\"footer\">\r\n      &copy; Pablo Carreras\r\n      <div class=\"footer__social-list\">\r\n        <div class=\"social-item\">\r\n          <img src=\"" + ___HTML_LOADER_REPLACEMENT_15___ + "\" alt=\"Instagram icon\">\r\n          <span>Instagram</span>\r\n        </div>\r\n        <div class=\"social-item\">\r\n          <img src=\"" + ___HTML_LOADER_REPLACEMENT_16___ + "\" alt=\"Facebook icon\">\r\n          <span>Facebook</span>\r\n        </div>\r\n        <div class=\"social-item\">\r\n          <img src=\"" + ___HTML_LOADER_REPLACEMENT_17___ + "\" alt=\"tik tok icon\">\r\n          <span>TikTok</span>\r\n        </div>\r\n      </div>\r\n    </footer>\r\n\r\n\r\n/* Modal Structure */\r\n\r\n<div class=\"modal\" id=\"product-modal\">\r\n  <div class=\"modal-content\">\r\n    <span class=\"close-btn\">&times;</span>\r\n    <img id=\"modal-img\" src=\"\" alt=\"\">\r\n    <h3 id=\"modal-title\"></h3>\r\n    <p id=\"modal-desc\"></p>\r\n  </div>\r\n</div>\r\n\r\n</body>\r\n</html>\r\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./js/main.js?9e1e":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ (() => {

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

/***/ }),

/***/ "./js/main.js?db67":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "83c6d3d72ed72839463b.js";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ "./index.html");
/* harmony import */ var _css_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/main.scss */ "./css/main.scss");
/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/main.js */ "./js/main.js?9e1e");
/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_main_js__WEBPACK_IMPORTED_MODULE_2__);
/*
 * This is the main entry point for Webpack, the compiler & dependency loader.
 * All files that are necessary for your web page and need to be 'watched' for changes should be included here!
 */
// HTML Files
 // Stylesheets

 // Scripts


})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map