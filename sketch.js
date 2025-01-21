// First function that gets executed
function setup() {
  createCanvas(1500, 800);
  pixelDensity(3);
}

// Function that gets called every frame.
function draw() {
  // Replacing the background of the canvas with this color
  background(0);

  var x = width / 2;
  var y = height / 2;

  for (var i = 1; i < TWO_PI * 2; i += (12 * PI) / 180) {
    for (var j = 0; j < TWO_PI; j += PI / 180) {
      var color_index = map(j, 0, TWO_PI, 0, 255);
      noStroke();
      arc(
        x + ((0.25 * (j * 180)) / PI) * i * cos(i),
        y + ((0.25 * (j * 180)) / PI) * i * sin(i) + 100,
        (0.25 * (j * 180)) / PI,
        (0.25 * (j * 180)) / PI,
        j,
        j + PI / 180,
      );
    }
  }
}
