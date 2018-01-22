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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var index_1 = require("../_services/index");
var DemandListComponent = /** @class */ (function () {
    function DemandListComponent(router, demandService, userService, alertService) {
        this.router = router;
        this.demandService = demandService;
        this.userService = userService;
        this.alertService = alertService;
        this.model = {};
        this.demands = [];
        this.loading = false;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    DemandListComponent.prototype.ngOnInit = function () {
        this.loadAllDemand();
    };
    DemandListComponent.prototype.deleteDemand = function (_id) {
        var _this = this;
        this.userService.deleteDemand(_id).subscribe(function () { _this.loadAllDemand(); });
    };
    DemandListComponent.prototype.loadAllDemand = function () {
        var _this = this;
        this.demandService.getAllDemand().subscribe(function (demands) {
            _this.demands = demands;
        });
    };
    DemandListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'demandlist.component.html'
        }),
        __metadata("design:paramtypes", [router_1.Router,
            index_1.DemandService,
            index_1.UserService,
            index_1.AlertService])
    ], DemandListComponent);
    return DemandListComponent;
}());
exports.DemandListComponent = DemandListComponent;
//# sourceMappingURL=demandlist.component.js.map