var num = document.querySelectorAll(".drum").length;

for (var i = 0; i < num; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", handleclick);
}

function handleclick() {
  var valueOfInnerHtml = this.innerHTML;
  makesound(valueOfInnerHtml);
}

document.addEventListener("keydown", function (e) {
  makesound(e.key);
});

function makesound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "k":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case "l":
      var snare = new Audio("sounds/kala.mp3");
      snare.play();
      break;
    default:
      alert(valueOfInnerHtml);
      break;
  }
}

// CONSTRUCTOR FUNCTION OF Audio
// FUNCTION Audio(FILENAME)
// {
//   this.FILENAME = FILENAME;
//   this.play = FUNCTION()
//   {
//     THIS MIGHT CHECK THAT FILE EXIST IN THAT Location
//     THIS MIGHT CHECK THE FILE IS AUDIO FILE
//     THEN IT PLAYS THE AUDIO;
//   }
// };
//
