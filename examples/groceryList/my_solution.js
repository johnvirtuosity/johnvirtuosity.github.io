// U3.W9:


// I worked on this challenge [by myself].

//  User stories
// User Stories (As many as you want. Delete the statements you don't need)
// As a user, I want to record the items and quantity I want to buy each visit to the shop
// As a user, I want to record the items I wanted to buy that were not available that visit
// As a user, I want to record the cost of each item I purchase
// As a user, I want to record the date and time I went shopping 
// As a user, I want to 

// Pseudocode
// CREATE a Grocery_List class 
// CREATE function to record the grocery_list item 
// CREATE function to UPDATE grocery_list to indicate items that were purchased
// CREATE function to UPDATE the cost of each item I purchase
// CREATE function to UPDATE the date and time I went shopping with grocery_list


//  Initial Solution

//Set up ash for testing
/*
var listItem = {
  name: 'bread',
  qty: 2  
};
*/
var listItem = {
  name: '',
  qty: 0,
  cost: 0,
  qty_purchased: 0  
};

//Set up array of hashs
var listItems = [{name: 'bread', qty: 2, cost: 3.50, qty_purchased: 2},{name: 'eggs', qty: 2, cost: 2.15, qty_purchased: 1}];
//var litItems = [];

function displayList(mode){
  //Display the list of items
  //if mode = 'add' is passed then only add the last item onto the list 
  var ptr = 0;
  if (mode === 'add'){
    ptr = listItems.length-1 //last array item;
  } else {
    ptr = 0;
  };

  for (ptr ; ptr < listItems.length ; ptr++){
    /*
    //1. create the element you want to add
    var pElement = document.createElement('div');
    //2. create a text element to append inside the pElement 
    var elementText = document.createTextNode(listItems[ptr]['qty'] + ' x ' + listItems[ptr]['name']);
    //3. append the element text to the  element
    pElement.appendChild(elementText);
    //4. Finally add the element to the actual document using appendChild
    document.getElementById('list').appendChild(pElement);
    */
    var divElement = document.createElement('div');
    var elementText = document.createTextNode('');
    divElement.appendChild(elementText);

    
    //  append text-boxes for the items name/qty/cost/qty_purchased
    var nameElement = document.createElement('input');
    var elementText = document.createTextNode('item name');
    nameElement.value = listItems[ptr]['name'];
    nameElement.appendChild(elementText);

    //  append text-boxes for the items name/qty/cost/qty_purchased
    var qtyElement = document.createElement('input');
    var elementText = document.createTextNode('qty');
    qtyElement.value = listItems[ptr]['qty'];
    qtyElement.appendChild(elementText);

    //  append text-boxes for the items name/qty/cost/qty_purchased
    var costElement = document.createElement('input');
    var elementText = document.createTextNode('dollars');
    costElement.value = listItems[ptr]['cost'];
    costElement.appendChild(elementText);

    //  append text-boxes for the items name/qty/cost/qty_purchased
    var qtypurchasedElement = document.createElement('input');
    var elementText = document.createTextNode('bought');
    qtypurchasedElement.value = listItems[ptr]['qty_purchased'];
    qtypurchasedElement.appendChild(elementText);

    
    //Append the item details next
    document.getElementById('list').appendChild(divElement);
    document.getElementById('list').appendChild(nameElement);
    document.getElementById('list').appendChild(qtyElement);
    document.getElementById('list').appendChild(costElement);
    document.getElementById('list').appendChild(qtypurchasedElement);




  };  
  //alert('My listItems : ' + listItems);
};

function addItem(){
  var itemToAdd = document.getElementById('itemtoadd').value;
  var qtyToAdd = document.getElementById('qty').value;

  // Next add it to the array
  listItems.push({name: itemToAdd, qty: qtyToAdd, cost: 0, qty_purchased: 0})

  //clear out the added item
  document.getElementById('itemtoadd').value = '';
  document.getElementById('qty').value = '';

  //refresh the list with just new item added
  displayList('add'); 
};



//  Refactored Solution






//  DRIVER TESTS GO BELOW THIS LINE






//  Reflection

//Good old case-sensitivity eh?... chased my tail for a few minutes there.!!!. All sorted though.
// This Javasript stuff is fantastic!!!. I can see why it is being adopted for other general programming
// tasks as well.