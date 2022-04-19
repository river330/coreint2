
var junction_font = new FontFace('Roadsign', 'url(assets/Roadsign-Regular.otf)');

junction_font.load().then(function(loaded_face) {
	// loaded_face holds the loaded FontFace
}).catch(function(error) {
	// error occurred
});

/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

console.log("Hello, world!");

var Airtable = require("airtable");
var base = new Airtable({ apiKey: "keyv95oI4fnSU3EgP" }).base(
  "appNMXXmr9FozspeW"
);

base("Netflix").select({view: "grid",}).eachPage(gotPageOfBrands, gotAllBrands);

const brands = [];
const Images = [];

function gotPageOfBrands(records, fetchNextPage) {
  console.log("gotPageOfBrands()");
  //add the records from this page to our seasons array
  brands.push(...records);
  //requestmore pages
  fetchNextPage();
}

function gotAllBrands(err) {
  console.log("gotAllBrands()");
  //report an error
  if (err) {
    console.log("error loading brands");
    console.error(err);
    return;
  }

  //call functions to log and show the seasons
  consoleLogBrands();
  showBrandsStart();
}

function consoleLogBrands() {
  console.log("consoleLogBrands()");
  brands.forEach((brand) => {
    console.log("Brands:", brand);
  });
}


let slider = document.getElementById("americana");
let output = document.querySelector(".title");

// loop through the seasons, create h2 for each season 


slider.oninput = function(e) {
  showBrands(e.target);
  
}

function showBrands(e){
  console.log("showSeasons()"); 
  
  output.src = brands[e.value].fields.Images[0].url;
  if (parseInt(e.value) === 5){
    output.style.filter = "invert(100%) saturate(0%) brightness(100%)";
    document.body.style.backgroundColor = "red";
    output.addEventListener("click", function(){
       window.location = "spotify.html";
    });
    output.style.cursor = "pointer"
  } else {
    output.style.filter = "none"
    document.body.style.backgroundColor = "white";
  }
  
}

function showBrandsStart(){
  console.log("showSeasonsStart()"); 
  output.setAttribute("src", brands[0].fields.Images[0].url);
  
}




let x = 0;;
let line = "Roadsign Americana";
let speed = 0;
let color = ["red", "orange", "green", "blue", "pink", "purple", "teal", "#41E5DA", "#E5415F" ]

function typeWriter() {
  setTimeout(function(){
  for (let i = 0; i < 10; i++){
    setTimeout(function(){
    let test = document.getElementsByClassName('test')[i];
    test.style.fontFamily = "Roadsign"
    test.style.color = color[i]
    }, i * 200)
  }
  },300);
}

  // getName();


$(window).on("load", typeWriter());

$.when(typeWriter()).done(function() {
      $(".loader-wrapper").delay(3000).fadeOut(800, "linear");
});