webpackJsonp([1,4],{

/***/ 139:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 139;


/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(177);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_animations__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngrx_store__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngrx_store_devtools__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngrx_effects__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_primeng_primeng__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__containers_app_app_component__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__containers_riddle_page_riddle_page_component__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__containers_riddles_main_page_riddles_main_page_component__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__containers_header_header_component__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__containers_sidenav_sidenav_component__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_get_riddles_service__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__effects_riddles__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__reducers__ = __webpack_require__(52);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// 3rd Parties










// Components






// Services

// Effects

// Misc

// Define the routes
var ROUTES = [
    {
        path: '',
        redirectTo: 'riddles',
        pathMatch: 'full'
    },
    {
        path: 'riddles',
        component: __WEBPACK_IMPORTED_MODULE_13__containers_riddles_main_page_riddles_main_page_component__["a" /* RiddlesMainPageComponent */]
    },
    {
        path: 'riddles/:id',
        component: __WEBPACK_IMPORTED_MODULE_12__containers_riddle_page_riddle_page_component__["a" /* RiddlePageComponent */]
    }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_11__containers_app_app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_13__containers_riddles_main_page_riddles_main_page_component__["a" /* RiddlesMainPageComponent */],
            __WEBPACK_IMPORTED_MODULE_12__containers_riddle_page_riddle_page_component__["a" /* RiddlePageComponent */],
            __WEBPACK_IMPORTED_MODULE_14__containers_header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_15__containers_sidenav_sidenav_component__["a" /* SidenavComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_7__ngrx_store__["a" /* StoreModule */].provideStore(__WEBPACK_IMPORTED_MODULE_18__reducers__["a" /* reducer */]),
            __WEBPACK_IMPORTED_MODULE_8__ngrx_store_devtools__["a" /* StoreDevtoolsModule */].instrumentOnlyWithExtension(),
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_10_primeng_primeng__["ButtonModule"],
            __WEBPACK_IMPORTED_MODULE_10_primeng_primeng__["TabViewModule"],
            __WEBPACK_IMPORTED_MODULE_10_primeng_primeng__["PanelModule"],
            __WEBPACK_IMPORTED_MODULE_10_primeng_primeng__["AutoCompleteModule"],
            __WEBPACK_IMPORTED_MODULE_1__components__["a" /* ComponentsModule */],
            __WEBPACK_IMPORTED_MODULE_9__ngrx_effects__["a" /* EffectsModule */].run(__WEBPACK_IMPORTED_MODULE_17__effects_riddles__["a" /* RiddlesEffects */]),
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"].forRoot(ROUTES) // Add routes to the app
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_16__services_get_riddles_service__["a" /* GetRiddlesService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_11__containers_app_app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'clue-footer',
        template: "\n    <div class=\"footer\">\n      <img height=\"100px\" src=\"../../../assets/img/nocluelogo.png\">\n      2017 Daniel Kagan\n      <a href=\"#\">Contact Me</a>\n    </div>\n  ",
        styles: [__webpack_require__(234)]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__riddles_mosaic_riddles_mosaic_component__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__footer_footer_component__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__riddle_thumbnail_riddle_thumbnail_component__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__riddle_details_riddle_details_component__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__riddle_search_riddle_search_component__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_primeng_primeng__);
/* unused harmony export COMPONENTS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_4__footer_footer_component__["a" /* FooterComponent */],
    __WEBPACK_IMPORTED_MODULE_6__riddle_details_riddle_details_component__["a" /* RiddleDetailsComponent */],
    __WEBPACK_IMPORTED_MODULE_5__riddle_thumbnail_riddle_thumbnail_component__["a" /* RiddleThumbnailComponent */],
    __WEBPACK_IMPORTED_MODULE_7__riddle_search_riddle_search_component__["a" /* RiddleSearchComponent */],
    __WEBPACK_IMPORTED_MODULE_0__riddles_mosaic_riddles_mosaic_component__["a" /* RiddlesMosaicComponent */]
];
var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    return ComponentsModule;
}());
ComponentsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["PanelModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["ButtonModule"],
            __WEBPACK_IMPORTED_MODULE_8_primeng_primeng__["RatingModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["RouterModule"],
        ],
        declarations: COMPONENTS,
        exports: COMPONENTS
    })
], ComponentsModule);

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RiddleDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RiddleDetailsComponent = (function () {
    function RiddleDetailsComponent(route) {
        this.route = route;
        this.riddle = {
            name: "example"
        };
    }
    RiddleDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = +params['id']; // (+) converts string 'id' to a number
            // In a real app: dispatch action to load the details here.
        });
    };
    RiddleDetailsComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    return RiddleDetailsComponent;
}());
RiddleDetailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'clue-riddle-details',
        template: "\n    <p-panel [header]=\"riddle.name\" class=\"riddle-thumbnail-container\">\n    <div class=\"riddle-thumbnail\" (click)=\"riddleClicked()\">\n      riddle: {{riddle.name}}\n      <button type=\"button\" pButton label=\"Click\" icon=\"fa fa-check\"></button>\n    </div>\n    </p-panel>\n  ",
        styles: [__webpack_require__(235)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["ActivatedRoute"]) === "function" && _a || Object])
], RiddleDetailsComponent);

var _a;
//# sourceMappingURL=riddle-details.component.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RiddleSearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RiddleSearchComponent = (function () {
    function RiddleSearchComponent() {
    }
    RiddleSearchComponent.prototype.ngOnInit = function () {
    };
    return RiddleSearchComponent;
}());
RiddleSearchComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'clue-riddle-search',
        template: "\n    <p>\n      riddle-search Works!\n    </p>\n  ",
        styles: [__webpack_require__(236)]
    }),
    __metadata("design:paramtypes", [])
], RiddleSearchComponent);

//# sourceMappingURL=riddle-search.component.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_riddle__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_riddle___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__models_riddle__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RiddleThumbnailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//<p-panel [header]="riddle.name" class="riddle-thumbnail-container">
//riddle: {{riddle.name}}
var RiddleThumbnailComponent = (function () {
    function RiddleThumbnailComponent(router) {
        this.router = router;
    }
    RiddleThumbnailComponent.prototype.ngOnInit = function () {
    };
    RiddleThumbnailComponent.prototype.riddleClicked = function () {
        this.router.navigate(["./riddles/" + this.riddle.id]);
    };
    return RiddleThumbnailComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__models_riddle__["Riddle"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__models_riddle__["Riddle"]) === "function" && _a || Object)
], RiddleThumbnailComponent.prototype, "riddle", void 0);
RiddleThumbnailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'clue-riddle-thumbnail',
        template: "\n\n    <div class=\"riddle-thumbnail-container\" (click)=\"riddleClicked()\">\n      <div class=\"riddle-thumbnail\">\n      <p class=\"riddle-thumbnail-header\">{{riddle.name}}</p>\n      </div>\n    </div>\n\n  ",
        styles: [__webpack_require__(237)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _b || Object])
], RiddleThumbnailComponent);

var _a, _b;
//# sourceMappingURL=riddle-thumbnail.component.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RiddlesMosaicComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RiddlesMosaicComponent = (function () {
    function RiddlesMosaicComponent() {
    }
    return RiddlesMosaicComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], RiddlesMosaicComponent.prototype, "riddles", void 0);
RiddlesMosaicComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'clue-riddles-mosaic',
        template: "\n   <section class=\"riddles-mosaic\">\n    <clue-riddle-thumbnail *ngFor=\"let riddle of riddles\"\n                          [riddle] = riddle\n    >\n   </clue-riddle-thumbnail>\n   </section>\n  ",
        styles: [__webpack_require__(238)]
    })
], RiddlesMosaicComponent);

//# sourceMappingURL=riddles-mosaic.component.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reducers__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_layout__ = __webpack_require__(96);
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
    function AppComponent(store) {
        this.store = store;
        this.isSideNavOpen$ = store.select(__WEBPACK_IMPORTED_MODULE_2__reducers__["b" /* getShowSidenav */]);
    }
    AppComponent.prototype.onToggle = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__actions_layout__["b" /* ToggleSidenavAction */]);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'clue-app',
        template: "\n  <div class=\"app\">\n   <clue-header></clue-header>\n   <div class=\"main\">\n   <router-outlet ></router-outlet>\n   </div>\n   <clue-footer></clue-footer>\n  </div>\n  ",
        styles: [__webpack_require__(239)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = (function () {
    function HeaderComponent(router) {
        this.router = router;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.headerClicked = function () {
        this.router.navigate(["./riddles"]);
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'clue-header',
        template: "\n    <div class=\"header\" (click)=\"headerClicked()\">\n\n      <div style=\"float:right; font-size:15px\">\n      <p-autoComplete placeholder=\"Search\"></p-autoComplete>\n      </div>\n    </div>\n  ",
        styles: [__webpack_require__(240)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["Router"]) === "function" && _a || Object])
], HeaderComponent);

var _a;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_riddles__ = __webpack_require__(38);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RiddlePageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RiddlePageComponent = (function () {
    function RiddlePageComponent(store) {
        this.store = store;
        //this.riddle$ = this.store.select(NoClueReducer.getCurrentRiddle);
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__actions_riddles__["e" /* LoadRiddleAction */](1));
    }
    RiddlePageComponent.prototype.ngOnInit = function () {
    };
    return RiddlePageComponent;
}());
RiddlePageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'clue-riddle-page',
        template: "<clue-riddle-details></clue-riddle-details>",
        styles: [__webpack_require__(241)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__ngrx_store__["b" /* Store */]) === "function" && _a || Object])
], RiddlePageComponent);

var _a;
//# sourceMappingURL=riddle-page.component.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reducers__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_riddles__ = __webpack_require__(38);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RiddlesMainPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RiddlesMainPageComponent = (function () {
    function RiddlesMainPageComponent(store) {
        this.store = store;
        this.riddles$ = this.store.select(__WEBPACK_IMPORTED_MODULE_2__reducers__["c" /* getMosaicRiddles */]);
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__actions_riddles__["f" /* LoadAction */]);
    }
    return RiddlesMainPageComponent;
}());
RiddlesMainPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'clue-riddles-main-page',
        template: "\n   <clue-riddles-mosaic [riddles]=\"riddles$ | async\">\n   </clue-riddles-mosaic>\n  ",
        styles: [__webpack_require__(242)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */]) === "function" && _a || Object])
], RiddlesMainPageComponent);

var _a;
//# sourceMappingURL=riddles-main-page.component.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidenavComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SidenavComponent = (function () {
    function SidenavComponent() {
        this.onToggle = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.isOpen = false;
    }
    return SidenavComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], SidenavComponent.prototype, "onToggle", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SidenavComponent.prototype, "isOpen", void 0);
SidenavComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'clue-sidenav',
        // template: `
        //            <button (click) = "onToggle.emit()">click</button>
        //            <p> side nav </p>
        //            <p *ngIf="isOpen">The content </p>
        //           `,
        template: "\n  <div class=\"navbar\">\n    <p-tabView orientation=\"left\">\n      <p-tabPanel header=\"Home\">\n        Content 1\n      </p-tabPanel>\n      <p-tabPanel header=\"Top \">\n          Content 2\n      </p-tabPanel>\n      <p-tabPanel header=\"Header 3\">\n          Content 3\n      </p-tabPanel>\n  </p-tabView>\n</div>\n\n  ",
        styles: [__webpack_require__(243)]
    })
], SidenavComponent);

//# sourceMappingURL=sidenav.component.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_catch__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_skip__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_skip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_skip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_takeUntil__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_takeUntil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_takeUntil__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngrx_effects__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_observable_empty__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_observable_empty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_empty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_observable_of__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_get_riddles_service__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__actions_riddles__ = __webpack_require__(38);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RiddlesEffects; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var RiddlesEffects = (function () {
    function RiddlesEffects(actions$, riddlesService) {
        var _this = this;
        this.actions$ = actions$;
        this.riddlesService = riddlesService;
        this.search$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_12__actions_riddles__["a" /* LOAD */])
            .debounceTime(300)
            .map(__WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["b" /* toPayload */])
            .switchMap(function (query) {
            if (query === '') {
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_rxjs_observable_empty__["empty"])();
            }
            var nextSearch$ = _this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_12__actions_riddles__["a" /* LOAD */]).skip(1);
            return _this.riddlesService.getAllRiddles()
                .takeUntil(nextSearch$)
                .map(function (riddles) { return new __WEBPACK_IMPORTED_MODULE_12__actions_riddles__["b" /* LoadSuccessAction */](riddles); })
                .catch(function () { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10_rxjs_observable_of__["of"])(new __WEBPACK_IMPORTED_MODULE_12__actions_riddles__["c" /* LoadFailAction */]([])); });
        });
    }
    return RiddlesEffects;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["c" /* Effect */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"]) === "function" && _a || Object)
], RiddlesEffects.prototype, "search$", void 0);
RiddlesEffects = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["d" /* Actions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__ngrx_effects__["d" /* Actions */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_11__services_get_riddles_service__["a" /* GetRiddlesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11__services_get_riddles_service__["a" /* GetRiddlesService */]) === "function" && _c || Object])
], RiddlesEffects);

var _a, _b, _c;
//# sourceMappingURL=riddles.js.map

/***/ }),

/***/ 174:
/***/ (function(module, exports) {

//# sourceMappingURL=riddle.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_layout__ = __webpack_require__(96);
/* harmony export (immutable) */ __webpack_exports__["a"] = reducer;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getShowSidenav; });

var initialState = {
    showSidenav: false,
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_layout__["a" /* TOGGLE_SIDENAV */]:
            return {
                showSidenav: !state.showSidenav
            };
        default:
            return state;
    }
}
var getShowSidenav = function (state) { return state.showSidenav; };
//# sourceMappingURL=layout.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_riddles__ = __webpack_require__(38);
/* harmony export (immutable) */ __webpack_exports__["a"] = reducer;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getMosaicRiddles; });

var initialState = {
    mosaicRiddles: []
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_riddles__["d" /* LOAD_SUCCESS */]:
            return {
                mosaicRiddles: action.payload
            };
        default:
            return state;
    }
}
var getMosaicRiddles = function (state) { return state.mosaicRiddles; };
//# sourceMappingURL=riddles.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 234:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, ".footer {\r\n  margin: 0 auto;\r\n  font-size: 12px;\r\n  border-top: 4px solid black;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, ".riddle-thumbnail-container {\r\n  margin-right:1em;\r\n  margin-top: 2em;\r\n  cursor: pointer;\r\n}\r\n\r\n.riddle-thumbnail {\r\n  height: 200px;\r\n  width: 200px;\r\n\r\n  box-shadow: 2px 2px 7px rgba(136, 136, 136, 0.26);\r\n\r\n}\r\n\r\n.riddle-thumbnail:hover {\r\nbox-shadow: 1px 1px 24px #888888;\r\n\r\n}\r\n\r\n.riddle-thumbnail-header {\r\n  padding: 11px;\r\n    border-bottom: 1px solid lightgrey;\r\n    background: lightseagreen;\r\n    font-weight: bold;\r\n    font-family: cursive;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, ".riddles-mosaic {\r\n  width: 70%;\r\n  margin: 0 auto;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-pack: distribute;\r\n      justify-content: space-around;\r\n  -ms-flex-wrap: wrap;\r\n      flex-wrap: wrap;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-flow: row wrap;\r\n          flex-flow: row wrap;\r\n  -webkit-box-align: start;\r\n      -ms-flex-align: start;\r\n          align-items: flex-start;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 239:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, ".app {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    margin: 10px;\r\n}\r\n\r\n.main {\r\n  -webkit-box-flex:1;\r\n      -ms-flex:1;\r\n          flex:1;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 240:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, ".header {\r\n  background-color: #1976D2;\r\n  color: lightgray;\r\n  height: 340px;\r\n  font-size: 50px;\r\n  padding: 0px;\r\n  margin: 0px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 241:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 243:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)(false);
// imports


// module
exports.push([module.i, ".navbar {\r\n  background: #404C51;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 355:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(140);


/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LOAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return LOAD_SUCCESS; });
/* unused harmony export LOAD_FAIL */
/* unused harmony export LOAD_RIDDLE */
/* unused harmony export LOAD_RIDDLE_SUCCESS */
/* unused harmony export LOAD_RIDDLE_FAIL */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return LoadAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LoadSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LoadFailAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return LoadRiddleAction; });
/* unused harmony export LoadRiddleSuccessAction */
/* unused harmony export LoadRiddleFailAction */
var LOAD = '[Riddles] Load';
var LOAD_SUCCESS = '[Riddles] Load Success';
var LOAD_FAIL = '[Riddles] Load Fail';
var LOAD_RIDDLE = '[Riddles] Load Riddle';
var LOAD_RIDDLE_SUCCESS = '[Riddles] Load Riddle Success';
var LOAD_RIDDLE_FAIL = '[Riddles] Load Riddle Fail';
var LoadAction = (function () {
    function LoadAction() {
        this.type = LOAD;
    }
    return LoadAction;
}());

var LoadSuccessAction = (function () {
    function LoadSuccessAction(payload) {
        this.payload = payload;
        this.type = LOAD_SUCCESS;
    }
    return LoadSuccessAction;
}());

var LoadFailAction = (function () {
    function LoadFailAction(payload) {
        this.payload = payload;
        this.type = LOAD_FAIL;
    }
    return LoadFailAction;
}());

var LoadRiddleAction = (function () {
    function LoadRiddleAction(payload) {
        this.payload = payload;
        this.type = LOAD_RIDDLE;
    }
    return LoadRiddleAction;
}());

var LoadRiddleSuccessAction = (function () {
    function LoadRiddleSuccessAction(payload) {
        this.payload = payload;
        this.type = LOAD_RIDDLE_SUCCESS;
    }
    return LoadRiddleSuccessAction;
}());

var LoadRiddleFailAction = (function () {
    function LoadRiddleFailAction(payload) {
        this.payload = payload;
        this.type = LOAD_RIDDLE_FAIL;
    }
    return LoadRiddleFailAction;
}());

//# sourceMappingURL=riddles.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_reselect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layout__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__riddles__ = __webpack_require__(176);
/* harmony export (immutable) */ __webpack_exports__["a"] = reducer;
/* unused harmony export getLayoutState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getShowSidenav; });
/* unused harmony export getRiddlesState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getMosaicRiddles; });




var reducers = {
    layout: __WEBPACK_IMPORTED_MODULE_2__layout__["a" /* reducer */],
    riddles: __WEBPACK_IMPORTED_MODULE_3__riddles__["a" /* reducer */],
};
var productionReducer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* combineReducers */])(reducers);
function reducer(state, action) {
    return productionReducer(state, action);
}
/**
 * Layout Reducers
 */
var getLayoutState = function (state) { return state.layout; };
var getShowSidenav = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getLayoutState, __WEBPACK_IMPORTED_MODULE_2__layout__["b" /* getShowSidenav */]);
// Riddles Reducers
var getRiddlesState = function (state) { return state.riddles; };
var getMosaicRiddles = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getRiddlesState, __WEBPACK_IMPORTED_MODULE_3__riddles__["b" /* getMosaicRiddles */]);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TOGGLE_SIDENAV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ToggleSidenavAction; });
var TOGGLE_SIDENAV = '[Layout] Toggle Sidenav';
var ToggleSidenavAction = (function () {
    function ToggleSidenavAction() {
        this.type = TOGGLE_SIDENAV;
    }
    return ToggleSidenavAction;
}());

//# sourceMappingURL=layout.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetRiddlesService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GetRiddlesService = (function () {
    function GetRiddlesService(http) {
        this.http = http;
    }
    // Get all posts from the API
    GetRiddlesService.prototype.getAllRiddles = function () {
        console.log('hi');
        return this.http.get('/api/riddles')
            .map(function (res) { return res.json(); });
    };
    GetRiddlesService.prototype.getRiddleById = function (id) {
        return this.http.get("/api/riddles/" + id)
            .map(function (res) { return res.json(); });
    };
    return GetRiddlesService;
}());
GetRiddlesService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], GetRiddlesService);

var _a;
//# sourceMappingURL=get-riddles.service.js.map

/***/ })

},[355]);
//# sourceMappingURL=main.bundle.js.map