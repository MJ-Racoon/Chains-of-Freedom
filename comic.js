// ==============================
// 🔧 EINSTELLUNGEN
// ==============================

document.addEventListener("DOMContentLoaded", () => {
const params = new URLSearchParams(window.location.search);

const chapter = params.get("chapter") || "1";

const chapterData = CHAPTERS[chapter];

const episodes = chapterData.episodes;

// =====================================
// 🌍 Sprache erkennen
// =====================================

const isGerman =
  window.location.pathname.includes("DE");

const folder =
  isGerman
    ? chapterData.folderDE
    : chapterData.folderEN;

// =====================================
// 📖 Kapitelüberschrift erzeugen
// =====================================


const chapterNumberElement =
  document.getElementById("chapter-number");

const chapterTitleElement =
  document.getElementById("chapter-title");

if (chapterNumberElement) {
  chapterNumberElement.textContent =
    `Chapter ${chapter}`;
}

if (chapterTitleElement) {
  chapterTitleElement.textContent =
    isGerman
      ? chapterData.titleDE
      : chapterData.titleEN;
}

// =====================================
// ⬅️➡️ Kapitelnavigation
// =====================================

const prevText =
  document.getElementById("prev-text");

const nextText =
  document.getElementById("next-text");

if (prevText && nextText) {

  if (isGerman) {

    prevText.textContent = "Vorherige";
    nextText.textContent = "Nächste";

  } else {

    prevText.textContent = "Previous";
    nextText.textContent = "Next";

  }

}

const BASE = window.location.pathname.includes("Chains-of-Freedom")
  ? "/Chains-of-Freedom/"
  : "/";

const prevButton =
  document.querySelector(".nav-btn.prev");

const nextButton =
  document.querySelector(".nav-btn.next");

if (prevButton) {

  if (chapterData.previous === "prologue") {

    prevButton.href =
  `${BASE}Episode Pages/Arc 1/prolog.html`;

  } else if (chapterData.previous) {

    prevButton.href =
  `${BASE}Episode Pages/chapter.html?chapter=${chapterData.previous}`;

  } else {

    prevButton.style.opacity = "0.3";
    prevButton.style.pointerEvents = "none";

  }

}

if (nextButton) {

  if (chapterData.next) {

    nextButton.href =
    `${BASE}Episode Pages/chapter.html?chapter=${chapterData.next}`;

  } else {

    nextButton.style.opacity = "0.3";
    nextButton.style.pointerEvents = "none";

  }

}

const fileFormat = "webp";






// ==============================
// ⚙️ NICHT MEHR ÄNDERN (LOGIK)
// ==============================

const container = document.getElementById("comic");

episodes.forEach(ep => {
  for (let i = ep.startPage; i <= ep.endPage; i++) {
    const img = document.createElement("img");

    // Seitenzahl mit führenden Nullen (001, 002, ...)
    const pageNumber = String(i).padStart(3, "0");

    // Bildpfad generieren
  img.src =
  `${folder}/Ep${ep.number}_${pageNumber}.${fileFormat}`;

    // Alt-Text
    img.alt = `Chains of Freedom - Episode ${ep.number}, Page ${i}`;

    // Lazy Loading (erste Seite schneller laden)
    if (i === ep.startPage) {
      img.loading = "eager";
      img.fetchPriority = "high";

      // 👉 ID für Inhaltsverzeichnis (Anchor)
      img.id = `episode${ep.number}`;
    } else {
      img.loading = "lazy";
    }

    container.appendChild(img);
  }
});


// ==============================
// 📋 AUTOMATISCHES INHALTSVERZEICHNIS
// ==============================

const toc = document.querySelector(".chapter1"); 
// 👆 deine UL im HTML (chapter1)

if (toc) {
  episodes.forEach((ep, index) => {
    const li = document.createElement("li");
    li.className = "episode-selection";

    const a = document.createElement("a");
    a.className = "episode";
    if (
  Number(chapter) === COMIC_INFO.latestChapter &&
  ep.number === COMIC_INFO.latestEpisode
) {
  a.classList.add("newest");
}
    a.href = `#episode${ep.number}`;
    a.textContent = `Episode ${ep.number}`;

    li.appendChild(a);
    toc.appendChild(li);
  });
}

});