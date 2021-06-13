
//Inventories and scorekeepers/////////////////////////
let userInventory = []; 
let computerInventory = []; 

let BQuserScore = 0 
let BQcomputerScore = 0


let importedUserScore = (document.getElementById('yourscore').innerHTML)

BQuserScore = parseInt(importedUserScore)

let importedComputerScore = (document.getElementById('birdscore').innerHTML)
BQcomputerScore = parseInt(importedComputerScore)

///////////////////////////////////////////////////////

///////////////Item List and Methods object////////////
const items = {
  itemList: [
    //.itemList[0][0] to access items
    //.itemList[0][1] to access points
  ['testitem1', 10],
  ['testitem2', 10],
  ['testitem3', 10],
  ['testitem4', 10],
  ['testitem5', 10],
  ['testitem6', 10]
],

  addUserItem: function(num) {
    if (num >= 0 && num < this.itemList.length) {
      if(!userInventory.includes(this.itemList[num][0])){
          userInventory.push(this.itemList[num][0]);
          BQuserScore += this.itemList[num][1];
          document.getElementById('test').innerHTML = userInventory.join(' - ')
          document.getElementById('yourscore').innerHTML = BQuserScore
          document.getElementById('BQcannotAddMoreItems').innerHTML = this.itemList[num][2]
      } else {document.getElementById('BQcannotAddMoreItems').innerHTML = "Hmm. You've already found one of those...you don't need two."}
     }
    },

  addComputerItem: function(num) {
    if (num >= 0 && num < this.itemList.length) {
        if (!computerInventory.includes(this.itemList[num][0])){
          computerInventory.push(this.itemList[num][0]);
          BQcomputerScore += this.itemList[num][1];
          document.getElementById('birdscore').innerHTML = BQcomputerScore
        }
      } 
  },

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

const additionalForwardText = [
    'a',
    'b',
    'c',
    'd'
]

const additionalBackwardText = [
    'e',
    'f',
    'g',
    'h'
]

const additionalLeftText = [
    'i',
    'j',
    'k',
    'l'
]

const additionalRightText = [
    'm',
    'n',
    'o',
    'p'
]


/////////////////End of Directions Text//////////////////////

/////////HTML Interaction////////////////////////////

//Items allowed to be added per direction button click
let itemsAddedThisRound = null;
let itemsAllowedThisRound = null

//Ominous background 



//Directions buttons//
let goForward = document.getElementById('forwardbutton')
let goBackward = document.getElementById('backwardbutton')
let goRight = document.getElementById('rightbutton')
let goLeft = document.getElementById('leftbutton')

let forwardCount = 0 
let backwardCount = 0
let rightCount = 0  
let leftCount = 0

let totalCount = 0

//FORWARD//
  goForward.addEventListener('click', function() {
    //Calculate amount of items allowed and clear gametext
      itemsAllowedThisRound = directionRandomCount()
      document.getElementById('BQcannotAddMoreItems').innerHTML = ''
    //Gametext directions for length of directions array
      if (forwardCount < additionalForwardText.length){
        document.getElementById('BQgametext').innerHTML = "You go FORWARD. " + additionalForwardText[forwardCount]
        forwardCount++
        totalCount++

    } else {
        document.getElementById('BQgametext').innerHTML = "Look around here, but you can go no further in this direction. Try going another way."
        goForward.disabled = true;
      }
    
  })


//Inventory Button//

let addInventoryButton = document.getElementById("BQaddinventory")
let inventoryCount = 0

addInventoryButton.addEventListener('click', function(){

  if (itemsAllowedThisRound === null){
    document.getElementById('BQcannotAddMoreItems').innerHTML = "You should start walking."
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
        document.getElementById('BQwinlose').innerHTML = "Your pockets are full. You should drop some items. If the dev hasn't built in that functionality yet, please keep walking until the next stage."
    }
 } else if (itemsAddedThisRound > itemsAllowedThisRound){
   document.getElementById('BQcannotAddMoreItems').innerHTML = "You have found all you can here. Continue on."
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