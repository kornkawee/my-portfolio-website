// On Scroll Function
function navMenu() {
  // สร้างตัวแปร อ้างอิงๆปยัง ID
  let nabBar = document.querySelector(".navbar-sticky");
  let scrollTopButton = document.querySelector("#scrollUp");

  window.onscroll = function(){
    let scroll = document.documentElement.scrollTop;
    // ถ้ามีการ scroll ลงไป มากกว่าหรือเท่ากับ 120
    if (scroll >= 120) {
      // เพิ่ม Class
      nabBar.classList.add("navbar-sticky-moved-up");
    } else {
      // ถ้าไม่เป็นจริง ลบ CLass
      nabBar.classList.remove("navbar-sticky-moved-up");
    }

    // apply transition
    if (scroll >= 250) {
      nabBar.classList.add("navbar-sticky-transitioned");
      scrollTopButton.classList.add("scrollActive");
    } else {
      nabBar.classList.remove("navbar-sticky-transitioned");
      scrollTopButton.classList.remove("scrollActive");
    }
    // sticky on
    if (scroll >= 500) {
      nabBar.classList.add("navbar-sticky-on");
    } else {
      nabBar.classList.remove("navbar-sticky-on");
    }
  };
}

navMenu();


// Side Navigation Bar Close While We click On Navigation Links
let navBar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navBar.forEach(function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
}) 