"use strict";
var home_component_1 = require('../home.component');
var project_component_1 = require('../project.component');
var logged_in_guard_1 = require('../logged-in.guard');
var sign_in_component_1 = require('../sign-in.component');
exports.routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'registr',
        component: sign_in_component_1.SignInComponent
    },
    {
        path: 'home',
        component: home_component_1.HomeComponent
    },
    {
        path: 'project',
        component: project_component_1.ProjectComponent,
        canActivate: [logged_in_guard_1.LoggedInGuard] }
];
//# sourceMappingURL=app.routes.js.map