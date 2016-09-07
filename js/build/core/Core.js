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
        value: function handleRouteRequest(route) {}
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
                        personal: {
                            high: 1000
                        },
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
        key: 'loadDetailView',
        value: function loadDetailView() {}
    }, {
        key: 'setRoutes',
        value: function setRoutes() {

            this.router = new Grapnel({
                pushState: true
            });

            this.router.get('/home', this.loadHomeView.bind(this));
            this.router.get('/settings', this.loadSettingsView.bind(this));
            this.router.get('/detail', this.loadDetailView.bind(this));
            this.router.get('', this.overrideDefaultView.bind(this));
        }
    }]);

    return CoreController;
}();

var coreController = new CoreController();

},{"../models/CoinModel":6,"./views/CoreView.jsx":2}],2:[function(require,module,exports){
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

        this.template = '<div id="container" class="container"></div>';

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

            this.homeView = React.createElement(this.homeViewComponent, {});

            ReactDOM.render(React.createElement(
                'div',
                { className: 'main-wrapper' },
                React.createElement(_HomeView2.default, { current: parseFloat(this.config.model.data.amount), target: this.config.personal.high })
            ), $('#container')[0]);
        }
    }]);

    return CoreView;
}();

exports.default = CoreView;

},{"./HomeView.jsx":4}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GraphView = function (_React$Component) {
    _inherits(GraphView, _React$Component);

    function GraphView() {
        _classCallCheck(this, GraphView);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(GraphView).call(this));
    }

    _createClass(GraphView, [{
        key: "componentDidMount",
        value: function componentDidMount() {

            new Chartist.Pie('#core-graph', {
                series: [parseInt(this.props.current), parseInt(this.props.target)]
            }, {
                donut: true,
                donutWidth: 60,
                startAngle: 270,
                total: 1000,
                showLabel: false
            });
        }
    }, {
        key: "render",
        value: function render() {

            return React.createElement("div", { className: "large-graph ct-square", id: "core-graph" });
        }
    }]);

    return GraphView;
}(React.Component);

exports.default = GraphView;

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _HeaderView = require('./../../views/HeaderView.jsx');

var _HeaderView2 = _interopRequireDefault(_HeaderView);

var _FooterView = require('./../../views/FooterView.jsx');

var _FooterView2 = _interopRequireDefault(_FooterView);

var _GraphView = require('./GraphView.jsx');

var _GraphView2 = _interopRequireDefault(_GraphView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HomeView = function (_React$Component) {
    _inherits(HomeView, _React$Component);

    function HomeView() {
        _classCallCheck(this, HomeView);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(HomeView).call(this));

        _this.navigationItems = [{ url: 'home', name: 'Home', current: true, icon: 'fa-home' }, { url: 'detail', name: 'Detail', icon: 'fa-bars' }, { url: 'settings', name: 'Settings', icon: 'fa-cogs' }];

        return _this;
    }

    _createClass(HomeView, [{
        key: 'render',
        value: function render() {

            return React.createElement(
                'div',
                null,
                React.createElement(_HeaderView2.default, { data: this.navigationItems }),
                React.createElement(
                    'div',
                    { className: 'main-wrapper' },
                    React.createElement(_GraphView2.default, { target: this.props.target, current: this.props.current })
                ),
                React.createElement(_FooterView2.default, null)
            );
        }
    }]);

    return HomeView;
}(React.Component);

exports.default = HomeView;

},{"./../../views/FooterView.jsx":7,"./../../views/HeaderView.jsx":8,"./GraphView.jsx":3}],5:[function(require,module,exports){
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

                beforeSend: config.beforeSend || function () {},
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

},{}],6:[function(require,module,exports){
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

                beforeSend: function beforeSend(request) {

                    request.setRequestHeader('X-Mashape-Key', window.BCPing.mashapeKey);
                },

                url: 'https://montanaflynn-bitcoin-exchange-rate.p.mashape.com/prices/spot_rate?currency=USD'

            });

            return deferred;
        }
    }]);

    return CoinModel;
}(_BaseModel3.default);

exports.default = CoinModel;

},{"./BaseModel.js":5}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FooterView = function (_React$Component) {
    _inherits(FooterView, _React$Component);

    function FooterView() {
        _classCallCheck(this, FooterView);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(FooterView).call(this));
    }

    _createClass(FooterView, [{
        key: "render",
        value: function render() {

            return React.createElement("div", { className: "footer" });
        }
    }]);

    return FooterView;
}(React.Component);

exports.default = FooterView;

},{}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _NavigationView = require("./NavigationView.jsx");

var _NavigationView2 = _interopRequireDefault(_NavigationView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HeaderView = function (_React$Component) {
    _inherits(HeaderView, _React$Component);

    function HeaderView(props) {
        _classCallCheck(this, HeaderView);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(HeaderView).call(this, props));

        _this.props = props;

        return _this;
    }

    _createClass(HeaderView, [{
        key: "render",
        value: function render() {

            return React.createElement(
                "div",
                { className: "header space-xlg-bottom" },
                React.createElement(_NavigationView2.default, { data: this.props.data }),
                React.createElement(
                    "h1",
                    null,
                    "Page Header"
                )
            );
        }
    }]);

    return HeaderView;
}(React.Component);

exports.default = HeaderView;

},{"./NavigationView.jsx":9}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NavigationView = function (_React$Component) {
    _inherits(NavigationView, _React$Component);

    function NavigationView(props) {
        _classCallCheck(this, NavigationView);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(NavigationView).call(this, props));

        _this.props = props;

        return _this;
    }

    _createClass(NavigationView, [{
        key: 'render',
        value: function render() {

            return React.createElement(
                'nav',
                null,
                React.createElement(
                    'ul',
                    { className: 'nav nav-pills pull-right' },
                    this.props.data.map(function (item) {

                        return React.createElement(NavigationItemView, { data: item });
                    })
                )
            );
        }
    }]);

    return NavigationView;
}(React.Component);

exports.default = NavigationView;

var NavigationItemView = function (_React$Component2) {
    _inherits(NavigationItemView, _React$Component2);

    function NavigationItemView(props) {
        _classCallCheck(this, NavigationItemView);

        var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(NavigationItemView).call(this));

        _this2.props = props;

        return _this2;
    }

    _createClass(NavigationItemView, [{
        key: 'render',
        value: function render() {

            var url = '/' + this.props.data.url;
            var css = '';

            var iconString = 'fa ' + this.props.data.icon;

            if (this.props.data.current) {
                css = 'active';
            }

            return React.createElement(
                'li',
                { role: 'presentation', title: this.props.data.name, className: css },
                React.createElement(
                    'a',
                    { href: url },
                    React.createElement('i', { className: iconString })
                )
            );
        }
    }]);

    return NavigationItemView;
}(React.Component);

},{}]},{},[1]);
