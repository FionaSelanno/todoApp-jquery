#Introduction:
After following a tutorial on [Sitepoint](https://www.sitepoint.com/premium/courses/introduction-to-jquery-2884)
from Sachin Bhatnagar about jQuery. I decided to make this simple todo app to play around with jQuery code. Take a loot at the [demo](http://todoapp-jquery.bitballoon.com/).

    - A user should be able to add items to the list.
    - A user should be able to cross items off the list if they are done.
    - A user should see a summary of total added items, total checked off items, total items still to do.
    - A user should clean up all the checkoff items from the list.
    
#Steps I've taken so far:
1.  Setup the app => I used JQeury from CDN, and putted all the jqeury code in a separate Javascript file in order to keep html, styling(css) and js code separate from each other. I used the Materialize framework for some styling.
2.  Get input from the user and print the input: 
    ```javascript
    $('#addItem').click(function(){ //when button is clicked do what's in the function
        var $input = $('input').val(); //takes the value of input
        $('.listToDo').append('<li class="item">' + $input + '</li>'); //appends the value of input to .listToDo as an input with a checkbox

          countingTotals();
        $('input').val("");
      });
    ```
3.  Cross items off list:
    ```javascript
    $(document).on('click', '.item', function(){
        var $itemDone= $(this).toggleClass('itemDone');

        countingTotals();
    });
    ```
4.  Delete crossed off items from the list:
    ```javascript
    $('.cleanUp').click(function(){
        $('.itemDone').remove();

        countingTotals();
      });
    ```
5.  Summary off items:
    ```javascript
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
    ```
