import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User, Demand } from '../_models/index';
import { AlertService, DemandService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'demand.component.html'
})

export class DemandComponent {
	currentUser: User;
    model: any = {};
    demands: Demand[] = [];
    loading = false;

    constructor(
        private router: Router,
        private demandService: DemandService,
        private alertService: AlertService) { 
		this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        }
	
	ngOnInit() {
		this.loadMaxDemand();
	}

    saveDemand() {
        this.loading = true;
        this.demandService.create(this.model)
            .subscribe(
                data => {
                    this.alertService.success('Demand added successfully', true);
                    this.router.navigate(['/demandlist']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }

    private loadMaxDemand() {
        this.demandService.getAllDemand().subscribe(demands => { this.demands = demands;
        var demandIds = [];
        for(var i = 0; i < this.demands.length; i++){
        		demandIds.push(this.demands[i].demandID);
        }
        if(demandIds.length === 0){this.model.demandID = 1000; }
        else{ this.model.demandID = Math.max(...demandIds) + 1; }

        });
    }
}
