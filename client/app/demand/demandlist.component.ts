import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User, Demand } from '../_models/index';
import { AlertService, UserService, DemandService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'demandlist.component.html'
})

export class DemandListComponent {
	currentUser: User;
    model: any = {};
    demands: Demand[] = [];
    loading = false;

    constructor(
        private router: Router,
        private demandService: DemandService,
        private userService: UserService,
        private alertService: AlertService) { 
		this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        }
	
	ngOnInit() {
		this.loadAllDemand();
	}

    deleteDemand(_id: string) {
        this.userService.deleteDemand(_id).subscribe(() => { this.loadAllDemand() });
    }

    private loadAllDemand() {
        this.demandService.getAllDemand().subscribe(demands => { this.demands = demands;
        });
    }
}
