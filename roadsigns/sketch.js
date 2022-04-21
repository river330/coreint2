


// let roadsign;
// function preload() {
//   roadsign = loadFont('https://cdn.glitch.global/36d37aff-b9be-4a04-8b60-b06c47c86ae9/Roadsign-Regular.ttf?v=1650395803489');
// }

let rbackground = [
 '#FFFFFF',
  '#06B1EF',
  '#000000',
  '#FF5EDF',
  '#0BF5D3',
  '#F352FF',
]; 

let tbackground = [
  '#A720F3',
  '#FFEA00',
  '#A4E840',
  '#E60A0A',
  '#0BF5D3',
  '#1459FD',
]; 

function setup() {
  createCanvas(windowWidth, windowHeight);

  slider = select("#typesize");
  slider.style("width", "200px");
  slider.addClass("mySliders");

  slider2 = select("#leading");
  slider2.style("width", "200px");
  slider2.addClass("mySliders");

  colorPicker = select("#background");
  colorPicker.style("height", "60px");
  colorPicker.style("width", "60px");
  colorPicker.value(random(rbackground));

  //   colorPicker = select("#background");
  //   colorPicker.position(30, 140);

  colorPicker2 = select("#fontcolor");
  colorPicker2.style("height", "60px");
  colorPicker2.style("width", "60px");
  colorPicker2.value(random(tbackground));
  //   colorPicker2.position(30, 200);

  //   colorPicker3 = select("#strokecolor");
  //   colorPicker3.style("height", "60px");
  //   colorPicker3.style("width", "60px");

  myTextArea = select("#type");
  myTextArea.style("font-family", "Helvetica");
  myTextArea.style("width", "200px");

  lettercase = select("#lettercase");
  lettercase.style("width", "110px");
  
  button = select("#save-image");
  button.mousePressed(saveJPG); 
  

  
}



function draw() {
  let root = document.documentElement;
  background(colorPicker.value());

  let color2 = colorPicker2.value();
  fill(color2);
  root.style.setProperty('--my-variable', color2);

  let size_value = slider.value();
  let space_value = slider2.value();
  textSize(size_value);
  textAlign(CENTER, CENTER);
  textLeading(space_value);

  let value = lettercase.value();
  let word = myTextArea.value();

  
  textFont('Roadsign-Regular')
  if (value === "uppercase") {
    let words = text(word.toUpperCase(), windowWidth / 2, windowHeight / 2);
    
  }
  if (value === "lowercase") {
    let words = text(word.toLowerCase(), windowWidth / 2, windowHeight / 2);
  }
  if (value === "regular") {
    var words = text(word, windowWidth / 2, windowHeight / 2);
  }
  // words.elt.style.letterSpacing = space_value;

  // word.style("display", "absolute")

  x = select("#nav");
  x.style("color", colorPicker2.value());

  y = selectAll("label");
  for (let i = 0; i < 4; i++) {
    y[i].style("color", colorPicker2.value());
  }

  //   stroke(colorPicker3.value());
  //   strokeWeight(5);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background("white");
}

function saveJPG() {
   console.log("saving")
    save();
    console.log("saved...?") 
   
} 


