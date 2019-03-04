console.log("Binded Correctly");

$("#Agregar").on("click", function(event){
  event.preventDefault();
  if ($("#Articulo").val() != ""){
  $("ul").append("<li class= 'checked2'></li>");
  $("li").last().append("<div> "+$("#Articulo").val()+"</div>", "<button type='submit' class= 'btnCHECK'>Check</button> ","<button type='submit' class= 'btnDELETE'>Delete</button>");
  }
  $("#Articulo").val("");
});
$(document).on("click",".btnCHECK",function(event){
  event.preventDefault();
  $(this).parent().toggleClass('checked checked2')
});

$(document).on("click",".btnDELETE",function(event){
  event.preventDefault();
  $(this).parent().remove();
});
