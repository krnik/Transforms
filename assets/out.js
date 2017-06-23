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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _scene = __webpack_require__(3);

var _scene2 = _interopRequireDefault(_scene);

var _freeCam = __webpack_require__(2);

var _freeCam2 = _interopRequireDefault(_freeCam);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener('DOMContentLoaded', function () {
    var pagesInitial = [{ // Page 1
        rX: 0,
        rY: 0,
        rZ: 0,
        tX: 50,
        tY: 143,
        tZ: -1400
    }, { // Page 2
        rX: 0,
        rY: 0,
        rZ: 0,
        tX: 0,
        tY: -500,
        tZ: 0
    }, { // Page 3
        rX: 0,
        rY: 0,
        rZ: 0,
        tX: 0,
        tY: 0,
        tZ: 0
    }, { // Page 4
        rX: 0,
        rY: 0,
        rZ: 0,
        tX: 0,
        tY: 0,
        tZ: 0
    }];

    var x = new _scene2.default('.page', '#view');
    x.setPositionForPages(pagesInitial);
    console.log(x);
    window.freeCam = new _freeCam2.default('#container', 'body');
});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
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
        //Current deg of rotate
        this.prevRotX = 0;
        this.prevRotY = 0;
        this.prevRotZ = 0;
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
        value: function getTranslate3dValues(axis) {
            var style = this.target.style.transform;
            return style.match(/(-?\d+)px/g).map(function (e) {
                return parseInt(e);
            });
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
            this.rotateX = (event.offsetX - this.mouseStartX) / 24;
            this.rotateY = (event.offsetY - this.mouseStartY) / 24;
            var translate = this.translateX + 'px, ' + this.translateY + 'px, ' + this.translateZ + 'px';
            this.target.style.transform = 'rotateY(' + (this.rotateX + this.prevRotX) + 'deg) rotateX(' + (this.rotateY + this.prevRotY) + 'deg) translate3d(' + translate + ')';
        }
    }]);

    return FreeCam;
}();

exports.default = FreeCam;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _DOM3D2 = __webpack_require__(5);

var _DOM3D3 = _interopRequireDefault(_DOM3D2);

var _Page = __webpack_require__(6);

var _Page2 = _interopRequireDefault(_Page);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Scene = function (_DOM3D) {
    _inherits(Scene, _DOM3D);

    function Scene(pagesQuery, viewQuery) {
        _classCallCheck(this, Scene);

        var _this = _possibleConstructorReturn(this, (Scene.__proto__ || Object.getPrototypeOf(Scene)).call(this));

        _this.DOM = {
            // Array of pages DOM elements
            pages: _this.getEls(pagesQuery).map(function (e) {
                return new _Page2.default(e);
            }),
            // Pages Container
            pagesParent: new _Page2.default(_this.getEl(pagesQuery).parentElement),
            // Topmost wrapper of HTML content in body
            topMost: new _Page2.default(_this.getEl(viewQuery))
        };
        // Scene element
        _this.scene = _this.createScene();
        // Append to DOM, remove later when will be possible to adjust starting css of elements
        _this.init();
        return _this;
    }
    // Create #scene element to wrap page content


    _createClass(Scene, [{
        key: 'createScene',
        value: function createScene() {
            var scene = document.createElement('DIV');
            scene.id = 'scene';
            var vw = window.innerWidth;
            var vh = window.innerHeight;
            scene.style.overflow = 'hidden';
            scene.style.width = vw + 'px';
            scene.style.height = vh + 'px';
            return scene;
        }
    }, {
        key: 'setPositionForPages',

        // Set Starging positions for pages
        value: function setPositionForPages(arr) {
            if (arr.length !== this.DOM.pages.length) {
                console.error('Długość tablicy startowych pozycji musi być taka jak długość tablicy stron!');
                return;
            }
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = arr.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var _step$value = _slicedToArray(_step.value, 2),
                        i = _step$value[0],
                        el = _step$value[1];

                    this.DOM.pages[i].setValues(el);
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

            this.setContainerPosition(0);
        }
    }, {
        key: 'setContainerPosition',
        value: function setContainerPosition(pageNo) {
            var pageRef = this.DOM.pages[pageNo];
            var values = {
                rX: pageRef.rotation.X,
                rY: pageRef.rotation.Y,
                rZ: pageRef.rotation.Z,
                tX: pageRef.translation.X * -1,
                tY: pageRef.translation.Y * -1,
                tZ: pageRef.translation.Z * -1
            };
            this.DOM.pagesParent.setValues(values);
        }
        // Initialize all functions of object

    }, {
        key: 'init',
        value: function init() {
            this.scene.appendChild(this.DOM.topMost.DOM);
            this.getEl('body').insertBefore(this.scene, this.getEl('body').firstElementChild);
            var vw = window.innerWidth;
            var vh = window.innerHeight;
            var top = this.DOM.topMost.DOM;
            top.style.perspective = vh + 'px';
            top.style.perspectiveOrigin = vw / 2 + 'px ' + vh / 2 + 'px';
            top.style.transformOrigin = vw / 2 + 'px ' + vh / 2 + 'px 0px';
        }
    }]);

    return Scene;
}(_DOM3D3.default);

exports.default = Scene;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);
module.exports = __webpack_require__(1);


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DOM3D = function () {
    function DOM3D() {
        _classCallCheck(this, DOM3D);
    }

    _createClass(DOM3D, [{
        key: "getEl",

        // Get first element matching passed query
        value: function getEl(query) {
            return document.querySelector(query);
        }
        // Get all elements matching passed query

    }, {
        key: "getEls",
        value: function getEls(query) {
            return [].concat(_toConsumableArray(document.querySelectorAll(query)));
        }
    }]);

    return DOM3D;
}();

exports.default = DOM3D;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _DOM3D2 = __webpack_require__(5);

var _DOM3D3 = _interopRequireDefault(_DOM3D2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Page = function (_DOM3D) {
    _inherits(Page, _DOM3D);

    function Page(elem) {
        _classCallCheck(this, Page);

        var _this = _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).call(this));

        _this.DOM = elem;
        _this.false = true;
        _this.rotation = null;
        _this.translation = null;
        return _this;
    }
    // Get values of pages if setPositionForPages method wasn't called
    // getValues (elem, prop) {
    //     const base = '\\((\\d+)\\w*\\)';
    //     const x = new RegExp(`${prop}X${base}`);
    //     const y = new RegExp(`${prop}Y${base}`);
    //     const z = new RegExp(`${prop}Z${base}`);
    //     const t = elem.style.transform;
    //     return {
    //         X : x.exec(t) ? parseInt(x.exec(t)[1]) : 0,
    //         Y : y.exec(t) ? parseInt(y.exec(t)[1]) : 0,
    //         Z : z.exec(t) ? parseInt(z.exec(t)[1]) : 0,
    //     };
    // }
    // Set values for rotation and translate from object.


    _createClass(Page, [{
        key: 'setValues',
        value: function setValues(valObj) {
            this.rotation = {
                X: valObj.rX || 0,
                Y: valObj.rY || 0,
                Z: valObj.rZ || 0
            };
            this.translation = {
                X: valObj.tX || 0,
                Y: valObj.tY || 0,
                Z: valObj.tZ || 0
            };
            this.update();
        }
        // Update transform for DOM element

    }, {
        key: 'update',
        value: function update() {
            var translate = this.translation.X + 'px, ' + this.translation.Y + 'px, ' + this.translation.Z + 'px';
            var transform = 'translate3d(' + translate + ') rotateX(' + this.rotation.X + 'deg) rotateY(' + this.rotation.Y + 'deg) rotateZ(' + this.rotation.Z + 'deg)';
            this.DOM.style.transform = transform;
        }
    }]);

    return Page;
}(_DOM3D3.default);

exports.default = Page;

/***/ })
/******/ ]);
