"use strict";
(self["webpackChunkfasten_stitch"] = self["webpackChunkfasten_stitch"] || []).push([["main"],{

/***/ 2976:
/*!**********************************!*\
  !*** ./src/app/app.constants.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiMode": () => (/* binding */ ApiMode),
/* harmony export */   "ConnectMode": () => (/* binding */ ConnectMode),
/* harmony export */   "ConnectWindowTimeout": () => (/* binding */ ConnectWindowTimeout),
/* harmony export */   "ConnectionStatus": () => (/* binding */ ConnectionStatus)
/* harmony export */ });
var ApiMode;
(function (ApiMode) {
    ApiMode["Live"] = "live";
    ApiMode["Test"] = "test";
})(ApiMode || (ApiMode = {}));
var ConnectionStatus;
(function (ConnectionStatus) {
    ConnectionStatus["Authorized"] = "authorized";
    ConnectionStatus["Revoked"] = "revoked";
})(ConnectionStatus || (ConnectionStatus = {}));
var ConnectMode;
(function (ConnectMode) {
    ConnectMode["Redirect"] = "redirect";
    ConnectMode["Popup"] = "popup";
})(ConnectMode || (ConnectMode = {}));
const ConnectWindowTimeout = 24 * 5000; //wait 2 minutes (5 * 24 = 120)


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_elements__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/elements */ 4555);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ngx-infinite-scroll */ 7364);
/* harmony import */ var angular_code_input__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! angular-code-input */ 3891);
/* harmony import */ var _directives_image_fallback_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./directives/image-fallback.directive */ 396);
/* harmony import */ var _router_nav_outlet_nav_outlet_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./router/nav-outlet/nav-outlet.component */ 2227);
/* harmony import */ var _router_nav_outlet_nav_outlet_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./router/nav-outlet/nav-outlet.directive */ 9790);
/* harmony import */ var _router_nav_outlet_nav_outlet_link_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./router/nav-outlet/nav-outlet-link.directive */ 5295);
/* harmony import */ var _pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pipes/safe-html.pipe */ 1656);
/* harmony import */ var _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/spinner/spinner.component */ 4132);
/* harmony import */ var _fasten_stitch_fasten_stitch_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fasten-stitch/fasten-stitch.component */ 1003);
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ 4789);
/* harmony import */ var _pages_vault_profile_signin_vault_profile_signin_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/vault-profile-signin/vault-profile-signin.component */ 9824);
/* harmony import */ var _pages_vault_profile_signin_code_vault_profile_signin_code_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/vault-profile-signin-code/vault-profile-signin-code.component */ 5313);
/* harmony import */ var _pages_identity_verification_identity_verification_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/identity-verification/identity-verification.component */ 2427);
/* harmony import */ var _pages_health_system_search_health_system_search_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/health-system-search/health-system-search.component */ 7936);
/* harmony import */ var _pages_health_system_brand_details_health_system_brand_details_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/health-system-brand-details/health-system-brand-details.component */ 5609);
/* harmony import */ var _pages_form_health_system_request_form_health_system_request_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/form-health-system-request/form-health-system-request.component */ 4313);
/* harmony import */ var _pages_form_support_request_form_support_request_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/form-support-request/form-support-request.component */ 7210);
/* harmony import */ var _pages_health_system_connecting_health_system_connecting_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/health-system-connecting/health-system-connecting.component */ 3382);
/* harmony import */ var _pages_complete_complete_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/complete/complete.component */ 5556);
/* harmony import */ var _services_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/auth-interceptor.service */ 2993);
/* harmony import */ var _pipes_state_name_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pipes/state-name.pipe */ 4280);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ 2560);































class AppModule {
    constructor(injector) {
        const el = (0,_angular_elements__WEBPACK_IMPORTED_MODULE_19__.createCustomElement)(_fasten_stitch_fasten_stitch_component__WEBPACK_IMPORTED_MODULE_6__.FastenStitchComponent, { injector });
        customElements.define('fasten-stitch', el);
    }
    ngDoBootstrap() { }
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_20__.Injector)); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineNgModule"]({ type: AppModule });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_21__.HTTP_INTERCEPTORS,
            useClass: _services_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_17__.AuthInterceptorService,
            multi: true,
            // deps: [AuthService, NavOutletService]
            // deps: [AuthService, NavOutletService]
        },
    ], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__.BrowserModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_21__.HttpClientModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_24__.CommonModule,
        ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_25__.InfiniteScrollModule,
        angular_code_input__WEBPACK_IMPORTED_MODULE_26__.CodeInputModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_fasten_stitch_fasten_stitch_component__WEBPACK_IMPORTED_MODULE_6__.FastenStitchComponent,
        _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__.DashboardComponent,
        _pages_vault_profile_signin_vault_profile_signin_component__WEBPACK_IMPORTED_MODULE_8__.VaultProfileSigninComponent,
        _pages_vault_profile_signin_code_vault_profile_signin_code_component__WEBPACK_IMPORTED_MODULE_9__.VaultProfileSigninCodeComponent,
        _pages_identity_verification_identity_verification_component__WEBPACK_IMPORTED_MODULE_10__.IdentityVerificationComponent,
        _pages_health_system_search_health_system_search_component__WEBPACK_IMPORTED_MODULE_11__.HealthSystemSearchComponent,
        _pages_health_system_brand_details_health_system_brand_details_component__WEBPACK_IMPORTED_MODULE_12__.HealthSystemBrandDetailsComponent,
        _pages_form_health_system_request_form_health_system_request_component__WEBPACK_IMPORTED_MODULE_13__.FormHealthSystemRequestComponent,
        _pages_form_support_request_form_support_request_component__WEBPACK_IMPORTED_MODULE_14__.FormSupportRequestComponent,
        _pages_health_system_connecting_health_system_connecting_component__WEBPACK_IMPORTED_MODULE_15__.HealthSystemConnectingComponent,
        _pages_complete_complete_component__WEBPACK_IMPORTED_MODULE_16__.CompleteComponent,
        _directives_image_fallback_directive__WEBPACK_IMPORTED_MODULE_0__.ImageFallbackDirective,
        _router_nav_outlet_nav_outlet_component__WEBPACK_IMPORTED_MODULE_1__.NavOutletComponent,
        _router_nav_outlet_nav_outlet_directive__WEBPACK_IMPORTED_MODULE_2__.NavOutletDirective,
        _router_nav_outlet_nav_outlet_link_directive__WEBPACK_IMPORTED_MODULE_3__.NavOutletLinkDirective,
        _pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_4__.SafeHtmlPipe,
        _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_5__.SpinnerComponent,
        _pipes_state_name_pipe__WEBPACK_IMPORTED_MODULE_18__.StateNamePipe], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_22__.BrowserModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_21__.HttpClientModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_24__.CommonModule,
        ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_25__.InfiniteScrollModule,
        angular_code_input__WEBPACK_IMPORTED_MODULE_26__.CodeInputModule] }); })();
_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsetComponentScope"](_pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__.DashboardComponent, [_angular_common__WEBPACK_IMPORTED_MODULE_24__.NgForOf, _directives_image_fallback_directive__WEBPACK_IMPORTED_MODULE_0__.ImageFallbackDirective,
    _router_nav_outlet_nav_outlet_link_directive__WEBPACK_IMPORTED_MODULE_3__.NavOutletLinkDirective], [_angular_common__WEBPACK_IMPORTED_MODULE_24__.AsyncPipe]);
_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsetComponentScope"](_pages_health_system_search_health_system_search_component__WEBPACK_IMPORTED_MODULE_11__.HealthSystemSearchComponent, [_angular_common__WEBPACK_IMPORTED_MODULE_24__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_24__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.NgModel, ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_25__.InfiniteScrollDirective, _directives_image_fallback_directive__WEBPACK_IMPORTED_MODULE_0__.ImageFallbackDirective,
    _router_nav_outlet_nav_outlet_link_directive__WEBPACK_IMPORTED_MODULE_3__.NavOutletLinkDirective], [_angular_common__WEBPACK_IMPORTED_MODULE_24__.SlicePipe, _pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_4__.SafeHtmlPipe,
    _pipes_state_name_pipe__WEBPACK_IMPORTED_MODULE_18__.StateNamePipe]);
_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsetComponentScope"](_pages_health_system_brand_details_health_system_brand_details_component__WEBPACK_IMPORTED_MODULE_12__.HealthSystemBrandDetailsComponent, [_angular_common__WEBPACK_IMPORTED_MODULE_24__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_24__.NgIf, _directives_image_fallback_directive__WEBPACK_IMPORTED_MODULE_0__.ImageFallbackDirective,
    _router_nav_outlet_nav_outlet_link_directive__WEBPACK_IMPORTED_MODULE_3__.NavOutletLinkDirective], [_angular_common__WEBPACK_IMPORTED_MODULE_24__.SlicePipe, _pipes_state_name_pipe__WEBPACK_IMPORTED_MODULE_18__.StateNamePipe]);
_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsetComponentScope"](_pages_form_health_system_request_form_health_system_request_component__WEBPACK_IMPORTED_MODULE_13__.FormHealthSystemRequestComponent, [_angular_common__WEBPACK_IMPORTED_MODULE_24__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.EmailValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.NgForm, _router_nav_outlet_nav_outlet_link_directive__WEBPACK_IMPORTED_MODULE_3__.NavOutletLinkDirective,
    _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_5__.SpinnerComponent], []);
_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsetComponentScope"](_pages_form_support_request_form_support_request_component__WEBPACK_IMPORTED_MODULE_14__.FormSupportRequestComponent, [_angular_common__WEBPACK_IMPORTED_MODULE_24__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.NgForm, _router_nav_outlet_nav_outlet_link_directive__WEBPACK_IMPORTED_MODULE_3__.NavOutletLinkDirective,
    _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_5__.SpinnerComponent], []);
_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsetComponentScope"](_pages_health_system_connecting_health_system_connecting_component__WEBPACK_IMPORTED_MODULE_15__.HealthSystemConnectingComponent, [_directives_image_fallback_directive__WEBPACK_IMPORTED_MODULE_0__.ImageFallbackDirective,
    _router_nav_outlet_nav_outlet_link_directive__WEBPACK_IMPORTED_MODULE_3__.NavOutletLinkDirective], []);


/***/ }),

/***/ 6738:
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavOutletPageName": () => (/* binding */ NavOutletPageName),
/* harmony export */   "NavOutletRoute": () => (/* binding */ NavOutletRoute),
/* harmony export */   "Routes": () => (/* binding */ Routes)
/* harmony export */ });
/* harmony import */ var _pages_vault_profile_signin_vault_profile_signin_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/vault-profile-signin/vault-profile-signin.component */ 9824);
/* harmony import */ var _pages_vault_profile_signin_code_vault_profile_signin_code_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/vault-profile-signin-code/vault-profile-signin-code.component */ 5313);
/* harmony import */ var _pages_identity_verification_identity_verification_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/identity-verification/identity-verification.component */ 2427);
/* harmony import */ var _pages_form_health_system_request_form_health_system_request_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/form-health-system-request/form-health-system-request.component */ 4313);
/* harmony import */ var _pages_form_support_request_form_support_request_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/form-support-request/form-support-request.component */ 7210);
/* harmony import */ var _pages_health_system_search_health_system_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/health-system-search/health-system-search.component */ 7936);
/* harmony import */ var _pages_health_system_brand_details_health_system_brand_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/health-system-brand-details/health-system-brand-details.component */ 5609);
/* harmony import */ var _pages_health_system_connecting_health_system_connecting_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/health-system-connecting/health-system-connecting.component */ 3382);
/* harmony import */ var _pages_complete_complete_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/complete/complete.component */ 5556);
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ 4789);
/* harmony import */ var _auth_guards_is_authenticated_auth_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auth-guards/is-authenticated-auth-guard */ 6056);











var NavOutletPageName;
(function (NavOutletPageName) {
    NavOutletPageName["Default"] = "";
    NavOutletPageName["VaultProfileSignin"] = "vault-profile-signin";
    NavOutletPageName["VaultProfileSigninCode"] = "vault-profile-signin-code";
    NavOutletPageName["IdentityVerification"] = "identity-verification";
    NavOutletPageName["Dashboard"] = "dashboard";
    NavOutletPageName["FormHealthSystemRequest"] = "form-health-system-request";
    NavOutletPageName["FormSupportRequest"] = "form-support-request";
    NavOutletPageName["HealthSystemSearch"] = "health-system-search";
    NavOutletPageName["HealthSystemBrandDetails"] = "health-system-brand-details";
    NavOutletPageName["HealthSystemConnecting"] = "health-system-connecting";
    NavOutletPageName["CompleteSummary"] = "complete";
})(NavOutletPageName || (NavOutletPageName = {}));
class NavOutletRoute {
    constructor() {
        this.page = NavOutletPageName.Dashboard;
        this.component = null;
    }
}
const Routes = [
    //on empty, this is where we go
    { page: NavOutletPageName.Default, component: _pages_vault_profile_signin_vault_profile_signin_component__WEBPACK_IMPORTED_MODULE_0__.VaultProfileSigninComponent },
    // { page: NavOutletPageName.Default, component: HealthSystemSearchComponent },
    { page: NavOutletPageName.VaultProfileSignin, component: _pages_vault_profile_signin_vault_profile_signin_component__WEBPACK_IMPORTED_MODULE_0__.VaultProfileSigninComponent },
    { page: NavOutletPageName.VaultProfileSigninCode, component: _pages_vault_profile_signin_code_vault_profile_signin_code_component__WEBPACK_IMPORTED_MODULE_1__.VaultProfileSigninCodeComponent },
    { page: NavOutletPageName.IdentityVerification, component: _pages_identity_verification_identity_verification_component__WEBPACK_IMPORTED_MODULE_2__.IdentityVerificationComponent, canActivate: _auth_guards_is_authenticated_auth_guard__WEBPACK_IMPORTED_MODULE_10__.IsAuthenticatedAuthGuard },
    { page: NavOutletPageName.Dashboard, component: _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__.DashboardComponent, canActivate: _auth_guards_is_authenticated_auth_guard__WEBPACK_IMPORTED_MODULE_10__.IsAuthenticatedAuthGuard },
    { page: NavOutletPageName.FormHealthSystemRequest, component: _pages_form_health_system_request_form_health_system_request_component__WEBPACK_IMPORTED_MODULE_3__.FormHealthSystemRequestComponent, canActivate: _auth_guards_is_authenticated_auth_guard__WEBPACK_IMPORTED_MODULE_10__.IsAuthenticatedAuthGuard },
    { page: NavOutletPageName.FormSupportRequest, component: _pages_form_support_request_form_support_request_component__WEBPACK_IMPORTED_MODULE_4__.FormSupportRequestComponent, canActivate: _auth_guards_is_authenticated_auth_guard__WEBPACK_IMPORTED_MODULE_10__.IsAuthenticatedAuthGuard },
    { page: NavOutletPageName.HealthSystemSearch, component: _pages_health_system_search_health_system_search_component__WEBPACK_IMPORTED_MODULE_5__.HealthSystemSearchComponent, canActivate: _auth_guards_is_authenticated_auth_guard__WEBPACK_IMPORTED_MODULE_10__.IsAuthenticatedAuthGuard },
    { page: NavOutletPageName.HealthSystemBrandDetails, component: _pages_health_system_brand_details_health_system_brand_details_component__WEBPACK_IMPORTED_MODULE_6__.HealthSystemBrandDetailsComponent, canActivate: _auth_guards_is_authenticated_auth_guard__WEBPACK_IMPORTED_MODULE_10__.IsAuthenticatedAuthGuard },
    { page: NavOutletPageName.HealthSystemConnecting, component: _pages_health_system_connecting_health_system_connecting_component__WEBPACK_IMPORTED_MODULE_7__.HealthSystemConnectingComponent, canActivate: _auth_guards_is_authenticated_auth_guard__WEBPACK_IMPORTED_MODULE_10__.IsAuthenticatedAuthGuard },
    { page: NavOutletPageName.CompleteSummary, component: _pages_complete_complete_component__WEBPACK_IMPORTED_MODULE_8__.CompleteComponent, canActivate: _auth_guards_is_authenticated_auth_guard__WEBPACK_IMPORTED_MODULE_10__.IsAuthenticatedAuthGuard },
];


/***/ }),

/***/ 6056:
/*!************************************************************!*\
  !*** ./src/app/auth-guards/is-authenticated-auth-guard.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IsAuthenticatedAuthGuard": () => (/* binding */ IsAuthenticatedAuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 7556);
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.routing */ 6738);
/* harmony import */ var _router_nav_outlet_nav_outlet_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../router/nav-outlet/nav-outlet.service */ 6773);




function IsAuthenticatedAuthGuard(nextRoute) {
    const authService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService);
    const navOutletService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_router_nav_outlet_nav_outlet_service__WEBPACK_IMPORTED_MODULE_2__.NavOutletService);
    return authService.GetJWTPayload()
        .then(jwtPayload => {
        //check if the user is authenticated, if not, redirect to login
        if (!jwtPayload) {
            navOutletService.navigateByUrl(_app_routing__WEBPACK_IMPORTED_MODULE_1__.NavOutletPageName.VaultProfileSignin);
            return false;
        }
        else if (!jwtPayload.has_verified_identity) {
            console.log("Profile does not have a verified identity, redirecting to id verification step", jwtPayload);
            navOutletService.navigateByUrl(_app_routing__WEBPACK_IMPORTED_MODULE_1__.NavOutletPageName.IdentityVerification);
            return false;
        }
        // continue as normal
        return true;
    })
        .catch(err => {
        console.error("Error checking if user is authenticated", err);
        navOutletService.navigateByUrl(_app_routing__WEBPACK_IMPORTED_MODULE_1__.NavOutletPageName.VaultProfileSignin);
        return false;
    });
}


/***/ }),

/***/ 4132:
/*!*********************************************************!*\
  !*** ./src/app/components/spinner/spinner.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpinnerComponent": () => (/* binding */ SpinnerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class SpinnerComponent {
    constructor() { }
    ngOnInit() {
    }
}
SpinnerComponent.ɵfac = function SpinnerComponent_Factory(t) { return new (t || SpinnerComponent)(); };
SpinnerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpinnerComponent, selectors: [["app-spinner"]], decls: 3, vars: 0, consts: [["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", 1, "mr-2", "h-5", "w-5", "animate-spin", "text-white"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z", 1, "opacity-75"]], template: function SpinnerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "circle", 1)(2, "path", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcGlubmVyLmNvbXBvbmVudC5zY3NzIn0= */"] });


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
        this.hospitalInlineImage = "data:image/svg+xml,%3csvg id='connecting-system-logo-placeholder' xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='text-gray-400'%3e%3cpath d='M12 6v4'/%3e%3cpath d='M14 14h-4'/%3e%3cpath d='M14 18h-4'/%3e%3cpath d='M14 8h-4'/%3e%3cpath d='M18 12h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2'/%3e%3cpath d='M18 22V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v18'/%3e%3c/svg%3e";
        this.officeInlineImage = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-building-2 w-10 h-10 text-gray-400'%3e%3cpath d='M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z'/%3e%3cpath d='M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2'/%3e%3cpath d='M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2'/%3e%3cpath d='M10 6h4'/%3e%3cpath d='M10 10h4'/%3e%3cpath d='M10 14h4'/%3e%3cpath d='M10 18h4'/%3e%3c/svg%3e";
        this.fastenSquareInlineImage = "data:image/svg+xml,%3csvg version='1.2' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1640 1640' width='1640' height='1640'%3e%3ctitle%3esquare%3c/title%3e%3cstyle%3etspan %7b white-space:pre %7d .s0 %7b fill: white %7d .t1 %7b font-size: 400px%3bfill: %235b47fb%3bfont-weight: 700%3bfont-family: 'Poppins-Bold'%2c 'Poppins' %7d%3c/style%3e%3cpath id='Layer 1' fill-rule='evenodd' class='s0' d='m-90-48h1752v1727h-1752z'/%3e%3ctext id='fasten' style='transform: matrix(1.356%2c0%2c0%2c1.356%2c8.863%2c630.478)'%3e%3ctspan x='0' y='296' class='t1' dx='0'%3ef%3c/tspan%3e%3ctspan y='296' class='t1' dx='0'%3ea%3c/tspan%3e%3ctspan y='296' class='t1' dx='0'%3es%3c/tspan%3e%3ctspan y='296' class='t1' dx='0'%3et%3c/tspan%3e%3ctspan y='296' class='t1' dx='0'%3ee%3c/tspan%3e%3ctspan y='296' class='t1' dx='0 -21'%3en%3c/tspan%3e%3c/text%3e%3c/svg%3e";
        this.fastenLogoInlineImage = "data:image/svg+xml,%3csvg version='1.2' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1640 1640' width='1640' height='1640'%3e%3ctitle%3esquare%3c/title%3e%3cstyle%3etspan %7b white-space:pre %7d .s0 %7b fill: white %7d .t1 %7b font-size: 282px%3bfill: %235b47fb%3bfont-weight: 700%3bfont-family: 'Poppins-Bold'%2c 'Poppins' %7d%3c/style%3e%3cpath id='Layer 1' fill-rule='evenodd' class='s0' d='m-90-48h1752v1727h-1752z'/%3e%3ctext id='fh' style='transform: matrix(4.298%2c0%2c0%2c4.298%2c252%2c393)'%3e%3ctspan x='0' y='208.4' class='t1' dx='0'%3ef%3c/tspan%3e%3ctspan y='208.4' class='t1' dx='0'%3eh%3c/tspan%3e%3ctspan y='208.4' class='t1' dx='0'%3e%3c/tspan%3e%3c/text%3e%3c/svg%3e";
        this.unknownOrganizationInlineImage = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40' fill='none'%3E%3Crect width='40' height='40' rx='8' fill='currentColor' /%3E%3Cpath d='M20 12V28M12 20H28' stroke='white' stroke-width='3' stroke-linecap='round' stroke-linejoin='round' /%3E%3Cpath d='M12 12L28 28M28 12L12 28' stroke='white' stroke-width='3' stroke-linecap='round' stroke-linejoin='round' opacity='0.2' /%3E%3C/svg%3E";
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
        if (this.imageFallback === 'hospital') {
            return this.hospitalInlineImage;
        }
        else if (this.imageFallback === 'office') {
            return this.officeInlineImage;
        }
        else if (this.imageFallback === 'fasten') {
            return this.fastenSquareInlineImage;
        }
        else if (this.imageFallback === 'fasten-logo') {
            return this.fastenLogoInlineImage;
        }
        else if (this.imageFallback == 'unknown-organization') {
            return this.unknownOrganizationInlineImage;
        }
        else {
            return this.imageFallback || DEFAULT_IMAGE_FALLBACK_PATH;
        }
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app.constants */ 2976);
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/config.service */ 946);
/* harmony import */ var _services_vault_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/vault.service */ 3843);
/* harmony import */ var _services_message_bus_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/message-bus.service */ 5983);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _router_nav_outlet_nav_outlet_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../router/nav-outlet/nav-outlet.component */ 2227);









const _c0 = ["stitchModalButton"];
const _c1 = ["stitchModal"];
function FastenStitchComponent_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Share Records ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function FastenStitchComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "svg", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "rect", 11)(3, "path", 12)(4, "path", 13)(5, "path", 14)(6, "path", 15)(7, "path", 16)(8, "path", 17)(9, "path", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, " You are using Fasten in test mode ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function FastenStitchComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-nav-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function FastenStitchComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 20)(1, "div", 21)(2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "svg", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "path", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "h3", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Configuration Error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 28)(12, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FastenStitchComponent_ng_template_11_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r8.hideStitchModalExt());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r7.errorMessage, " ");
  }
}
const _c2 = ["*"];
class SourceListItem {}
class FastenStitchComponent {
  // private flowbitStitchModal: Modal = null
  constructor(host, configService, vaultService, messageBus) {
    this.host = host;
    this.configService = configService;
    this.vaultService = vaultService;
    this.messageBus = messageBus;
    this.publicId = ''; //validate
    this.reconnectOrgConnectionId = null;
    this.staticBackdrop = false;
    this.orgConnectionCallback = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    //https://stackoverflow.com/a/69173549/1157633
    this.host.nativeElement.show = this.showStitchModalExt.bind(this);
    this.host.nativeElement.hide = this.hideStitchModalExt.bind(this);
  }
  ngAfterViewInit() {}
  ngOnInit() {
    let publicIdParts = this.publicId.split('_');
    let apiMode = _app_constants__WEBPACK_IMPORTED_MODULE_0__.ApiMode.Test;
    if (publicIdParts.length == 3 && publicIdParts[1] == _app_constants__WEBPACK_IMPORTED_MODULE_0__.ApiMode.Live) {
      apiMode = _app_constants__WEBPACK_IMPORTED_MODULE_0__.ApiMode.Live;
    }
    if (publicIdParts.length != 3) {
      console.error("Could not register Fasten Connect installation: missing or invalid id", this.publicId);
      this.errorMessage = 'Could not register Fasten Connect installation: missing or invalid id. Please contact the developer of this app.';
      return;
    }
    console.log(this.publicId, publicIdParts, apiMode);
    //update the system config
    this.configService.systemConfig = {
      apiMode: apiMode,
      publicId: this.publicId,
      reconnectOrgConnectionId: this.reconnectOrgConnectionId,
      staticBackdrop: this.staticBackdrop
    };
    this.vaultService.getOrgByPublicId(this.publicId).subscribe(org => {
      console.log("Fasten Connect registration", org);
      this.configService.systemConfig = {
        org: org
      };
    }, err => {
      this.errorMessage = 'Could not register Fasten Connect installation using id. Please contact the developer of this app.';
      console.log("Invalid Fasten Connect registration", err);
    });
    this.messageBus.orgConnectionCallbackSubject.subscribe(orgConnectionCallbackData => {
      console.log("bubbling up event", orgConnectionCallbackData);
      this.orgConnectionCallback.emit(orgConnectionCallbackData);
    });
  }
  showStitchModal() {
    if (this.reconnectOrgConnectionId) {
      //TODO: not supported yet
      // const childSpan: HTMLElement = document.createElement('span');
      // childSpan.innerHTML = 'Reconnecting...';
      // (this.stitchModalButton.nativeElement as HTMLButtonElement).replaceChildren(childSpan); // Component needs to be added here
      //
      // this.connectApi.getOrgConnectionById(this.publicId, this.reconnectOrgConnectionId).subscribe((orgConnection) => {
      //   console.log("Reconnect Org Connection", orgConnection)
      //
      //   ConnectHelper(this.connectApi, this.messageBus, {
      //     catalog_brand_id: orgConnection.catalog_brand_id,
      //     catalog_endpoint_id: orgConnection.catalog_endpoint_id,
      //     catalog_portal_id: orgConnection.catalog_portal_id,
      //     connect_mode: this.connectMode,
      //     external_id: this.externalId,
      //     external_state: this.externalState,
      //     org_connection_id: orgConnection.org_connection_id,
      //     public_id: this.publicId
      //   })
      //
      // }, (err) => {
      //   this.errorMessage = 'Could not find the patient connection using id. Please contact the developer of this app.'
      //   console.log("Invalid Fasten Connect Connection ID", err)
      //   this.stitchModal.nativeElement.show()
      // })
    } else {
      this.stitchModal.nativeElement.showModal();
      this.registerDialogCloseOnBackdropClick();
    }
  }
  // TODO: this is required because when using the showStitchModal() method, the Search component is not being rendered correctly
  // this function can be called externally to show the modal
  showStitchModalExt() {
    this.stitchModal.nativeElement.showModal();
    this.registerDialogCloseOnBackdropClick();
  }
  hideStitchModalExt() {
    this.stitchModal.nativeElement.close();
  }
  registerDialogCloseOnBackdropClick() {
    this.stitchModal.nativeElement.addEventListener('click', event => {
      if (this.configService.systemConfig$.staticBackdrop) {
        return;
      }
      var rect = this.stitchModal.nativeElement.getBoundingClientRect();
      var isInDialog = rect.top <= event.clientY && event.clientY <= rect.top + rect.height && rect.left <= event.clientX && event.clientX <= rect.left + rect.width;
      if (!isInDialog) {
        this.stitchModal.nativeElement.close();
      }
    });
  }
}
FastenStitchComponent.ɵfac = function FastenStitchComponent_Factory(t) {
  return new (t || FastenStitchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_config_service__WEBPACK_IMPORTED_MODULE_1__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_vault_service__WEBPACK_IMPORTED_MODULE_2__.VaultService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_message_bus_service__WEBPACK_IMPORTED_MODULE_3__.MessageBusService));
};
FastenStitchComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: FastenStitchComponent,
  selectors: [["fasten-stitch"]],
  viewQuery: function FastenStitchComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c1, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.stitchModalButton = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.stitchModal = _t.first);
    }
  },
  inputs: {
    publicId: ["public-id", "publicId"],
    reconnectOrgConnectionId: ["reconnect-org-connection-id", "reconnectOrgConnectionId"],
    staticBackdrop: ["static-backdrop", "staticBackdrop"]
  },
  outputs: {
    orgConnectionCallback: "orgConnectionCallback"
  },
  ngContentSelectors: _c2,
  decls: 13,
  vars: 6,
  consts: [["type", "button", 1, "block", "text-white", "bg-blue-700", "hover:bg-blue-800", "focus:ring-4", "focus:outline-none", "focus:ring-blue-300", "font-medium", "rounded-lg", "text-sm", "px-5", "py-2.5", "text-center", "dark:bg-blue-600", "dark:hover:bg-blue-700", "dark:focus:ring-blue-800", 3, "click"], ["stitchModalButton", ""], ["ref", ""], [4, "ngIf"], ["id", "stitchModal", "tabindex", "-1", "aria-hidden", "true", 1, "backdrop:backdrop-blur", "mx-auto", "w-full", "max-w-[440px]", "bg-white", "rounded-lg", "shadow-lg"], ["stitchModal", ""], ["id", "test-mode-banner", "class", "top-0 sticky z-50 w-full mb-2 bg-[#DC3545] text-white text-center py-2 px-4 rounded-t-lg font-medium text-sm flex items-center justify-center gap-2", 4, "ngIf"], ["id", "widget-container", "class", "w-full p-6 min-h-96", 4, "ngIf", "ngIfElse"], ["errorMessagePanel", ""], ["id", "test-mode-banner", 1, "top-0", "sticky", "z-50", "w-full", "mb-2", "bg-[#DC3545]", "text-white", "text-center", "py-2", "px-4", "rounded-t-lg", "font-medium", "text-sm", "flex", "items-center", "justify-center", "gap-2"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "lucide", "lucide-construction"], ["x", "2", "y", "6", "width", "20", "height", "8", "rx", "1"], ["d", "M17 14v7"], ["d", "M7 14v7"], ["d", "M17 3v3"], ["d", "M7 3v3"], ["d", "M10 14 2.3 6.3"], ["d", "m14 6 7.7 7.7"], ["d", "m8 6 8 8"], ["id", "widget-container", 1, "w-full", "p-6", "min-h-96"], [1, "relative", "p-4", "w-full", "max-w-2xl", "h-full", "md:h-auto"], ["id", "alert-additional-content-2", "role", "alert", 1, "p-4", "border", "border-red-300", "rounded-lg", "bg-[#DC3545]", "text-white"], [1, "flex", "items-center"], ["aria-hidden", "true", "xmlns", "http://www.w3.org/2000/svg", "width", "22", "height", "22", "fill", "currentColor", "viewBox", "0 0 24 24", 1, "flex-shrink-0", "w-4", "h-4", "me-2"], ["fill-rule", "evenodd", "d", "M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm7.707-3.707a1 1 0 0 0-1.414 1.414L10.586 12l-2.293 2.293a1 1 0 1 0 1.414 1.414L12 13.414l2.293 2.293a1 1 0 0 0 1.414-1.414L13.414 12l2.293-2.293a1 1 0 0 0-1.414-1.414L12 10.586 9.707 8.293Z", "clip-rule", "evenodd"], [1, "sr-only"], [1, "text-lg", "font-medium"], [1, "mt-2", "mb-4", "text-sm"], [1, "flex"], ["type", "button", 1, "text-white", "bg-transparent", "border", "border-white", "hover:bg-red-900", "hover:text-white", "focus:ring-4", "focus:outline-none", "focus:ring-grey-300", "font-medium", "rounded-lg", "text-xs", "px-3", "py-1.5", "text-center", 3, "click"]],
  template: function FastenStitchComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FastenStitchComponent_Template_button_click_0_listener() {
        return ctx.showStitchModal();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", null, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵprojection"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, FastenStitchComponent_span_5_Template, 2, 0, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "dialog", 4, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, FastenStitchComponent_div_8_Template, 11, 0, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](9, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, FastenStitchComponent_div_10_Template, 2, 0, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, FastenStitchComponent_ng_template_11_Template, 14, 1, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](3);
      const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](12);
      let tmp_1_0;
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !_r1.hasChildNodes());
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ((tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](9, 4, ctx.configService.systemConfigSubject)) == null ? null : tmp_1_0.apiMode) == "test");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.errorMessage)("ngIfElse", _r6);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _router_nav_outlet_nav_outlet_component__WEBPACK_IMPORTED_MODULE_4__.NavOutletComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe],
  styles: ["\n@keyframes scale {\n  0% {\n    transform: scale(0.8);\n    opacity: 0.7;\n  }\n\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n\n.animate-scale {\n  animation: scale 0.3s ease forwards;\n}\n\n@keyframes shake {\n  10%,\n  90% {\n    transform: translateX(-1px);\n  }\n\n  20%,\n  80% {\n    transform: translateX(2px);\n  }\n\n  30%,\n  50%,\n  70% {\n    transform: translateX(-4px);\n  }\n\n  40%,\n  60% {\n    transform: translateX(4px);\n  }\n}\n\n.animate-shake {\n  animation: shake 0.3s;\n}\n\n@keyframes pulseFlow {\n  0%, 100% {\n    transform: scale(0.9);\n    opacity: 0.4;\n  }\n  50% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n\n.animate-pulse-flow {\n  animation: pulseFlow 2s ease-in-out infinite;\n}\n\n@keyframes bounce {\n  0%, 100% {\n    transform: translateY(-25%);\n  }\n  50% {\n    transform: none;\n  }\n}\n\n.animate-bounce {\n  animation: bounce 1s cubic-bezier(0.8, 0, 1, 1) infinite;\n}\n\n@keyframes successCircle {\n  0% {\n    transform: scale(0);\n    opacity: 0;\n  }\n  50% {\n    transform: scale(1.1);\n    opacity: 0.8;\n  }\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n\n@keyframes successCheck {\n  0% {\n    stroke-dashoffset: 100;\n    opacity: 0;\n  }\n  60% {\n    stroke-dashoffset: 0;\n    opacity: 1;\n  }\n  100% {\n    stroke-dashoffset: 0;\n    opacity: 1;\n  }\n}\n\n.success-circle {\n  animation: successCircle 0.6s cubic-bezier(0.22, 0.61, 0.36, 1) forwards;\n}\n\n.success-check {\n  stroke-dasharray: 100;\n  stroke-dashoffset: 100;\n  animation: successCheck 0.9s cubic-bezier(0.22, 0.61, 0.36, 1) forwards;\n  animation-delay: 0.3s;\n}\n\n.connect-btn {\n  transition: all 0.2s ease;\n}\n\n.connect-btn:hover {\n  transform: scale(1.05);\n}\n\n.connect-btn:active {\n  transform: scale(0.95);\n}\n\n.delay-100 {\n  animation-delay: 0s;\n}\n\n.delay-200 {\n  animation-delay: 0.4s;\n}\n\n.delay-300 {\n  animation-delay: 0.8s;\n}\n\n.step-view {\n  display: none;\n}\n\n.verification-input {\n  width: 2.5rem;\n  height: 2.5rem;\n  text-align: center;\n  border-radius: 0.5rem;\n  font-size: 1.125rem;\n  font-weight: 600;\n  border: 1px solid rgb(209 213 219);\n}\n\n.verification-input:focus {\n  outline: none;\n  border-color: #5B47FB;\n  box-shadow: 0 0 0 2px rgba(91, 71, 251, 0.2);\n}\n\n.verification-input.filled {\n  background-color: rgb(249 250 251);\n  border-color: #5B47FB;\n}\n\n.verification-input.error {\n  border-color: rgb(239 68 68);\n  animation: shake 0.3s;\n}\n\n.verification-button {\n  display: block;\n  width: 100%;\n  text-align: center;\n  color: #5B47FB;\n  font-weight: 500;\n  padding: 0.5rem;\n  border-radius: 0.375rem;\n  transition: color 0.2s;\n}\n\n.verification-button:hover {\n  color: #4936E8;\n  background-color: rgba(91, 71, 251, 0.05);\n}\n\n@keyframes overlayFadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes overlayContentSlideUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n@keyframes logoFloat {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-8px);\n  }\n}\n\n@keyframes pulseGlow {\n  0%, 100% {\n    box-shadow: 0 0 0 0 rgba(91, 71, 251, 0.4);\n  }\n  50% {\n    box-shadow: 0 0 20px 3px rgba(91, 71, 251, 0.2);\n  }\n}\n\n.redirect-overlay-enter {\n  animation: overlayFadeIn 0.3s ease-out;\n}\n\n.redirect-overlay-content {\n  animation: overlayContentSlideUp 0.4s ease-out;\n}\n\n.redirect-logo-container {\n  animation: logoFloat 2s ease-in-out infinite, pulseGlow 2s ease-in-out infinite;\n}\n\n.redirect-dots {\n  display: flex;\n  gap: 4px;\n  justify-content: center;\n  margin-bottom: 8px;\n}\n\n.redirect-dot {\n  width: 6px;\n  height: 6px;\n  background-color: #5B47FB;\n  border-radius: 50%;\n  opacity: 0.3;\n  animation: dotPulse 1s ease-in-out infinite;\n}\n\n.redirect-dot:nth-child(2) {\n  animation-delay: 0.2s;\n}\n\n.redirect-dot:nth-child(3) {\n  animation-delay: 0.4s;\n}\n\n@keyframes dotPulse {\n  0%, 100% {\n    opacity: 0.3;\n    transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(1.2);\n  }\n}\n\n.az-logo {\n  font-weight: 700;\n  font-size: 28px;\n  font-family: Poppins, sans-serif;\n  text-transform: lowercase;\n  color: #5b47fb;\n  letter-spacing: -1px;\n  display: flex;\n  align-items: center;\n  position: relative;\n  top: -2px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhc3Rlbi1zdGl0Y2guY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRTtJQUNFLHFCQUFxQjtJQUNyQixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsVUFBVTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRSxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRTs7SUFFRSwyQkFBMkI7RUFDN0I7O0VBRUE7O0lBRUUsMEJBQTBCO0VBQzVCOztFQUVBOzs7SUFHRSwyQkFBMkI7RUFDN0I7O0VBRUE7O0lBRUUsMEJBQTBCO0VBQzVCO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRTtJQUNFLHFCQUFxQjtJQUNyQixZQUFZO0VBQ2Q7RUFDQTtJQUNFLG1CQUFtQjtJQUNuQixVQUFVO0VBQ1o7QUFDRjs7QUFFQTtFQUNFLDRDQUE0QztBQUM5Qzs7QUFFQTtFQUNFO0lBQ0UsMkJBQTJCO0VBQzdCO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0FBQ0Y7O0FBRUE7RUFDRSx3REFBd0Q7QUFDMUQ7O0FBRUE7RUFDRTtJQUNFLG1CQUFtQjtJQUNuQixVQUFVO0VBQ1o7RUFDQTtJQUNFLHFCQUFxQjtJQUNyQixZQUFZO0VBQ2Q7RUFDQTtJQUNFLG1CQUFtQjtJQUNuQixVQUFVO0VBQ1o7QUFDRjs7QUFFQTtFQUNFO0lBQ0Usc0JBQXNCO0lBQ3RCLFVBQVU7RUFDWjtFQUNBO0lBQ0Usb0JBQW9CO0lBQ3BCLFVBQVU7RUFDWjtFQUNBO0lBQ0Usb0JBQW9CO0lBQ3BCLFVBQVU7RUFDWjtBQUNGOztBQUVBO0VBQ0Usd0VBQXdFO0FBQzFFOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0Qix1RUFBdUU7RUFDdkUscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQiw0Q0FBNEM7QUFDOUM7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7RUFDQTtJQUNFLFVBQVU7RUFDWjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsMkJBQTJCO0VBQzdCO0VBQ0E7SUFDRSxVQUFVO0lBQ1Ysd0JBQXdCO0VBQzFCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLHdCQUF3QjtFQUMxQjtFQUNBO0lBQ0UsMkJBQTJCO0VBQzdCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLDBDQUEwQztFQUM1QztFQUNBO0lBQ0UsK0NBQStDO0VBQ2pEO0FBQ0Y7O0FBRUE7RUFDRSxzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSw4Q0FBOEM7QUFDaEQ7O0FBRUE7RUFDRSwrRUFBK0U7QUFDakY7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsUUFBUTtFQUNSLHVCQUF1QjtFQUN2QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFO0lBQ0UsWUFBWTtJQUNaLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UsVUFBVTtJQUNWLHFCQUFxQjtFQUN2QjtBQUNGOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixnQ0FBZ0M7RUFDaEMseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsU0FBUztBQUNYIiwiZmlsZSI6ImZhc3Rlbi1zdGl0Y2guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuQGtleWZyYW1lcyBzY2FsZSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XG4gICAgb3BhY2l0eTogMC43O1xuICB9XG5cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbi5hbmltYXRlLXNjYWxlIHtcbiAgYW5pbWF0aW9uOiBzY2FsZSAwLjNzIGVhc2UgZm9yd2FyZHM7XG59XG5cbkBrZXlmcmFtZXMgc2hha2Uge1xuICAxMCUsXG4gIDkwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xcHgpO1xuICB9XG5cbiAgMjAlLFxuICA4MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgycHgpO1xuICB9XG5cbiAgMzAlLFxuICA1MCUsXG4gIDcwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC00cHgpO1xuICB9XG5cbiAgNDAlLFxuICA2MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg0cHgpO1xuICB9XG59XG5cbi5hbmltYXRlLXNoYWtlIHtcbiAgYW5pbWF0aW9uOiBzaGFrZSAwLjNzO1xufVxuXG5Aa2V5ZnJhbWVzIHB1bHNlRmxvdyB7XG4gIDAlLCAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XG4gICAgb3BhY2l0eTogMC40O1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbi5hbmltYXRlLXB1bHNlLWZsb3cge1xuICBhbmltYXRpb246IHB1bHNlRmxvdyAycyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyBib3VuY2Uge1xuICAwJSwgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yNSUpO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiBub25lO1xuICB9XG59XG5cbi5hbmltYXRlLWJvdW5jZSB7XG4gIGFuaW1hdGlvbjogYm91bmNlIDFzIGN1YmljLWJlemllcigwLjgsIDAsIDEsIDEpIGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIHN1Y2Nlc3NDaXJjbGUge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgIG9wYWNpdHk6IDAuODtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBzdWNjZXNzQ2hlY2sge1xuICAwJSB7XG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDEwMDtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDYwJSB7XG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICAxMDAlIHtcbiAgICBzdHJva2UtZGFzaG9mZnNldDogMDtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbi5zdWNjZXNzLWNpcmNsZSB7XG4gIGFuaW1hdGlvbjogc3VjY2Vzc0NpcmNsZSAwLjZzIGN1YmljLWJlemllcigwLjIyLCAwLjYxLCAwLjM2LCAxKSBmb3J3YXJkcztcbn1cblxuLnN1Y2Nlc3MtY2hlY2sge1xuICBzdHJva2UtZGFzaGFycmF5OiAxMDA7XG4gIHN0cm9rZS1kYXNob2Zmc2V0OiAxMDA7XG4gIGFuaW1hdGlvbjogc3VjY2Vzc0NoZWNrIDAuOXMgY3ViaWMtYmV6aWVyKDAuMjIsIDAuNjEsIDAuMzYsIDEpIGZvcndhcmRzO1xuICBhbmltYXRpb24tZGVsYXk6IDAuM3M7XG59XG5cbi5jb25uZWN0LWJ0biB7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG59XG5cbi5jb25uZWN0LWJ0bjpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG59XG5cbi5jb25uZWN0LWJ0bjphY3RpdmUge1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xufVxuXG4uZGVsYXktMTAwIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAwcztcbn1cblxuLmRlbGF5LTIwMCB7XG4gIGFuaW1hdGlvbi1kZWxheTogMC40cztcbn1cblxuLmRlbGF5LTMwMCB7XG4gIGFuaW1hdGlvbi1kZWxheTogMC44cztcbn1cblxuLnN0ZXAtdmlldyB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi52ZXJpZmljYXRpb24taW5wdXQge1xuICB3aWR0aDogMi41cmVtO1xuICBoZWlnaHQ6IDIuNXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMDkgMjEzIDIxOSk7XG59XG5cbi52ZXJpZmljYXRpb24taW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItY29sb3I6ICM1QjQ3RkI7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDJweCByZ2JhKDkxLCA3MSwgMjUxLCAwLjIpO1xufVxuXG4udmVyaWZpY2F0aW9uLWlucHV0LmZpbGxlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDkgMjUwIDI1MSk7XG4gIGJvcmRlci1jb2xvcjogIzVCNDdGQjtcbn1cblxuLnZlcmlmaWNhdGlvbi1pbnB1dC5lcnJvciB7XG4gIGJvcmRlci1jb2xvcjogcmdiKDIzOSA2OCA2OCk7XG4gIGFuaW1hdGlvbjogc2hha2UgMC4zcztcbn1cblxuLnZlcmlmaWNhdGlvbi1idXR0b24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICM1QjQ3RkI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMnM7XG59XG5cbi52ZXJpZmljYXRpb24tYnV0dG9uOmhvdmVyIHtcbiAgY29sb3I6ICM0OTM2RTg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoOTEsIDcxLCAyNTEsIDAuMDUpO1xufVxuXG5Aa2V5ZnJhbWVzIG92ZXJsYXlGYWRlSW4ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgb3ZlcmxheUNvbnRlbnRTbGlkZVVwIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgbG9nb0Zsb2F0IHtcbiAgMCUsIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtOHB4KTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHB1bHNlR2xvdyB7XG4gIDAlLCAxMDAlIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwIHJnYmEoOTEsIDcxLCAyNTEsIDAuNCk7XG4gIH1cbiAgNTAlIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMjBweCAzcHggcmdiYSg5MSwgNzEsIDI1MSwgMC4yKTtcbiAgfVxufVxuXG4ucmVkaXJlY3Qtb3ZlcmxheS1lbnRlciB7XG4gIGFuaW1hdGlvbjogb3ZlcmxheUZhZGVJbiAwLjNzIGVhc2Utb3V0O1xufVxuXG4ucmVkaXJlY3Qtb3ZlcmxheS1jb250ZW50IHtcbiAgYW5pbWF0aW9uOiBvdmVybGF5Q29udGVudFNsaWRlVXAgMC40cyBlYXNlLW91dDtcbn1cblxuLnJlZGlyZWN0LWxvZ28tY29udGFpbmVyIHtcbiAgYW5pbWF0aW9uOiBsb2dvRmxvYXQgMnMgZWFzZS1pbi1vdXQgaW5maW5pdGUsIHB1bHNlR2xvdyAycyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbn1cblxuLnJlZGlyZWN0LWRvdHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDRweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuLnJlZGlyZWN0LWRvdCB7XG4gIHdpZHRoOiA2cHg7XG4gIGhlaWdodDogNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUI0N0ZCO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG9wYWNpdHk6IDAuMztcbiAgYW5pbWF0aW9uOiBkb3RQdWxzZSAxcyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbn1cblxuLnJlZGlyZWN0LWRvdDpudGgtY2hpbGQoMikge1xuICBhbmltYXRpb24tZGVsYXk6IDAuMnM7XG59XG5cbi5yZWRpcmVjdC1kb3Q6bnRoLWNoaWxkKDMpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjRzO1xufVxuXG5Aa2V5ZnJhbWVzIGRvdFB1bHNlIHtcbiAgMCUsIDEwMCUge1xuICAgIG9wYWNpdHk6IDAuMztcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG4gIDUwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG4gIH1cbn1cblxuLmF6LWxvZ28ge1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDI4cHg7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zLCBzYW5zLXNlcmlmO1xuICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xuICBjb2xvcjogIzViNDdmYjtcbiAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMnB4O1xufVxuIl19 */"],
  encapsulation: 2
});

/***/ }),

/***/ 4843:
/*!***********************************************!*\
  !*** ./src/app/models/fasten/vaultProfile.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VaultProfile": () => (/* binding */ VaultProfile)
/* harmony export */ });
class VaultProfile {
    constructor() {
        //not sent to the server
        this.password_confirm = "";
        this.agree_terms = false;
    }
}


/***/ }),

/***/ 3903:
/*!************************************************************!*\
  !*** ./src/app/models/forms/form-health-system-request.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormHealthSystemRequest": () => (/* binding */ FormHealthSystemRequest)
/* harmony export */ });
class FormHealthSystemRequest {
    constructor() {
        this.name = "";
        this.email = "";
        this.website = "";
        this.street_address = "";
    }
}


/***/ }),

/***/ 6275:
/*!******************************************************!*\
  !*** ./src/app/models/forms/form-support-request.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormSupportRequest": () => (/* binding */ FormSupportRequest)
/* harmony export */ });
class FormSupportRequest {
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
        this.locations = [];
        //pagination - this is the current page (changes here should be ignored)
        this.searchAfter = '';
        this.fields = []; //specify the fields to return. if null or empty list, return all.
    }
}


/***/ }),

/***/ 5567:
/*!****************************************!*\
  !*** ./src/app/models/vault-config.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VaultProfileConfig": () => (/* binding */ VaultProfileConfig),
/* harmony export */   "vaultConfigDefaults": () => (/* binding */ vaultConfigDefaults)
/* harmony export */ });
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app.constants */ 2976);
/**
 * AppConfig interface. Update this interface to strictly type your config
 * object.
 */

// There are 3 statuses for a patient account:
// - Connected - the patient account is fully authorized and Fasten can access medical records from this institution
// - Pending - the patient has specified they have records at this institution, but Fasten has not yet been able to access them.
//             the patient must complete the connection process by logging into their account at the institution.
// - Available - these are facilities that have been found via a record locator search. The patient has not yet agreed to share medical records from this institution.
//             - this status is similar to "pending" for display purposes.
class VaultProfileConfig {
    addPendingAccount(brand, portal, endpoint) {
        if (!this.pendingPatientAccounts) {
            this.pendingPatientAccounts = [];
        }
        this.pendingPatientAccounts?.push({ brand, portal, endpoint });
    }
    addConnectedAccount(org_connection_id, connection_status, platform_type, brand_id, portal_id, endpoint_id) {
        if (!this.connectedPatientAccounts) {
            this.connectedPatientAccounts = [];
        }
        //find the newly connected account metadata from the pending list and move it to the connected list
        let pendingIndex = this.pendingPatientAccounts?.findIndex((pendingAccount) => {
            return pendingAccount.brand.id == brand_id && pendingAccount.portal.id == portal_id && pendingAccount.endpoint.id == endpoint_id;
        });
        if (pendingIndex != -1) {
            let pendingAccount = this.pendingPatientAccounts?.splice(pendingIndex, 1)[0];
            this.connectedPatientAccounts?.push({ org_connection_id, connection_status, platform_type, brand: pendingAccount.brand, portal: pendingAccount.portal, endpoint: pendingAccount.endpoint });
        }
        else {
            //TODO: lookup the brand, portal, endpoing information by ID from the Lighthouse API, and add it to the connected Patients account list.
            console.error("NOT SUPPORTED: could not find the brand, portal, endpoint information by ID");
        }
    }
    addAvailableRecordLocatorAccount(recordLocatorFacility) {
        if (!this.availableFacilities) {
            this.availableFacilities = [];
        }
        this.availableFacilities?.push(recordLocatorFacility);
    }
}
// - apiMode
// - organization information
// - org credential information
// - reconnect id.
/**
 * Default configuration for the entire application. This object is used by
 * "PortalConfigService" to set the default configuration.
 */
const vaultConfigDefaults = {
    publicId: '',
    apiMode: _app_constants__WEBPACK_IMPORTED_MODULE_0__.ApiMode.Test
};


/***/ }),

/***/ 5556:
/*!******************************************************!*\
  !*** ./src/app/pages/complete/complete.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompleteComponent": () => (/* binding */ CompleteComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/config.service */ 946);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);




class CompleteComponent {
  constructor(changeRef, configService) {
    this.changeRef = changeRef;
    this.configService = configService;
  }
  ngOnInit() {}
  markForCheck() {
    this.changeRef.markForCheck();
  }
}
CompleteComponent.ɵfac = function CompleteComponent_Factory(t) {
  return new (t || CompleteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_config_service__WEBPACK_IMPORTED_MODULE_0__.ConfigService));
};
CompleteComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: CompleteComponent,
  selectors: [["app-complete"]],
  decls: 15,
  vars: 3,
  consts: [["id", "step-completion", 1, "text-center", "space-y-6"], [1, "flex", "justify-center", "items-center"], [1, "az-logo"], [1, "w-16", "h-16", "mx-auto", "bg-[#5B47FB]/10", "rounded-full", "flex", "items-center", "justify-center", "success-circle"], ["fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "viewBox", "0 0 24 24", 1, "w-8", "h-8", "text-[#5B47FB]"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M5 13l4 4L19 7", 1, "success-check"], [1, "space-y-2"], [1, "text-2xl", "font-bold"], [1, "text-gray-600"], ["id", "completion-close", 1, "bg-[#5B47FB]", "hover:bg-[#4936E8]", "text-white", "py-2", "px-4", "rounded-md"]],
  template: function CompleteComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "fasten");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "svg", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "path", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6)(8, "h2", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Success!");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Close ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Your health records have been successfully linked with ", (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 1, ctx.configService.systemConfigSubject).org == null ? null : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 1, ctx.configService.systemConfigSubject).org.name) || "Unknown", ". You can now close this window. ");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.AsyncPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wbGV0ZS5jb21wb25lbnQuc2NzcyJ9 */"]
});

/***/ }),

/***/ 4789:
/*!********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../app.routing */ 6738);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_vault_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/vault.service */ 3843);
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/config.service */ 946);
/* harmony import */ var _router_nav_outlet_nav_outlet_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../router/nav-outlet/nav-outlet.service */ 6773);






function DashboardComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 20)(1, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "svg", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "path", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 25)(6, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Connected");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const connectedAccount_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("src", "https://cdn.fastenhealth.com/logos/sources/", connectedAccount_r2.brand == null ? null : connectedAccount_r2.brand.id, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("alt", connectedAccount_r2.brand == null ? null : connectedAccount_r2.brand.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](connectedAccount_r2.portal.name);
  }
}
function DashboardComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 20)(1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "svg", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "path", 29)(4, "line", 30)(5, "line", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 25)(8, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Sign in required");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DashboardComponent_div_12_Template_a_click_12_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const pendingAccount_r3 = restoredCtx.$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r4.connectAccount(pendingAccount_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, " Sign in ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const pendingAccount_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("src", "https://cdn.fastenhealth.com/logos/sources/", pendingAccount_r3.brand == null ? null : pendingAccount_r3.brand.id, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("alt", pendingAccount_r3.brand == null ? null : pendingAccount_r3.brand.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](pendingAccount_r3.portal.name);
  }
}
const _c0 = function () {
  return [];
};
class DashboardComponent {
  constructor(changeRef, vaultService, configService, navOutletService) {
    this.changeRef = changeRef;
    this.vaultService = vaultService;
    this.configService = configService;
    this.navOutletService = navOutletService;
  }
  ngOnInit() {
    // this.vaultService.getRecordLocatorFacilities().subscribe((facilities)=>{
    //   console.log("record locator facilities", facilities)
    //   for (let facility of facilities) {
    //     this.configService.vaultProfileAddConnectedAccount(facility)
    //   }
    // })
  }
  markForCheck() {
    this.changeRef.markForCheck();
  }
  connectAccount(pendingAccount) {
    console.log("connecting account", pendingAccount);
    this.navOutletService.navigateByUrl(_app_routing__WEBPACK_IMPORTED_MODULE_0__.NavOutletPageName.HealthSystemConnecting, new Map([["brandId", pendingAccount.brand?.id], ["portalId", pendingAccount.portal?.id], ["endpointId", pendingAccount.endpoint?.id]]));
  }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
  return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_vault_service__WEBPACK_IMPORTED_MODULE_1__.VaultService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_router_nav_outlet_nav_outlet_service__WEBPACK_IMPORTED_MODULE_3__.NavOutletService));
};
DashboardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: DashboardComponent,
  selectors: [["app-dashboard"]],
  decls: 32,
  vars: 14,
  consts: [["id", "step-connecting-systems", 1, "space-y-6"], [1, "flex", "justify-center", "items-center"], [1, "az-logo"], [1, "space-y-2"], [1, "text-xl", "font-bold"], [1, "text-sm", "text-gray-600"], ["id", "connecting-systems-list", 1, "space-y-3"], ["class", "flex items-center p-3 border rounded-lg hover:border-[#5B47FB]/30 hover:shadow-sm transition-all", 4, "ngFor", "ngForOf"], ["id", "search-button", 1, "w-full", "border", "border-gray-200", "rounded-lg", "flex", "justify-between", "items-center", "px-4", "py-3", "text-sm", "font-medium", "hover:border-[#5B47FB]", "hover:bg-[#5B47FB]/5", "transition-all", 3, "navOutletLink"], [1, "flex", "items-center", "gap-2"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", 1, "w-5", "h-5"], ["d", "M21 21l-5.2-5.2m2.2-5.3a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "lucide", "lucide-chevron-right", "w-5", "h-5", "text-gray-400"], ["points", "9 6 15 12 9 18"], [1, "flex", "items-center", "justify-between", "pt-4"], [1, "flex", "items-center", "gap-2", "text-sm", "text-gray-600"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "lucide", "lucide-lock", "w-4", "h-4"], ["width", "18", "height", "11", "x", "3", "y", "11", "rx", "2", "ry", "2"], ["d", "M7 11V7a5 5 0 0 1 10 0v4"], ["id", "connecting-continue", 1, "bg-[#5B47FB]", "hover:bg-[#4936E8]", "text-white", "py-2", "px-4", "rounded-md", "disabled:opacity-50", 3, "disabled", "navOutletLink"], [1, "flex", "items-center", "p-3", "border", "rounded-lg", "hover:border-[#5B47FB]/30", "hover:shadow-sm", "transition-all"], [1, "connect-btn", "w-8", "h-8", "rounded-full", "border", "border-[#5B47FB]", "bg-[#5B47FB]", "transition-all", "hover:bg-[#4936E8]", "hover:border-[#4936E8]", "animate-scale"], ["fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "w-4", "h-4", "mx-auto", "text-white", "animate-scale"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M5 13l4 4L19 7"], ["imageFallback", "", 1, "w-8", "max-h-8", "mx-4", "rounded", 3, "src", "alt"], [1, "flex-1", "min-w-0"], [1, "font-semibold"], [1, "w-8", "h-8", "flex", "items-center", "justify-center", "animate-bounce"], ["xmlns", "http://www.w3.org/2000/svg", "width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "text-amber-500"], ["d", "M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"], ["x1", "12", "y1", "9", "x2", "12", "y2", "13"], ["x1", "12", "y1", "17", "x2", "12.01", "y2", "17"], ["imageFallback", "", 1, "w-8", "max-h-8", "mx-3", "rounded", 3, "src", "alt"], [1, "border", "border-[#5B47FB]", "text-[#5B47FB]", "hover:bg-[#5B47FB]", "hover:text-white", "px-4", "py-1.5", "rounded-lg", "text-sm", "font-medium", "transition-colors", 3, "click"]],
  template: function DashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "fasten");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 3)(5, "h2", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Select Health Systems");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "p", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, " Choose the health systems you'd like to connect ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, DashboardComponent_div_10_Template, 10, 3, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](11, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, DashboardComponent_div_12_Template, 14, 3, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](13, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "button", 8)(15, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "svg", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "path", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Connect a new health system");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "svg", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "polyline", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 14)(23, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "svg", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](25, "rect", 17)(26, "path", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "Your medical records are secure");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "button", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](30, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, " Continue ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      let tmp_0_0;
      let tmp_1_0;
      let tmp_3_0;
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](11, 5, ctx.configService.vaultProfileConfigSubject)) == null ? null : tmp_0_0.connectedPatientAccounts) || _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](11, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ((tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](13, 7, ctx.configService.vaultProfileConfigSubject)) == null ? null : tmp_1_0.pendingPatientAccounts) || _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](12, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("navOutletLink", "health-system-search");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !(((tmp_3_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](30, 9, ctx.configService.vaultProfileConfigSubject)) == null ? null : tmp_3_0.connectedPatientAccounts) || _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](13, _c0)).length)("navOutletLink", "complete");
    }
  },
  styles: [".blurred[_ngcontent-%COMP%] {\n  \n  filter: blur(3px);\n  \n  filter: url(\"/assets/blur.svg#gaussian_blur\");\n  \n  -webkit-filter: blur(3px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLG9DQUFBO0VBQ0EsaUJBQUE7RUFFQSxtQ0FBQTtFQUNBLDZDQUFBO0VBRUEseURBQUE7RUFDQSx5QkFBQTtBQUZGIiwiZmlsZSI6ImRhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ibHVycmVkIHtcblxuICAvKiBBbnkgYnJvd3NlciB3aGljaCBzdXBwb3J0cyBDU1MzICovXG4gIGZpbHRlcjogYmx1cigzcHgpO1xuXG4gIC8qIEZpcmVmb3ggdmVyc2lvbiAzNCBhbmQgZWFybGllciAqL1xuICBmaWx0ZXI6IHVybChcIi9hc3NldHMvYmx1ci5zdmcjZ2F1c3NpYW5fYmx1clwiKTtcblxuICAvKiBXZWJraXQgaW4gQ2hyb21lIDUyLCBTYWZhcmkgOSwgT3BlcmEgMzksIGFuZCBlYXJsaWVyICovXG4gIC13ZWJraXQtZmlsdGVyOiBibHVyKDNweCk7XG59XG4iXX0= */"]
});

/***/ }),

/***/ 4313:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/form-health-system-request/form-health-system-request.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormHealthSystemRequestComponent": () => (/* binding */ FormHealthSystemRequestComponent)
/* harmony export */ });
/* harmony import */ var _models_forms_form_health_system_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/forms/form-health-system-request */ 3903);
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app.routing */ 6738);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _router_nav_outlet_nav_outlet_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../router/nav-outlet/nav-outlet.service */ 6773);
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/config.service */ 946);
/* harmony import */ var _services_vault_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/vault.service */ 3843);







function FormHealthSystemRequestComponent_form_7_p_15_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Email is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function FormHealthSystemRequestComponent_form_7_p_15_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Email must be valid. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function FormHealthSystemRequestComponent_form_7_p_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, FormHealthSystemRequestComponent_form_7_p_15_span_1_Template, 2, 0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, FormHealthSystemRequestComponent_form_7_p_15_span_2_Template, 2, 0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r4.errors == null ? null : _r4.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r4.errors == null ? null : _r4.errors["email"]);
} }
function FormHealthSystemRequestComponent_form_7_p_23_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Health system name is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function FormHealthSystemRequestComponent_form_7_p_23_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Health system name must be at least 4 characters long. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function FormHealthSystemRequestComponent_form_7_p_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, FormHealthSystemRequestComponent_form_7_p_23_span_1_Template, 2, 0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, FormHealthSystemRequestComponent_form_7_p_23_span_2_Template, 2, 0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r6.errors == null ? null : _r6.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r6.errors == null ? null : _r6.errors["minlength"]);
} }
function FormHealthSystemRequestComponent_form_7_p_31_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Website is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function FormHealthSystemRequestComponent_form_7_p_31_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Website must be at least 4 characters long. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function FormHealthSystemRequestComponent_form_7_p_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, FormHealthSystemRequestComponent_form_7_p_31_span_1_Template, 2, 0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, FormHealthSystemRequestComponent_form_7_p_31_span_2_Template, 2, 0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r8.errors == null ? null : _r8.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r8.errors == null ? null : _r8.errors["minlength"]);
} }
function FormHealthSystemRequestComponent_form_7_p_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 28)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r11.errorMsg, " ");
} }
function FormHealthSystemRequestComponent_form_7_app_spinner_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-spinner");
} }
function FormHealthSystemRequestComponent_form_7_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "form", 8, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function FormHealthSystemRequestComponent_form_7_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r19.submitForm()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 10)(3, "h2", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Request your Health System");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, " Sharing your email address and related information helps us prioritize your Health System. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 13)(8, "div", 14)(9, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Your email address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "input", 17, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function FormHealthSystemRequestComponent_form_7_Template_input_ngModelChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r21.formRequestHealthSystem.email = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, FormHealthSystemRequestComponent_form_7_p_15_Template, 3, 2, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 14)(17, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "Health system name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "input", 20, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function FormHealthSystemRequestComponent_form_7_Template_input_ngModelChange_21_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r22.formRequestHealthSystem.name = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](23, FormHealthSystemRequestComponent_form_7_p_23_Template, 3, 2, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 14)(25, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "Website ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "input", 22, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function FormHealthSystemRequestComponent_form_7_Template_input_ngModelChange_29_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r23.formRequestHealthSystem.website = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](31, FormHealthSystemRequestComponent_form_7_p_31_Template, 3, 2, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div", 14)(33, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, "Street Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "input", 24, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function FormHealthSystemRequestComponent_form_7_Template_input_ngModelChange_35_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r24.formRequestHealthSystem.street_address = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](37, FormHealthSystemRequestComponent_form_7_p_37_Template, 4, 1, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](39, FormHealthSystemRequestComponent_form_7_app_spinner_39_Template, 1, 0, "app-spinner", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](1);
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](14);
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](22);
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](30);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r0.formRequestHealthSystem.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r4.invalid && (_r4.dirty || _r4.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r0.formRequestHealthSystem.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r6.invalid && (_r6.dirty || _r6.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r0.formRequestHealthSystem.website);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _r8.invalid && (_r8.dirty || _r8.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r0.formRequestHealthSystem.street_address);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.errorMsg);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !_r3.form.valid || ctx_r0.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.loading);
} }
function FormHealthSystemRequestComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 29)(1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "svg", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "path", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 33)(5, "div")(6, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, " Thanks for providing information about your Health System. Your request has been recorded and we will notify you once your Health System is supported. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FormHealthSystemRequestComponent_ng_template_8_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r25.dismiss()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, " Dismiss ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
} }
class FormHealthSystemRequestComponent {
    constructor(changeRef, navOutletService, configService, vaultApi) {
        this.changeRef = changeRef;
        this.navOutletService = navOutletService;
        this.configService = configService;
        this.vaultApi = vaultApi;
        this.formRequestHealthSystem = {};
        this.loading = false;
        this.submitSuccess = false;
        this.errorMsg = "";
    }
    ngOnInit() {
        this.resetForm();
    }
    markForCheck() {
        this.changeRef.markForCheck();
    }
    resetForm() {
        this.submitSuccess = false;
        let requestForm = new _models_forms_form_health_system_request__WEBPACK_IMPORTED_MODULE_0__.FormHealthSystemRequest();
        requestForm.email = '';
        requestForm.name = this.configService.searchConfig$.searchFilter?.query || "";
        requestForm.street_address = '';
        requestForm.website = '';
        this.formRequestHealthSystem = requestForm;
    }
    submitForm() {
        this.loading = true;
        this.vaultApi.requestHealthSystem(this.formRequestHealthSystem).subscribe((resp) => {
            this.loading = false;
            this.submitSuccess = true;
            //show success toast? close modal?
        }, (err) => {
            this.loading = false;
            console.error("an error occurred during request submission", err);
            this.errorMsg = err || "An error occurred while submitting your request. Please try again later.";
        });
    }
    dismiss() {
        // this.messageBus.componentNavigationSubject.next({
        //   page: ComponentNavPage.Search,
        // } as ComponentNavigationEvent)
        this.navOutletService.navigateByUrl(_app_routing__WEBPACK_IMPORTED_MODULE_1__.NavOutletPageName.Dashboard);
    }
}
FormHealthSystemRequestComponent.ɵfac = function FormHealthSystemRequestComponent_Factory(t) { return new (t || FormHealthSystemRequestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_router_nav_outlet_nav_outlet_service__WEBPACK_IMPORTED_MODULE_2__.NavOutletService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_config_service__WEBPACK_IMPORTED_MODULE_3__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_vault_service__WEBPACK_IMPORTED_MODULE_4__.VaultService)); };
FormHealthSystemRequestComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: FormHealthSystemRequestComponent, selectors: [["app-form-health-system-request"]], decls: 10, vars: 3, consts: [["id", "step-request-form", 1, "space-y-6"], ["id", "request-form-nav", 1, "relative", "flex", "justify-center", "items-center"], ["type", "button", "id", "request-back", 1, "absolute", "left-0", "top-1/2", "-translate-y-1/2", "text-gray-700", "p-2", "hover:bg-gray-100", "rounded-md", 3, "navOutletLink"], ["fill", "none", "stroke", "currentColor", "stroke-width", "2", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M15 19l-7-7 7-7"], [1, "az-logo"], ["id", "request-form", "class", "space-y-6", 3, "ngSubmit", 4, "ngIf", "ngIfElse"], ["requestSuccess", ""], ["id", "request-form", 1, "space-y-6", 3, "ngSubmit"], ["healthSystemRequestForm", "ngForm"], ["id", "request-form-header", 1, "space-y-2"], [1, "text-xl", "font-bold"], [1, "text-base", "text-gray-600"], [1, "space-y-4"], [1, "space-y-2"], [1, "block", "text-sm", "font-medium", "text-gray-700", "tracking-tight"], [1, "text-red-500"], ["id", "request-email", "type", "email", "placeholder", "you@example.com", "required", "", "email", "", "name", "email", 1, "block", "w-full", "mt-1", "px-3", "py-2", "text-base", "rounded-md", "border", "border-gray-300", "focus:outline-none", "focus:ring-2", "focus:ring-[#5B47FB]", "focus:ring-opacity-20", "tracking-tight", 3, "ngModel", "ngModelChange"], ["email", "ngModel"], ["class", "mt-2 text-sm text-red-600 dark:text-red-500", 4, "ngIf"], ["id", "request-healthsystem", "type", "text", "placeholder", "Mayo Clinic, Cleveland Clinic, Kaiser Permanente", "name", "name", "required", "", "minlength", "4", 1, "block", "w-full", "mt-1", "px-3", "py-2", "text-base", "rounded-md", "border", "border-gray-300", "focus:outline-none", "focus:ring-2", "focus:ring-[#5B47FB]", "focus:ring-opacity-20", "tracking-tight", 3, "ngModel", "ngModelChange"], ["name", "ngModel"], ["id", "request-website", "type", "text", "placeholder", "www.mayoclinic.org", "name", "website", "required", "", "minlength", "4", 1, "block", "w-full", "mt-1", "px-3", "py-2", "text-base", "rounded-md", "border", "border-gray-300", "focus:outline-none", "focus:ring-2", "focus:ring-[#5B47FB]", "focus:ring-opacity-20", "tracking-tight", 3, "ngModel", "ngModelChange"], ["website", "ngModel"], ["id", "request-address", "type", "text", "placeholder", "123 Broadway, New York, NY", "name", "website", 1, "block", "w-full", "mt-1", "px-3", "py-2", "text-base", "rounded-md", "border", "border-gray-300", "focus:outline-none", "focus:ring-2", "focus:ring-[#5B47FB]", "focus:ring-opacity-20", "tracking-tight", 3, "ngModel", "ngModelChange"], ["street_address", "ngModel"], ["type", "submit", 1, "w-full", "bg-[#5B47FB]", "hover:bg-[#4936E8]", "text-white", "py-2", "px-4", "rounded-md", "tracking-tight", "font-medium", "flex", "justify-center", "items-center", 3, "disabled"], [4, "ngIf"], [1, "mt-2", "text-sm", "text-red-600", "dark:text-red-500"], ["id", "request-success-animation", 1, "text-center", "py-16"], [1, "w-16", "h-16", "mx-auto", "bg-[#5B47FB]/10", "rounded-full", "flex", "items-center", "justify-center", "success-circle"], ["fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "viewBox", "0 0 24 24", 1, "w-8", "h-8", "text-[#5B47FB]"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M5 13l4 4L19 7", 1, "success-check"], [1, "flex", "items-center", "justify-center"], [1, "text-base", "text-gray-600", "py-5"], ["type", "button", 1, "py-2", "w-full", "bg-[#5B47FB]", "hover:bg-[#4936E8]", "text-white", "py-2", "px-4", "rounded-md", "tracking-tight", "font-medium", 3, "click"]], template: function FormHealthSystemRequestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "path", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "fasten");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, FormHealthSystemRequestComponent_form_7_Template, 41, 10, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, FormHealthSystemRequestComponent_ng_template_8_Template, 10, 0, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("navOutletLink", "dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.submitSuccess)("ngIfElse", _r1);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JtLWhlYWx0aC1zeXN0ZW0tcmVxdWVzdC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 7210:
/*!******************************************************************************!*\
  !*** ./src/app/pages/form-support-request/form-support-request.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormSupportRequestComponent": () => (/* binding */ FormSupportRequestComponent)
/* harmony export */ });
/* harmony import */ var _models_forms_form_support_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/forms/form-support-request */ 6275);
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app.routing */ 6738);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _router_nav_outlet_nav_outlet_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../router/nav-outlet/nav-outlet.service */ 6773);
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/config.service */ 946);
/* harmony import */ var _services_vault_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/vault.service */ 3843);







function FormSupportRequestComponent_form_7_app_spinner_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-spinner");
} }
function FormSupportRequestComponent_form_7_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "form", 8, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function FormSupportRequestComponent_form_7_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r5.submitForm()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 10)(3, "h2", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Report an issue");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, " Sharing your email address and related information helps us prioritize your issue. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 13)(8, "div", 14)(9, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Your email address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 14)(15, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Health system name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 14)(21, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "Describe your issue");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](25, "textarea", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](27, FormSupportRequestComponent_form_7_app_spinner_27_Template, 1, 0, "app-spinner", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](1);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !_r3.form.valid || ctx_r0.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.loading);
} }
function FormSupportRequestComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 22)(1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "svg", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "path", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 26)(5, "div")(6, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, " Thanks for providing information about your issue. Your request has been recorded and we will notify you once we have an update. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function FormSupportRequestComponent_ng_template_8_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r7.dismiss()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, " Dismiss ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
} }
class FormSupportRequestComponent {
    constructor(changeRef, navOutletService, configService, vaultApi) {
        this.changeRef = changeRef;
        this.navOutletService = navOutletService;
        this.configService = configService;
        this.vaultApi = vaultApi;
        this.formSupportRequest = {};
        this.loading = false;
        this.submitSuccess = false;
        this.errorMsg = "";
    }
    ngOnInit() {
        this.resetForm();
    }
    markForCheck() {
        this.changeRef.markForCheck();
    }
    resetForm() {
        this.submitSuccess = false;
        let requestForm = new _models_forms_form_support_request__WEBPACK_IMPORTED_MODULE_0__.FormSupportRequest();
        requestForm.email = '';
        requestForm.healthsystem_name = this.configService.searchConfig$.searchFilter?.query || "";
        requestForm.request_content = '';
        this.formSupportRequest = requestForm;
    }
    submitForm() {
        this.loading = true;
        this.vaultApi.requestSupport(this.formSupportRequest).subscribe((resp) => {
            this.loading = false;
            this.submitSuccess = true;
            //show success toast? close modal?
        }, (err) => {
            this.loading = false;
            console.error("an error occurred during issue submission", err);
            this.errorMsg = err || "An error occurred while submitting your issue. Please try again later.";
        });
    }
    dismiss() {
        // this.messageBus.componentNavigationSubject.next({
        //   page: ComponentNavPage.Search,
        // } as ComponentNavigationEvent)
        this.navOutletService.navigateByUrl(_app_routing__WEBPACK_IMPORTED_MODULE_1__.NavOutletPageName.Dashboard);
    }
}
FormSupportRequestComponent.ɵfac = function FormSupportRequestComponent_Factory(t) { return new (t || FormSupportRequestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_router_nav_outlet_nav_outlet_service__WEBPACK_IMPORTED_MODULE_2__.NavOutletService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_config_service__WEBPACK_IMPORTED_MODULE_3__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_vault_service__WEBPACK_IMPORTED_MODULE_4__.VaultService)); };
FormSupportRequestComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: FormSupportRequestComponent, selectors: [["app-form-support-request"]], decls: 10, vars: 3, consts: [["id", "step-request-form", 1, "space-y-6"], ["id", "request-form-nav", 1, "relative", "flex", "justify-center", "items-center"], ["type", "button", "id", "request-back", 1, "absolute", "left-0", "top-1/2", "-translate-y-1/2", "text-gray-700", "p-2", "hover:bg-gray-100", "rounded-md", 3, "navOutletLink"], ["fill", "none", "stroke", "currentColor", "stroke-width", "2", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M15 19l-7-7 7-7"], [1, "az-logo"], ["id", "request-form", "class", "space-y-6", 3, "ngSubmit", 4, "ngIf", "ngIfElse"], ["requestSuccess", ""], ["id", "request-form", 1, "space-y-6", 3, "ngSubmit"], ["supportRequestForm", "ngForm"], ["id", "request-form-header", 1, "space-y-2"], [1, "text-xl", "font-bold"], [1, "text-base", "text-gray-600"], [1, "space-y-4"], [1, "space-y-2"], [1, "block", "text-sm", "font-medium", "text-gray-700", "tracking-tight"], [1, "text-red-500"], ["id", "request-email", "type", "email", "placeholder", "you@example.com", "required", "", 1, "block", "w-full", "mt-1", "px-3", "py-2", "text-base", "rounded-md", "border", "border-gray-300", "focus:outline-none", "focus:ring-2", "focus:ring-[#5B47FB]", "focus:ring-opacity-20", "tracking-tight"], ["id", "request-healthsystem", "type", "text", "readonly", "", "placeholder", "Mayo Clinic, Cleveland Clinic, Kaiser Permanente", "required", "", 1, "block", "w-full", "mt-1", "px-3", "py-2", "text-base", "rounded-md", "border", "border-gray-300", "focus:outline-none", "focus:ring-2", "focus:ring-[#5B47FB]", "focus:ring-opacity-20", "tracking-tight"], ["id", "request-description", "placeholder", "please provide as much data as possible, it helps us prioritize your issue", "required", "", 1, "block", "w-full", "mt-1", "px-3", "py-2", "text-base", "rounded-md", "border", "border-gray-300", "focus:outline-none", "focus:ring-2", "focus:ring-[#5B47FB]", "focus:ring-opacity-20", "tracking-tight"], ["type", "submit", 1, "w-full", "bg-[#5B47FB]", "hover:bg-[#4936E8]", "text-white", "py-2", "px-4", "rounded-md", "tracking-tight", "font-medium", "flex", "justify-center", "items-center", 3, "disabled"], [4, "ngIf"], ["id", "request-success-animation", 1, "text-center", "py-16"], [1, "w-16", "h-16", "mx-auto", "bg-[#5B47FB]/10", "rounded-full", "flex", "items-center", "justify-center", "success-circle"], ["fill", "none", "stroke", "currentColor", "stroke-width", "2.5", "viewBox", "0 0 24 24", 1, "w-8", "h-8", "text-[#5B47FB]"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M5 13l4 4L19 7", 1, "success-check"], [1, "flex", "items-center", "justify-center"], [1, "text-base", "text-gray-600", "py-5"], ["type", "button", 1, "py-2", "w-full", "bg-[#5B47FB]", "hover:bg-[#4936E8]", "text-white", "py-2", "px-4", "rounded-md", "tracking-tight", "font-medium", 3, "click"]], template: function FormSupportRequestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "path", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "fasten");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, FormSupportRequestComponent_form_7_Template, 29, 2, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, FormSupportRequestComponent_ng_template_8_Template, 10, 0, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("navOutletLink", "dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.submitSuccess)("ngIfElse", _r1);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JtLXN1cHBvcnQtcmVxdWVzdC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 5609:
/*!********************************************************************************************!*\
  !*** ./src/app/pages/health-system-brand-details/health-system-brand-details.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HealthSystemBrandDetailsComponent": () => (/* binding */ HealthSystemBrandDetailsComponent)
/* harmony export */ });
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../app.routing */ 6738);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/config.service */ 946);
/* harmony import */ var _router_nav_outlet_nav_outlet_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../router/nav-outlet/nav-outlet.service */ 6773);





function HealthSystemBrandDetailsComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "svg", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "circle", 21)(3, "path", 22)(4, "path", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("href", ctx_r0.brand.brand_website, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.brand.brand_website);
} }
function HealthSystemBrandDetailsComponent_div_18_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "stateName");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stateCode_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, stateCode_r5));
} }
function HealthSystemBrandDetailsComponent_div_18_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("+ ", ctx_r4.brand.locations.length, "");
} }
function HealthSystemBrandDetailsComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "svg", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "path", 27)(3, "circle", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, HealthSystemBrandDetailsComponent_div_18_span_5_Template, 3, 3, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, HealthSystemBrandDetailsComponent_div_18_span_7_Template, 2, 1, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](6, 2, ctx_r1.brand.locations, 0, 3));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.brand.locations.length > 4);
} }
function HealthSystemBrandDetailsComponent_ng_container_20_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 32)(1, "div", 33)(2, "h4", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HealthSystemBrandDetailsComponent_ng_container_20_div_1_Template_button_click_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const endpoint_r8 = restoredCtx.$implicit; const portal_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r9.addPendingAccount(ctx_r9.brand, portal_r6, endpoint_r8)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const portal_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](portal_r6.name);
} }
function HealthSystemBrandDetailsComponent_ng_container_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, HealthSystemBrandDetailsComponent_ng_container_20_div_1_Template, 6, 1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const portal_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", portal_r6.endpoints);
} }
class HealthSystemBrandDetailsComponent {
    constructor(changeRef, configService, navOutletService) {
        this.changeRef = changeRef;
        this.configService = configService;
        this.navOutletService = navOutletService;
        this.brand = configService.searchConfig$.selectedBrand;
    }
    ngOnInit() {
    }
    markForCheck() {
        this.changeRef.markForCheck();
    }
    addPendingAccount(brand, portal, endpoint) {
        console.log("addPendingAccount");
        this.configService.vaultProfileAddPendingAccount(brand, portal, endpoint);
        this.navOutletService.navigateByUrl(_app_routing__WEBPACK_IMPORTED_MODULE_0__.NavOutletPageName.Dashboard);
    }
}
HealthSystemBrandDetailsComponent.ɵfac = function HealthSystemBrandDetailsComponent_Factory(t) { return new (t || HealthSystemBrandDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_config_service__WEBPACK_IMPORTED_MODULE_1__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_router_nav_outlet_nav_outlet_service__WEBPACK_IMPORTED_MODULE_2__.NavOutletService)); };
HealthSystemBrandDetailsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: HealthSystemBrandDetailsComponent, selectors: [["app-health-system-brand-details"]], inputs: { brand: "brand" }, decls: 21, vars: 6, consts: [["id", "step-health-system-details", 1, "space-y-6"], [1, "relative", "flex", "justify-center", "items-center"], ["type", "button", "id", "hsd-back", 1, "absolute", "left-0", "top-1/2", "-translate-y-1/2", "text-gray-700", "p-2", "hover:bg-gray-100", "rounded-md", 3, "navOutletLink"], ["fill", "none", "stroke", "currentColor", "stroke-width", "2", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M15 19l-7-7 7-7"], [1, "az-logo"], [1, "space-y-6"], [1, "border", "rounded-2xl", "p-6"], [1, "flex", "items-start", "space-x-4", "mb-4"], [1, "flex-shrink-0"], ["imageFallback", "", 1, "w-12", "max-h-12", "rounded-lg", "object-contain", 3, "src"], [1, "flex-1", "min-w-0"], ["id", "hsd-name", 1, "text-xl", "font-semibold"], ["id", "hsd-description", 1, "text-gray-600", "text-base", "mb-4"], [1, "space-y-2"], ["class", "flex items-center gap-2 text-gray-600", "id", "hsd-website-container", 4, "ngIf"], ["class", "flex items-center gap-2 text-gray-600", 4, "ngIf"], ["id", "hsd-institutions-list", 1, "space-y-2"], [4, "ngFor", "ngForOf"], ["id", "hsd-website-container", 1, "flex", "items-center", "gap-2", "text-gray-600"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "lucide", "lucide-globe", "w-5", "h-5"], ["cx", "12", "cy", "12", "r", "10"], ["d", "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"], ["d", "M2 12h20"], ["id", "hsd-website", "target", "_blank", "rel", "noopener noreferrer", 1, "text-base", "hover:underline", 3, "href"], [1, "flex", "items-center", "gap-2", "text-gray-600"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "lucide", "lucide-map-pin", "w-5", "h-5"], ["d", "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"], ["cx", "12", "cy", "10", "r", "3"], ["id", "hsd-location", 1, "text-base"], [4, "ngIf"], ["class", "p-4 border rounded-lg hover:border-gray-400 transition-colors", 4, "ngFor", "ngForOf"], [1, "p-4", "border", "rounded-lg", "hover:border-gray-400", "transition-colors"], [1, "flex", "items-center", "justify-between"], [1, "font-medium", "text-base", "tracking-tight"], ["type", "button", 1, "border", "border-[#5B47FB]", "text-[#5B47FB]", "hover:bg-[#5B47FB]", "hover:text-white", "w-8", "h-8", "rounded-lg", "text-lg", "font-medium", "transition-colors", "flex", "items-center", "justify-center", 3, "click"]], template: function HealthSystemBrandDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "path", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "fasten");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 6)(8, "div", 7)(9, "div", 8)(10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 11)(13, "h2", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, HealthSystemBrandDetailsComponent_div_17_Template, 7, 2, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, HealthSystemBrandDetailsComponent_div_18_Template, 8, 6, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, HealthSystemBrandDetailsComponent_ng_container_20_Template, 2, 1, "ng-container", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("navOutletLink", "health-system-search");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("src", "https://cdn.fastenhealth.com/logos/sources/", ctx.brand.id, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.brand.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.brand.brand_website);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.brand.locations);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.brand.portals);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFsdGgtc3lzdGVtLWJyYW5kLWRldGFpbHMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 3382:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/health-system-connecting/health-system-connecting.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HealthSystemConnectingComponent": () => (/* binding */ HealthSystemConnectingComponent)
/* harmony export */ });
/* harmony import */ var _utils_connect_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/connect-helper */ 7968);
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app.routing */ 6738);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/config.service */ 946);
/* harmony import */ var _router_nav_outlet_nav_outlet_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../router/nav-outlet/nav-outlet.service */ 6773);






class HealthSystemConnectingComponent {
    constructor(changeRef, configService, navOutletService, injector) {
        this.changeRef = changeRef;
        this.configService = configService;
        this.navOutletService = navOutletService;
        this.injector = injector;
        this.brandId = "";
        this.portalId = "";
        this.endpointId = "";
    }
    ngOnInit() {
        this.injector.runInContext(() => {
            (0,_utils_connect_helper__WEBPACK_IMPORTED_MODULE_0__.ConnectHelper)({
                public_id: this.configService.systemConfig$.publicId,
                catalog_brand_id: this.brandId,
                catalog_portal_id: this.portalId,
                catalog_endpoint_id: this.endpointId,
                // org_connection_id: this.reconnectOrgConnectionId,
                // external_id: this.externalId,
                // external_state: this.externalState,
                // connect_mode: this.connectMode,
            });
        });
    }
    markForCheck() {
        this.changeRef.markForCheck();
    }
    cancelAccountConnect() {
        this.navOutletService.navigateByUrl(_app_routing__WEBPACK_IMPORTED_MODULE_1__.NavOutletPageName.Dashboard);
    }
}
HealthSystemConnectingComponent.ɵfac = function HealthSystemConnectingComponent_Factory(t) { return new (t || HealthSystemConnectingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_router_nav_outlet_nav_outlet_service__WEBPACK_IMPORTED_MODULE_3__.NavOutletService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.EnvironmentInjector)); };
HealthSystemConnectingComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: HealthSystemConnectingComponent, selectors: [["app-health-system-connecting"]], inputs: { brandId: "brandId", portalId: "portalId", endpointId: "endpointId" }, decls: 36, vars: 2, consts: [[1, "space-y-6"], [1, "relative", "flex", "justify-center", "items-center"], ["type", "button", "id", "connecting-back", 1, "absolute", "left-0", "top-1/2", "-translate-y-1/2", "text-gray-700", "p-2", "hover:bg-gray-100", "rounded-md", 3, "click"], ["fill", "none", "stroke", "currentColor", "stroke-width", "2", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M15 19l-7-7 7-7"], ["type", "button", "id", "connecting-close", 1, "absolute", "right-0", "top-1/2", "-translate-y-1/2", "text-gray-700", "p-2", "hover:bg-gray-100", "rounded-md"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M6 18L18 6M6 6l12 12"], [1, "az-logo"], [1, "flex", "items-center", "justify-center", "gap-4"], [1, "relative", "w-16", "h-16", "bg-white", "rounded-2xl", "shadow-md", "p-3", "animate-pulse-flow", "delay-100"], ["imageFallback", "fasten-logo", "src", "https://logo.clearbit.com/fastenhealth.com", "alt", "Fasten Health", 1, "w-full", "h-full", "object-contain"], [1, "flex", "space-x-1"], [1, "w-2", "h-2", "bg-[#5B47FB]", "rounded-full", "animate-pulse-flow", "delay-100"], [1, "w-2", "h-2", "bg-[#5B47FB]", "rounded-full", "animate-pulse-flow", "delay-200"], [1, "w-2", "h-2", "bg-[#5B47FB]", "rounded-full", "animate-pulse-flow", "delay-300"], [1, "relative", "w-16", "h-16", "bg-white", "rounded-2xl", "shadow-md", "p-3", "animate-pulse-flow", "delay-300"], ["id", "connecting-system-logo-container", 1, "w-full", "h-full", "flex", "items-center", "justify-center"], ["id", "connecting-system-logo", "imageFallback", "hospital", 1, "w-full", "h-full", "object-contain", 3, "src"], [1, "text-center", "space-y-2"], ["id", "connecting-title", 1, "text-xl", "font-semibold", "text-gray-900"], ["id", "connecting-subtitle", 1, "text-sm", "text-gray-600"], [1, "mt-8", "p-4", "bg-gray-50", "rounded-lg", "space-y-4"], [1, "flex", "items-center", "gap-2", "text-gray-700"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "w-5", "h-5"], ["cx", "12", "cy", "12", "r", "10"], ["d", "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"], ["d", "M12 17h.01"], [1, "font-medium"], [1, "text-sm", "text-gray-600"], [1, "w-full", "bg-white", "border", "border-gray-200", "text-[#5B47FB]", "hover:bg-[#5B47FB]", "hover:text-white", "hover:border-[#5B47FB]", "font-medium", "py-2", "px-4", "rounded-md", "transition-colors", 3, "navOutletLink"]], template: function HealthSystemConnectingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HealthSystemConnectingComponent_Template_button_click_2_listener() { return ctx.cancelAccountConnect(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "path", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "h1", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "fasten");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 8)(11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "div", 12)(15, "div", 13)(16, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 15)(18, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "h2", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Redirecting to sign in...");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 21)(25, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "svg", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](27, "circle", 24)(28, "path", 25)(29, "path", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "Having trouble?");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, " If you're experiencing issues connecting to your health system, our support team is here to help. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, " Contact Support ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("src", "https://cdn.fastenhealth.com/logos/sources/", ctx.brandId, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("navOutletLink", "form-support-request");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFsdGgtc3lzdGVtLWNvbm5lY3RpbmcuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 7936:
/*!******************************************************************************!*\
  !*** ./src/app/pages/health-system-search/health-system-search.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HealthSystemSearchComponent": () => (/* binding */ HealthSystemSearchComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var _models_search_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/search-filter */ 6035);
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app.routing */ 6738);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_vault_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/vault.service */ 3843);
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/config.service */ 946);
/* harmony import */ var _router_nav_outlet_nav_outlet_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../router/nav-outlet/nav-outlet.service */ 6773);








function HealthSystemSearchComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 16)(1, "h3", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Filters");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 18)(4, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "State");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "button", 20)(7, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "All States");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "svg", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "polyline", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 24)(12, "div", 25)(13, "button", 26)(14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "All States");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "svg", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](17, "polyline", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
} }
function HealthSystemSearchComponent_button_15_p_5_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "safeHtml");
} if (rf & 2) {
    const highlight_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 1, highlight_r8), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);
} }
function HealthSystemSearchComponent_button_15_p_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Found match(es): ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, HealthSystemSearchComponent_button_15_p_5_span_2_Template, 2, 3, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const brand_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", brand_r3 == null ? null : brand_r3.searchHighlights);
} }
function HealthSystemSearchComponent_button_15_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "stateName");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stateCode_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, stateCode_r10));
} }
function HealthSystemSearchComponent_button_15_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const brand_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("+ ", brand_r3 == null ? null : brand_r3.brand.locations.length, "");
} }
const _c0 = function () { return []; };
function HealthSystemSearchComponent_button_15_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HealthSystemSearchComponent_button_15_Template_button_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13); const brand_r3 = restoredCtx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r12.selectBrand(brand_r3.brand)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 31)(3, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, HealthSystemSearchComponent_button_15_p_5_Template, 3, 1, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, HealthSystemSearchComponent_button_15_span_7_Template, 3, 3, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](8, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, HealthSystemSearchComponent_button_15_span_9_Template, 2, 1, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "svg", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "polyline", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const brand_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("src", "https://cdn.fastenhealth.com/logos/sources/", brand_r3 == null ? null : brand_r3.brand == null ? null : brand_r3.brand.id, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("alt", brand_r3 == null ? null : brand_r3.brand == null ? null : brand_r3.brand.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](brand_r3 == null ? null : brand_r3.brand == null ? null : brand_r3.brand.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ((brand_r3 == null ? null : brand_r3.searchHighlights) || _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](10, _c0)).length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind3"](8, 6, brand_r3 == null ? null : brand_r3.brand.locations, 0, 3));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (brand_r3 == null ? null : brand_r3.brand.locations.length) > 4);
} }
function HealthSystemSearchComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 42)(1, "div", 43)(2, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "svg", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "circle", 46)(5, "path", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "No results found");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, " We couldn't find any health systems matching your search ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, " Request this health system ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("navOutletLink", "form-support-request");
} }
class HealthSystemSearchComponent {
    constructor(changeRef, vaultServiceApi, configService, navOutletService) {
        this.changeRef = changeRef;
        this.vaultServiceApi = vaultServiceApi;
        this.configService = configService;
        this.navOutletService = navOutletService;
        this.loading = false;
        this.lighthouseBrandList = [];
        this.showFilters = false;
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
    markForCheck() {
        this.changeRef.markForCheck();
    }
    querySources(reset) {
        if (reset) {
            this.resetSearch();
        }
        console.log("querySources()", this.filter);
        if (this.loading) {
            console.log("already loading, ignoring querySources()");
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(null);
        }
        //TODO: pass filter to function.
        // this.location.replaceState('/dashboard','', this.filter)
        if (!this.filter) {
            this.filter = new _models_search_filter__WEBPACK_IMPORTED_MODULE_0__.SearchFilter();
            console.log("querySources() - no filter provided, using current form value", this.filter);
        }
        this.filter.fields = ["*"];
        // this.filter.locations = ["ALL"]
        this.loading = true;
        // this.filter.showHidden = true
        // this.filter.platformTypes = ["epic"]
        var searchObservable = this.vaultServiceApi.searchCatalogBrands(this.configService.systemConfig$.apiMode, this.filter);
        searchObservable.subscribe(wrapper => {
            console.log("search sources", wrapper);
            // this.searchResults = wrapper.hits.hits;
            this.resultLimits.totalItems = wrapper?.hits?.total.value || 0;
            this.lighthouseBrandList = this.lighthouseBrandList.concat((wrapper?.hits?.hits || []).map((result) => {
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
    onScroll() {
        if (!this.resultLimits.scrollComplete) {
            this.querySources(false);
        }
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
    selectBrand(brandItem) {
        this.configService.searchConfig$.selectedBrand = brandItem;
        this.navOutletService.navigateByUrl(_app_routing__WEBPACK_IMPORTED_MODULE_1__.NavOutletPageName.HealthSystemBrandDetails);
        // this.messageBus.componentNavigationSubject.next({
        //   page: ComponentNavPage.PortalConnect,
        //   title: brandItem.name,
        //   data: brandItem,
        // } as ComponentNavigationEvent)
    }
}
HealthSystemSearchComponent.ɵfac = function HealthSystemSearchComponent_Factory(t) { return new (t || HealthSystemSearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_vault_service__WEBPACK_IMPORTED_MODULE_2__.VaultService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_config_service__WEBPACK_IMPORTED_MODULE_3__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_router_nav_outlet_nav_outlet_service__WEBPACK_IMPORTED_MODULE_4__.NavOutletService)); };
HealthSystemSearchComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: HealthSystemSearchComponent, selectors: [["app-health-system-search"]], decls: 17, vars: 8, consts: [["id", "step-search", 1, "space-y-6"], [1, "relative", "flex", "justify-center", "items-center"], ["type", "button", "id", "search-back", 1, "absolute", "left-0", "top-1/2", "-translate-y-1/2", "text-gray-700", "p-2", "hover:bg-gray-100", "rounded-md", 3, "navOutletLink"], ["fill", "none", "stroke", "currentColor", "stroke-width", "2", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M15 19l-7-7 7-7"], [1, "az-logo"], [1, "flex", "gap-2"], [1, "flex-1"], ["id", "search-input", "type", "text", "placeholder", "Search for your health system...", 1, "w-full", "block", "px-3", "py-2", "text-base", "rounded-md", "border", "border-gray-300", "focus:outline-none", "focus:ring-2", "focus:ring-[#5B47FB]", "focus:ring-opacity-20", 3, "ngModel", "ngModelChange", "keyup"], ["id", "search-filters", 1, "border", "border-gray-200", "rounded-lg", "w-10", "h-10", "flex", "items-center", "justify-center", "hover:border-[#5B47FB]", "hover:bg-[#5B47FB]/5", "transition-all", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "lucide", "lucide-filter", "w-5", "h-5"], ["points", "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"], ["id", "filters-container", "class", "space-y-4 p-4 border rounded-lg", 4, "ngIf"], ["id", "search-results", "infiniteScroll", "", 1, "space-y-2", "overflow-scroll", 2, "max-height", "500px", 3, "infiniteScrollDistance", "infiniteScrollThrottle", "scrollWindow", "scrolled"], ["type", "button", "class", "w-full flex items-center gap-3 p-3 border rounded-lg hover:border-[#5B47FB]/30 hover:shadow-sm transition-all text-left focus:outline-none focus:ring-2 focus:ring-[#5B47FB] focus:ring-opacity-20", 3, "click", 4, "ngFor", "ngForOf"], ["class", "space-y-4", 4, "ngIf"], ["id", "filters-container", 1, "space-y-4", "p-4", "border", "rounded-lg"], [1, "font-semibold", "text-lg"], [1, "relative"], [1, "block", "text-sm", "font-medium", "mb-1"], ["type", "button", "id", "state-filter-btn", 1, "w-full", "flex", "items-center", "justify-between", "px-3", "py-2", "text-sm", "border", "rounded-md", "bg-white", "hover:bg-gray-50"], ["id", "state-filter-value"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "h-4", "w-4", "opacity-50"], ["points", "6 9 12 15 18 9"], ["id", "state-filter-menu", 1, "absolute", "z-10", "w-full", "mt-1", "rounded-md", "border", "bg-white", "shadow-lg", "hidden"], [1, "py-1"], [1, "w-full", "text-left", "px-3", "py-2", "text-sm", "hover:bg-gray-100", "flex", "items-center", "justify-between"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "w-4", "h-4", "text-[#5B47FB]"], ["points", "20 6 9 17 4 12"], ["type", "button", 1, "w-full", "flex", "items-center", "gap-3", "p-3", "border", "rounded-lg", "hover:border-[#5B47FB]/30", "hover:shadow-sm", "transition-all", "text-left", "focus:outline-none", "focus:ring-2", "focus:ring-[#5B47FB]", "focus:ring-opacity-20", 3, "click"], ["imageFallback", "", 1, "w-8", "max-h-8", "rounded", 3, "src", "alt"], [1, "flex-1", "min-w-0"], [1, "font-semibold"], ["class", "text-sm text-gray-600", 4, "ngIf"], [1, "text-sm", "text-gray-600"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "flex", "items-center"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "w-5", "h-5", "text-gray-400"], ["points", "9 6 15 12 9 18"], [3, "innerHTML", 4, "ngFor", "ngForOf"], [3, "innerHTML"], [1, "space-y-4"], [1, "mt-8", "p-4", "bg-gray-50", "rounded-lg", "space-y-4"], [1, "flex", "items-center", "gap-2", "text-gray-700"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "w-5", "h-5"], ["cx", "11", "cy", "11", "r", "8"], ["d", "m21 21-4.3-4.3"], [1, "font-medium"], [1, "w-full", "bg-white", "border", "border-gray-200", "text-[#5B47FB]", "hover:bg-[#5B47FB]", "hover:text-white", "hover:border-[#5B47FB]", "font-medium", "py-2", "px-4", "rounded-md", "transition-colors", 3, "navOutletLink"]], template: function HealthSystemSearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "path", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "fasten");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 6)(8, "div", 7)(9, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function HealthSystemSearchComponent_Template_input_ngModelChange_9_listener($event) { return ctx.filter.query = $event; })("keyup", function HealthSystemSearchComponent_Template_input_keyup_9_listener() { return ctx.querySources(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HealthSystemSearchComponent_Template_button_click_10_listener() { return ctx.showFilters = !ctx.showFilters; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "svg", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "polygon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, HealthSystemSearchComponent_div_13_Template, 18, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("scrolled", function HealthSystemSearchComponent_Template_div_scrolled_14_listener() { return ctx.onScroll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, HealthSystemSearchComponent_button_15_Template, 13, 11, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, HealthSystemSearchComponent_div_16_Template, 12, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("navOutletLink", "dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.filter.query);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showFilters);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("infiniteScrollDistance", 2)("infiniteScrollThrottle", 50)("scrollWindow", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.lighthouseBrandList);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.lighthouseBrandList.length == 0);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFsdGgtc3lzdGVtLXNlYXJjaC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 2427:
/*!********************************************************************************!*\
  !*** ./src/app/pages/identity-verification/identity-verification.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IdentityVerificationComponent": () => (/* binding */ IdentityVerificationComponent)
/* harmony export */ });
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../app.routing */ 6738);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_vault_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/vault.service */ 3843);
/* harmony import */ var _router_nav_outlet_nav_outlet_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../router/nav-outlet/nav-outlet.service */ 6773);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/spinner/spinner.component */ 4132);







function IdentityVerificationComponent_app_spinner_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-spinner");
} }
class IdentityVerificationComponent {
    constructor(changeRef, vaultService, navOutletService) {
        this.changeRef = changeRef;
        this.vaultService = vaultService;
        this.navOutletService = navOutletService;
        this.loading = false;
    }
    ngOnInit() {
    }
    markForCheck() {
        this.changeRef.markForCheck();
    }
    verifyIdentity() {
        this.loading = true;
        this.vaultService.verificationWithPopup().subscribe((result) => {
            this.loading = false;
            console.log("verification result", result);
            this.navOutletService.navigateByUrl(_app_routing__WEBPACK_IMPORTED_MODULE_0__.NavOutletPageName.Dashboard);
        }, (err) => {
            this.loading = false;
            console.error("verification error", err);
        });
    }
}
IdentityVerificationComponent.ɵfac = function IdentityVerificationComponent_Factory(t) { return new (t || IdentityVerificationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_vault_service__WEBPACK_IMPORTED_MODULE_1__.VaultService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_router_nav_outlet_nav_outlet_service__WEBPACK_IMPORTED_MODULE_2__.NavOutletService)); };
IdentityVerificationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: IdentityVerificationComponent, selectors: [["app-identity-verification"]], decls: 15, vars: 2, consts: [[1, "space-y-6", "text-center"], [1, "flex", "justify-center", "items-center"], [1, "az-logo"], [1, "space-y-2"], [1, "text-xl", "font-semibold"], ["id", "verification-hint", 1, "text-sm", "text-gray-600"], ["type", "button", 1, "w-full", "bg-[#5B47FB]", "hover:bg-[#4936E8]", "text-white", "font-medium", "py-2.5", "px-4", "rounded-md", "flex", "justify-center", "items-center", 3, "disabled", "click"], [4, "ngIf"]], template: function IdentityVerificationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "fasten");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 3)(5, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, " Verify your identity");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "just once ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, " Your leaving Acme Labs to verify your identity with our partner, Persona. This one-time step will bring you right back after your ID has been verified. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 3)(12, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function IdentityVerificationComponent_Template_button_click_12_listener() { return ctx.verifyIdentity(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, IdentityVerificationComponent_app_spinner_13_Template, 1, 0, "app-spinner", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, " Continue ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_3__.SpinnerComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpZGVudGl0eS12ZXJpZmljYXRpb24uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 5313:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/vault-profile-signin-code/vault-profile-signin-code.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VaultProfileSigninCodeComponent": () => (/* binding */ VaultProfileSigninCodeComponent)
/* harmony export */ });
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../app.routing */ 6738);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 8947);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 2566);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _router_nav_outlet_nav_outlet_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../router/nav-outlet/nav-outlet.service */ 6773);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ 7556);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var angular_code_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-code-input */ 3891);








function VaultProfileSigninCodeComponent_p_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.errorMsg);
  }
}
class VaultProfileSigninCodeComponent {
  constructor(changeRef, navOutletService, authService) {
    this.changeRef = changeRef;
    this.navOutletService = navOutletService;
    this.authService = authService;
    this.loading = false;
    this.errorMsg = "";
    this.currentEmail = "test@example.com";
    this.codeExpirySeconds = 300;
    this.timeRemaining$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.timer)(0, 1000).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(n => (this.codeExpirySeconds - n) * 1000), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.takeWhile)(n => n >= 0));
  }
  ngOnInit() {}
  markForCheck() {
    this.changeRef.markForCheck();
  }
  onCodeCompleted(code) {
    this.loading = true;
    console.log("submit finish", this.currentEmail, code);
    this.authService.VaultAuthFinish(this.currentEmail, code).then(() => {
      this.loading = false;
      //this will attempt to redirect to Dashboard, then fallback to ID verification if not provided
      this.navOutletService.navigateByUrl(_app_routing__WEBPACK_IMPORTED_MODULE_0__.NavOutletPageName.Dashboard);
    }).catch(err => {
      console.error(err);
      this.loading = false;
      if (err?.name) {
        this.errorMsg = "code is incorrect";
      } else {
        this.errorMsg = "an unknown error occurred during sign-in";
      }
      // const toastNotification = new ToastNotification()
      // toastNotification.type = ToastType.Error
      // toastNotification.message = this.errorMsg
      // this.toastService.show(toastNotification)
    });
  }
}
VaultProfileSigninCodeComponent.ɵfac = function VaultProfileSigninCodeComponent_Factory(t) {
  return new (t || VaultProfileSigninCodeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_router_nav_outlet_nav_outlet_service__WEBPACK_IMPORTED_MODULE_1__.NavOutletService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService));
};
VaultProfileSigninCodeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: VaultProfileSigninCodeComponent,
  selectors: [["app-vault-profile-signin-code"]],
  inputs: {
    currentEmail: "currentEmail"
  },
  decls: 27,
  vars: 10,
  consts: [[1, "space-y-6", "text-center"], [1, "flex", "justify-center", "items-center"], [1, "az-logo"], [1, "space-y-2"], [1, "text-xl", "font-semibold"], ["id", "verification-hint", 1, "text-sm", "text-gray-600"], ["id", "verification-inputs", 1, "flex", "justify-center", "space-x-2"], [3, "isCodeHidden", "codeLength", "codeCompleted"], ["id", "verification-error", "class", "text-sm text-red-500", 4, "ngIf"], [1, "text-sm", "text-gray-600"], ["id", "verification-countdown", 1, "font-semibold", "text-gray-900"], ["type", "button", "id", "resend-code", 1, "verification-button"], ["type", "button", "id", "use-other-method", 1, "verification-button", 2, "display", "none"], ["id", "verification-error", 1, "text-sm", "text-red-500"]],
  template: function VaultProfileSigninCodeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "fasten");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3)(5, "h2", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " Enter authentication code");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "from your email ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "p", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, " A code was sent to ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 6)(14, "code-input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("codeCompleted", function VaultProfileSigninCodeComponent_Template_code_input_codeCompleted_14_listener($event) {
        return ctx.onCodeCompleted($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, VaultProfileSigninCodeComponent_p_15_Template, 2, 1, "p", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, " Code expires in ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](20, "date");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](21, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 3)(23, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, " Re-send code ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, " Use another verification method ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.currentEmail);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("isCodeHidden", false)("codeLength", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.errorMsg);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](20, 5, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](21, 8, ctx.timeRemaining$), "mm:ss"));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, angular_code_input__WEBPACK_IMPORTED_MODULE_8__.CodeInputComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe],
  styles: ["code-input[_ngcontent-%COMP%] {\n  --item-width: 2.5rem;\n  --item-height: 2.5rem;\n  --item-border: 1px solid #d1d5db;\n  --item-border-radius: 0.5rem;\n  --item-font-size: 1.25rem;\n  --item-font-weight: 600;\n  --item-color: #111827;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhdWx0LXByb2ZpbGUtc2lnbmluLWNvZGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0NBQUE7RUFDQSw0QkFBQTtFQUNBLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtBQUNGIiwiZmlsZSI6InZhdWx0LXByb2ZpbGUtc2lnbmluLWNvZGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJjb2RlLWlucHV0IHtcbiAgLS1pdGVtLXdpZHRoOiAyLjVyZW07XG4gIC0taXRlbS1oZWlnaHQ6IDIuNXJlbTtcbiAgLS1pdGVtLWJvcmRlcjogMXB4IHNvbGlkICNkMWQ1ZGI7XG4gIC0taXRlbS1ib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIC0taXRlbS1mb250LXNpemU6IDEuMjVyZW07XG4gIC0taXRlbS1mb250LXdlaWdodDogNjAwO1xuICAtLWl0ZW0tY29sb3I6ICMxMTE4Mjc7XG4gIC8vLS1pdGVtLWJvcmRlci1ib3R0b206IG5vbmU7XG4gIC8vLS1pdGVtLWJvcmRlci1oYXMtdmFsdWU6IG5vbmU7XG4gIC8vLS1pdGVtLWJvcmRlci1ib3R0b20taGFzLXZhbHVlOiAycHggc29saWQgIzg4ODg4ODtcbiAgLy8tLWl0ZW0tYm9yZGVyLWZvY3VzZWQ6IG5vbmU7XG4gIC8vLS1pdGVtLWJvcmRlci1ib3R0b20tZm9jdXNlZDogMnB4IHNvbGlkICM4MDkwNzA7XG4gIC8vLS1pdGVtLXNoYWRvdy1mb2N1c2VkOiBub25lO1xufVxuIl19 */"]
});

/***/ }),

/***/ 9824:
/*!******************************************************************************!*\
  !*** ./src/app/pages/vault-profile-signin/vault-profile-signin.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VaultProfileSigninComponent": () => (/* binding */ VaultProfileSigninComponent)
/* harmony export */ });
/* harmony import */ var _models_fasten_vaultProfile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/fasten/vaultProfile */ 4843);
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app.routing */ 6738);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/config.service */ 946);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ 7556);
/* harmony import */ var _router_nav_outlet_nav_outlet_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../router/nav-outlet/nav-outlet.service */ 6773);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _directives_image_fallback_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../directives/image-fallback.directive */ 396);
/* harmony import */ var _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/spinner/spinner.component */ 4132);











function VaultProfileSigninComponent_p_51_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Email is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function VaultProfileSigninComponent_p_51_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Email must be at least 4 characters long. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function VaultProfileSigninComponent_p_51_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Email must be a valid email address. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function VaultProfileSigninComponent_p_51_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 42)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r7.errorMsg, " ");
  }
}
function VaultProfileSigninComponent_p_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, VaultProfileSigninComponent_p_51_span_1_Template, 2, 0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, VaultProfileSigninComponent_p_51_span_2_Template, 2, 0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, VaultProfileSigninComponent_p_51_span_3_Template, 2, 0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, VaultProfileSigninComponent_p_51_span_4_Template, 4, 1, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _r1.errors == null ? null : _r1.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _r1.errors == null ? null : _r1.errors["minlength"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _r1.errors == null ? null : _r1.errors["email"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.errorMsg);
  }
}
function VaultProfileSigninComponent_app_spinner_62_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "app-spinner");
  }
}
class VaultProfileSigninComponent {
  constructor(changeRef, configService, authService, navOutletService) {
    this.changeRef = changeRef;
    this.configService = configService;
    this.authService = authService;
    this.navOutletService = navOutletService;
    this.loading = false;
    this.showMessage = false;
    this.submitted = false;
    this.existingVaultProfile = new _models_fasten_vaultProfile__WEBPACK_IMPORTED_MODULE_0__.VaultProfile();
    this.errorMsg = "";
    this.message = "";
  }
  ngOnInit() {
    const urlParams = new URLSearchParams(window.location.search);
    this.setMessage(urlParams.get('action') || "");
  }
  markForCheck() {
    this.changeRef.markForCheck();
  }
  signinSubmit() {
    this.submitted = true;
    this.loading = true;
    console.log("Signin", this.existingVaultProfile.email);
    this.authService.VaultAuthBegin(this.existingVaultProfile.email).then(() => {
      this.loading = false;
      this.navOutletService.navigateByUrl(_app_routing__WEBPACK_IMPORTED_MODULE_1__.NavOutletPageName.VaultProfileSigninCode, new Map([["currentEmail", this.existingVaultProfile.email]]));
    }).catch(err => {
      this.loading = false;
      if (err?.name) {
        this.errorMsg = "email or password is incorrect";
      } else {
        this.errorMsg = "an unknown error occurred during sign-in";
      }
      // const toastNotification = new ToastNotification()
      // toastNotification.type = ToastType.Error
      // toastNotification.message = this.errorMsg
      // this.toastService.show(toastNotification)
    });
  }
  setMessage(action) {
    if (action === "email-changed") {
      this.showMessage = true;
      this.message = "Email successfully changed! Please sign in with your new email.";
    } else if (action === "password-changed") {
      this.showMessage = true;
      this.message = "Password successfully changed! Please sign in with your new password.";
    }
  }
}
VaultProfileSigninComponent.ɵfac = function VaultProfileSigninComponent_Factory(t) {
  return new (t || VaultProfileSigninComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_router_nav_outlet_nav_outlet_service__WEBPACK_IMPORTED_MODULE_4__.NavOutletService));
};
VaultProfileSigninComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: VaultProfileSigninComponent,
  selectors: [["app-auth-signin"]],
  decls: 64,
  vars: 16,
  consts: [["id", "step-initial", 1, "space-y-6"], [1, "flex", "justify-center", "items-center"], [1, "az-logo"], [1, "flex", "items-center", "justify-center", "space-x-4"], [1, "w-10", "h-10", "text-[#5B47FB]"], ["imageFallback", "unknown-organization", "alt", "Organization Logo", 1, "w-10", "h-10", "rounded-lg", 3, "src"], [1, "flex", "space-x-1"], [1, "w-2", "h-2", "bg-[#5B47FB]", "rounded-full", "animate-pulse-flow", "delay-100"], [1, "w-2", "h-2", "bg-[#5B47FB]", "rounded-full", "animate-pulse-flow", "delay-200"], [1, "w-2", "h-2", "bg-[#5B47FB]", "rounded-full", "animate-pulse-flow", "delay-300"], ["id", "connecting-system-logo-placeholder", "xmlns", "http://www.w3.org/2000/svg", "width", "40", "height", "40", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M12 6v4"], ["d", "M14 14h-4"], ["d", "M14 18h-4"], ["d", "M14 8h-4"], ["d", "M18 12h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2"], ["d", "M18 22V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v18"], [1, "text-center", "space-y-2"], [1, "text-xl", "font-bold"], [1, "text-sm", "text-gray-600"], [1, "space-y-4"], [1, "flex", "items-start", "space-x-4", "p-4", "border", "rounded-lg", "hover:shadow-sm", "transition-shadow", "hover:border-[#5B47FB]/30"], [1, "p-2", "bg-purple-50", "rounded-full"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "lucide", "lucide-shield", "w-5", "h-5", "text-[#5B47FB]"], ["d", "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01\n                C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1\n                c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0\n                C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"], [1, "font-semibold"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "lucide", "lucide-lock", "w-5", "h-5", "text-[#5B47FB]"], ["width", "18", "height", "11", "x", "3", "y", "11", "rx", "2", "ry", "2"], ["d", "M7 11V7a5 5 0 0 1 10 0v4"], [1, "space-y-6", 3, "ngSubmit"], ["vaultProfileForm", "ngForm"], [1, "block", "text-sm", "font-medium", "text-gray-700"], ["name", "email", "required", "", "email", "", "minlength", "4", "type", "email", "placeholder", "you@example.com", 1, "block", "w-full", "mt-2", "px-3", "py-2", "text-base", "rounded-md", "border", "border-gray-300", "focus:outline-none", "focus:ring-2", "focus:ring-[#5B47FB]", "focus:ring-opacity-20", 3, "ngModel", "ngModelChange"], ["email", "ngModel"], ["id", "initialError", "class", "text-sm text-red-500", 4, "ngIf"], [1, "text-xs", "text-gray-400", "text-center"], ["href", "https://policy.fastenhealth.com/connect/privacy_policy.html", "target", "_blank", 1, "text-gray-500", "hover:text-gray-600", "underline"], ["target", "_blank", 1, "text-gray-500", "hover:text-gray-600", "underline", 3, "href"], ["type", "submit", 1, "w-full", "bg-[#5B47FB]", "hover:bg-[#4936E8]", "text-white", "font-medium", "py-2.5", "px-4", "rounded-md", "flex", "justify-center", "items-center", 3, "disabled"], [4, "ngIf"], ["id", "initialError", 1, "text-sm", "text-red-500"], ["class", "alert alert-danger mt-3", "role", "alert", 4, "ngIf"], ["role", "alert", 1, "alert", "alert-danger", "mt-3"]],
  template: function VaultProfileSigninComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "fasten");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 3)(5, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "img", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](7, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "div", 7)(10, "div", 8)(11, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "svg", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "path", 11)(14, "path", 12)(15, "path", 13)(16, "path", 14)(17, "path", 15)(18, "path", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "div", 17)(20, "h2", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, "Connect Your Health Records");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "p", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](24, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "div", 20)(26, "div", 21)(27, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "svg", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](29, "path", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "div")(31, "h3", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](32, "Safe");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "p", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](34, " Securely connect your medical records with bank-level encryption ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "div", 21)(36, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "svg", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](38, "rect", 27)(39, "path", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "div")(41, "h3", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](42, "Private");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "p", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](44, " We never sell your personal info and only use it with your permission ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "form", 29, 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function VaultProfileSigninComponent_Template_form_ngSubmit_45_listener() {
        return ctx.signinSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "label", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](48, "Email address");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](49, "input", 32, 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function VaultProfileSigninComponent_Template_input_ngModelChange_49_listener($event) {
        return ctx.existingVaultProfile.email = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](51, VaultProfileSigninComponent_p_51_Template, 5, 4, "p", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "p", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](53, " By clicking continue you agree to Fasten's ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](54, "a", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](55, "Privacy Policy");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](56);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](57, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](58, "a", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](59, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](60, "Privacy Policy");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](61, "button", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](62, VaultProfileSigninComponent_app_spinner_62_Template, 1, 0, "app-spinner", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](63, " Continue ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](46);
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](50);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](7, 8, ctx.configService.systemConfigSubject).org == null ? null : _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](7, 8, ctx.configService.systemConfigSubject).org.logo_uri, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", (_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](24, 10, ctx.configService.systemConfigSubject).org == null ? null : _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](24, 10, ctx.configService.systemConfigSubject).org.name) || "Unknown", " uses Fasten to securely link your health systems ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](26);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.existingVaultProfile.email);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _r1.invalid && (_r1.dirty || _r1.touched));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" and ", (_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](57, 12, ctx.configService.systemConfigSubject).org == null ? null : _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](57, 12, ctx.configService.systemConfigSubject).org.name) || "Unknown", "'s ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("href", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](59, 14, ctx.configService.systemConfigSubject).org == null ? null : _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](59, 14, ctx.configService.systemConfigSubject).org.privacy_policy_uri, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", !_r0.form.valid || ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.loading);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.EmailValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgForm, _directives_image_fallback_directive__WEBPACK_IMPORTED_MODULE_5__.ImageFallbackDirective, _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_6__.SpinnerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2YXVsdC1wcm9maWxlLXNpZ25pbi5jb21wb25lbnQuc2NzcyJ9 */"]
});

/***/ }),

/***/ 1656:
/*!*****************************************!*\
  !*** ./src/app/pipes/safe-html.pipe.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SafeHtmlPipe": () => (/* binding */ SafeHtmlPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 4497);


class SafeHtmlPipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(value, args) {
        return this.sanitizer.bypassSecurityTrustHtml(value);
        // return this.sanitizer.bypassSecurityTrustStyle(style);
        // return this.sanitizer.bypassSecurityTrustXxx(style); - see docs
    }
}
SafeHtmlPipe.ɵfac = function SafeHtmlPipe_Factory(t) { return new (t || SafeHtmlPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.DomSanitizer, 16)); };
SafeHtmlPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "safeHtml", type: SafeHtmlPipe, pure: true });


/***/ }),

/***/ 4280:
/*!******************************************!*\
  !*** ./src/app/pipes/state-name.pipe.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StateNamePipe": () => (/* binding */ StateNamePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class StateNamePipe {
    constructor() {
        this.stateCodes = {
            "ALL": "Nationwide",
            "AL": "Alabama",
            "AK": "Alaska",
            "AZ": "Arizona",
            "AR": "Arkansas",
            "CA": "California",
            "CO": "Colorado",
            "CT": "Connecticut",
            "DE": "Delaware",
            "FL": "Florida",
            "GA": "Georgia",
            "HI": "Hawaii",
            "ID": "Idaho",
            "IL": "Illinois",
            "IN": "Indiana",
            "IA": "Iowa",
            "KS": "Kansas",
            "KY": "Kentucky",
            "LA": "Louisiana",
            "ME": "Maine",
            "MD": "Maryland",
            "MA": "Massachusetts",
            "MI": "Michigan",
            "MN": "Minnesota",
            "MS": "Mississippi",
            "MO": "Missouri",
            "MT": "Montana",
            "NE": "Nebraska",
            "NV": "Nevada",
            "NH": "New Hampshire",
            "NJ": "New Jersey",
            "NM": "New Mexico",
            "NY": "New York",
            "NC": "North Carolina",
            "ND": "North Dakota",
            "OH": "Ohio",
            "OK": "Oklahoma",
            "OR": "Oregon",
            "PA": "Pennsylvania",
            "RI": "Rhode Island",
            "SC": "South Carolina",
            "SD": "South Dakota",
            "TN": "Tennessee",
            "TX": "Texas",
            "UT": "Utah",
            "VT": "Vermont",
            "VA": "Virginia",
            "WA": "Washington",
            "WV": "West Virginia",
            "WI": "Wisconsin",
            "WY": "Wyoming",
            // Territories
            "AS": "American Samoa",
            "DC": "District of Columbia",
            "FM": "Federated States of Micronesia",
            "GU": "Guam",
            "MH": "Marshall Islands",
            "MP": "Northern Mariana Islands",
            "PW": "Palau",
            "PR": "Puerto Rico",
            "VI": "Virgin Islands",
            // Armed Forces (AE includes Europe, Africa, Canada, and the Middle East)
            "AA": "Armed Forces Americas",
            "AE": "Armed Forces Europe",
            "AP": "Armed Forces Pacific",
        };
    }
    transform(value) {
        return this.stateCodes[value] || value;
    }
}
StateNamePipe.ɵfac = function StateNamePipe_Factory(t) { return new (t || StateNamePipe)(); };
StateNamePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "stateName", type: StateNamePipe, pure: true });


/***/ }),

/***/ 5295:
/*!****************************************************************!*\
  !*** ./src/app/router/nav-outlet/nav-outlet-link.directive.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavOutletLinkDirective": () => (/* binding */ NavOutletLinkDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _nav_outlet_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav-outlet.service */ 6773);



class NavOutletLinkDirective {
    constructor(eleRef, navOutletService) {
        this.eleRef = eleRef;
        this.navOutletService = navOutletService;
        this.navOutletLink = "";
    }
    onClick() {
        this.navOutletService.navigateByUrl(this.navOutletLink);
    }
}
NavOutletLinkDirective.ɵfac = function NavOutletLinkDirective_Factory(t) { return new (t || NavOutletLinkDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nav_outlet_service__WEBPACK_IMPORTED_MODULE_0__.NavOutletService)); };
NavOutletLinkDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: NavOutletLinkDirective, selectors: [["", "navOutletLink", ""]], hostBindings: function NavOutletLinkDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavOutletLinkDirective_click_HostBindingHandler() { return ctx.onClick(); });
    } }, inputs: { navOutletLink: "navOutletLink" } });


/***/ }),

/***/ 2227:
/*!***********************************************************!*\
  !*** ./src/app/router/nav-outlet/nav-outlet.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavOutletComponent": () => (/* binding */ NavOutletComponent)
/* harmony export */ });
/* harmony import */ var _nav_outlet_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav-outlet.directive */ 9790);
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app.routing */ 6738);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _nav_outlet_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav-outlet.service */ 6773);






function NavOutletComponent_ng_template_0_Template(rf, ctx) { }
class NavOutletComponent {
    constructor(navOutletService) {
        this.navOutletService = navOutletService;
    }
    ngOnInit() {
        console.log("NavOutletComponent ngOnInit");
        this.loadComponent();
        this.navOutletService.componentNavigationSubject.subscribe((componentNavEvent) => {
            console.log("page navigation event detected in NavOutletComponent: ", componentNavEvent);
            this.loadComponent(componentNavEvent);
        });
    }
    ngOnChanges(changes) {
        this.loadComponent();
    }
    // WARNING: errors in this method will cause silent failures and limited error messages for some reason.
    // it will also cause the ngOnInit subscribe functions to be ignored (subscription will be broken for all future calls)
    loadComponent(pageRoute) {
        try {
            //clear the current outlet
            const viewContainerRef = this.navOutlet.viewContainerRef;
            viewContainerRef.clear();
            if (pageRoute == null) {
                //find the default route
                for (let route of _app_routing__WEBPACK_IMPORTED_MODULE_1__.Routes) {
                    if (route.page == _app_routing__WEBPACK_IMPORTED_MODULE_1__.NavOutletPageName.Default) {
                        pageRoute = route;
                        break;
                    }
                }
                if (pageRoute == null) {
                    //throw if the default page not found
                    throw new Error("default page not found");
                }
            }
            const componentRef = viewContainerRef.createComponent(pageRoute.component);
            if (pageRoute.inputs != null) {
                for (let [key, value] of pageRoute.inputs) {
                    componentRef.instance[key] = value;
                }
            }
            componentRef.instance.markForCheck();
        }
        catch (e) {
            console.error("NavOutletComponent loadComponent error", e);
        }
    }
}
NavOutletComponent.ɵfac = function NavOutletComponent_Factory(t) { return new (t || NavOutletComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_nav_outlet_service__WEBPACK_IMPORTED_MODULE_2__.NavOutletService)); };
NavOutletComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: NavOutletComponent, selectors: [["app-nav-outlet"]], viewQuery: function NavOutletComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_nav_outlet_directive__WEBPACK_IMPORTED_MODULE_0__.NavOutletDirective, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.navOutlet = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 0, consts: [["navOutletDirective", ""]], template: function NavOutletComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, NavOutletComponent_ng_template_0_Template, 0, 0, "ng-template", 0);
    } }, dependencies: [_nav_outlet_directive__WEBPACK_IMPORTED_MODULE_0__.NavOutletDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXYtb3V0bGV0LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 9790:
/*!***********************************************************!*\
  !*** ./src/app/router/nav-outlet/nav-outlet.directive.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavOutletDirective": () => (/* binding */ NavOutletDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);


class NavOutletDirective {
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
}
NavOutletDirective.ɵfac = function NavOutletDirective_Factory(t) { return new (t || NavOutletDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef)); };
NavOutletDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NavOutletDirective, selectors: [["", "navOutletDirective", ""]] });


/***/ }),

/***/ 6773:
/*!*********************************************************!*\
  !*** ./src/app/router/nav-outlet/nav-outlet.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavOutletService": () => (/* binding */ NavOutletService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../app.routing */ 6738);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ 7556);





class NavOutletService {
    constructor(authService, injector) {
        this.authService = authService;
        this.injector = injector;
        // this subject is populated when the "page" is changed
        this.componentNavigationSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(null);
    }
    reset() {
        this.componentNavigationSubject.next(null);
    }
    navigateByUrl(nextPage, payload) {
        //remove the "/" prefix if present
        nextPage = nextPage.trim();
        if (nextPage.startsWith("/")) {
            nextPage = nextPage.substring(1);
        }
        console.log('navigating to page: ', nextPage);
        //find the component Route by nextPage
        let foundRoute = null;
        for (let route of _app_routing__WEBPACK_IMPORTED_MODULE_0__.Routes) {
            if (route.page == nextPage) {
                route.inputs = new Map();
                //add the payload data to the route
                //TODO: should we do a deep clone before?
                if (payload != null && payload.size > 0) {
                    route.inputs = payload;
                }
                foundRoute = route;
                console.log("found route info: ", nextPage);
                break;
            }
        }
        if (foundRoute == null) {
            console.error("unknown page, could not route to: ", nextPage);
            throw new Error("unknown page, could not route to: " + nextPage);
        }
        //check if we can "activate" the new page
        if (foundRoute.canActivate != null) {
            console.info("checking if we can activate the new page: ", foundRoute.page);
            this.injector.runInContext(() => {
                foundRoute.canActivate(foundRoute)
                    .then((cont) => {
                    if (!cont) {
                        return;
                    }
                    this.componentNavigationSubject.next(foundRoute);
                })
                    .catch(console.error);
            });
        }
        else {
            this.componentNavigationSubject.next(foundRoute);
        }
    }
}
NavOutletService.ɵfac = function NavOutletService_Factory(t) { return new (t || NavOutletService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.EnvironmentInjector)); };
NavOutletService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: NavOutletService, factory: NavOutletService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2993:
/*!******************************************************!*\
  !*** ./src/app/services/auth-interceptor.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthInterceptorService": () => (/* binding */ AuthInterceptorService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 5474);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 3158);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 2340);
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.routing */ 6738);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ 7556);
/* harmony import */ var _router_nav_outlet_nav_outlet_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../router/nav-outlet/nav-outlet.service */ 6773);








// based on https://stackoverflow.com/questions/46017245/how-to-handle-unauthorized-requestsstatus-with-401-or-403-with-new-httpclient
class AuthInterceptorService {
    constructor(authService, navOutletService) {
        this.authService = authService;
        this.navOutletService = navOutletService;
    }
    handleAuthError(err) {
        //handle your auth error or rethrow
        if (err.status === 401 || err.status === 403) {
            //navigate /delete cookies or whatever
            this.authService.Signout();
            this.navOutletService.navigateByUrl(_app_routing__WEBPACK_IMPORTED_MODULE_1__.NavOutletPageName.VaultProfileSignin);
            // if you've caught / handled the error, you don't want to rethrow it unless you also want downstream consumers to have to handle it as well.
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(err.message); // or EMPTY may be appropriate here
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(err);
    }
    intercept(req, next) {
        console.log("Intercepting Request", req);
        //only intercept requests to the fasten API & lighthouse, all other requests should be sent as-is
        let reqUrl = new URL(req.url);
        let lighthouseUrl = new URL(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.lighthouse_api_endpoint_base);
        let apiUrl = new URL(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.connect_api_endpoint_base);
        if (!((reqUrl.origin == apiUrl.origin && reqUrl.pathname.startsWith(apiUrl.pathname)) ||
            (reqUrl.origin == lighthouseUrl.origin && reqUrl.pathname.startsWith(lighthouseUrl.pathname)))) {
            return next.handle(req);
        }
        // Clone the request and ensure that cookies are sent
        const authReq = req.clone({ withCredentials: true });
        // catch the error, make specific functions for catching specific errors and you can chain through them with more catch operators
        return next.handle(authReq).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(x => this.handleAuthError(x))); //here use an arrow function, otherwise you may get "Cannot read property 'navigate' of undefined" on angular 4.4.2/net core 2/webpack 2.70
    }
}
AuthInterceptorService.ɵfac = function AuthInterceptorService_Factory(t) { return new (t || AuthInterceptorService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_router_nav_outlet_nav_outlet_service__WEBPACK_IMPORTED_MODULE_3__.NavOutletService)); };
AuthInterceptorService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({ token: AuthInterceptorService, factory: AuthInterceptorService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7556:
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService),
/* harmony export */   "FASTEN_AUTH_VAULT_COOKIE_NAME": () => (/* binding */ FASTEN_AUTH_VAULT_COOKIE_NAME)
/* harmony export */ });
/* harmony import */ var _home_runner_work_fasten_connect_stitch_fasten_connect_stitch_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ 2340);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var jose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jose */ 1979);
/* harmony import */ var jose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jose */ 1231);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config.service */ 946);







const FASTEN_AUTH_VAULT_COOKIE_NAME = 'fasten_connect_auth_vault';
class AuthService {
  constructor(_httpClient, configService) {
    this._httpClient = _httpClient;
    this.configService = configService;
    this.FASTEN_CONNECT_JWT_LOCALSTORAGE_KEY = 'fasten_connect_auth_vault';
    this.IsAuthenticatedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(false);
  }
  VaultAuthBegin(email) {
    var _this = this;
    return (0,_home_runner_work_fasten_connect_stitch_fasten_connect_stitch_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let resp = yield _this._httpClient.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.connect_api_endpoint_base}/bridge/vault_auth_begin`, {
        "email": email
      }, {
        withCredentials: true,
        params: {
          "public_id": _this.configService.systemConfig$.publicId
        }
      }).toPromise();
      return resp;
    })();
  }
  VaultAuthFinish(email, code) {
    var _this2 = this;
    return (0,_home_runner_work_fasten_connect_stitch_fasten_connect_stitch_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let resp = yield _this2._httpClient.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.connect_api_endpoint_base}/bridge/vault_auth_finish`, {
        "email": email,
        "code": code
      }, {
        observe: 'response',
        withCredentials: true,
        params: {
          "public_id": _this2.configService.systemConfig$.publicId
        }
      }).toPromise();
      _this2.setAuthToken(resp);
      return resp;
    })();
  }
  Signout() {
    var _this3 = this;
    return (0,_home_runner_work_fasten_connect_stitch_fasten_connect_stitch_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.publishAuthenticationState(false);
      //cannot delete cookie because of cross origin policies. all we can do is delete the local token in our widget.
      return localStorage.removeItem(_this3.FASTEN_CONNECT_JWT_LOCALSTORAGE_KEY);
    })();
  }
  GetJWTPayload() {
    var _this4 = this;
    return (0,_home_runner_work_fasten_connect_stitch_fasten_connect_stitch_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let authToken = _this4.GetAuthToken();
      if (!authToken) {
        return null;
      }
      let jwks = jose__WEBPACK_IMPORTED_MODULE_4__.createRemoteJWKSet(new URL(_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.jwks_uri));
      let issuerHost = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.connect_api_jwt_issuer_host;
      try {
        //audience and issuer must be the same. This token is only valid on the fasten connect api
        const {
          payload,
          protectedHeader
        } = yield jose__WEBPACK_IMPORTED_MODULE_5__.jwtVerify(authToken, jwks, {
          issuer: issuerHost,
          audience: issuerHost
        });
        //TODO: check that the token is not expired
        // @ts-ignore
        _this4.configService.systemConfig = {
          user: payload
        };
        return payload;
      } catch (e) {
        console.error("failed to verify jwt:", e, issuerHost);
        return null;
      }
    })();
  }
  GetAuthToken() {
    return localStorage.getItem(this.FASTEN_CONNECT_JWT_LOCALSTORAGE_KEY);
  }
  /////////////////////////////////////////////////////////////////////////////////////////////////
  //Private Methods
  /////////////////////////////////////////////////////////////////////////////////////////////////
  setAuthToken(authResp) {
    let authHeader = authResp.headers.get("authorization");
    if (!authHeader) {
      console.warn("no auth header found in response, skipping");
      return;
    }
    let token = authHeader.replace("Bearer ", "");
    localStorage.setItem(this.FASTEN_CONNECT_JWT_LOCALSTORAGE_KEY, token);
    this.publishAuthenticationState(true);
  }
  publishAuthenticationState(authenticated) {
    if (this.IsAuthenticatedSubject.value != authenticated) {
      this.IsAuthenticatedSubject.next(authenticated);
    }
  }
}
AuthService.ɵfac = function AuthService_Factory(t) {
  return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService));
};
AuthService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
  token: AuthService,
  factory: AuthService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 946:
/*!********************************************!*\
  !*** ./src/app/services/config.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigService": () => (/* binding */ ConfigService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var _models_vault_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/vault-config */ 5567);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ 2938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




class ConfigService {
    constructor() {
        this._defaultSystemConfig = _models_vault_config__WEBPACK_IMPORTED_MODULE_0__.vaultConfigDefaults;
        this.systemConfigSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(this._defaultSystemConfig);
        this.vaultProfileConfigSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(Object.setPrototypeOf({}, _models_vault_config__WEBPACK_IMPORTED_MODULE_0__.VaultProfileConfig.prototype));
        this.searchConfigSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject({});
    }
    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------
    /**
     * Setter & getter for config
     */
    //Setter
    set systemConfig(value) {
        // get the current config, merge the new values, and then submit.
        const mergedSettings = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.merge)({}, this.systemConfigSubject.getValue(), value);
        // Store the value
        if (JSON.stringify(mergedSettings) !== JSON.stringify(this.systemConfigSubject.getValue())) {
            console.log('updating system settings:', mergedSettings);
            this.systemConfigSubject.next(mergedSettings);
        }
    }
    //Getter
    get systemConfig$() {
        console.log('getting cached system settings:', this.systemConfigSubject.getValue());
        return this.systemConfigSubject.getValue();
    }
    //Setter
    set vaultProfileConfig(value) {
        // get the current config, merge the new values, and then submit.
        const mergedSettings = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.merge)({}, this.vaultProfileConfigSubject.getValue(), value);
        // Store the value
        if (JSON.stringify(mergedSettings) !== JSON.stringify(this.vaultProfileConfigSubject.getValue())) {
            console.log('updating vault profile settings:', mergedSettings);
            this.vaultProfileConfigSubject.next(Object.setPrototypeOf(mergedSettings, _models_vault_config__WEBPACK_IMPORTED_MODULE_0__.VaultProfileConfig.prototype));
        }
    }
    //Getter
    get vaultProfileConfig$() {
        console.log('getting vault profile settings:', this.vaultProfileConfigSubject.getValue());
        return this.vaultProfileConfigSubject.getValue();
    }
    vaultProfileAddPendingAccount(brand, portal, endpoint) {
        let updatedVaultProfile = this.vaultProfileConfig$;
        updatedVaultProfile.addPendingAccount(brand, portal, endpoint);
        this.vaultProfileConfig = updatedVaultProfile;
    }
    vaultProfileAddConnectedAccount(connectedAccount) {
        if (connectedAccount.error) {
            console.error("Error connecting account", connectedAccount);
            return;
        }
        let updatedVaultProfile = this.vaultProfileConfig$;
        updatedVaultProfile.addConnectedAccount(connectedAccount.org_connection_id, connectedAccount.connection_status, connectedAccount.platform_type, connectedAccount.brand_id, connectedAccount.portal_id, connectedAccount.endpoint_id);
        this.vaultProfileConfig = updatedVaultProfile;
    }
    vaultProfileAddAvailableRecordLocatorAccount(recordLocatorFacility) {
        let updatedVaultProfile = this.vaultProfileConfig$;
        updatedVaultProfile.addAvailableRecordLocatorAccount(recordLocatorFacility);
        this.vaultProfileConfig = updatedVaultProfile;
    }
    //Setter
    set searchConfig(value) {
        // get the current config, merge the new values, and then submit.
        const mergedSettings = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.merge)({}, this.searchConfigSubject.getValue(), value);
        // Store the value
        if (JSON.stringify(mergedSettings) !== JSON.stringify(this.searchConfigSubject.getValue())) {
            console.log('updating search settings:', mergedSettings);
            this.searchConfigSubject.next(mergedSettings);
        }
    }
    //Getter
    get searchConfig$() {
        console.log('getting search settings:', this.searchConfigSubject.getValue());
        return this.searchConfigSubject.getValue();
    }
}
ConfigService.ɵfac = function ConfigService_Factory(t) { return new (t || ConfigService)(); };
ConfigService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ConfigService, factory: ConfigService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5983:
/*!*************************************************!*\
  !*** ./src/app/services/message-bus.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessageBusService": () => (/* binding */ MessageBusService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class MessageBusService {
    constructor() {
        //this subject is populated when in popup mode, and a Portal/Endpoint has been selected.
        // A separate window will be opened, and credentials & metadata from that connection will be passed to this callback fn.
        // SEE: https://docs.connect.fastenhealth.com/stitch/webcomponent for example data structure.
        // {
        //   "org_connection_id": "1234-1234-1234-1234-1234",
        //   "endpoint_id": "1234-1234-1234-1234-1234"
        // }
        this.orgConnectionCallbackSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
    }
}
MessageBusService.ɵfac = function MessageBusService_Factory(t) { return new (t || MessageBusService)(); };
MessageBusService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: MessageBusService, factory: MessageBusService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3843:
/*!*******************************************!*\
  !*** ./src/app/services/vault.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConnectWindowTimeout": () => (/* binding */ ConnectWindowTimeout),
/* harmony export */   "VaultService": () => (/* binding */ VaultService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 2340);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 3280);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 7580);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 116);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 155);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 3158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 5474);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-device-detector */ 7454);
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config.service */ 946);






const ConnectWindowTimeout = 2 * 60 * 1000; //wait 2 minutes (in milliseconds)
class VaultService {
    constructor(_httpClient, deviceService, configService) {
        this._httpClient = _httpClient;
        this.deviceService = deviceService;
        this.configService = configService;
        //always watch for changes to the vault
        this.configService.systemConfigSubject.subscribe((systemConfig) => {
            console.log("System configuration changed:", systemConfig, this.configService.systemConfig$);
            if (systemConfig.org_id && !systemConfig.org) {
                console.log("attempt to download org information, and store in config");
                this.getOrg(systemConfig.org_id).subscribe((org) => {
                    console.log("org:", org);
                    this.configService.systemConfig = { org: org };
                });
            }
        });
    }
    //This function must be ".subscribed()" to work. If not, the handler will not be registered and messages will be ignored.
    waitForOrgConnectionOrTimeout(openedWindow) {
        console.log(`waiting for postMessage notification from popup window`);
        //TODO: this function should also wait for the close event from the window and throw an error if the window is closed.
        // see: https://stackoverflow.com/questions/5712195/how-to-listen-for-child-window-closing
        //new code to listen to post message
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.fromEvent)(window, 'message')
            .pipe(
        //throw an error if we wait more than 2 minutes (this will close the window)
        (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.timeout)(ConnectWindowTimeout), 
        //make sure we're only listening to events from the "opened" window.
        (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.filter)((event) => event.source == openedWindow), 
        //after filtering, we should only have one event to handle.
        (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.first)(), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)((event) => {
            console.log(`received postMessage notification from popup window & sending acknowledgment`);
            // @ts-ignore
            event.source.postMessage(JSON.stringify({ close: true }), event.origin);
            console.log("postmessage data", event.data);
            return JSON.parse(event.data);
        }), (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.catchError)((err) => {
            console.warn(`timed out waiting for notification from popup (${ConnectWindowTimeout / 1000}s), closing window`);
            openedWindow.self.close();
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.throwError)(err);
        }));
    }
    getRecordLocatorFacilities() {
        return this._httpClient.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.connect_api_endpoint_base}/bridge/record_locator`, { params: { "public_id": this.configService.systemConfig$.publicId } })
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)((response) => {
            console.log("Record Locator Response", response);
            return response.data;
        }));
    }
    searchCatalogBrands(apiMode, filter) {
        if ((typeof filter.searchAfter === 'string' || filter.searchAfter instanceof String) && filter.searchAfter.length > 0) {
            filter.searchAfter = filter.searchAfter.split(',');
        }
        else {
            filter.searchAfter = [];
        }
        const endpointUrl = new URL(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.connect_api_endpoint_base}/bridge/catalog/search`);
        return this._httpClient.post(endpointUrl.toString(), filter, { params: {
                "public_id": this.configService.systemConfig$.publicId,
                'api_mode': apiMode
            } })
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)((response) => {
            console.log("Metadata RESPONSE", response);
            return response.data;
        }));
    }
    getOrg(orgId) {
        return this._httpClient.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.connect_api_endpoint_base}/org/${orgId}`, { params: {
                "public_id": this.configService.systemConfig$.publicId,
            } })
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)((response) => {
            console.log("Organization", response);
            return response.data;
        }));
    }
    getOrgByPublicId(publicId) {
        let queryParams = {};
        queryParams['public_id'] = publicId;
        return this._httpClient.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.connect_api_endpoint_base}/bridge/org`, { params: queryParams })
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)((response) => {
            console.log("Organization", response);
            return response.data;
        }));
    }
    requestHealthSystem(requestHealth) {
        const endpointUrl = new URL(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.connect_api_endpoint_base}/support/healthsystem`);
        return this._httpClient.post(endpointUrl.toString(), requestHealth)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)((response) => {
            // @ts-ignore
            return {};
        }));
    }
    requestSupport(request) {
        const endpointUrl = new URL(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.connect_api_endpoint_base}/support/request`);
        return this._httpClient.post(endpointUrl.toString(), request)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)((response) => {
            // @ts-ignore
            return {};
        }));
    }
    // public verificationWithPopup(publicId: string, brandId: string, portalId: string, endpointId: string, reconnectOrgConnectionId?: string, connectMode?: ConnectMode, externalId?: string, externalState?: string): Observable<OrganizationConnectionCallbackEvent> {
    verificationWithPopup() {
        //todo, this should use a bridge/connect or vault endpoint
        const redirectUrl = new URL(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.connect_api_endpoint_base}/bridge/identity_verification/connect`);
        redirectUrl.searchParams.set("public_id", this.configService.systemConfig$.publicId);
        const isDesktop = this.deviceService.isDesktop();
        let features = "";
        if (isDesktop) {
            //add optons for window.open, popup only for desktop (mobile and table will open a new tab)
            features = "popup=true,width=700,height=600";
        }
        //open a external url in a new window
        let openedWindow = window.open(redirectUrl.toString(), "_blank", features);
        return this.waitForOrgConnectionOrTimeout(openedWindow);
    }
    accountConnectWithPopup(brandId, portalId, endpointId, reconnectOrgConnectionId, externalId, externalState) {
        const redirectUrlParts = new URL(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.connect_api_endpoint_base}/bridge/connect`);
        const redirectParams = new URLSearchParams();
        redirectParams.set("public_id", this.configService.systemConfig$.publicId);
        redirectParams.set("brand_id", brandId);
        redirectParams.set("portal_id", portalId);
        redirectParams.set("endpoint_id", endpointId);
        redirectParams.set("connect_mode", "popup");
        if (reconnectOrgConnectionId) {
            redirectParams.set("reconnect_org_connection_id", reconnectOrgConnectionId);
        }
        if (externalId) {
            redirectParams.set("external_id", externalId);
        }
        if (externalState) {
            redirectParams.set("external_state", externalState);
        }
        redirectUrlParts.search = redirectParams.toString();
        console.log(redirectUrlParts.toString());
        const isDesktop = this.deviceService.isDesktop();
        let features = "";
        if (isDesktop) {
            //add optons for window.open, popup only for desktop (mobile and table will open a new tab)
            features = "popup=true,width=700,height=600";
        }
        //We're always in popup mode, we can open a new window, rather than redirecting the current window (which is an app frame)
        //open a external url in a new window
        let openedWindow = window.open(redirectUrlParts.toString(), "_blank", features);
        return this.waitForOrgConnectionOrTimeout(openedWindow);
    }
    //OLD code
    updateUser(oldPass, oldEmail, newEmail, newPass = "") {
        const userUpdateJson = JSON.stringify({
            email: oldEmail,
            password: oldPass,
            newEmail: newEmail,
            newPassword: newPass
        });
        return this._httpClient.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.connect_api_endpoint_base}/user`, userUpdateJson)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)((response) => {
            console.log("Updated User", response);
            return response.data;
        }));
    }
    /**
     * Create a new organization and associate it with the current User
     * @param newOrg
     * @param logoBlob
     * @constructor
     */
    createOrg(newOrg, logoBlob) {
        const formData = new FormData();
        //add the org data to the form data
        const orgJson = JSON.stringify(newOrg);
        const orgJsonBlob = new Blob([orgJson], {
            type: 'application/json'
        });
        formData.append("org", orgJsonBlob);
        formData.append("logo", logoBlob);
        let resp = this._httpClient.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.connect_api_endpoint_base}/org`, formData);
        console.log(resp);
        return resp;
    }
    updateOrg(orgId, updateOrg, logoBlob) {
        const formData = new FormData();
        //add the org data to the form data
        const orgJson = JSON.stringify(updateOrg);
        const orgJsonBlob = new Blob([orgJson], {
            type: 'application/json'
        });
        formData.append("org", orgJsonBlob);
        if (logoBlob) {
            formData.append("logo", logoBlob);
        }
        return this._httpClient.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.connect_api_endpoint_base}/org/${orgId}`, formData)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)((response) => {
            console.log("Updated Organization", response);
            return response.data;
        }));
    }
    sendOrgInvite(orgId, recipientEmail) {
        return this._httpClient.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.connect_api_endpoint_base}/org/${orgId}/invite`, {
            recipient_email_address: recipientEmail,
            org_id: orgId
        });
    }
    // public createOrgCredentials(orgId: string, apiMode: ApiMode, redirectUrl: string, note: string): Observable<{ action: CRUDMode, org_credential: OrganizationCredential, private_key: string }> {
    //   return this._httpClient.post<ResponseWrapper>(`${environment.connect_api_endpoint_base}/org/${orgId}/credentials`, {
    //     api_mode: apiMode,
    //     redirect_uri: redirectUrl,
    //     note: note
    //   })
    //     .pipe(
    //       map((response: ResponseWrapper) => {
    //         console.log("Organization Credential", response)
    //         response.data.action = CRUDMode.Create
    //         return response.data as { action: CRUDMode, org_credential: OrganizationCredential, private_key: string };
    //       })
    //     );
    // }
    getOrgCredentials(orgId) {
        return this._httpClient.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.connect_api_endpoint_base}/org/${orgId}/credentials`)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.map)((response) => {
            console.log("Organization Credentials", response);
            return response.data;
        }));
    }
}
VaultService.ɵfac = function VaultService_Factory(t) { return new (t || VaultService)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](ngx_device_detector__WEBPACK_IMPORTED_MODULE_11__.DeviceDetectorService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_config_service__WEBPACK_IMPORTED_MODULE_1__.ConfigService)); };
VaultService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({ token: VaultService, factory: VaultService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7968:
/*!*****************************************!*\
  !*** ./src/app/utils/connect-helper.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConnectHelper": () => (/* binding */ ConnectHelper)
/* harmony export */ });
/* harmony import */ var _services_vault_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/vault.service */ 3843);
/* harmony import */ var _router_nav_outlet_nav_outlet_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../router/nav-outlet/nav-outlet.service */ 6773);
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.routing */ 6738);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_message_bus_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/message-bus.service */ 5983);
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/config.service */ 946);






function ConnectHelper(connectData) {
    const vaultApi = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_services_vault_service__WEBPACK_IMPORTED_MODULE_0__.VaultService);
    const configService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_services_config_service__WEBPACK_IMPORTED_MODULE_4__.ConfigService);
    const navOutletService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_router_nav_outlet_nav_outlet_service__WEBPACK_IMPORTED_MODULE_1__.NavOutletService);
    const messageBusService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.inject)(_services_message_bus_service__WEBPACK_IMPORTED_MODULE_3__.MessageBusService);
    vaultApi.accountConnectWithPopup(connectData.catalog_brand_id, connectData.catalog_portal_id, connectData.catalog_endpoint_id, connectData.org_connection_id, connectData.external_id, connectData.external_state).subscribe((orgConnectionCallbackData) => {
        console.log(orgConnectionCallbackData);
        if (!orgConnectionCallbackData) {
            return; //wait for redirect
        }
        //Note: this code will only run when this.connectMode == popup
        //when connectMode == 'redirect', the user is redirected in the same window, and this code is never executed.
        messageBusService.orgConnectionCallbackSubject.next(orgConnectionCallbackData);
        configService.vaultProfileAddConnectedAccount(orgConnectionCallbackData);
        // redirect the browser back to the search page (TODO: this should show the support request page if an error occurred)
        navOutletService.navigateByUrl(_app_routing__WEBPACK_IMPORTED_MODULE_2__.NavOutletPageName.Dashboard);
    });
}


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
const environment = {
    name: "development",
    //specify the lighthouse base that we're going to use to authenticate against all our source/providers. Must not have trailing slash
    lighthouse_api_endpoint_base: 'https://lighthouse.fastenhealth.com',
    //used to specify the api server that we're going to use (can be relative or absolute). Must not have trailing slash
    // connect_api_endpoint_base: 'https://api.connect-dev.fastenhealth.com/v1',
    // if relative, must start with /
    connect_api_endpoint_base: 'https://api.connect-dev.fastenhealth.com/v1',
    connect_api_jwt_issuer_host: 'https://api.connect-dev.fastenhealth.com/v1',
    //JWKS for JWT verification
    jwks_uri: 'https://cdn.fastenhealth.com/jwks/fasten-connect/dev.json',
};


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