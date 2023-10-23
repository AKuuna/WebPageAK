//smooth scrolling

document.querySelectorAll(".scroll").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
      // alignToTop:true,
      // block:'start'
    });
  });
});
//layout
let mountain1 = document.querySelector(".mountain1");
let mountain2 = document.querySelector(".mountain2");
let mountain3 = document.querySelector(".mountain3");

document.addEventListener("scroll", () => {
  let value = window.scrollY;
  mountain1.style.top = value * 0.25 + "px";
  mountain2.style.top = value * 0.5 + "px";
  mountain3.style.top = value * 0.1 + "px";
});
