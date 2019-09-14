let players = [];
let symbols = {
  "ex":"X",
  "oh":"O",
};

function checkEquality(arr) {
  if ((arr[0]===arr[1]) && (arr[1] === arr[2]) )
  return true;
}

function reset() {

}

console.log(document.getElementById("one").innerText);

players[0] = "john";
players[1] = "doe";
let nextPlayer = symbols.oh;
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
        console.log("won");
        allTd = document.querySelectorAll("td");
        for (let x of allTd) {
          x.style.background = "black";
          x.innerHTML = "";

        }
        document.querySelector(".main-page").innerHTML = `<div id="won">won</div>`

        console.log(allTd);
        console.log(document.querySelector(".main-page").style = "background-color: black !important");

       
        return;

      }   
}

function changeCell() {
  if (nextPlayer == symbols.oh) {
    nextPlayer = symbols.ex;
    }
  else {
    nextPlayer = symbols.oh;
  }
  }



  // document.getElementById("one").innerText = "new text";
  console.log(document.getElementById("one").innerHTML);







