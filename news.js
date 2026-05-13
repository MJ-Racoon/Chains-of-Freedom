const isGerman = window.location.pathname.includes("DE");



// =========================================
// 📰 NEWS POSTS
// =========================================
//
// 👉 Neue Posts IMMER OBEN hinzufügen
//
// 👉 Du kannst in contentDE/contentEN
// normales HTML benutzen:
//
// - <p>
// - <img>
// - <a>
// - Buttons
// - divs
// - etc.
//
// =========================================

const newsPosts = [

  // =====================================
  // 🆕 POST 1
  // =====================================

  {
    titleDE: "Der offizielle Launch auf dem Youth and Mission congress",
    
    titleEN: "The Official Launch of the Comic at the youth in Mission congress",
    
    date: "3/04/2026",

    status: "archived",

    contentDE: `
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
    `,

    contentEN: `
      <div class="news-content">

        <p>
          Welcome to everyone who came here from the little QR code cards, that I handed out at the YIM. 
          You can't imagine how excited I am to finally release this comic. 
          For more than 3 Years I'm already writing on this story because I decided to put my artistic gifts into Gods hand.
          That is why it is all the more important to me that the story I tell is in accordance with God’s will.
          And... well he didn't stop me yet, so I guess I'm on the right path. XD
        </p>

        <img src="Img/Emotes/Hiiiiiiiii.webp" height="150px"/>

      </div>
    `
  },



  // =====================================
  // 🆕 POST 2
  // =====================================

  {
    titleDE: "Der erste Patreon bekommt etwas besonderes ;)",

    titleEN: "First Patreon gets something special ;)",

    date: "14/02/2026",

    status: "active",

    contentDE: `
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
    `,

    contentEN: `
      <div class="news-content">

        <div class="button-content">

          <p>
         The first person to subscribe to my patreon, no matter the tier, will get the perks of tier 3.
            That means a little doodle next to their name in the credits, as well as a little cameo 
            in the Background of the comic.
           </p>

         

        </div>

        <img src="Img/Emotes/mysterious.webp" height="120px"/>

      </div>
    `
  },


    // =====================================
  // 🆕 POST 3
  // =====================================

  {
    titleDE: "WICHTIG!<br> Probleme mit dem Newsletter behoben",
    highlightDE: "WICHTIG!",
    titleEN: " IMPORTANT! <br> Subscription issues fix",
    highlightEN: "IMPORTANT!",
    date: "13/05/2026",

    status: "active",

    contentDE: `
      <div class="news-content">

        <div class="button-content">

          <p>
            An Jeden, der bisher versucht hat den Comic zu abonnieren. Ich musste mit Schrecken feststellen, 
            dass ein wichtiger teil des Anmeldeprozesses kaputt war. Das heißt also, alle die, die bisher versucht haben den Comic 
            zu abonnieren, haben keine bestätigungs Email erhalten. Ich habe es am 13.5.06 gefixt, also alle, die sich vor diesem Datum
            angemeldet haben, versucht es erneut und bestätigt eure Anmeldung in der Bestätigungs Mail. 
            Vielen Dank für euer Verständnis. 
          </p>

        </div>

        <img src="Img/Warning.webp" height="200px" style="margin-bottom: "60px"/>

      </div>
    `,

    contentEN: `
      <div class="news-content">

        <div class="button-content">

          <p>
             To everyone, who tried to subscribe until now! I have discovered in horror, 
             that an important part of the sign up process was broken. So most of you, 
             who tried to subscribe til now, have not recieved a confirmation Email. I fixed it May 13th 26. 
            So all who signed up before that date Please try subscribing again and klick the conformation in the email, that you will recieve.
            Thank you for your understanding.  
          </p>

          </a>

        </div>

        <img src="Img/Warning.webp" height="200px" style="margin-bottom: "60px"/>

      </div>
    `
  }

];



// =========================================
// ⚙️ SYSTEM (NICHT ÄNDERN)
// =========================================

const activeContainer = document.getElementById("news-active");
const archiveContainer = document.getElementById("news-archive");

if (!activeContainer && !archiveContainer) {
  console.error("Container nicht gefunden!");
}


// ===============================
// ✨ HIGHLIGHT FUNKTION
// ===============================
function highlightText(text, word) {
  if (!word) return text;

  const regex = new RegExp(word, "gi");

  return text.replace(regex, match =>
    `<span class="highlight">${match}</span>`
  );
}


// ===============================
// 📅 SORTIERUNG
// ===============================
newsPosts.sort((a, b) => new Date(b.date) - new Date(a.date));


// ===============================
// 📰 RENDER NEWS
// ===============================
newsPosts.forEach(post => {

  const container = post.status === "archived"
    ? archiveContainer
    : activeContainer;

  if (!container) return;

  const blob = document.createElement("div");
  blob.className = "news-blob";

  // Sprache wählen
  const titleRaw = isGerman ? post.titleDE : post.titleEN;
  const content = isGerman ? post.contentDE : post.contentEN;

  const highlightWord = isGerman ? post.highlightDE : post.highlightEN;

  // ✨ Highlight anwenden
  const title = highlightText(titleRaw, highlightWord);

  blob.innerHTML = `
    <h2>${title}</h2>
    ${content}
  `;

  container.appendChild(blob);

});