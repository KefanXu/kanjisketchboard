const sketch = function(p) {

  const BASE_URL =
    "https://storage.googleapis.com/quickdraw-models/sketchRNN/large_models/";
  const availableModels = [
    "kanji"
  ];
  let model;

  // Model
  let modelState;
  const temperature = 0.1; // Very low so that we draw very well.
  let modelLoaded = false;
  let modelIsActive = false;

  // Model pen state.
  let dx, dy;
  let x, y;
  let startX, startY; // Keep track of the first point of the last raw line.
  let pen = [0, 0, 0]; // Model pen state, [pen_down, pen_up, pen_end].
  let previousPen = [1, 0, 0]; // Previous model pen state.
  const PEN = { DOWN: 0, UP: 1, END: 2 };
  const epsilon = 2.0; // to ignore data from user's pen staying in one spot.

  // Human drawing.
  let currentRawLine = [];
  let userPen = 0; // above = 0 or below = 1 the paper.
  let previousUserPen = 0;
  let currentColor = "black";

  // Keep track of everyone's last attempts to that we can reverse them.
  let lastHumanStroke; // encode the human's drawing as a sequence of [dx, dy, penState] strokes
  let lastHumanDrawing; // the actual sequence of lines that the human drew, so we can replay them.
  let lastModelDrawing = []; // the actual sequence of lines that the model drew, so that we can erase them.

  // Don't record mouse events when the splash is open.
  let splashIsOpen = true;

  /*
   * Main p5 code
   */
  p.setup = function() {
    // Initialize the canvas.
    const containerSize = document
      .getElementById("sketch")
      .getBoundingClientRect();
    const screenWidth = Math.floor(containerSize.width);
    const screenHeight = Math.floor(containerSize.height);
    p.createCanvas(screenWidth, screenHeight);
    p.frameRate(60);

    //p.background('blue');
    drawChart();

    restart();
    initModel(0); 

    btnClear.addEventListener("click", restart);
    btnRetry.addEventListener("click", retryMagic);
    btnHelp.addEventListener("click", () => {
      splash.classList.remove("hidden");
      splashIsOpen = true;
    });
    btnGo.addEventListener("click", () => {
      splashIsOpen = false;
      splash.classList.add("hidden");
    });
    btnSave.addEventListener("click", () => {
      p.saveCanvas("My Kanji", "jpg");
    });
  };

  p.windowResized = function() {
    console.log("resize canvas");
    const containerSize = document
      .getElementById("sketch")
      .getBoundingClientRect();
    const screenWidth = Math.floor(containerSize.width);
    const screenHeight = Math.floor(containerSize.height);

    p.resizeCanvas(screenWidth, screenHeight);
    drawChart();
  };

  /*
   * Human is drawing.
   */
  p.mousePressed = function() {
    if (!splashIsOpen && p.isInBounds()) {
      x = startX = p.mouseX;
      y = startY = p.mouseY;
      userPen = 1; // down!

      modelIsActive = false;
      currentRawLine = [];
      lastHumanDrawing = [];
      previousUserPen = userPen;
      p.stroke(currentColor);
    }
  };

  p.mouseReleased = function() {
    if (!splashIsOpen && p.isInBounds()) {
      userPen = 0; // Up!
      const currentRawLineSimplified = model.simplifyLine(currentRawLine);

      // If it's an accident...ignore it.
      if (currentRawLineSimplified.length > 1) {
        // Encode this line as a stroke, and feed it to the model.
        lastHumanStroke = model.lineToStroke(currentRawLineSimplified, [
          startX,
          startY
        ]);
        encodeStrokes(lastHumanStroke);
      }
      currentRawLine = [];
      previousUserPen = userPen;
    }
  };

  p.mouseDragged = function() {
    if (!splashIsOpen && !modelIsActive && p.isInBounds()) {
      const dx0 = p.mouseX - x;
      const dy0 = p.mouseY - y;
      if (dx0 * dx0 + dy0 * dy0 > epsilon * epsilon) {
        // Only if pen is not in same area.
        dx = dx0;
        dy = dy0;
        userPen = 1;
        if (previousUserPen == 1) {
          p.line(x, y, x + dx, y + dy); // draw line connecting prev point to current point.
          lastHumanDrawing.push([x, y, x + dx, y + dy]);
        }
        x += dx;
        y += dy;
        currentRawLine.push([x, y]);
      }
      previousUserPen = userPen;
    }
    return false;
  };

  /*
   * Model is drawing.
   */
  p.draw = function() {
    if (!modelLoaded || !modelIsActive) {
      return;
    }

    // New state.
    pen = previousPen;
    modelState = model.update([dx, dy, ...pen], modelState);
    const pdf = model.getPDF(modelState, temperature);
    [dx, dy, ...pen] = model.sample(pdf);

    // If we finished the previous drawing, start a new one.
    if (pen[PEN.END] === 1) {
      console.log("finished this one");
      modelIsActive = false;
    } else {
      // Only draw on the paper if the pen is still touching the paper.
      if (previousPen[PEN.DOWN] === 1) {
        p.line(x, y, x + dx, y + dy);
        lastModelDrawing.push([x, y, x + dx, y + dy]);
      }
      // Update.
      x += dx;
      y += dy;
      previousPen = pen;
    }
  };

  p.isInBounds = function() {
    return (
      p.mouseX >= 0 &&
      p.mouseY >= 0 &&
      p.mouseX < p.width &&
      p.mouseY < p.height
    );
  };

  /*
   * Helpers.
   */
  function retryMagic() {
    p.stroke("white");
    p.strokeWeight(6);

    // Undo the previous line the model drew.
    for (let i = 0; i < lastModelDrawing.length; i++) {
      p.line(...lastModelDrawing[i]);
    }

    // Undo the previous human drawn.
    for (let i = 0; i < lastHumanDrawing.length; i++) {
      p.line(...lastHumanDrawing[i]);
    }

    p.strokeWeight(3.0);
    p.stroke(currentColor);

    // Redraw the human drawing.
    for (let i = 0; i < lastHumanDrawing.length; i++) {
      p.line(...lastHumanDrawing[i]);
    }

    // Start again.
    encodeStrokes(lastHumanStroke);
  }
  function drawChart(){
    const containerSize = document
    .getElementById("sketch")
    .getBoundingClientRect();
    const screenWidth = Math.floor(containerSize.width);
    const screenHeight = Math.floor(containerSize.height);
    for (let i = 50; i < screenWidth; i = i + 200){
      for(let j = 50; j < screenHeight; j = j + 200){
        p.fill('#222222');
        p.rect(i, j,40,5,20);
        p.rect(i + 18, j - 18,5,40,20);
      }
    }
  }

  function restart() {

    const containerSize = document
    .getElementById("sketch")
    .getBoundingClientRect();

    p.background('white');
    p.strokeWeight(3.0);
    screenWidth = Math.floor(containerSize.width);
    screenHeight = Math.floor(containerSize.height);

    drawChart() 
    // Start drawing in the middle-ish of the screen
    startX = x = p.width / 2.0;
    startY = y = p.height / 3.0;

    // Reset the user drawing state.
    userPen = 1;
    previousUserPen = 0;
    currentRawLine = [];
    strokes = [];

    // Reset the model drawing state.
    modelIsActive = false;
    previousPen = [0, 1, 0];
  }

  function initModel(index) {
    modelLoaded = false;
    document.getElementById("sketch").classList.add("loading");

    if (model) {
      model.dispose();
    }

    model = new ms.SketchRNN(`${BASE_URL}${availableModels[index]}.gen.json`);
    model.initialize().then(() => {
      modelLoaded = true;
      document.getElementById("sketch").classList.remove("loading");
      console.log(`🤖${availableModels[index]} loaded.`);
      model.setPixelFactor(8.0); // Bigger -> large outputs
    });
  }

  function encodeStrokes(sequence) {
    if (sequence.length <= 5) {
      return;
    }

    // Encode the strokes in the model.
    let newState = model.zeroState();
    newState = model.update(model.zeroInput(), newState);
    newState = model.updateStrokes(sequence, newState, sequence.length - 1);

    // Reset the actual model we're using to this one that has the encoded strokes.
    modelState = model.copyState(newState);

    const lastHumanLine = lastHumanDrawing[lastHumanDrawing.length - 1];
    x = lastHumanLine[0];
    y = lastHumanLine[1];

    // Update the pen state.
    const s = sequence[sequence.length - 1];
    dx = s[0];
    dy = s[1];
    previousPen = [s[2], s[3], s[4]];

    lastModelDrawing = [];
    modelIsActive = true;
  }

  function randomColor() {
    return COLORS[Math.floor(Math.random() * COLORS.length)].hex;
  }
  function randomColorIndex() {
    return Math.floor(Math.random() * COLORS.length);
  }
  p.updateCurrentColor = function(index) {
    currentColor = COLORS[index].hex;
  };
};

const p5Sketch = new p5(sketch, "sketch");
