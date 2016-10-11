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
var LoginComponent = (function () {
    function LoginComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.user = new user_1.User('', '');
        this.active = true;
    }
    LoginComponent.prototype.onSubmit = function (email, password) {
        var _this = this;
        this.user = new user_1.User(email, password);
        this.userService.login(email, password).subscribe(function (result) {
            if (result) {
                _this.router.navigate(['home']);
            }
        });
        this.user = new user_1.User('', '');
        this.active = false;
        setTimeout(function () { return _this.active = true; }, 0);
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login',
            template: "<div class=\"form-container\">\n                   <h3 class=\"form-title\">Login Page</h3>\n                   <form *ngIf=\"active\" novalidate #signupForm=\"ngForm\" (ngSubmit)=\"signupForm.valid && onSubmit(email.value, password.value)\" method=\"POST\">\n                        <div>                        \n                            <input type=\"text\" name=\"email\" placeholder=\"Enter your email\"\n                                #email=\"ngModel\"\n                                pattern=\"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$\"\n                                [ngModel]=\"user.email\"\n                                required/>   \n                                <div [hidden]=\"email.valid || (email.pristine && !signupForm.submitted)\">\n                                Email is required\n                                </div>                         \n                        </div>\n                        <div>\n                            <input type=\"password\" name=\"password\" placeholder=\"Enter your password\"\n                                #password=\"ngModel\"\n                                [ngModel]=\"user.password\"                               \n                                minlength=\"8\"\n                                required/>\n                                <div [hidden]=\"password.valid || (password.pristine && !signupForm.submitted)\">\n                                password is required\n                                </div>\n                        </div>\n                        <button type=\"submit\" class=\"form-button\">Login</button>\n                   </form>\n               </div>\n               "
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map