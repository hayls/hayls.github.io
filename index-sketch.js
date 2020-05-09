var cnv;

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function setup() {
    cnv = createCanvas(400, 400);
    canvas.parent('sketch-div');
    background('#f4f1ea');
}

function draw() {
    ellipse(mouseX, mouseY, 50);
}

//function windowResized() {
//  centerCanvas();
//}
