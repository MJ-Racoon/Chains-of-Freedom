console.log("links.js läuft");

document.addEventListener("DOMContentLoaded", () => {

  const BASE = window.location.pathname.includes("Chains-of-Freedom")
    ? "/Chains-of-Freedom/"
    : "/";

  function getComicData() {
    return window.COMIC_INFO || null;
  }

  function buildLinks() {
    const data = getComicData();

    if (!data) {
      console.warn("COMIC_INFO noch nicht verfügbar...");
      return false;
    }

    console.log("COMIC_DATA gefunden:", data);

    const links = {
      NewEp: `${BASE}Episode Pages/chapter.html?chapter=${data.latestChapter}#episode${data.latestEpisode}`,
      NeuEp: `${BASE}Episode Pages DE/chapter.html?chapter=${data.latestChapter}#episode${data.latestEpisode}`
    };

    document.querySelectorAll("[data-link]").forEach(el => {
      const key = el.dataset.link;
      if (links[key]) el.href = links[key];
    });

    return true;
  }

  const interval = setInterval(() => {
    const done = buildLinks();

    if (done) {
      console.log("Links erfolgreich gesetzt");
      clearInterval(interval);
    }
  }, 50);

});