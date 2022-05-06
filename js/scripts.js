/*!
 * Start Bootstrap - Grayscale v7.0.5 (https://startbootstrap.com/theme/grayscale)
 * Copyright 2013-2022 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
 */
//
// Scripts
//

window.addEventListener("DOMContentLoaded", (event) => {
  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove("navbar-shrink");
    } else {
      navbarCollapsible.classList.add("navbar-shrink");
    }
  };

  // Shrink the navbar
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener("scroll", navbarShrink);

  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      offset: 74,
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });

  // Load all dynamic pages
  $("#projectSection").load("./sections/projects.html");
  $("#modalSection").load("./sections/modal.html");

  // On play vid

  window.addEventListener("load", function () {
    setTimeout(myFunction, 1000);
  });

  function myFunction() {
    document.querySelector("body").classList.add("loaded");
  }

  $(window).resize(function () {
    var scWidth = $(window).width();
    console.debug(`Resized to ` + scWidth + "px");
    $("body")
      .get(0)
      .style.setProperty("--scWidth", scWidth + 193 + "px");
  });

  $(document).ready(function () {
    $(window).on("resize", function (e) {
      checkScreenSize();
    });

    checkScreenSize();

    function checkScreenSize() {
      function zoomOutMobile() {
        var viewport = document.querySelector('meta[name="viewport"]');

        if (viewport) {
          viewport.content = "initial-scale=0.1";
          viewport.content = "width=500";
        }
      }

      var newWindowWidth = $(window).width();
      if (newWindowWidth < 768) {
        $(".modal").on("shown.bs.modal", function (e) {
          // do something...
          zoomOutMobile();
        });
      } else {
        // $(".left").insertBefore(".right");
      }
    }
  });

  //   $(".modal").on("shown.bs.modal", function (e) {
  //     // do something...
  //     $(".video-js").delay("500").trigger("play");
  //   });

  $(".modal").on("hidden.bs.modal", function () {
    $(".video-js").trigger("pause");
    $(".vjs-tech").trigger("pause");
  });
});
