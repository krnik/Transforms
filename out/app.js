/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DOM3D = function () {
    function DOM3D(elem) {
        _classCallCheck(this, DOM3D);

        this.DOM = typeof elem === 'string' ? document.createElement(elem) : elem;
    }
    // Get first element matching passed query


    _createClass(DOM3D, [{
        key: 'getEl',
        value: function getEl(query) {
            return document.querySelector(query);
        }
        // Get all elements matching passed query

    }, {
        key: 'getEls',
        value: function getEls(query) {
            return [].concat(_toConsumableArray(document.querySelectorAll(query)));
        }
        // Set property of DOM

    }, {
        key: 'set',
        value: function set(prop, val) {
            this.DOM[prop] = val;
        }
        // Append ChildNode

    }, {
        key: 'append',
        value: function append(node) {
            if (node.DOM) return this.DOM.appendChild(node.DOM);else this.DOM.appendChild(node);
        }
    }]);

    return DOM3D;
}();

exports.default = DOM3D;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _scene = __webpack_require__(6);

var _scene2 = _interopRequireDefault(_scene);

var _freeCam = __webpack_require__(5);

var _freeCam2 = _interopRequireDefault(_freeCam);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener('DOMContentLoaded', function () {
    var pagesInitial = [{ // Page 1
        rX: 20,
        rY: 0,
        rZ: 0,
        tX: 50,
        tY: 143,
        tZ: 1220
    }, { // Page 2
        rX: 0,
        rY: 50,
        rZ: 0,
        tX: 2000,
        tY: -500,
        tZ: -660
    }, { // Page 3
        rX: 0,
        rY: 0,
        rZ: 120,
        tX: 450,
        tY: 1110,
        tZ: 10
    }, { // Page 4
        rX: 0,
        rY: 0,
        rZ: 0,
        tX: 0,
        tY: 1500,
        tZ: -2400
    }];

    var x = new _scene2.default('.page', '#view');
    x.initPositionForPages(pagesInitial);
    console.log(x);
    window.freeCam = new _freeCam2.default('#container', 'body');
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _DOM3D2 = __webpack_require__(0);

var _DOM3D3 = _interopRequireDefault(_DOM3D2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Page = function (_DOM3D) {
    _inherits(Page, _DOM3D);

    function Page(elem) {
        _classCallCheck(this, Page);

        var _this = _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).call(this, elem));

        _this.false = true;
        _this.rotate = null;
        _this.translate = null;
        return _this;
    }
    // Set values for rotation and translate from object.


    _createClass(Page, [{
        key: 'setValues',
        value: function setValues(valObj) {
            this.rotate = {
                x: valObj.rX || 0,
                y: valObj.rY || 0,
                z: valObj.rZ || 0
            };
            this.translate = {
                x: valObj.tX || 0,
                y: valObj.tY || 0,
                z: valObj.tZ || 0
            };
            this.update();
        }
        // Update transform for DOM element

    }, {
        key: 'update',
        value: function update() {
            var translate = this.translate.x + 'px, ' + this.translate.y + 'px, ' + this.translate.z + 'px';
            var transform = 'translate3d(' + translate + ') rotateX(' + this.rotate.x + 'deg) rotateY(' + this.rotate.y + 'deg) rotateZ(' + this.rotate.z + 'deg)';
            this.DOM.style.transform = transform;
        }
    }]);

    return Page;
}(_DOM3D3.default);

exports.default = Page;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _DOM3D2 = __webpack_require__(0);

var _DOM3D3 = _interopRequireDefault(_DOM3D2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Perspective = function (_DOM3D) {
    _inherits(Perspective, _DOM3D);

    function Perspective(elem, autoSet) {
        _classCallCheck(this, Perspective);

        var _this = _possibleConstructorReturn(this, (Perspective.__proto__ || Object.getPrototypeOf(Perspective)).call(this, elem));

        _this.vw = null;
        _this.vh = null;
        _this.autoUpdatingStyles = {};
        _this.rotate = {
            x: 0,
            y: 0,
            z: 0
        };
        _this.translate = {
            x: 0,
            y: 0,
            z: 0
        };
        _this.init(autoSet);
        return _this;
    }

    _createClass(Perspective, [{
        key: 'init',
        value: function init(autoSet) {
            if (autoSet) {
                this.setAutoUpdating('width', 'vw');
                this.setAutoUpdating('height', 'vh');
            }
            this.updateDimensions();
        }
    }, {
        key: 'updateDimensions',
        value: function updateDimensions(dim) {
            if ((typeof dim === 'undefined' ? 'undefined' : _typeof(dim)) === 'object') {
                this.vw = dim.vw;
                this.vh = dim.vh;
            } else {
                this.vw = window.innerWidth;
                this.vh = window.innerHeight;
            }
            this.setElemSize();
        }
    }, {
        key: 'setElemSize',
        value: function setElemSize() {
            for (var i in this.autoUpdatingStyles) {
                var multi = this.autoUpdatingStyles[i][1];
                if (i === 'transform') {
                    this.DOM.style[i] = 'translate3d(' + this.vw * multi + 'px, ' + this.vh * multi + 'px, 0px)';
                    return;
                }
                if (i === 'perspectiveOrigin') {
                    this.DOM.style[i] = this.vw * multi + 'px ' + this.vh * multi + 'px';
                    return;
                }
                var ax = this.autoUpdatingStyles[i][0];
                var val = this[ax] * multi;
                this.DOM.style[i] = val + 'px';
            }
        }
    }, {
        key: 'setAutoUpdating',
        value: function setAutoUpdating(prop, axis, multiplier) {
            if (this.autoUpdatingStyles[prop]) console.info('Nadpiszesz wartość');
            this.autoUpdatingStyles[prop] = [axis, multiplier ? multiplier : 1];
            this.setElemSize();
        }
    }, {
        key: 'set3D',
        value: function set3D(val) {
            if ((typeof val === 'undefined' ? 'undefined' : _typeof(val)) !== 'object') return;
            console.log(val);
            this.rotate = {
                x: val.rX || 0,
                y: val.rY || 0,
                z: val.rZ || 0
            };
            this.translate = {
                x: val.tX || 0,
                y: val.tY || 0,
                z: val.tZ || 0
            };
            this.set3DStyles();
        }
    }, {
        key: 'set3DStyles',
        value: function set3DStyles() {
            var transStr = this.translate.x + 'px, ' + this.translate.y + 'px, ' + this.translate.z + 'px';
            var rotateStr = 'rotateX(' + this.rotate.x + 'deg) rotateY(' + this.rotate.y + 'deg) rotateZ(' + this.rotate.z + 'deg)';
            this.DOM.style.transform = rotateStr + ' translate3d(' + transStr + ')';
        }
    }]);

    return Perspective;
}(_DOM3D3.default);

exports.default = Perspective;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FreeCam = function () {
    function FreeCam(targetQuery, viewQuery) {
        _classCallCheck(this, FreeCam);

        this.target = document.querySelector(targetQuery);
        this.view = document.querySelector(viewQuery);
        //Rotate values
        this.rotateX = 0;
        this.rotateY = 0;
        this.rotateZ = 0;
        // Current deg of rotate
        this.prevRotX = this.getRotateValues('X');
        this.prevRotY = this.getRotateValues('Y');
        this.prevRotZ = this.getRotateValues('Z');
        //Translates
        var translation = this.getTranslate3dValues();
        this.translateX = translation[0];
        this.translateY = translation[1];
        this.translateZ = translation[2];
        //Point of mousedown event
        this.mouseStartX = 0;
        this.mouseStartY = 0;
        this.init();
    }

    _createClass(FreeCam, [{
        key: 'getTranslate3dValues',
        value: function getTranslate3dValues() {
            var style = this.target.style.transform;
            if (!style) return [0, 0, 0];
            return style.match(/(-?\d+)px/g).map(function (e) {
                return parseInt(e);
            });
        }
    }, {
        key: 'getRotateValues',
        value: function getRotateValues(axis) {
            var regExpStr = axis + '\\((-?\\d+)deg';
            var val = this.target.style.transform.match(new RegExp(regExpStr));
            return parseInt(val[1]);
        }
    }, {
        key: 'init',
        value: function init() {
            var _this = this;

            var addMouseTrack = function addMouseTrack(event) {
                _this.transform(event);
            };
            this.view.addEventListener('mousedown', function (event) {
                _this.mouseStartX = event.offsetX;
                _this.mouseStartY = event.offsetY;
                _this.view.addEventListener('mousemove', addMouseTrack);
            });
            this.view.addEventListener('mouseup', function () {
                _this.prevRotX = _this.prevRotX + _this.rotateX;
                _this.prevRotY = _this.prevRotY + _this.rotateY;
                _this.view.removeEventListener('mousemove', addMouseTrack);
            });
        }
    }, {
        key: 'transform',
        value: function transform(event) {
            this.rotateY = (event.offsetX - this.mouseStartX) / 24;
            this.rotateX = (event.offsetY - this.mouseStartY) / 24;
            var translate = this.translateX + 'px, ' + this.translateY + 'px, ' + this.translateZ + 'px';
            this.target.style.transform = 'rotateX(' + (this.rotateX + this.prevRotX) + 'deg) rotateY(' + (this.rotateY + this.prevRotY) + 'deg) rotateZ(0deg) translate3d(' + translate + ')';
        }
    }]);

    return FreeCam;
}();

exports.default = FreeCam;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _DOM3D2 = __webpack_require__(0);

var _DOM3D3 = _interopRequireDefault(_DOM3D2);

var _Page = __webpack_require__(3);

var _Page2 = _interopRequireDefault(_Page);

var _Perspective = __webpack_require__(4);

var _Perspective2 = _interopRequireDefault(_Perspective);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Scene = function (_DOM3D) {
    _inherits(Scene, _DOM3D);

    function Scene(pagesQuery, viewQuery) {
        _classCallCheck(this, Scene);

        // Array of pages DOM elements
        var _this = _possibleConstructorReturn(this, (Scene.__proto__ || Object.getPrototypeOf(Scene)).call(this));

        _this.pages = _this.getEls(pagesQuery).map(function (e) {
            return new _Page2.default(e);
        });
        // Pages Container
        _this.container = new _Perspective2.default(_this.getEl(pagesQuery).parentElement);
        // Topmost wrapper of HTML content in body
        _this.topMost = new _Perspective2.default(_this.getEl(viewQuery));
        // PerspectiveDiv
        _this.perspDiv = new _Perspective2.default('DIV');
        // Scene element
        _this.scene = new _Perspective2.default('DIV', true);
        // Arrays with values of desirable transforms for pages and container
        _this.targets = [];
        _this.progress = null;
        // Control bar dom element
        _this.nav = new _Page2.default('DIV');
        // Id for timeout function
        _this.timeoutId = null;
        // Append to DOM, remove later when will be possible to adjust starting css of elements
        _this.init();
        return _this;
    }
    // Initialize all functions of object


    _createClass(Scene, [{
        key: 'init',
        value: function init() {
            var _this2 = this;

            // Initial DOM manipulating
            this.scene.set('id', 'scene');
            this.perspDiv.append(this.container);
            this.topMost.append(this.perspDiv);
            this.scene.append(this.topMost);
            this.getEl('body').insertBefore(this.scene.DOM, this.getEl('.loader'));
            // Set basic viewport relative style properties
            this.scene.setAutoUpdating('perspective', 'vh');
            this.scene.setAutoUpdating('perspectiveOrigin', 'vwvh', 0.5);
            this.perspDiv.setAutoUpdating('perspective', 'vh');
            this.perspDiv.setAutoUpdating('perspectiveOrigin', 'vwvh', 0.5);
            this.topMost.setAutoUpdating('transform', 'vwvh', 0.5);
            // Navbar
            this.nav.set('className', 'nav');
            var nav_wrapper = document.createElement('DIV');
            var prev = document.createElement('BUTTON');
            var next = document.createElement('BUTTON');
            nav_wrapper.className = 'nav__wrapper';
            prev.className = 'nav__prev';
            next.className = 'nav__next';
            prev.append('Previous');
            next.append('Next');
            prev.dataset.dir = -1;
            next.dataset.dir = 1;
            nav_wrapper.appendChild(prev);
            nav_wrapper.appendChild(next);
            this.nav.append(nav_wrapper);
            this.getEl('body').appendChild(this.nav.DOM);

            // Add Resize Event Listener
            window.addEventListener('resize', function () {
                clearTimeout(_this2.timeoutId);
                _this2.timeoutId = setTimeout(function () {
                    console.log('HELLO');
                    var vw = window.innerWidth;
                    var vh = window.innerHeight;
                    _this2.container.updateDimensions(vw, vh);
                    _this2.perspDiv.updateDimensions(vw, vh);
                    _this2.topMost.updateDimensions(vw, vh);
                    _this2.scene.updateDimensions(vw, vh);
                }, 250);
            });
            // Add Prev / Next Event Listener
            this.getEl('.nav').addEventListener('click', function (ev) {
                if (ev.target.tagName !== 'BUTTON') return;
                var dir = parseInt(ev.target.dataset.dir);
                var progress = _this2.progress;
                _this2.setProgress(progress + dir);
                _this2.handleNavBtnDisabling();
            });
        }
        // Set Starging positions for pages

    }, {
        key: 'initPositionForPages',
        value: function initPositionForPages(arr) {
            if (arr.length !== this.pages.length) return;
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = arr.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var _step$value = _slicedToArray(_step.value, 2),
                        i = _step$value[0],
                        el = _step$value[1];

                    this.pages[i].setValues(el);
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

            this.setProgress(0);
            this.initTargets(arr);
            this.handleNavBtnDisabling();
        }
    }, {
        key: 'setContainerPosition',
        value: function setContainerPosition(pageNo) {
            var pageRef = this.pages[pageNo];
            var values = {
                rX: pageRef.rotate.x * -1,
                rY: pageRef.rotate.y * -1,
                rZ: pageRef.rotate.z * -1,
                tX: pageRef.translate.x * -1,
                tY: pageRef.translate.y * -1,
                tZ: pageRef.translate.z * -1
            };
            this.container.set3D(values);
        }
    }, {
        key: 'setProgress',
        value: function setProgress(num) {
            if (typeof num !== 'number') return;
            this.progress = num;
            this.setContainerPosition(num);
        }
    }, {
        key: 'initTargets',
        value: function initTargets(arr) {
            this.targets = arr.slice();
        }
    }, {
        key: 'handleNavBtnDisabling',
        value: function handleNavBtnDisabling() {
            [].concat(_toConsumableArray(this.nav.DOM.querySelectorAll('button'))).forEach(function (e) {
                return e.removeAttribute('disabled');
            });
            if (this.progress === 0) {
                this.nav.DOM.querySelector('.nav__prev').setAttribute('disabled', '');
                return;
            }
            if (this.progress + 1 === this.targets.length) {
                this.nav.DOM.querySelector('.nav__next').setAttribute('disabled', '');
                return;
            }
        }
    }]);

    return Scene;
}(_DOM3D3.default);

exports.default = Scene;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(2);


/***/ })
/******/ ]);