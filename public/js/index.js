let scrolled = false;

window.addEventListener("scroll", function () {
  var header1 = document.querySelector(".header1");
  var header2 = document.querySelector(".header2");
  var contaider_header = document.querySelector(".contaider-header");

  if (!scrolled && window.scrollY > 100) {
    scrolled = true;
    header1.classList.add("hidden");
    header2.classList.remove("hidden");
    contaider_header.classList.add("border-b-2", "border-black");
  } else if (scrolled && window.scrollY <= 100) {
    scrolled = false;
    header1.classList.remove("hidden");
    contaider_header.classList.remove("border-b-2", "border-black");
  }
});
