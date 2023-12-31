// function startheart() {
  var flyingMen = [];
  var text = ["💔", "🤡", "👎", "🚫"]

  var fsize = "24";
  var windowheight = document.documentElement.clientHeight;
  var windowwidth = document.documentElement.clientWidth;

  function emoji(face, startx, starty, flour, fs, flyUpMax) {
    this.isAlive = true;
    this.face = face;
    this.x = startx;
    this.y = starty;
    this.flourLevel = windowheight - fsize * 2;
    this.increment = -Math.floor((Math.random() * flyUpMax) + 10);
    this.xincrement = Math.floor((Math.random() * 10) + 1);
    this.xincrement *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;
    this.element = document.createElement('div');
    this.element.innerHTML = face;
    this.element.style.position = "absolute";
    this.element.style.fontSize = fs + "px";
    this.element.style.color = "white";
    document.getElementById("emoji-container").appendChild(this.element);

    this.refresh = function () {
      if (this.isAlive) {
        this.y += this.increment;
        this.x += this.xincrement;
        this.increment += 0.8;

        if (this.y >= this.flourLevel) {
          if (this.increment <= 4) {
            this.isAlive = false;
          }
          this.increment = -this.increment + 7;
        }

        this.element.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
      } else {
        this.element.style.transform = "translate(px, px)";
      }
    }
  }

  // button.addEventListener("click", goB);

  function goB() {
    var fontsize = fsize;
    var xv = windowwidth / 2;
    var yv = windowheight / 2;
    var fl = windowheight / 2;
    var face = text[Math.floor(Math.random()*text.length)];
    for (var i = 0; i < 50; i++) {
      var coolGuy = new emoji(face, xv, yv, fl, fontsize, 10);
      flyingMen.push(coolGuy);
    }
    document.getElementById("emoji-container").style.display = "block";
    render(); // Start the animation loop after adding emojis

  }

  function render() {
    var isAnyAlive = false;
    for (var i = 0; i < flyingMen.length; i++) {
      if (flyingMen[i].isAlive) {
        flyingMen[i].refresh();
        isAnyAlive = true;
      } else {
        flyingMen[i].element.remove();
        flyingMen.splice(i, 1);
        i--;
      }
    }

    if (!isAnyAlive) {
      document.getElementById("emoji-container").style.display = "none";
      level = 0;
    } else {
      requestAnimationFrame(render);
    }
  }
// }
