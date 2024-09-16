const btn = document.getElementById("btn");
const dropdown = document.getElementById("dropdown");
const arrow_down = document.getElementById("arrow-down");

btn.addEventListener("click", () => {
  dropdown.classList.toggle("hidden");
})