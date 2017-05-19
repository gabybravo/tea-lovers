var element = document.querySelector(".form");
element.addEventListener("submit", function(event) {
  event.preventDefault();
  validateForm();
});