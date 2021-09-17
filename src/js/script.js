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

// Newsletter
const exp = {
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
}

const form = document.getElementById("form--newsletter");
const inpt = document.querySelectorAll("#form--newsletter .pn-row_form--input input");

const validateForm = (e) => {
  switch (e.target.name) {
    case "email-newsletter":
      if (exp.email.test(e.target.value)) {
        document.getElementById("pn-row_form--input").classList.remove("pn-row_form--input-error");
        if (e % 2 == 0) {
          console.log("Is odd");
        } else {
          console.log("Is even");
        }
      } else {
        document.getElementById("pn-row_form--input").classList.add("pn-row_form--input-error");
      }
    break;
  }
}

inpt.forEach((input) => {
  input.addEventListener('keyup', validateForm);
  input.addEventListener('blur', validateForm);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

// Header Mobile
function toggleSidebarHeader() {
  document.getElementById("open-menu").addEventListener("click", () => {
    document.getElementById("pufi-sidebar_mobile").classList.add("active");
  });
  document.getElementById("close-menu").addEventListener("click", () => {
    document.getElementById("pufi-sidebar_mobile").classList.remove("active");
  });
}

toggleSidebarHeader();
