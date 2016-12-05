// wait for the DOM to finish loading
console.log("javaScript is loaded");
$(document).ready(function() {
  $("#board").on("click", markBoard);
});

function markBoard(){
  var whichSquare = $(event.target).get(0);
  console.log(whichSquare);
  var playerX = true;
  var playerO = false;

  while(isBoardFull === false){
   if(playerX === true){
     console.log("playerx")
     $(event.target).text("X");
     $(".message").text("Player X turn ");

    playerX = false;
    playerO = true;
  }
  if(playerX === false){
     console.log("playerO turn")
     $(".message").text("Player X turn ");

    $(event.target).text("O");
    playerX = true;
    playerO = false;

   }
 }
    //getPlayer();
  //}
  //if(getPlayer() === false){
    //$(event.target).text("O");
  //  getPlayer();

  //}
  //$(event.target).text("X")
//  $(".message").append("winner!");

}


// function getPlayer(){
//   console.log("this is changePlayerfunction")
//   if(!isBoardFull()){
//     // console.log("is board not full : " + !isBoardFull());
//     var turn = true;
//
//     if(turn === true){
//       console.log("Player X turn");
//       $(".message").text("Player X turn ");
//       turn = false;
//       return true;
//    }
//     if( turn === false){
//       console.log("player O turn");
//       $(event.target).text("O");
//       $(".message").text("Player O turn ");
//       turn = true;
//
//       return false;
//
//     }
//    }
//  }
//
//
// function winner(){
//
// }
//
function isBoardFull(){
  console.log("isBoardFullfunction")
  if($("#board").text().length === 227){
    console.log("Board is Full");
    return true;
  }
  return false;
}
