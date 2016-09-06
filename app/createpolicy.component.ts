import {Component, EventEmitter, Input, Output,AfterViewInit, ViewChild} from '@angular/core';
import {PolicyGroup} from './policygroup';
import { PolicyGroupService } from './policy-group.service';
import { CollectorService } from './collector.service';
import { PolicyService } from './policy.service';


@Component({
	selector:'policy-form',
	templateUrl:'./template/create-pol-form.html',
	providers:[PolicyService, CollectorService]
})
export class PolicyFormComponent implements AfterViewInit{
	policygroup = new PolicyGroup("","","");
	public isDisplay:boolean = false;
	
	//TODO initialize collectos adns policies with back-end or services
	public collectors:string[] = ["col1","col2","col3", "col4"];
	public policies :string[] = ["pol1","pol2","pol3","pol4"];

	@Output() onUpdated = new EventEmitter();
	@Output() onAddPolicy = new EventEmitter();

    @ViewChild('newGroupCol')   groupSelectElRef:any;
    @ViewChild('newGroupPol')   policySelectElRef:any;

    //Inject services
    constructor (private groupService: PolicyGroupService, private policyService:PolicyService, private colService: CollectorService) {}

	toggle(){
		if(this.isDisplay == false){
			this.isDisplay = true;
		}
		else if(this.isDisplay == true){
			this.isDisplay = false;
		}else{}
	}

	showup(){
		this.isDisplay = true;
	}

	addNewPolicy(){
	    //invoke listener in parent
		this.onAddPolicy.emit();
	}

	/* life cycle hook */
	ngAfterViewInit() {
	//TODO update collecors and policies selection
	/*
		this.getCollectors();
		this.getPolicies();
		*/
    }

	onSubmit(name:string,col:string, pol:string){
		if(!name || !col|| !pol){return;}
	    this.policygroup.name = name;
	    this.policygroup.collector = col;
	    this.policygroup.policy = pol;

	    //TODO connect with back-end database
	    this.groupService.addGroup(name,col,pol);
	    this.onUpdated.emit({'name':name,'col':col,'pol':pol});
	    this.toggle();
	}

	

	setDefaultValue(name:string,col:string, pol:string){
	   /* set model */
	   this.policygroup.name = name;
	   this.policygroup.collector = col;
	   this.policygroup.policy = pol;

	   /* set selection */
	   let options = this.groupSelectElRef.nativeElement.options;       
       for(let i=0; i < options.length; i++) {
           if(options[i].value == col) {          
               options[i].selected = true;
           }
       }


       options = this.policySelectElRef.nativeElement.options;       
       for(let i=0; i < options.length; i++) {
           if(options[i].value == pol) {          
               options[i].selected = true;
           }
       }

	}

}