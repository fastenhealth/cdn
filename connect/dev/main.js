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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_elements__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/elements */ 4555);
/* harmony import */ var _fasten_stitch_fasten_stitch_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fasten-stitch/fasten-stitch.component */ 1003);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _components_brand_search_brand_search_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/brand-search/brand-search.component */ 4499);
/* harmony import */ var _components_portal_connect_portal_connect_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/portal-connect/portal-connect.component */ 5714);
/* harmony import */ var _directives_image_fallback_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./directives/image-fallback.directive */ 396);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);












class AppModule {
    constructor(injector) {
        const el = (0,_angular_elements__WEBPACK_IMPORTED_MODULE_4__.createCustomElement)(_fasten_stitch_fasten_stitch_component__WEBPACK_IMPORTED_MODULE_0__.FastenStitchComponent, { injector });
        customElements.define('fasten-stitch', el);
    }
    ngDoBootstrap() { }
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injector)); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppModule });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_fasten_stitch_fasten_stitch_component__WEBPACK_IMPORTED_MODULE_0__.FastenStitchComponent,
        _components_brand_search_brand_search_component__WEBPACK_IMPORTED_MODULE_1__.BrandSearchComponent,
        _components_portal_connect_portal_connect_component__WEBPACK_IMPORTED_MODULE_2__.PortalConnectComponent,
        _directives_image_fallback_directive__WEBPACK_IMPORTED_MODULE_3__.ImageFallbackDirective], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule] }); })();
_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetComponentScope"](_fasten_stitch_fasten_stitch_component__WEBPACK_IMPORTED_MODULE_0__.FastenStitchComponent, [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _components_brand_search_brand_search_component__WEBPACK_IMPORTED_MODULE_1__.BrandSearchComponent,
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _models_search_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/search-filter */ 6035);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants */ 4854);
/* harmony import */ var _services_lighthouse_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/lighthouse.service */ 6591);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _directives_image_fallback_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../directives/image-fallback.directive */ 396);









function BrandSearchComponent_li_12_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 13)(1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BrandSearchComponent_li_12_Template_div_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3); const brand_r1 = restoredCtx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.selectBrand(brand_r1.brand)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 17)(5, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const brand_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("src", "https://cdn.fastenhealth.com/logos/sources/", brand_r1.brand.id, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", brand_r1.brand.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", brand_r1.brand.brand_website, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", brand_r1.brand == null ? null : brand_r1.brand.portals == null ? null : brand_r1.brand.portals.length, " ", (brand_r1.brand == null ? null : brand_r1.brand.portals == null ? null : brand_r1.brand.portals.length) == 1 ? "portal" : "portals", " ");
} }
class BrandSearchComponent {
    constructor(lighthouseApi) {
        this.lighthouseApi = lighthouseApi;
        this.apiMode = _constants__WEBPACK_IMPORTED_MODULE_1__.ApiMode.Test;
        this.brandChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
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
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(null);
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
BrandSearchComponent.ɵfac = function BrandSearchComponent_Factory(t) { return new (t || BrandSearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_lighthouse_service__WEBPACK_IMPORTED_MODULE_2__.LighthouseService)); };
BrandSearchComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: BrandSearchComponent, selectors: [["app-brand-search"]], inputs: { brand: "brand", apiMode: "apiMode" }, outputs: { brandChange: "brandChange" }, decls: 18, vars: 2, consts: [["action", "#"], [1, "grid", "gap-4", "mb-4", "sm:grid-cols-2"], [1, "sm:col-span-2"], ["type", "text", "name", "name", "id", "name", "placeholder", "Ex. HCA Healthcare, Ascension, Common Spirit, Trinity, LifePoint Health", 1, "bg-gray-50", "border", "border-gray-300", "text-gray-900", "text-sm", "rounded-lg", "focus:ring-primary-600", "focus:border-primary-600", "block", "w-full", "p-2.5", "dark:bg-gray-700", "dark:border-gray-600", "dark:placeholder-gray-400", "dark:text-white", "dark:focus:ring-primary-500", "dark:focus:border-primary-500", 3, "ngModel", "ngModelChange", "keyup"], [1, "hidden", "flex", "items-center", "justify-between", "mb-4"], [1, "leading-none", "text-gray-900", "dark:text-white"], ["href", "#", 1, "text-sm", "font-medium", "text-blue-600", "hover:underline", "dark:text-blue-500"], [1, "flow-root"], ["role", "list", 1, "divide-y", "divide-gray-200", "dark:divide-gray-700", "min-h-80", "max-h-80", "overflow-auto"], ["class", "py-3 sm:py-4", 4, "ngFor", "ngForOf"], [1, "flex", "justify-end", "space-x-4"], [1, "font-light", "text-xs"], ["target", "_blank", "href", "https://www.fastenhealth.com", 1, "underline"], [1, "py-3", "sm:py-4"], [1, "flex", "items-center", 3, "click"], [1, "flex-shrink-0"], ["imageFallback", "", 1, "w-10", "max-h-8", 3, "src"], [1, "flex-1", "min-w-0", "ms-4"], [1, "text-sm", "font-medium", "text-gray-900", "truncate", "dark:text-white"], [1, "text-sm", "text-gray-500", "truncate", "dark:text-gray-400"], [1, "bg-blue-100", "text-blue-800", "text-xs", "font-medium", "me-2", "px-2.5", "py-0.5", "rounded", "dark:bg-blue-900", "dark:text-blue-300"]], template: function BrandSearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "form", 0)(1, "div", 1)(2, "div", 2)(3, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function BrandSearchComponent_Template_input_ngModelChange_3_listener($event) { return ctx.filter.query = $event; })("keyup", function BrandSearchComponent_Template_input_keyup_3_listener() { return ctx.querySources(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 2)(5, "div", 4)(6, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Popular");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, " View all ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 7)(11, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, BrandSearchComponent_li_12_Template, 11, 5, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 10)(14, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Powered by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Fasten Connect");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.filter.query);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.lighthouseBrandList);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgForm, _directives_image_fallback_directive__WEBPACK_IMPORTED_MODULE_3__.ImageFallbackDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJicmFuZC1zZWFyY2guY29tcG9uZW50LmNzcyJ9 */"] });


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
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants */ 4854);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_lighthouse_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/lighthouse.service */ 6591);
/* harmony import */ var _services_connect_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/connect.service */ 4543);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _directives_image_fallback_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../directives/image-fallback.directive */ 396);







function PortalConnectComponent_ng_container_34_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li")(1, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PortalConnectComponent_ng_container_34_li_1_Template_a_click_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const endpoint_r3 = restoredCtx.$implicit;
      const portal_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r4.connectHandler($event, ctx_r4.brand.id, portal_r1.id, endpoint_r3.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const endpoint_r3 = ctx.$implicit;
    const portal_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](portal_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](endpoint_r3.platform_type);
  }
}
function PortalConnectComponent_ng_container_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, PortalConnectComponent_ng_container_34_li_1_Template, 6, 2, "li", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const portal_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", portal_r1 == null ? null : portal_r1.endpoints);
  }
}
class PortalConnectComponent {
  constructor(lighthouseApi, connectApi) {
    this.lighthouseApi = lighthouseApi;
    this.connectApi = connectApi;
    this.apiMode = _constants__WEBPACK_IMPORTED_MODULE_0__.ApiMode.Test;
    this.connectMode = _constants__WEBPACK_IMPORTED_MODULE_0__.ConnectMode.Redirect;
    this.reconnectOrgConnectionId = null;
  }
  ngOnInit() {}
  connectHandler($event, brandId, portalId, endpointId) {
    $event.currentTarget.disabled = true;
    this.connectApi.connectWithRedirect(this.publicId, brandId, portalId, endpointId, this.reconnectOrgConnectionId, this.connectMode).subscribe(orgConnectionCallbackData => {
      console.log(orgConnectionCallbackData);
      if (!orgConnectionCallbackData) {
        return; //wait for redirect
      }
      //Note: this code will only run when this.connectMode == popup
      //when connectMode == 'redirect', the user is redirected in the same window, and this code is never executed.
      // close the modal after sending an event to the parent with this payload
      // this.modalService.dismissAll()
      //
      // //redirect the browser back to this page with the code in the query string parameters
      // this.lighthouseApi.redirectWithDesktopCode(desktopRedirectData.state, desktopRedirectData.codeData)
    });
    // this.lighthouseApi.getLighthouseSource(this.apiMode, endpointId)
    //   .then(async (sourceMetadata: LighthouseSourceMetadata) => {
    //     sourceMetadata.brand_id = brandId
    //     sourceMetadata.portal_id = portalId
    //
    //     console.log(sourceMetadata);
    //     let authorizationUrl = await this.lighthouseApi.generateSourceAuthorizeUrl(sourceMetadata)
    //
    //     console.log('authorize url:', authorizationUrl.toString());
    //     // redirect to lighthouse with uri's (or open a new window in desktop mode)
    //     this.lighthouseApi.redirectWithOriginAndDestination(this.apiMode, authorizationUrl.toString(), sourceMetadata).subscribe((desktopRedirectData) => {
    //       if(!desktopRedirectData){
    //         return //wait for redirect
    //       }
    //     })
    //   });
  }
}
PortalConnectComponent.ɵfac = function PortalConnectComponent_Factory(t) {
  return new (t || PortalConnectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_lighthouse_service__WEBPACK_IMPORTED_MODULE_1__.LighthouseService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_connect_service__WEBPACK_IMPORTED_MODULE_2__.ConnectService));
};
PortalConnectComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: PortalConnectComponent,
  selectors: [["app-portal-connect"]],
  inputs: {
    brand: "brand",
    apiMode: "apiMode",
    org: "org",
    publicId: "publicId",
    connectMode: "connectMode",
    reconnectOrgConnectionId: "reconnectOrgConnectionId"
  },
  decls: 40,
  vars: 4,
  consts: [["action", "#"], [1, "grid", "gap-4", "mb-4", "sm:grid-cols-8"], [1, "flex", "justify-between", "sm:col-span-6", "sm:col-start-2"], [1, "relative", "w-20", "h-20", "overflow-hidden", "bg-gray-100", "rounded-full", "dark:bg-gray-600"], ["imageFallback", "", 1, "w-20", "max-h-20", "inline-block", "align-middle", 3, "src"], [1, "flex", "items-center", "overflow-hidden", "bg-gray-100", "rounded-full", "dark:bg-gray-600"], ["src", "https://cdn.fastenhealth.com/logos/sources/fasten.png", 1, "w-20", "h-20", "p-1", "rounded-full", "ring-2", "ring-gray-300", "dark:ring-gray-500"], [1, "sm:col-span-6", "sm:col-start-2"], [1, "text-lg", "font-light", "text-center", "text-gray-900", "dark:text-white"], [1, "text-sm", "font-medium", "text-gray-900", "bg-white", "border", "border-gray-200", "rounded-lg", "dark:bg-gray-700", "dark:border-gray-600", "dark:text-white"], [1, "w-full", "px-4", "py-2", "border-b", "border-gray-200", "rounded-t-lg", "dark:border-gray-600"], [1, "flex", "items-center", "space-x-4", "rtl:space-x-reverse"], [1, "flex-shrink-0"], ["aria-hidden", "true", "xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", 1, "w-6", "h-6", "text-gray-800", "dark:text-white"], ["stroke", "currentColor", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M9.5 11.5 11 13l4-3.5M12 20A16.4 16.4 0 0 1 5 6.7L12 4l7 2.7A16.7 16.7 0 0 1 12 20Z"], [1, "flex-1", "min-w-0"], [1, "text-sm", "font-light", "text-gray-900", "dark:text-white"], [1, "w-full", "px-4", "py-2", "border-b", "border-gray-200", "dark:border-gray-600"], ["stroke", "currentColor", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 14v3m-3-6V7a3 3 0 1 1 6 0v4m-8 0h10c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1H7a1 1 0 0 1-1-1v-7c0-.6.4-1 1-1Z"], [1, "sm:col-span-8"], [1, "my-4", "space-y-3"], [4, "ngFor", "ngForOf"], [1, "flex", "justify-end", "space-x-4"], [1, "font-light", "text-xs"], ["target", "_blank", "href", "https://www.fastenhealth.com", 1, "underline"], [1, "cursor-pointer", "flex", "items-center", "p-3", "text-base", "font-bold", "text-gray-900", "rounded-lg", "bg-gray-50", "hover:bg-gray-100", "group", "hover:shadow", "dark:bg-gray-600", "dark:hover:bg-gray-500", "dark:text-white", 3, "click"], [1, "flex-1", "ms-3", "whitespace-nowrap"], [1, "inline-flex", "items-center", "justify-center", "px-2", "py-0.5", "ms-3", "text-xs", "font-medium", "text-gray-500", "bg-gray-200", "rounded", "dark:bg-gray-700", "dark:text-gray-400"]],
  template: function PortalConnectComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "form", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "img", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "img", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "img", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 7)(10, "h3", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Fasten Connect");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, " to link your medical records ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "ul", 9)(16, "li", 10)(17, "div", 11)(18, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "svg", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "path", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 15)(22, "p", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, " Fasten lets you securely connect your medical records in seconds ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "li", 17)(25, "div", 11)(26, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "svg", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](28, "path", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 15)(30, "p", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, " Fasten doesn't sell your personal info, and will only use it with your permission. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 19)(33, "ul", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](34, PortalConnectComponent_ng_container_34_Template, 2, 1, "ng-container", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "div", 22)(36, "p", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, "Powered by ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "a", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, "Fasten Connect");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("src", ctx.org == null ? null : ctx.org.logo_uri, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("src", "https://cdn.fastenhealth.com/logos/sources/", ctx.brand.id, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.org == null ? null : ctx.org.name, " uses ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.brand == null ? null : ctx.brand.portals);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm, _directives_image_fallback_directive__WEBPACK_IMPORTED_MODULE_3__.ImageFallbackDirective],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3J0YWwtY29ubmVjdC5jb21wb25lbnQuY3NzIn0= */"]
});

/***/ }),

/***/ 4854:
/*!******************************!*\
  !*** ./src/app/constants.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiMode": () => (/* binding */ ApiMode),
/* harmony export */   "ConnectMode": () => (/* binding */ ConnectMode),
/* harmony export */   "ConnectWindowTimeout": () => (/* binding */ ConnectWindowTimeout)
/* harmony export */ });
var ApiMode;
(function (ApiMode) {
    ApiMode["Live"] = "live";
    ApiMode["Test"] = "test";
})(ApiMode || (ApiMode = {}));
var ConnectMode;
(function (ConnectMode) {
    ConnectMode["Redirect"] = "redirect";
    ConnectMode["Popup"] = "popup";
})(ConnectMode || (ConnectMode = {}));
const ConnectWindowTimeout = 24 * 5000; //wait 2 minutes (5 * 24 = 120)


/***/ }),

/***/ 396:
/*!********************************************************!*\
  !*** ./src/app/directives/image-fallback.directive.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageFallbackDirective": () => (/* binding */ ImageFallbackDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);


const DEFAULT_IMAGE_FALLBACK_PATH = 'https://cdn.fastenhealth.com/images/no-image.svg';
class ImageFallbackDirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
    }
    loadFallbackOnError() {
        // Check to see if we have already tried to load the fallback image.
        // Avoids endless loop if for some reason fallback image is missing. Just accept the broken image.
        if (this.path(this.elementRef.nativeElement.src) == this.path(this.fallbackSrc())) {
            return;
        }
        this.elementRef.nativeElement.src = this.fallbackSrc();
    }
    fallbackSrc() {
        return this.imageFallback || DEFAULT_IMAGE_FALLBACK_PATH;
    }
    path(urlString) {
        // remove http(s) and domain
        return urlString.replace(/^https?:\/\/[^\/]*/, '');
    }
}
ImageFallbackDirective.ɵfac = function ImageFallbackDirective_Factory(t) { return new (t || ImageFallbackDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef)); };
ImageFallbackDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ImageFallbackDirective, selectors: [["img", "imageFallback", ""]], hostBindings: function ImageFallbackDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("error", function ImageFallbackDirective_error_HostBindingHandler() { return ctx.loadFallbackOnError(); });
    } }, inputs: { imageFallback: "imageFallback" } });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_connect_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/connect.service */ 4543);




function FastenStitchComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Share Records ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function FastenStitchComponent_h3_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h3", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Select a healthcare institution ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function FastenStitchComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h3", 15)(1, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FastenStitchComponent_ng_template_10_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r8.selectedBrand = null); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "svg", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "path", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r4.selectedBrand.name, " ");
} }
function FastenStitchComponent_app_brand_search_17_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-brand-search", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("brandChange", function FastenStitchComponent_app_brand_search_17_Template_app_brand_search_brandChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r10.selectedBrand = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("brand", ctx_r5.selectedBrand)("apiMode", ctx_r5.apiMode);
} }
function FastenStitchComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-portal-connect", 20);
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("org", ctx_r7.org)("publicId", ctx_r7.publicId)("brand", ctx_r7.selectedBrand)("apiMode", ctx_r7.apiMode)("connectMode", ctx_r7.connectMode)("reconnectOrgConnectionId", ctx_r7.reconnectOrgConnectionId);
} }
const _c0 = ["*"];
class SourceListItem {
}
class FastenStitchComponent {
    constructor(connectApi) {
        this.connectApi = connectApi;
        this.publicId = ''; //validate
        this.connectMode = _constants__WEBPACK_IMPORTED_MODULE_1__.ConnectMode.Redirect;
        this.reconnectOrgConnectionId = null;
        this.apiMode = _constants__WEBPACK_IMPORTED_MODULE_1__.ApiMode.Test;
        this.selectedBrand = undefined;
    }
    ngOnInit() {
        (0,flowbite__WEBPACK_IMPORTED_MODULE_0__.initFlowbite)();
        let publicIdParts = this.publicId.split('_');
        if (publicIdParts.length == 3 && publicIdParts[1] == _constants__WEBPACK_IMPORTED_MODULE_1__.ApiMode.Live) {
            this.apiMode = _constants__WEBPACK_IMPORTED_MODULE_1__.ApiMode.Live;
        }
        console.log(this.publicId, publicIdParts, this.apiMode);
        this.connectApi.getOrgByPublicId(this.publicId).subscribe((org) => {
            this.org = org;
        });
    }
}
FastenStitchComponent.ɵfac = function FastenStitchComponent_Factory(t) { return new (t || FastenStitchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_connect_service__WEBPACK_IMPORTED_MODULE_2__.ConnectService)); };
FastenStitchComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: FastenStitchComponent, selectors: [["fasten-stitch"]], inputs: { publicId: ["public-id", "publicId"], connectMode: ["connect-mode", "connectMode"], reconnectOrgConnectionId: ["reconnect-org-connection-id", "reconnectOrgConnectionId"] }, ngContentSelectors: _c0, decls: 20, vars: 5, consts: [["data-modal-target", "defaultModal", "data-modal-toggle", "defaultModal", "type", "button", 1, "block", "text-white", "bg-blue-700", "hover:bg-blue-800", "focus:ring-4", "focus:outline-none", "focus:ring-blue-300", "font-medium", "rounded-lg", "text-sm", "px-5", "py-2.5", "text-center", "dark:bg-blue-600", "dark:hover:bg-blue-700", "dark:focus:ring-blue-800"], ["ref", ""], [4, "ngIf"], ["id", "defaultModal", "tabindex", "-1", "aria-hidden", "true", 1, "fixed", "top-0", "left-0", "right-0", "z-50", "hidden", "w-full", "p-4", "overflow-x-hidden", "overflow-y-auto", "md:inset-0", "h-[calc(100%-1rem)]", "max-h-full"], [1, "relative", "p-4", "w-full", "max-w-2xl", "h-full", "md:h-auto"], [1, "relative", "p-4", "bg-white", "rounded-lg", "shadow", "dark:bg-gray-800", "sm:p-5"], [1, "flex", "justify-between", "items-center", "pb-4", "mb-4", "rounded-t", "border-b", "sm:mb-5", "dark:border-gray-600"], ["class", "text-lg font-semibold text-gray-900 dark:text-white", 4, "ngIf", "ngIfElse"], ["brandName", ""], ["type", "button", "data-modal-toggle", "defaultModal", 1, "text-gray-400", "bg-transparent", "hover:bg-gray-200", "hover:text-gray-900", "rounded-lg", "text-sm", "p-1.5", "ml-auto", "inline-flex", "items-center", "dark:hover:bg-gray-600", "dark:hover:text-white"], ["aria-hidden", "true", "fill", "currentColor", "viewBox", "0 0 20 20", "xmlns", "http://www.w3.org/2000/svg", 1, "w-5", "h-5"], ["fill-rule", "evenodd", "d", "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z", "clip-rule", "evenodd"], [1, "sr-only"], [3, "brand", "apiMode", "brandChange", 4, "ngIf", "ngIfElse"], ["portalConnect", ""], [1, "text-lg", "font-semibold", "text-gray-900", "dark:text-white"], ["type", "button", 1, "text-gray-400", "bg-transparent", "hover:bg-gray-200", "hover:text-gray-900", "rounded-lg", "text-sm", "p-1.5", "ml-auto", "inline-flex", "items-center", "dark:hover:bg-gray-600", "dark:hover:text-white", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", 1, "w-5", "h-5", "rtl:rotate-180"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"], [3, "brand", "apiMode", "brandChange"], [3, "org", "publicId", "brand", "apiMode", "connectMode", "reconnectOrgConnectionId"]], template: function FastenStitchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 0)(1, "div", null, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, FastenStitchComponent_span_4_Template, 2, 0, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 3)(6, "div", 4)(7, "div", 5)(8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, FastenStitchComponent_h3_9_Template, 2, 0, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, FastenStitchComponent_ng_template_10_Template, 7, 1, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "svg", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "path", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Close modal");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, FastenStitchComponent_app_brand_search_17_Template, 1, 2, "app-brand-search", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, FastenStitchComponent_ng_template_18_Template, 1, 6, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](11);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !_r0.hasChildNodes());
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.selectedBrand)("ngIfElse", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.selectedBrand)("ngIfElse", _r6);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmYXN0ZW4tc3RpdGNoLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 8865:
/*!***************************************************!*\
  !*** ./src/app/models/lighthouse/source-state.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SourceState": () => (/* binding */ SourceState)
/* harmony export */ });
class SourceState {
}


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

/***/ 4543:
/*!*********************************************!*\
  !*** ./src/app/services/connect.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConnectService": () => (/* binding */ ConnectService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 3280);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 7580);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 116);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 155);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 3158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 5474);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 2340);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ 4854);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 8987);





class ConnectService {
    constructor(_httpClient) {
        this._httpClient = _httpClient;
    }
    getOrgByPublicId(publicId) {
        let queryParams = {};
        queryParams['public_id'] = publicId;
        return this._httpClient.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.connect_api_endpoint_base}/bridge/org`, { params: queryParams })
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((response) => {
            console.log("Organization", response);
            return response.data;
        }));
    }
    connectWithRedirect(publicId, brandId, portalId, endpointId, reconnectOrgConnectionId, connectMode) {
        const redirectUrlParts = new URL(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.connect_api_endpoint_base}/bridge/connect`);
        const redirectParams = new URLSearchParams();
        redirectParams.set("public_id", publicId);
        redirectParams.set("brand_id", brandId);
        redirectParams.set("portal_id", portalId);
        redirectParams.set("endpoint_id", endpointId);
        if (reconnectOrgConnectionId) {
            redirectParams.set("reconnect_org_connection_id", reconnectOrgConnectionId);
        }
        if (connectMode) {
            redirectParams.set("connect_mode", connectMode);
        }
        redirectUrlParts.search = redirectParams.toString();
        console.log(redirectUrlParts.toString());
        //if we're in popup mode, we can open a new window, rather than redirecting the current window (which is an app frame)
        if (connectMode == _constants__WEBPACK_IMPORTED_MODULE_1__.ConnectMode.Popup) {
            //open a external url in a new window
            let openedWindow = window.open(redirectUrlParts.toString(), "_blank");
            return this.waitForOrgConnectionOrTimeout(openedWindow);
        }
        else {
            //redirect to the url in the same window
            window.location.href = redirectUrlParts.toString();
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(null); //should never happen
        }
    }
    waitForOrgConnectionOrTimeout(openedWindow) {
        console.log(`waiting for postMessage notification from popup window`);
        //new code to listen to post message
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.fromEvent)(window, 'message')
            .pipe(
        //throw an error if we wait more than 2 minutes (this will close the window)
        (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.timeout)(_constants__WEBPACK_IMPORTED_MODULE_1__.ConnectWindowTimeout), 
        //make sure we're only listening to events from the "opened" window.
        (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.filter)((event) => event.source == openedWindow), 
        //after filtering, we should only have one event to handle.
        (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.first)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((event) => {
            console.log(`received postMessage notification from popup window & sending acknowledgment`);
            // @ts-ignore
            event.source.postMessage(JSON.stringify({ close: true }), event.origin);
            console.log("postmessage data", event.data);
            return JSON.parse(event.data);
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.catchError)((err) => {
            console.warn(`timed out waiting for notification from popup (${_constants__WEBPACK_IMPORTED_MODULE_1__.ConnectWindowTimeout / 1000}s), closing window`);
            openedWindow.self.close();
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.throwError)(err);
        }));
    }
}
ConnectService.ɵfac = function ConnectService_Factory(t) { return new (t || ConnectService)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClient)); };
ConnectService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjectable"]({ token: ConnectService, factory: ConnectService.ɵfac, providedIn: 'root' });


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
/* harmony import */ var _home_runner_work_fasten_connect_stitch_fasten_connect_stitch_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ 4854);
/* harmony import */ var _models_lighthouse_source_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/lighthouse/source-state */ 8865);
/* harmony import */ var _panva_oauth4webapi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @panva/oauth4webapi */ 8103);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 8987);








class LighthouseService {
  constructor(_httpClient) {
    this._httpClient = _httpClient;
  }
  searchLighthouseSources(apiMode, filter) {
    if ((typeof filter.searchAfter === 'string' || filter.searchAfter instanceof String) && filter.searchAfter.length > 0) {
      filter.searchAfter = filter.searchAfter.split(',');
    } else {
      filter.searchAfter = [];
    }
    const endpointUrl = new URL(`${this.getLighthouseEndpoint(apiMode)}/search`);
    return this._httpClient.post(endpointUrl.toString(), filter).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(response => {
      console.log("Metadata RESPONSE", response);
      return response.data;
    }));
  }
  getLighthouseSource(apiMode, endpointId) {
    var _this = this;
    return (0,_home_runner_work_fasten_connect_stitch_fasten_connect_stitch_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this._httpClient.get(`${_this.getLighthouseEndpoint(apiMode)}/connect/${endpointId}`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.map)(response => {
        return response.data;
      })).toPromise();
    })();
  }
  generateSourceAuthorizeUrl(lighthouseSource, reconnectSourceId) {
    var _this2 = this;
    return (0,_home_runner_work_fasten_connect_stitch_fasten_connect_stitch_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const state = _this2.uuidV4();
      let sourceStateInfo = new _models_lighthouse_source_state__WEBPACK_IMPORTED_MODULE_2__.SourceState();
      sourceStateInfo.state = state;
      sourceStateInfo.endpoint_id = lighthouseSource.id;
      sourceStateInfo.portal_id = lighthouseSource.portal_id;
      sourceStateInfo.brand_id = lighthouseSource.brand_id;
      if (reconnectSourceId) {
        //if the source already exists, and we want to re-connect it (because of an expiration), we need to pass the existing source id
        sourceStateInfo.reconnect_source_id = reconnectSourceId;
      }
      // generate the authorization url
      const authorizationUrl = new URL(lighthouseSource.authorization_endpoint);
      authorizationUrl.searchParams.set('redirect_uri', lighthouseSource.redirect_uri);
      authorizationUrl.searchParams.set('response_type', lighthouseSource.response_types_supported[0]);
      authorizationUrl.searchParams.set('response_mode', lighthouseSource.response_modes_supported[0]);
      authorizationUrl.searchParams.set('state', state);
      authorizationUrl.searchParams.set('client_id', lighthouseSource.client_id);
      if (lighthouseSource.scopes_supported && lighthouseSource.scopes_supported.length) {
        authorizationUrl.searchParams.set('scope', lighthouseSource.scopes_supported.join(' '));
      } else {
        authorizationUrl.searchParams.set('scope', '');
      }
      if (lighthouseSource.aud) {
        authorizationUrl.searchParams.set('aud', lighthouseSource.aud);
      }
      //this is for providers that support CORS and PKCE (public client auth)
      if (!lighthouseSource.confidential || (lighthouseSource.code_challenge_methods_supported || []).length > 0) {
        // https://github.com/panva/oauth4webapi/blob/8eba19eac408bdec5c1fe8abac2710c50bfadcc3/examples/public.ts
        const codeVerifier = _panva_oauth4webapi__WEBPACK_IMPORTED_MODULE_5__.generateRandomCodeVerifier();
        const codeChallenge = yield _panva_oauth4webapi__WEBPACK_IMPORTED_MODULE_5__.calculatePKCECodeChallenge(codeVerifier);
        const codeChallengeMethod = lighthouseSource.code_challenge_methods_supported?.[0] || 'S256';
        sourceStateInfo.code_verifier = codeVerifier;
        sourceStateInfo.code_challenge = codeChallenge;
        sourceStateInfo.code_challenge_method = codeChallengeMethod;
        authorizationUrl.searchParams.set('code_challenge', codeChallenge);
        authorizationUrl.searchParams.set('code_challenge_method', codeChallengeMethod);
      }
      //store the source state info
      _this2.storeSourceState(state, sourceStateInfo);
      return authorizationUrl;
    })();
  }
  redirectWithOriginAndDestination(apiMode, destUrl, redirectOpts) {
    const originUrlParts = new URL(window.location.href);
    //retrieve the state info from destUrl
    const destUrlParts = new URL(destUrl);
    const state = destUrlParts.searchParams.get("state");
    if (!state) {
      throw new Error("No state found in destination url");
      return null;
    }
    //path based routing
    originUrlParts.hash = ""; //reset hash in-case its present.
    originUrlParts.pathname = this.pathJoin([originUrlParts.pathname, `callback/${state}`]);
    let redirectUrl = this.pathJoin([this.getLighthouseEndpoint(apiMode), `redirect/${state}`]);
    const redirectUrlParts = new URL(redirectUrl);
    const redirectParams = new URLSearchParams();
    redirectParams.set("origin_url", originUrlParts.toString());
    redirectParams.set("dest_url", destUrl);
    redirectParams.set("desktop_mode", "false");
    redirectParams.set("brand_id", redirectOpts.brand_id);
    redirectParams.set("portal_id", redirectOpts.portal_id);
    redirectParams.set("endpoint_id", redirectOpts.id);
    redirectUrlParts.search = redirectParams.toString();
    console.log(redirectUrlParts.toString());
    //redirect to the url in the same window
    window.location.href = redirectUrlParts.toString();
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(null); //should never happen
  }
  //helpers
  getLighthouseEndpoint(apiMode) {
    return `${_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.lighthouse_api_endpoint_base}/${apiMode == _constants__WEBPACK_IMPORTED_MODULE_1__.ApiMode.Live ? 'v1' : 'sandbox'}`;
  }
  uuidV4() {
    // @ts-ignore
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c => (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16));
  }
  pathJoin(parts, sep) {
    const separator = sep || '/';
    parts = parts.map((part, index) => {
      if (index) {
        part = part.replace(new RegExp('^' + separator), '');
      }
      if (index !== parts.length - 1) {
        part = part.replace(new RegExp(separator + '$'), '');
      }
      return part;
    });
    return parts.join(separator);
  }
  storeSourceState(state, sourceStateInfo) {
    localStorage.setItem(state, JSON.stringify(sourceStateInfo));
  }
}
LighthouseService.ɵfac = function LighthouseService_Factory(t) {
  return new (t || LighthouseService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient));
};
LighthouseService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
  token: LighthouseService,
  factory: LighthouseService.ɵfac,
  providedIn: 'root'
});

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
    name: "development",
    //specify the lighthouse base that we're going to use to authenticate against all our source/providers. Must not have trailing slash
    lighthouse_api_endpoint_base: 'https://lighthouse.fastenhealth.com',
    //used to specify the api server that we're going to use (can be relative or absolute). Must not have trailing slash
    // connect_api_endpoint_base: 'https://api.connect-dev.fastenhealth.com/v1',
    // if relative, must start with /
    connect_api_endpoint_base: 'https://api.connect-dev.fastenhealth.com/v1',
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




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.name == "production") {
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