(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @class CoreController
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _CoreView = require('./views/CoreView.jsx');

var _CoreView2 = _interopRequireDefault(_CoreView);

var _CoinModel = require('../models/CoinModel');

var _CoinModel2 = _interopRequireDefault(_CoinModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CoreController = function () {
    function CoreController() {
        _classCallCheck(this, CoreController);

        Radio('navigation:channel').subscribe(this.handleRouteRequest.bind(this));

        this.setRoutes();
    }

    _createClass(CoreController, [{
        key: 'handleRouteRequest',
        value: function handleRouteRequest(route) {

            console.log(route);
        }
    }, {
        key: 'overrideDefaultView',
        value: function overrideDefaultView() {

            this.router.navigate('/home');
        }
    }, {
        key: 'loadHomeView',
        value: function loadHomeView() {

            var coreView;

            var coinModel = new _CoinModel2.default();

            var fetchingData = coinModel.getData();

            $.when(fetchingData).done(function (status) {

                if (status) {
                    coreView = new _CoreView2.default({
                        model: coinModel,
                        el: 'body'
                    });

                    coreView.render();
                }
            }.bind(this));
        }
    }, {
        key: 'loadSettingsView',
        value: function loadSettingsView() {}
    }, {
        key: 'setRoutes',
        value: function setRoutes() {

            this.router = new Grapnel({
                pushState: true
            });

            this.router.get('/home', this.loadHomeView.bind(this));
            this.router.get('/settings', this.loadSettingsView.bind(this));
            this.router.get('', this.overrideDefaultView.bind(this));
        }
    }]);

    return CoreController;
}();

var coreController = new CoreController();

},{"../models/CoinModel":5,"./views/CoreView.jsx":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @class CoreView
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _HomeView = require('./HomeView.jsx');

var _HomeView2 = _interopRequireDefault(_HomeView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CoreView = function () {
    function CoreView(config) {
        _classCallCheck(this, CoreView);

        this.template = '<div id="container"></div>';

        this.config = config || {};
    }

    _createClass(CoreView, [{
        key: 'render',
        value: function render() {

            $(this.config.el).find('#container').remove();

            $(this.config.el).append(this.template);

            this.createHomeView();
        }
    }, {
        key: 'createHomeView',
        value: function createHomeView() {

            ReactDOM.unmountComponentAtNode($('#container')[0]);

            this.homeViewComponent = new _HomeView2.default();

            this.homeView = React.createElement(this.homeViewComponent, {});

            ReactDOM.render(React.createElement(_HomeView2.default, null), $('#container')[0]);
        }
    }]);

    return CoreView;
}();

exports.default = CoreView;

},{"./HomeView.jsx":3}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HomeView = function (_React$Component) {
    _inherits(HomeView, _React$Component);

    function HomeView() {
        _classCallCheck(this, HomeView);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(HomeView).call(this));
    }

    _createClass(HomeView, [{
        key: "render",
        value: function render() {

            return React.createElement(
                "h1",
                null,
                "Hello, world from Dave"
            );
        }
    }]);

    return HomeView;
}(React.Component);

exports.default = HomeView;

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BaseModel = function () {
    function BaseModel() {
        _classCallCheck(this, BaseModel);

        this.data = {};
    }

    _createClass(BaseModel, [{
        key: 'fetcher',
        value: function fetcher(config) {

            if (!config.success || !config.error || !config.url) {

                return false;
            }

            $.ajax({

                url: config.url,
                type: config.type || 'GET',
                data: JSON.stringify(config.data),
                success: config.success,
                error: config.error

            });

            return true;
        }
    }, {
        key: 'parseData',
        value: function parseData(data) {

            this.data = data || {};

            return true;
        }
    }]);

    return BaseModel;
}();

exports.default = BaseModel;

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BaseModel2 = require('./BaseModel.js');

var _BaseModel3 = _interopRequireDefault(_BaseModel2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @class CoinModel
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @extends BaseModel
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var CoinModel = function (_BaseModel) {
    _inherits(CoinModel, _BaseModel);

    function CoinModel() {
        _classCallCheck(this, CoinModel);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(CoinModel).call(this));
    }

    _createClass(CoinModel, [{
        key: 'getData',
        value: function getData() {

            var deferred = $.Deferred();

            this.fetcher({

                success: function (data) {

                    this.data = data;

                    deferred.resolve(true);
                }.bind(this),

                error: function () {

                    this.data = {};
                    deferred.resolve(false);
                }.bind(this),

                type: 'GET',

                url: '/ext/sample_service.php'

            });

            return deferred;
        }
    }]);

    return CoinModel;
}(_BaseModel3.default);

exports.default = CoinModel;

},{"./BaseModel.js":4}]},{},[1]);
