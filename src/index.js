import angular from 'angular';

import {hello} from './app/hello';

import {myComponent} from './app/components/mycomponent/myComponent';

import './index.css';

export const app = 'app';

angular
  .module(app, [])
  .component('app', hello)
  .component('myCalculator', myComponent);

  myComponent.$inject = ['$http','$log'];
