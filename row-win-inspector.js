import { Column } from './column.js'

export class RowWinInspector {
  constructor(columns) {  //is columns an array of four column objects
    this.columnsObjects = columns;
  };

  inspect() {

    let fourCol = this.columnsObjects;

    for (let i = 0; i < 6; i++) {
      let count = 3;
      let token1 = fourCol[0].getTokenAt(i);
      console.log('token' + token1);
      console.log(fourCol[0].tokens)
      let token2 = fourCol[1].getTokenAt(i)

      let token3 = fourCol[2].getTokenAt(i);
      let token4 = fourCol[3].getTokenAt(i);

     let tokenArray = [token1, token2, token3, token4]
      for (let j = 0; j < tokenArray.length - 1; j++) {
        let element = tokenArray[j];

        let nextElement = tokenArray[j + 1];
        if (element !== nextElement) {
          count = 3;
        } else {
          count--;
        }
        if (count === 0) {
          return element;
        }


      };
    }

    return 0;
  }



}
     // let tokenArray = [token1, token2, token3, token4]
      // for (let j = 0; j < tokenArray.length - 1; j++) {
      //   let element = tokenArray[j];
      //   let nextElement = tokenArray[j + 1];
      //   if (element !== nextElement) {
      //     count = 3;
      //   } else {
      //     count--;
      //   }
      //   if (count === 0) {
      //     return element;
      //   }
      // }

      // if (token1 === token2 && token3 === token2 && token4 === token2) {
      //   return token2;
      // }
