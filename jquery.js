$(document).ready(function(){

    // add items:
    $('#addItem').click(function(){ //when button is clicked do what's in the function
        // var $list = [];
        var $input = $('input').val(); //takes the value of input
        $('.listToDo').append('<li class="item">' + $input + '</li>'); //appends the value of input to .listToDo as an input with a checkbox

    //counting total items on list
        var $totalItems = $(".item").length;
        $('.total').html($totalItems);
   });

   // cross item if list:
   $(document).on('click', '.item', function(){
     $(this).css('text-decoration', 'line-through');
   });


});
