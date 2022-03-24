/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

let button = document.querySelector(".unique");
button.addEventListener("mouseover", function(){
  document.getElementById("one").style.opacity = "1";
});

button.addEventListener("mouseout", function(){
  document.getElementById("one").style.opacity = "0";
});

let button2 = document.querySelector(".unique2");
button2.addEventListener("mouseover", function(){
  document.getElementById("two").style.opacity = "1";
});

button2.addEventListener("mouseout", function(){
  document.getElementById("two").style.opacity = "0";
});

let x = document.querySelector(".links_mobile");

document.querySelector(".menu_button").onclick = function() {
if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }
}
