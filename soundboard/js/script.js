

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
    h2.innerText = season.fields.Name; 
    parent.appendChild(h2);   
    h2.classList.add("card");

    h2.style.backgroundColor = season.fields.Color;
    
    let audio = document.createElement("audio");
    h2.appendChild(audio);
    audio.src = season.fields.Sound[0].url;
    audio.classList.add("audial")

    h2.addEventListener("click", function(event){
      if (!$(cardContainer).hasClass("stop")){
        cardContainer.classList.add("stop");

        audio.play();
        h2.classList.add("on");
        $(".card:not(.on)").css("opacity", "0.4");
        setTimeout(function(){
          cardContainer.classList.remove("stop");
          h2.classList.remove("on");
          h2.style.opacity ="1";
          h2.style.transition="all 0.3s";
          $(".card").css("opacity", "1");
        }, 4000)
      }
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
        clone.addEventListener("click", function(event){
          if (!$(cardContainer).hasClass("stop")){
            let audio = clone.querySelector(".audial");
            cardContainer.classList.add("stop");

            audio.play();
            clone.classList.add("on");
            $(".card:not(.on)").css("opacity", "0.4");
            setTimeout(function(){
              cardContainer.classList.remove("stop");
              clone.classList.remove("on");
              clone.style.opacity ="1"
              clone.style.transition="all 0.3s"
              $(".card").css("opacity", "1");
            }, 4000)
          }
    });
});
}

let menu = document.querySelector(".menu");

// menu.addEventListener("click", function(){
//   let links2 = document.querySelectorAll(".testing");

//   links2.forEach(function(link){ 
//     link.classList.toggle("moveIn")
//     }
//    );
// });
$('.links').hide()

$('.menu').click(function() {
  $('.links').animate({
    width:"toggle"
  });
})

// let links2 = document.querySelectorAll(".testing");

// $(menu).toggle(
//   function(){

//     links2.forEach(link =>
//     link.classList.add("moveIn"))
//     link.classList.remove("moveOut");
//   },
//   function(){
//     links2.forEach(link =>
//     link.classList.remove("moveIn"))
//     link.classList.add("moveOut");
//   }

// )









