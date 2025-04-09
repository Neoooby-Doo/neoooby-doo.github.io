document.addEventListener("DOMContentLoaded", () => {
  const img = document.getElementById("author-image");
  img.style.borderRadius = "50%";

  const icons = document.querySelectorAll(".social-icons .icon");

  icons.forEach(icon => {
    icon.addEventListener("click", event => {
      event.preventDefault(); // Stop immediate navigation

      icon.classList.add("clicked");

      const link = icon.getAttribute("href");

      // Delay navigation to show color change
      setTimeout(() => {
        window.open(link, "_blank");
      }, 300);
    });
  });
});
