console.log("Hello, world!");

var Airtable = require("airtable");
var base = new Airtable({ apiKey: "keyv95oI4fnSU3EgP" }).base(
  "appv5T68yi4yzcTDK"
);

base("Queens").select({view: "grid"}).eachPage(gotPageOfSeasons, gotAllSeasons);

const seasons = [];

function gotPageOfSeasons(records, fetchNextPage) {
  console.log("gotPageOfSeasons()");
  //add the records from this page to our seasons array
  seasons.push(...records);
  //requestmore pages
  fetchNextPage();
}

function gotAllSeasons(err) {
  console.log("gotAllSeasons()");
  //report an error
  if (err) {
    console.log("error loading seasons");
    console.error(err);
    return;
  }

  //call functions to log and show the seasons
  consoleLogSeasons();
  showSeasons();
}

function consoleLogSeasons() {
  console.log("consoleLogSeasons()");
  seasons.forEach((season) => {
    console.log("Seasons:", season);
  });
}

//loop through the seasons, create h2 for each season 
function showSeasons(){
  console.log("showSeasons()"); 

  let parent = document.querySelector(".scroll")
  seasons.forEach((season)=> {
    const card = document.createElement("div");
    card.classList.add("card");
    parent.appendChild(card);

    const h2 = document.createElement("span");
    h2.innerText = season.fields.Name; 
    card.appendChild(h2);   
    h2.classList.add("names");

    const img = document.createElement("img");
    img.src = season.fields.Images[0].url;
    img.classList.add("images")
    card.appendChild(img);   


    
  const rankings = document.createElement("div");
  rankings.classList.add("rankings");
  card.appendChild(rankings);


    const title = document.createElement("div");
    title.classList.add("titles");
    title.innerText = season.fields.Nickname + " - " + "Season " + season.fields.Season;
    title.style.color = "white";
    rankings.appendChild(title);
   
 


   const win = document.createElement("div");
   win.classList.add("wins")
   win.innerText = season.fields.Wins;
   rankings.appendChild(win)

   const high = document.createElement("div");
   high.classList.add("highs")
   high.innerText = season.fields.Highs;
   rankings.appendChild(high)

   const safe = document.createElement("div");
   safe.classList.add("safes")
   safe.innerText = season.fields.Safes;
   rankings.appendChild(safe)

   const low = document.createElement("div");
   low.classList.add("lows")
   low.innerText = season.fields.Lows;
   rankings.appendChild(low)

   const bottom = document.createElement("div");
   bottom.classList.add("bottoms")
   bottom.innerText = season.fields.Bottoms;
   rankings.appendChild(bottom);


    img.addEventListener("mouseenter", function(event){
      h2.style.opacity = "1";
      img.classList.add("bounce");
    });
    img.addEventListener("mouseleave", function(event){
      h2.style.opacity = "0";
      img.classList.remove("bounce");
    });

    img.addEventListener("click", function(event){
      rankings.classList.toggle("rankingOpen");
      // rankings.style.zIndex = "99"
    
    });
    rankings.addEventListener("click", function(event){
      console.log("it worked")
      rankings.classList.remove("rankingOpen");
    
    });
   
});

  observeCards();
  // onLoad();
}



// const observer = new IntersectionObserver(entries => {
// 	entries.forEach(entry => {
// 	})
// }, {
// 	threshold:.5,
// 	rootMargin: "-50px"
// })


const lastCardObserver = new IntersectionObserver(entries => {
  const cards = document.querySelectorAll(".card");
	const lastCard = entries[0]
	if (!lastCard.isIntersecting) return
  console.log("hurray");
	onLoad();
	lastCardObserver.unobserve(lastCard.target);
	lastCardObserver.observe(document.querySelector(".card:last-child"));
}, {

	rootMargin: "100px"
})

function observeCards(){
lastCardObserver.observe(document.querySelector(".card:last-child"))

}

let cardContainer = document.querySelector(".scroll");

function onLoad(){
  const cards = document.querySelectorAll(".card");
  console.log("onLoad completed")
    cards.forEach(card => {
    	const clone = card.cloneNode(true);
        clone.classList.add("card");
    		// observer.observe(clone);
    		cardContainer.appendChild(clone); 

   
        let img = clone.querySelector(".images")
      let rankings = clone.querySelector(".rankings")
      let h2 = clone.querySelector(".names")
    img.addEventListener("mouseenter", function(event){
      h2.style.opacity = "1";
      img.classList.add("bounce");
    });
    img.addEventListener("mouseleave", function(event){
      h2.style.opacity = "0";
      img.classList.remove("bounce");
      
    });

    img.addEventListener("click", function(event){
      rankings.classList.toggle("rankingOpen");
    
    });
    rankings.addEventListener("click", function(event){
      console.log("it worked")
      rankings.classList.remove("rankingOpen");
    
    });
  
});
}










