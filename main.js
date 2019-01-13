(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jumbotron{\n    background-color:  #b30047;\n    height: 150px;\n    margin-top: 40px;\n    color: white;\n}\nbody{\n    align-content: center;\n  \n}\nh3{\n    padding-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwyQkFBMkI7SUFDM0IsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixhQUFhO0NBQ2hCO0FBQ0Q7SUFDSSxzQkFBc0I7O0NBRXpCO0FBQ0Q7SUFDSSxxQkFBcUI7Q0FDeEIiLCJmaWxlIjoiLi4vc3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5qdW1ib3Ryb257XG4gICAgYmFja2dyb3VuZC1jb2xvcjogICNiMzAwNDc7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbmJvZHl7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBcbn1cbmgze1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <div class=\"jumbotron\">\n  <h1>\n    Welcome to {{ title }}\n  </h1>\n  <h4>Always feel free to express yourself.....</h4>\n  </div>\n\n  <body> \n      <app-quote></app-quote>\n  </body>\n \n   \n \n\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _quote__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./quote */ "./src/app/quote.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'LittyQuotes';
        this.quotes = [
            new _quote__WEBPACK_IMPORTED_MODULE_2__["Quote"](1, 'Life', 'My life is my message', ' Mahatma Gandhi', new Date(2018, 3, 14)),
            new _quote__WEBPACK_IMPORTED_MODULE_2__["Quote"](2, 'Life', 'My life is my message', ' Mahatma Gandhi', new Date(2018, 6, 9)),
            new _quote__WEBPACK_IMPORTED_MODULE_2__["Quote"](3, 'Life', 'My life is my message', ' Mahatma Gandhi', new Date(2018, 7, 12)),
            new _quote__WEBPACK_IMPORTED_MODULE_2__["Quote"](4, 'Life', 'My life is my message', ' Mahatma Gandhi', new Date(2018, 4, 18)),
            new _quote__WEBPACK_IMPORTED_MODULE_2__["Quote"](5, 'Life', 'My life is my message', ' Mahatma Gandhi', new Date(2018, 2, 14)),
            new _quote__WEBPACK_IMPORTED_MODULE_2__["Quote"](6, 'Life', 'My life is my message', ' Mahatma Gandhi', new Date(2018, 11, 14)),
            new _quote__WEBPACK_IMPORTED_MODULE_2__["Quote"](7, 'Life', 'My life is my message', ' Mahatma Gandhi', new Date(2019, 0, 10)),
        ];
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _quote_quote_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./quote/quote.component */ "./src/app/quote/quote.component.ts");
/* harmony import */ var _quote_details_quote_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./quote-details/quote-details.component */ "./src/app/quote-details/quote-details.component.ts");
/* harmony import */ var _date_count_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./date-count.pipe */ "./src/app/date-count.pipe.ts");
/* harmony import */ var _quote_form_quote_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./quote-form/quote-form.component */ "./src/app/quote-form/quote-form.component.ts");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _quote_quote_component__WEBPACK_IMPORTED_MODULE_6__["QuoteComponent"],
                _quote_details_quote_details_component__WEBPACK_IMPORTED_MODULE_7__["QuoteDetailsComponent"],
                _date_count_pipe__WEBPACK_IMPORTED_MODULE_8__["DateCountPipe"],
                _quote_form_quote_form_component__WEBPACK_IMPORTED_MODULE_9__["QuoteFormComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/date-count.pipe.ts":
/*!************************************!*\
  !*** ./src/app/date-count.pipe.ts ***!
  \************************************/
/*! exports provided: DateCountPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateCountPipe", function() { return DateCountPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DateCountPipe = /** @class */ (function () {
    function DateCountPipe() {
    }
    DateCountPipe.prototype.transform = function (value) {
        var today = new Date(); //get current date and time
        var todayWithNoTime = new Date(today.getFullYear(), today.getMonth(), today.getDate());
        var dateDifference = Math.abs(todayWithNoTime - value); // returns value in milliseconds
        var secondsInADay = 86400; //60 seconds*60 minutes in an hour *24 hours
        var dateDifferenceSeconds = dateDifference * 0.001; //converts to seconds
        var dateCounter = dateDifferenceSeconds / secondsInADay;
        if (dateCounter >= 1 && todayWithNoTime > value) {
            return dateCounter;
        }
        else {
            return 0;
        }
    };
    DateCountPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'dateCount'
        })
    ], DateCountPipe);
    return DateCountPipe;
}());



/***/ }),

/***/ "./src/app/quote-details/quote-details.component.css":
/*!***********************************************************!*\
  !*** ./src/app/quote-details/quote-details.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img{\n    height: 20px;\n}\nbutton{\n    margin-right: 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAvcXVvdGUtZGV0YWlscy9xdW90ZS1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0NBQ2hCO0FBQ0Q7SUFDSSxtQkFBbUI7Q0FDdEIiLCJmaWxlIjoiLi4vc3JjL2FwcC9xdW90ZS1kZXRhaWxzL3F1b3RlLWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZ3tcbiAgICBoZWlnaHQ6IDIwcHg7XG59XG5idXR0b257XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/quote-details/quote-details.component.html":
/*!************************************************************!*\
  !*** ./src/app/quote-details/quote-details.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3> <b><i> {{quote.description}} </i></b></h3>\n<p>{{quote.author}}</p>\n<p>posted {{quote.completeDate|dateCount }} days ago</p>\n\n\n<button (click) = 'quoteDelete(true)'> Delete  </button>\n<button (click) = 'quoteComplete(true)'> Read </button>\n\n<button (click) =\"like()\" id= \"button1\" > <img src=\"assets/uo.png\"> {{likeCount}}</button>\n<button (click) =\"dislike()\"  id= \"button\" > <img src=\"assets/down.jpeg\">  {{dislikeCount}} </button>\n"

/***/ }),

/***/ "./src/app/quote-details/quote-details.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/quote-details/quote-details.component.ts ***!
  \**********************************************************/
/*! exports provided: QuoteDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteDetailsComponent", function() { return QuoteDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _quote__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../quote */ "./src/app/quote.ts");



var QuoteDetailsComponent = /** @class */ (function () {
    function QuoteDetailsComponent() {
        this.isComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.toDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.likeCount = 0;
        this.dislikeCount = 0;
    }
    QuoteDetailsComponent.prototype.like = function () {
        this.likeCount = this.likeCount + 1;
    };
    QuoteDetailsComponent.prototype.dislike = function () {
        this.dislikeCount = this.dislikeCount + 1;
    };
    QuoteDetailsComponent.prototype.quoteComplete = function (complete) {
        this.isComplete.emit(complete);
    };
    QuoteDetailsComponent.prototype.quoteDelete = function (remove) {
        this.toDelete.emit(remove);
    };
    QuoteDetailsComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _quote__WEBPACK_IMPORTED_MODULE_2__["Quote"])
    ], QuoteDetailsComponent.prototype, "quote", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], QuoteDetailsComponent.prototype, "isComplete", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], QuoteDetailsComponent.prototype, "toDelete", void 0);
    QuoteDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-quote-details',
            template: __webpack_require__(/*! ./quote-details.component.html */ "./src/app/quote-details/quote-details.component.html"),
            styles: [__webpack_require__(/*! ./quote-details.component.css */ "./src/app/quote-details/quote-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], QuoteDetailsComponent);
    return QuoteDetailsComponent;
}());



/***/ }),

/***/ "./src/app/quote-form/quote-form.component.css":
/*!*****************************************************!*\
  !*** ./src/app/quote-form/quote-form.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button{\n    background-color:  #b30047;\n    border-radius: 25px;\n}\nlabel{\n    font-size: 70%;\n    font-style: italic;\n}\ninput{\n    font-size: 60%;\n    font-weight: 100; \n    font-style: italic;\n}\n[hidden]{\n  font-size: 40%;\n}\np{\n    font-size: 40%;\n}\n.alert{\n    height: 15%;\n}\n.warn{\n    padding-top: 15px;\n    background-color: crimson;\n    \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAvcXVvdGUtZm9ybS9xdW90ZS1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwyQkFBMkI7SUFDM0Isb0JBQW9CO0NBQ3ZCO0FBQ0Q7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0NBQ3RCO0FBQ0Q7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLG1CQUFtQjtDQUN0QjtBQUNEO0VBQ0UsZUFBZTtDQUNoQjtBQUNEO0lBQ0ksZUFBZTtDQUNsQjtBQUNEO0lBQ0ksWUFBWTtDQUNmO0FBQ0Q7SUFDSSxrQkFBa0I7SUFDbEIsMEJBQTBCOztDQUU3QiIsImZpbGUiOiIuLi9zcmMvYXBwL3F1b3RlLWZvcm0vcXVvdGUtZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9ue1xuICAgIGJhY2tncm91bmQtY29sb3I6ICAjYjMwMDQ3O1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG59XG5sYWJlbHtcbiAgICBmb250LXNpemU6IDcwJTtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5pbnB1dHtcbiAgICBmb250LXNpemU6IDYwJTtcbiAgICBmb250LXdlaWdodDogMTAwOyBcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5baGlkZGVuXXtcbiAgZm9udC1zaXplOiA0MCU7XG59XG5we1xuICAgIGZvbnQtc2l6ZTogNDAlO1xufVxuLmFsZXJ0e1xuICAgIGhlaWdodDogMTUlO1xufVxuLndhcm57XG4gICAgcGFkZGluZy10b3A6IDE1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogY3JpbXNvbjtcbiAgICBcbn0iXX0= */"

/***/ }),

/***/ "./src/app/quote-form/quote-form.component.html":
/*!******************************************************!*\
  !*** ./src/app/quote-form/quote-form.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n      \n      <form #quoteForm='ngForm'>\n          <!-- Name Form -->\n          <div class=\"form-group\">\n              <label for=\"name\">Title : </label>\n              <input type=\"text\"  placeholder=\"enter title\" class=\"form-control\" id=\"name\" [(ngModel)]=\"newQuote.title\" name=\"name\" #name=\"ngModel\" required>\n              \n              <div [hidden]=\"name.valid || name.pristine\" class=\"warn\">\n                  <p> Name is Required</p>\n                  \n              </div>\n          </div>\n          <!-- Description Input -->\n          <div class=\"form-group\">\n              <label for=\"description\">Quote :  </label>\n              <textarea class=\"form-control\" cols=\"14\" rows=\"1\" placeholder=\"enter quote\" id=\"description\" rows=\"4\" [(ngModel)]=\"newQuote.description\" name=\"description\" #description=\"ngModel\" required></textarea>\n              <div [hidden]=\"description.valid || description.pristine\" class=\"warn\">\n                  <p> Quote is Required</p>\n                  \n              </div>\n              \n          </div>\n\n          <div class=\"form-group\">\n              <label for=\"author\">By : </label>\n              <input type=\"text\" placeholder=\"author's name\" class=\"form-control\" id=\"author\" rows=\"4\" [(ngModel)]=\"newQuote.author\" name=\"author\" #author=\"ngModel\" required>\n              <div [hidden]=\"author.valid || author.pristine\" class=\" warn\">\n                  <p> Author's name is required</p><br><br>\n                  \n              </div>\n              \n          </div><br>\n          \n          <!-- Date Input -->\n          <div class=\"form-group\">\n              <label for=\"complete\">Date :  </label><br> \n              <input type='date' id=\"complete\" [(ngModel)]=\"newQuote.completeDate\" name=\"completeDate\" #completeDate=\"ngModel\" required >\n              <div [hidden]=\"completeDate.valid || completeDate.pristine\" class=\"warn\">\n                  <p>Date is Required</p>\n                  \n              </div>\n          </div>\n          <form (ngSubmit)='submitQuote()' #quoteForm='ngForm'>\n          <button type=\"Submit\" class=\"\">Submit Quote</button>\n          </form>\n     \n                  \n      </form>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/quote-form/quote-form.component.ts":
/*!****************************************************!*\
  !*** ./src/app/quote-form/quote-form.component.ts ***!
  \****************************************************/
/*! exports provided: QuoteFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteFormComponent", function() { return QuoteFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _quote__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../quote */ "./src/app/quote.ts");



var QuoteFormComponent = /** @class */ (function () {
    function QuoteFormComponent() {
        this.newQuote = new _quote__WEBPACK_IMPORTED_MODULE_2__["Quote"](0, "", "", "", new Date());
        this.addQuote = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    QuoteFormComponent.prototype.submitQuote = function () {
        this.addQuote.emit(this.newQuote);
    };
    QuoteFormComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], QuoteFormComponent.prototype, "addQuote", void 0);
    QuoteFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-quote-form',
            template: __webpack_require__(/*! ./quote-form.component.html */ "./src/app/quote-form/quote-form.component.html"),
            styles: [__webpack_require__(/*! ./quote-form.component.css */ "./src/app/quote-form/quote-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], QuoteFormComponent);
    return QuoteFormComponent;
}());



/***/ }),

/***/ "./src/app/quote.ts":
/*!**************************!*\
  !*** ./src/app/quote.ts ***!
  \**************************/
/*! exports provided: Quote */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Quote", function() { return Quote; });
var Quote = /** @class */ (function () {
    function Quote(id, title, description, author, completeDate) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.author = author;
        this.completeDate = completeDate;
        this.showDescription = false;
    }
    return Quote;
}());



/***/ }),

/***/ "./src/app/quote/quote.component.css":
/*!*******************************************!*\
  !*** ./src/app/quote/quote.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box{\n\n    color: black;\n    border-bottom: \t #804000 solid;\n    padding: 20px;\n    padding-top: 25px;\n    padding-bottom: 35px;\n    margin:20px;\n    align-content: center;\n}\n.container {\n \n   height:100%;\n  \n   margin-top: 30px;\n   background-color: white;\n   padding-bottom:25px;\n   font-family: Arial,helvetica;\n   font-size: 20px;\n   margin: 0 auto;\n   align-content: center;\n}\n.grid-container {\n   display: grid;\n   grid-template-columns: auto auto;\n   padding: 10px;\n   align-content: center;\n}\n.grid-item {\n\n   border: 1px solid black;\n   padding: 20px;\n   font-size: 30px;\n   text-align: center;\n   align-content: center;\n }\n.btt{\n   background-color:#b30047;\n   border-radius: 20px;\n }\nh3{\n     padding-top: 25px;\n     padding-bottom: 25px;\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAvcXVvdGUvcXVvdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxhQUFhO0lBQ2IsK0JBQStCO0lBQy9CLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixzQkFBc0I7Q0FDekI7QUFDRDs7R0FFRyxZQUFZOztHQUVaLGlCQUFpQjtHQUNqQix3QkFBd0I7R0FDeEIsb0JBQW9CO0dBQ3BCLDZCQUE2QjtHQUM3QixnQkFBZ0I7R0FDaEIsZUFBZTtHQUNmLHNCQUFzQjtDQUN4QjtBQUNEO0dBQ0csY0FBYztHQUNkLGlDQUFpQztHQUNqQyxjQUFjO0dBQ2Qsc0JBQXNCO0NBQ3hCO0FBQ0Q7O0dBRUcsd0JBQXdCO0dBQ3hCLGNBQWM7R0FDZCxnQkFBZ0I7R0FDaEIsbUJBQW1CO0dBQ25CLHNCQUFzQjtFQUN2QjtBQUNEO0dBQ0UseUJBQXlCO0dBQ3pCLG9CQUFvQjtFQUNyQjtBQUNEO0tBQ0ksa0JBQWtCO0tBQ2xCLHFCQUFxQjtFQUN4QiIsImZpbGUiOiIuLi9zcmMvYXBwL3F1b3RlL3F1b3RlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm94e1xuXG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGJvcmRlci1ib3R0b206IFx0ICM4MDQwMDAgc29saWQ7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBwYWRkaW5nLXRvcDogMjVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMzVweDtcbiAgICBtYXJnaW46MjBweDtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG4uY29udGFpbmVyIHtcbiBcbiAgIGhlaWdodDoxMDAlO1xuICBcbiAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgIHBhZGRpbmctYm90dG9tOjI1cHg7XG4gICBmb250LWZhbWlseTogQXJpYWwsaGVsdmV0aWNhO1xuICAgZm9udC1zaXplOiAyMHB4O1xuICAgbWFyZ2luOiAwIGF1dG87XG4gICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG4uZ3JpZC1jb250YWluZXIge1xuICAgZGlzcGxheTogZ3JpZDtcbiAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xuICAgcGFkZGluZzogMTBweDtcbiAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5ncmlkLWl0ZW0ge1xuXG4gICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgIHBhZGRpbmc6IDIwcHg7XG4gICBmb250LXNpemU6IDMwcHg7XG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gfVxuIC5idHR7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiNiMzAwNDc7XG4gICBib3JkZXItcmFkaXVzOiAyMHB4O1xuIH1cbiBoM3tcbiAgICAgcGFkZGluZy10b3A6IDI1cHg7XG4gICAgIHBhZGRpbmctYm90dG9tOiAyNXB4O1xuIH0iXX0= */"

/***/ }),

/***/ "./src/app/quote/quote.component.html":
/*!********************************************!*\
  !*** ./src/app/quote/quote.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h3>Best Quotes Ever! </h3>\n<div class=\"grid-container\">\n    <div class=\"grid-item\">\n        <ul>\n            <div class=\"box\" *ngFor='let quote of quotes ; let i = index'>\n             {{quote.title}} <br>\n             <button class=\"btt\" (click)='toogleDetails(i)'>View Quote</button>\n             <app-quote-details *ngIf=\"quote.showDescription\" [quote] ='quote' (isComplete)= 'completeQuote($event,i)' (toDelete)= 'deleteQuote($event,i)'></app-quote-details>\n            </div>\n          </ul>\n    </div>\n    <div class=\"grid-item\">\n        <app-quote-form (addQuote) = \"addNewQuote($event)\"></app-quote-form>\n    </div>\n</div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/quote/quote.component.ts":
/*!******************************************!*\
  !*** ./src/app/quote/quote.component.ts ***!
  \******************************************/
/*! exports provided: QuoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteComponent", function() { return QuoteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _quote__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../quote */ "./src/app/quote.ts");



var QuoteComponent = /** @class */ (function () {
    function QuoteComponent() {
        this.quotes = [
            new _quote__WEBPACK_IMPORTED_MODULE_2__["Quote"](1, 'Life', 'My life is my message', ' Mahatma Gandhi', new Date(2018, 3, 14)),
            new _quote__WEBPACK_IMPORTED_MODULE_2__["Quote"](2, 'Life', 'My life is my message', ' Mahatma Gandhi', new Date(2018, 6, 9)),
            new _quote__WEBPACK_IMPORTED_MODULE_2__["Quote"](3, 'Life', 'My life is my message', ' Mahatma Gandhi', new Date(2018, 7, 12)),
            new _quote__WEBPACK_IMPORTED_MODULE_2__["Quote"](4, 'Life', 'My life is my message', ' Mahatma Gandhi', new Date(2018, 4, 18)),
            new _quote__WEBPACK_IMPORTED_MODULE_2__["Quote"](5, 'Life', 'My life is my message', ' Mahatma Gandhi', new Date(2018, 2, 14)),
            new _quote__WEBPACK_IMPORTED_MODULE_2__["Quote"](6, 'Life', 'My life is my message', ' Mahatma Gandhi', new Date(2018, 11, 14)),
            new _quote__WEBPACK_IMPORTED_MODULE_2__["Quote"](7, 'Life', 'My life is my message', ' Mahatma Gandhi', new Date(2019, 0, 10)),
        ];
    }
    QuoteComponent.prototype.toogleDetails = function (index) {
        this.quotes[index].showDescription = !this.quotes[index].showDescription;
    };
    QuoteComponent.prototype.completeQuote = function (isComplete, index) {
        this.quotes[index].showDescription = !this.quotes[index].showDescription;
    };
    QuoteComponent.prototype.deleteQuote = function (toDelete, index) {
        if (toDelete) {
            var toDelete_1 = confirm("Are you sure you want to delete " + this.quotes[index].title);
            if (toDelete_1) {
                this.quotes.splice(index, 1);
            }
        }
    };
    QuoteComponent.prototype.addNewQuote = function (quote) {
        var quoteLength = this.quotes.length;
        quote.completeDate = new Date(quote.completeDate);
        this.quotes.push(quote);
    };
    QuoteComponent.prototype.ngOnInit = function () {
    };
    QuoteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-quote',
            template: __webpack_require__(/*! ./quote.component.html */ "./src/app/quote/quote.component.html"),
            styles: [__webpack_require__(/*! ./quote.component.css */ "./src/app/quote/quote.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], QuoteComponent);
    return QuoteComponent;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/AbbyShabi/Desktop/moringa/Quotes/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map