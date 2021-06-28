/*
Game class - makes objects that initialze player names, updates player status
and returns string of player vs player

*/

import { Column } from './column.js'
import { ColumnWinInspector } from './column-win-inspector.js'
import { RowWinInspector } from './row-win-inspector.js'

export class Game {
  constructor(playerName1, playerName2) {
    this.player1 = playerName1;
    this.player2 = playerName2;
    this.currentPlayer = 1;
    this.columns = [new Column, new Column, new Column, new Column, new Column, new Column, new Column]
    this.winnerNumber = 0;
  }

  getName() {
    if (this.winnerNumber === 1) {
      return `${this.player1} wins!`
    }
    if (this.winnerNumber === 2) {
    return  `${this.player2} wins!`
    }
    if (this.winnerNumber === 3) {
      return `${this.player1} ties with ${this.player2}`
    }
    return `${this.player1} vs ${this.player2}`
  }

  playInColumn(columnIndex) {
    let currentColumn = this.columns[columnIndex]  //one of the Column class instance

    currentColumn.add(this.currentPlayer);

    if (this.currentPlayer === 1) {
      this.currentPlayer = 2
    } else {
      this.currentPlayer = 1
    }
    this.checkForTie();
    if (this.winnerNumber === 0) {
      this.checkForColumnWin();

    }
    if (this.winnerNumber === 0) {
      this.checkforRowWin();
    }
}

  checkForTie() {
    let columnInstances = this.columns;

    if (columnInstances.every(function (column) {
      return column.isFull();
    })) {
      this.winnerNumber = 3;
    }


  }

  checkforRowWin() {
    let group1 = this.columns.slice(0, 4);
    // console.log(group1)

    let group2 = this.columns.slice(1, 5)
    let group3 = this.columns.slice(2, 6);
    let group4 = this.columns.slice(3);

    let group1Inspect = new RowWinInspector(group1);

    let group2Inspect = new RowWinInspector(group2);
    let group3Inspect = new RowWinInspector(group3);
    let group4Inspect = new RowWinInspector(group4);
    let rowArray = [group1Inspect, group2Inspect, group3Inspect, group4Inspect];
// console.log(group4Inspect.inspect())
    for (let i = 0; i < rowArray.length; i++) {
      const element = rowArray[i];   //groupInspect instance
     // console.log(element)
      let playerNumber = element.inspect()
     console.log(`CurrentPlayer:` + playerNumber)
      if (playerNumber) {
        this.winnerNumber = playerNumber
        break;
      }


    }
  }


  getTokenAt(rowIndex, columnIndex) {
    let currentColumn = this.columns[columnIndex];
    // console.log('token again: ' + currentColumn.getTokenAt(rowIndex))
    return currentColumn.getTokenAt(rowIndex)   //this is NOT recursion! we are calling the method of the same name from the column object(look in column.js)
    //will return token at certain index based on switch cases
}


  isColumnFull(columnIndex) {
    let currentColumn = this.columns[columnIndex];
    //return value of isFull
    if (this.winnerNumber === (1||2)) {
      return true;
    }    // we should pretend column is full if theres a winner
    return currentColumn.isFull(); //returns a boolean
  }

  checkForColumnWin() {
    for (let i = 0; i < this.columns.length; i++) {
      let column = this.columns[i];

      let newInspect = new ColumnWinInspector(column); //new ColumnWinInsoector instance
      let playerNumber = newInspect.inspect();
      if (playerNumber) {      //will check truthy , 1 or 2
        this.winnerNumber = playerNumber;
        break;
      }
      // console.log(this.winnerNumber);
    };



  }

}


//Another way to check for tie
        // let bool = true;
    // for (let i = 0; i < columnInstances.length; i++){
    //   let column = columnInstances[i];

    //   if (column.isFull() !== true) {
    //     bool = false;
    //   }
    // }

    // if (bool === true) {
    //   this.winnerNumber = 3;
    // }
