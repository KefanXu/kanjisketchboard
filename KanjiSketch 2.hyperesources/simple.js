var sketch = function( p ) {
  "use strict";

  var model;
  var dx, dy; 
  var pen_down, pen_up, pen_end; 
  var x, y; 
  var prev_pen = [1, 0, 0];
  var rnn_state; 
  var pdf; 
  var temperature = 0.45; 
  var line_color;
  var model_loaded = false;
  var screen_width, screen_height;
  var ox = 50;

  model = new ms.SketchRNN("https://storage.googleapis.com/quickdraw-models/sketchRNN/large_models/kanji.gen.json");


  var clear_screen = function() {
    p.background(255, 255, 255, 255);
    p.fill(255, 255, 255, 255);
  };

  var restart = function() {
    [dx, dy, pen_down, pen_up, pen_end] = model.zeroInput(); 
    rnn_state = model.zeroState();

    //clear_screen();

  }

  Promise.all([model.initialize()]).then(function() {
    model.setPixelFactor(15.0);
    restart();
    model_loaded = true;
    console.log("model loaded.");
  });

  p.setup = function() {
    screen_width = p.windowWidth; 
    screen_height = p.windowHeight; 
    var colorCode = p.random(0,171)
    x = 50;
    y = 50;
    p.createCanvas(screen_width, screen_height);
    p.frameRate(60);

    line_color = p.color(colorCode, colorCode, colorCode);
  };

  p.draw = function() {
    if (!model_loaded) {
      return;
    }
    var py = 0;
    var px = 0;
    
    if (x < screen_width){
      
      if (prev_pen[2] == 1) {
        
        if (y < screen_height){
          py = py + 60;
          y = y + py;
          x = ox;
          console.log(ox)
        }else{
          py = 0;
          px = px + 20;
          y = 50;
          ox = ox + 150;
          x = ox;
          console.log(x)
          //console.log(x)
          console.log(screen_width)
        }
        restart();
        var colorCode1 = p.random(0,171)
        line_color = p.color(colorCode1, colorCode1, colorCode1);
      }

        rnn_state = model.update([dx, dy, pen_down, pen_up, pen_end], rnn_state);

        pdf = model.getPDF(rnn_state, temperature);

        [dx, dy, pen_down, pen_up, pen_end] = model.sample(pdf);

        if (prev_pen[0] == 1) {
          p.stroke(line_color);
          p.strokeWeight(3.0);
          p.line(x, y, x+dx, y+dy); 
        }

        x += dx;
        y += dy;

        prev_pen = [pen_down, pen_up, pen_end];


    }else{
      clear_screen();
      ox = 50;
      x = ox;
      y = 50;
      
    }

  };

};
var custom_p5 = new p5(sketch, 'sketch');