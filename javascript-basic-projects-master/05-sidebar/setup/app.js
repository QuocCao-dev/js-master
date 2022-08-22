const btn = document.querySelector(".sidebar-toggle");
const sidebar = document.querySelector(".sidebar");
const closeBtn = document.querySelector(".close-btn");

btn.addEventListener("click", () => {
  let sidebarClassList = sidebar.classList;
  sidebarClassList.toggle("show-sidebar");
});

closeBtn.addEventListener("click", () => {
  let sidebarClassList = sidebar.classList;
  sidebarClassList.remove("show-sidebar");
});
