
//////////PLEASE NOTE////////////////
//This is just a backup copy while I make major tweaks to this code!//
////////////////////////////////////






//Master list of game items and corresponding points
const itemList = [
    ['winding key for a grandfather clock', 10], 
    ['small earthenware marble', 10], 
    ['small glass marble', 10], 
    ['large glass marble', 10], 
    ['three iron nails in a sealed glass bottle', 10], 
    ['a single pearl earring', 10], 
    ['a spring of rosemary', 10], 
    ['the tab from a can of soda', 10], 
    ['a tooth', 10], 
    ['a scrap of newspaper with a myserious message', 10],
    ['a molar', 10], 
    ['very sharp glass', 10], 
    ['a page torn from a diary', 10], 
    ['the friends you made along the way', 10], 
    ['an empty milk carton', 10], 
    ['the handprint of a child in clay', 10], 
    ['a broken diary lock', 10], 
    ['a rusted old bottle cap', 10], 
    ['a guitar pick', 10], 
    ['one unburnt match', 10], 
    ['a book of matches missing one match', 10], 
    ['a red poker chip', 10], 
    ['a blue poker chip', 10], 
    ['a white poker chip', 10], 
    ['a spool of thread', 10], 
    ['the wrapper from a piece of hard candy', 10], 
    ['one child size glove', 10], 
    ['a lighter', 10], 
    ['a diamond ring', 10], 
    ['a time worm', 10]
    ['a pair of sunglasses missing one lens', 10]
    ]
    
    const logItemList = () => {
        for (i = 0; i < itemList.length; i++) {
            console.log(i + '. ' + itemList[i][0])
        }
    }
    
    //Inventories and scorekeepers
    
    let userInventory = []; //just item name; item added and score updated simultaneously via addUserItem function
    let computerInventory = []; //just item name
    let computerFullInventory = []; //item name and points
    
    let userScore = 0;
    let computerScore = 0;
    
    
    //Gameplay functions
    
    const randomNumber = () => {
        let i = (Math.floor(Math.random()*itemList.length));
        return i;
    }
    
    
    const randomItem = (array) => {
        return array[randomNumber(array)];
    }
    
    const addUserItem = (num, array) => {
        if (num >= 0 && num < array.length) {
            userInventory.push(array[num][0]);
            userScore += array[num][1];
        }
    }
    
    const addComputerFullItem = (array) => {
        computerFullInventory.push(randomItem(array));
    }
    
    const addComputerItem = (addComputerFullItem) => {
      for (i = 0; i < computerFullInventory.length; i++) {
        computerInventory.push(computerFullInventory[i][0])
      }
    }
    
    const calcComputerScore = (array) => {
    for (let i = 0; i < array.length; i++) {
      computerScore += array[i][1];
      }
    }     
    
    function autoAddItems(array, num = 1) {
        let i = 0;
        while (i < num) {
           addUserItem(randomNumber(array), array);
           addComputerFullItem(array);
            i++;
        }
        addComputerItem();
    }
    
    
    //Game execution
    //autoAddItems(itemList, 14)
    // calcComputerScore(computerFullInventory)
    // console.log('user items: ' + userInventory.join(', '));
    // console.log(userScore);
    // console.log('computer items: ' + computerInventory.join(', '));
    
    // console.log(computerScore)
    
    addUserItem(randomNumber, itemList)
    addUserItem(randomNumber, itemList)
    addUserItem(5, itemList)
    addUserItem(22, itemList)
    addUserItem(19, itemList)
    addUserItem(4   , itemList)
    ////Adding things to the actual site, or trying to////
    
    //Currently displays a static list of current inventory
    document.getElementById('target-id').innerHTML = userInventory.join(', ');
    
    
    
    