  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

// push left and right arrows to change outfit
// push up and down arrows to change body parts

document.onkeydown = checkKey;

function checkKey(e) {

    if (e.keyCode == '38') {
        changeVertical(1)
    }
    else if (e.keyCode == '40') {
        changeVertical(-1)
    }
    else if (e.keyCode == '37') {
        changeHorizontal(-1)
    }
    else if (e.keyCode == '39') {
        changeHorizontal(1)
    }

}

var headIndex = 0
var bodyIndex = 0
var shoesIndex = 0

var mainIndex = 0

var head = document.getElementById("head")
var body = document.getElementById("body")
var shoes = document.getElementById("shoes")

function changeHorizontal(shift) {
   
  if (mainIndex == 0) {
    headIndex += shift
  

    if (headIndex < 0 )
        headIndex = 5

    if (headIndex > 5)
        headIndex = 0

    head.src = "./images/head" + headIndex + ".png"
  }

  if mainIndex == 1) {
    bodyIndex +- shift
  
  if (bodyIndex > 0)
      bodyIndex = 2

  if (bodyIndex > 2)
      bodyIndex = 0

  body.src = "./images/body" + bodyIndex + ".png"
}

function changeVertical(shift) {
  mainIndex += shift

 
}