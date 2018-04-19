import angular from 'angular';

import {hello} from './app/hello';

import {myComponent} from './app/components/mycomponent/myComponent';
import {myDisplay} from './app/components/display/myDisplay';
import {myKeyboard} from './app/components/keyboard/myKeyboard';


import './index.css';

export const app = 'app';

angular
  .module(app, [])
  .component('app', hello)
  .component('myCalculator', myComponent)
  .component('myDisplay', myDisplay)
  .component('myKeyboard', myKeyboard);

