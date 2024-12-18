const btn = document.getElementById("btn");
const dropdown = document.getElementById("dropdown");
const arrow_down = document.getElementById("arrow-down");
const desiredKeyCode = 9;

btn.addEventListener("click", () => {
  dropdown.classList.toggle("hidden");
});

document.addEventListener("keydown", function (event) {
  // Check if the pressed key is not the desired key
  if (event.keyCode !== desiredKeyCode) {
    // Prevent the default action (navigation)
    event.preventDefault();
  }
});

document.addEventListener("keyup", function (event) {
  // Check if the pressed key is Enter
  if (event.keyCode === 13) {
    // Simulate a click event on the button
    btn.click();
  }
});
