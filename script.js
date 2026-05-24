// Replace this single path with your own video file location.
const HERO_VIDEO_SRC = "assets/video/showreel.mp4";

const heroVideo = document.getElementById("heroVideo");
const heroVideoWrap = document.getElementById("heroVideoWrap");
const videoFallback = document.getElementById("videoFallback");

function enableVideoFallback() {
  heroVideoWrap?.classList.add("no-video");
  if (heroVideo) {
    heroVideo.style.display = "none";
  }
  if (videoFallback) {
    videoFallback.setAttribute("aria-hidden", "false");
  }
}

function setupHeroVideo() {
  if (!heroVideo || !heroVideoWrap) {
    return;
  }

  if (!HERO_VIDEO_SRC || HERO_VIDEO_SRC.trim().length === 0) {
    enableVideoFallback();
    return;
  }

  heroVideo.src = HERO_VIDEO_SRC;

  const playPromise = heroVideo.play();
  if (playPromise && typeof playPromise.catch === "function") {
    playPromise.catch(() => {
      enableVideoFallback();
    });
  }

  heroVideo.addEventListener("error", () => {
    enableVideoFallback();
  });
}

function setupRevealAnimations() {
  const revealItems = [...document.querySelectorAll(".reveal")];
  revealItems.forEach((item, index) => {
    const delay = Math.min(index * 45, 380);
    item.style.setProperty("--delay", `${delay}ms`);
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
  );

  revealItems.forEach((item) => observer.observe(item));
}

function setFooterYear() {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }
}

function setupSampleVideoFallbacks() {
  const sampleVideos = [...document.querySelectorAll(".sample-video")];
  sampleVideos.forEach((video) => {
    video.addEventListener("error", () => {
      const card = video.closest(".featured-card");
      if (!card || card.querySelector(".video-error")) {
        return;
      }

      const message = document.createElement("div");
      message.className = "video-error";
      message.textContent = "Video could not load. Re-export this clip as MP4 (H.264 + AAC).";
      card.prepend(message);
      video.style.display = "none";
    });
  });
}

function setupPhotoHoverPreview() {
  const preview = document.getElementById("photoPreview");
  const previewImage = document.getElementById("photoPreviewImage");
  const photoCards = [...document.querySelectorAll(".gallery-item.has-photo")];

  if (!preview || !previewImage || photoCards.length === 0) {
    return;
  }

  let closeTimer;

  const openPreview = (imageEl) => {
    if (!imageEl?.src) {
      return;
    }

    if (closeTimer) {
      clearTimeout(closeTimer);
    }

    previewImage.src = imageEl.currentSrc || imageEl.src;
    previewImage.alt = imageEl.alt || "Expanded gallery preview";
    preview.classList.add("is-open");
    preview.setAttribute("aria-hidden", "false");
  };

  const closePreview = () => {
    closeTimer = setTimeout(() => {
      preview.classList.remove("is-open");
      preview.setAttribute("aria-hidden", "true");
      previewImage.removeAttribute("src");
    }, 50);
  };

  photoCards.forEach((card) => {
    const imageEl = card.querySelector(".gallery-image");
    if (!imageEl) {
      return;
    }

    card.addEventListener("mouseenter", () => openPreview(imageEl));
    card.addEventListener("mouseleave", closePreview);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setupHeroVideo();
  setupRevealAnimations();
  setupSampleVideoFallbacks();
  setupPhotoHoverPreview();
  setFooterYear();
});