
$( ".shopping-list" ).submit(function( event ) {
  event.preventDefault();

  let item = $("#shopping-list-entry").val();
  let itemSpan = '<li>
    <span class="shopping-item">item</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
  </li>';
    $(".shopping-item").text(item)
  $(".shopping-list").append(itemSpan);

  $(#shopping-list-entry").empty();
});

$(".shopping-item-toggle").on("click", "li", function(){
  $(".shopping-item").html("<span class="shopping-item shopping-item_checked">)
})

$(".shopping-item-delete").click(function(){
  $("li").remove();
})
