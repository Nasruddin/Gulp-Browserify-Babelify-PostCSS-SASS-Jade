(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var App = (function () {
    function App() {
        _classCallCheck(this, App);

        console.info('App::constructor');
        init();
    }

    _createClass(App, [{
        key: 'init',
        value: function init() {
            console.info('App::initializing');
        }
    }]);

    return App;
})();

},{}],2:[function(require,module,exports){
'use strict';

var welcomeMessage = require('./welcome-message');
var App = require('./App');

welcomeMessage();

},{"./App":1,"./welcome-message":3}],3:[function(require,module,exports){
"use strict";

module.exports = function () {
    console.log("Hello from module");
};

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkOi93b3JrZmxvdy1zdGFydGVyL3NyYy9qcy9BcHAuanMiLCJkOi93b3JrZmxvdy1zdGFydGVyL3NyYy9qcy9tYWluLmpzIiwiZDovd29ya2Zsb3ctc3RhcnRlci9zcmMvanMvd2VsY29tZS1tZXNzYWdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0lDQU0sR0FBRztBQUVNLGFBRlQsR0FBRyxHQUVTOzhCQUZaLEdBQUc7O0FBR0QsZUFBTyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBQ2pDLFlBQUksRUFBRSxDQUFDO0tBQ1Y7O2lCQUxDLEdBQUc7O2VBT0QsZ0JBQUc7QUFDSCxtQkFBTyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1NBQ3JDOzs7V0FUQyxHQUFHOzs7Ozs7QUNBVCxJQUFJLGNBQWMsR0FBRyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUNsRCxJQUFJLEdBQUcsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7O0FBRTNCLGNBQWMsRUFBRSxDQUFDOzs7OztBQ0hqQixNQUFNLENBQUMsT0FBTyxHQUFHLFlBQVk7QUFDekIsV0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0NBQ3BDLENBQUEiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiY2xhc3MgQXBwIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBjb25zb2xlLmluZm8oJ0FwcDo6Y29uc3RydWN0b3InKTtcclxuICAgICAgICBpbml0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICBjb25zb2xlLmluZm8oJ0FwcDo6aW5pdGlhbGl6aW5nJyk7XHJcbiAgICB9XHJcbn0iLCJ2YXIgd2VsY29tZU1lc3NhZ2UgPSByZXF1aXJlKCcuL3dlbGNvbWUtbWVzc2FnZScpO1xyXG52YXIgQXBwID0gcmVxdWlyZSgnLi9BcHAnKTtcclxuXHJcbndlbGNvbWVNZXNzYWdlKCk7IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpICB7XHJcbiAgICBjb25zb2xlLmxvZyhcIkhlbGxvIGZyb20gbW9kdWxlXCIpO1xyXG59Il19
