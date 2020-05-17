document.getElementById("item_number_2").addEventListener("change", function(e){
  var total = document.getElementById("total_td");
  var number = document.getElementById("item_number_2");
  var unit_price = document.getElementById("unit_price");
  var oneitem_price = unit_price * number;

  total += total_td;
});