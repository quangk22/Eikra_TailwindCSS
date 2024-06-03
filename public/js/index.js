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
// ===========================================================================
var search = document.getElementById("search");
var input_search = document.getElementById("input-search");
search.addEventListener("click", () => {
  input_search.classList.toggle("hidden");
});
document.addEventListener("click", function (event) {
  const isClickInside =
    search.contains(event.target) || input_search.contains(event.target);
  if (!isClickInside) {
    input_search.classList.add("hidden");
  }
});
var btn_menu = document.getElementById("btn-menu");
var menu_mobi = document.getElementById("menu-mobi");
btn_menu.addEventListener("click", () => {
  menu_mobi.classList.toggle("max-lg:hidden");
});
document.addEventListener("click", function (event) {
  const isClickInside =
    btn_menu.contains(event.target) || menu_mobi.contains(event.target);
  if (!isClickInside) {
    menu_mobi.classList.add("max-lg:hidden");
  }
});
