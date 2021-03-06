  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //
document.getElementById("uni1").onclick = changeImage
document.getElementById("uni2").onclick = changeImage
document.getElementById("uni3").onclick = changeImage

var inflation = [0,0,0]


function changeImage(event) {
  var unicorn = event.target
  var id = unicorn.id[3]

  inflation[id]++

    if (inflation[id] == 4)
        inflation[id] = 0
        
      unicorn.src = "./images/unicorn-" + inflation[id] + ".png"
    
}

