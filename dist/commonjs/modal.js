'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (initializers) initializers[key] = descriptor.initializer; } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _inject$customElement$bindable = require('aurelia-framework');

var _$ = require('jquery');

var _$2 = _interopRequireWildcard(_$);

var Modal = (function () {
  var _instanceInitializers = {};

  function Modal(element) {
    _classCallCheck(this, _Modal);

    this.showing = _instanceInitializers.showing.call(this);

    this.element = element;
  }

  var _Modal = Modal;

  _createDecoratedClass(_Modal, [{
    key: 'showing',
    decorators: [_inject$customElement$bindable.bindable],
    initializer: function () {
      return false;
    },
    enumerable: true
  }, {
    key: 'attached',
    value: function attached() {
      _$2['default'](this.modal).modal({ show: false });
    }
  }, {
    key: 'showingChanged',
    value: function showingChanged(newValue) {
      if (newValue) {
        _$2['default'](this.modal).modal('show');
      } else {
        _$2['default'](this.modal).modal('hide');
      }
    }
  }], null, _instanceInitializers);

  Modal = _inject$customElement$bindable.inject(Element)(Modal) || Modal;
  Modal = _inject$customElement$bindable.customElement('modal')(Modal) || Modal;
  return Modal;
})();

exports.Modal = Modal;