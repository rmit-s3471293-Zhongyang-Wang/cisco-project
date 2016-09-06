import {Component, OnInit} from '@angular/core';
import {PolicyGroup}       from './policygroup';
import {PolicyGroupService} from './policy-group.service';

Component({
	selector:'policy-group-list',
	templateUrl: './template/policy-group-list.html',
	providers:[PolicyGroupService]
}) 
export class PolicyGroupListComponent{
	errMessage:string;
	policyGroups: PolicyGroup[];
	mode= 'Observable';


/*
	constructor(private groupService:PolicyGroupService){}

	ngOnInit(){this.getGroups();}

	getGroups(){
		this.groupService.getGroups()
								.subscribe(
									groups => this.policyGroups = groups,
									error => this.errMessage = <any>error
									);

	}
	*/
}