  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

//get a random cell - tick
// mole img appears in random cell
// click on mole
// mole generates in new random cell

var cells = document.getElementsByTagName("TD")

var randomIndex = Math.floor(Math.random() * cells.length);

var randomCell = cells[randomIndex]

var mole = document.createElement('img');
mole.src = './mole.png';
mole.id = 'mole'

randomCell.appendChild(mole);

mole onclick =  whackDaMole;

function whackDaMole {
  console.log("Whack da Mole")
}


console.log(randomCell)
