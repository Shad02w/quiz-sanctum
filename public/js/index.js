(self["webpackChunk"] = self["webpackChunk"] || []).push([["/js/index"],{

/***/ "./resources/js/App.tsx":
/*!******************************!*\
  !*** ./resources/js/App.tsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/Navbar */ "./resources/js/components/Navbar.tsx");
/* harmony import */ var _components_Questions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/Questions */ "./resources/js/components/Questions.tsx");
/* harmony import */ var _components_Candidates__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/Candidates */ "./resources/js/components/Candidates.tsx");
/* harmony import */ var _components_Result__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/Result */ "./resources/js/components/Result.tsx");







var App = function App() {
  // const { dark } = useContext(ThemeContext)
  var dark = true;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (dark) document.documentElement.classList.add('dark');else document.documentElement.classList.remove('dark');
  }, [dark]);
  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.HashRouter, null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    id: 'app',
    className: 'antialiased'
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Navbar__WEBPACK_IMPORTED_MODULE_1__.default, null), react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
    className: 'container mx-auto p-4 md:p-3'
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Switch, null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, {
    exact: true,
    path: '/'
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Questions__WEBPACK_IMPORTED_MODULE_2__.default, null)), react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, {
    path: '/candidates'
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Candidates__WEBPACK_IMPORTED_MODULE_3__.default, null)), react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Route, {
    path: '/results'
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Result__WEBPACK_IMPORTED_MODULE_4__.default, null))))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./resources/js/components/Candidates.tsx":
/*!************************************************!*\
  !*** ./resources/js/components/Candidates.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _models_Api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @models/Api */ "./resources/js/models/Api.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/esm/badge.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/table/dist/esm/table.js");
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = undefined && undefined.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};





var Candidates = function Candidates(props) {
  var _a = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      candidates = _a[0],
      setCandidates = _a[1];

  var updateCandidates = function updateCandidates() {
    return __awaiter(void 0, void 0, void 0, function () {
      var res, data, error_1;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            _a.trys.push([0, 2,, 3]);

            return [4
            /*yield*/
            , _models_Api__WEBPACK_IMPORTED_MODULE_0__.backendApiAxios.get('/candidates')];

          case 1:
            res = _a.sent();
            data = res.data;
            setCandidates(data.items);
            return [3
            /*break*/
            , 3];

          case 2:
            error_1 = _a.sent();
            if (error_1.response) console.error(error_1.response.data.title);
            return [3
            /*break*/
            , 3];

          case 3:
            return [2
            /*return*/
            ];
        }
      });
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    updateCandidates();
  }, []);

  var createStateBadge = function createStateBadge(state) {
    if (state.toLowerCase() === 'finished') {
      return react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Badge, {
        colorScheme: 'green'
      }, "Finished");
    } else if (state.toLowerCase() === 'interrupt') {
      return react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Badge, {
        colorScheme: 'red'
      }, "Interrupt");
    } else if (state.toLowerCase() === 'process') {
      return react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Badge, {
        colorScheme: 'purple'
      }, "Interrupt");
    } else return react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Badge, null, state);
  };

  return react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: 'pb-5 max-w-full overflow-x-hidden'
  }, react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: 'text-2xl mb-6'
  }, "Candidates"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: 'p-3 overflow-x-auto'
  }, react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Table, {
    variant: 'unstyled',
    className: 'rounded-md'
  }, react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Thead, null, react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Tr, null, react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Th, null, "Email"), react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Th, null, "State"), react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Th, null, "Date"), react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Th, null, "Actions"))), react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Tbody, null, candidates.map(function (candidate) {
    return react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Tr, {
      key: candidate.id,
      className: 'border-b-2 border-gray-200 dark:border-gray-800'
    }, react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Td, null, candidate.email), react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Td, null, createStateBadge(candidate.state)), react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Td, null, candidate.created_at), react__WEBPACK_IMPORTED_MODULE_1__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Td, null, react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", {
      className: 'btn-red px-2 h-10'
    }, "Delete"))));
  })))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Candidates);

/***/ }),

/***/ "./resources/js/components/Modal.tsx":
/*!*******************************************!*\
  !*** ./resources/js/components/Modal.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
 // style={{ backdropFilter: 'blur(2px)' }}

var Modal = function Modal(props) {
  var show = props.show,
      onClose = props.onClose,
      children = props.children,
      className = props.className;
  return show ? react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    onMouseDown: onClose,
    className: 'fixed z-10 inset-0 overflow-y-auto'
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'flex items-center justify-center min-h-screen bg-opacity-70 bg-gray-800 dark:bg-black dark:bg-opacity-70'
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: className,
    onMouseDown: function onMouseDown(e) {
      return e.stopPropagation();
    }
  }, children))) : react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modal);

/***/ }),

/***/ "./resources/js/components/Navbar.tsx":
/*!********************************************!*\
  !*** ./resources/js/components/Navbar.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _models_Api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @models/Api */ "./resources/js/models/Api.ts");
/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/hi */ "./node_modules/react-icons/hi/index.esm.js");
/* harmony import */ var react_icons_gi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/gi */ "./node_modules/react-icons/gi/index.esm.js");
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/io5 */ "./node_modules/react-icons/io5/index.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = undefined && undefined.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};








var Navbar = function Navbar() {
  var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      username = _a[0],
      setUsername = _a[1];

  var _b = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      expanded = _b[0],
      setExpanded = _b[1];

  var handleLogout = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    return __awaiter(void 0, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , (0,_models_Api__WEBPACK_IMPORTED_MODULE_1__.ApiResquest)('POST', '/logout')];

          case 1:
            _a.sent();

            window.location.replace('http://localhost:8000/login');
            return [2
            /*return*/
            ];
        }
      });
    });
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    (0,_models_Api__WEBPACK_IMPORTED_MODULE_1__.ApiResquest)('GET', '/users/me').then(function (res) {
      if (res && res.type === 'success') {
        setUsername(res.data.items[0].name);
      }
    });
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_0__.createElement("nav", {
    className: 'box-border border-gray-100 bg-white dark:bg-gray-900 border-b sticky top-0 dark:border-b-0 '
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'w-full block  container mx-auto md:flex md:flex-row md:justify-between items-center px-4 lg:px-0 py-6'
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    id: 'navbar-logo-tabs',
    className: 'flex flex-col md:flex-row w-full'
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'flex flex-row justify-between'
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    className: 'flex items-center mr-16 md:pl-2 lg:pl-2',
    href: "/"
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    className: 'w-auto h-6 md:h-10 hidden dark:block',
    src: "../images/digiatdigi-white.svg",
    alt: "logo of company for dark mode"
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    className: 'w-auto h-6 md:h-10 block dark:hidden',
    src: "../images/digiatdigi-logo.svg",
    alt: "logo of company"
  })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: 'text-gray-600 hover:text-gray-800 focus:text-gray-800 ring-gray-600 focus:ring-gray-800\r\n                        dark:text-gray-600 dark:hover:text-white dark:focus:text-white  dark:ring-gray-600 dark:focus:ring-white\r\n                        focus:outline-none block md:hidden cursor-pointer select-none',
    onClick: function onClick() {
      return setExpanded(function (pre) {
        return !pre;
      });
    }
  }, expanded ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_io5__WEBPACK_IMPORTED_MODULE_2__.IoCloseSharp, {
    className: 'fill-current w-6 h-6'
  }) : react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_gi__WEBPACK_IMPORTED_MODULE_3__.GiHamburgerMenu, {
    className: 'fill-current w-6 h-6'
  }))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "block md:w-full mt-6 md:mt-0  md:flex md:flex-row md:justify-between md:items-center " + (expanded ? '' : 'hidden')
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: 'text-base md:text-lg md:flex md:flex-row'
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: 'mb-4 md:mb-0 md:mr-4'
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.NavLink, {
    exact: true,
    className: 'navbar-btn-base',
    activeClassName: 'navbar-btn-active',
    to: '/'
  }, "Questions")), react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: 'mb-4 md:mb-0 md:mr-4'
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.NavLink, {
    className: 'navbar-btn-base',
    activeClassName: 'navbar-btn-active',
    to: '/candidates'
  }, "Candidates")), react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: 'mb-4 md:mb-0 md:mr-4'
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.NavLink, {
    className: 'navbar-btn-base',
    activeClassName: 'navbar-btn-active',
    to: '/results'
  }, "Results"))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", {
    className: 'block md:hidden mt-4 mb-4 border-t-2 border-gray-500 dark:border-gray-700'
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    id: 'navbar-admin',
    className: 'flex flex-row items-center justify-between md:justify-start text-base md:text-lg'
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: 'md:mr-8 px-2 font-bold'
  }, username), react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    onClick: handleLogout,
    className: 'p-3 text-white bg-rose-700 hover:bg-rose-600 cursor-pointer rounded-lg'
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_hi__WEBPACK_IMPORTED_MODULE_5__.HiLogout, {
    className: 'fill-current w-5'
  }))))))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);

/***/ }),

/***/ "./resources/js/components/QuestionCard.tsx":
/*!**************************************************!*\
  !*** ./resources/js/components/QuestionCard.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _models_Api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @models/Api */ "./resources/js/models/Api.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = undefined && undefined.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};






var QuestionCard = function QuestionCard(props) {
  var questions = props.question,
      questionId = props.questionId,
      onEdit = props.onEdit,
      onDelete = props.onDelete;

  var _a = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      options = _a[0],
      setOptions = _a[1];

  var _b = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      answers = _b[0],
      setAnswers = _b[1];

  var handleDelete = function handleDelete() {
    return __awaiter(void 0, void 0, void 0, function () {
      var res;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , (0,_models_Api__WEBPACK_IMPORTED_MODULE_0__.ApiResquest)('DELETE', "/questions/" + questionId)];

          case 1:
            res = _a.sent();
            if (!res || res.type === 'failed') return [2
            /*return*/
            ];
            if (onDelete) onDelete();
            return [2
            /*return*/
            ];
        }
      });
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    (0,_models_Api__WEBPACK_IMPORTED_MODULE_0__.ApiResquest)('GET', "/questions/" + questionId + "/options").then(function (res) {
      if (!res) return;
      if (res.type === 'success') setOptions(res.data.items);else console.error('options failed', res.data);
    });
    (0,_models_Api__WEBPACK_IMPORTED_MODULE_0__.ApiResquest)('GET', "/questions/" + questionId + "/answers").then(function (res) {
      if (!res) return;
      if (res.type === 'success') setAnswers(res.data.items);else console.error('answer failed', res.data);
    });
  }, [questionId]);

  var createOptions = function createOptions(options) {
    return options.length > 0 ? react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
      className: 'grid grid-cols-1 gap-2'
    }, options.map(function (option, index) {
      return react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
        key: index,
        className: 'text-gray-800 dark:text-gray-100 rounded-md flex flex-row items-center'
      }, react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
        className: 'px-3 py-2 rounded-md bg-gray-200 dark:bg-gray-900 mr-1'
      }, option.label), react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
        className: 'p-2'
      }, option.content), answers.some(function (a) {
        return a.option_id === option.id;
      }) ? react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
        className: 'rounded-full flex justify-center items-center bg-rose-700 text-white p-1 ml-auto'
      }, react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__.AiOutlineCheck, {
        className: 'fill-current w-4 h-4'
      })) : react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null));
    })) : react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null);
  };

  return react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: 'w-full p-4 min-h-0 rounded-lg shadow-lg bg-gray-50 dark:bg-gray-800'
  }, answers.length == 0 ? react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: 'h-full flex justify-center items-center text-gray-600 font-bold'
  }, "Loading...") : react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: 'flex flex-col justify-between h-full'
  }, react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: 'text-gray-600 mb-2'
  }, "Question"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: 'font-bold mb-3'
  }, questions), react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: 'text-gray-600 mb-2'
  }, "Options"), createOptions(options)), react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: 'flex flex-row justify-end mt-2'
  }, react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", {
    onClick: onEdit,
    className: 'btn-icon text-gray-800 dark:text-gray-400 p-3'
  }, react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaEdit, {
    className: 'fill-current w-5 h-5'
  })), react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", {
    onClick: handleDelete,
    className: 'btn-icon text-gray-800 dark:text-gray-400 p-3'
  }, react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__.AiFillDelete, {
    className: 'fill-current w-5 h-5'
  })))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QuestionCard);

/***/ }),

/***/ "./resources/js/components/Questions.tsx":
/*!***********************************************!*\
  !*** ./resources/js/components/Questions.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _models_Api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @models/Api */ "./resources/js/models/Api.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/io */ "./node_modules/react-icons/io/index.esm.js");
/* harmony import */ var _modals_QuestionModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modals/QuestionModal */ "./resources/js/components/modals/QuestionModal.tsx");
/* harmony import */ var _QuestionCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./QuestionCard */ "./resources/js/components/QuestionCard.tsx");
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = undefined && undefined.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};







var Questions = function Questions() {
  var _a = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      showModal = _a[0],
      setShowModal = _a[1];

  var _b = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      questions = _b[0],
      setQuesions = _b[1];

  var updateQuestions = function updateQuestions() {
    return __awaiter(void 0, void 0, void 0, function () {
      var questionRes, error_1;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            _a.trys.push([0, 2,, 3]);

            return [4
            /*yield*/
            , (0,_models_Api__WEBPACK_IMPORTED_MODULE_0__.ApiResquest)('GET', '/questions')];

          case 1:
            questionRes = _a.sent();
            if (!questionRes || questionRes.type === 'failed') return [2
            /*return*/
            ];
            setQuesions(questionRes.data.items);
            return [3
            /*break*/
            , 3];

          case 2:
            error_1 = _a.sent();
            console.error(error_1);
            return [3
            /*break*/
            , 3];

          case 3:
            return [2
            /*return*/
            ];
        }
      });
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    updateQuestions();
  }, []);

  var handleCreateSuccess = function handleCreateSuccess() {
    updateQuestions();
    alert('Successfully Added');
  };

  var handleOnDelete = function handleOnDelete() {
    updateQuestions();
    alert('Successfully Deleted');
  };

  return react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", {
    className: 'text-2xl mb-3'
  }, "Questions"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", {
    className: 'text-base dark:text-gray-600 md:mb-5'
  }, "You can create, update and delete questions in this page"), react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", {
    className: 'p-2 shadow-xl md:shadow-none flex flex-row justify-center items-center fixed bottom-14 right-6 md:static focus:outline-none\r\n            text-white flex-rwo rounded-lg bg-rose-700 hover:bg-rose-600',
    onClick: function onClick() {
      return setShowModal(true);
    }
  }, react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_icons_io__WEBPACK_IMPORTED_MODULE_4__.IoMdAdd, {
    className: 'fill-current w-7 h-7 md:w-5 md:h-5'
  }), react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: 'ml-1 text-base hidden md:block'
  }, "New Question")), react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: 'w-full mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8'
  }, questions.map(function (item, i) {
    return react__WEBPACK_IMPORTED_MODULE_1__.createElement(_QuestionCard__WEBPACK_IMPORTED_MODULE_3__.default, {
      key: i,
      onDelete: handleOnDelete,
      question: item.question,
      questionId: item.id
    });
  })), react__WEBPACK_IMPORTED_MODULE_1__.createElement(_modals_QuestionModal__WEBPACK_IMPORTED_MODULE_2__.default, {
    show: showModal,
    title: 'Create New Question',
    onSuccess: handleCreateSuccess,
    onClose: function onClose() {
      return setShowModal(false);
    }
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Questions);

/***/ }),

/***/ "./resources/js/components/Result.tsx":
/*!********************************************!*\
  !*** ./resources/js/components/Result.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


var Result = function Result(props) {
  return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "result");
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Result);

/***/ }),

/***/ "./resources/js/components/modals/OptionInput.tsx":
/*!********************************************************!*\
  !*** ./resources/js/components/modals/OptionInput.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var validate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! validate.js */ "./node_modules/validate.js/validate.js");
/* harmony import */ var validate_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(validate_js__WEBPACK_IMPORTED_MODULE_1__);



var OptionInput = function OptionInput(props) {
  var onChange = props.onChange,
      showValidateMessage = props.showValidateMessage;

  var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      label = _a[0],
      setLabel = _a[1];

  var _b = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      content = _b[0],
      setContent = _b[1];

  var _c = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      answer = _c[0],
      setAnswer = _c[1];

  var validatedMessage = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return validate_js__WEBPACK_IMPORTED_MODULE_1___default()({
      label: label,
      content: content,
      answer: answer
    }, {
      label: {
        presence: {
          allowEmpty: false
        },
        type: 'string'
      },
      content: {
        presence: {
          allowEmpty: false
        },
        type: 'string'
      },
      answer: {
        presence: true,
        type: 'boolean'
      }
    });
  }, [label, content, answer]);
  var validated = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return validatedMessage === undefined;
  }, [validatedMessage]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (onChange) onChange(label, content, answer, validated);
  }, [label, content, answer]);
  return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'grid grid-flow-row gap-3 md:flex md:flex-row mt-4 md:items-center'
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'flex flex-row justify-between'
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'invisible'
  }, "C")), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'flex justify-center items-center h-10'
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    checked: answer,
    onChange: function onChange(e) {
      return setAnswer(e.currentTarget.checked);
    },
    type: 'checkbox',
    className: 'w-6 h-6'
  })))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'flex flex-row justify-between'
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "label"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'text-sm text-red-600'
  }, showValidateMessage && validatedMessage && validatedMessage.label ? validatedMessage.label.join(',') : '')), react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    name: 'label',
    className: 'h-10 bg-gray-50 dark:bg-gray-900 rounded-md px-2 py-1',
    onChange: function onChange(e) {
      return setLabel(e.currentTarget.value);
    },
    value: label,
    type: 'text',
    placeholder: 'label'
  })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    className: 'w-full'
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'flex flex-row justify-between'
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "Content"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'text-sm text-red-600'
  }, showValidateMessage && validatedMessage && validatedMessage.content ? validatedMessage.content.join(',') : '')), react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    name: 'text',
    onChange: function onChange(e) {
      return setContent(e.currentTarget.value);
    },
    className: 'h-10 w-full bg-gray-50 dark:bg-gray-900 rounded-md px-2 py-1',
    value: content,
    type: 'text',
    placeholder: 'text'
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OptionInput);

/***/ }),

/***/ "./resources/js/components/modals/QuestionModal.tsx":
/*!**********************************************************!*\
  !*** ./resources/js/components/modals/QuestionModal.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/Modal */ "./resources/js/components/Modal.tsx");
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/io5 */ "./node_modules/react-icons/io5/index.esm.js");
/* harmony import */ var _models_Api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @models/Api */ "./resources/js/models/Api.ts");
/* harmony import */ var _OptionInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./OptionInput */ "./resources/js/components/modals/OptionInput.tsx");
/* harmony import */ var validate_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! validate.js */ "./node_modules/validate.js/validate.js");
/* harmony import */ var validate_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(validate_js__WEBPACK_IMPORTED_MODULE_4__);
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = undefined && undefined.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var __spreadArrays = undefined && undefined.__spreadArrays || function () {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
    s += arguments[i].length;
  }

  for (var r = Array(s), k = 0, i = 0; i < il; i++) {
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
      r[k] = a[j];
    }
  }

  return r;
};








var QuestionModal = function QuestionModal(props) {
  var show = props.show,
      onClose = props.onClose,
      title = props.title,
      onSuccess = props.onSuccess,
      questionId = props.questionId;

  var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      question = _a[0],
      setQuestion = _a[1];

  var _b = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      options = _b[0],
      setOptions = _b[1];

  var _c = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      optionsValidated = _c[0],
      setOptionsValidated = _c[1];

  var _d = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      showValidateMessage = _d[0],
      setShowValidateMessage = _d[1];

  var answers = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return options.map(function (option, index) {
      if (option.answer) return index;else return undefined;
    }).filter(function (answer) {
      return answer !== undefined;
    });
  }, [options]);

  var addOption = function addOption() {
    return setOptions(function (pre) {
      return __spreadArrays(pre, [{
        label: '',
        content: '',
        answer: false
      }]);
    });
  };

  var removeOption = function removeOption(index) {
    var newOptions = options.filter(function (_, i) {
      return i !== index;
    });
    setOptions(newOptions);
  };

  var clear = function clear() {
    setOptions([]);
    setQuestion('');
    setShowValidateMessage(false);
  };

  var handleOptionsOnChange = function handleOptionsOnChange(index) {
    return function (label, content, answer, validated) {
      setOptions(function (pre) {
        var newOptions = __spreadArrays(pre);

        newOptions[index].label = label;
        newOptions[index].content = content;
        newOptions[index].answer = answer;
        return newOptions;
      });
      setOptionsValidated(validated);
    };
  };

  var handleClose = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    clear();
    if (onClose) onClose();
  }, [onClose]);
  var validatedMessage = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return (0,validate_js__WEBPACK_IMPORTED_MODULE_4__.validate)({
      question: question,
      options: options,
      answers: answers
    }, {
      question: {
        presence: {
          allowEmpty: false
        },
        type: 'string'
      },
      options: {
        length: {
          minimum: 2,
          message: '^Should provide more than one options'
        },
        type: 'array'
      },
      answers: {
        length: function length(_, attributes) {
          if (attributes.options.length < 1) return true;else return {
            minimum: 1,
            message: '^Should have at least one answer'
          };
        },
        type: 'array'
      }
    });
  }, [question, options, answers]);
  var questionValidated = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return validatedMessage === undefined;
  }, [validatedMessage]);
  var addQuestion = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    return __awaiter(void 0, void 0, void 0, function () {
      var res;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            if (!(questionValidated && optionsValidated)) return [3
            /*break*/
            , 2];
            return [4
            /*yield*/
            , (0,_models_Api__WEBPACK_IMPORTED_MODULE_2__.ApiResquest)('POST', '/questions', {
              question: question,
              options: options,
              answers: answers
            })];

          case 1:
            res = _a.sent();
            if (!res) return [2
            /*return*/
            ];
            if (res.type === 'failed') console.error(res.data.invalidParams);else {
              if (onSuccess) onSuccess();
              handleClose();
            }
            return [3
            /*break*/
            , 3];

          case 2:
            setShowValidateMessage(true);
            _a.label = 3;

          case 3:
            return [2
            /*return*/
            ];
        }
      });
    });
  }, [question, options]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (questionValidated && optionsValidated) {
      setShowValidateMessage(false);
    }
  }, [questionValidated, optionsValidated]);

  var createTitle = function createTitle() {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
      className: 'flex flex-row justify-between items-center p-4 md:p-4 mb-2 sticky top-0 bg-gray-100 dark:bg-gray-800 pt-4 shadow-sm',
      "aria-label": 'modal header'
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: 'text-lg font-bold'
    }, title), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: 'cursor-pointer p-1 hover:bg-gray-300 dark:hover:bg-gray-500 rounded-md',
      onClick: handleClose
    }, react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_io5__WEBPACK_IMPORTED_MODULE_5__.IoCloseSharp, {
      className: 'w-6 h-6 fill-current'
    })));
  };

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Modal__WEBPACK_IMPORTED_MODULE_1__.default, {
    show: show,
    className: 'bg-gray-100 dark:bg-gray-800 shadow-lg\r\n                md:static md:w-4/5 lg:w-2/5 md:h-5/6 md:rounded-lg\r\n                absolute bottom-0 h-2/3 w-full overflow-hidden',
    onClose: handleClose
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'min-h-full flex flex-col justify-between max-h-full'
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'overflow-y-auto max-h-full'
  }, createTitle(), react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
    className: 'p-4 md:p-4 mb-2'
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", null, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'mb-2 pl-1 flex flex-row justify-between'
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: ' text-gray-800 dark:text-gray-300 text-lg'
  }, "Question"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'text-sm text-red-600'
  }, showValidateMessage && validatedMessage && validatedMessage.question ? validatedMessage.question.join(',') : '')), react__WEBPACK_IMPORTED_MODULE_0__.createElement("textarea", {
    name: 'question',
    id: 'question-text',
    placeholder: 'Enter your question here',
    value: question,
    onChange: function onChange(e) {
      return setQuestion(e.currentTarget.value);
    },
    className: ' bg-gray-50 dark:bg-gray-900 text-black dark:text-white rounded-md px-3 py-2 h-32 w-full focus:outline-none'
  })), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'mt-2'
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'w-full flex flex-row justify-between items-center'
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'text-gray-800 dark:text-gray-300 text-lg'
  }, "Options"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'flex flex-row items-center'
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'text-sm text-red-600 mr-3'
  }, showValidateMessage && validatedMessage && validatedMessage.options ? validatedMessage.options.join(',') : ''), react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    onClick: addOption,
    className: 'btn-red h-10 w-20'
  }, "Add"))), options.map(function (_, index) {
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_OptionInput__WEBPACK_IMPORTED_MODULE_3__.default, {
      key: index,
      showValidateMessage: showValidateMessage,
      onChange: handleOptionsOnChange(index)
    });
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'text-sm text-red-600'
  }, showValidateMessage && validatedMessage && validatedMessage.answers ? validatedMessage.answers.join(',') : '')))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: 'p-4 bg-gray-50 dark:bg-gray-900 flex flex-row items-center'
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    onClick: addQuestion,
    className: 'btn-red h-10 items-center mr-2'
  }, "Confirm"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    onClick: clear,
    className: 'btn-red-none h-10 items-center'
  }, "Clear"))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QuestionModal); // <div className='h-full flex flex-col justify-between'>
//     {createTitle()}
//     <div className='flex flex-col justify-center h-full w-full items-center'>
//         <div className='flex justify-center items-center rounded-full text-rose-700 border border-rose-700 w-12 h-12'>
//             <AiOutlineCheck className='fill-current w-10 h-auto text-lg' />
//         </div>
//         <div className='font-bold'>Success</div>
//     </div>
// </div>

/***/ }),

/***/ "./resources/js/contexts/ThemeContext.tsx":
/*!************************************************!*\
  !*** ./resources/js/contexts/ThemeContext.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThemeContext": () => (/* binding */ ThemeContext),
/* harmony export */   "ThemeContextProvider": () => (/* binding */ ThemeContextProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _models_Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/Utils */ "./resources/js/models/Utils.ts");


var ThemeContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
var ThemeContextProvider = function ThemeContextProvider(props) {
  var children = props.children;
  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(ThemeContext.Provider, {
    value: {
      dark: (0,_models_Utils__WEBPACK_IMPORTED_MODULE_1__.isSystemDarkMode)()
    }
  }, children);
};

/***/ }),

/***/ "./resources/js/index.tsx":
/*!********************************!*\
  !*** ./resources/js/index.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./resources/js/App.tsx");
/* harmony import */ var _contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contexts/ThemeContext */ "./resources/js/contexts/ThemeContext.tsx");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/extend-theme.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/chakra-provider.js");
/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tailwindcss/tailwind.css */ "./node_modules/tailwindcss/tailwind.css");






var theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.extendTheme)({});
(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.render)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.ChakraProvider, null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_3__.ThemeContextProvider, null, react__WEBPACK_IMPORTED_MODULE_0__.createElement(_App__WEBPACK_IMPORTED_MODULE_2__.default, null))), document.getElementById('root'));

/***/ }),

/***/ "./resources/js/models/Api.ts":
/*!************************************!*\
  !*** ./resources/js/models/Api.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "backendApiAxios": () => (/* binding */ backendApiAxios),
/* harmony export */   "isSuccessResponse": () => (/* binding */ isSuccessResponse),
/* harmony export */   "getCSRFToken": () => (/* binding */ getCSRFToken),
/* harmony export */   "ApiResquest": () => (/* binding */ ApiResquest),
/* harmony export */   "getFullQuestionSetById": () => (/* binding */ getFullQuestionSetById)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = undefined && undefined.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};


var backendApiAxios = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  baseURL: '/api',
  headers: {
    headers: {
      'Accept': 'application/json'
    }
  }
});
var isSuccessResponse = function isSuccessResponse(code) {
  return code > 200 && code < 300;
};
var getCSRFToken = function getCSRFToken() {
  var tokenTag = Array.from(document.getElementsByTagName('meta')).find(function (el) {
    return el.name === 'csrf-token';
  });
  if (!tokenTag) return undefined;
  return tokenTag.content;
};
var ApiResquest = function ApiResquest(method, resource, data) {
  return __awaiter(this, void 0, void 0, function () {
    var res, error_1;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          _a.trys.push([0, 2,, 3]);

          return [4
          /*yield*/
          , backendApiAxios({
            method: method,
            url: resource,
            data: data
          })];

        case 1:
          res = _a.sent();
          return [2
          /*return*/
          , {
            type: 'success',
            data: res.data
          }];

        case 2:
          error_1 = _a.sent();
          console.error(error_1.response || error_1);
          if (error_1.response) return [2
          /*return*/
          , {
            type: 'failed',
            data: error_1.response.data
          }];
          return [2
          /*return*/
          , undefined];

        case 3:
          return [2
          /*return*/
          ];
      }
    });
  });
};
var getFullQuestionSetById = function getFullQuestionSetById(id) {
  return __awaiter(void 0, void 0, void 0, function () {
    var questionRes, optionsRes, answerRes, error_2;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          _a.trys.push([0, 4,, 5]);

          return [4
          /*yield*/
          , ApiResquest('GET', "/questions/" + id)];

        case 1:
          questionRes = _a.sent();
          if (!questionRes || questionRes.type === 'failed' || questionRes.data.items.length < 1) return [2
          /*return*/
          , undefined];
          return [4
          /*yield*/
          , ApiResquest('GET', "/questions/" + id + "/options")];

        case 2:
          optionsRes = _a.sent();
          if (!optionsRes || optionsRes.type === 'failed' || optionsRes.data.items.length < 1) return [2
          /*return*/
          , undefined];
          return [4
          /*yield*/
          , ApiResquest('GET', "/questions/" + id + "/answers")];

        case 3:
          answerRes = _a.sent();
          if (!answerRes || answerRes.type === 'failed' || answerRes.data.items.length < 1) return [2
          /*return*/
          , undefined];
          return [2
          /*return*/
          , {
            questions: questionRes.data.items[0],
            options: optionsRes.data.items,
            anwsers: answerRes.data.items
          }];

        case 4:
          error_2 = _a.sent();
          console.error(error_2);
          return [2
          /*return*/
          , undefined];

        case 5:
          return [2
          /*return*/
          ];
      }
    });
  });
};

/***/ }),

/***/ "./resources/js/models/Utils.ts":
/*!**************************************!*\
  !*** ./resources/js/models/Utils.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isSystemDarkMode": () => (/* binding */ isSystemDarkMode)
/* harmony export */ });
var isSystemDarkMode = function isSystemDarkMode() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
};

/***/ }),

/***/ "./resources/css/app.css":
/*!*******************************!*\
  !*** ./resources/css/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
0,[["./resources/js/index.tsx","/js/manifest","/js/vendor"],["./resources/css/app.css","/js/manifest","/js/vendor"]]]);