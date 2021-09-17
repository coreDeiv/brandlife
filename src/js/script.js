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

// Instagram Grid
const images = document.querySelector('#pi-body_list');
const list = Array.from(images.children);
let newlist;

list.sort((a, b) => {
  return -1 + Math.random() * 3;
});

while (images.children.length > 0) {
  images.removeChild(images.children[0]);
}

list.forEach((e) => {
  images.appendChild(e);
});
