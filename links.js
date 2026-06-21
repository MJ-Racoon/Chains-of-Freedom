const BASE = window.location.pathname.includes("Chains-of-Freedom")
  ? "/Chains-of-Freedom/"
  : "/";

document.addEventListener("DOMContentLoaded", () => {

  console.log("links.js läuft");

window.LINKS = {

  NewEp:
    `${BASE}Episode Pages/chapter.html?chapter=${COMIC_INFO.latestChapter}#episode${COMIC_INFO.latestEpisode}`,

  NeuEp:
    `${BASE}Episode Pages DE/chapter.html?chapter=${COMIC_INFO.latestChapter}#episode${COMIC_INFO.latestEpisode}`

};

  document.querySelectorAll("[data-link]").forEach(el => {
    const key = el.dataset.link;
    console.log("Setze Link für:", key);

    if (window.LINKS[key]) {
      el.href = window.LINKS[key];
    }
  });

});
