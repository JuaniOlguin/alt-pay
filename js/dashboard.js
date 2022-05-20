var sidebarBtn = document.getElementById('sidebarBtn')
var sidebar = document.getElementById('sidebar')
var sidebarToggler = document.getElementById('sidebarToggler')

sidebarBtn.addEventListener("click", () => {
  sidebarToggler.classList.toggle("active-content")
  sidebar.classList.toggle("active-sidebar")
})