// active navbar propery
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".navbar .nav-link");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      // Prevent default link behavior
      event.preventDefault();

      // Remove active class from all links
      navLinks.forEach((link) => link.classList.remove("active"));

      // Add active class to the clicked link
      this.classList.add("active");

      // Collapse the navbar on small devices after clicking a link
      const navbarCollapse = document.getElementById("navbarSupportedContent");
      if (window.innerWidth < 992) {
        const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
          toggle: false,
        });
        bsCollapse.hide();
      }
    });
  });
});

// Functionalty
document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll("#flightBookingTabs button");

  // Always default to the "One Way" tab on page reload
  document.querySelector("#oneWay-tab").classList.add("active-tab");
  document.querySelector("#oneWay-tab").click();

  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      tabs.forEach((t) => t.classList.remove("active-tab"));
      this.classList.add("active-tab");
    });
  });
});
