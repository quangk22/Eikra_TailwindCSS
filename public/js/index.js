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

//
document.querySelector(".next").onclick = function () {
  const widthItem = document.querySelector(".card1").offsetWidth;
  const formList = document.querySelector(".formList");
  if (formList.scrollLeft + formList.offsetWidth < formList.scrollWidth) {
    formList.scrollLeft += widthItem;
  } else {
    formList.scrollLeft = 0; // Cuộn về đầu nếu đã đến cuối cùng
  }
};

document.querySelector(".prev").onclick = function () {
  const widthItem = document.querySelector(".card1").offsetWidth;
  const formList = document.querySelector(".formList");
  if (formList.scrollLeft > 0) {
    formList.scrollLeft -= widthItem;
  } else {
    formList.scrollLeft = formList.scrollWidth - formList.offsetWidth; // Cuộn tới cuối cùng nếu đã ở đầu
  }
};
//

function moveNext() {
  const widthItem = document.querySelector(".card").offsetWidth;
  const formList = document.querySelector(".formList2");
  if (formList.scrollLeft + formList.offsetWidth < formList.scrollWidth) {
    formList.scrollLeft += widthItem;
  } else {
    formList.scrollLeft = 0; // Cuộn về đầu nếu đã đến cuối cùng
  }
}

function movePrev() {
  const widthItem = document.querySelector(".card").offsetWidth;
  const formList = document.querySelector(".formList2");
  if (formList.scrollLeft > 0) {
    formList.scrollLeft -= widthItem;
  } else {
    formList.scrollLeft = formList.scrollWidth - formList.offsetWidth; // Cuộn tới cuối cùng nếu đã ở đầu
  }
}

document.querySelector(".owl-next").onclick = moveNext;
document.querySelector(".owl-prev").onclick = movePrev;

// Tự động chuyển đổi mỗi 5 giây
setInterval(moveNext, 5000);
