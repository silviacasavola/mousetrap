d3.svg('assets/prova.svg').then(function(svg) {
  let mySvg = svg.documentElement;
  let container = d3.select("#visualization-container");

  countdown()

  container.node().appendChild(mySvg);

    for (let i = 1; i <= 16; i++) {
      const groupID = "g" + i;
      const group = mySvg.querySelector("#" + groupID);

      const secondgroupID = "g" + (i+1);
      const secondgroup = mySvg.querySelector("#" + secondgroupID);

      $(group).attr("class", "my-group")

      if (i !== 1) {
        $(group).attr("display", "none")
      }

      if (i < 16) {
        $(group).click(function () {
          $(secondgroup).attr("display", "block")
        })
      }
      }

  //   const initialGroups = d3.select("svg")
  //     .selectAll("g")
  //     .filter(function() {
  //       return !d3.select(this).attr("i:extraneous");
  //     });
  //
  // const allGroups = initialGroups.selectAll("g")
  //   .each(function() {
  //       const group = d3.select(this);
  //       const groupID = group.attr("id");
  //
  //       if (groupID) {
  //       group.attr("class", "my-group");
  //       group.attr("display", "none");
  //
  //       if (groupID === "g1") {
  //         group.attr("display", "block");
  //       }
  //     }
  //   })

    // opacity()
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

let buttonsarray = [];
let first;
let second;
let fistobj;

function opacity () {
  for (i = 1; i < 16; i++) {
  buttonsarray = '#' + i;
  // first = '$("#' + i + '")';
  second = '$("#' + (i+1) + '")';

  console.log($(buttonsarray))

  $(buttonsarray).click(function () {
    console.log(i)
  // console.log(first + second)
  // $("#" + second).css("display", "block")
  })
}
}

  // console.log(buttonsarray)
// $("#g1").click(function () {
//   css("opacity", "1")
// $("#g2").css("opacity", "1")
// $("#g3").css("opacity", "1")
// $("#g4").css("opacity", "1")
// $("#g5").css("opacity", "1")
// $("#g6").css("opacity", "1")
