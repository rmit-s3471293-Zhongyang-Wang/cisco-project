import { Component,AfterViewInit, ViewChild} from '@angular/core';
import { ApplicationFormComponent} from './createapplication.component';
import { SubApplication } from './subapplication';
import { NewRouterComponent} from './subRouter.component';

@Component({
    selector:'apply-sub',
    templateUrl:'./template/apply-sub-template.html',
    directives:[ApplicationFormComponent,NewRouterComponent],
    providers:[]
 })
export class ApplySubscriptionComponent implements AfterViewInit{
	 
   errorMessage: string;
   constructor () {}

   private createInnerHTML:string = "Create Subscription &nbsp; &nbsp;<span class='glyphicon glyphicon-chevron-down'></span>";
   private cancelInnerHTML:string = "Cancel Creation &nbsp; &nbsp;<span class='glyphicon glyphicon-chevron-up'></span>";

    @ViewChild(ApplicationFormComponent) private pfComponent:ApplicationFormComponent;
    @ViewChild(NewRouterComponent)private npdComponent:NewRouterComponent;

   //TODO use GET to ask for data
   subapps: SubApplication[] = [new SubApplication(["R1","R2"], "SUB1", true),  
       new SubApplication(["R1","R3"], "SUB2", false),
       new SubApplication(["R4","R7"], "SUB3", true)];

       showCreateRouterDialog(){
           this.npdComponent.showup();
       }

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
  }

  	/* update policy groups table after server-end data updated*/
  	onUpdated(){
  	}

}
