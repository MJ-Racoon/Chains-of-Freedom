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
// 👉 News Fähnchen erzeugen
// - erscheint stets beim neuesten Datum
// - wenn ich alten post recycle muss ich nur das Datum ändern, und das Fähnchen erscheint wieder
// 
// =========================================

const newsPosts = [

  // =====================================
  // Default Post
  // =====================================

  {
    
    id: "default post",
    
    titleDE: "Tja, grad gibt's nix zu sagen. ¯\_(ツ)_/¯",
    
    titleEN: "Welp, there's nothing to say at the moment. ¯\_(ツ)_/¯",
    

    status: "archived",

    notify: false,

    contentDE: `
      <div class="news-content">

        <p>
        </p>

        
      </div>
    `,

    contentEN: `
      <div class="news-content">

        <p>
   
        </p>

      </div>
    `
  },

  // =====================================
  // 🆕 YIM announcement
  // =====================================

  {
    id: "YIM announcement",

    titleDE: "Der offizielle Launch auf dem Youth and Mission congress",
    
    titleEN: "The Official Launch of the Comic at the youth in Mission congress",
    
    date: "3/04/2026",

    status: "archived",

    notify: true,

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
  // 🆕 first patreon
  // =====================================

  {
    id: "first patreon",

    titleDE: "Der erste Patreon bekommt etwas besonderes ;)",

    titleEN: "First Patreon gets something special ;)",

    date: "14/02/2026",

    status: "archived",

    notify: false,

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
  // 🆕 Website Fixes
  // =====================================

  {
    id: "Website Fix",
    titleDE: "WICHTIG!<br> Probleme mit dem Newsletter behoben",
    highlightDE: "WICHTIG!",
    titleEN: " IMPORTANT! <br> Subscription issues fix",
    highlightEN: "IMPORTANT!",
    date: "13/05/2026",

    status: "archived",

    notify: false,

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

          

        </div>

        <img src="Img/Warning.webp" height="200px" style="margin-bottom: "60px"/>

      </div>
    `
  },

  

  // =====================================
  // 🆕 Artfight
  // =====================================

  {
    id: "artfight",

    titleDE: "Die Artfight saison beginnt bald, der Comic wird kurz pausiert!",
   
    titleEN: "Artfight season starts soon, the comic will be put on a short hiatus!",
   
    date: "28/06/2026",

    status: "archived",

    notify: true,

    contentDE: `
      <div class="news-content">

        <div class="button-content">

          <p>
           Ach ja, Artfight. Die inoffiziellen lieblings Feiertage der Künstler, 
           die den gesamten Juli lang anhalten. Was Ist Artfight fragt ihr euch? Nun, es ist
           ein jährliches Spiel, bei dem ale möglichen Künstler, egal ob jung oder alt, neu oder erfahren, 
           auf einer Website zusammenkommen und sich gegenseitig Zeichnungen von ihren Charakteren schenken.
           Für viele Künstler, ist das besser als Weihnachten, weil du deine Zeit und Leidenschaft dafür aufbringst 
           um fremden Menschen im Internet eine Freude zu machen und dabei vielleicht auch etwas zurück zu bekommen. 
           Deswegen wird der Comic über den Juli hinweg pausiert, damit ich ohne Druck und stress Artfight genießen kann. 
           Aber keine Sorge, ich habe eine Episode extra vorbereitet, damit ihr bis August nicht verhungert. ;) 
          </p>

        

          <h4> <br> <br>  Falls du sehen willst, was ich im Juli alles so mache, hier ist: </h4>

         <a class="newest-shiat-btn news-btn"
             href="https://artfight.net/~MJ_Thundercat">

              mein Artfight profil!

          </a>

        </div>

        <img src="https://shop.artfight.net/cdn/shop/files/original_by_inuf-dbbkwd8.png?v=1705602132" height="200px" style="margin-bottom: "60px"/>

      </div>
    `,

    contentEN: `
      <div class="news-content">

        <div class="button-content">

          <p>
           Aaah yes, Artfight. The annual inofficial holiday for all Artists during all of July. What is Artfight you ask? Well, 
           it's an annual Art gifting game, where all sorts of Artists come together and draw each others characters as a gift.
           For many Artists, this is often better than Christmas, because you are able to spend time and passion to make art for complete strangers on the inthernet, but also maybe get something back.
           And because I will not miss out on that this year and because I don't wanna burn out as I'm drawing, the comic will be put on a short hiatus during July.
           But don't worry, I made one Episode in advance, which will be posted in the middle of July, so you don't starve until August. ;)
          </p>


          <h4> <br> <br> If you wanna see what I'm up to during July, here's: </h4>

          <a class="newest-shiat-btn news-btn"
             href="https://artfight.net/~MJ_Thundercat">

             my Artfight profile!

          </a>

        </div>

        <img src="https://shop.artfight.net/cdn/shop/files/original_by_inuf-dbbkwd8.png?v=1705602132" height="200px" style="margin-bottom: "60px"/>

      </div>
    `
  },


  // =====================================
  // 🆕 Cameo announcement
  // =====================================

  {
    id: "cameo",

    titleDE: "Da hat sich jemand wohl in mein Comic geschlichen! >:3",
   
    titleEN: "Looks like someone snook into my comic! >:3",
   
    date: "30/08/2026",

    status: "active",

    notify: true,

    contentDE: `
      <div class="news-content">

        <div class="button-content">

        <p>
          
          Es ist die höchste Behlohnung die man als finanzieller Supporter bei mir kriegen kann. 
          Du, ja du, dein ausgedachter Charakter oder sogar dein Hund können es irgendwo in die Welt von Huva schaffen. 
          Ich habe auf meiner Support Seite einen ganzen neuen Abschnitt dafür geschaffen, damit ihr diese kleinen cameos auch findet. 
          Aber leider konnte ich bisher nur einer der 3 Supporter, die bereits einen Anspruch auf ein Cameo haben in den Comic einbinden. 
          Keine Sorge, sie werden noch kommen, aber ich habe noch nicht genügend Hintergründe an öffentlichen Orten gezeichnet um euch darin zu verstecken. 
          Außerdem, ist die Geschichte noch lang genug. Vielleicht müsst ihr noch etwas warten, bis ich genau die stelle finde, die euch gerecht wird. 
      
          </p>
          <h4> <br> <br> Ich wünsche dir jedenfalls noch einen gesegneten Tag. Und wenn du schon dabei bist, 
          wirf doch einen kleinen blick auf die: </h4>

 <a class="newest-shiat-btn news-btn"
             href="Support me/Support Me.html#supporter-cameos">
             Support Seite

              

          </a>
         

        </div>

       

      </div>
    `,

    contentEN: `
      <div class="news-content">

        <div class="button-content">

          <p>
           It's the highest reward you can get for supporting me financially. 
           You, yes you, your original character, or even your dog can 
           make it somewhere into the World of Huva. I made a whole new section for it
           on my support page so people can actually find the cameos. But unfortunately only one 
           of the 3 People who already earned this award has made it into the comic right now. 
           Don't worry they will come but I haven't drawn enough backgrounds in public spaces yet
           yet to hide you guys in there. Also the story is still long enough. Maybe you have to wait a little, until
           I have wound just the right place to put you in. 
          </p>
          <h4> <br> <br> Anyway, have a blessed day and maybe check out the: </h4>

 <a class="newest-shiat-btn news-btn"
             href="Support me/Support Me.html#supporter-cameos">
             Support page

              

          </a>
          

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



// =========================================
// 🔔 NEWS NOTIFICATION
// =========================================

(function () {

  // Nur Posts berücksichtigen,
  // die ausdrücklich eine Notification erlauben.
  const notificationPosts = newsPosts.filter(post =>
    post.notify === true && post.date && post.id
  );


  // Keine Notification-Posts vorhanden
  if (notificationPosts.length === 0) return;


  // =========================================
  // NEUESTEN NOTIFICATION-POST FINDEN
  // =========================================

  const newestPost = notificationPosts
    .slice()
    .sort((a, b) => new Date(b.date) - new Date(a.date))[0];


  // =========================================
  // POST-ID
  // =========================================

  const postID = newestPost.id;


  // =========================================
  // BEREITS GESEHEN?
  // =========================================

  const lastSeenPost =
    localStorage.getItem("cof-last-seen-news");

  if (lastSeenPost === postID) return;


  // =========================================
  // NOTIFICATION ERSTELLEN
  // =========================================

  const notification =
    document.createElement("div");

  notification.className =
    "news-notification";


 
notification.innerHTML = `

    <div class="news-notification-inner">

        <p class="news-notification-title">
            ${isGerman ? "✦ Neue News!" : "✦ New News!"}
        </p>

        <p class="news-notification-text">
            ${isGerman
                ? "Es gibt einen neuen Beitrag!"
                : "There's a new news post!"}
        </p>

    </div>

`;




  document.body.appendChild(notification);


  // =========================================
  // HEADER POSITIONIERUNG
  // =========================================

  const topBar =
    document.querySelector(".top-bar");

  const navbar =
    document.querySelector(".navbar");


  function updatePosition() {

    if (!topBar || !navbar) return;


    /*
      Wir nehmen die Unterkante
      der Navbar als Ausgangspunkt.
    */

    const navbarBottom =
      navbar.getBoundingClientRect().bottom;


    /*
      Ganz oben auf der Seite:

      Notification sitzt unter
      dem kompletten Header.
    */

    if (window.scrollY <= 5) {

      notification.style.top =
        (navbarBottom + 12) + "px";

    }


    /*
      Sobald gescrollt wurde:

      Notification wandert nach oben.
    */

    else {

      notification.style.top =
        "15px";

    }

  }


  // Initiale Position
  updatePosition();


  // Bei Scroll
  window.addEventListener(
    "scroll",
    updatePosition,
    { passive: true }
  );


  // Bei Fenstergrößenänderung
  window.addEventListener(
    "resize",
    updatePosition
  );


  // =========================================
  // EINBLENDEN
  // =========================================

  requestAnimationFrame(function () {

    notification.classList.add("show");

  });


  // =========================================
  // KLICK
  // =========================================

  notification.addEventListener(
    "click",
    function () {

      const newsSection =
        document.getElementById("news-active");


      if (newsSection) {

        newsSection.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

      }


      // Als gesehen markieren
      localStorage.setItem(
        "cof-last-seen-news",
        postID
      );


      // Ausblenden
      notification.classList.remove("show");


      setTimeout(function () {

        notification.remove();

      }, 500);

    }
  );


})();





