const menu = document.querySelector("#menu");
const menuBtn = document.querySelector("#menu-btn");

menuBtn.onclick = () => {
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
    menuBtn.classList.replace("bi-list", "bi-x");
  } else {
    menu.classList.add("hidden");
    menuBtn.classList.replace("bi-x", "bi-list");
  }
};
