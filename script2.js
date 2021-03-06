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

let button3 = document.querySelector(".unique3");
button3.addEventListener("mouseover", function(){
  document.getElementById("three").style.opacity = "1";
});

button3.addEventListener("mouseout", function(){
  document.getElementById("three").style.opacity = "0";
});




let x = document.querySelector(".links_mobile");

document.querySelector(".menu_button").onclick = function() {
if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }
}

const smallDevice = window.matchMedia("(min-width: 800px)");

smallDevice.addListener(handleDeviceChange);

function handleDeviceChange(e) {
  if (e.matches) x.style.display = "none";
}

// Run it initially
handleDeviceChange(smallDevice);