define('app',['exports', 'aurelia-framework', './web-api'], function (exports, _aureliaFramework, _webApi) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.App = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var App = exports.App = (_dec = (0, _aureliaFramework.inject)(_webApi.WebAPI), _dec(_class = function () {
    function App(api) {
      _classCallCheck(this, App);

      this.api = api;
    }

    App.prototype.configureRouter = function configureRouter(config, router) {
      config.title = 'Contacts';
      config.map([{ route: '', moduleId: 'no-selection', title: 'Select' }, { route: 'contacts/:id', moduleId: 'contact-detail', name: 'contacts' }]);

      this.router = router;
    };

    return App;
  }()) || _class);
});
define('contact-detail',['exports', 'aurelia-framework', 'aurelia-event-aggregator', './web-api', './messages', './utility'], function (exports, _aureliaFramework, _aureliaEventAggregator, _webApi, _messages, _utility) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ContactDetail = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var _dec, _class;

  var ContactDetail = exports.ContactDetail = (_dec = (0, _aureliaFramework.inject)(_webApi.WebAPI, _aureliaEventAggregator.EventAggregator), _dec(_class = function () {
    function ContactDetail(api, ea) {
      _classCallCheck(this, ContactDetail);

      this.api = api;
      this.ea = ea;
    }

    ContactDetail.prototype.activate = function activate(params, routeConfig) {
      var _this = this;

      this.routeConfig = routeConfig;

      return this.api.getContactDetails(params.id).then(function (contact) {
        _this.contact = contact;
        _this.routeConfig.navModel.setTitle(contact.firstName);
        _this.originalContact = JSON.parse(JSON.stringify(contact));
        _this.ea.publish(new _messages.ContactViewed(_this.contact));
      });
    };

    ContactDetail.prototype.save = function save() {
      var _this2 = this;

      this.api.saveContact(this.contact).then(function (contact) {
        _this2.contact = contact;
        _this2.routeConfig.navModel.setTitle(contact.firstName);
        _this2.originalContact = JSON.parse(JSON.stringify(contact));
        _this2.ea.publish(new _messages.ContactUpdated(_this2.contact));
      });
    };

    ContactDetail.prototype.canDeactivate = function canDeactivate() {
      if (!(0, _utility.areEqual)(this.originalContact, this.contact)) {
        var result = confirm('You have unsaved changes. Are you sure you wish to leave?');

        if (!result) {
          this.ea.publish(new _messages.ContactViewed(this.contact));
        }

        return result;
      }

      return true;
    };

    _createClass(ContactDetail, [{
      key: 'canSave',
      get: function get() {
        return this.contact.firstName && this.contact.lastName && !this.api.isRequesting;
      }
    }]);

    return ContactDetail;
  }()) || _class);
});
define('contact-list',['exports', 'aurelia-event-aggregator', './web-api', './messages', 'aurelia-framework'], function (exports, _aureliaEventAggregator, _webApi, _messages, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ContactList = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _dec, _class;

  var ContactList = exports.ContactList = (_dec = (0, _aureliaFramework.inject)(_webApi.WebAPI, _aureliaEventAggregator.EventAggregator), _dec(_class = function () {
    function ContactList(api, ea) {
      var _this = this;

      _classCallCheck(this, ContactList);

      this.api = api;
      this.contacts = [];

      ea.subscribe(_messages.ContactViewed, function (msg) {
        return _this.select(msg.contact);
      });
      ea.subscribe(_messages.ContactUpdated, function (msg) {
        var id = msg.contact.id;
        var found = _this.contacts.find(function (x) {
          return x.id == id;
        });
        Object.assign(found, msg.contact);
      });
    }

    ContactList.prototype.created = function created() {
      var _this2 = this;

      this.api.getContactList().then(function (contacts) {
        return _this2.contacts = contacts;
      });
    };

    ContactList.prototype.select = function select(contact) {
      this.selectedId = contact.id;
      return true;
    };

    return ContactList;
  }()) || _class);
});
define('environment',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    debug: true,
    testing: true
  };
});
define('loading-indicator',['exports', 'nprogress', 'aurelia-framework'], function (exports, _nprogress, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.LoadingIndicator = undefined;

  var nprogress = _interopRequireWildcard(_nprogress);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }

      newObj.default = obj;
      return newObj;
    }
  }

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  var _dec, _class, _desc, _value, _class2, _descriptor;

  var LoadingIndicator = exports.LoadingIndicator = (_dec = (0, _aureliaFramework.noView)(['nprogress/nprogress.css']), _dec(_class = (_class2 = function () {
    function LoadingIndicator() {
      _classCallCheck(this, LoadingIndicator);

      _initDefineProp(this, 'loading', _descriptor, this);
    }

    LoadingIndicator.prototype.loadingChanged = function loadingChanged(newValue) {
      if (newValue) {
        nprogress.start();
      } else {
        nprogress.done();
      }
    };

    return LoadingIndicator;
  }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'loading', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return false;
    }
  })), _class2)) || _class);
});
define('main',['exports', './environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;

  var _environment2 = _interopRequireDefault(_environment);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function configure(aurelia) {
    aurelia.use.standardConfiguration().feature('resources');

    if (_environment2.default.debug) {
      aurelia.use.developmentLogging();
    }

    if (_environment2.default.testing) {
      aurelia.use.plugin('aurelia-testing');
    }

    aurelia.start().then(function () {
      return aurelia.setRoot();
    });
  }
});
define('messages',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var ContactUpdated = exports.ContactUpdated = function ContactUpdated(contact) {
    _classCallCheck(this, ContactUpdated);

    this.contact = contact;
  };

  var ContactViewed = exports.ContactViewed = function ContactViewed(contact) {
    _classCallCheck(this, ContactViewed);

    this.contact = contact;
  };
});
define('no-selection',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var NoSelection = exports.NoSelection = function NoSelection() {
    _classCallCheck(this, NoSelection);

    this.message = "Please Select a Contact.";
  };
});
define('utility',["exports"], function (exports) {
	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.areEqual = areEqual;
	function areEqual(obj1, obj2) {
		return Object.keys(obj1).every(function (key) {
			return obj2.hasOwnProperty(key) && obj1[key] === obj2[key];
		});
	};
});
define('web-api',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var latency = 200;
  var id = 0;

  function getId() {
    return ++id;
  }

  var contacts = [{
    id: getId(),
    firstName: 'John',
    lastName: 'Tolkien',
    email: 'tolkien@inklings.com',
    phoneNumber: '867-5309'
  }, {
    id: getId(),
    firstName: 'Clive',
    lastName: 'Lewis',
    email: 'lewis@inklings.com',
    phoneNumber: '867-5309'
  }, {
    id: getId(),
    firstName: 'Owen',
    lastName: 'Barfield',
    email: 'barfield@inklings.com',
    phoneNumber: '867-5309'
  }, {
    id: getId(),
    firstName: 'Charles',
    lastName: 'Williams',
    email: 'williams@inklings.com',
    phoneNumber: '867-5309'
  }, {
    id: getId(),
    firstName: 'Roger',
    lastName: 'Green',
    email: 'green@inklings.com',
    phoneNumber: '867-5309'
  }];

  var WebAPI = exports.WebAPI = function () {
    function WebAPI() {
      _classCallCheck(this, WebAPI);

      this.isRequesting = false;
    }

    WebAPI.prototype.getContactList = function getContactList() {
      var _this = this;

      this.isRequesting = true;
      return new Promise(function (resolve) {
        setTimeout(function () {
          var results = contacts.map(function (x) {
            return {
              id: x.id,
              firstName: x.firstName,
              lastName: x.lastName,
              email: x.email
            };
          });
          resolve(results);
          _this.isRequesting = false;
        }, latency);
      });
    };

    WebAPI.prototype.getContactDetails = function getContactDetails(id) {
      var _this2 = this;

      this.isRequesting = true;
      return new Promise(function (resolve) {
        setTimeout(function () {
          var found = contacts.filter(function (x) {
            return x.id == id;
          })[0];
          resolve(JSON.parse(JSON.stringify(found)));
          _this2.isRequesting = false;
        }, latency);
      });
    };

    WebAPI.prototype.saveContact = function saveContact(contact) {
      var _this3 = this;

      this.isRequesting = true;
      return new Promise(function (resolve) {
        setTimeout(function () {
          var instance = JSON.parse(JSON.stringify(contact));
          var found = contacts.filter(function (x) {
            return x.id == contact.id;
          })[0];

          if (found) {
            var index = contacts.indexOf(found);
            contacts[index] = instance;
          } else {
            instance.id = getId();
            contacts.push(instance);
          }

          _this3.isRequesting = false;
          resolve(instance);
        }, latency);
      });
    };

    return WebAPI;
  }();
});
define('resources/index',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {
    config.globalResources(['./elements/loading-indicator']);
  }
});
define('text!app.html', ['module'], function(module) { module.exports = "<template><require from=\"bootstrap/css/bootstrap.css\"></require><require from=\"./styles.css\"></require><require from=\"./contact-list\"></require><nav class=\"navbar navbar-default navbar-fixed-top\" role=\"navigation\"><div class=\"navbar-header\"><a class=\"navbar-brand\" href=\"#\"><i class=\"fa fa-user\"></i> <span>Contacts</span></a></div></nav><loading-indicator loading.bind=\"router.isNavigating || api.isRequesting\"></loading-indicator><div class=\"container\"><div class=\"row\"><contact-list class=\"col-md-4\"></contact-list><router-view class=\"col-md-8\"></router-view></div></div></template>"; });
define('text!styles.css', ['module'], function(module) { module.exports = "body { padding-top: 70px; }\n\nsection {\n  margin: 0 20px;\n}\n\na:focus {\n  outline: none;\n}\n\n.navbar-nav li.loader {\n    margin: 12px 24px 0 6px;\n}\n\n.no-selection {\n  margin: 20px;\n}\n\n.contact-list {\n  overflow-y: auto;\n  border: 1px solid #ddd;\n  padding: 10px;\n}\n\n.panel {\n  margin: 20px;\n}\n\n.button-bar {\n  right: 0;\n  left: 0;\n  bottom: 0;\n  border-top: 1px solid #ddd;\n  background: white;\n}\n\n.button-bar > button {\n  float: right;\n  margin: 20px;\n}\n\nli.list-group-item {\n  list-style: none;\n}\n\nli.list-group-item > a {\n  text-decoration: none;\n}\n\nli.list-group-item.active > a {\n  color: white;\n}\n"; });
define('text!contact-detail.html', ['module'], function(module) { module.exports = "<template><div class=\"panel panel-primary\"><div class=\"panel-heading\"><h3 class=\"panel-title\">Profile</h3></div><div class=\"panel-body\"><form role=\"form\" class=\"form-horizontal\"><div class=\"form-group\"><label class=\"col-sm-2 control-label\">First Name</label><div class=\"col-sm-10\"><input type=\"text\" placeholder=\"first name\" class=\"form-control\" value.bind=\"contact.firstName\"></div></div><div class=\"form-group\"><label class=\"col-sm-2 control-label\">Last Name</label><div class=\"col-sm-10\"><input type=\"text\" placeholder=\"last name\" class=\"form-control\" value.bind=\"contact.lastName\"></div></div><div class=\"form-group\"><label class=\"col-sm-2 control-label\">Email</label><div class=\"col-sm-10\"><input type=\"text\" placeholder=\"email\" class=\"form-control\" value.bind=\"contact.email\"></div></div><div class=\"form-group\"><label class=\"col-sm-2 control-label\">Phone Number</label><div class=\"col-sm-10\"><input type=\"text\" placeholder=\"phone number\" class=\"form-control\" value.bind=\"contact.phoneNumber\"></div></div></form></div></div><div class=\"button-bar\"><button class=\"btn btn-success\" click.delegate=\"save()\" disabled.bind=\"!canSave\">Save</button></div></template>"; });
define('text!contact-list.html', ['module'], function(module) { module.exports = "<template><div class=\"contact-list\"><ul class=\"list-group\"><li repeat.for=\"contact of contacts\" class=\"list-group-item ${contact-id === $parent.selectedId ? 'active' : ''}\"><a route-href=\"route: contacts; params.bind: {id: contact.id}\" click.delegate=\"$parent.select(contact)\"><h4 class=\"list-group-item-heading\">${contact.firstName} ${contact.lastName}<h4><p class=\"list-group-item-text\">${contact.email}</p></h4></h4></a></li></ul></div></template>"; });
define('text!no-selection.html', ['module'], function(module) { module.exports = "<template><div class=\"no-selection text-center\"><h2>${message}</h2></div></template>"; });
//# sourceMappingURL=app-bundle.js.map