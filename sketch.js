var junction_font = new FontFace('Roadsign', 'url(https://cdn.glitch.global/25bf5b7b-fb4b-45fa-9cdc-b297517d3008/Roadsign-Regular.otf?v=1650338100388)');

junction_font.load().then(function(loaded_face) {
	// loaded_face holds the loaded FontFace
}).catch(function(error) {
	// error occurred
});


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

  //   colorPicker = select("#background");
  //   colorPicker.position(30, 140);

  colorPicker2 = select("#fontcolor");
  colorPicker2.style("height", "60px");
  colorPicker2.style("width", "60px");
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

  
  textFont("roadsign")
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


