class MyComponentController {

  constructor() {

  }


  processNumber(value) {
    if (this.blank === true) {
      this.numberentering = true;
      this.blank = false;
      this.display = this.display + value;
    } else if (this.operator == true) {
      this.operator = false;
      this.display = this.display + value;
    } else if (this.showResult === true) {
      this.showResult = false;
      this.display = value;
    } else if (this.numberentering === true) {
      this.display = this.display + value;
    }
  }

  processSymbol(value) {
    if (value === '=') {
      this.showResult = true;
      let result = eval(this.display);
      this.display = this.display + value + result;
    } else {
      if (this.operator === false && this.blank === false)
        this.operator = true;
      this.display = this.display + value;
    }

  }
}

export const myComponent = {
  template: require('./myComponent.html'),
  controller: MyComponentController
};
