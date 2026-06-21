// =====================================
// 📚 CHAPTER DATENBANK
// =====================================

console.log("comic-data.js loaded");


const COMIC_INFO = {

  latestChapter: 1,
  latestEpisode: 7,

  latestArc: 1

};

window.COMIC_INFO = COMIC_INFO;

const CHAPTERS = {

  "1": {
  titleEN: "A Dangerous Prayer",
  titleDE: "Ein gefährliches Gebet",

  arc: 1,

  folderEN: "Arc 1/Chapter 1",

  folderDE: "Arc 1/Chapter 1",

  previous: "prologue",
  next: 2,

  latestEpisode: 7,

    episodes: [
      { number: 1, startPage: 1, endPage: 7 },
      { number: 2, startPage: 8, endPage: 11 },
      { number: 3, startPage: 12, endPage: 17 },
      { number: 4, startPage: 18, endPage: 20 },
      { number: 5, startPage: 21, endPage: 23 },
      { number: 6, startPage: 24, endPage: 25 },
      { number: 7, startPage: 26, endPage: 28 }
    ]
  },

};
