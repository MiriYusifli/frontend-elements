function reset_cards(card) {
  $(".active").css("left", "");

  $(card).removeClass('prev active next invisible');
  $(card).siblings().removeClass('prev active next invisible');

}

function remove_cards() {
  $('.my-card').addClass("display-none");
}

function make_invisible() {
  $('.prev').addClass('invisible');
  $('.active').addClass('invisible');
  $('.next').addClass('invisible');
}



function add_new_cards() {
  setTimeout(function () {
    // timer for animation when make invisible
    card.prev().addClass('prev');

    for (i = 0; i < active_count; i++) {
      card.addClass('active');
      card = card.next();
    }

    card.addClass('next');

    $(".active").css("left", px + "px");

  }, 150)
}


function make_visible_new_cards(card) {
  card.prev().removeClass('display-none');
  for (i = 0; i < active_count; i++) {
    card.removeClass('display-none');
    card = card.next();
  }
  card.removeClass('display-none');

}


function change_card(card) {


  //make invisible
  make_invisible();

  setTimeout(function () {

    //reset cards
    reset_cards(card);

    //remove cards  
    remove_cards();

    //add new cards
    add_new_cards(card)

    //make visible
    make_visible_new_cards(card)
  }, delay)


}


$(document).ready(function () {

  active_image_width = 240;
  image_width = 220;
  prev_next_width = 176;
  pixel_over_next_prev = 50;
  delay=0;

  window_width = $(window).width();

  active_count = Math.floor((window_width - prev_next_width * 2) / image_width);

  if (window_width - active_count * active_image_width - prev_next_width * 2 > pixel_over_next_prev * 2) {
    active_count = active_count + 1;
  }
  px = (window_width - active_count * active_image_width - image_width * 2) / 2;

  card = $('.my-card:nth-child(2)')
  change_card(card);

  $('.my-card').click(function () {
    
    delay=1000;
    
    card = $(this)
    
    if (card.hasClass("active")) return;

    px = (window_width - active_count * active_image_width - image_width * 2) / 2;


    if (card.hasClass("prev")) {
      index = $('.my-card').index(card) - active_count + 1
      if (index <= 0) { index = 0; px = -1 * px; }

      card = $($('.my-card').get(index))
    }


    //uzaqlasir
    setTimeout(function () {
      change_card(card);
    }, 150)

  });


});

