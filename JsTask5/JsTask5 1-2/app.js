var up = document.getElementById('UP');
var down = document.getElementById('DOWN');
var el = document.getElementById('inp');
up.innerHTML = "Type in the input box.";
el.addEventListener('keydown', function(event) {
    const key = event.key;
    if (key==="BackSpace" || key==="Delete") {
        $('#GFG_DOWN').html(key + ' is Pressed!');
    }
});


function myFunction() {
    const color = document.getElementById("inpx").value;
    document
      .getElementById("clue")
      .setAttribute("style", "background-color:" + color);
  }