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
['winding key for a grandfather clock', 15, 'You find an old key, for winding a grandfather clock.'],
['small earthenware marble', 8, 'You find a small earthenware marble. It feels cool in your hand.'],
['small glass marble', 9, 'You find a small glass marble, swirled with red and blue.'], 
['large glass marble', 10, 'You find a large glass marble. It feels heavier than you expected.'], 
['three iron nails in a sealed glass bottle', 40, 'You find three iron nails in a sealed glass bottle. You shake it, and the nails clink against the glass.'], 
['a single pearl earring', 12, 'You find a single pearl earring. It looks expensive.'], 
['a sprig of rosemary', 19, 'A sprig of rosemary. It smells wonderful.'], 
['the tab from a can of soda', 2, 'Ooh, a tab from a can of soda. It reminds you that you\'re thirsty.'], 
['a tooth', 13, 'Is this a real human tooth?'], 
['a scrap of newspaper with a mysterious message', 5, 'You can read the words on this scrap of newspaper, but they don\'t make any sense.'],
['a molar', 86, 'You find a wisdom tooth.'], 
['very sharp glass', -14, 'You cut your hand on a piece of sharp glass. It didn\'t look this sharp when you picked it up.'], 
['a page torn from a diary', 10, 'You find a page torn from a diary. "Dear Diary", it reads, "I don\'t know if I\'ll ever find my way out. The birds keep calling. Their talons are sh-" The page cuts off.'], 
['an empty milk carton', 3, 'You find an empty milk carton. It looks like someone crumped it up.'], 
['the handprint of a child in clay', 26, 'You find a handprint of a child, preserved in clay. It looks like it broke off a larger piece.'], 
['a broken diary lock', 18, 'You find a small lock for a diary, cheaply made, and the top is broken.'], 
['a rusted old bottle cap', 6, 'You find a rusted bottle cap. You can\'t make out the logo.'], 
['a guitar pick', 12, 'You find a guitar pick, made out of swirling pink plastic.'], 
['one unburnt match', 1, 'You find one unburnt match.'], 
['a book of matches missing one match', 10, 'You find a book of matches. There is one match missing.'], 
['a red poker chip', 5, 'You find a red poker chip.'], 
['a blue poker chip', 10, 'You find a blue poker chip.'], 
['a white poker chip', 25, 'You find a white poker chip.'], 
['a spool of thread', 34, 'You find a spool of thread. It\'s a yellow ochre, and feels rough.'], 
['the wrapper from a piece of hard candy', 10, 'You find the wrapper from a piece of hard candy. The wrapper is shining gold, and crinkles in your fingers.'], 
['one child size glove', 15, 'You find one glove, small enough that it could only fit a child\'s hand.'], 
['a lighter', -27, 'You find a cheap white lighter. The flame won\'t catch.'], 
['a diamond ring', -15, 'A solitare diamond ring. The diamond gleams in the light.'], 
['a time worm', 69, 'You find a time worm. Yes, a time worm!'],
['a pair of sunglasses missing one lens', 32, 'You find a pair of sunglasses, but one lens is missing.'],
['goose poop', -25, 'Oh no. You find some goose poop. How inauspicious.'],
['jonathan', 27, 'You find a stuffed toy that looks like a beaver. It has a rainbow tail, and the name "Jonathan" is embroidered on the side.'],
['a crushed beer can from the sixties', 7, 'A crushed beer can, with a logo you don\'t recognize, but the logo looks decades old.'],
['a cork from a wine bottle', -9, 'You find a cork from a wine bottle. A chunk of it is ripped off.'],
['a crumpled up reciept', 3, 'You find a crumped reciept. The text is faded and part of the paper has turned black.'],
['a cool rock', 12, 'You find a wicked cool rock!'],
['a small pile of pebbles', 9, 'You find a pile of pebbles. They feel dusty.']
],

  addUserItem: function(num) {
    if (num >= 0 && num < this.itemList.length) {
      if(!userInventory.includes(this.itemList[num][0])){
          userInventory.push(this.itemList[num][0]);
          userScore += this.itemList[num][1];
          document.getElementById('inventorylist').innerHTML = userInventory.join(' • ')
          document.getElementById('yourscore').innerHTML = userScore
          document.getElementById('inventoryGameText').innerHTML = this.itemList[num][2]
      } else {document.getElementById('inventoryGameText').innerHTML = "Hmm. You've already found one of those...you don't need two."}
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
  "The wind blows gently, rustling the leaves and bushes. It feels cool upon your face.",
  "You encounter a field. In the distance, you can see the electricity pylons loom over the landscape.",  
  "You come to a small clearing. A small pile of rocks sits in the middle.",
  'A small fox runs frantically across the path. What is it running from?',
  "The woods are getting deeper. Wasn't there a path here a moment ago?",
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
  'A small lake sparkles to your left. The water is clear, and waves lap gently upon the shore.',
  'A bird soars overhead. Its shadow crosses your path.',
  'A swan glides by, breaking the water\'s calm surface. Is it looking at you?',
  'The waves are getting choppier; the air smells of rain.',
  'Clouds seem to be gathering in the distance. The sky is getting darker - or is it the air?',
  'You hear a bird screech in the distance. It almost sounds like laughter.',
  'Are you scared?'
]

const additionalWestText = [
  'The smell of pine and salt permeates the air. Ferns spring up along the path, unfurling towards the sky.', 
  'A squirrel runs up a tree, spiraling around the trunk.',
  'A lively warble breaks the silence of the forest. It sounds like a familiar song.',
  'A tree branch has broken, and hangs over the path. You touch the bark; your hand comes away sticky.',
  'The hair on the back of your neck rises. Is there someone else there?',
  'It feels like you\'ve been walking in circles, but you don\'t recognize where you are.',
  'Can you hear them?'
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

    document.getElementById('inventoryGameText').innerHTML = ''
    
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
      document.getElementById('inventoryGameText').innerHTML = ''
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
      document.getElementById('inventoryGameText').innerHTML = ''
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
      document.getElementById('inventoryGameText').innerHTML = ''
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
      document.getElementById('inventoryGameText').innerHTML = ''
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
    document.getElementById('inventoryGameText').innerHTML = "You should start walking."
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
    document.getElementById('inventoryGameText').innerHTML = "Your pockets are full. You should drop some items. If the dev hasn't built in that functionality yet, please keep walking until the next stage."
  }
 } else if (itemsAddedThisRound > itemsAllowedThisRound){
   document.getElementById('inventoryGameText').innerHTML = "You have found all you can here. Continue on."
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
  document.getElementById('inventoryGameText').innerHTML = ''
  document.getElementById('gametext').innerHTML = 'The sun is shining, the birds are...whispering?'
    //Might be fun to make a randomized list of these for the reset button. 
})


