// ==============================
// 🔧 EINSTELLUNGEN (HIER ÄNDERN)
// ==============================

// 👉 Kapitelnummer ändern
const chapter = 1;

// 👉 Episoden definieren
// Format:
// number = Episoden-Nummer
// startPage = erste Seite dieser Episode
// endPage = letzte Seite dieser Episode

const episodes = [
  { number: 1, startPage: 1, endPage: 7 },
  { number: 2, startPage: 8, endPage: 11 },
  { number: 3, startPage: 12, endPage: 17 },
  { number: 4, startPage: 18, endPage: 20 },
  { number: 5, startPage: 21, endPage: 23 },
  // 👉 Neue Episode hinzufügen:
  // { number: 2, startPage: 9, endPage: 16 },
];

// 👉 Dateiformat (falls du später png/jpg nutzt)
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
    img.src = `Chapter ${chapter}/Ep${ep.number}_${pageNumber}.${fileFormat}`;

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
    a.href = `#episode${ep.number}`;
    a.textContent = `Episode ${ep.number}`;

    li.appendChild(a);
    toc.appendChild(li);
  });
}