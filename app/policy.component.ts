import { Component,AfterViewInit, ViewChild} from '@angular/core';
import { PolicyGroup} from './policygroup';
import { PolicyFormComponent } from './createpolicy.component';
import { NewPolicyDialogComponent } from './policydialog.component';
import { PolicyGroupService } from './policy-group.service';

@Component({
    selector:'policy-forms',
    templateUrl:'./template/policy-groups.html',
    directives:[
     PolicyFormComponent,
     NewPolicyDialogComponent
     ],

     providers:[PolicyGroupService]
 })
export class PolicyComponent implements AfterViewInit{
	  errorMessage: string;
    /* data binding to poliy group table*/
  	groups: PolicyGroup[] = [];

    private createInnerHTML:string = "Create Policy &nbsp; &nbsp;<span class='glyphicon glyphicon-chevron-down'></span>";
    private cancelInnerHTML:string = "Cancel Creation &nbsp; &nbsp;<span class='glyphicon glyphicon-chevron-up'></span>";

    @ViewChild(PolicyFormComponent) private pfComponent:PolicyFormComponent;
    @ViewChild(NewPolicyDialogComponent)private npdComponent:NewPolicyDialogComponent;
    @ViewChild('createButton')createElRef:any

    constructor (private groupService: PolicyGroupService) {}

	  showCreatePolicyDialog(){
		    this.npdComponent.showup();
	  }

    getGroups() {
    	this.groupService.getGroups()
                     .subscribe(
                       groups => this.groups = groups,
                       error =>  this.errorMessage = <any>error);
    }

  /* toggle policy group form */
	togglePfComponent(event:any){
		this.pfComponent.toggle();
		var target = event.target || event.srcElement || event.currentTarget;
		if(target.innerHTML.indexOf("Cancel")>=0){
		    target.innerHTML = this.createInnerHTML;

		}else{
		    target.innerHTML = this.cancelInnerHTML;

		}
	}

	ngAfterViewInit() {
    //invoke component cycle 
		this.npdComponent.closeDialog();

    //load group data
    this.getGroups();
  }

  /* update policy groups table after server-end data updated*/
	onUpdated($event:any){
  		this.getGroups();
      this.createElRef.nativeElement.innerHTML = this.createInnerHTML;

      //TODO delete after connecting to database
      this.groups.push(new PolicyGroup($event.name, $event.col, $event.pol));
  }

  onEdit(name:string, col:string, pol:string){
    this.pfComponent.showup();
    this.pfComponent.setDefaultValue(name,col, pol);
    this.createElRef.nativeElement.innerHTML = this.cancelInnerHTML;

  }
}
