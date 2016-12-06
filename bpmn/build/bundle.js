var bundle_library =
webpackJsonp_name__library([0],{

/***/ 0:
/*!*******************!*\
  !*** ./index.jsx ***!
  \*******************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(/*! react */ 1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(/*! react-dom */ 32);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	__webpack_require__(/*! decorators/mixin */ 178);

	var _app = __webpack_require__(/*! app */ 179);

	var _app2 = _interopRequireDefault(_app);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// 事件池对象
	window.EventMap = new Map();
	// 渲染页面
	var app = _react2.default.createElement(_app2.default, null);
	_reactDom2.default.render(app, document.getElementById('bpmn'));

/***/ },

/***/ 178:
/*!**********************************!*\
  !*** ./src/decorators/mixin.jsx ***!
  \**********************************/
/***/ function(module, exports) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var defineProperty = Object.defineProperty,
	    getPrototypeOf = Object.getPrototypeOf;
	var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor,
	    getOwnPropertyNames = Object.getOwnPropertyNames,
	    getOwnPropertySymbols = Object.getOwnPropertySymbols;

	var getOwnKeys = getOwnPropertySymbols && function (object) {
	    return getOwnPropertyNames(object).concat(getOwnPropertySymbols(object));
	} || getOwnPropertyNames;
	function getOwnPropertyDescriptors(obj) {
	    var descs = {};
	    getOwnKeys(obj).forEach(function (key) {
	        return descs[key] = getOwnPropertyDescriptor(obj, key);
	    });
	    return descs;
	}
	function buggySymbol(symbol) {
	    return Object.prototype.toString.call(symbol) === '[object Symbol]' && (typeof symbol === 'undefined' ? 'undefined' : _typeof(symbol)) === 'object';
	}
	function hasProperty(prop, obj) {
	    if (buggySymbol(prop)) {
	        do {
	            if (obj === Object.prototype) {
	                return typeof obj[prop] !== 'undefined';
	            }
	            if (obj.hasOwnProperty(prop)) {
	                return true;
	            }
	        } while (obj = getPrototypeOf(obj));
	        return false;
	    } else {
	        return prop in obj;
	    }
	}
	function handleClass(target, mixins) {
	    if (!mixins.length) {
	        throw new SyntaxError('@mixin() class ' + target.name + ' requires at least one mixin as an argument');
	    }
	    for (var i = 0, l = mixins.length; i < l; i++) {
	        var descs = getOwnPropertyDescriptors(mixins[i]);
	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;

	        try {
	            for (var _iterator = getOwnKeys(descs)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                var key = _step.value;

	                if (!hasProperty(key, target.prototype)) {
	                    defineProperty(target.prototype, key, descs[key]);
	                }
	            }
	        } catch (err) {
	            _didIteratorError = true;
	            _iteratorError = err;
	        } finally {
	            try {
	                if (!_iteratorNormalCompletion && _iterator.return) {
	                    _iterator.return();
	                }
	            } finally {
	                if (_didIteratorError) {
	                    throw _iteratorError;
	                }
	            }
	        }
	    }
	}
	window.mixin = function mixin() {
	    for (var _len = arguments.length, mixins = Array(_len), _key = 0; _key < _len; _key++) {
	        mixins[_key] = arguments[_key];
	    }

	    if (typeof mixins[0] === 'function') {
	        return handleClass(mixins[0], []);
	    } else {
	        return function (target) {
	            return handleClass(target, mixins);
	        };
	    }
	};

/***/ },

/***/ 179:
/*!*********************!*\
  !*** ./src/app.jsx ***!
  \*********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class;

	var _react = __webpack_require__(/*! react */ 1);

	var _react2 = _interopRequireDefault(_react);

	var _reactKonva = __webpack_require__(/*! react-konva */ 180);

	var _EventElement2 = __webpack_require__(/*! commons/EventElement */ 184);

	var _EventElement3 = _interopRequireDefault(_EventElement2);

	var _mock = __webpack_require__(/*! mock */ 186);

	var _mock2 = _interopRequireDefault(_mock);

	var _events = __webpack_require__(/*! events */ 187);

	var _events2 = _interopRequireDefault(_events);

	var _methods = __webpack_require__(/*! methods */ 188);

	var _methods2 = _interopRequireDefault(_methods);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var App = (_dec = mixin(_mock2.default, _events2.default, _methods2.default), _dec(_class = function (_EventElement) {
	    _inherits(App, _EventElement);

	    function App() {
	        var _ref;

	        var _temp, _this, _ret;

	        _classCallCheck(this, App);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	            activeElement: null,
	            elements: new Map(),
	            connectors: []
	        }, _temp), _possibleConstructorReturn(_this, _ret);
	    }

	    _createClass(App, [{
	        key: 'shouldComponentUpdate',

	        /**
	         * 阻止参数变化触发重新渲染
	         */
	        value: function shouldComponentUpdate(state, props) {
	            return state != this.state;
	        }
	    }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            this.state.elements = this.mock();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _state = this.state,
	                elements = _state.elements,
	                connectors = _state.connectors;

	            return _react2.default.createElement(
	                'div',
	                { ref: 'container', className: 'flow-container' },
	                _react2.default.createElement(
	                    _reactKonva.Stage,
	                    { width: 1140, height: 720, onclick: this._onCanvasClick.bind(this), oncontentclick: this._onCanvasContentClick.bind(this) },
	                    _react2.default.createElement(
	                        _reactKonva.Layer,
	                        null,
	                        [].concat(_toConsumableArray(elements)).map(this._initElement.call(this, elements))
	                    )
	                )
	            );
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            document.addEventListener('click', this._onDocumentClick.bind(this));
	            this.refs.container.addEventListener('click', this._onCanvasContainerClick.bind(this));
	            this.addEventListener('connector.create', this._onCreateConnector.bind(this));
	            this.addEventListener('connector.destory', this._onCreateConnector.bind(this));
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            document.removeEventListener('click');
	            this.refs.container.removeEventListener('click');
	            this.removeEventListener('connector.create');
	            this.removeEventListener('connector.destory');
	        }
	    }]);

	    return App;
	}(_EventElement3.default)) || _class);
	exports.default = App;

/***/ },

/***/ 184:
/*!**************************************!*\
  !*** ./src/commons/EventElement.jsx ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class;

	var _react = __webpack_require__(/*! react */ 1);

	var _react2 = _interopRequireDefault(_react);

	var _EventMixin = __webpack_require__(/*! mixins/EventMixin */ 185);

	var _EventMixin2 = _interopRequireDefault(_EventMixin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var EventElement = (_dec = mixin(_EventMixin2.default), _dec(_class = function (_React$Component) {
	    _inherits(EventElement, _React$Component);

	    function EventElement() {
	        _classCallCheck(this, EventElement);

	        return _possibleConstructorReturn(this, (EventElement.__proto__ || Object.getPrototypeOf(EventElement)).apply(this, arguments));
	    }

	    _createClass(EventElement, [{
	        key: 'render',
	        value: function render() {
	            return null;
	        }
	    }]);

	    return EventElement;
	}(_react2.default.Component)) || _class);
	exports.default = EventElement;

/***/ },

/***/ 185:
/*!***********************************!*\
  !*** ./src/mixins/EventMixin.jsx ***!
  \***********************************/
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	/**
	 * 事件池
	 */
	var EventMixin = {
	    /**
	     * 执行事件
	     */
	    executeEvent: function executeEvent(type) {
	        var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

	        if (typeof type !== 'string') {
	            throw '事件类型必须是字符串';
	        }
	        if (EventMap.has(type)) {
	            var funcs = EventMap.get(type);
	            funcs.map(function (item) {
	                return item.func.apply(item, _toConsumableArray(args));
	            });
	        } else {
	            console.log('[Event:Exec]', '事件不存在');
	        }
	    },

	    /**
	     * 添加事件
	     */
	    addEventListener: function addEventListener(type, func) {
	        if (typeof type !== 'string') {
	            throw '事件类型必须是字符串';
	        }
	        // 如果指定了方法，方法参数为字符串
	        if (typeof func !== 'function') {
	            throw '事件监听方法不是一个有效的方法';
	        }
	        console.log('[Event:Add]', '\u4E8B\u4EF6' + type + '\u52A0\u5165\u4E8B\u4EF6\u6C60');
	        var tmp = [];
	        if (EventMap.has(type)) {
	            tmp = EventMap.get(type).concat({ func: func, target: this });
	        } else {
	            tmp.push({ func: func, target: this });
	        }
	        EventMap.set(type, tmp);
	    },

	    /**
	     * 移除事件
	     */
	    removeEventListener: function removeEventListener(type) {
	        var _this = this;

	        if (typeof type !== 'string') {
	            throw '事件类型必须是字符串';
	        }
	        if (EventMap.has(type)) {
	            (function () {
	                var funcs = [];
	                EventMap.get(type).forEach(function (item) {
	                    if (item.source != _this) {
	                        funcs.push(item);
	                    }
	                });
	                if (funcs.length) {
	                    EventMap.set(type, funcs);
	                } else {
	                    EventMap.delete(type);
	                }
	                console.log('[Event:Remove]', '\u79FB\u9664\u4E8B\u4EF6' + type);
	            })();
	        }
	    }
	};
	exports.default = EventMixin;

/***/ },

/***/ 186:
/*!**********************!*\
  !*** ./src/mock.jsx ***!
  \**********************/
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    mock: function mock() {
	        var elements = new Map();
	        elements.set('task1', {
	            type: 'SimpleTask',
	            props: {
	                uniqKey: 'task1',
	                x: 350,
	                y: 300,
	                width: 100,
	                height: 50,
	                connectors: [['in', 'connector1'], ['out', 'connector2']]
	            }
	        });
	        elements.set('task2', {
	            type: 'SimpleTask',
	            props: {
	                uniqKey: 'task2',
	                x: 700,
	                y: 300,
	                width: 100,
	                height: 50,
	                connectors: [['in', 'connector2'], ['out', 'connector1']]
	            }
	        });
	        elements.set('connector1', {
	            type: 'SimpleConnector',
	            props: {
	                info: {
	                    source: ['task1', 'east'],
	                    target: ['task2', 'west']
	                },
	                uniqKey: 'connector1'
	            }
	        });
	        elements.set('connector2', {
	            type: 'SimpleConnector',
	            props: {
	                info: {
	                    source: ['task2', 'north'],
	                    target: ['task1', 'north']
	                },
	                uniqKey: 'connector1'
	            }
	        });
	        return elements;
	    }
	};

/***/ },

/***/ 187:
/*!************************!*\
  !*** ./src/events.jsx ***!
  \************************/
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var EventMethod = {
	  /**
	   * 画布容器点击事件，阻止事件传播
	   */
	  _onCanvasContainerClick: function _onCanvasContainerClick(e) {
	    e.stopPropagation();
	    return false;
	  },

	  /**
	   * 文档点击事件，触发失焦
	   */
	  _onDocumentClick: function _onDocumentClick() {
	    this.executeEvent('element.blur');
	  },

	  /**
	   * 画布点击事件，获取当前活动节点
	   */
	  _onCanvasClick: function _onCanvasClick(e) {
	    this.state.activeElement = e.target;
	  },

	  /**
	   * 画布内容点击事件，判断时候点击到空白区域并触发失焦
	   */
	  _onCanvasContentClick: function _onCanvasContentClick(e) {
	    if (!this.state.activeElement) {
	      this.executeEvent('element.blur');
	    }
	    this.state.activeElement = null;
	  },

	  /**
	   * 创建连接器
	   */
	  _onCreateConnector: function _onCreateConnector() {},

	  /**
	   * 销毁连接器
	   */
	  _onDestoryConnector: function _onDestoryConnector() {}
	};
	exports.default = EventMethod;

/***/ },

/***/ 188:
/*!*************************!*\
  !*** ./src/methods.jsx ***!
  \*************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(/*! react */ 1);

	var _react2 = _interopRequireDefault(_react);

	var _SimpleTask = __webpack_require__(/*! tasks/SimpleTask */ 189);

	var _SimpleTask2 = _interopRequireDefault(_SimpleTask);

	var _StartEvent = __webpack_require__(/*! events/StartEvent */ 201);

	var _StartEvent2 = _interopRequireDefault(_StartEvent);

	var _EndEvent = __webpack_require__(/*! events/EndEvent */ 203);

	var _EndEvent2 = _interopRequireDefault(_EndEvent);

	var _ParallelGateway = __webpack_require__(/*! gateways/ParallelGateway */ 204);

	var _ParallelGateway2 = _interopRequireDefault(_ParallelGateway);

	var _ExclusiveGateway = __webpack_require__(/*! gateways/ExclusiveGateway */ 206);

	var _ExclusiveGateway2 = _interopRequireDefault(_ExclusiveGateway);

	var _InclusiveGateway = __webpack_require__(/*! gateways/InclusiveGateway */ 207);

	var _InclusiveGateway2 = _interopRequireDefault(_InclusiveGateway);

	var _ComplexGateway = __webpack_require__(/*! gateways/ComplexGateway */ 208);

	var _ComplexGateway2 = _interopRequireDefault(_ComplexGateway);

	var _SimpleConnector = __webpack_require__(/*! connectors/SimpleConnector */ 209);

	var _SimpleConnector2 = _interopRequireDefault(_SimpleConnector);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var MethodMixin = {
	    /**
	     * 初始化节点信息
	     */
	    _initElement: function _initElement(elements) {
	        var _this = this;

	        return function (data) {
	            return _this._createElement(data, elements);
	        };
	    },

	    /**
	     * 创建节点
	     */
	    _createElement: function _createElement(data, elements) {
	        var info = data[1];
	        var element = null;
	        info.props.key = data[0];
	        switch (info.type) {
	            case 'SimpleTask':
	                element = _react2.default.createElement(_SimpleTask2.default, info.props);
	                break;
	            case 'SimpleConnector':
	                element = this._createConnectorElement(info.props, elements);
	                break;
	        }
	        return element;
	    },
	    _createConnectorElement: function _createConnectorElement(props, elements) {
	        props.source = elements.get(props.info.source[0]);
	        props.sourcePoint = props.info.source[1];
	        props.target = elements.get(props.info.target[0]);
	        props.targetPoint = props.info.target[1];
	        return _react2.default.createElement(_SimpleConnector2.default, props);
	    }
	};
	exports.default = MethodMixin;

/***/ },

/***/ 189:
/*!**********************************!*\
  !*** ./src/tasks/SimpleTask.jsx ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _class, _temp;

	var _react = __webpack_require__(/*! react */ 1);

	var _react2 = _interopRequireDefault(_react);

	var _reactKonva = __webpack_require__(/*! react-konva */ 180);

	var _BasicTask2 = __webpack_require__(/*! ./BasicTask */ 190);

	var _BasicTask3 = _interopRequireDefault(_BasicTask2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Task = (_temp = _class = function (_BasicTask) {
	    _inherits(Task, _BasicTask);

	    function Task() {
	        _classCallCheck(this, Task);

	        return _possibleConstructorReturn(this, (Task.__proto__ || Object.getPrototypeOf(Task)).apply(this, arguments));
	    }

	    _createClass(Task, [{
	        key: 'getData',
	        value: function getData() {
	            return {
	                type: 'SimpleTask',
	                props: {
	                    uniqKey: this.state.uniqKey,
	                    x: this.state.x,
	                    y: this.state.y,
	                    width: this.state.width,
	                    height: this.state.height,
	                    connectors: this.state.connectors
	                }
	            };
	        }
	    }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            _get(Task.prototype.__proto__ || Object.getPrototypeOf(Task.prototype), 'componentWillMount', this).call(this);
	            this.state.cornerRadius = 5;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _state = this.state,
	                width = _state.width,
	                height = _state.height,
	                draggable = _state.draggable;
	            var _state2 = this.state,
	                backgroundColor = _state2.backgroundColor,
	                cornerRadius = _state2.cornerRadius;

	            var events = Object.assign({}, this._clickEvents, this._dragEvents, this._hoverEvents);
	            var containerProps = this._getContainerProps();
	            return _react2.default.createElement(
	                _reactKonva.Group,
	                _extends({}, containerProps, events),
	                _react2.default.createElement(_reactKonva.Rect, { width: width, height: height, fill: backgroundColor, cornerRadius: cornerRadius }),
	                this._renderBackground()
	            );
	        }
	    }]);

	    return Task;
	}(_BasicTask3.default), _class.defaultProps = {
	    x: 0,
	    y: 0,
	    width: 90,
	    height: 60,
	    backgroundColor: '#009ef1'
	}, _temp);
	exports.default = Task;

/***/ },

/***/ 190:
/*!*********************************!*\
  !*** ./src/tasks/BasicTask.jsx ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(/*! react */ 1);

	var _react2 = _interopRequireDefault(_react);

	var _LogicElement2 = __webpack_require__(/*! commons/LogicElement */ 191);

	var _LogicElement3 = _interopRequireDefault(_LogicElement2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var BasicTask = function (_LogicElement) {
	    _inherits(BasicTask, _LogicElement);

	    function BasicTask() {
	        _classCallCheck(this, BasicTask);

	        return _possibleConstructorReturn(this, (BasicTask.__proto__ || Object.getPrototypeOf(BasicTask)).apply(this, arguments));
	    }

	    _createClass(BasicTask, [{
	        key: '_onResize',

	        /**
	         * 变形中
	         */
	        value: function _onResize(e) {
	            var state = this._resize(e, this.state, this._spins);
	            this.setState(state);
	            this._refreshPoints();
	        }
	    }]);

	    return BasicTask;
	}(_LogicElement3.default);

	exports.default = BasicTask;

/***/ },

/***/ 191:
/*!**************************************!*\
  !*** ./src/commons/LogicElement.jsx ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _dec, _class;

	var _react = __webpack_require__(/*! react */ 1);

	var _react2 = _interopRequireDefault(_react);

	var _reactKonva = __webpack_require__(/*! react-konva */ 180);

	var _BasicElement2 = __webpack_require__(/*! commons/BasicElement */ 192);

	var _BasicElement3 = _interopRequireDefault(_BasicElement2);

	var _ResizePoint = __webpack_require__(/*! points/ResizePoint */ 193);

	var _ResizePoint2 = _interopRequireDefault(_ResizePoint);

	var _ConnectorPoint = __webpack_require__(/*! points/ConnectorPoint */ 197);

	var _ConnectorPoint2 = _interopRequireDefault(_ConnectorPoint);

	var _DragMixin = __webpack_require__(/*! mixins/DragMixin */ 196);

	var _DragMixin2 = _interopRequireDefault(_DragMixin);

	var _ClickMixin = __webpack_require__(/*! mixins/ClickMixin */ 198);

	var _ClickMixin2 = _interopRequireDefault(_ClickMixin);

	var _ResizeMixin = __webpack_require__(/*! mixins/ResizeMixin */ 199);

	var _ResizeMixin2 = _interopRequireDefault(_ResizeMixin);

	var _HoverMixin = __webpack_require__(/*! mixins/HoverMixin */ 195);

	var _HoverMixin2 = _interopRequireDefault(_HoverMixin);

	var _ConnectMixin = __webpack_require__(/*! mixins/ConnectMixin */ 200);

	var _ConnectMixin2 = _interopRequireDefault(_ConnectMixin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var LogicElement = (_dec = mixin(_DragMixin2.default, _ClickMixin2.default, _ResizeMixin2.default, _HoverMixin2.default, _ConnectMixin2.default), _dec(_class = function (_BasicElement) {
	    _inherits(LogicElement, _BasicElement);

	    function LogicElement() {
	        _classCallCheck(this, LogicElement);

	        return _possibleConstructorReturn(this, (LogicElement.__proto__ || Object.getPrototypeOf(LogicElement)).apply(this, arguments));
	    }

	    _createClass(LogicElement, [{
	        key: '_onResizeStart',

	        /**
	         * 开始变形时记录4个变形点的坐标
	         */
	        value: function _onResizeStart() {
	            var _state = this.state,
	                x = _state.x,
	                y = _state.y,
	                width = _state.width,
	                height = _state.height;

	            this._spins = this._getSpins(x, y, width, height);
	        }
	    }, {
	        key: '_onDragMove',
	        value: function _onDragMove() {
	            var data = this.getData();
	            for (var i = 0; i < data.props.connectors.length; i++) {
	                var item = data.props.connectors[i];
	                var key = 'connector.update.' + item[1];
	                this.executeEvent(key, [data]);
	            }
	        }
	        /**
	         * 重写设置状态
	         */

	    }, {
	        key: '_handleStatus',
	        value: function _handleStatus(status) {
	            // 处理透明度
	            this.state.opacity = status != this._STATUS_MOVE_ && 1 || 0.5;
	            // 处理边框显示
	            this.state.borderVisible = status != this._STATUS_DEFAULT_;
	            // 处理point显示
	            if (status == this._STATUS_DEFAULT_) {
	                this._setPointsVisible(false);
	            } else {
	                this._setPointsVisible(true);
	            }
	        }
	        /**
	         * 获取矩形边框坐标
	         */

	    }, {
	        key: '_getRectBorderPoints',
	        value: function _getRectBorderPoints(width, height) {
	            var xMax = width + 0.5;
	            var yMax = height + 0.5;
	            var points = [];
	            // 左上角坐标
	            points = points.concat([-0.5, -0.5]);
	            // 右上角坐标
	            points = points.concat([xMax, -0.5]);
	            // 右下角坐标
	            points = points.concat([xMax, yMax]);
	            // 左下角坐标
	            points = points.concat([-0.5, yMax]);
	            return points;
	        }
	        /**
	         * 获取连接点坐标
	         */

	    }, {
	        key: '_getConnectorPointPosition',
	        value: function _getConnectorPointPosition() {
	            var _state2 = this.state,
	                width = _state2.width,
	                height = _state2.height,
	                pointRaduis = _state2.pointRaduis,
	                borderWidth = _state2.borderWidth,
	                connectable = _state2.connectable;

	            var top = {
	                x: width / 2 - pointRaduis - borderWidth + 1,
	                y: borderWidth / 2 - pointRaduis - 1
	            };
	            var right = {
	                x: width - pointRaduis - borderWidth / 2 + 1,
	                y: height / 2 - pointRaduis - borderWidth
	            };
	            var bottom = {
	                x: width / 2 - pointRaduis - borderWidth + 1,
	                y: height - pointRaduis - borderWidth / 2 + 1
	            };
	            var left = {
	                x: borderWidth / 2 - pointRaduis - 1,
	                y: height / 2 - pointRaduis - borderWidth
	            };
	            return connectable && [top, right, bottom, left] || [];
	        }
	        /**
	         * 获取变形点坐标
	         */

	    }, {
	        key: '_getResizePointPosition',
	        value: function _getResizePointPosition() {
	            var _state3 = this.state,
	                width = _state3.width,
	                height = _state3.height,
	                pointRaduis = _state3.pointRaduis,
	                borderWidth = _state3.borderWidth,
	                resizable = _state3.resizable;

	            var topLeft = {
	                x: borderWidth - pointRaduis - 1,
	                y: borderWidth - pointRaduis - 1,
	                cursor: 'nw-resize'
	            };
	            var topRight = {
	                x: width - pointRaduis - borderWidth + 1,
	                y: borderWidth - pointRaduis - 1,
	                cursor: 'ne-resize'
	            };
	            var bottomLeft = {
	                x: borderWidth - pointRaduis - 1,
	                y: height - pointRaduis - borderWidth + 1,
	                cursor: 'sw-resize'
	            };
	            var bottomRight = {
	                x: width - pointRaduis - borderWidth + 1,
	                y: height - pointRaduis - borderWidth + 1,
	                cursor: 'se-resize'
	            };
	            return resizable && [topLeft, topRight, bottomRight, bottomLeft] || [];
	        }
	        /**
	         * 设置point透明度
	         */

	    }, {
	        key: '_setPointsVisible',
	        value: function _setPointsVisible(visible, point) {
	            for (var ref in this.refs) {
	                if (this.refs.hasOwnProperty(ref)) {
	                    if (point) {
	                        if (ref.indexOf(point) !== -1) {
	                            this.refs[ref].setVisible(visible);
	                        }
	                    } else {
	                        if (ref.indexOf('rp') !== -1 || ref.indexOf('cp') !== -1) {
	                            this.refs[ref].setVisible(visible);
	                        }
	                    }
	                }
	            }
	        }
	        /**
	         * 刷新所有的point
	         */

	    }, {
	        key: '_refreshPoints',
	        value: function _refreshPoints() {
	            var _this2 = this;

	            var _state4 = this.state,
	                width = _state4.width,
	                height = _state4.height,
	                pointRaduis = _state4.pointRaduis;

	            var resizePoints = this._getResizePointPosition(width, height, pointRaduis);
	            var connectorPoints = this._getConnectorPointPosition(width, height, pointRaduis);
	            resizePoints.forEach(function (point, index) {
	                var ref = 'rp' + index;
	                _this2.refs[ref].setAxis(point.x, point.y);
	            });
	            connectorPoints.forEach(function (point, index) {
	                var ref = 'cp' + index;
	                _this2.refs[ref].setAxis(point.x, point.y);
	            });
	        }
	        /**
	         * 渲染基础层
	         */

	    }, {
	        key: '_renderBackground',
	        value: function _renderBackground() {
	            var _state5 = this.state,
	                width = _state5.width,
	                height = _state5.height,
	                pointRaduis = _state5.pointRaduis;
	            var _state6 = this.state,
	                borderVisible = _state6.borderVisible,
	                resizePointVisible = _state6.resizePointVisible,
	                connectorPointVisible = _state6.connectorPointVisible;

	            var borderPoints = this._getRectBorderPoints(width, height);
	            var resizePoints = this._getResizePointPosition();
	            var connectorPoints = this._getConnectorPointPosition();
	            var resizeEvents = this._resizeEvents;
	            var connectEvents = this._connectEvents;
	            return _react2.default.createElement(
	                _reactKonva.Group,
	                { width: width, height: height },
	                _react2.default.createElement(_reactKonva.Line, { visible: borderVisible, x: '0', y: '0', points: borderPoints, stroke: 'red', strokeWidth: '1', closed: true }),
	                resizePoints.map(function (point, index) {
	                    point.ref = 'rp' + index;
	                    return _react2.default.createElement(_ResizePoint2.default, _extends({ visible: resizePointVisible, key: index, radius: pointRaduis }, point, resizeEvents));
	                }),
	                connectorPoints.map(function (point, index) {
	                    point.ref = 'cp' + index;
	                    return _react2.default.createElement(_ConnectorPoint2.default, _extends({ visible: connectorPointVisible, key: index, radius: pointRaduis }, point, connectEvents));
	                })
	            );
	        }
	    }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            _get(LogicElement.prototype.__proto__ || Object.getPrototypeOf(LogicElement.prototype), 'componentWillMount', this).call(this);
	            this._clickEvents = this._getClickEvents();
	            this._dragEvents = this._getDragEvents();
	            this._resizeEvents = this._getResizeEvents();
	            this._hoverEvents = this._getHoverEvents();
	            this._connectEvents = this._getConnectEvents();
	            // 设置初始状态
	            this.state.status = this._STATUS_DEFAULT_;
	            // 最小区域
	            this.state.minArea = 30;
	            // 边框宽度
	            this.state.borderWidth = 1;
	            // 边框可见
	            this.state.borderVisible = false;
	            // 变形点可见
	            this.state.resizePointVisible = false;
	            // 连接点可见
	            this.state.connectorPointVisible = false;
	            // point半径
	            this.state.pointRaduis = 4;
	            // 可变形性
	            this.state.resizable = true;
	            // 可连接性
	            this.state.connectable = true;
	            // 连接线信息
	            this.state.connectors = this.props.connectors;
	            // 初始化状态池
	            this._statusPool.push(this._STATUS_DEFAULT_);
	        }
	    }]);

	    return LogicElement;
	}(_BasicElement3.default)) || _class);
	exports.default = LogicElement;

/***/ },

/***/ 192:
/*!**************************************!*\
  !*** ./src/commons/BasicElement.jsx ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(/*! react */ 1);

	var _react2 = _interopRequireDefault(_react);

	var _reactKonva = __webpack_require__(/*! react-konva */ 180);

	var _EventElement2 = __webpack_require__(/*! ./EventElement */ 184);

	var _EventElement3 = _interopRequireDefault(_EventElement2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var BasicElement = function (_EventElement) {
	    _inherits(BasicElement, _EventElement);

	    function BasicElement() {
	        var _ref;

	        var _temp, _this, _ret;

	        _classCallCheck(this, BasicElement);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = BasicElement.__proto__ || Object.getPrototypeOf(BasicElement)).call.apply(_ref, [this].concat(args))), _this), _this._STATUS_DEFAULT_ = '_STATUS_DEFAULT_', _this._STATUS_ACTIVE_ = '_STATUS_ACTIVE_', _this._STATUS_MOVE_ = '_STATUS_MOVE_', _this._STATUS_RESIZE_ = '_STATUS_RESIZE_', _this._STATUS_HOVER_ = '_STATUS_HOVER_', _this._STATUS_DISABLE_ = '_STATUS_DISABLE_', _this._STATUS_CONNECT_ = '_STATUS_CONNECT_', _this._statusPool = [], _this.state = {
	            x: _this.props.x,
	            y: _this.props.y,
	            width: _this.props.width,
	            height: _this.props.height,
	            status: _this._STATUS_DEFAULT_,
	            draggable: true,
	            opacity: 1,
	            borderColor: _this.props.borderColor,
	            backgroundColor: _this.props.backgroundColor,
	            uniqKey: _this.props.uniqKey
	        }, _temp), _possibleConstructorReturn(_this, _ret);
	    }
	    /*默认状态*/

	    /*活动状态*/

	    /*移动状态*/

	    /*变形状态*/

	    /*悬浮状态*/

	    /*禁用状态*/

	    /*链接状态*/

	    // 状态池

	    /*状态*/


	    _createClass(BasicElement, [{
	        key: '_getContainerProps',

	        /**
	         * 获取容器属性
	         */
	        value: function _getContainerProps() {
	            var _state = this.state,
	                x = _state.x,
	                y = _state.y,
	                width = _state.width,
	                height = _state.height,
	                opacity = _state.opacity;
	            var draggable = this.state.draggable;

	            return {
	                x: x,
	                y: y,
	                width: width,
	                height: height,
	                opacity: opacity,
	                draggable: draggable,
	                ref: "container"
	            };
	        }
	        /**
	         * 获取矩形边框坐标
	         */

	    }, {
	        key: '_getRectBorderPoints',
	        value: function _getRectBorderPoints(width, height) {
	            var xMax = width - 0.5;
	            var yMax = height - 0.5;
	            var points = [];
	            // 左上角坐标
	            points = points.concat([0.5, 0.5]);
	            // 右上角坐标
	            points = points.concat([xMax, 0.5]);
	            // 右下角坐标
	            points = points.concat([xMax, yMax]);
	            // 左下角坐标
	            points = points.concat([0.5, yMax]);
	            // 回到初始地点闭环
	            points = points.concat([0.5, 0.5]);
	            return points;
	        }
	        /**
	         * 缓存状态
	         */

	    }, {
	        key: '_cacheStatus',
	        value: function _cacheStatus(status) {
	            if (this._statusPool.length >= 10) {
	                this._statusPool.shift();
	            }
	            this._statusPool.push(status);
	        }
	        /**
	         * 处理状态
	         * @desc 需要被重写
	         */

	    }, {
	        key: '_handleStatus',
	        value: function _handleStatus() {}
	        /**
	         * 失焦事件
	         */

	    }, {
	        key: '_onBlur',
	        value: function _onBlur(container) {
	            if (this.refs.container != container) {
	                this.setStatus(this._STATUS_DEFAULT_);
	            }
	        }
	        /**
	         * 设置状态
	         */

	    }, {
	        key: 'setStatus',
	        value: function setStatus(status) {
	            this._handleStatus(status);
	            this._cacheStatus(status);
	            this.setState({ status: status });
	        }
	        /**
	         * 设置坐标
	         */

	    }, {
	        key: 'setAxis',
	        value: function setAxis(x, y, callback) {
	            this.setState({
	                x: x,
	                y: y
	            }, callback);
	        }
	    }, {
	        key: 'setCursor',
	        value: function setCursor() {
	            var cursor = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'default';

	            document.body.style.cursor = cursor;
	        }
	        /**
	         * 返回节点数据，该数据用于渲染图形
	         */

	    }, {
	        key: 'getData',
	        value: function getData() {
	            return null;
	        }
	    }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            this.addEventListener('element.blur', this._onBlur.bind(this));
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return null;
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            this.removeEventListener('element.blur');
	        }
	    }]);

	    return BasicElement;
	}(_EventElement3.default);

	exports.default = BasicElement;

/***/ },

/***/ 193:
/*!************************************!*\
  !*** ./src/points/ResizePoint.jsx ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _temp;

	var _react = __webpack_require__(/*! react */ 1);

	var _react2 = _interopRequireDefault(_react);

	var _reactKonva = __webpack_require__(/*! react-konva */ 180);

	var _BasicPoint2 = __webpack_require__(/*! ./BasicPoint */ 194);

	var _BasicPoint3 = _interopRequireDefault(_BasicPoint2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ResizePoint = (_temp = _class = function (_BasicPoint) {
	    _inherits(ResizePoint, _BasicPoint);

	    function ResizePoint() {
	        _classCallCheck(this, ResizePoint);

	        return _possibleConstructorReturn(this, (ResizePoint.__proto__ || Object.getPrototypeOf(ResizePoint)).apply(this, arguments));
	    }

	    _createClass(ResizePoint, [{
	        key: '_onDragStart',
	        value: function _onDragStart(e) {
	            this.props.onResizeStart && this.props.onResizeStart(e);
	        }
	    }, {
	        key: '_onDragMove',
	        value: function _onDragMove(e) {
	            e.position = this.props.cursor;
	            this.props.onResize && this.props.onResize(e);
	        }
	    }, {
	        key: '_onDragEnd',
	        value: function _onDragEnd(e) {
	            this.props.onResizeEnd && this.props.onResizeEnd(e);
	        }
	    }, {
	        key: '_onMouseEnter',
	        value: function _onMouseEnter(e) {
	            this.setCursor(this.props.cursor);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var events = Object.assign({}, this._dragEvents, this._hoverEvents);
	            var _state = this.state,
	                x = _state.x,
	                y = _state.y,
	                radius = _state.radius,
	                borderColor = _state.borderColor;
	            var _state2 = this.state,
	                draggable = _state2.draggable,
	                visible = _state2.visible;

	            var points = this._getRectBorderPoints(radius * 2, radius * 2);
	            return _react2.default.createElement(
	                _reactKonva.Group,
	                _extends({ draggable: draggable, visible: visible, x: x, y: y }, events),
	                _react2.default.createElement(_reactKonva.Line, { points: points, stroke: borderColor, strokeWidth: '1', fill: 'white', closed: true })
	            );
	        }
	    }]);

	    return ResizePoint;
	}(_BasicPoint3.default), _class.defaultProps = {
	    x: 0,
	    y: 0,
	    radius: 5,
	    borderColor: 'red',
	    visible: false
	}, _temp);
	exports.default = ResizePoint;

/***/ },

/***/ 194:
/*!***********************************!*\
  !*** ./src/points/BasicPoint.jsx ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class;

	var _react = __webpack_require__(/*! react */ 1);

	var _react2 = _interopRequireDefault(_react);

	var _BasicElement2 = __webpack_require__(/*! commons/BasicElement */ 192);

	var _BasicElement3 = _interopRequireDefault(_BasicElement2);

	var _HoverMixin = __webpack_require__(/*! mixins/HoverMixin */ 195);

	var _HoverMixin2 = _interopRequireDefault(_HoverMixin);

	var _DragMixin = __webpack_require__(/*! mixins/DragMixin */ 196);

	var _DragMixin2 = _interopRequireDefault(_DragMixin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var BasicPoint = (_dec = mixin(_HoverMixin2.default, _DragMixin2.default), _dec(_class = function (_BasicElement) {
	    _inherits(BasicPoint, _BasicElement);

	    function BasicPoint() {
	        _classCallCheck(this, BasicPoint);

	        return _possibleConstructorReturn(this, (BasicPoint.__proto__ || Object.getPrototypeOf(BasicPoint)).apply(this, arguments));
	    }

	    _createClass(BasicPoint, [{
	        key: 'setVisible',
	        value: function setVisible(visible) {
	            this.setState({ visible: visible });
	        }
	    }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            this._dragEvents = this._getDragEvents();
	            this._hoverEvents = this._getHoverEvents();
	            this.state.radius = this.props.radius;
	            this.state.visible = this.props.visible;
	        }
	    }, {
	        key: 'shouldComponentUpdate',
	        value: function shouldComponentUpdate(props, state) {
	            return this.state != state;
	        }
	    }]);

	    return BasicPoint;
	}(_BasicElement3.default)) || _class);
	exports.default = BasicPoint;

/***/ },

/***/ 195:
/*!***********************************!*\
  !*** ./src/mixins/HoverMixin.jsx ***!
  \***********************************/
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var HoverMixin = {
	    __onMouseEnter: function __onMouseEnter(e) {
	        this._onMouseEnter(e);
	        this.setStatus(this._STATUS_HOVER_);
	    },
	    __onMouseLeave: function __onMouseLeave(e) {
	        // 恢复光标
	        this.setCursor();
	        var lastStatus = this._statusPool[this._statusPool.length - 1];
	        if (lastStatus == this._STATUS_HOVER_) {
	            lastStatus = this._statusPool[this._statusPool.length - 2];
	        }
	        this._onMouseLeave(e);
	        this.setStatus(lastStatus);
	    },
	    _onMouseEnter: function _onMouseEnter() {},
	    _onMouseLeave: function _onMouseLeave() {},
	    _getHoverEvents: function _getHoverEvents() {
	        return { onmouseenter: this.__onMouseEnter.bind(this), onmouseleave: this.__onMouseLeave.bind(this) };
	    }
	};
	exports.default = HoverMixin;

/***/ },

/***/ 196:
/*!**********************************!*\
  !*** ./src/mixins/DragMixin.jsx ***!
  \**********************************/
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var DragMixin = {
	    /**
	     * 拖拽开始事件，处理图形
	     */
	    __onDragStart: function __onDragStart(e) {
	        if (!this.state.draggable) return;
	        e.target.moveToTop();
	        this.executeEvent('element.blur', [this.refs.container]);
	        this._onDragStart(e);
	        this.setStatus(this._STATUS_MOVE_);
	    },

	    /**
	     * 拖拽移动事件，处理图形
	     */
	    __onDragMove: function __onDragMove(e) {
	        if (!this.state.draggable) return;
	        var _e$target$attrs = e.target.attrs,
	            x = _e$target$attrs.x,
	            y = _e$target$attrs.y;

	        this.state.x = x;
	        this.state.y = y;
	        this._onDragMove(e);
	    },

	    /**
	     * 拖拽结束事件，处理图形
	     */
	    __onDragEnd: function __onDragEnd(e) {
	        if (!this.state.draggable) return;
	        this._onDragEnd(e);
	        this.setStatus(this._STATUS_ACTIVE_);
	    },

	    /**
	     * 拖拽开始事件，处理业务
	     * @desc 需要重写
	     */
	    _onDragStart: function _onDragStart() {
	        this.setCursor('move');
	    },

	    /**
	     * 拖拽移动事件，处理业务
	     * @desc 需要重写
	     */
	    _onDragMove: function _onDragMove(x, y) {},

	    /**
	     * 拖拽结束事件，处理业务
	     * @desc 需要重写
	     */
	    _onDragEnd: function _onDragEnd() {},

	    /**
	     * 获取所有拖拽事件
	     */
	    _getDragEvents: function _getDragEvents() {
	        return { ondragstart: this.__onDragStart.bind(this), ondragmove: this.__onDragMove.bind(this), ondragend: this.__onDragEnd.bind(this) };
	    }
	};
	exports.default = DragMixin;

/***/ },

/***/ 197:
/*!***************************************!*\
  !*** ./src/points/ConnectorPoint.jsx ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _temp;

	var _react = __webpack_require__(/*! react */ 1);

	var _react2 = _interopRequireDefault(_react);

	var _reactKonva = __webpack_require__(/*! react-konva */ 180);

	var _BasicPoint2 = __webpack_require__(/*! ./BasicPoint */ 194);

	var _BasicPoint3 = _interopRequireDefault(_BasicPoint2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ConnectorPoint = (_temp = _class = function (_BasicPoint) {
	    _inherits(ConnectorPoint, _BasicPoint);

	    function ConnectorPoint() {
	        _classCallCheck(this, ConnectorPoint);

	        return _possibleConstructorReturn(this, (ConnectorPoint.__proto__ || Object.getPrototypeOf(ConnectorPoint)).apply(this, arguments));
	    }

	    _createClass(ConnectorPoint, [{
	        key: '_onDragStart',
	        value: function _onDragStart(e) {
	            this.props.onConnectStart && this.props.onConnectStart(e);
	        }
	    }, {
	        key: '_onDragMove',
	        value: function _onDragMove(e) {
	            var _props = this.props,
	                x = _props.x,
	                y = _props.y;

	            this.props.onConnect && this.props.onConnect(e);
	            this.setState({ x: x, y: y });
	        }
	    }, {
	        key: '_onDragEnd',
	        value: function _onDragEnd(e) {
	            this.props.onConnectEnd && this.props.onConnectEnd(e);
	        }
	    }, {
	        key: '_onMouseEnter',
	        value: function _onMouseEnter(e) {
	            this.setCursor("crosshair");
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _state = this.state,
	                x = _state.x,
	                y = _state.y,
	                radius = _state.radius,
	                borderColor = _state.borderColor;
	            var _state2 = this.state,
	                draggable = _state2.draggable,
	                visible = _state2.visible;

	            var events = Object.assign({}, this._dragEvents, this._hoverEvents);
	            return _react2.default.createElement(
	                _reactKonva.Group,
	                _extends({ draggable: draggable, visible: visible, x: x, y: y, width: radius * 2, height: radius * 2 }, events),
	                _react2.default.createElement(_reactKonva.Circle, { x: radius, y: radius, radius: radius, fill: borderColor }),
	                _react2.default.createElement(_reactKonva.Circle, { x: radius, y: radius, radius: radius - 1, fill: 'white' })
	            );
	        }
	    }]);

	    return ConnectorPoint;
	}(_BasicPoint3.default), _class.defaultProps = {
	    x: 0,
	    y: 0,
	    radius: 5,
	    borderColor: 'red',
	    visible: false
	}, _temp);
	exports.default = ConnectorPoint;

/***/ },

/***/ 198:
/*!***********************************!*\
  !*** ./src/mixins/ClickMixin.jsx ***!
  \***********************************/
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var ClickMixin = {
	    __onClick: function __onClick(e) {
	        this.executeEvent('element.blur', [this.refs.container]);
	        this._onClick(e);
	        this.setStatus(this._STATUS_ACTIVE_);
	    },
	    _onClick: function _onClick(e) {},
	    _getClickEvents: function _getClickEvents() {
	        return { onclick: this.__onClick.bind(this) };
	    }
	};
	exports.default = ClickMixin;

/***/ },

/***/ 199:
/*!************************************!*\
  !*** ./src/mixins/ResizeMixin.jsx ***!
  \************************************/
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var ResizeMixin = {
	    /**
	     * 缓存坐标和面积
	     */
	    __cache: function __cache(x, y, w, h) {
	        this._cacheX = x;
	        this._cacheY = y;
	        this._cacheWidth = w;
	        this._cacheHeight = h;
	    },
	    __onResizeStart: function __onResizeStart(e) {
	        this.refs.container.moveToTop();
	        this.state.draggable = false;
	        var _state = this.state,
	            x = _state.x,
	            y = _state.y,
	            width = _state.width,
	            height = _state.height;

	        this.__cache(x, y, width, height);
	        this._onResizeStart(e);
	        this.setStatus(this._STATUS_RESIZE_);
	    },
	    __onResize: function __onResize(e) {
	        this._onResize(e);
	    },
	    __onResizeEnd: function __onResizeEnd(e) {
	        this.state.draggable = true;
	        this.__cache(0, 0, 0, 0);
	        this._onResizeEnd(e);
	        this.setStatus(this._STATUS_ACTIVE_);
	    },
	    _onResizeStart: function _onResizeStart() {},
	    _onResize: function _onResize() {},
	    _onResizeEnd: function _onResizeEnd() {},
	    _getSpins: function _getSpins(x, y, width, height) {
	        var xMax = x + width;
	        var yMax = y + height;
	        return {
	            'nw-resize': [xMax, yMax],
	            'ne-resize': [x, yMax],
	            'sw-resize': [xMax, y],
	            'se-resize': [x, y]
	        };
	    },
	    _resize: function _resize(e, state, spins, isEqual) {
	        var x = state.x,
	            y = state.y,
	            width = state.width,
	            height = state.height,
	            minArea = state.minArea;

	        var px = spins[e.position][0];
	        var py = spins[e.position][1];
	        var rx = e.target.attrs.x;
	        var ry = e.target.attrs.y;
	        var nx = x,
	            ny = y,
	            nw = width,
	            nh = height;
	        switch (e.position) {
	            case 'nw-resize':
	                //左上
	                nw = width - rx > minArea && width - rx || minArea;
	                nh = height - ry > minArea && height - ry || minArea;
	                nx = px - (isEqual && (nw > nh && nw || nh) || nw);
	                ny = py - (isEqual && (nw > nh && nw || nh) || nh);
	                break;
	            case 'ne-resize':
	                //右上
	                nw = rx > minArea && rx || minArea;
	                nh = height - ry > minArea && height - ry || minArea;
	                nx = x;
	                ny = py - (isEqual && (nw > nh && nw || nh) || nh);
	                break;
	            case 'sw-resize':
	                //左下
	                nw = width - rx > minArea && width - rx || minArea;
	                nh = ry > minArea && ry || minArea;
	                nx = px - (isEqual && (nw > nh && nw || nh) || nw);
	                ny = y;
	                break;
	            case 'se-resize':
	                //右下
	                nw = rx > minArea && rx || minArea;
	                nh = ry > minArea && ry || minArea;
	                nx = x;
	                ny = y;
	                break;
	        }
	        return { x: nx, y: ny, width: nw, height: nh };
	    },
	    _getResizeEvents: function _getResizeEvents() {
	        return { onResizeStart: this.__onResizeStart.bind(this), onResize: this.__onResize.bind(this), onResizeEnd: this.__onResizeEnd.bind(this) };
	    }
	};
	exports.default = ResizeMixin;

/***/ },

/***/ 200:
/*!*************************************!*\
  !*** ./src/mixins/ConnectMixin.jsx ***!
  \*************************************/
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var ConnectorMixin = {
	    __onConnectStart: function __onConnectStart(e) {
	        this.state.draggable = false;
	        this.executeEvent('connector.create', []);
	        this._onConnectStart(e);
	        this.setStatus(this._STATUS_CONNECT_);
	    },
	    __onConnect: function __onConnect(e) {
	        console.log('connect');
	        this._onConnect(e);
	    },
	    __onConnectEnd: function __onConnectEnd(e) {
	        this.state.draggable = true;
	        this._onConnectEnd(e);
	        this.setStatus(this._STATUS_ACTIVE_);
	    },
	    _onConnectStart: function _onConnectStart() {},
	    _onConnect: function _onConnect() {},
	    _onConnectEnd: function _onConnectEnd() {},
	    _getConnectEvents: function _getConnectEvents() {
	        return { onConnectStart: this.__onConnectStart.bind(this), onConnect: this.__onConnect.bind(this), onConnectEnd: this.__onConnectEnd.bind(this) };
	    }
	};
	exports.default = ConnectorMixin;

/***/ },

/***/ 201:
/*!***********************************!*\
  !*** ./src/events/StartEvent.jsx ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _class, _temp;

	var _react = __webpack_require__(/*! react */ 1);

	var _react2 = _interopRequireDefault(_react);

	var _BasicEvent2 = __webpack_require__(/*! ./BasicEvent */ 202);

	var _BasicEvent3 = _interopRequireDefault(_BasicEvent2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var StartEvent = (_temp = _class = function (_BasicEvent) {
	    _inherits(StartEvent, _BasicEvent);

	    function StartEvent() {
	        _classCallCheck(this, StartEvent);

	        return _possibleConstructorReturn(this, (StartEvent.__proto__ || Object.getPrototypeOf(StartEvent)).apply(this, arguments));
	    }

	    _createClass(StartEvent, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            _get(StartEvent.prototype.__proto__ || Object.getPrototypeOf(StartEvent.prototype), 'componentWillMount', this).call(this);
	            this.state.backgroundColor = '#66c484';
	        }
	    }]);

	    return StartEvent;
	}(_BasicEvent3.default), _class.defaultProps = {
	    x: 30,
	    y: 30,
	    radius: 30
	}, _temp);
	exports.default = StartEvent;

/***/ },

/***/ 202:
/*!***********************************!*\
  !*** ./src/events/BasicEvent.jsx ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _react = __webpack_require__(/*! react */ 1);

	var _react2 = _interopRequireDefault(_react);

	var _reactKonva = __webpack_require__(/*! react-konva */ 180);

	var _LogicElement2 = __webpack_require__(/*! commons/LogicElement */ 191);

	var _LogicElement3 = _interopRequireDefault(_LogicElement2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var BasicEvent = function (_LogicElement) {
	    _inherits(BasicEvent, _LogicElement);

	    function BasicEvent() {
	        _classCallCheck(this, BasicEvent);

	        return _possibleConstructorReturn(this, (BasicEvent.__proto__ || Object.getPrototypeOf(BasicEvent)).apply(this, arguments));
	    }

	    _createClass(BasicEvent, [{
	        key: '_onResize',
	        value: function _onResize(e) {
	            var _resize = this._resize(e, this.state, this._spins, true),
	                x = _resize.x,
	                y = _resize.y,
	                width = _resize.width,
	                height = _resize.height;

	            var radius = (width > height && width || height) / 2;
	            this.setState({
	                x: x,
	                y: y,
	                radius: radius,
	                width: radius * 2,
	                height: radius * 2
	            });
	            this._refreshPoints();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _state = this.state,
	                radius = _state.radius,
	                backgroundColor = _state.backgroundColor;

	            var events = Object.assign({}, this._clickEvents, this._dragEvents, this._hoverEvents);
	            var containerProps = this._getContainerProps();
	            return _react2.default.createElement(
	                _reactKonva.Group,
	                _extends({}, containerProps, events),
	                _react2.default.createElement(_reactKonva.Circle, { x: radius, y: radius, radius: radius, fill: backgroundColor }),
	                this._renderBackground()
	            );
	        }
	    }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            _get(BasicEvent.prototype.__proto__ || Object.getPrototypeOf(BasicEvent.prototype), 'componentWillMount', this).call(this);
	            var radius = this.props.radius;

	            this.state.width = radius * 2;
	            this.state.height = radius * 2;
	            this.state.radius = this.props.radius;
	        }
	    }]);

	    return BasicEvent;
	}(_LogicElement3.default);

	exports.default = BasicEvent;

/***/ },

/***/ 203:
/*!*********************************!*\
  !*** ./src/events/EndEvent.jsx ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _class, _temp;

	var _react = __webpack_require__(/*! react */ 1);

	var _react2 = _interopRequireDefault(_react);

	var _BasicEvent2 = __webpack_require__(/*! ./BasicEvent */ 202);

	var _BasicEvent3 = _interopRequireDefault(_BasicEvent2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var EndEvent = (_temp = _class = function (_BasicEvent) {
	    _inherits(EndEvent, _BasicEvent);

	    function EndEvent() {
	        _classCallCheck(this, EndEvent);

	        return _possibleConstructorReturn(this, (EndEvent.__proto__ || Object.getPrototypeOf(EndEvent)).apply(this, arguments));
	    }

	    _createClass(EndEvent, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            _get(EndEvent.prototype.__proto__ || Object.getPrototypeOf(EndEvent.prototype), 'componentWillMount', this).call(this);
	            this.state.backgroundColor = 'rgb(255,0,0)';
	        }
	    }]);

	    return EndEvent;
	}(_BasicEvent3.default), _class.defaultProps = {
	    x: 30,
	    y: 30,
	    radius: 30
	}, _temp);
	exports.default = EndEvent;

/***/ },

/***/ 204:
/*!******************************************!*\
  !*** ./src/gateways/ParallelGateway.jsx ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _temp;

	var _react = __webpack_require__(/*! react */ 1);

	var _react2 = _interopRequireDefault(_react);

	var _reactKonva = __webpack_require__(/*! react-konva */ 180);

	var _BasicGateway2 = __webpack_require__(/*! ./BasicGateway */ 205);

	var _BasicGateway3 = _interopRequireDefault(_BasicGateway2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ParallelGateway = (_temp = _class = function (_BasicGateway) {
	    _inherits(ParallelGateway, _BasicGateway);

	    function ParallelGateway() {
	        _classCallCheck(this, ParallelGateway);

	        return _possibleConstructorReturn(this, (ParallelGateway.__proto__ || Object.getPrototypeOf(ParallelGateway)).apply(this, arguments));
	    }

	    _createClass(ParallelGateway, [{
	        key: '_renderIcon',
	        value: function _renderIcon() {
	            var _state = this.state,
	                radius = _state.radius,
	                iconLineWidth = _state.iconLineWidth,
	                padding = _state.padding;

	            var max = radius * 2 - padding;
	            var verticalLinePoints = [padding, radius, max, radius];
	            var horizontalLinePoints = [radius, padding, radius, max];
	            return _react2.default.createElement(
	                _reactKonva.Group,
	                null,
	                _react2.default.createElement(_reactKonva.Line, { points: horizontalLinePoints, stroke: '#000', strokeWidth: iconLineWidth }),
	                _react2.default.createElement(_reactKonva.Line, { points: verticalLinePoints, stroke: '#000', strokeWidth: iconLineWidth })
	            );
	        }
	    }]);

	    return ParallelGateway;
	}(_BasicGateway3.default), _class.defaultProps = {
	    x: 30,
	    y: 30,
	    radius: 30,
	    padding: 12,
	    iconLineWidth: 4
	}, _temp);
	exports.default = ParallelGateway;

/***/ },

/***/ 205:
/*!***************************************!*\
  !*** ./src/gateways/BasicGateway.jsx ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _react = __webpack_require__(/*! react */ 1);

	var _react2 = _interopRequireDefault(_react);

	var _reactKonva = __webpack_require__(/*! react-konva */ 180);

	var _LogicElement2 = __webpack_require__(/*! commons/LogicElement */ 191);

	var _LogicElement3 = _interopRequireDefault(_LogicElement2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var BasicGateway = function (_LogicElement) {
	    _inherits(BasicGateway, _LogicElement);

	    function BasicGateway() {
	        _classCallCheck(this, BasicGateway);

	        return _possibleConstructorReturn(this, (BasicGateway.__proto__ || Object.getPrototypeOf(BasicGateway)).apply(this, arguments));
	    }

	    _createClass(BasicGateway, [{
	        key: '_onResize',
	        value: function _onResize(e) {
	            var _resize = this._resize(e, this.state, this._spins, true),
	                x = _resize.x,
	                y = _resize.y,
	                width = _resize.width,
	                height = _resize.height;

	            var radius = (width > height && width || height) / 2;
	            this.setState({
	                x: x,
	                y: y,
	                radius: radius,
	                width: radius * 2,
	                height: radius * 2
	            });
	            this._refreshPoints();
	        }
	    }, {
	        key: '_renderIcon',
	        value: function _renderIcon() {
	            return null;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _state = this.state,
	                radius = _state.radius,
	                backgroundColor = _state.backgroundColor;

	            var events = Object.assign({}, this._clickEvents, this._dragEvents, this._hoverEvents);
	            var containerProps = this._getContainerProps();
	            return _react2.default.createElement(
	                _reactKonva.Group,
	                _extends({}, containerProps, events),
	                _react2.default.createElement(_reactKonva.RegularPolygon, { x: radius, y: radius, sides: 4, radius: radius, stroke: '#000', strokeWidth: '3', fill: '#ffb352' }),
	                this._renderIcon(),
	                this._renderBackground()
	            );
	        }
	    }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            _get(BasicGateway.prototype.__proto__ || Object.getPrototypeOf(BasicGateway.prototype), 'componentWillMount', this).call(this);
	            var radius = this.props.radius;

	            this.state.width = radius * 2;
	            this.state.height = radius * 2;
	            this.state.radius = this.props.radius;
	            this.state.padding = this.props.padding;
	            this.state.iconLineWidth = this.props.iconLineWidth;
	        }
	    }]);

	    return BasicGateway;
	}(_LogicElement3.default);

	exports.default = BasicGateway;

/***/ },

/***/ 206:
/*!*******************************************!*\
  !*** ./src/gateways/ExclusiveGateway.jsx ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _temp;

	var _react = __webpack_require__(/*! react */ 1);

	var _react2 = _interopRequireDefault(_react);

	var _reactKonva = __webpack_require__(/*! react-konva */ 180);

	var _BasicGateway2 = __webpack_require__(/*! ./BasicGateway */ 205);

	var _BasicGateway3 = _interopRequireDefault(_BasicGateway2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ExclusiveGateway = (_temp = _class = function (_BasicGateway) {
	    _inherits(ExclusiveGateway, _BasicGateway);

	    function ExclusiveGateway() {
	        _classCallCheck(this, ExclusiveGateway);

	        return _possibleConstructorReturn(this, (ExclusiveGateway.__proto__ || Object.getPrototypeOf(ExclusiveGateway)).apply(this, arguments));
	    }

	    _createClass(ExclusiveGateway, [{
	        key: '_renderIcon',
	        value: function _renderIcon() {
	            var _state = this.state,
	                radius = _state.radius,
	                iconLineWidth = _state.iconLineWidth,
	                padding = _state.padding;

	            var xMin = void 0,
	                yMin = void 0,
	                xMax = void 0,
	                yMax = void 0;
	            xMin = yMin = radius / 2 + Math.sqrt(padding);
	            xMax = yMax = radius * 1.5 - Math.sqrt(padding);
	            var leftLinePoints = [xMin, yMin, xMax, yMax];
	            var rightLinePoints = [xMax, yMin, xMin, yMax];
	            return _react2.default.createElement(
	                _reactKonva.Group,
	                null,
	                _react2.default.createElement(_reactKonva.Line, { points: leftLinePoints, stroke: '#000', strokeWidth: iconLineWidth }),
	                _react2.default.createElement(_reactKonva.Line, { points: rightLinePoints, stroke: '#000', strokeWidth: iconLineWidth })
	            );
	        }
	    }]);

	    return ExclusiveGateway;
	}(_BasicGateway3.default), _class.defaultProps = {
	    x: 30,
	    y: 30,
	    radius: 30,
	    padding: 12,
	    iconLineWidth: 4
	}, _temp);
	exports.default = ExclusiveGateway;

/***/ },

/***/ 207:
/*!*******************************************!*\
  !*** ./src/gateways/InclusiveGateway.jsx ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _temp;

	var _react = __webpack_require__(/*! react */ 1);

	var _react2 = _interopRequireDefault(_react);

	var _reactKonva = __webpack_require__(/*! react-konva */ 180);

	var _BasicGateway2 = __webpack_require__(/*! ./BasicGateway */ 205);

	var _BasicGateway3 = _interopRequireDefault(_BasicGateway2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var InclusiveGateway = (_temp = _class = function (_BasicGateway) {
	    _inherits(InclusiveGateway, _BasicGateway);

	    function InclusiveGateway() {
	        _classCallCheck(this, InclusiveGateway);

	        return _possibleConstructorReturn(this, (InclusiveGateway.__proto__ || Object.getPrototypeOf(InclusiveGateway)).apply(this, arguments));
	    }

	    _createClass(InclusiveGateway, [{
	        key: '_renderIcon',
	        value: function _renderIcon() {
	            var _state = this.state,
	                radius = _state.radius,
	                iconLineWidth = _state.iconLineWidth,
	                padding = _state.padding;

	            var nRadius = radius / 2;
	            return _react2.default.createElement(_reactKonva.Circle, { x: radius, y: radius, radius: nRadius, strokeWidth: iconLineWidth, stroke: '#000' });
	        }
	    }]);

	    return InclusiveGateway;
	}(_BasicGateway3.default), _class.defaultProps = {
	    x: 30,
	    y: 30,
	    radius: 30,
	    padding: 12,
	    iconLineWidth: 4
	}, _temp);
	exports.default = InclusiveGateway;

/***/ },

/***/ 208:
/*!*****************************************!*\
  !*** ./src/gateways/ComplexGateway.jsx ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _temp;

	var _react = __webpack_require__(/*! react */ 1);

	var _react2 = _interopRequireDefault(_react);

	var _reactKonva = __webpack_require__(/*! react-konva */ 180);

	var _BasicGateway2 = __webpack_require__(/*! ./BasicGateway */ 205);

	var _BasicGateway3 = _interopRequireDefault(_BasicGateway2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ComplexGateway = (_temp = _class = function (_BasicGateway) {
	    _inherits(ComplexGateway, _BasicGateway);

	    function ComplexGateway() {
	        _classCallCheck(this, ComplexGateway);

	        return _possibleConstructorReturn(this, (ComplexGateway.__proto__ || Object.getPrototypeOf(ComplexGateway)).apply(this, arguments));
	    }

	    _createClass(ComplexGateway, [{
	        key: '_renderIcon',
	        value: function _renderIcon() {
	            var _state = this.state,
	                radius = _state.radius,
	                iconLineWidth = _state.iconLineWidth,
	                padding = _state.padding;

	            var xMin = void 0,
	                yMin = void 0,
	                xMax = void 0,
	                yMax = void 0,
	                max = void 0;
	            xMin = yMin = radius / 2 + Math.sqrt(padding);
	            xMax = yMax = radius * 1.5 - Math.sqrt(padding);
	            max = radius * 2 - padding;
	            var verticalLinePoints = [padding, radius, max, radius];
	            var horizontalLinePoints = [radius, padding, radius, max];
	            var leftLinePoints = [xMin, yMin, xMax, yMax];
	            var rightLinePoints = [xMax, yMin, xMin, yMax];
	            return _react2.default.createElement(
	                _reactKonva.Group,
	                null,
	                _react2.default.createElement(_reactKonva.Line, { points: horizontalLinePoints, stroke: '#000', strokeWidth: iconLineWidth }),
	                _react2.default.createElement(_reactKonva.Line, { points: verticalLinePoints, stroke: '#000', strokeWidth: iconLineWidth }),
	                _react2.default.createElement(_reactKonva.Line, { points: leftLinePoints, stroke: '#000', strokeWidth: iconLineWidth }),
	                _react2.default.createElement(_reactKonva.Line, { points: rightLinePoints, stroke: '#000', strokeWidth: iconLineWidth })
	            );
	        }
	    }]);

	    return ComplexGateway;
	}(_BasicGateway3.default), _class.defaultProps = {
	    x: 30,
	    y: 30,
	    radius: 30,
	    padding: 12,
	    iconLineWidth: 4
	}, _temp);
	exports.default = ComplexGateway;

/***/ },

/***/ 209:
/*!********************************************!*\
  !*** ./src/connectors/SimpleConnector.jsx ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;

	var _class, _temp;

	var _react = __webpack_require__(/*! react */ 1);

	var _react2 = _interopRequireDefault(_react);

	var _BasicConnector2 = __webpack_require__(/*! ./BasicConnector */ 210);

	var _BasicConnector3 = _interopRequireDefault(_BasicConnector2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SimpleConnector = (_temp = _class = function (_BasicConnector) {
	    _inherits(SimpleConnector, _BasicConnector);

	    function SimpleConnector() {
	        _classCallCheck(this, SimpleConnector);

	        return _possibleConstructorReturn(this, (SimpleConnector.__proto__ || Object.getPrototypeOf(SimpleConnector)).apply(this, arguments));
	    }

	    return SimpleConnector;
	}(_BasicConnector3.default), _class.defaultProps = {
	    x: 30,
	    y: 30,
	    borderWidth: 2,
	    borderColor: '#000',
	    backgroundColor: '#000',
	    pointerWidth: 8,
	    pointerLength: 8,
	    tension: 3,
	    endPoints: [0, 0]
	}, _temp);
	exports.default = SimpleConnector;

/***/ },

/***/ 210:
/*!*******************************************!*\
  !*** ./src/connectors/BasicConnector.jsx ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dec, _class;

	var _react = __webpack_require__(/*! react */ 1);

	var _react2 = _interopRequireDefault(_react);

	var _reactKonva = __webpack_require__(/*! react-konva */ 180);

	var _BasicElement2 = __webpack_require__(/*! commons/BasicElement */ 192);

	var _BasicElement3 = _interopRequireDefault(_BasicElement2);

	var _LineUtil = __webpack_require__(/*! utils/LineUtil */ 211);

	var _HoverMixin = __webpack_require__(/*! mixins/HoverMixin */ 195);

	var _HoverMixin2 = _interopRequireDefault(_HoverMixin);

	var _DragMixin = __webpack_require__(/*! mixins/DragMixin */ 196);

	var _DragMixin2 = _interopRequireDefault(_DragMixin);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var BasicConnector = (_dec = mixin(_HoverMixin2.default, _DragMixin2.default), _dec(_class = function (_BasicElement) {
	    _inherits(BasicConnector, _BasicElement);

	    function BasicConnector() {
	        _classCallCheck(this, BasicConnector);

	        return _possibleConstructorReturn(this, (BasicConnector.__proto__ || Object.getPrototypeOf(BasicConnector)).apply(this, arguments));
	    }

	    _createClass(BasicConnector, [{
	        key: '_getArrowProps',
	        value: function _getArrowProps() {
	            var _state = this.state,
	                pointerLength = _state.pointerLength,
	                pointerWidth = _state.pointerWidth,
	                borderWidth = _state.borderWidth,
	                borderColor = _state.borderColor,
	                backgroundColor = _state.backgroundColor;

	            return { pointerLength: pointerLength, pointerWidth: pointerWidth, fill: backgroundColor, stroke: borderColor, strokeWidth: borderWidth };
	        }
	        /**
	         * 计算初始坐标
	         */

	    }, {
	        key: '_calcLineAxis',
	        value: function _calcLineAxis(element, position, shouldArray) {
	            var _element$props = element.props,
	                x = _element$props.x,
	                y = _element$props.y,
	                width = _element$props.width,
	                height = _element$props.height;

	            var axis = {};
	            switch (position) {
	                case 'north':
	                    axis.x = x + width / 2;
	                    axis.y = y;
	                    break;
	                case 'east':
	                    axis.x = x + width;
	                    axis.y = y + height / 2;
	                    break;
	                case 'south':
	                    axis.x = x + width / 2;
	                    axis.y = y + height;
	                    break;
	                case 'west':
	                    axis.x = x;
	                    axis.y = y + height / 2;
	                    break;
	            }
	            return shouldArray && [axis.x, axis.y] || axis;
	        }
	    }, {
	        key: '_onUpdate',
	        value: function _onUpdate(data) {
	            var key = data.props.uniqKey;
	            if (this.state.info.source[0] == key) {
	                this.state.source = data;
	            } else {
	                this.state.target = data;
	            }
	            this.forceUpdate();
	        }
	    }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            this._dragEvents = this._getDragEvents();
	            this._hoverEvents = this._getHoverEvents();
	            // 连接线宽度
	            this.state.borderWidth = this.props.borderWidth;
	            // 箭头长度
	            this.state.pointerLength = this.props.pointerLength;
	            // 箭头宽度
	            this.state.pointerWidth = this.props.pointerWidth;
	            // 源对象
	            this.state.source = this.props.source;
	            // 源对象point位置
	            this.state.sourcePoint = this.props.sourcePoint;
	            // 目标对象
	            this.state.target = this.props.target;
	            // 目标对象point位置
	            this.state.targetPoint = this.props.targetPoint;
	            // 链接信息
	            this.state.info = this.props.info;
	            // 更新事件KEY
	            this.state.updateEventKey = 'connector.update.' + this.state.uniqKey;
	            this.addEventListener(this.state.updateEventKey, this._onUpdate.bind(this));
	        }
	    }, {
	        key: 'shouldComponentUpdate',
	        value: function shouldComponentUpdate(state, props) {
	            return this.state != state;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _state2 = this.state,
	                source = _state2.source,
	                sourcePoint = _state2.sourcePoint,
	                target = _state2.target,
	                targetPoint = _state2.targetPoint;

	            var props = this._getArrowProps();
	            // 开始坐标
	            var startAxis = this._calcLineAxis(source, sourcePoint, true);
	            // 结束坐标
	            var endAxis = this._calcLineAxis(target, targetPoint, true);
	            // 绘制坐标点
	            var points = (0, _LineUtil.createLinePoints)(startAxis, source, sourcePoint)(endAxis, target, targetPoint)();
	            return _react2.default.createElement(_reactKonva.Arrow, _extends({ x: '0', y: '0', points: points }, props));
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            this.removeEventListener(this.state.updateEventKey);
	        }
	    }]);

	    return BasicConnector;
	}(_BasicElement3.default)) || _class);
	exports.default = BasicConnector;

/***/ },

/***/ 211:
/*!*******************************!*\
  !*** ./src/utils/LineUtil.js ***!
  \*******************************/
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.createLinePoints = createLinePoints;
	var MIN_PADDING = 50;
	var DIRECTION_NORTH = 'north';
	var DIRECTION_SOUTH = 'south';
	var DIRECTION_EAST = 'east';
	var DIRECTION_WEST = 'west';
	var DIRECTION_SOUTHEAST = 'southeast';
	var DIRECTION_NORTHEAST = 'northeast';
	var DIRECTION_SOUTHWEST = 'southwest';
	var DIRECTION_NORTHWEST = 'northwest';
	/**
	 * 计算结束点相对于开始点的方位
	 */
	function calcPostion(sx, sy, ex, ey) {
	    var direction = '';
	    // 正东
	    if (sx < ex && sy == ey) {
	        direction = DIRECTION_EAST;
	    }
	    // 正西
	    if (sx > ex && sy == ey) {
	        direction = DIRECTION_WEST;
	    }
	    // 正南
	    if (sx == ex && sy < ey) {
	        direction = DIRECTION_SOUTH;
	    }
	    // 正北
	    if (sx == ex && sy > ey) {
	        direction = DIRECTION_NORTH;
	    }
	    // 东南
	    if (sx < ex && sy < ey) {
	        direction = DIRECTION_SOUTHEAST;
	    }
	    // 东北
	    if (sx < ex && sy > ey) {
	        direction = DIRECTION_NORTHEAST;
	    }
	    // 西南
	    if (sx > ex && sy < ey) {
	        direction = DIRECTION_SOUTHWEST;
	    }
	    // 西北
	    if (sx > ex && sy > ey) {
	        direction = DIRECTION_NORTHWEST;
	    }
	    return direction;
	}
	/**
	 * 根据方位和连接对象计算偏移量
	 */
	function calcOffset(startElement, endElement, position) {
	    var offset = 0;
	    switch (position) {
	        case DIRECTION_NORTH:
	            break;
	        case DIRECTION_SOUTH:
	            break;
	        case DIRECTION_EAST:
	            break;
	        case DIRECTION_WEST:
	            break;
	        case DIRECTION_SOUTHEAST:
	            break;
	        case DIRECTION_NORTHEAST:
	            break;
	        case DIRECTION_SOUTHWEST:
	            break;
	        case DIRECTION_NORTHWEST:
	            break;
	    }
	    return offset;
	}
	/*从上面开始*/
	function createLinePointsFromNorthToNorth(sx, sy, ex, ey, position, offset) {
	    var tmp = [];
	    switch (position) {
	        case DIRECTION_EAST:
	        case DIRECTION_WEST:
	        case DIRECTION_SOUTHEAST:
	        case DIRECTION_SOUTHWEST:
	            tmp = tmp.concat([sx, sy - MIN_PADDING]);
	            tmp = tmp.concat([ex, sy - MIN_PADDING]);
	            break;
	        case DIRECTION_NORTH:
	        case DIRECTION_SOUTH:
	        case DIRECTION_NORTHEAST:
	        case DIRECTION_NORTHWEST:
	            tmp = tmp.concat([sx, ey - MIN_PADDING]);
	            tmp = tmp.concat([ex, ey - MIN_PADDING]);
	            break;
	    }
	    return [sx, sy].concat(tmp).concat([ex, ey]);
	}
	function createLinePointsFromNorthToEast(sx, sy, ex, ey, position, offset) {
	    var tmp = [];
	    var createBottomPoints = function createBottomPoints() {
	        tmp = tmp.concat([sx, sy - MIN_PADDING]);
	        tmp = tmp.concat([ex + MIN_PADDING, sy - MIN_PADDING]);
	        tmp = tmp.concat([ex + MIN_PADDING, ey]);
	    };
	    var createRightPoints = function createRightPoints() {
	        tmp = tmp.concat([sx, sy - MIN_PADDING]);
	        tmp = tmp.concat([ex + MIN_PADDING, sy - MIN_PADDING]);
	        tmp = tmp.concat([ex + MIN_PADDING, ey]);
	    };
	    switch (position) {
	        case DIRECTION_EAST:
	        case DIRECTION_WEST:
	        case DIRECTION_SOUTH:
	        case DIRECTION_SOUTHEAST:
	        case DIRECTION_SOUTHWEST:
	            createBottomPoints();
	            break;
	        case DIRECTION_NORTH:
	        case DIRECTION_NORTHEAST:
	            createRightPoints();
	            break;
	        case DIRECTION_NORTHWEST:
	            if (sy - ey < MIN_PADDING) {
	                createBottomPoints();
	            } else if (sx - ex < MIN_PADDING) {
	                createRightPoints();
	            } else {
	                tmp = tmp.concat([sx, ey]);
	            }
	            break;
	    }
	    return [sx, sy].concat(tmp).concat([ex, ey]);
	}
	function createLinePointsFromNorthToSouth(sx, sy, ex, ey, position, offset) {
	    var tmp = [];
	    var createBottomPoints = function createBottomPoints() {
	        tmp = tmp.concat([sx, sy - MIN_PADDING]);
	        tmp = tmp.concat([sx + (ex - sx) / 2, sy - MIN_PADDING]);
	        tmp = tmp.concat([sx + (ex - sx) / 2, ey + MIN_PADDING]);
	        tmp = tmp.concat([ex, ey + MIN_PADDING]);
	    };
	    switch (position) {
	        case DIRECTION_EAST:
	        case DIRECTION_WEST:
	        case DIRECTION_NORTH:
	        case DIRECTION_SOUTH:
	        case DIRECTION_SOUTHEAST:
	        case DIRECTION_SOUTHWEST:
	            createBottomPoints();
	            break;
	        case DIRECTION_NORTHEAST:
	        case DIRECTION_NORTHWEST:
	            if (sy - ey >= MIN_PADDING) {
	                tmp = tmp.concat([sx, sy - (sy - ey) / 2]);
	                tmp = tmp.concat([ex, sy - (sy - ey) / 2]);
	            } else {
	                createBottomPoints();
	            }
	            break;
	    }
	    return [sx, sy].concat(tmp).concat([ex, ey]);
	}
	function createLinePointsFromNorthToWest(sx, sy, ex, ey, position, offset) {
	    var tmp = [];
	    var createBottomPoints = function createBottomPoints() {
	        tmp = tmp.concat([sx, sy - MIN_PADDING]);
	        tmp = tmp.concat([ex - MIN_PADDING, sy - MIN_PADDING]);
	        tmp = tmp.concat([ex - MIN_PADDING, ey]);
	    };
	    var createLeftPoints = function createLeftPoints() {
	        tmp = tmp.concat([sx, sy - MIN_PADDING]);
	        tmp = tmp.concat([ex - MIN_PADDING, sy - MIN_PADDING]);
	        tmp = tmp.concat([ex - MIN_PADDING, ey]);
	    };
	    switch (position) {
	        case DIRECTION_EAST:
	        case DIRECTION_WEST:
	        case DIRECTION_SOUTH:
	        case DIRECTION_SOUTHEAST:
	        case DIRECTION_SOUTHWEST:
	            createBottomPoints();
	            break;
	        case DIRECTION_NORTH:
	        case DIRECTION_NORTHEAST:
	            if (sy - ey < MIN_PADDING) {
	                createBottomPoints();
	            } else if (ex - sx < MIN_PADDING) {
	                createLeftPoints();
	            } else {
	                tmp = tmp.concat([sx, ey]);
	            }
	            break;
	        case DIRECTION_NORTHWEST:
	            createLeftPoints();
	            break;
	    }
	    return [sx, sy].concat(tmp).concat([ex, ey]);
	}
	/*从右面开始*/
	function createLinePointsFromEastToNorth(sx, sy, ex, ey, position, offset) {
	    var tmp = [];
	    var createTopPoints = function createTopPoints() {
	        tmp = tmp.concat([sx + (ex - sx) / 2, sy]);
	        tmp = tmp.concat([sx + (ex - sx) / 2, ey - MIN_PADDING]);
	        tmp = tmp.concat([ex, ey - MIN_PADDING]);
	    };
	    var createRightPoints = function createRightPoints() {
	        tmp = tmp.concat([sx + MIN_PADDING, sy]);
	        tmp = tmp.concat([sx + MIN_PADDING, ey - MIN_PADDING]);
	        tmp = tmp.concat([ex, ey - MIN_PADDING]);
	    };
	    switch (position) {
	        case DIRECTION_NORTH:
	        case DIRECTION_NORTHEAST:
	            if (ex - sx <= 2 * MIN_PADDING) {
	                createRightPoints();
	            } else {
	                createTopPoints();
	            }
	            break;
	        case DIRECTION_SOUTH:
	        case DIRECTION_WEST:
	        case DIRECTION_SOUTHWEST:
	        case DIRECTION_NORTHWEST:
	            createRightPoints();
	            break;
	        case DIRECTION_EAST:
	        case DIRECTION_SOUTHEAST:
	            if (ex - sx <= MIN_PADDING) {
	                createRightPoints();
	            } else if (ey - sy <= MIN_PADDING) {
	                createTopPoints();
	            } else {
	                tmp = tmp.concat([ex, sy]);
	            }
	            break;
	    }
	    return [sx, sy].concat(tmp).concat([ex, ey]);
	}
	function createLinePointsFromEastToEast(sx, sy, ex, ey, position, offset) {
	    var tmp = [];
	    switch (position) {
	        case DIRECTION_NORTH:
	        case DIRECTION_EAST:
	        case DIRECTION_SOUTH:
	        case DIRECTION_SOUTHEAST:
	        case DIRECTION_NORTHEAST:
	            tmp = tmp.concat([ex + MIN_PADDING, sy]);
	            tmp = tmp.concat([ex + MIN_PADDING, ey]);
	            break;
	        case DIRECTION_WEST:
	        case DIRECTION_SOUTHWEST:
	        case DIRECTION_NORTHWEST:
	            tmp = tmp.concat([sx + MIN_PADDING, sy]);
	            tmp = tmp.concat([sx + MIN_PADDING, ey]);
	            break;
	    }
	    return [sx, sy].concat(tmp).concat([ex, ey]);
	}
	function createLinePointsFromEastToSouth(sx, sy, ex, ey, position, offset) {
	    var tmp = [];
	    var createRightPoints = function createRightPoints() {
	        tmp = tmp.concat([sx + MIN_PADDING, sy]);
	        tmp = tmp.concat([sx + MIN_PADDING, ey + MIN_PADDING]);
	        tmp = tmp.concat([ex, ey + MIN_PADDING]);
	    };
	    var createBottomPoints = function createBottomPoints() {
	        tmp = tmp.concat([sx + (ex - sx) / 2, sy]);
	        tmp = tmp.concat([sx + (ex - sx) / 2, ey + MIN_PADDING]);
	        tmp = tmp.concat([ex, ey + MIN_PADDING]);
	    };
	    switch (position) {
	        case DIRECTION_NORTH:
	        case DIRECTION_EAST:
	        case DIRECTION_NORTHEAST:
	            if (sy - ey < MIN_PADDING) {
	                createBottomPoints();
	            } else if (ex - sx < MIN_PADDING) {
	                createRightPoints();
	            } else {
	                tmp = tmp.concat([ex, sy]);
	            }
	            break;
	        case DIRECTION_SOUTH:
	        case DIRECTION_SOUTHEAST:
	            if (ex - sx < 2 * MIN_PADDING) {
	                createRightPoints();
	            } else {
	                createBottomPoints();
	            }
	            break;
	        case DIRECTION_WEST:
	        case DIRECTION_SOUTHWEST:
	        case DIRECTION_NORTHWEST:
	            createRightPoints();
	            break;
	    }
	    return [sx, sy].concat(tmp).concat([ex, ey]);
	}
	function createLinePointsFromEastToWest(sx, sy, ex, ey, position, offset) {
	    var tmp = [];
	    var createRightPoints = function createRightPoints() {
	        tmp = tmp.concat([sx + MIN_PADDING, sy]);
	        tmp = tmp.concat([sx + MIN_PADDING, sy + (ey - sy) / 2]);
	        tmp = tmp.concat([ex - MIN_PADDING, sy + (ey - sy) / 2]);
	        tmp = tmp.concat([ex - MIN_PADDING, ey]);
	    };
	    switch (position) {
	        case DIRECTION_NORTH:
	        case DIRECTION_EAST:
	        case DIRECTION_SOUTH:
	        case DIRECTION_NORTHEAST:
	        case DIRECTION_SOUTHEAST:
	            if (ex - sx < 2 * MIN_PADDING) {
	                createRightPoints();
	            } else {
	                tmp = tmp.concat([sx + (ex - sx) / 2, sy]);
	                tmp = tmp.concat([sx + (ex - sx) / 2, ey]);
	            }
	            break;
	        case DIRECTION_WEST:
	        case DIRECTION_SOUTHWEST:
	        case DIRECTION_NORTHWEST:
	            createRightPoints();
	            break;
	    }
	    return [sx, sy].concat(tmp).concat([ex, ey]);
	}
	/*从下面开始*/
	function createLinePointsFromSouthToNorth(sx, sy, ex, ey, position, offset) {}
	function createLinePointsFromSouthToEast(sx, sy, ex, ey, position, offset) {}
	function createLinePointsFromSouthToSouth(sx, sy, ex, ey, position, offset) {}
	function createLinePointsFromSouthToWest(sx, sy, ex, ey, position, offset) {}
	/*从左面开始*/
	function createLinePointsFromWestToNorth(sx, sy, ex, ey, position, offset) {}
	function createLinePointsFromWestToEast(sx, sy, ex, ey, position, offset) {}
	function createLinePointsFromWestToSouth(sx, sy, ex, ey, position, offset) {}
	function createLinePointsFromWestToWest(sx, sy, ex, ey, position, offset) {}
	function createExecuteFunc(direction) {
	    var func = null;
	    switch (direction) {
	        case 'n2n':
	            func = createLinePointsFromNorthToNorth;
	            break;
	        case 'n2e':
	            func = createLinePointsFromNorthToEast;
	            break;
	        case 'n2s':
	            func = createLinePointsFromNorthToSouth;
	            break;
	        case 'n2w':
	            func = createLinePointsFromNorthToWest;
	            break;
	        case 'e2n':
	            func = createLinePointsFromEastToNorth;
	            break;
	        case 'e2e':
	            func = createLinePointsFromEastToEast;
	            break;
	        case 'e2s':
	            func = createLinePointsFromEastToSouth;
	            break;
	        case 'e2w':
	            func = createLinePointsFromEastToWest;
	            break;
	        case 's2n':
	            func = createLinePointsFromSouthToNorth;
	            break;
	        case 's2e':
	            func = createLinePointsFromSouthToEast;
	            break;
	        case 's2s':
	            func = createLinePointsFromSouthToSouth;
	            break;
	        case 's2w':
	            func = createLinePointsFromSouthToWest;
	            break;
	        case 'w2n':
	            func = createLinePointsFromWestToNorth;
	            break;
	        case 'w2e':
	            func = createLinePointsFromWestToEast;
	            break;
	        case 'w2s':
	            func = createLinePointsFromWestToSouth;
	            break;
	        case 'w2w':
	            func = createLinePointsFromWestToWest;
	            break;
	    }
	    return func;
	}
	/**
	 * 创建连接线坐标点
	 * @param  {[type]} startAxis    [description]
	 * @param  {[type]} startElement [description]
	 * @param  {[type]} startPoint   [description]
	 * @return {[type]}              [description]
	 */
	function createLinePoints(startAxis, startElement, startPoint) {
	    return function (endAxis, endElement, endPoint) {
	        var type = startPoint.substr(0, 1) + '2' + endPoint.substr(0, 1);
	        return function () {
	            var sx = startAxis[0];
	            var sy = startAxis[1];
	            var ex = endAxis[0];
	            var ey = endAxis[1];
	            var position = calcPostion(sx, sy, ex, ey);
	            var offset = calcOffset(startElement, endElement, position);
	            return createExecuteFunc(type)(sx, sy, ex, ey, position, offset);
	        };
	    };
	}

/***/ }

});