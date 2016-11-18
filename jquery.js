$(document).ready(function(){

    // add items:
    $('#addItem').click(function(){ //when button is clicked do what's in the function
        var $input = $('input').val(); //takes the value of input
        $('.listToDo').append('<div class="item">' + $input + '</div>'); //appends the value of input to .listToDo as an input with a checkbox
   });

   // cross item if list:
   $(document).on('click', '.item', function(){
     $(this).css('text-decoration', 'line-through');
   });

});
