/* function newItem(){

//javascript
//1. Adding a new item to the list of items:
   let li = document.createElement("li");
   let inputValue = document.getElementById("input").value;
   let text = document.createTextNode(inputValue);
   li.appendChild(text);

   if (inputValue === '') {
     alert("You must write something!");
   } else {
     let list = document.querySelector('#list');
     list.appendChild(li);
   }

 //2. Crossing out an item from the list of items:
   function crossOut() {
 		li.classList.toggle("strike");
 	}

 	li.addEventListener("dblclick",crossOut);

 //3(i). Adding the delete button "X":
   let crossOutButton = document.createElement("crossOutButton");
 	crossOutButton.appendChild(document.createTextNode("X"));
 	li.appendChild(crossOutButton);

 	crossOutButton.addEventListener("click", deleteListItem);
 //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
   function deleteListItem(){
 		li.classList.add("delete")
 	}
 // 4. Reordering the items:
   $('#list').sortable();

}
*/

//add new item to list
function newItem(){

let li = $('<li></li>');
let inputValue = $('#input').val();
li.append(inputValue);

if (inputValue === '') {
  alert ('You must write something!');
} else {
  $('#list').append(li);
  $('#input').val('');
}

//strike out item on list
function crossOut(){
  li.toggleClass ('strike')
}

li.on('dbclick', function crossOut(){
  li.toggleClass('strike');
});

//add delete button to list items
let crossOutButton = $('<crossOutButton></crossOutButton>');
crossOutButton.append('X');
li.append(crossOutButton);

//delete item from list
crossOutButton.on('click', deleteListItem);
function deleteListItem(){
  li.addClass('delete')
}

//make list sortable
$('#list').sortable();
}
