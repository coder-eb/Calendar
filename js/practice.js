console.log('Hello');

var fruits = ["Grape", "Banana", "Orange", "Strawberry"];

function openMe(){
    x = document.getElementById("demo");
    x.className = "open";
}
function closeMe(){
    x = document.getElementById("demo");
    x.className = "close";
}
function loadFruits(){
    document.getElementById('fruits').innerHTML = "";
    listContainer = document.createElement('ul'); 
    var i;
    document.getElementById('fruits').appendChild(listContainer);
    for (i = 0; i < fruits.length; i++) {
        // create an item for each one
        listItem = document.createElement('li');

        // Add the item text
        listItem.innerHTML = fruits[i];

        // Add listItem to the listElement
        listContainer.appendChild(listItem);
    }
}
function addFruit(){
    var fruit = prompt("What is your favourite fruit?");
    fruits[fruits.length] = fruit;
    loadFruits();
}
function showFruit(){
    var fruit1 = prompt("What is your favourite fruit?");
    listContainer = document.createElement('ul');

    document.getElementById('fruits').appendChild(listContainer);
    listItem = document.createElement('li');
    
    listItem.innerHTML = fruit1;
    listContainer.appendChild(listItem);

}
