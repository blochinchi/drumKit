for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    var buttonInnerHTML = buttonInnerHTML.toUpperCase();
    switch (buttonInnerHTML) {
      case "W":
        var tom_1 = new Audio('sounds/tom-1.mp3');
        tom_1.play();
        var wButton = document.getElementById("w");
        wButton.classList.add("pressed");
        setTimeout(function(){ wButton.classList.remove("pressed"); }, 100);
        break;

      case "A":
        var tom_2 = new Audio('sounds/tom-2.mp3');
        tom_2.play();
        var wButton = document.getElementById("a");
        wButton.classList.add("pressed");
        setTimeout(function(){ wButton.classList.remove("pressed"); }, 100);
        break;

      case "S":
        var tom_3 = new Audio('sounds/tom-3.mp3');
        tom_3.play();
        var wButton = document.getElementById("s");
        wButton.classList.add("pressed");
        setTimeout(function(){ wButton.classList.remove("pressed"); }, 100);
        break;

      case "D":
        var tom_4 = new Audio('sounds/tom-4.mp3');
        tom_4.play();
        var wButton = document.getElementById("d");
        wButton.classList.add("pressed");
        setTimeout(function(){ wButton.classList.remove("pressed"); }, 100);
        break;

      case "J":
        var snare = new Audio('sounds/snare.mp3');
        snare.play();
        var wButton = document.getElementById("j");
        wButton.classList.add("pressed");
        setTimeout(function(){ wButton.classList.remove("pressed"); }, 100);
        break;

      case "K":
        var crash = new Audio('sounds/crash.mp3');
        crash.play();
        var wButton = document.getElementById("k");
        wButton.classList.add("pressed");
        setTimeout(function(){ wButton.classList.remove("pressed"); }, 100);
        break;

      case "L":
        var kick = new Audio('sounds/kick-bass.mp3');
        kick.play();
        var wButton = document.getElementById("l");
        wButton.classList.add("pressed");
        setTimeout(function(){ wButton.classList.remove("pressed"); }, 100);
        break;

      default:
    }
    // buttonAnimation(buttonInnerHTML);
  });
}

document.addEventListener("keydown",function(key){
  var keyboardButton = event.key.toUpperCase();
  switch(keyboardButton) {
    case "W":
      var tom_1 = new Audio('sounds/tom-1.mp3');
      tom_1.play();
      break;

    case "A":
      var tom_2 = new Audio('sounds/tom-2.mp3');
      tom_2.play();
      break;

    case "S":
      var tom_3 = new Audio('sounds/tom-3.mp3');
      tom_3.play();
      break;

    case "D":
      var tom_4 = new Audio('sounds/tom-4.mp3');
      tom_4.play();
      break;

    case "J":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "K":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "L":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;

    default:

  }
  buttonAnimation(event.key)
})

function buttonAnimation(currentKey){
  var activeButton = document.querySelector("."+event.key)
  console.log(activeButton);
  activeButton.classList.add("pressed");
  setTimeout(function(){ activeButton.classList.remove("pressed"); }, 100);
}
