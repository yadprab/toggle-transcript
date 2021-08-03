const button = document.querySelector("#toggle--button");
const hide = document.querySelector(".hide--paragraph");

button.addEventListener("click", (e) => {
  hide.classList.toggle("show");
});
