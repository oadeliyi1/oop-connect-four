
import { Game } from './game.js'

let game = undefined;  //below:   game = new Game(player1NameInput, player2NameInput);
// let wholeBoardHolder = document.getElementById('board-holder');
// let gameName = document.getElementById('game-name')
let clickTargets = document.getElementById('click-targets')

function updateUI() {
  let wholeBoardHolder = document.getElementById('board-holder');
  let gameName = document.getElementById('game-name');

  if (game === undefined) {
       wholeBoardHolder.classList.add('is-invisible')
  } else {
    wholeBoardHolder.classList.remove('is-invisible');
    gameName.innerHTML = game.getName()   //we don't have to bind here because we are just returning a value not trying to copy the function?
    if (game.currentPlayer === 1) {
      clickTargets.classList.remove('red')
      clickTargets.classList.add('black')
    } else if (game.currentPlayer === 2) {
      clickTargets.classList.remove('black');
      clickTargets.classList.add('red')
    }
  }

//Places a Played Token
  for (let i = 0; i <= 5; i++){
    let row = i;
    for (let j = 0; j <= 6; j++){
      let column = j;
      let square = document.getElementById(`square-${row}-${column}`);
      square.innerHTML = ''
      if (game.getTokenAt(row, column) === 1) {    //here: were adding the black/red chip based on the player
        let div = document.createElement('div');
        div.classList.add('black', 'token');
        square.appendChild(div);
      } else if (game.getTokenAt(row, column) === 2) {
        let div = document.createElement('div');
        div.classList.add('red', 'token');
        square.appendChild(div);
      }
    }
  }
  //Determines Full Columns
  for (let i = 0; i <= 6; i++) {
    let column = document.getElementById(`column-${i}`);
    if (game.isColumnFull(i)) {  //boolean
      column.classList.add('full');

    } else {
      column.classList.remove('full')
    }

  }
}

window.addEventListener('DOMContentLoaded', event => {

  let player1Name = document.getElementById('player-1-name')
  let player2Name = document.getElementById('player-2-name')
  let player1NameInput;
  let player2NameInput;

  let newGameButton = document.getElementById('new-game')

  function enableNewGameBtn() {
    player2NameInput = player2Name.value;
    player1NameInput = player1Name.value
     if ((player1NameInput !== '') && (player2NameInput !== '')) {
      newGameButton.disabled = false;
     } else {
      newGameButton.disabled = true;
    }

  }
  // else if ((player1NameInput === '') && (player2NameInput !== '')) {
  //     newGameButton.disabled = true;
  //   } else if ((player1NameInput !== '') && (player2NameInput === '')) {
  //     newGameButton.disabled = true;
  //   } else if ((player1NameInput === '') && (player2NameInput === ''))
  // }


  player1Name.addEventListener('keyup', event => {
    enableNewGameBtn();
  })

  player2Name.addEventListener('keyup', event => {
    enableNewGameBtn();

  });

  newGameButton.addEventListener('click', event => {
    game = new Game(player1NameInput, player2NameInput);

    player2NameInput = '';
    player1NameInput = '';
    enableNewGameBtn(); //this will disable (disabled = true) newGameBtn becuase when its clicked it cleara the user
     updateUI();
  })


  clickTargets.addEventListener('click', event => {
    let columnNumber = event.target.id  //getting the column, so i can slice the number out
    columnNumber = Number.parseInt(columnNumber.slice(7));
    // console.log(columnNumber);
    game.playInColumn(columnNumber);

    updateUI();

})
































  // let column2 = document.getElementById('column-1');
  // column2.setAttribute('class', 'full')


  // let turn = document.getElementById('click-targets');
  // turn.setAttribute('class', 'black')

  // let placementDiv = document.createElement('div');


  // placementDiv.className = 'black token'
  // // placementDiv.setAttribute('class', 'black');


  // let mySquare = document.getElementById("square-2-0")

  // mySquare.appendChild(placementDiv);




})
