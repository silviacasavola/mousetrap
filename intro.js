let entered = false;
let aboutclose = true;

$('.inner').draggable({
  containment: 'parent',
  cursor: 'move',
  revert: true
});

$('.drop-point').droppable({
  accept: '.inner',
  drop: land
});

function land ( event, ui ) {
  $('.outer').addClass('success');
  ui.draggable.draggable( 'disable' );
  ui.draggable.position({of: $(this), my: 'left', at: 'left'});
  ui.draggable.draggable( 'option', 'revert', false );
  entered = true;


  setTimeout(() => {
  $("#intro-container").css("opacity", "0")
}, 500);

  setTimeout(() => {
  $(".blurred").css("filter", "none")
  $("#intro-container").css("display", "none")
}, 700);

if (entered === true) {
$("#about").css("cursor", "pointer")
}
}

$("#about").click(function() {
  if (entered) {

  if (aboutclose) {
  aboutclose = false;
  $("#about-container").removeClass("closed");
  $("#try").css("filter", "blur(5px)");
  setTimeout(() => {
  $("#about-container").css("opacity", 1)
}, 10);

} else {

$("#about-container").css("opacity", 0)
aboutclose = true;;
$("#try").css("filter", "none");
setTimeout(() => {
$("#about-container").addClass("closed")
}, 500);
}

}
})
