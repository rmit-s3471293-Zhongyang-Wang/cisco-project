import { Component,AfterViewInit, ViewChild} from '@angular/core';
import { Subscription } from './subscription';
import { SubscriptionFormComponent } from './createsubscription.component';
import { NewSensorDialogComponent } from './sensordialog.component';
import { SubscriptionService } from './subscription.service'

@Component({
    selector:'subscription',
    templateUrl:'./template/subscription-template.html',
    directives:[SubscriptionFormComponent,NewSensorDialogComponent],
    providers:[SubscriptionService]
 })
export class SubscriptionComponent implements AfterViewInit{
  	errorMessage: string;
  	subscriptions: Subscription[];

    @ViewChild(SubscriptionFormComponent)   private sfComponent:SubscriptionFormComponent;
    @ViewChild(NewSensorDialogComponent)    private nsdComponent:NewSensorDialogComponent;
    @ViewChild('createButton')createElRef:any

    private createInnerHTML:string = "Create Subscription &nbsp; &nbsp;<span class='glyphicon glyphicon-chevron-down'></span>";
    private cancelInnerHTML:string = "Cancel Creation &nbsp; &nbsp;<span class='glyphicon glyphicon-chevron-up'></span>";

    //inject services
    constructor(private subService:SubscriptionService){}


  	showCreateSensorDialog(){
        this.nsdComponent.showup();
	  }

    getSubscriptions() {
      //TODO use GET service to fetch data from back-end
      this.subscriptions = [new Subscription("sub1","group1","sensor1", 5),new Subscription("sub2","group2","sensor2", 15)]
    }

  	toggleSfComponent(event:any){
        this.sfComponent.toggle();
        var target = event.target || event.srcElement || event.currentTarget;
        if(target.innerHTML.indexOf("Cancel")>=0){
          target.innerHTML = this.createInnerHTML;

        }else{
          target.innerHTML = this.cancelInnerHTML;

      }
	}

	ngAfterViewInit() {
      this.nsdComponent.closeDialog();
		  this.getSubscriptions();
  }

  	/* update policy groups table after server-end data updated*/
  	onUpdated(){
  		this.getSubscriptions();
      this.createElRef.nativeElement.innerHTML = this.createInnerHTML;
  	}


  onEdit(name:string, destGroup:string, sensorGroup:string, interval:number){
    this.sfComponent.showup();
    this.sfComponent.setDefaultValue(name,destGroup, sensorGroup, interval);
    this.createElRef.nativeElement.innerHTML = this.cancelInnerHTML;
  }

}
