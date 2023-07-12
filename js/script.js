let drumNum = (document.querySelectorAll(".drum")).length;

for (let i = 0; i < drumNum; i++)
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    let humDrum = this.innerHTML;

    makeSound(humDrum);
  buttonAnimation(this.innerHTML)
  });

document.addEventListener("keypress", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key)
});

function makeSound(key) {
  switch (key) {
    case "w":
      document.querySelector("#heading").style.color = "red";
      let kick = new Audio("./sounds/kick.mp3");
      kick.play();
      break;
    case "a":
      document.querySelector("#heading").style.color = "blue";
      let crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;
    case "s":
      document.querySelector("#heading").style.color = "green";
      let snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;
    case "d":
      document.querySelector("#heading").style.color = "yellow";
      let tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;

    case "j":
      document.querySelector("#heading").style.color = "brown";
      let tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;
    case "k":
      document.querySelector("#heading").style.color = "pink";
      let tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;
    case "l":
      document.querySelector("#heading").style.color = "black";
      let tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;

    default:
      console.log(humDrum);
  }
}

function buttonAnimation(currentKey){
  let activeButton = document.querySelector("." + currentKey)
  activeButton.classList.add("pressed")
  setTimeout (function(){
    activeButton.classList.remove("pressed")
    
  }, 100);
}
