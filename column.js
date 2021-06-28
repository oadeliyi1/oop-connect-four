export class Column {
  constructor() {
    this.tokens = [null,null,null,null,null,null];
  }


  add(playerNumber) {

    for (let i = 5; i >= 0; i--){
      if (this.tokens[i] === null) {
        this.tokens[i] = playerNumber;
        break;
      }
    }
    // if (this.tokens.length < 6) {    //is my logic here okay(Placing a placed token)
    //   this.tokens.push(playerNumber)
    // }
  }

  getTokenAt(rowNumber) {

    return this.tokens[rowNumber];
    // switch (rowNumber) {
    //   case 0:
    //     return this.tokens[5];
    //   case 1:
    //     return this.tokens[4];
    //   case 2:
    //     return this.tokens[3];
    //   case 3:
    //     return this.tokens[2];
    //   case 4:
    //    return this.tokens[1];
    //   case 5:
    //     return this.tokens[0];
    // }

  }

  isFull() {
    return this.tokens[0] != null;

    }
  }
