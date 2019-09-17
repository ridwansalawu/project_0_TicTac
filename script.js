const players = [];

const symbols = {
  "ex":"X",
  "oh":"O",
};

let nextPlayers = {
  playerOne:{ 
              "player_name":"",
              "symbol":symbols.oh,
             },
  playerTwo: {
             "player_name": "",
             "symbol":symbols.ex,
              }

              }


let someHasWon = false;

function toggleElem(elem) {
  if (elem.style.display === "none") {
    elem.style.display = "block";
  }
  else if (elem.style.display === "block") {
    elem.style.display = "none";
  }
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


// const startNode = document.querySelector("#startz");

// startNode.addEventListener("click", alert(startNode.id), false );


function startGame() {
      let game_player1 = document.querySelector("#player1").value;
      let game_player2 = document.querySelector("#player2").value;
      players.push(game_player1);
      players.push(game_player2);
      document.querySelector(".main-page").style.display="block";
      document.querySelector("#display-panel").innerHTML = `<h3>${players[0]}  Vs  ${players[1]}</h3>`;

      
      nextPlayers = {
      playerOne:{ 
              "player_name": players[0],
              "symbol":symbols.oh,
             },
      playerTwo: {
             "player_name": players[1],
             "symbol":symbols.ex,
              }

              }
      }

     console.log(nextPlayers);

function checkEquality(arr) {
  if ((arr[0]===arr[1]) && (arr[1] === arr[2]) )
  return true;
}

function reset() {

}


function clearBoard() {
  startGame();
  console.log(nextPlayerName);
  document.querySelector(".main-page").style.display = 'block';
}



// console.log(nextPlayers.playerOne.name);







let nextPlayer = nextPlayers.playerOne.symbol;
let nextPlayerName = nextPlayers.playerOne.name;

// ${symbols['oh']}

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



                  

                console.log(someHasWon);
                console.log(nextPlayerName + " has won");
                



                  for (let p of document.querySelectorAll("td")) {
                    p.innerHTML = "&nbsp;"
                    // console.log(p);

                  }             
                  
                  document.querySelector(".main-page").style.display = 'none';
                  // document.querySelector(".main-page").innerHTML = `<div id="won">won</div>`;
                  

                  let afterWon = document.createElement("input");
                  afterWon.className = "after-won-btn";
                  afterWon.value = "Play Again";
                  afterWon.type = "submit";
                  afterWon.setAttribute("onclick", "clearBoard();");
                  

                  // afterWon.onclick = clearBoard

                  document.querySelector("html").append(afterWon);

                  // let afterWonReset = document.createElement("input");
                  // afterWonReset.value = ""


                 
                
                  return;


                }

                if (!arrTds.includes("&nbsp;") && !someHasWon) {
                  console.log("Draw");
                }        
     
}

// const clearBoard = function() {
//   $('.chamber').html('&nbsp;');
//   // $('.after-won').remove();

// }

function changeCell() {
  if (nextPlayer == nextPlayers.playerOne.symbol) {
    nextPlayer = nextPlayers.playerTwo.symbol;
    nextPlayerName = nextPlayers.playerTwo.name;
    }
  else {
    nextPlayer = nextPlayers.playerOne.symbol;
    nextPlayerName = nextPlayers.playerOne.name;
  }
  }



  // document.getElementById("one").innerText = "new text";
  // console.log(document.getElementById("one").innerHTML);







