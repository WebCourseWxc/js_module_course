'use strict';

var _module = require('./module1');

var _module2 = require('./module2');

var _module3 = require('./module3');

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _module.foo)();
(0, _module.bar)();

console.log(_module3.DATA_ARR);
(0, _module2.fun1)();
(0, _module2.fun2)();