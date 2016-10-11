"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var user_service_1 = require('./services/user.service');
var user_1 = require('./user');
var SignInComponent = (function () {
    function SignInComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.user = new user_1.User('');
        this.active = true;
    }
    SignInComponent.prototype.sendEmail = function (email, password) {
        var _this = this;
        this.user = new user_1.User(email, password);
        this.userService.confirmEmail(email).subscribe(function (result) {
            if (result) {
                _this.justEmail = result;
            }
        });
        this.user = new user_1.User('', '');
        this.active = false;
        setTimeout(function () { return _this.active = true; }, 0);
    };
    SignInComponent = __decorate([
        core_1.Component({
            selector: 'signin',
            template: "  <div class=\"form-container\">\n      <h3 class=\"form-title\">Sign In</h3>\n        <form *ngIf=\"active\" novalidate #signupForm=\"ngForm\" (ngSubmit)=\"signupForm.valid && sendEmail(email.value)\">\n          <div>                        \n              <input type=\"text\" name=\"email\" placeholder=\"Enter your email\"\n                                #email=\"ngModel\"\n                                pattern=\"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$\"\n                                [ngModel]=\"user.email\"\n                                required/>   \n              <div [hidden]=\"email.valid || (email.pristine && !signupForm.submitted)\">Email is required</div>                         \n            </div>                        \n            <button type=\"submit\" class=\"form-button\">Sign In</button>\n          </form>\n        </div>\n               "
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, router_1.Router])
    ], SignInComponent);
    return SignInComponent;
}());
exports.SignInComponent = SignInComponent;
//# sourceMappingURL=sign-in.component.js.map