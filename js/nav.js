// Ensure the DOM is fully loaded before executing the script
document.addEventListener("DOMContentLoaded", function () {
  // Scroll-based Navbar Effect
  document.addEventListener("scroll", function () {
      const navbar = document.getElementById("navbar");
      const logo = document.getElementById("nav-logo");
      const customLinks = document.querySelectorAll(".nav-custom-link");
      const navbarBtn = document.querySelector(".navbar-btn");

      if (document.documentElement.scrollTop > 86) {
          navbar.classList.add("sticky");
          logo.classList.add("color-white");
          customLinks.forEach((link) => link.classList.add("color-white"));
          navbarBtn.classList.add("nav-btn-icon");
      } else {
          navbar.classList.remove("sticky");
          logo.classList.remove("color-white");
          customLinks.forEach((link) => link.classList.remove("color-white"));
          navbarBtn.classList.remove("nav-btn-icon");
      }
  });

  // "Read More" Button
  const readMoreButton = document.getElementById("read-more-button");
  const aboutMeText = document.getElementById("about-me-text");

  readMoreButton.addEventListener("click", function () {
      if (aboutMeText.classList.contains("collapsed-text")) {
          aboutMeText.classList.remove("collapsed-text");
          aboutMeText.classList.add("expanded-text");
          this.textContent = "Read Less";
      } else {
          aboutMeText.classList.remove("expanded-text");
          aboutMeText.classList.add("collapsed-text");
          this.textContent = "Read More";
      }
  });
});
