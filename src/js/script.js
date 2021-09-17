// Header
window.addEventListener("scroll", () => {
  const header = document.getElementById("header-desktop");
  header.classList.toggle("active", window.scrollY>0);
});

// Jumbotron Script
$('.pj-slider').slick({
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
});
