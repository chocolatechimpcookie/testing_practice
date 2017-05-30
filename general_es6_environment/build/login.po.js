'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PageObjectLogin = exports.PageObjectLogin = function () {
  function PageObjectLogin() {
    _classCallCheck(this, PageObjectLogin);

    this.userElement = element(by.valueBind('email & validate'));
    this.passwordElement = element(by.valueBind('password & validate'));
    this.mainPage = "https://qa.overpass.com/#/login";
  }

  _createClass(PageObjectLogin, [{
    key: 'setUser',
    value: function setUser(user) {
      this.userElement.sendKeys(user);
    }
  }, {
    key: 'setPassword',
    value: function setPassword(pass) {
      this.passwordElement.sendKeys(pass);
    }
  }, {
    key: 'getMainpage',
    value: function getMainpage() {
      // browser.get(this.mainPage);
      return this.mainPage;
    }
  }, {
    key: 'getUser',
    value: function getUser() {
      return this.userElement;
    }
  }, {
    key: 'getPassword',
    value: function getPassword() {
      return this.passwordElement;
    }
  }, {
    key: 'getUserinput',
    value: function getUserinput() {
      return this.userElement.getAttribute('value');
    }
  }, {
    key: 'getUsererror',
    value: function getUsererror() {
      return $('input[ref=emailInput] + .error-container > span').getAttribute('innerHTML');
    }
  }, {
    key: 'getPassworderror',
    value: function getPassworderror() {
      return $('input[type=password] + .error-container > span').getAttribute('innerHTML');
    }
  }, {
    key: 'getMessageerror',
    value: function getMessageerror() {
      return $('div.message.error').getAttribute('innerHTML');
    }
  }, {
    key: 'getSubmit',
    value: function getSubmit() {
      return $('button[type=submit]');
    }
  }]);

  return PageObjectLogin;
}();