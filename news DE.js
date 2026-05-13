// ===============================
// 📰 CHAINS OF FREEDOM - NEWS SYSTEM
// ===============================
//
// 👉 HIER neue News hinzufügen
//
// Jede News besteht aus:
//
// {
//   title: "Titel",
//
//   content: `
//     HTML INHALT HIER
//   `
//
// }
//
// ---------------------------------
// ✅ Du kannst ALLES benutzen:
// - <p>
// - <img>
// - <a>
// - Buttons
// - divs
// - emojis
// - etc.
// ---------------------------------
//
// 👉 Neueste Posts immer OBEN einfügen
//
// 👉 Alte Posts NICHT löschen
// Einfach weiter unten stehen lassen
//
// ===============================



const newsPosts = [

  // =========================================
  // 🆕 NEUESTE NEWS IMMER HIER OBEN
  // =========================================



  {
    title: "Der offizielle Launch auf dem Youth and Mission congress",

    content: `

      <div class="news-content">

        <p>
          Willkommen an Jeden, der diese Seite durch die Visitenkarten vom YIM gefunden hat, 
          Ihr könnt euch gar nicht vorstellen, wie sehr ich mich freue, diesen Comic ENDLICH zu veröffentlichen. 
          Ich habe sicher schon mehr als 3 Jahre lang an der Geschichte geschrieben, weil ich mich entschieden habe 
          meine künstlerischen Gaben in Gottes Hand zu legen. Deswegen ist es mir umso wichtiger, dass die Geschichte, 
          die ich erzähle Gottes Willen entspricht. Und... naja er hat mich noch nicht aufgehalten, also bin ich
          wohl auf dem richtigen Weg. XD
        </p>

        <img src="Img/Emotes/Hiiiiiiiii.webp" height="150px"/>

      </div>

    `
  },



  {
    title: "To everyone, who alread",

    content: `

      <div class="news-content">

        <div class="button-content">

          <p>
            Der Erste, der meinen Patreon abonniert, egal welches Level, bekommt alle Vorzüge von Level 3. 
            Sprich eine doodle neben seinen Namen in den Credits und ein Cameo irgendwo im Hintergrund meines Comics.
          </p>

          <a class="newest-shiat-btn news-btn"
             href="https://www.patreon.com/15612233/join">

             sei der erste!

          </a>

        </div>

        <img src="Img/Emotes/mysterious.webp" height="120px"/>

      </div>

    `
  }

];



// ============================================
// ⚙️ NICHT MEHR ÄNDERN (SYSTEM)
// ============================================

document.addEventListener("DOMContentLoaded", () => {

  const container = document.getElementById("news-container-DE");

  // Sicherheitscheck
  if (!container) {
    console.error("❌ news-container nicht gefunden!");
    return;
  }

  // News erstellen
  newsPosts.forEach(post => {

    const blob = document.createElement("div");

    blob.className = "news-blob";

    blob.innerHTML = `
      <h2>${post.title}</h2>
      ${post.content}
    `;

    container.appendChild(blob);

  });

});