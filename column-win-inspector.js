// import { Column } from './column.js'

export class ColumnWinInspector {
  constructor(column) {  //will accept column object
    this.columnObject = column;
  }


//checking if four tokens in a row, are the same player
  inspect() {
    // let columnInstance = this.columnObject;
    let columnsTokenArray = this.columnObject.tokens   //
    let countOfFour = 3;
    for (let i = 0; i < columnsTokenArray.length - 1; i++) {  //we wont interate through last element
      const element = columnsTokenArray[i];
      const nextElement = columnsTokenArray[i + 1]
      if (element !== nextElement) {
        countOfFour = 3
      } else {
        countOfFour--;
      }
      if (countOfFour === 0) {
        return element;
      };

    }

    return 0;
  };



}
