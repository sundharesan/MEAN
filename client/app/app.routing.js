"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var index_1 = require("./home/index");
var index_2 = require("./login/index");
var index_3 = require("./register/index");
var index_4 = require("./demand/index");
var index_5 = require("./_guards/index");
var appRoutes = [
    { path: '', component: index_1.HomeComponent, canActivate: [index_5.AuthGuard] },
    { path: 'login', component: index_2.LoginComponent },
    { path: 'register', component: index_3.RegisterComponent },
    { path: 'demand', component: index_4.DemandComponent, canActivate: [index_5.AuthGuard] },
    { path: 'demandlist', component: index_4.DemandListComponent, canActivate: [index_5.AuthGuard] },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map