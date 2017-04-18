webpackJsonp([1,4],{

/***/ 386:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 386;


/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(504);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/dinithi@codegen.net/test991/src/main.js.map

/***/ }),

/***/ 503:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(69);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(location, elementRef, _router) {
        var _this = this;
        this.location = location;
        this.elementRef = elementRef;
        this._router = _router;
        this.hidden = false;
        this.hiddenRoute = true;
        location.onPopState(function () {
            _this._router.navigate(['']);
        });
    }
    AppComponent.prototype.onNotify = function (message) {
        if (message == "TRUE") {
            this.hidden = true;
            this.hiddenRoute = false;
            this._router.navigateByUrl('home');
        }
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(667),
            styles: [__webpack_require__(664)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["c" /* PlatformLocation */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_common__["c" /* PlatformLocation */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _c) || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/dinithi@codegen.net/test991/src/app.component.js.map

/***/ }),

/***/ 504:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(503);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login_component__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__signup_signup_component__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__loggedIn_loggedIn_component__ = __webpack_require__(505);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_6__signup_signup_component__["a" /* SignUpComponent */],
                __WEBPACK_IMPORTED_MODULE_8__loggedIn_loggedIn_component__["a" /* LoggedInComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* RouterModule */].forRoot([
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                    },
                    {
                        path: 'home',
                        component: __WEBPACK_IMPORTED_MODULE_8__loggedIn_loggedIn_component__["a" /* LoggedInComponent */],
                    },
                ])
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Users/dinithi@codegen.net/test991/src/app.module.js.map

/***/ }),

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(69);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoggedInComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoggedInComponent = (function () {
    function LoggedInComponent(location, _router) {
        var _this = this;
        this.location = location;
        this._router = _router;
        location.onPopState(function () {
            _this._router.navigate(['']);
        });
    }
    LoggedInComponent.prototype.ngOnInit = function () {
    };
    LoggedInComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'loggedIn',
            template: __webpack_require__(668),
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["c" /* PlatformLocation */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_common__["c" /* PlatformLocation */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], LoggedInComponent);
    return LoggedInComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/dinithi@codegen.net/test991/src/loggedIn.component.js.map

/***/ }),

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_service__ = __webpack_require__(507);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = (function () {
    function LoginComponent(loginService) {
        this.loginService = loginService;
        this.notify = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* EventEmitter */]();
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function (userName, password) {
        var _this = this;
        this.loginService.logIn(userName, password).subscribe(function (resultOut) {
            _this.loginResult = resultOut;
            if (_this.loginResult == "true") {
                _this.notify.emit('TRUE');
            }
            else {
                alert("Incorrect userName or password");
            }
        });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Output */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* EventEmitter */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* EventEmitter */]) === 'function' && _a) || Object)
    ], LoginComponent.prototype, "notify", void 0);
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'login',
            template: __webpack_require__(669),
            styles: [__webpack_require__(665)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__login_service__["a" /* LoginService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__login_service__["a" /* LoginService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__login_service__["a" /* LoginService */]) === 'function' && _b) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/dinithi@codegen.net/test991/src/login.component.js.map

/***/ }),

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(202);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginService = (function () {
    function LoginService(_http) {
        this._http = _http;
        // private urlHead = 'http://localhost/smrt-book/index1.php/';
        this.urlHead = 'http://localhost/login_angular/login.php';
    }
    LoginService.prototype.logIn = function (userName, password) {
        // let headers = new Headers({ 'Content-Type': 'application/json' });
        // let options = new RequestOptions({ headers: headers });
        //
        // return this._http.post(this.urlHead, JSON.stringify({order: userName}), options)
        //   .map(this.extrctLog);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this._http.post(this.urlHead, JSON.stringify({ userName: userName, password: password }), options).map(this.extrctLog);
    };
    LoginService.prototype.extrctLog = function (res) {
        var objArray = res.json();
        return objArray || {};
    };
    LoginService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Http */]) === 'function' && _a) || Object])
    ], LoginService);
    return LoginService;
    var _a;
}());
//# sourceMappingURL=C:/Users/dinithi@codegen.net/test991/src/login.service.js.map

/***/ }),

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__signup_service__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core_src_metadata_directives__ = __webpack_require__(296);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignUpComponent = (function () {
    function SignUpComponent(signUpService) {
        this.signUpService = signUpService;
        this.signUpResult = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* EventEmitter */]();
    }
    SignUpComponent.prototype.ngOnInit = function () {
    };
    SignUpComponent.prototype.signup = function (userName, password) {
        var _this = this;
        console.log(userName, password);
        this.signUpService.signUp(userName, password).subscribe(function (resultOut) {
            _this.loginResult = resultOut;
            if (_this.loginResult == "true") {
                _this.signUpResult.emit('TRUE');
            }
        });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core_src_metadata_directives__["f" /* Output */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* EventEmitter */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* EventEmitter */]) === 'function' && _a) || Object)
    ], SignUpComponent.prototype, "signUpResult", void 0);
    SignUpComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'signup',
            template: __webpack_require__(670),
            styles: [__webpack_require__(666)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__signup_service__["a" /* SignUpService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__signup_service__["a" /* SignUpService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__signup_service__["a" /* SignUpService */]) === 'function' && _b) || Object])
    ], SignUpComponent);
    return SignUpComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/dinithi@codegen.net/test991/src/signup.component.js.map

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(202);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignUpService = (function () {
    function SignUpService(_http) {
        this._http = _http;
        // private urlHead = 'http://localhost/smrt-book/index1.php/';
        this.urlHead = 'http://localhost/login_angular/signUp.php';
    }
    SignUpService.prototype.signUp = function (userName, password) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this._http.post(this.urlHead, JSON.stringify({ userName: userName, password: password }), options)
            .map(this.extrctLog);
    };
    SignUpService.prototype.extrctLog = function (res) {
        var objArray = res.json();
        return objArray || {};
    };
    SignUpService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Http */]) === 'function' && _a) || Object])
    ], SignUpService);
    return SignUpService;
    var _a;
}());
//# sourceMappingURL=C:/Users/dinithi@codegen.net/test991/src/signup.service.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Users/dinithi@codegen.net/test991/src/environment.js.map

/***/ }),

/***/ 664:
/***/ (function(module, exports) {

module.exports = "#body {\r\n  background-color: lightblue;\r\n}\r\n"

/***/ }),

/***/ 665:
/***/ (function(module, exports) {

module.exports = ".login-page {\r\n  width: 360px;\r\n  padding: 8% 0 0;\r\n  margin: auto;\r\n}\r\n.form {\r\n  position: relative;\r\n  z-index: 1;\r\n  background: #FFFFFF;\r\n  max-width: 360px;\r\n  margin: 0 auto 100px;\r\n  padding: 45px;\r\n  text-align: center;\r\n  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);\r\n}\r\n.form input {\r\n  font-family: \"Roboto\", sans-serif;\r\n  outline: 0;\r\n  background: #f2f2f2;\r\n  width: 100%;\r\n  color: black;\r\n  border: 2px solid deepskyblue;\r\n  margin: 0 0 15px;\r\n  padding: 15px;\r\n  box-sizing: border-box;\r\n  font-size: 14px;\r\n}\r\n\r\ninput[type=submit] {\r\n  background-color: deepskyblue;\r\n  border: none;\r\n  color: white;\r\n  padding: 15px 32px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 16px;\r\n  margin: 4px 2px;\r\n  cursor: pointer;\r\n  -webkit-transition-duration: 0.4s;\r\n  transition-duration: 0.4s;\r\n\r\n}\r\nh1 {\r\n  font-family: \"Roboto\", sans-serif;\r\n  font-size: larger;\r\n}\r\nh2 {\r\n  font-family: \"Roboto\", sans-serif;\r\n  font-size: medium;\r\n}\r\np {\r\n  font-family: \"Roboto\", sans-serif;\r\n  font-size: medium;\r\n}\r\nbody {\r\n  background-color: lightblue;\r\n}\r\n"

/***/ }),

/***/ 666:
/***/ (function(module, exports) {

module.exports = ".login-page {\r\n  width: 360px;\r\n  padding: 8% 0 0;\r\n  margin: auto;\r\n}\r\n.form {\r\n  position: relative;\r\n  z-index: 1;\r\n  background: #FFFFFF;\r\n  max-width: 360px;\r\n  margin: 0 auto 100px;\r\n  padding: 45px;\r\n  text-align: center;\r\n  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);\r\n}\r\n.form input {\r\n  font-family: \"Roboto\", sans-serif;\r\n  outline: 0;\r\n  background: #f2f2f2;\r\n  width: 100%;\r\n  color: black;\r\n  border: 2px solid deepskyblue;\r\n  margin: 0 0 15px;\r\n  padding: 15px;\r\n  box-sizing: border-box;\r\n  font-size: 14px;\r\n}\r\n\r\ninput[type=submit] {\r\n  background-color: deepskyblue;\r\n  border: none;\r\n  color: white;\r\n  padding: 15px 32px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 16px;\r\n  margin: 4px 2px;\r\n  cursor: pointer;\r\n  -webkit-transition-duration: 0.4s;\r\n  transition-duration: 0.4s;\r\n\r\n}\r\nh1 {\r\n  font-family: \"Roboto\", sans-serif;\r\n  font-size: larger;\r\n}\r\nh2 {\r\n  font-family: \"Roboto\", sans-serif;\r\n  font-size: medium;\r\n}\r\np {\r\n  font-family: \"Roboto\", sans-serif;\r\n  font-size: medium;\r\n}\r\nbody {\r\n  background-color: lightblue;\r\n}\r\n"

/***/ }),

/***/ 667:
/***/ (function(module, exports) {

module.exports = "<div id=\"body\">\n<div id=\"log\">\n\n  <login [hidden]=\"hidden\" (notify)='onNotify($event)'></login>\n\n  <h2 [hidden]=\"hidden\" align=\"Center\">OR</h2>\n\n  <signup [hidden]=\"hidden\" (signUpResult)='onNotify($event)'></signup>\n\n</div>\n\n\n\n<div id=\"route\" [hidden]=\"hiddenRoute\">\n  <router-outlet></router-outlet>\n\n</div>\n</div>\n"

/***/ }),

/***/ 668:
/***/ (function(module, exports) {

module.exports = "You have successfully Signed Up!!\r\n"

/***/ }),

/***/ 669:
/***/ (function(module, exports) {

module.exports = "<div class=\"login-page\">\r\n\r\n  <div class=\"form\">\r\n\r\n    <h1> Log in </h1>\r\n    <br/>\r\n    <p>Username</p>\r\n  <input type=\"text\" id=\"userName\" #userName placeholder=\"Enter User Name\">\r\n     <p>Password</p>\r\n  <input type=\"password\" id=\"password\" #password placeholder=\"Enter Password\">\r\n    <br/><br><br>\r\n  <input type=\"submit\" value=\"LogIn\" (click)=\"login(userName.value, password.value)\">\r\n\r\n    </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ 670:
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"form\">\r\n  <h1> Sign Up </h1> <br/>\r\n\r\n  <p>Full name</p>\r\n\r\n  <input type=\"text\" id=\"user\" #user placeholder=\"Enter User Name\">\r\n\r\n  <br/><p>Username</p>\r\n\r\n  <input type=\"text\" id=\"userName\" #userName placeholder=\"Enter User Name\">\r\n\r\n  <br/><p>Password</p>\r\n\r\n  <input type=\"password\" id=\"password\" #password placeholder=\"Enter Password\">\r\n\r\n  <br/>\r\n<br><br>\r\n  <input type=\"submit\" value=\"SignUp\" (click)=\"signup(userName.value, password.value)\">\r\n\r\n</div>\r\n"

/***/ }),

/***/ 688:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(387);


/***/ })

},[688]);
//# sourceMappingURL=main.bundle.map