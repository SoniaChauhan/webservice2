(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" style=\"margin-top: 2%;\">\n    <div class=\"main border-top\" style=\"padding-bottom: 2%;\">\n        <div style=\"width: 100%;\">\n            <img [src]=\"urlflwr\" alt=\"John Doe\" class=\"ml-3 mt-3\" style=\"width: 13%; border-radius: 50%;\">\n            <button class=\"btn btn-sm\" style=\"background-color: #5F8386; color: #FBFBFB;border-radius: 24px;     margin-left: 4%;\">beta</button>\n        </div>\n        <div style=\"width: 100%;\">\n            <img [src]=\"urlPic\" alt=\"John Doe\" style=\"border-radius: 50%;width: 27%;float: right;margin-top: 3%;\">\n        </div>\n    </div>\n    <div style=\"height: 50px; width: 100%;background-color: #F4F5F1;margin-top: 4%;\"></div>\n\n    <!-- coursel strt -->\n    <owl-carousel-o [options]=\"customOptions\">\n        <ng-template carouselSlide>\n            <img src=\"https://i.ibb.co/4Yb6HDg/President-elect-Sakuji-Tanaka-center-president-of-Rotary-International-for-2012-13-and-a-member-of-t.jpg\" class=\"w-100\">\n        </ng-template>\n        <ng-template carouselSlide>\n            <img src=\"https://i.ibb.co/RjZNcgm/Volunteers-at-Oxbow-Farm-in-Snoqualmie-Valley-Washington-USA-Oxbow-Farm-supplies-surplus-produce-to.jpg\" class=\"w-100\">\n        </ng-template>\n        <ng-template carouselSlide>\n            <img src=\"https://i.ibb.co/pxcFHPW/Community-members-talk-with-Adelante-Foundation-Program-Director-Ricardo-Valdez-second-from-left-of.jpg\" class=\"w-100\">\n        </ng-template>\n    </owl-carousel-o>\n    <!-- coursel end -->\n\n\n\n    <div class=\"d-flex justify-content-between\">\n        <div class=\"bd-highlight\" style=\" color: #365558;\">\n            <h4 style=\"letter-spacing: .8px;font-family: auto;\">Neighbeerly craft beer selection</h4>\n        </div>\n        <div class=\"bd-highlight\">\n            <h5><b>$33</b></h5>\n        </div>\n    </div>\n    <mat-divider style=\" margin-bottom: 6%;\"></mat-divider>\n    <div style=\"color: #D6D6D6;\">\n        Estimated delivery Sat 18 Jul - Mon 20 Jul\n    </div>\n\n    <mat-divider style=\"margin-top: 6%; margin-bottom: 5%;\"></mat-divider>\n    <div class=\"d-flex justify-content-between\">\n        <div class=\"\" style=\"color: #365558;letter-spacing: .8px;font-family: auto;\">\n            <h4 style=\"letter-spacing: .8px;font-family: auto;\">Quantity</h4>\n        </div>\n        <div style=\"position: relative;\">\n            <h5><b style=\"position: absolute;top: 12px;\">1</b>\n                <mat-icon style=\"font-size: 50px; color: #848484;\">keyboard_arrow_right</mat-icon>\n            </h5>\n        </div>\n    </div>\n    <mat-divider></mat-divider>\n    <div style=\"margin-bottom: 6%; margin-top: 6%;\">\n        Within each box, you'll receive a hop-tastic handpicked selection of 12 great-tasting craft beers sourced from independent UK breweries\n    </div>\n\n    <div style=\"box-shadow: 0px 7px 8px #F7F7F7;\">\n        <button class=\"btn btn-lg\" style=\"width: 100%; background-color: #365558; color: white;padding: 4%;\">\n\n         <span>Add to basket</span>\n        </button>\n    </div>\n\n    <!-- <div class=\"d-flex bd-highlight\" style=\" background-color: #365558; padding: 1%;\">\n        <div class=\"p-2 bd-highlight\" style=\"width: 20%;\">\n            <img [src]=\"urlwhite\" alt=\"circular\" style=\"border-radius: 50%;width: 70%;\">\n        </div>\n        <div class=\"p-2 bd-highlight\" style=\"margin-top: 4%;\">\n            <h6 style=\"color: white;\">THE LONDON BADGERS</h6>\n        </div>\n        <div class=\"ml-auto p-2 bd-highlight\" style=\"margin-top: 4%;\">\n            <mat-icon style=\"color: white;\">keyboard_arrow_down</mat-icon>\n        </div>\n    </div>\n\n\n    <div class=\"d-flex bd-highlight\" style=\"padding: 1%;\">\n        <div class=\"p-2 bd-highlight\" style=\"width: 20%;\">\n            <img [src]=\"urlShout\" alt=\"shout\" style=\"border-radius: 50%;width: 100%;\">\n        </div>\n        <div class=\"p-2 bd-highlight\" style=\"margin-top: 4%;\">\n            <textarea rows=\"1\" placeholder=\"Write a shout-out\" style=\"background-color: #F4F5F1; color: #A4A4A4; border-radius: 7px; border: none; text-align: left; padding: 4%; overflow:auto;padding: 6%;\"></textarea>\n        </div>\n\n    </div>\n\n\n    <hr style=\"background-color: #F4F5F1; height: 12px; border-top:none\">\n\n    <div class=\"maincontent\" style=\"padding: 3%;\">\n        <div style=\"position: relative; left: 0; top: 0;width: 30%;\">\n            <img [src]=\"urlwhite\" class=\"outerImg\">\n            <img [src]=\"urlflower2\" class=\"innerImg\">\n        </div>\n\n        <div>\n            <b>Neighbeerly</b> says: <br>\n            <span style=\"color: #A4A4A4;font-size: .7em;\">Today at 12:36 pm </span>\n\n        </div>\n    </div>\n\n    <div style=\"padding: 3%;\">\n        Invite Your Friends to enjoy a range of discounts and rewards of discounts and rewads off artisinal and craft beer boxes. It's a win-win!\n    </div>\n    <div style=\"padding: 2%;\">\n        Share Your invite link with your mates of directly or if you need suggestions, send links via your favourite messaging apps.\n    </div>\n\n    <div style=\"padding: 3%;\">\n        <button class=\"btn btn-lg\" style=\"width: 100%; background-color: #07D06F; color: white;\"><i class=\"fa fa-whatsapp\" style=\"font-size:26px;\"></i> <span> Open WhatsApp</span></button>\n    </div>\n    <div style=\"padding: 3%;\">\n        <button class=\"btn btn-lg\" style=\"width: 100%;color: #365558; border: 1px solid #365558;\">Copy Link</button>\n    </div>\n\n\n    <div class=\"maincontent\" style=\"padding: 3%; flex: 20%;\">\n        <div style=\"position: relative; left: 0; top: 0; width: 30%;\">\n            <img [src]=\"urlwhite\" class=\"outerImg\">\n            <img [src]=\"urlflower2\" class=\"innerImg\">\n        </div>\n        <div>\n            <b>Neighbeerly</b> says: <br>\n            <span style=\"color: #A4A4A4;font-size: .7em;\">Today at 12:36 pm </span>\n\n        </div>\n    </div>\n\n    <div style=\"padding: 3%;\">\n        Invite Your Friends to enjoy a range of discounts and rewards of discounts and rewads off artisinal and craft beer boxes. It's a win-win!\n    </div>\n    <div class=\"card\">\n        <img class=\"card-img-bottom\" [src]=\"urlcheer\" alt=\"Card image\" style=\"width:100%\">\n        <hr style=\"background-color: #e8e5e5;; height: 12px; border-top:none;margin: 0px;\">\n        <div class=\"card-body\">\n\n            <div class=\"cardPic\">\n                <div style=\"width: 30%;\">\n                    <img [src]=\"urlPic2\" alt=\"John Doe\" style=\"border-radius: 50%; width: 100%;\">\n                </div>\n                <div style=\"padding-left: 10%;\">\n                    <b>George Smith</b> just joined the Neighbeerhood:<br>\n                    <span style=\"color: #A4A4A4;font-size: .7em;\">Today at 12:36 pm </span>\n                </div>\n            </div>\n\n        </div>\n        <hr style=\"background-color: #e8e5e5;; height: 12px; border-top:none;margin: 0px;\">\n    </div> -->\n    <mat-divider style=\" margin-top: 5%; margin-bottom: 7%;\"></mat-divider>\n    <div>\n        <table style=\"width: 100%; margin-top: 2%;\">\n            <tr>\n                <td style=\"color: #B4D2CB; text-align: center; width: 20%;\">\n                    <mat-icon>crop_portrait</mat-icon>\n                </td>\n                <td style=\"color: #B1B1B1;text-align: center; width: 26.6%;\">\n                    <mat-icon> local_cafe</mat-icon>\n                </td>\n                <td style=\"color: #B1B1B1;text-align: center;width: 26.6%;\">\n                    <mat-icon>notifications_none</mat-icon>\n                </td>\n                <td style=\"color: #B1B1B1;text-align: center;width: 26.6%;\">\n                    <mat-icon>brightness_low</mat-icon>\n                </td>\n            </tr>\n            <tr>\n                <td style=\"color: #B4D2CB;text-align: center; width: 20%;\"><small>FEED</small></td>\n                <td style=\"color: #B1B1B1;text-align: center;width: 26.6%;\"><small>MEET UP</small></td>\n                <td style=\"color: #B1B1B1;text-align: center;width: 26.6%;\"><small>NOTIFICATION</small></td>\n                <td style=\"color: #B1B1B1;text-align: center;width: 26.6%;\"><small>MY ACCOUNT</small></td>\n            </tr>\n        </table>\n    </div>\n    <mat-divider style=\"border-top-color: rgb(179 174 174 / 12%); margin-top: 5%; margin-bottom: 5%;\"></mat-divider>\n\n    <!-- container div     -->\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main {\r\n    display: flex;\r\n}\r\n\r\n.maincomnt {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\ntextarea {\r\n    resize: none;\r\n}\r\n\r\n.maincontent {\r\n    display: flex;\r\n}\r\n\r\n.cardPic {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.outerImg {\r\n    position: relative;\r\n    top: 0;\r\n    left: 0;\r\n    border-radius: 50%;\r\n    width: 56%;\r\n    border: 1px solid #BBD6CF;\r\n}\r\n\r\n.innerImg {\r\n    position: absolute;\r\n    top: 17%;\r\n    left: 15%;\r\n    width: 25%;\r\n}\r\n\r\n.btn-group-sm>.btn,\r\n.btn-sm {\r\n    font-size: .6rem;\r\n}\r\n\r\n.owl-carousel .nav-btn {\r\n    height: 47px;\r\n    position: absolute;\r\n    width: 26px;\r\n    cursor: pointer;\r\n    top: 100px !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBOztJQUVJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGVBQWU7SUFDZixxQkFBcUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5tYWluY29tbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxudGV4dGFyZWEge1xyXG4gICAgcmVzaXplOiBub25lO1xyXG59XHJcblxyXG4ubWFpbmNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmNhcmRQaWMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLm91dGVySW1nIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB3aWR0aDogNTYlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0JCRDZDRjtcclxufVxyXG5cclxuLmlubmVySW1nIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTclO1xyXG4gICAgbGVmdDogMTUlO1xyXG4gICAgd2lkdGg6IDI1JTtcclxufVxyXG5cclxuLmJ0bi1ncm91cC1zbT4uYnRuLFxyXG4uYnRuLXNtIHtcclxuICAgIGZvbnQtc2l6ZTogLjZyZW07XHJcbn1cclxuXHJcbi5vd2wtY2Fyb3VzZWwgLm5hdi1idG4ge1xyXG4gICAgaGVpZ2h0OiA0N3B4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDI2cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0b3A6IDEwMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'webservice2';
        this.urlPic = "https://i.ibb.co/52bryQw/pic.jpg";
        this.urlPic2 = "https://i.ibb.co/52bryQw/pic.jpg";
        this.urlflwr = "https://i.ibb.co/5nvBMRQ/flower.jpg";
        this.urlflower2 = "https://i.ibb.co/5nvBMRQ/flower.jpg";
        this.urlwhite = "https://i.ibb.co/VwzRCbb/white.png";
        this.urlcheer = "https://i.ibb.co/KG2vGrw/cheer.jpg";
        this.urlShout = "https://i.ibb.co/7CsxvY5/pic.jpg";
        this.customOptions = {
            loop: true,
            mouseDrag: true,
            touchDrag: true,
            pullDrag: true,
            dots: true,
            navSpeed: 700,
            navText: ["<mat-icon>keyboard_arrow_left</mat-icon>", "<mat-icon>keyboard_arrow_right</mat-icon>"],
            responsive: {
                0: {
                    items: 1
                },
                400: {
                    items: 2
                },
                740: {
                    items: 3
                },
                940: {
                    items: 1
                }
            },
            nav: true
        };
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm2015/divider.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm2015/grid-list.js");
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-owl-carousel-o */ "./node_modules/ngx-owl-carousel-o/fesm2015/ngx-owl-carousel-o.js");






// import { FlexLayoutModule } from '@angular/flex-layout';




let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridListModule"],
            // FlexLayoutModule,
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__["MatDividerModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
            ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_9__["CarouselModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\HP\Desktop\i-webservices\webservice2\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map