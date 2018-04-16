class MyComponentController {
  constructor() {
    this.text = 'My brand new component!';
    this.display = '';
  }

  myMethod(value) {
    this.text = value;
  }

  metodo() {
    this.message = 'funciona!';
  }

  processNumber(value) {
    this.display = this.display + value;
  }

  processSymbol(value) {
    this.display = this.display + value;
  }
}

export const myComponent = {
  template: require('./myComponent.html'),
  controller: MyComponentController
};

