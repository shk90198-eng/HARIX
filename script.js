
/* =========================================
   HARIX TECHNOLOGIES
   Main Website JavaScript
   ========================================= */

"use strict";

document.addEventListener("DOMContentLoaded", () => {
  initMobileNavigation();
  initSmoothNavigation();
  initCurrentYear();
  initCardInteractions();
});

/* MOBILE NAVIGATION */

function initMobileNavigation() {
  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector("#nav-links");

  if (!menuButton || !navigation) return;

  function closeMenu() {
    navigation.classList.remove("active");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation menu");
  }

  function toggleMenu() {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";

    navigation.classList.toggle("active", !isOpen);
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    menuButton.setAttribute(
      "aria-label",
      isOpen ? "Open navigation menu" : "Close navigation menu"
    );
  }

  menuButton.addEventListener("click", toggleMenu);

  // Close the menu after selecting a navigation link.
  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  // Close the menu when the user taps outside it.
  document.addEventListener("click", (event) => {
    if (
      !navigation.contains(event.target) &&
      !menuButton.contains(event.target)
    ) {
      closeMenu();
    }
  });

  // Close the menu using the Escape key.
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
      menuButton.focus();
    }
  });

  // Reset mobile navigation when switching to desktop width.
  window.addEventListener("resize", () => {
    if (window.innerWidth > 680) {
      closeMenu();
    }
  });
}

/* SMOOTH NAVIGATION */

function initSmoothNavigation() {
  const internalLinks = document.querySelectorAll('a[href^="#"]');

  internalLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);

      if (!target) return;

      event.preventDefault();

      target.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "auto"
          : "smooth",
        block: "start"
      });

      // Keep the browser URL in sync with the selected section.
      if (window.location.hash !== targetId) {
        history.pushState(null, "", targetId);
      }
    });
  });
}

/* AUTOMATIC COPYRIGHT YEAR */

function initCurrentYear() {
  const yearElement = document.querySelector("#year");

  if (yearElement) {
    yearElement.textContent = String(new Date().getFullYear());
  }
}

/* PRODUCT CARD KEYBOARD SUPPORT */

function initCardInteractions() {
  const cards = document.querySelectorAll(".product-card");

  cards.forEach((card) => {
    // Native anchor cards already support Enter and keyboard navigation.
    // This adds a clear accessible label when one is missing.
    if (!card.hasAttribute("aria-label")) {
      const heading = card.querySelector("h3");

      if (heading) {
        card.setAttribute("aria-label", `Explore ${heading.textContent.trim()}`);
      }
    }
  });
}


/* =========================================
   HARIX TECHNOLOGIES
   Main Website JavaScript
   ========================================= */

"use strict";

document.addEventListener("DOMContentLoaded", () => {
  initMobileNavigation();
  initSmoothNavigation();
  initCurrentYear();
  initCardInteractions();
});

/* MOBILE NAVIGATION */

function initMobileNavigation() {
  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector("#nav-links");

  if (!menuButton || !navigation) return;

  function closeMenu() {
    navigation.classList.remove("active");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation menu");
  }

  function toggleMenu() {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";

    navigation.classList.toggle("active", !isOpen);
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    menuButton.setAttribute(
      "aria-label",
      isOpen ? "Open navigation menu" : "Close navigation menu"
    );
  }

  menuButton.addEventListener("click", toggleMenu);

  // Close the menu after selecting a navigation link.
  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  // Close the menu when the user taps outside it.
  document.addEventListener("click", (event) => {
    if (
      !navigation.contains(event.target) &&
      !menuButton.contains(event.target)
    ) {
      closeMenu();
    }
  });

  // Close the menu using the Escape key.
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
      menuButton.focus();
    }
  });

  // Reset mobile navigation when switching to desktop width.
  window.addEventListener("resize", () => {
    if (window.innerWidth > 680) {
      closeMenu();
    }
  });
}

/* SMOOTH NAVIGATION */

function initSmoothNavigation() {
  const internalLinks = document.querySelectorAll('a[href^="#"]');

  internalLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);

      if (!target) return;

      event.preventDefault();

      target.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "auto"
          : "smooth",
        block: "start"
      });

      // Keep the browser URL in sync with the selected section.
      if (window.location.hash !== targetId) {
        history.pushState(null, "", targetId);
      }
    });
  });
}

/* AUTOMATIC COPYRIGHT YEAR */

function initCurrentYear() {
  const yearElement = document.querySelector("#year");

  if (yearElement) {
    yearElement.textContent = String(new Date().getFullYear());
  }
}

/* PRODUCT CARD KEYBOARD SUPPORT */

function initCardInteractions() {
  const cards = document.querySelectorAll(".product-card");

  cards.forEach((card) => {
    // Native anchor cards already support Enter and keyboard navigation.
    // This adds a clear accessible label when one is missing.
    if (!card.hasAttribute("aria-label")) {
      const heading = card.querySelector("h3");

      if (heading) {
        card.setAttribute("aria-label", `Explore ${heading.textContent.trim()}`);
      }
    }
  });
}

