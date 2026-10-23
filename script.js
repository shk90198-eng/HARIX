
"use strict";

document.addEventListener("DOMContentLoaded", () => {
  initMobileNavigation();
  initSmoothNavigation();
  initCurrentYear();
  initCategoryNavigation();
});

function initMobileNavigation() {
  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector("#nav-links");

  if (!menuButton || !navigation) return;

  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";

    navigation.classList.toggle("active", !isOpen);
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    menuButton.setAttribute(
      "aria-label",
      isOpen ? "Open navigation menu" : "Close navigation menu"
    );
  });

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navigation.classList.remove("active");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open navigation menu");
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      navigation.classList.remove("active");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open navigation menu");
    }
  });
}

function initSmoothNavigation() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");
      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);
      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

      if (window.location.hash !== targetId) {
        history.pushState(null, "", targetId);
      }
    });
  });
}

function initCurrentYear() {
  const yearElement = document.querySelector("#year");

  if (yearElement) {
    yearElement.textContent = String(new Date().getFullYear());
  }
}

function initCategoryNavigation() {
  document.addEventListener("click", (event) => {
    const card = event.target.closest("a.product-card[href]");

    if (!card) return;

    const destination = card.getAttribute("href");

    if (
      destination === "ai-tools.html" ||
      destination === "apps-software.html" ||
      destination === "websites.html" ||
      destination === "games.html"
    ) {
      event.preventDefault();
      window.location.assign(
        new URL(destination, document.baseURI).href
      );
    }
  });
});

