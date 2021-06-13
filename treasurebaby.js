//Inventories and scorekeepers/////////////////////////
let userInventory = []; 
let computerInventory = []; 

let userScore = 0;
let computerScore = 0;


///////////////////////////////////////////////////////

///////////////Item List and Methods object////////////
const items = {
  itemList: [
    //.itemList[0][0] to access items
    //.itemList[0][1] to access points
['winding key for a grandfather clock', 15],
['small earthenware marble', 8],
['small glass marble', 9], 
['large glass marble', 10], 
['three iron nails in a sealed glass bottle', 40], 
['a single pearl earring', 12], 
['a sprig of rosemary', 19], 
['the tab from a can of soda', 2], 
['a tooth', 13], 
['a scrap of newspaper with a mysterious message', 5],
['a molar', 86], 
['very sharp glass', -14], 
['a page torn from a diary', 10], 
['the friends you made along the way', 35], 
['an empty milk carton', 3], 
['the handprint of a child in clay', 26], 
['a broken diary lock', 18], 
['a rusted old bottle cap', 6], 
['a guitar pick', 12], 
['one unburnt match', 1], 
['a book of matches missing one match', 10], 
['a red poker chip', 5], 
['a blue poker chip', 10], 
['a white poker chip', 25], 
['a spool of thread', 34], 
['the wrapper from a piece of hard candy', 10], 
['one child size glove', 15], 
['a lighter', 29], 
['a diamond ring', -15], 
['a time worm', 69],
['a pair of sunglasses missing one lens', 32],
['goose poop', -25],
['jonathan', 27],
['a crushed beer can from the sixties', 7],
['a cork from a wine bottle', -9],
['a crumpled up reciept', 3],
['a cool rock', 12],
['a small pile of pebbles', 9]
],

  addUserItem: function(num) {
    if (num >= 0 && num < this.itemList.length) {
      if(!userInventory.includes(this.itemList[num][0])){
          userInventory.push(this.itemList[num][0]);
          userScore += this.itemList[num][1];
          document.getElementById('inventorylist').innerHTML = userInventory.join(' • ')
          document.getElementById('yourscore').innerHTML = userScore
      } else {document.getElementById('cannotAddMoreItems').innerHTML = "Hmm. You've already found one of those...you don't need two."}
      } 
  },

  addComputerItem: function(num) {
    if (num >= 0 && num < this.itemList.length) {
        if (!computerInventory.includes(this.itemList[num][0])){
          computerInventory.push(this.itemList[num][0]);
          computerScore += this.itemList[num][1];
          document.getElementById('birdscore').innerHTML = computerScore
        }
      }
  },


  //AutoAdd is used to add a specific amount of items to inventories at once.
  //So far I have no use for this but I'm keeping it for if that changes. 
  autoAdd: function(num) {
    let i = 0;
    while (i < num) {
      this.addUserItem('random');
      document.getElementById('inventorylist').innerHTML = userInventory
      document.getElementById('yourscore').innerHTML = userScore
      this.addComputerItem('random');
      document.getElementById('birdscore').innerHTML = computerScore
      i++;
    }
  }
}
//////////End of items//////////////////////////////

///////Random Number and Random Item functions//////////
function randomNumber() {
  return Math.floor(Math.random() * Math.floor(items.itemList.length));
}

 function randomItem(array) {
    return array[randomNumber(array)];
}

function directionRandomCount () {
  return Math.floor(Math.random() * 3) 
}
/////////////End of Random Number/Item Functions/////////

/////////////////////Directions Text///////////////////////

const additionalNorthText = [
  "The wind, which has been blowing all morning, goes still.",
  "You encounter a field. In the distance, you can see the electricity pylons loom over the landscape.",
  'A small fox runs frantically across the path. What is it running from?',
  "The woods are getting deeper. Wasn't there a path here a moment ago?",
  "You come to a small clearing. A small pile of rocks sits in the middle.",
  "Is it getting darker?",
  "A bird calls in the distance. Another bird calls in the distance. Another bird calls in the distance. Another bird-"
]

const additionalSouthText = [
  'A field of wild flowers spreads out on your right, bright and joyful.',
  'Although you could hear traffic a minute ago, the noise of the cars fades into the background.',
  'The air smells like something you forgot a long time ago.',
  'A bird flies across your path, startling you, and you jump back. Something cracks beneath your heel.',
  'It sounds like someone calls your name in the distance, but you haven\'t seen another person on the path.',
  'Why are you breathing so quickly?',
  'What\'s that behind you?'
]

const additionalEastText = [
  'east 1',
  'east 2',
  'east 3',
  'east 4',
  'east 5',
  'east 6',
  'east 7'
]

const additionalWestText = [
  'west 1', 
  'west 2',
  'west 3',
  'west 4',
  'west 5',
  'west 6',
  'west 7'
]



/////////////////End of Directions Text//////////////////////

/////////HTML Interaction////////////////////////////

//Items allowed to be added per direction button click
let itemsAddedThisRound = null;
let itemsAllowedThisRound = null

//Ominous background 

let r = 214
let g = 213
let b = 190

function darkenBackground(r, g, b){
  let newBackground = []
  newBackground.push(r)
  newBackground.push(g)
  newBackground.push(b)
  return "rgb(" + newBackground.join(', ') + ")"
}


//Directions buttons//
let goNorth = document.getElementById('northbutton')
let goSouth = document.getElementById('southbutton')
let goEast = document.getElementById('eastbutton')
let goWest = document.getElementById('westbutton')

let northCount = 0 
let southCount = 0
let eastCount = 0  
let westCount = 0

let totalCount = 0

  //NORTH//
  goNorth.addEventListener('click', function() {
    
    if (totalCount === 28) {
      window.open("birdqueen.html", "_self")
      localStorage.setItem('userInventory', userInventory.join(' • '))
      localStorage.setItem('userScore', userScore)
      localStorage.setItem('computerScore', computerScore)
    }

    //Darken background with each click
      document.querySelector("body").style.backgroundColor = darkenBackground(r, g, b);
      document.querySelector(".main").style.backgroundColor = darkenBackground(r, g, b);
      document.querySelector(".sidebar").style.backgroundColor = darkenBackground(r, g, b);
      r -= 8;
      g -= 8;
      b -= 8;
    //Calculate amount of items allowed and clear gametext
      itemsAllowedThisRound = directionRandomCount()
      document.getElementById('cannotAddMoreItems').innerHTML = ''
    //Gametext directions for length of directions array
      if (northCount < additionalNorthText.length){
        document.getElementById('gametext').innerHTML = "You go NORTH. " + additionalNorthText[northCount]
        northCount++
        totalCount++

    } else {
        document.getElementById('gametext').innerHTML = "Look around here, but you can go no further in this direction. Try going another way."
        goNorth.disabled = true;
      }
    
  })

  //SOUTH//
  goSouth.addEventListener('click', function() {

    if (totalCount === 28) {
      window.open("birdqueen.html", "_self")
    }

    //Darken background with each click
      document.querySelector("body").style.backgroundColor = darkenBackground(r, g, b);
      document.querySelector(".main").style.backgroundColor = darkenBackground(r, g, b);
      document.querySelector(".sidebar").style.backgroundColor = darkenBackground(r, g, b);
      r -= 8;
      g -= 8;
      b -= 8;
    //Calculate amount of items allowed and clear gametext
      itemsAllowedThisRound = directionRandomCount()
      document.getElementById('cannotAddMoreItems').innerHTML = ''
    //Gametext directions for length of directions array
      if (southCount < additionalSouthText.length){
        document.getElementById('gametext').innerHTML = "You go SOUTH. " + additionalSouthText[southCount]
        southCount++
        totalCount++

    } else {
        document.getElementById('gametext').innerHTML = "Look around here, but you can go no further in this direction. Try going another way."
        goSouth.disabled = true;
      }
    
  })

  //EAST// 
  goEast.addEventListener('click', function() {

    if (totalCount === 28) {
      window.open("birdqueen.html", "_self")
    }

    //Darken background with each click
      document.querySelector("body").style.backgroundColor = darkenBackground(r, g, b);
      document.querySelector(".main").style.backgroundColor = darkenBackground(r, g, b);
      document.querySelector(".sidebar").style.backgroundColor = darkenBackground(r, g, b);
      r -= 8;
      g -= 8;
      b -= 8;

    //Calculate amount of items allowed and clear gametext
      itemsAllowedThisRound = directionRandomCount()
      document.getElementById('cannotAddMoreItems').innerHTML = ''
    //Gametext directions for length of directions array
      if (eastCount < additionalEastText.length){
        document.getElementById('gametext').innerHTML = "You go EAST. " + additionalEastText[eastCount]
        eastCount++
        totalCount++

    } else {
        document.getElementById('gametext').innerHTML = "Look around here, but you can go no further in this direction. Try going another way."
        goEast.disabled = true;
      }
    
  })

  //WEST//
  goWest.addEventListener('click', function() {

    if (totalCount === 28) {
      window.open("birdqueen.html", "_self")
    }

    //Darken background with each click
      document.querySelector("body").style.backgroundColor = darkenBackground(r, g, b);
      document.querySelector(".main").style.backgroundColor = darkenBackground(r, g, b);
      document.querySelector(".sidebar").style.backgroundColor = darkenBackground(r, g, b);
      r -= 8;
      g -= 8;
      b -= 8;
    //Calculate amount of items allowed and clear gametext
      itemsAllowedThisRound = directionRandomCount()
      document.getElementById('cannotAddMoreItems').innerHTML = ''
    //Gametext directions for length of directions array
      if (westCount < additionalWestText.length){
        document.getElementById('gametext').innerHTML = "You go WEST. " + additionalWestText[westCount]
        westCount++
        totalCount++

    } else {
        document.getElementById('gametext').innerHTML = "Look around here, but you can go no further in this direction. Try going another way."
        goWest.disabled = true;
      }
    
  })





//Inventory Button//

let addInventoryButton = document.getElementById("addinventory")
let inventoryCount = 0

addInventoryButton.addEventListener('click', function(){

  if (itemsAllowedThisRound === null){
    document.getElementById('cannotAddMoreItems').innerHTML = "You should start walking."
    return;
  } 
  
  if (itemsAddedThisRound <= itemsAllowedThisRound){

  let number = randomNumber()
  let number2 = randomNumber()


  if (inventoryCount < 30) { //Need to calculate new total inventory based on the HALL OF THE BIRD QUEEN
  items.addUserItem(number);
  itemsAddedThisRound++
  items.addComputerItem(number2);
  inventoryCount++
  } else {
    document.getElementById('winlose').innerHTML = "Your pockets are full. You should drop some items. If the dev hasn't built in that functionality yet, please keep walking until the next stage."
  }
 } else if (itemsAddedThisRound > itemsAllowedThisRound){
   document.getElementById('cannotAddMoreItems').innerHTML = "You have found all you can here. Continue on."
   itemsAddedThisRound = null;
   itemsAllowedThisRound = null;
 }
})

//Reset Game button//
let resetButton = document.getElementById('reset')

resetButton.addEventListener('click', function() {
  userInventory = []
  computerInventory = []
  userScore = 0
  computerScore = 0
  window.open("index.html", "_self")
  document.getElementById('winlose').innerHTML = ''
  document.getElementById('inventorylist').innerHTML = ''
  document.getElementById('yourscore').innerHTML = 0
  document.getElementById('birdscore').innerHTML = 0
  inventoryCount = 0
  document.getElementById('cannotAddMoreItems').innerHTML = ''
  document.getElementById('gametext').innerHTML = 'The sun is shining, the birds are...whispering?'
    //Might be fun to make a randomized list of these for the reset button. 
})


