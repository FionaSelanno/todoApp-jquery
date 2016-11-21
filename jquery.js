$(document).ready(function(){

    // add items:
    $('#addItem').click(function(){ //when button is clicked do what's in the function
        var $input = $('input').val(); //takes the value of input
        $('.listToDo').append('<li class="item"><input type="checkbox">' + $input + '</li>'); //appends the value of input to .listToDo as an input with a checkbox

        //counting total items on list
        var $totalItems = $(".item").length;
        $('#total').html($totalItems);
   });

   // cross item of list:
    $(document).on('click', '.item', function(){
      var $itemDone= $(this).toggleClass('itemDone');

      //counting total items that are crossed off the list
      var $totalDone = $('.itemDone').length;
      $('#totalDone').html($totalDone);

   });
});
