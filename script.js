const burger = document.getElementById("burger");
const navLinks = document.getElementById("navLinks");

const closeMobileMenu = () => {
  if (!burger || !navLinks) return;

  navLinks.classList.remove("active");
  burger.classList.remove("active");
  burger.setAttribute("aria-expanded", "false");
  document.body.classList.remove("menu-open");
};

const toggleMobileMenu = () => {
  if (!burger || !navLinks) return;

  const isOpen = navLinks.classList.toggle("active");

  burger.classList.toggle("active", isOpen);
  burger.setAttribute("aria-expanded", isOpen ? "true" : "false");
  document.body.classList.toggle("menu-open", isOpen);
};

if (burger && navLinks) {
  burger.addEventListener("click", toggleMobileMenu);
}

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", closeMobileMenu);
});

document.addEventListener("scroll", () => {
  if (navLinks && navLinks.classList.contains("active")) {
    closeMobileMenu();
  }
}, { passive: true });

window.addEventListener("resize", () => {
  if (window.innerWidth > 820) {
    closeMobileMenu();
  }
});

const showMoreBtn = document.getElementById("showMoreBtn");
const showLessBtn = document.getElementById("showLessBtn");
const hiddenGalleryItems = document.querySelectorAll(".hidden-gallery");

if (showMoreBtn && showLessBtn) {
  showMoreBtn.addEventListener("click", () => {
    hiddenGalleryItems.forEach((item) => {
      item.classList.add("show");
    });

    showMoreBtn.style.display = "none";
    showLessBtn.style.display = "inline-flex";
  });

  showLessBtn.addEventListener("click", () => {
    hiddenGalleryItems.forEach((item) => {
      item.classList.remove("show");
    });

    showLessBtn.style.display = "none";
    showMoreBtn.style.display = "inline-flex";

    const gallerySection = document.getElementById("galeria");

    if (gallerySection) {
      gallerySection.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
}

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxClose = document.getElementById("lightboxClose");

const closeLightbox = () => {
  if (!lightbox || !lightboxImg) return;

  lightbox.classList.remove("active");
  lightboxImg.src = "";
};

document.querySelectorAll(".gallery-card img").forEach((img) => {
  img.addEventListener("click", () => {
    if (!lightbox || !lightboxImg) return;

    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightbox.classList.add("active");
  });
});

if (lightboxClose) {
  lightboxClose.addEventListener("click", closeLightbox);
}

if (lightbox) {
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMobileMenu();
    closeLightbox();
  }
});
