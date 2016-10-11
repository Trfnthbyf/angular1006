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
var LoginComponent = (function () {
    function LoginComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    LoginComponent.prototype.onSubmit = function (email, password) {
        var _this = this;
        this.userService.login(email, password).subscribe(function (result) {
            if (result) {
                _this.router.navigate(['']);
            }
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login',
            template: "<div class=\"form-container\">\n                   <h3 class=\"form-title\">Login Page</h3>\n                   <form #signupForm=\"ngForm\" (ngSubmit)=\"onSubmit(email.value, password.value)\">\n                        <div>\n                            <input \n                                type=\"email\" \n                                name=\"email\" \n                                #email \n                                placeholder=\"Enter your email\"\n                                required/>\n                        </div>\n                        <div>\n                            <input \n                                type=\"password\"\n                                name=\"password\"\n                                #password\n                                placeholder=\"Enter your password\"\n                                minlength=8\n                                required/>\n                        </div>\n                        <button type=\"submit\" class=\"form-button\">Login</button>\n                   </form>\n               </div>"
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map