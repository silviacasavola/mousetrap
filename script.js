d3.svg('assets/prova.svg').then(function(svg) {
  let mySvg = svg.documentElement;
  let container = d3.select("#visualization-container");

  countdown()

  container.node().appendChild(mySvg);

d3.selectAll("svg").attr("class", "blurred");

    d3.selectAll("path")
    .each(function() {
      d3.select(this).classed("my-filter", true);
    });

    for (let i = 1; i <= 16; i++) {
      const groupID = "g" + i;
      const group = mySvg.querySelector("#" + groupID);

      $(group).attr("class", "my-group")


      // startheart()

      if (i !== 1) {
        $(group).addClass("hidden-shape");
      }


      $(group).click(function () {

      const randomNum = Math.random();

      if (i === 1) { shownew()}

      else {

      if (randomNum < 0.3) { shownew() }

      if (randomNum >= 0.3 && randomNum < 0.6) { goB() }

      if (randomNum >= 0.6 && randomNum < 0.9) { shakeit() }

      }

      })
    }

    function shownew() {
    let hiddenarr = mySvg.querySelectorAll(".hidden-shape")
    let target = hiddenarr[(Math.floor(Math.random() * hiddenarr.length))]

    $(target).removeClass("hidden-shape").attr("cursor", "pointer")
    }

    function shakeit() {
          mySvg.style.animation = "noise 0.2s infinite";

        setTimeout(() => {
          mySvg.style.animation = "none";
        }, 1000);
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

function changecolor() {

}
