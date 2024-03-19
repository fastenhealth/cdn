"use strict";
(self["webpackChunkfasten_stitch"] = self["webpackChunkfasten_stitch"] || []).push([["main"],{

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_elements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/elements */ 4555);
/* harmony import */ var _fasten_stitch_fasten_stitch_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fasten-stitch/fasten-stitch.component */ 1003);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _components_brand_search_brand_search_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/brand-search/brand-search.component */ 4499);
/* harmony import */ var _components_portal_connect_portal_connect_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/portal-connect/portal-connect.component */ 5714);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);











class AppModule {
    constructor(injector) {
        const el = (0,_angular_elements__WEBPACK_IMPORTED_MODULE_3__.createCustomElement)(_fasten_stitch_fasten_stitch_component__WEBPACK_IMPORTED_MODULE_0__.FastenStitchComponent, { injector });
        customElements.define('fasten-stitch', el);
    }
    ngDoBootstrap() { }
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injector)); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppModule });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_fasten_stitch_fasten_stitch_component__WEBPACK_IMPORTED_MODULE_0__.FastenStitchComponent,
        _components_brand_search_brand_search_component__WEBPACK_IMPORTED_MODULE_1__.BrandSearchComponent,
        _components_portal_connect_portal_connect_component__WEBPACK_IMPORTED_MODULE_2__.PortalConnectComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule] }); })();
_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetComponentScope"](_fasten_stitch_fasten_stitch_component__WEBPACK_IMPORTED_MODULE_0__.FastenStitchComponent, [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _components_brand_search_brand_search_component__WEBPACK_IMPORTED_MODULE_1__.BrandSearchComponent,
    _components_portal_connect_portal_connect_component__WEBPACK_IMPORTED_MODULE_2__.PortalConnectComponent], []);


/***/ }),

/***/ 4499:
/*!*******************************************************************!*\
  !*** ./src/app/components/brand-search/brand-search.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BrandSearchComponent": () => (/* binding */ BrandSearchComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _models_search_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/search-filter */ 6035);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants */ 4854);
/* harmony import */ var _services_lighthouse_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/lighthouse.service */ 6591);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);








function BrandSearchComponent_li_12_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 13)(1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BrandSearchComponent_li_12_Template_div_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3); const brand_r1 = restoredCtx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.selectBrand(brand_r1.brand)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 17)(5, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const brand_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("src", "https://cdn.fastenhealth.com/logos/sources/", brand_r1.brand.id, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", brand_r1.brand.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", brand_r1.brand.brand_website, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", brand_r1.brand == null ? null : brand_r1.brand.portals == null ? null : brand_r1.brand.portals.length, " ", (brand_r1.brand == null ? null : brand_r1.brand.portals == null ? null : brand_r1.brand.portals.length) == 1 ? "portal" : "portals", " ");
} }
class BrandSearchComponent {
    constructor(lighthouseApi) {
        this.lighthouseApi = lighthouseApi;
        this.apiMode = _constants__WEBPACK_IMPORTED_MODULE_1__.ApiMode.Test;
        this.brandChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.loading = false;
        this.lighthouseBrandList = [];
        this.filter = new _models_search_filter__WEBPACK_IMPORTED_MODULE_0__.SearchFilter();
        //limits that are tied to the current result set.
        this.resultLimits = {
            totalItems: 0,
            scrollComplete: false,
            platformTypesBuckets: undefined,
            categoryBuckets: undefined
        };
    }
    ngOnInit() {
        this.querySources(true);
    }
    querySources(reset) {
        if (reset) {
            this.resetSearch();
        }
        console.log("querySources()", this.filter);
        if (this.loading) {
            console.log("already loading, ignoring querySources()");
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(null);
        }
        //TODO: pass filter to function.
        // this.location.replaceState('/dashboard','', this.filter)
        if (!this.filter) {
            this.filter = new _models_search_filter__WEBPACK_IMPORTED_MODULE_0__.SearchFilter();
            console.log("querySources() - no filter provided, using current form value", this.filter);
        }
        this.filter.fields = ["*"];
        this.loading = true;
        var searchObservable = this.lighthouseApi.searchLighthouseSources(this.apiMode, this.filter);
        searchObservable.subscribe(wrapper => {
            console.log("search sources", wrapper);
            // this.searchResults = wrapper.hits.hits;
            this.resultLimits.totalItems = wrapper.hits.total.value;
            this.lighthouseBrandList = this.lighthouseBrandList.concat(wrapper.hits.hits.map((result) => {
                return {
                    brand: result._source,
                    searchHighlights: result?.highlight?.aliases || []
                };
            }));
            //check if scroll is complete.
            if (!wrapper?.hits || !wrapper?.hits?.hits || wrapper?.hits?.hits?.length == 0 || wrapper?.hits?.total?.value == wrapper?.hits?.hits?.length) {
                console.log("SCROLL_COMPLETE!@@@@@@@@");
                this.resultLimits.scrollComplete = true;
            }
            else {
                //change the current Page (but don't cause a new query)
                console.log("SETTING NEXT SORT KEY:", wrapper.hits.hits[wrapper.hits.hits.length - 1].sort.join(','));
                this.filter.searchAfter = wrapper.hits.hits[wrapper.hits.hits.length - 1].sort.join(",");
            }
            this.loading = false;
        }, error => {
            this.loading = false;
            console.error("sources FAILED", error);
        }, () => {
            this.loading = false;
            console.log("sources finished");
        });
        return searchObservable;
    }
    selectBrand(brandItem) {
        this.brandChange.emit(brandItem);
    }
    resetSearch() {
        console.log("reset search...");
        this.lighthouseBrandList = [];
        this.filter.searchAfter = [];
        this.resultLimits = {
            totalItems: 0,
            scrollComplete: false,
            platformTypesBuckets: undefined,
            categoryBuckets: undefined
        };
    }
}
BrandSearchComponent.ɵfac = function BrandSearchComponent_Factory(t) { return new (t || BrandSearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_lighthouse_service__WEBPACK_IMPORTED_MODULE_2__.LighthouseService)); };
BrandSearchComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: BrandSearchComponent, selectors: [["app-brand-search"]], inputs: { brand: "brand", apiMode: "apiMode" }, outputs: { brandChange: "brandChange" }, decls: 18, vars: 2, consts: [["action", "#"], [1, "grid", "gap-4", "mb-4", "sm:grid-cols-2"], [1, "sm:col-span-2"], ["type", "text", "name", "name", "id", "name", "placeholder", "Ex. HCA Healthcare, Ascension, Common Spirit, Trinity, LifePoint Health", 1, "bg-gray-50", "border", "border-gray-300", "text-gray-900", "text-sm", "rounded-lg", "focus:ring-primary-600", "focus:border-primary-600", "block", "w-full", "p-2.5", "dark:bg-gray-700", "dark:border-gray-600", "dark:placeholder-gray-400", "dark:text-white", "dark:focus:ring-primary-500", "dark:focus:border-primary-500", 3, "ngModel", "ngModelChange", "keyup"], [1, "hidden", "flex", "items-center", "justify-between", "mb-4"], [1, "leading-none", "text-gray-900", "dark:text-white"], ["href", "#", 1, "text-sm", "font-medium", "text-blue-600", "hover:underline", "dark:text-blue-500"], [1, "flow-root"], ["role", "list", 1, "divide-y", "divide-gray-200", "dark:divide-gray-700", "min-h-80", "max-h-80", "overflow-auto"], ["class", "py-3 sm:py-4", 4, "ngFor", "ngForOf"], [1, "flex", "justify-end", "space-x-4"], [1, "font-light", "text-xs"], ["target", "_blank", "href", "https://www.fastenhealth.com", 1, "underline"], [1, "py-3", "sm:py-4"], [1, "flex", "items-center", 3, "click"], [1, "flex-shrink-0"], [1, "w-10", "max-h-8", 3, "src"], [1, "flex-1", "min-w-0", "ms-4"], [1, "text-sm", "font-medium", "text-gray-900", "truncate", "dark:text-white"], [1, "text-sm", "text-gray-500", "truncate", "dark:text-gray-400"], [1, "bg-blue-100", "text-blue-800", "text-xs", "font-medium", "me-2", "px-2.5", "py-0.5", "rounded", "dark:bg-blue-900", "dark:text-blue-300"]], template: function BrandSearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 0)(1, "div", 1)(2, "div", 2)(3, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function BrandSearchComponent_Template_input_ngModelChange_3_listener($event) { return ctx.filter.query = $event; })("keyup", function BrandSearchComponent_Template_input_keyup_3_listener() { return ctx.querySources(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 2)(5, "div", 4)(6, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Popular");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, " View all ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 7)(11, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, BrandSearchComponent_li_12_Template, 11, 5, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 10)(14, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Powered by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Fasten Connect");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.filter.query);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.lighthouseBrandList);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJicmFuZC1zZWFyY2guY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 5714:
/*!***********************************************************************!*\
  !*** ./src/app/components/portal-connect/portal-connect.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PortalConnectComponent": () => (/* binding */ PortalConnectComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);



function PortalConnectComponent_ng_container_49_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li")(1, "a", 40)(2, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const endpoint_r3 = ctx.$implicit;
    const portal_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](portal_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](endpoint_r3.platform_type);
} }
function PortalConnectComponent_ng_container_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PortalConnectComponent_ng_container_49_li_1_Template, 6, 2, "li", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const portal_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", portal_r1 == null ? null : portal_r1.endpoints);
} }
class PortalConnectComponent {
    constructor() { }
    ngOnInit() {
    }
}
PortalConnectComponent.ɵfac = function PortalConnectComponent_Factory(t) { return new (t || PortalConnectComponent)(); };
PortalConnectComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PortalConnectComponent, selectors: [["app-portal-connect"]], inputs: { brand: "brand" }, decls: 55, vars: 2, consts: [["action", "#"], [1, "grid", "gap-4", "mb-4", "sm:grid-cols-8"], [1, "flex", "justify-between", "sm:col-span-6", "sm:col-start-2"], [1, "relative", "w-20", "h-20", "overflow-hidden", "bg-gray-100", "rounded-full", "dark:bg-gray-600"], ["xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "version", "1.1", "viewBox", "0 0 1080 1080", 0, "xml", "space", "preserve", 1, "absolute", "w-50", "h-50", "text-gray-400", "-left-1"], ["x", "0", "y", "0", "width", "100%", "height", "100%", "fill", "transparent"], ["transform", "matrix(1 0 0 1 540 540)", "id", "accd78ea-fb00-446e-b196-ed1a7fe68ae9"], ["transform", "matrix(1 0 0 1 540 540)", "id", "cd83ce0e-f57b-4364-b223-ecb77b5a1129"], ["vector-effect", "non-scaling-stroke", "x", "-540", "y", "-540", "rx", "0", "ry", "0", "width", "1080", "height", "1080", 2, "stroke", "none", "stroke-width", "1", "stroke-dasharray", "none", "stroke-linecap", "butt", "stroke-dashoffset", "0", "stroke-linejoin", "miter", "stroke-miterlimit", "4", "fill", "rgb(255,255,255)", "fill-rule", "nonzero", "opacity", "1", "visibility", "hidden"], ["transform", "matrix(3.12 0 0 3.12 540 566.92)"], ["vector-effect", "non-scaling-stroke", "transform", " translate(-114.01, -75.59)", "d", "M 177.55021 79.33264 C 168.21895 70.01322 158.89315 60.68855 149.56574999999998 51.365719999999996 L 150.61852 35.15116 C 150.72052 33.58248 149.5316 32.228489999999994 147.96337 32.12741 L 141.05798 31.678659999999997 C 139.48975 31.576659999999997 138.13576999999998 32.765809999999995 138.034 34.33358 L 137.69817999999998 39.50499 C 135.04303 36.85098 132.38719999999998 34.19697 129.73206 31.54296 C 125.38528999999998 27.198240000000002 121.04169999999999 22.85055 116.68923999999998 18.51107 C 115.07456999999998 16.90163 113.05667999999999 16.83333 111.51850999999998 18.36741 C 105.06368999999998 24.80151 98.62731999999998 31.253140000000002 92.16657999999998 37.68177 C 92.13970999999998 37.70864 92.13105999999998 37.73072 92.10783999999998 37.75645 L 83.14426999999998 46.72025 C 83.11261999999998 46.74734 83.08620999999998 46.75736 83.05251999999997 46.79106 C 72.10248999999997 57.755210000000005 61.13742999999997 68.70547 50.179649999999974 79.66256 C 49.94058999999997 79.90116 49.71928999999997 80.17232 49.550129999999974 80.4642 C 48.241679999999974 82.71818 49.81809999999997 85.53088000000001 52.44387999999997 85.55297 C 56.80339999999997 85.5894 61.16360999999997 85.57528 65.52358999999997 85.5557 C 66.10870999999997 85.55206 66.37691999999997 85.66567 66.52194999999998 86.31386 C 67.87752999999998 92.38163 69.28296999999998 98.4371 70.67064999999998 104.49781 C 72.84926999999998 114.0103 75.03221999999998 123.52211 77.18852999999999 133.04007000000001 C 77.34722 133.73994000000002 77.64228999999999 133.92436 78.34807999999998 133.92436 C 102.14421999999999 133.90296 125.94013999999999 133.90387 149.73605999999998 133.92254 C 150.41771999999997 133.92345 150.66223999999997 133.73084 150.8157 133.05692 C 154.35536 117.50488999999999 157.92849999999999 101.95991999999998 161.46815999999998 86.40765999999999 C 161.62297999999998 85.72758999999999 161.88252999999997 85.54590999999999 162.55576 85.55023999999999 C 166.86292 85.58142999999998 171.17052999999999 85.57618999999998 175.47790999999998 85.56002999999998 C 177.37148 85.55296999999999 178.72956999999997 84.32306999999999 178.92377 82.45567999999999 C 179.05719 81.16999999999999 178.42698 80.20874999999998 177.55021 79.33265999999999 Z M 122.66093 51.64393 C 122.66116 51.64234 122.66139 51.64051 122.66161 51.63778 C 122.6689 51.62981 122.67595 51.62093 122.68324 51.61296 C 122.67732 51.62366 122.66844 51.63436 122.66093 51.64392 Z", "stroke-linecap", "round", 2, "stroke", "none", "stroke-width", "1", "stroke-dasharray", "none", "stroke-linecap", "butt", "stroke-dashoffset", "0", "stroke-linejoin", "miter", "stroke-miterlimit", "4", "fill", "rgb(25,216,197)", "fill-rule", "nonzero", "opacity", "1"], ["transform", "matrix(3.12 0 0 3.12 539.99 605.1)"], ["vector-effect", "non-scaling-stroke", "points", "22.61,-7.76 7.76,-7.76 7.76,-22.61 -7.76,-22.61 -7.76,-7.76 -22.61,-7.76 -22.61,7.76 -7.76,7.76 -7.76,22.61 7.76,22.61 7.76,7.76 22.61,7.76 22.61,-7.76 ", 2, "stroke", "none", "stroke-width", "1", "stroke-dasharray", "none", "stroke-linecap", "butt", "stroke-dashoffset", "0", "stroke-linejoin", "miter", "stroke-miterlimit", "4", "fill", "rgb(255,255,255)", "fill-rule", "nonzero", "opacity", "1"], ["transform", "matrix(3.12 0 0 3.12 625.25 377.35)"], ["vector-effect", "non-scaling-stroke", "transform", " translate(-141.33, -14.85)", "d", "M 149.19305 8.22918 C 147.32418 6.360329999999999 144.29379 6.360329999999999 142.42432 8.22918 L 141.32763 9.325849999999999 L 140.23103 8.22918 C 138.36151 6.360329999999999 135.33113 6.360329999999999 133.4623 8.22918 C 131.59343 10.09806 131.59343 13.128449999999999 133.4623 14.99794 L 134.55895 16.09459 L 141.32764 22.86332 L 148.09637 16.094590000000004 L 149.19306 14.997940000000003 C 151.06189 13.128450000000003 151.06189 10.098060000000004 149.19306 8.229180000000003 Z", "stroke-linecap", "round", 2, "stroke", "none", "stroke-width", "1", "stroke-dasharray", "none", "stroke-linecap", "butt", "stroke-dashoffset", "0", "stroke-linejoin", "miter", "stroke-miterlimit", "4", "fill", "rgb(25,216,197)", "fill-rule", "nonzero", "opacity", "1"], ["transform", "matrix(3.12 0 0 3.12 662.57 407.19)"], ["vector-effect", "non-scaling-stroke", "transform", " translate(-153.29, -24.4)", "d", "M 157.03689 21.25066 C 156.14629 20.36007 154.70217 20.36007 153.81128999999999 21.25066 L 153.28867 21.77327 L 152.76609 21.25066 C 151.87518 20.36007 150.43106999999998 20.36007 149.54048999999998 21.25066 C 148.64988999999997 22.14126 148.64988999999997 23.58538 149.54048999999998 24.47628 L 150.06309 24.99888 L 153.28867 28.22448 L 156.51427 24.99888 L 157.03689 24.47628 C 157.92747 23.58538 157.92747 22.14127 157.03689 21.25066 Z", "stroke-linecap", "round", 2, "stroke", "none", "stroke-width", "1", "stroke-dasharray", "none", "stroke-linecap", "butt", "stroke-dashoffset", "0", "stroke-linejoin", "miter", "stroke-miterlimit", "4", "fill", "rgb(25,216,197)", "fill-rule", "nonzero", "opacity", "1"], ["transform", "matrix(3.12 0 0 3.12 663.12 339.31)"], ["vector-effect", "non-scaling-stroke", "transform", " translate(-153.46, -2.65)", "d", "M 156.06247 0.46319 C 155.44487999999998 -0.15439000000000003 154.44346 -0.15439000000000003 153.82567 0.46319 L 153.46326 0.8256 L 153.10088 0.46319 C 152.48308 -0.15439000000000003 151.48165999999998 -0.15439000000000003 150.86408 0.46319 C 150.24649 1.0807799999999999 150.24649 2.0822000000000003 150.86408 2.7 L 151.22648 3.0624000000000002 L 153.46326000000002 5.299200000000001 L 155.70006 3.0624000000000007 L 156.06247000000002 2.7000000000000006 C 156.68004000000002 2.082210000000001 156.68004000000002 1.0807800000000005 156.06247000000002 0.46319000000000043 Z", "stroke-linecap", "round", 2, "stroke", "none", "stroke-width", "1", "stroke-dasharray", "none", "stroke-linecap", "butt", "stroke-dashoffset", "0", "stroke-linejoin", "miter", "stroke-miterlimit", "4", "fill", "rgb(25,216,197)", "fill-rule", "nonzero", "opacity", "1"], [1, "flex", "items-center", "overflow-hidden", "bg-gray-100", "rounded-full", "dark:bg-gray-600"], ["src", "https://cdn.fastenhealth.com/logos/sources/fasten.png", 1, "w-20", "h-20", "p-1", "rounded-full", "ring-2", "ring-gray-300", "dark:ring-gray-500"], [1, "w-20", "max-h-20", "inline-block", "align-middle", 3, "src"], [1, "sm:col-span-6", "sm:col-start-2"], [1, "text-lg", "font-light", "text-center", "text-gray-900", "dark:text-white"], [1, "text-sm", "font-medium", "text-gray-900", "bg-white", "border", "border-gray-200", "rounded-lg", "dark:bg-gray-700", "dark:border-gray-600", "dark:text-white"], [1, "w-full", "px-4", "py-2", "border-b", "border-gray-200", "rounded-t-lg", "dark:border-gray-600"], [1, "flex", "items-center", "space-x-4", "rtl:space-x-reverse"], [1, "flex-shrink-0"], ["aria-hidden", "true", "xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", 1, "w-6", "h-6", "text-gray-800", "dark:text-white"], ["stroke", "currentColor", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9.5 11.5 11 13l4-3.5M12 20A16.4 16.4 0 0 1 5 6.7L12 4l7 2.7A16.7 16.7 0 0 1 12 20Z"], [1, "flex-1", "min-w-0"], [1, "text-sm", "font-light", "text-gray-900", "dark:text-white"], [1, "w-full", "px-4", "py-2", "border-b", "border-gray-200", "dark:border-gray-600"], ["stroke", "currentColor", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 14v3m-3-6V7a3 3 0 1 1 6 0v4m-8 0h10c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1H7a1 1 0 0 1-1-1v-7c0-.6.4-1 1-1Z"], [1, "sm:col-span-8"], [1, "my-4", "space-y-3"], [4, "ngFor", "ngForOf"], [1, "flex", "justify-end", "space-x-4"], [1, "font-light", "text-xs"], ["target", "_blank", "href", "https://www.fastenhealth.com", 1, "underline"], ["href", "#", 1, "flex", "items-center", "p-3", "text-base", "font-bold", "text-gray-900", "rounded-lg", "bg-gray-50", "hover:bg-gray-100", "group", "hover:shadow", "dark:bg-gray-600", "dark:hover:bg-gray-500", "dark:text-white"], [1, "flex-1", "ms-3", "whitespace-nowrap"], [1, "inline-flex", "items-center", "justify-center", "px-2", "py-0.5", "ms-3", "text-xs", "font-medium", "text-gray-500", "bg-gray-200", "rounded", "dark:bg-gray-700", "dark:text-gray-400"]], template: function PortalConnectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "svg", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "defs")(6, "rect", 5)(7, "g", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "g", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "rect", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "g", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "g", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "polygon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "g", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "path", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "g", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "path", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "g", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "path", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 22)(25, "h3", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Acme Care uses ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Fasten Connect");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " to link your medical records ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "ul", 24)(31, "li", 25)(32, "div", 26)(33, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "svg", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "path", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 30)(37, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Fasten lets you securely connect your medical records in seconds ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li", 32)(40, "div", 26)(41, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "svg", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "path", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 30)(45, "p", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Fasten doesn't sell your personal info, and will only use it with your permission. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 34)(48, "ul", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, PortalConnectComponent_ng_container_49_Template, 2, 1, "ng-container", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 37)(51, "p", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Powered by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Fasten Connect");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "https://cdn.fastenhealth.com/logos/sources/", ctx.brand.id, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.brand == null ? null : ctx.brand.portals);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3J0YWwtY29ubmVjdC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 4854:
/*!******************************!*\
  !*** ./src/app/constants.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiMode": () => (/* binding */ ApiMode)
/* harmony export */ });
var ApiMode;
(function (ApiMode) {
    ApiMode["Live"] = "live";
    ApiMode["Test"] = "test";
})(ApiMode || (ApiMode = {}));


/***/ }),

/***/ 1003:
/*!**********************************************************!*\
  !*** ./src/app/fasten-stitch/fasten-stitch.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FastenStitchComponent": () => (/* binding */ FastenStitchComponent),
/* harmony export */   "SourceListItem": () => (/* binding */ SourceListItem)
/* harmony export */ });
/* harmony import */ var flowbite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flowbite */ 8422);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ 4854);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);



function FastenStitchComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Share Records ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function FastenStitchComponent_h3_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h3", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Select a healthcare institution ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function FastenStitchComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h3", 15)(1, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FastenStitchComponent_ng_template_10_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r8.selectedBrand = null); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "svg", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "path", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r4.selectedBrand.name, " ");
} }
function FastenStitchComponent_app_brand_search_17_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-brand-search", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("brandChange", function FastenStitchComponent_app_brand_search_17_Template_app_brand_search_brandChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r10.selectedBrand = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("brand", ctx_r5.selectedBrand)("apiMode", ctx_r5.apiMode);
} }
function FastenStitchComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-portal-connect", 20);
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("brand", ctx_r7.selectedBrand);
} }
const _c0 = ["*"];
class SourceListItem {
}
class FastenStitchComponent {
    constructor() {
        this.publicKey = ''; //validate
        this.apiMode = _constants__WEBPACK_IMPORTED_MODULE_1__.ApiMode.Test;
        this.selectedBrand = undefined;
    }
    ngOnInit() {
        (0,flowbite__WEBPACK_IMPORTED_MODULE_0__.initFlowbite)();
        let publicKeyParts = this.publicKey.split('_');
        if (publicKeyParts.length == 3 && publicKeyParts[1] == _constants__WEBPACK_IMPORTED_MODULE_1__.ApiMode.Live) {
            this.apiMode = _constants__WEBPACK_IMPORTED_MODULE_1__.ApiMode.Live;
        }
        console.log(this.publicKey, publicKeyParts, this.apiMode);
    }
}
FastenStitchComponent.ɵfac = function FastenStitchComponent_Factory(t) { return new (t || FastenStitchComponent)(); };
FastenStitchComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: FastenStitchComponent, selectors: [["fasten-stitch"]], inputs: { publicKey: ["public-key", "publicKey"] }, ngContentSelectors: _c0, decls: 20, vars: 5, consts: [["data-modal-target", "defaultModal", "data-modal-toggle", "defaultModal", "type", "button", 1, "block", "text-white", "bg-blue-700", "hover:bg-blue-800", "focus:ring-4", "focus:outline-none", "focus:ring-blue-300", "font-medium", "rounded-lg", "text-sm", "px-5", "py-2.5", "text-center", "dark:bg-blue-600", "dark:hover:bg-blue-700", "dark:focus:ring-blue-800"], ["ref", ""], [4, "ngIf"], ["id", "defaultModal", "tabindex", "-1", "aria-hidden", "true", 1, "fixed", "top-0", "left-0", "right-0", "z-50", "hidden", "w-full", "p-4", "overflow-x-hidden", "overflow-y-auto", "md:inset-0", "h-[calc(100%-1rem)]", "max-h-full"], [1, "relative", "p-4", "w-full", "max-w-2xl", "h-full", "md:h-auto"], [1, "relative", "p-4", "bg-white", "rounded-lg", "shadow", "dark:bg-gray-800", "sm:p-5"], [1, "flex", "justify-between", "items-center", "pb-4", "mb-4", "rounded-t", "border-b", "sm:mb-5", "dark:border-gray-600"], ["class", "text-lg font-semibold text-gray-900 dark:text-white", 4, "ngIf", "ngIfElse"], ["brandName", ""], ["type", "button", "data-modal-toggle", "defaultModal", 1, "text-gray-400", "bg-transparent", "hover:bg-gray-200", "hover:text-gray-900", "rounded-lg", "text-sm", "p-1.5", "ml-auto", "inline-flex", "items-center", "dark:hover:bg-gray-600", "dark:hover:text-white"], ["aria-hidden", "true", "fill", "currentColor", "viewBox", "0 0 20 20", "xmlns", "http://www.w3.org/2000/svg", 1, "w-5", "h-5"], ["fill-rule", "evenodd", "d", "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z", "clip-rule", "evenodd"], [1, "sr-only"], [3, "brand", "apiMode", "brandChange", 4, "ngIf", "ngIfElse"], ["portalConnect", ""], [1, "text-lg", "font-semibold", "text-gray-900", "dark:text-white"], ["type", "button", 1, "text-gray-400", "bg-transparent", "hover:bg-gray-200", "hover:text-gray-900", "rounded-lg", "text-sm", "p-1.5", "ml-auto", "inline-flex", "items-center", "dark:hover:bg-gray-600", "dark:hover:text-white", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", 1, "w-5", "h-5", "rtl:rotate-180"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"], [3, "brand", "apiMode", "brandChange"], [3, "brand"]], template: function FastenStitchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 0)(1, "div", null, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵprojection"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, FastenStitchComponent_span_4_Template, 2, 0, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3)(6, "div", 4)(7, "div", 5)(8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, FastenStitchComponent_h3_9_Template, 2, 0, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, FastenStitchComponent_ng_template_10_Template, 7, 1, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "svg", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "path", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Close modal");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, FastenStitchComponent_app_brand_search_17_Template, 1, 2, "app-brand-search", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, FastenStitchComponent_ng_template_18_Template, 1, 1, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](11);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !_r0.hasChildNodes());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.selectedBrand)("ngIfElse", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.selectedBrand)("ngIfElse", _r6);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmYXN0ZW4tc3RpdGNoLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 6035:
/*!*****************************************!*\
  !*** ./src/app/models/search-filter.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchFilter": () => (/* binding */ SearchFilter)
/* harmony export */ });
class SearchFilter {
    constructor() {
        //primary search terms (changes here should restart the search completely)
        this.query = "";
        //secondary search terms/facets (changes here should restart pagination)
        this.platformTypes = [];
        this.categories = [];
        this.showHidden = false;
        //pagination - this is the current page (changes here should be ignored)
        this.searchAfter = '';
        this.fields = []; //specify the fields to return. if null or empty list, return all.
    }
}


/***/ }),

/***/ 6591:
/*!************************************************!*\
  !*** ./src/app/services/lighthouse.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LighthouseService": () => (/* binding */ LighthouseService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ 4854);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);




class LighthouseService {
    constructor(_httpClient) {
        this._httpClient = _httpClient;
    }
    searchLighthouseSources(apiMode, filter) {
        if ((typeof filter.searchAfter === 'string' || filter.searchAfter instanceof String) && filter.searchAfter.length > 0) {
            filter.searchAfter = filter.searchAfter.split(',');
        }
        else {
            filter.searchAfter = [];
        }
        const endpointUrl = new URL(`https://lighthouse.fastenhealth.com/${apiMode == _constants__WEBPACK_IMPORTED_MODULE_0__.ApiMode.Live ? 'v1' : 'sandbox'}/search`);
        return this._httpClient.post(endpointUrl.toString(), filter)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)((response) => {
            console.log("Metadata RESPONSE", response);
            return response.data;
        }));
    }
}
LighthouseService.ɵfac = function LighthouseService_Factory(t) { return new (t || LighthouseService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
LighthouseService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: LighthouseService, factory: LighthouseService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
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
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map