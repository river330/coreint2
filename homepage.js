/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// console.log("Hello, world!");

// function myFunction() {
//   console.log("First Function start")
//   // let button = document.querySelctor(".welcome");
//   let person = prompt("Hi friend <3", "please enter your name here");
//   if (person != null) {
//     document.getElementById("type").innerHTML = person + "!";
//   }
//   console.log("First Function end");

// typeWriter();
// }

let i = 0;

let txt = prompt("Hi friend <3", "please enter your name here");
let line = "Hi " + txt + "! " + "Welcome to Rand's page.";
let speed = 100;


function typeWriter() {
  if (i < line.length) {
    document.getElementById("type").innerHTML += line.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
    document.getElementById("type").style.color="#E3F32A";
    
  }
  // getName();
}

// function getName() {
//   const newDiv = document.createElement("colors");
//   newDiv.innerHTML = txt;
//   newDiv.style.color="#D4E141";
  
  
// }


// function newOne() {
//   newDiv.appendChild(txt);
//   document.getElementById("color").style.color = "#D4E141";

// }


window.onload = typeWriter();







