//backup just in case.//

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
['a cork from a wine bottle', -9]
],



  addUserItem: function(num) {
    if (num >= 0 && num < this.itemList.length) {
      if(!userInventory.includes(this.itemList[num][0])){
          userInventory.push(this.itemList[num][0]);
          userScore += this.itemList[num][1];
          document.getElementById('inventorylist').innerHTML = userInventory.join('; ')
          document.getElementById('yourscore').innerHTML = userScore
      }
      } else if (num === 'random' || num === 'Random' || num === 'RANDOM') {
            userInventory.push(this.itemList[randomNumber()][0]);
            userScore += this.itemList[randomNumber()][1];
            document.getElementById('inventorylist').innerHTML = userInventory.join('; ')
            document.getElementById('yourscore').innerHTML = userScore
          } else {console.log('Please choose a number between 0 and ' + this.itemList.length)}
  },

  addComputerItem: function(num) {
    if (num >= 0 && num < this.itemList.length) {
        if (!computerInventory.includes(this.itemList[num][0])){
          computerInventory.push(this.itemList[num][0]);
          computerScore += this.itemList[num][1];
          document.getElementById('birdscore').innerHTML = computerScore
        }
      } else if (num === 'random' || num === 'Random' || num === 'RANDOM') {
            computerInventory.push(this.itemList[randomNumber()][0]);
            computerScore += this.itemList[randomNumber()][1];
            document.getElementById('computerscore').innerHTML = computerScore
          } else {console.log('Please choose a number between 0 and ' + this.itemList.length)}
  },

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
/////////////////////////////////////////////////////////


/////////HTML Interaction////////////////////////////

let addInventoryButton = document.getElementById("addinventory")
let inventoryCount = 0

addInventoryButton.addEventListener('click', function(){


  let number = randomNumber()
  let number2 = randomNumber()
  console.log(inventoryCount)

  if (inventoryCount < 10) {
  items.addUserItem(number);
  items.addComputerItem(number2);
  inventoryCount++
  } else {
    if (userScore > computerScore) {
      document.getElementById('winlose').innerHTML = 'You have won the bird\'s respect, and their revenge.'
    } else if (computerScore > userScore) {
      document.getElementById('winlose').innerHTML = 'The bird has defeated you, as it should.'
    } else if (computerScore === userScore) {
      document.getElementById('winlose').innerHTML = 'A tie. Leave, immediately, before they realize what\'s happened...'
    }
  }
})

let resetButton = document.getElementById('reset')

resetButton.addEventListener('click', function() {
  userInventory = []
  computerInventory = []
  userScore = 0
  computerScore = 0
  document.getElementById('winlose').innerHTML = ''
  document.getElementById('inventorylist').innerHTML = ''
  document.getElementById('yourscore').innerHTML = 0
  document.getElementById('birdscore').innerHTML = 0
  inventoryCount = 0
})

