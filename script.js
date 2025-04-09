document.addEventListener("DOMContentLoaded", () => {
  const img = document.getElementById("author-image");
  img.style.borderRadius = "50%";

  const icons = document.querySelectorAll(".social-icons .icon");
  icons.forEach(icon => {
    icon.addEventListener("click", () => {
      icon.classList.add("clicked");
    });
  });
});
