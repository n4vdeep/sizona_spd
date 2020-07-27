const cookie_container = document.querySelector(".cookie-container");
const cookie_btn = document.querySelector(".cookie-btn");

cookie_btn.addEventListener("click", () => {
  cookie_container.classList.remove("active");
  localStorage.setItem("cookieBannerDisplayed", "true");
});

setTimeout(() => {
  if (!localStorage.getItem("cookieBannerDisplayed")) {
    cookie_container.classList.add("active");
  }
}, 2500);