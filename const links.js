if (!window.LINKS) {

window.LINKS = {
  NewEp: "/Episode Pages/Arc 1/prolog.html#episode1",
  NeuEp: "/Episode Pages DE/Arc 1/prolog.html#episode1"
};

document.querySelectorAll("[data-link]").forEach(el => {
  const key = el.dataset.link;
  if (window.LINKS[key]) {
    el.href = window.LINKS[key];
  }
});

}