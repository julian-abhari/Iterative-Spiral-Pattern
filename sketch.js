// First function that gets executed
function setup() {
  createCanvas(800, 800, SVG);
  pixelDensity(3);
}

// Function that gets called every frame.
function draw() {
  // Replacing the background of the canvas with this color
  background(255);

  var x = width / 2;
  var y = height / 2;

  for (var i = 1; i < TWO_PI; i += (8 * PI) / 180) {
    for (var j = 0; j < TWO_PI * 2; j += PI / 180) {
      // var color_index = map(j, 0, TWO_PI * 2, 0, 255);
      fill(255, 0, 0);
      stroke(255, 0, 0);
      strokeWeight(2);
      arc(
        x + ((0.08 * (j * 180)) / PI) * i * cos(i),
        y + ((0.08 * (j * 180)) / PI) * i * sin(i),
        (0.08 * (j * 180)) / PI,
        (0.08 * (j * 180)) / PI,
        j,
        j + PI / 180,
      );
    }
  }
}

function mousePressed() {
  console.log("Downloading Canvas as SVG!");
  save("sketch.svg");
}
