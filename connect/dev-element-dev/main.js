"use strict";
(self["webpackChunkfasten_connect_stitch_element"] = self["webpackChunkfasten_connect_stitch_element"] || []).push([["main"],{

/***/ 9456:
/*!*************************************************************************!*\
  !*** ./projects/fasten-connect-stitch-element/src/app/app.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environments/environment */ 3413);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);





const _c0 = ["stitchModalButton"];
const _c1 = ["stitchModal"];
const _c2 = ["stitchIframeEmbed"];
function AppComponent_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Share Records ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c3 = ["*"];
class AppComponent {
    constructor(host) {
        this.host = host;
        this.publicId = ''; //validate
        this.externalId = ''; //validate
        this.reconnectOrgConnectionId = null;
        this.anonymousVaultProfile = false;
        this.staticBackdrop = false;
        this.messageBusCallback = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        //https://stackoverflow.com/a/69173549/1157633
        this.host.nativeElement.show = this.showStitchModalExt.bind(this);
        this.host.nativeElement.hide = this.hideStitchModalExt.bind(this);
    }
    ngOnInit() {
        window.addEventListener('message', (event) => {
            if (event.origin !== 'http://localhost:4201') {
                console.error("Message received from invalid origin", event.origin);
                return;
            }
            const responseElement = document.getElementById('response');
            if (responseElement) {
                responseElement.innerHTML = "Hello " + event.data.text + " " + event.data.number;
            }
            console.log(event.data);
        }, false);
    }
    // buttonClick(): void {
    //   console.log("button clicked...updating iframe");
    //   const frames = this.stitchModal.nativeElement.getElementsByTagName("iframe");
    //   if(frames.length > 0) {
    //     const frame = frames[0];
    //     const text = (Math.random() + 1).toString(36).substring(7);
    //     frame.src = `http://localhost:4201?text=${text}`;
    //     this.sendMessageToFrame(frame, "Hello");
    //
    //     const btnText = document.getElementById("button-text");
    //     if(btnText){
    //       btnText.innerHTML = `Expected display text in iFrame: Hello ${text}`;
    //     }
    //   }
    // }
    //
    // sendMessageToFrame(frame: HTMLIFrameElement, message: string): void {
    //   frame.contentWindow?.postMessage(message, "http://localhost:4201");
    // }
    //the element options must be encoded as query string parameters and then appended to the iframe src
    encodeOptionsAsQueryStringParameters() {
        // @Input('public-id') publicId = ''; //validate
        // @Input('external-id') externalId = ''; //validate
        // @Input('reconnect-org-connection-id') reconnectOrgConnectionId: string | null = null;
        // @Input('anonymous-vault-profile') anonymousVaultProfile: boolean | null = false;
        // @Input('static-backdrop') staticBackdrop: boolean | null = false;
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams();
        if (this.publicId) {
            params = params.set('public-id', this.publicId);
        }
        if (this.externalId) {
            params = params.set('external-id', this.externalId);
        }
        if (this.reconnectOrgConnectionId) {
            params = params.set('reconnect-org-connection-id', this.reconnectOrgConnectionId);
        }
        if (this.anonymousVaultProfile) {
            params = params.set('anonymous-vault-profile', this.anonymousVaultProfile.toString());
        }
        if (this.staticBackdrop) {
            params = params.set('static-backdrop', this.staticBackdrop.toString());
        }
        return params.toString();
    }
    showStitchModal() {
        this.stitchIframeEmbed.nativeElement.src = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.embed_endpoint_base + "?" + this.encodeOptionsAsQueryStringParameters();
        this.stitchModal.nativeElement.showModal();
        this.registerDialogCloseOnBackdropClick();
        // const frames = this.stitchModal.nativeElement.getElementsByTagName("iframe");
        // if(frames.length > 0){
        //   const frame = frames[0];
        //   if(frame){
        //     //This fails because secure.example.net is not the origin of the iframe
        //     frame.contentWindow?.postMessage("The user is 'bob' and the password is 'secret'", "https://secure.example.net");
        //     //This works because example.net is the origin of the iframe
        //     this.sendMessageToFrame(frame, "Hello");
        //   }
        // }
    }
    // these functions can be called externally to show/hide the widget via javascript
    showStitchModalExt() {
        this.showStitchModal();
    }
    hideStitchModalExt() {
        this.stitchModal.nativeElement.close();
    }
    //event handler for backdrop click
    registerDialogCloseOnBackdropClick() {
        this.stitchModal.nativeElement.addEventListener('click', (event) => {
            var rect = this.stitchModal.nativeElement.getBoundingClientRect();
            var isInDialog = (rect.top <= event.clientY && event.clientY <= rect.top + rect.height &&
                rect.left <= event.clientX && event.clientX <= rect.left + rect.width);
            if (!isInDialog) {
                this.stitchModal.nativeElement.close();
            }
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["fasten-stitch-element"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.stitchModalButton = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.stitchModal = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.stitchIframeEmbed = _t.first);
    } }, inputs: { publicId: ["public-id", "publicId"], externalId: ["external-id", "externalId"], reconnectOrgConnectionId: ["reconnect-org-connection-id", "reconnectOrgConnectionId"], anonymousVaultProfile: ["anonymous-vault-profile", "anonymousVaultProfile"], staticBackdrop: ["static-backdrop", "staticBackdrop"] }, outputs: { messageBusCallback: "messageBusCallback" }, ngContentSelectors: _c3, decls: 10, vars: 1, consts: [["type", "button", 1, "block", "text-white", "bg-blue-700", "hover:bg-blue-800", "focus:ring-4", "focus:outline-none", "focus:ring-blue-300", "font-medium", "rounded-lg", "text-sm", "px-5", "py-2.5", "text-center", "dark:bg-blue-600", "dark:hover:bg-blue-700", "dark:focus:ring-blue-800", 3, "click"], ["stitchModalButton", ""], ["ref", ""], [4, "ngIf"], ["id", "stitchModal", "tabindex", "-1", "aria-hidden", "true", 1, "border-none", "p-0", "backdrop:backdrop-blur", "w-full", "max-w-[440px]", "min-h-[600px]", "bg-white", "rounded-lg", "shadow-lg"], ["stitchModal", ""], ["src", "https://embed.connect-dev.fastenhealth.com", 1, "border-none", 2, "width", "100%", "min-height", "500px"], ["stitchIframeEmbed", ""]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_button_click_0_listener() { return ctx.showStitchModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", null, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, AppComponent_span_5_Template, 2, 0, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "dialog", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "iframe", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !_r1.hasChildNodes());
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf], styles: ["@keyframes scale {\n  0% {\n    transform: scale(0.8);\n    opacity: 0.7;\n  }\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n.animate-scale {\n  animation: scale 0.3s ease forwards;\n}\n@keyframes shake {\n  10%, 90% {\n    transform: translateX(-1px);\n  }\n  20%, 80% {\n    transform: translateX(2px);\n  }\n  30%, 50%, 70% {\n    transform: translateX(-4px);\n  }\n  40%, 60% {\n    transform: translateX(4px);\n  }\n}\n.animate-shake {\n  animation: shake 0.3s;\n}\n@keyframes pulseFlow {\n  0%, 100% {\n    transform: scale(0.9);\n    opacity: 0.4;\n  }\n  50% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n.animate-pulse-flow {\n  animation: pulseFlow 2s ease-in-out infinite;\n}\n@keyframes bounce {\n  0%, 100% {\n    transform: translateY(-25%);\n  }\n  50% {\n    transform: none;\n  }\n}\n.animate-bounce {\n  animation: bounce 1s cubic-bezier(0.8, 0, 1, 1) infinite;\n}\n@keyframes successCircle {\n  0% {\n    transform: scale(0);\n    opacity: 0;\n  }\n  50% {\n    transform: scale(1.1);\n    opacity: 0.8;\n  }\n  100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n@keyframes successCheck {\n  0% {\n    stroke-dashoffset: 100;\n    opacity: 0;\n  }\n  60% {\n    stroke-dashoffset: 0;\n    opacity: 1;\n  }\n  100% {\n    stroke-dashoffset: 0;\n    opacity: 1;\n  }\n}\n.success-circle {\n  animation: successCircle 0.6s cubic-bezier(0.22, 0.61, 0.36, 1) forwards;\n}\n.success-check {\n  stroke-dasharray: 100;\n  stroke-dashoffset: 100;\n  animation: successCheck 0.9s cubic-bezier(0.22, 0.61, 0.36, 1) forwards;\n  animation-delay: 0.3s;\n}\n.connect-btn {\n  transition: all 0.2s ease;\n}\n.connect-btn:hover {\n  transform: scale(1.05);\n}\n.connect-btn:active {\n  transform: scale(0.95);\n}\n.delay-100 {\n  animation-delay: 0s;\n}\n.delay-200 {\n  animation-delay: 0.4s;\n}\n.delay-300 {\n  animation-delay: 0.8s;\n}\n.step-view {\n  display: none;\n}\n.verification-input {\n  width: 2.5rem;\n  height: 2.5rem;\n  text-align: center;\n  border-radius: 0.5rem;\n  font-size: 1.125rem;\n  font-weight: 600;\n  border: 1px solid rgb(209, 213, 219);\n}\n.verification-input:focus {\n  outline: none;\n  border-color: #5B47FB;\n  box-shadow: 0 0 0 2px rgba(91, 71, 251, 0.2);\n}\n.verification-input.filled {\n  background-color: rgb(249, 250, 251);\n  border-color: #5B47FB;\n}\n.verification-input.error {\n  border-color: rgb(239, 68, 68);\n  animation: shake 0.3s;\n}\n.verification-button {\n  display: block;\n  width: 100%;\n  text-align: center;\n  color: #5B47FB;\n  font-weight: 500;\n  padding: 0.5rem;\n  border-radius: 0.375rem;\n  transition: color 0.2s;\n}\n.verification-button:hover {\n  color: #4936E8;\n  background-color: rgba(91, 71, 251, 0.05);\n}\n@keyframes overlayFadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes overlayContentSlideUp {\n  from {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes logoFloat {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-8px);\n  }\n}\n@keyframes pulseGlow {\n  0%, 100% {\n    box-shadow: 0 0 0 0 rgba(91, 71, 251, 0.4);\n  }\n  50% {\n    box-shadow: 0 0 20px 3px rgba(91, 71, 251, 0.2);\n  }\n}\n.redirect-overlay-enter {\n  animation: overlayFadeIn 0.3s ease-out;\n}\n.redirect-overlay-content {\n  animation: overlayContentSlideUp 0.4s ease-out;\n}\n.redirect-logo-container {\n  animation: logoFloat 2s ease-in-out infinite, pulseGlow 2s ease-in-out infinite;\n}\n.redirect-dots {\n  display: flex;\n  gap: 4px;\n  justify-content: center;\n  margin-bottom: 8px;\n}\n.redirect-dot {\n  width: 6px;\n  height: 6px;\n  background-color: #5B47FB;\n  border-radius: 50%;\n  opacity: 0.3;\n  animation: dotPulse 1s ease-in-out infinite;\n}\n.redirect-dot:nth-child(2) {\n  animation-delay: 0.2s;\n}\n.redirect-dot:nth-child(3) {\n  animation-delay: 0.4s;\n}\n@keyframes dotPulse {\n  0%, 100% {\n    opacity: 0.3;\n    transform: scale(1);\n  }\n  50% {\n    opacity: 1;\n    transform: scale(1.2);\n  }\n}\n.az-logo {\n  font-weight: 700;\n  font-size: 28px;\n  font-family: Poppins, sans-serif;\n  text-transform: lowercase;\n  color: #5b47fb;\n  letter-spacing: -1px;\n  display: flex;\n  align-items: center;\n  position: relative;\n  top: -2px;\n}\n/*# sourceMappingURL=data:application/json;base64,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QTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FBcEJGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuQGtleWZyYW1lcyBzY2FsZSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XG4gICAgb3BhY2l0eTogMC43O1xuICB9XG5cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbi5hbmltYXRlLXNjYWxlIHtcbiAgYW5pbWF0aW9uOiBzY2FsZSAwLjNzIGVhc2UgZm9yd2FyZHM7XG59XG5cbkBrZXlmcmFtZXMgc2hha2Uge1xuICAxMCUsXG4gIDkwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xcHgpO1xuICB9XG5cbiAgMjAlLFxuICA4MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgycHgpO1xuICB9XG5cbiAgMzAlLFxuICA1MCUsXG4gIDcwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC00cHgpO1xuICB9XG5cbiAgNDAlLFxuICA2MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg0cHgpO1xuICB9XG59XG5cbi5hbmltYXRlLXNoYWtlIHtcbiAgYW5pbWF0aW9uOiBzaGFrZSAwLjNzO1xufVxuXG5Aa2V5ZnJhbWVzIHB1bHNlRmxvdyB7XG4gIDAlLCAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XG4gICAgb3BhY2l0eTogMC40O1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbi5hbmltYXRlLXB1bHNlLWZsb3cge1xuICBhbmltYXRpb246IHB1bHNlRmxvdyAycyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyBib3VuY2Uge1xuICAwJSwgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yNSUpO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiBub25lO1xuICB9XG59XG5cbi5hbmltYXRlLWJvdW5jZSB7XG4gIGFuaW1hdGlvbjogYm91bmNlIDFzIGN1YmljLWJlemllcigwLjgsIDAsIDEsIDEpIGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIHN1Y2Nlc3NDaXJjbGUge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgIG9wYWNpdHk6IDAuODtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBzdWNjZXNzQ2hlY2sge1xuICAwJSB7XG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDEwMDtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDYwJSB7XG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICAxMDAlIHtcbiAgICBzdHJva2UtZGFzaG9mZnNldDogMDtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbi5zdWNjZXNzLWNpcmNsZSB7XG4gIGFuaW1hdGlvbjogc3VjY2Vzc0NpcmNsZSAwLjZzIGN1YmljLWJlemllcigwLjIyLCAwLjYxLCAwLjM2LCAxKSBmb3J3YXJkcztcbn1cblxuLnN1Y2Nlc3MtY2hlY2sge1xuICBzdHJva2UtZGFzaGFycmF5OiAxMDA7XG4gIHN0cm9rZS1kYXNob2Zmc2V0OiAxMDA7XG4gIGFuaW1hdGlvbjogc3VjY2Vzc0NoZWNrIDAuOXMgY3ViaWMtYmV6aWVyKDAuMjIsIDAuNjEsIDAuMzYsIDEpIGZvcndhcmRzO1xuICBhbmltYXRpb24tZGVsYXk6IDAuM3M7XG59XG5cbi5jb25uZWN0LWJ0biB7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG59XG5cbi5jb25uZWN0LWJ0bjpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG59XG5cbi5jb25uZWN0LWJ0bjphY3RpdmUge1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xufVxuXG4uZGVsYXktMTAwIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAwcztcbn1cblxuLmRlbGF5LTIwMCB7XG4gIGFuaW1hdGlvbi1kZWxheTogMC40cztcbn1cblxuLmRlbGF5LTMwMCB7XG4gIGFuaW1hdGlvbi1kZWxheTogMC44cztcbn1cblxuLnN0ZXAtdmlldyB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi52ZXJpZmljYXRpb24taW5wdXQge1xuICB3aWR0aDogMi41cmVtO1xuICBoZWlnaHQ6IDIuNXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMDkgMjEzIDIxOSk7XG59XG5cbi52ZXJpZmljYXRpb24taW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXItY29sb3I6ICM1QjQ3RkI7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDJweCByZ2JhKDkxLCA3MSwgMjUxLCAwLjIpO1xufVxuXG4udmVyaWZpY2F0aW9uLWlucHV0LmZpbGxlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDkgMjUwIDI1MSk7XG4gIGJvcmRlci1jb2xvcjogIzVCNDdGQjtcbn1cblxuLnZlcmlmaWNhdGlvbi1pbnB1dC5lcnJvciB7XG4gIGJvcmRlci1jb2xvcjogcmdiKDIzOSA2OCA2OCk7XG4gIGFuaW1hdGlvbjogc2hha2UgMC4zcztcbn1cblxuLnZlcmlmaWNhdGlvbi1idXR0b24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICM1QjQ3RkI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMnM7XG59XG5cbi52ZXJpZmljYXRpb24tYnV0dG9uOmhvdmVyIHtcbiAgY29sb3I6ICM0OTM2RTg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoOTEsIDcxLCAyNTEsIDAuMDUpO1xufVxuXG5Aa2V5ZnJhbWVzIG92ZXJsYXlGYWRlSW4ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgb3ZlcmxheUNvbnRlbnRTbGlkZVVwIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgbG9nb0Zsb2F0IHtcbiAgMCUsIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtOHB4KTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHB1bHNlR2xvdyB7XG4gIDAlLCAxMDAlIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwIHJnYmEoOTEsIDcxLCAyNTEsIDAuNCk7XG4gIH1cbiAgNTAlIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMjBweCAzcHggcmdiYSg5MSwgNzEsIDI1MSwgMC4yKTtcbiAgfVxufVxuXG4ucmVkaXJlY3Qtb3ZlcmxheS1lbnRlciB7XG4gIGFuaW1hdGlvbjogb3ZlcmxheUZhZGVJbiAwLjNzIGVhc2Utb3V0O1xufVxuXG4ucmVkaXJlY3Qtb3ZlcmxheS1jb250ZW50IHtcbiAgYW5pbWF0aW9uOiBvdmVybGF5Q29udGVudFNsaWRlVXAgMC40cyBlYXNlLW91dDtcbn1cblxuLnJlZGlyZWN0LWxvZ28tY29udGFpbmVyIHtcbiAgYW5pbWF0aW9uOiBsb2dvRmxvYXQgMnMgZWFzZS1pbi1vdXQgaW5maW5pdGUsIHB1bHNlR2xvdyAycyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbn1cblxuLnJlZGlyZWN0LWRvdHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDRweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuLnJlZGlyZWN0LWRvdCB7XG4gIHdpZHRoOiA2cHg7XG4gIGhlaWdodDogNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUI0N0ZCO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG9wYWNpdHk6IDAuMztcbiAgYW5pbWF0aW9uOiBkb3RQdWxzZSAxcyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbn1cblxuLnJlZGlyZWN0LWRvdDpudGgtY2hpbGQoMikge1xuICBhbmltYXRpb24tZGVsYXk6IDAuMnM7XG59XG5cbi5yZWRpcmVjdC1kb3Q6bnRoLWNoaWxkKDMpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjRzO1xufVxuXG5Aa2V5ZnJhbWVzIGRvdFB1bHNlIHtcbiAgMCUsIDEwMCUge1xuICAgIG9wYWNpdHk6IDAuMztcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG4gIDUwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG4gIH1cbn1cblxuLmF6LWxvZ28ge1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDI4cHg7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zLCBzYW5zLXNlcmlmO1xuICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xuICBjb2xvcjogIzViNDdmYjtcbiAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMnB4O1xufVxuIl19 */"], encapsulation: 2 });


/***/ }),

/***/ 4600:
/*!**********************************************************************!*\
  !*** ./projects/fasten-connect-stitch-element/src/app/app.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/elements */ 4555);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 9456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);





class AppModule {
    constructor(injector) {
        const el = (0,_angular_elements__WEBPACK_IMPORTED_MODULE_1__.createCustomElement)(_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, { injector });
        customElements.define('fasten-stitch-element', el);
    }
    ngDoBootstrap() { }
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector)); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.BrowserModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.BrowserModule] }); })();


/***/ }),

/***/ 3413:
/*!********************************************************************************!*\
  !*** ./projects/fasten-connect-stitch-element/src/environments/environment.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    name: "local",
    embed_endpoint_base: 'https://localhost:4201',
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

/***/ 3691:
/*!************************************************************!*\
  !*** ./projects/fasten-connect-stitch-element/src/main.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 4600);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 3413);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.name != 'local') {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(3691)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map