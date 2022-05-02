console.log("Hello, world!");

var Airtable = require("airtable");
var base = new Airtable({ apiKey: "keyv95oI4fnSU3EgP" }).base(
  "apprYjkG6aBXj2WbE"
);

base("Main").select({view: "grid"}).eachPage(gotPageOfSeasons, gotAllSeasons);

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
    const h2 = document.createElement("div");
    h2.innerText = season.fields.Season; 
    parent.appendChild(h2);   
    h2.classList.add("card");
  
  })

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
}, {})

function observeCards(){
lastCardObserver.observe(document.querySelector(".card:last-child"))

}

const cardContainer = document.querySelector(".scroll");

function onLoad(){
  const cards = document.querySelectorAll(".card");
  console.log("onLoad completed")
    cards.forEach(card => {
    	const clone = card.cloneNode(true);
    		// observer.observe(clone);
    		cardContainer.appendChild(clone); 
    });
}







