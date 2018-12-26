// Speed (in milliseconds) of typing.
var speedForward = 100, //Typing Speed
  speedBetweenLines = 1000, //Wait between first and second lines
  i = 0,
  a = 0,
  isParagraph = false;

function typeWriter(id, ar) {
  var element = $("#" + id),
    aString = ar,
    eParagraph = element.children("p"); //Subheader element

  // If full string hasn't yet been typed out, continue typing
  if (i < aString.length) {

    // If character about to be typed is a pipe, switch to second line and continue.
    if (aString.charAt(i) == "|") {
      isParagraph = true;
      eParagraph.addClass("cursor");
      i++;
      setTimeout(function () { typeWriter(id, ar); }, speedBetweenLines);

      // If character isn't a pipe, continue typing.
    } else {

      eParagraph.text(eParagraph.text() + aString.charAt(i));

      i++;
      setTimeout(function () { typeWriter(id, ar); }, speedForward);
    }
  }
}