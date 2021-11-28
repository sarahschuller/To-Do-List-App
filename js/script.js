
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
