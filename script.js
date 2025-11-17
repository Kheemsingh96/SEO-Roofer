// ===============================
// Tablet Hamburger Slide Menu
// ===============================
(function () {
  // Elements
  const hamburgerBtn = document.querySelector(".hamburger-btn");
  const tabletMenu   = document.getElementById("tabletMenu");
  const overlay      = document.getElementById("tabletMenuOverlay");
  const closeBtn     = document.querySelector(".tablet-menu-close");

  // Agar koi element missing hai to silently exit (no errors)
  if (!hamburgerBtn || !tabletMenu || !overlay || !closeBtn) {
    return;
  }

  let isOpen = false;

  // ---------- Helpers ----------
  function openMenu() {
    tabletMenu.classList.add("open");
    overlay.classList.add("open");
    document.body.classList.add("menu-open");

    hamburgerBtn.setAttribute("aria-expanded", "true");
    tabletMenu.setAttribute("aria-hidden", "false");

    isOpen = true;
  }

  function closeMenu() {
    tabletMenu.classList.remove("open");
    overlay.classList.remove("open");
    document.body.classList.remove("menu-open");

    hamburgerBtn.setAttribute("aria-expanded", "false");
    tabletMenu.setAttribute("aria-hidden", "true");

    isOpen = false;
  }

  function toggleMenu() {
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  // ---------- Events ----------

  // Hamburger click
  hamburgerBtn.addEventListener("click", function (e) {
    e.preventDefault();
    toggleMenu();
  });

  // Close button click (X icon)
  closeBtn.addEventListener("click", function (e) {
    e.preventDefault();
    closeMenu();
  });

  // Overlay click
  overlay.addEventListener("click", function () {
    closeMenu();
  });

  // ESC key se close
  document.addEventListener("keydown", function (e) {
    if (!isOpen) return;
    if (e.key === "Escape" || e.key === "Esc") {
      e.preventDefault();
      closeMenu();
    }
  });

  // Resize: desktop par aa gaye to force-close
  window.addEventListener("resize", function () {
    if (window.innerWidth > 768 && isOpen) {
      closeMenu();
    }
  });

  // Initial ARIA state
  hamburgerBtn.setAttribute("aria-expanded", "false");
  tabletMenu.setAttribute("aria-hidden", "true");
})();
