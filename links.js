document.addEventListener("DOMContentLoaded", () => {

  console.log("links.js läuft");

  window.LINKS = {
    NewEp: "Episode Pages/Arc 1/Ch1.html#episode2",
    NeuEp: "Episode Pages DE/Arc 1/Ch1.html#episode2"
  };

  document.querySelectorAll("[data-link]").forEach(el => {
    const key = el.dataset.link;
    console.log("Setze Link für:", key);

    if (window.LINKS[key]) {
      el.href = window.LINKS[key];
    }
  });

});
