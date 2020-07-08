
$(function(){
    let items = ['apples','oranges','milk','bread']
    let counter = 0;

    $(document).ready(function(){
      //check and uncheck items
      $(function() {
          $('.shopping-list').on('click','.shopping-item-toggle', function(event) {
            let x = $(this).parent().parent().find('span')[0];
            $(x).toggleClass('shopping-item__checked');
            let html = x.innerHTML;
              let idx = items.indexOf(html)
          });
      //delete item from list
      $(function(){
        $('.shopping-list').on('click', '.shopping-item-delete', function (event) {
            let y = $(this).closest('li')[0];
            let x = $(this).parent().parent().find('span')[0];
            let html = x.innerHTML;
            let idx = items.indexOf(html)
            items.splice(idx, 1)
            $(y).remove();
        });
      });
    });
   });

    $(function() {
      $('#js-shopping-list-form').submit(function (event) {
        event.preventDefault();
        $(".shopping-list-entry").empty();
        let item = $('#shopping-list-entry').val();

        //check for duplicate
        for(let i = 0; i < items.length; i++){
          if(item === items[i]){
            alert('duplicate value. try again.')
            counter++;
          }
        }

        if(counter === 0){  //if no duplicate, add item
          //add new item to array
          items.push(item)
          let newItem =
          `<li id="${item}"><span class="shopping-item">${item}</span><div class="shopping-item-controls"> <button class="shopping-item-toggle"><span class="button-label">check</span> </button> <button class="shopping-item-delete"><span class="button-label">delete</span></button>
            </div></li>`;

           $(".shopping-list").append(newItem);
        };

        $(function() {
          $('form :input').val('');
          counter = 0
        });
      });
    });
  });
