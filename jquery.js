$(document).ready(function(){

  // add items:
  $('#addItem').click(function(){ //when button is clicked do what's in the function
    var $input = $('input').val(); //takes the value of input
    $('.listToDo').append('<li class="item"><input type="checkbox">' + $input + '</li>'); //appends the value of input to .listToDo as an input with a checkbox

      countingTotals();
  });

 // cross items of list:
  $(document).on('click', '.item', function(){
    var $itemDone= $(this).toggleClass('itemDone');

    countingTotals();
  });

  // delete checked off items to clean up the list:
  $('.cleanUp').click(function(){
    $('.itemDone').remove();

    countingTotals();
  });

// put $totalItems and $totalDone in a separate function to be able to calculate $totalToDo. Then call this function after an item is added or crossed off the list. See r8,15.
  function countingTotals(){
    //counting total items on list
    var $totalItems = $(".item").length;
    $('#total').html($totalItems);

    //counting total items that are crossed off the list
    var $totalDone = $('.itemDone').length;
    $('#totalDone').html($totalDone);

    //counting total todo items
    var $totalToDo = $totalItems - $totalDone;
    $('#totalToDo').html($totalToDo);
  }

});
