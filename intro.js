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

  setTimeout(() => {
  $("#intro-container").css("opacity", "0")
}, 500);

  setTimeout(() => {
  $(".blurred").css("filter", "none")
  $("#intro-container").css("display", "none")
}, 700);
}

$("#about").click(function () {
  $("#about-container").toggleClass("closed")
})
