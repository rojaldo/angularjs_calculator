export const hello = {
  template: require('./hello.html'),
  controller() {
    this.hello = 'Hola mundo!';
  }
};
