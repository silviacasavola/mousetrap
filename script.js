var level = 0;

d3.svg('assets/graphics.svg').then(function(svg) {
  let mySvg = svg.documentElement;
  let container = d3.select("#visualization-container");

  countdown()

  container.node().appendChild(mySvg);

d3.selectAll("svg").attr("class", "blurred");

let shapes;
let color;
let colors = [];

d3.selectAll("path").each(function() {
  if (d3.select(this).classed("st7") || d3.select(this).classed("st5") || d3.select(this).classed("st4") || d3.select(this).classed("st0") || d3.select(this).classed("st6") || d3.select(this).classed("st24")) {
    shapes = d3.select(this);
    d3.select(this).classed("my-filter", true);

      let color = d3.select(this).style('fill');
      if (color !== "rgb(255, 255, 255)") {
        d3.select(this).classed("coloured-shapes", true);
        colors.push(color);
      }
    }
  });


    for (let i = 1; i <= 16; i++) {
      const groupID = "g" + i;
      const group = mySvg.querySelector("#" + groupID);

      $(group).attr("class", "my-group")

      if (i !== 1) {
        $(group).addClass("hidden-shape");
      }


      $(group).click(function () {
        if (i !== 9) {
        if (level === 0 || level === 2 || level === 3 || level === 5) { $(group).click(shownew()) }
        else if (level === 1) { $(group).click(shakeit())}
        else if (level === 4) { $(group).click(changecolor()) }
        else if (level === 6) { $(group).click(goB()) }
    } else { darkmode() }
  })
}

// SHOW NEW !!!

    function shownew() {
    let hiddenarr = mySvg.querySelectorAll(".hidden-shape")
    let target = hiddenarr[(Math.floor(Math.random() * hiddenarr.length))]

    $(target).removeClass("hidden-shape").attr("cursor", "pointer")

    level++;
    }

// SHAKE IT !!!

    function shakeit() {
          mySvg.style.animation = "noise 0.2s infinite";

        setTimeout(() => {
          mySvg.style.animation = "none";
        }, 1000);

      level++
    }

// CHANGE COLOR

  function changecolor() {

    d3.selectAll(".coloured-shapes").each(function () {
      if (d3.select(this).classed("recolored")) {
        d3.select(this).classed("recolored", false)
      } else {
        d3.select(this).classed("recolored", true)
      }
    })

    level++
}
})


  // COUNTDOWN
countDownDate =  new Date().getTime() + 65724455;

function countdown () {
// Update the count down every 1 second
var x = setInterval(function() {
  // Get today's date and time
  var now = new Date().getTime();
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("countdown").innerHTML = "00:" + hours + ":"
  + minutes + ":" + seconds;
}, 1000)
}

function darkmode() {
  $("body").addClass("dark-mode");

  setTimeout(() => {
  $("body").removeClass("dark-mode")
}, 3000);
}

// rosso: 7
// blu: 5
// viola: 0
// giallo: 6
// verde: 4
