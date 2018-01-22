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
var DemandComponent = /** @class */ (function () {
    function DemandComponent(router, demandService, alertService) {
        this.router = router;
        this.demandService = demandService;
        this.alertService = alertService;
        this.model = {};
        this.demands = [];
        this.loading = false;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    DemandComponent.prototype.ngOnInit = function () {
        this.loadMaxDemand();
    };
    DemandComponent.prototype.saveDemand = function () {
        var _this = this;
        this.loading = true;
        this.demandService.create(this.model)
            .subscribe(function (data) {
            _this.alertService.success('Demand added successfully', true);
            _this.router.navigate(['/demandlist']);
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    DemandComponent.prototype.loadMaxDemand = function () {
        var _this = this;
        this.demandService.getAllDemand().subscribe(function (demands) {
            _this.demands = demands;
            var demandIds = [];
            for (var i = 0; i < _this.demands.length; i++) {
                demandIds.push(_this.demands[i].demandID);
            }
            if (demandIds.length === 0) {
                _this.model.demandID = 1000;
            }
            else {
                _this.model.demandID = Math.max.apply(Math, demandIds) + 1;
            }
        });
    };
    DemandComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'demand.component.html'
        }),
        __metadata("design:paramtypes", [router_1.Router,
            index_1.DemandService,
            index_1.AlertService])
    ], DemandComponent);
    return DemandComponent;
}());
exports.DemandComponent = DemandComponent;
//# sourceMappingURL=demand.component.js.map