// GLOBAL VARIABLES
// ------------------------------------------------------------------------------------

const players = [];
const resetButtonNode = document.querySelector("#reset-btn");
const replayButtonNode = document.querySelector("#replay-btn");
let allCells = document.querySelectorAll("td");
let winner = "";
let someHasWon = false;

// _____________________________________________________________________________________
// OBJECTS
// ______________________________________________________________________________________
const symbols = {
  "ex":"X",
  "oh":"O",
};

let nextPlayers = {
  playerOne:{ 
              "playerName":"",
              "symbol":symbols.oh,
             },
  playerTwo: {
             "playerName": "",
             "symbol":symbols.ex,
              }

              }


$(function( ){


  $("#reset-btn").on("click", removeBtnNode);

})
// _____________________________________________________________________________________
// FUNCTIONS
// ______________________________________________________________________________________

function removeBtnNode() {
  location.reload();
}

function changeCell() {
  if (nextPlayer == nextPlayers.playerOne.symbol) {
    nextPlayer = nextPlayers.playerTwo.symbol;
    nextPlayerName = nextPlayers.playerTwo.playerName;
    }
  else {
    nextPlayer = nextPlayers.playerOne.symbol;
    nextPlayerName = nextPlayers.playerOne.playName;
  }
  }


// function replayGame() {
//   $(".chamber").empty();
//   $("#end-view").css("display", "none");
//   $(".statement-view").css("display", "none");

// }

function replayGame() {
  $(".chamber").html("&nbsp;");
  $("#end-view").slideUp();
  $(".down-below").remove();

}


function toggleElem(elem) {
  if (elem.style.display === "none") {
    elem.style.display = "block";
  }
  else if (elem.style.display === "block") {
    elem.style.display = "none";
  }
}

function celebrateWin() {
  for (nodez of allCells) {
    nodez.setAttribute("style", `border: 0px solid black;
                                 background-color: rgba(0, 8, 6, 0.8);`)
  }
}

function endStatement(sentence) {
  statement = document.createElement("div");
  statement.className = "statement-view";
  statement.innerHTML = `<h1>${sentence}</h1>`;
  document.querySelector("#end-view").appendChild(statement);
}



function checkEquality(arr) {
  if ((arr[0]===arr[1]) && (arr[1] === arr[2]) )
  return true;
}


function nextPage(x) {
  if (document.getElementById("select-item").value === "tictactoe") {
          parent = x.parentNode;
          parent.style.display = "none";
          x.parentNode.nextElementSibling.style.display="block";
        }
  else{ 
    alert(`Be patient buddy,${document.getElementById("select-item").value} in on the way `);}
}

function reset() {
  for (let p of document.querySelectorAll("td")) {
  p.setAttribute("style", `border: 1px solid black;
  background-color: black;`);
  $("#end-view").remove();
  p.innerHTML = "&nbsp;"
  // console.log(p);
 } 
}

function clearBoard() {
  startGame();
  console.log(nextPlayerName);
  document.querySelector(".main-page").style.display = 'block';
}

function startGame() {
      let game_player1 = document.querySelector("#player1").value;
      let game_player2 = document.querySelector("#player2").value;
      players.push(game_player1);
      players.push(game_player2);
      document.querySelector(".main-page").style.display="block";
      document.querySelector("#display-panel").innerHTML = `<h3>${players[0]} (${nextPlayers.playerOne.symbol}) Vs  ${players[1]} (${nextPlayers.playerTwo.symbol})</h3>`;

      
      nextPlayers = {
      playerOne:{ 
              "playerName": players[0],
              "symbol":symbols.oh,
             },
      playerTwo: {
             "playerName": players[1],
             "symbol":symbols.ex,
              }

              }
      }
let nextPlayer = nextPlayers.playerOne.symbol;
let nextPlayerName = nextPlayers.playerOne.playerName;



function play(clickedCell){
    if (clickedCell.innerHTML == "&nbsp;") {
        clickedCell.innerHTML = `<span>${nextPlayer}</span>`;
      }
       changeCell();

       let arrOne = [
        document.getElementById("one").innerHTML,
        document.getElementById("two").innerHTML,
        document.getElementById("three").innerHTML,
                 ]
      
      let arrTwo = [
        document.getElementById("four").innerHTML,
        document.getElementById("five").innerHTML,
        document.getElementById("six").innerHTML,
      ]

      let arrThree = [
        document.getElementById("seven").innerHTML,
        document.getElementById("eight").innerHTML,
        document.getElementById("nine").innerHTML,
                 ]
      
      let arrFour = [
        document.getElementById("one").innerHTML,
        document.getElementById("four").innerHTML,
        document.getElementById("seven").innerHTML,
      ]

      let arrFive = [
        document.getElementById("two").innerHTML,
        document.getElementById("five").innerHTML,
        document.getElementById("eight").innerHTML,
      ]

      let arrSix = [
        document.getElementById("three").innerHTML,
        document.getElementById("six").innerHTML,
        document.getElementById("nine").innerHTML,
                 ]
      
      let arrSeven = [
        document.getElementById("one").innerHTML,
        document.getElementById("five").innerHTML,
        document.getElementById("nine").innerHTML,
      ]

      let arrEight = [
        document.getElementById("three").innerHTML,
        document.getElementById("five").innerHTML,
        document.getElementById("seven").innerHTML,
                 ]

      let arrTds = [
        document.getElementById("one").innerHTML,
        document.getElementById("two").innerHTML,
        document.getElementById("three").innerHTML, 
        document.getElementById("four").innerHTML,
        document.getElementById("five").innerHTML,
        document.getElementById("six").innerHTML,
        document.getElementById("seven").innerHTML,
        document.getElementById("eight").innerHTML,
        document.getElementById("nine").innerHTML
      ]


      if (((arrOne[0] != "&nbsp;") && checkEquality(arrOne)) || 
         ((arrTwo[0] != "&nbsp;") && checkEquality(arrTwo)) ||
         ((arrThree[0] != "&nbsp;") && checkEquality(arrThree)) ||
         ((arrFour[0] != "&nbsp;") && checkEquality(arrFour)) ||
         ((arrFive[0] != "&nbsp;") && checkEquality(arrFive)) ||
         ((arrSix[0] != "&nbsp;") && checkEquality(arrSix)) ||
         ((arrSeven[0] != "&nbsp;") && checkEquality(arrSeven)) ||
         ((arrEight[0] != "&nbsp;") && checkEquality(arrEight)) 
         ) 
                {
                  someHasWon = nextPlayer;
                  if (nextPlayerName === nextPlayers.playerOne.playerName) {
                    winner = nextPlayers.playerTwo.playerName;
                  }
                  winner = nextPlayers.playerOne.playerName;

                  // else if (nextPlayerName === nextPlayers.playerTwo.playerName) {
                  //   winner = nextPlayers.playerOne.playerName;
                  // }


console.log(winner + " has won");
            $("#end-view").children().remove();
            document.querySelector("#end-view").style.display = "block";
            let sentence = `${winner} won this round` ; 
            endStatement(sentence);
            let clnReset = resetButtonNode.cloneNode(false);
            clnReset.className = "down-below";
            clnReset.value = "Replay?";
            document.querySelector("#end-view").append(clnReset);
              
            clnReset.addEventListener("click", replayGame, false);


  // function replayGame() {
  //   $(".chamber").html ("&nbsp;");
  //   $("#end-view").css("display", "none");
  // };

  

            



                  // // for (let p of document.querySelectorAll("td")) {
                  // //   p.innerHTML = "&nbsp;"
                  //   // console.log(p);

                  // }             
                  
                  // document.querySelector(".main-page").style.display = 'none';
                  // document.querySelector(".main-page").innerHTML = `<div id="won">won</div>`;
                  

                  // let afterWon = document.createElement("input");
                  // afterWon.className = "after-won-btn";
                  // afterWon.value = "Play Again";
                  // afterWon.type = "submit";
                  // afterWon.setAttribute("onclick", "clearBoard();");
                  

                  // // afterWon.onclick = clearBoard

                  // document.querySelector("html").append(afterWon);

                  // // let afterWonReset = document.createElement("input");
                  // // afterWonReset.value = ""


                 
                



                  // return;


                }

                  if (!arrTds.includes("&nbsp;") && !someHasWon) {
                  let sentence = "Draw"

                  document.querySelector("#end-view").style.display = "block";
                  endStatement(sentence);

                  let clnReset = resetButtonNode.cloneNode();
                  clnReset.className = "down-below";
                  document.querySelector("#end-view").appendChild(clnReset);
                  clnReset.addEventListener("click", replayGame, false);




console.log("Draw");
                }        
     
}

// const clearBoard = function() {
//   $('.chamber').html('&nbsp;');
//   // $('.after-won').remove();

// }





  // document.getElementById("one").innerText = "new text";
  // console.log(document.getElementById("one").innerHTML);

// function clearBoardData() {
  
//       $(".chamber").text('&nbsp;');

// }



// const startNode = document.querySelector("#startz");

// startNode.addEventListener("click", alert(startNode.id), false );



