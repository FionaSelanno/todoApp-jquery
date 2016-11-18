$(document).ready(function(){
    $('#addItem').click(function(){ //when button is clicked do what's in the function
        var $input = $('input').val(); //takes the value of input
        $('.listToDo').append('<input class="item" type="checkbox">' + $input +'</div>'); //appends the value of input to .listToDo as an input with a checkbox 
   });
});
