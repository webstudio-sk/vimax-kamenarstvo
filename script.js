const burger = document.getElementById("burger");
const navLinks = document.getElementById("navLinks");

if (burger && navLinks) {
  burger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    if (navLinks) {
      navLinks.classList.remove("active");
    }
  });
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

document.querySelectorAll(".gallery-card img").forEach((img) => {
  img.addEventListener("click", () => {
    if (!lightbox || !lightboxImg) return;

    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightbox.classList.add("active");
  });
});

if (lightboxClose) {
  lightboxClose.addEventListener("click", () => {
    if (!lightbox || !lightboxImg) return;

    lightbox.classList.remove("active");
    lightboxImg.src = "";
  });
}

if (lightbox) {
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      lightbox.classList.remove("active");

      if (lightboxImg) {
        lightboxImg.src = "";
      }
    }
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && lightbox) {
    lightbox.classList.remove("active");

    if (lightboxImg) {
      lightboxImg.src = "";
    }
  }
});