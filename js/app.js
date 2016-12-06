// wait for the DOM to finish loading
console.log("javaScript is loaded");
$(document).ready(function() {
  $(".message").text("Player X starts");
  $("#board").on("click", markBoard);
  $(".button").click(function() {
   location.reload();
 });
});
var playerX = true;
var playerO = false;
var elementClicked =[];


function markBoard(event){
  var whichSquare = $(event.target).get(0);
  console.log($(whichSquare).text().length)
  //elementClicked.push(whichSquare);

  if($(whichSquare).text().length > 0){
    alert("this is space is taken");
  }else{

   if(playerX === true){
     $(".message").text("Player O turn ");
     $(event.target).text("X");
     playerX = false;
     playerO = true;
   }else if(playerX === false){
     $(".message").text("Player X turn ");
     $(event.target).text("O");
     playerX = true;
     playerO = false;
   }
 }
}

function isBoardFull(){
  console.log("isBoardFullfunction")
  if($("#board").text().length === 227){
    console.log("Board is Full");
    return true;
  }
  return false;
}
