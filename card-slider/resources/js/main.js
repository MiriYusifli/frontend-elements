$(document).ready(function () {

    var open = false;
    $(".topnav a").click(function () {
      $("#menu-options").animate({ right: '0vw' });
      open = !open;
    });

    $("#close-menu").click(function () {
      $("#menu-options").animate({ right: '-70vw' });
      open = !open;
    });




  });