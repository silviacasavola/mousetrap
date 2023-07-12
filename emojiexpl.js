function startheart () {
var flyingMen = [];
var text = "💔";
var button = document.getElementById('g15');
var fsize = "56";
var windowheight = document.documentElement.clientHeight;

//emoji object
  function emoji(face, startx, starty, flour, fs, flyUpMax) {
    this.isAlive = true;
    this.face = face;
    this.x = startx;
    this.y = starty;
    this.flourLevel = windowheight - fsize*2;
    this.increment = -Math.floor((Math.random()*flyUpMax)+10);
    this.xincrement = Math.floor((Math.random()*50)+1);
    this.xincrement *= Math.floor(Math.random()*2) == 1 ? 1 : -1;
    this.element = document.createElement('div');
    this.element.innerHTML = face;
    this.element.style.position = "absolute";
    this.element.style.fontSize = fs + "px";
    this.element.style.color = "white";
    document.getElementById("emoji-container").appendChild(this.element);

    this.refresh = function(){
      if (this.isAlive) {

        this.y += this.increment;
        this.x += this.xincrement;
        this.increment += 0.8;

        if (this.y >= this.flourLevel) {
          if (this.increment <=4) {
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
button.addEventListener("click", goB);

function goB() {
  console.log("hey")
  var fontsize = fsize;
  var xv = (button.getBoundingClientRect().left + button.clientWidth/2) - (fontsize/2);
  var yv = (button.getBoundingClientRect().top + button.clientHeight/2) - (fontsize/2);
  var fl = button.getBoundingClientRect().top + 100;
  var face = text;
  for (var i = 0; i < 50; i++) {
    var coolGuy = new emoji(face, xv, yv, fl, fontsize, 12);
    flyingMen.push(coolGuy);
  }

  document.getElementById("emoji-container").style.display = "block";

}



//Rendering
function render() {
  for (var i = 0; i < flyingMen.length; i++) {
    if (flyingMen[i].isAlive == true) {
      flyingMen[i].refresh();
    } else {
      flyingMen[i].element.remove();
      flyingMen.splice(i, 1);
      document.getElementById("emoji-container").style.display = "none";
    }
  }
  requestAnimationFrame(render);
}
render();
}
